
"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, X } from "lucide-react";
import { useRouter } from "next/navigation";

export function AddServiceButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const status = formData.get("status") as string;

    try {
      await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price: price ? parseFloat(price) : null, status })
      });
      setIsOpen(false);
      router.refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="bg-brand-primary hover:bg-brand-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
        <Plus className="w-4 h-4" /> Add Service
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Add New Service</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Service Name</label>
                <input required name="name" type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-brand-primary" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
                <textarea name="description" rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-brand-primary"></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Price (LKR)</label>
                  <input name="price" type="number" className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-brand-primary" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Status</label>
                  <select name="status" className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-brand-primary">
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>
              </div>
              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
                <button type="submit" disabled={loading} className="px-5 py-2 text-sm font-bold text-white bg-brand-primary hover:bg-brand-dark rounded-lg disabled:opacity-50">
                  {loading ? "Saving..." : "Save Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export function ServiceRowActions({ serviceId }: { serviceId: string }) {
  const router = useRouter();
  
  async function handleDelete() {
    if (confirm("Are you sure you want to delete this service?")) {
      await fetch(`/api/admin/services?id=${serviceId}`, { method: "DELETE" });
      router.refresh();
    }
  }

  return (
    <div className="flex justify-end gap-3">
      <button className="p-2 text-gray-400 hover:text-brand-primary bg-gray-50 hover:bg-brand-primary/10 rounded-lg transition-colors">
        <Edit2 className="w-4 h-4" />
      </button>
      <button onClick={handleDelete} className="p-2 text-gray-400 hover:text-red-600 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}

