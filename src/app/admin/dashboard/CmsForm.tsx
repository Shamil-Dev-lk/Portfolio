"use client";

import { Save } from "lucide-react";
import { useState, useEffect } from "react";

export default function CmsForm() {
  const [cmsData, setCmsData] = useState({ heroTitle: "", heroSubtitle: "" });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetch("/api/content/read").then(res => res.json()).then(data => setCmsData(data)).catch(console.error);
  }, []);

  const handleCmsSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cmsData)
      });
      alert("Homepage updated successfully!");
    } catch (err) {
      alert("Failed to update homepage");
    }
    setIsSaving(false);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-10">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="font-bold text-gray-900">Website Content Manager</h3>
        <p className="text-sm text-gray-500 mt-1">Live edit the text on your public homepage.</p>
      </div>
      <div className="p-6">
        <form onSubmit={handleCmsSave} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Hero Title</label>
            <input 
              type="text" 
              value={cmsData.heroTitle}
              onChange={e => setCmsData({...cmsData, heroTitle: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
            />
            <p className="text-xs text-gray-500 mt-1">Note: The last word will be highlighted in green.</p>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Hero Subtitle</label>
            <textarea 
              value={cmsData.heroSubtitle}
              onChange={e => setCmsData({...cmsData, heroSubtitle: e.target.value})}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
            />
          </div>
          <button 
            type="submit" 
            disabled={isSaving}
            className="bg-brand-primary hover:bg-brand-dark text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {isSaving ? "Saving..." : "Publish Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
