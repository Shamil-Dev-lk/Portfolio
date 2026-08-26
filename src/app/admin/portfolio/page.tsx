"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import AuthGuard from "@/components/admin/AuthGuard";
import { Image as ImageIcon, Plus, Edit2, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminPortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Portfolio Items
  const fetchPortfolio = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('portfolio_items')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setPortfolioItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  // Delete Portfolio Item
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    
    const { error } = await supabase.from('portfolio_items').delete().eq('id', id);
    if (!error) {
      setPortfolioItems(portfolioItems.filter(p => p.id !== id));
    }
  };

  // Add dummy project
  const handleAddDummyProject = async () => {
    const newProject = {
      title: "New E-Commerce Site",
      category: "Web Development",
      description: "A custom built e-commerce solution.",
      date: "2026",
      status: "PUBLISHED"
    };
    
    const { data, error } = await supabase.from('portfolio_items').insert([newProject]).select();
    if (data) {
      setPortfolioItems([data[0], ...portfolioItems]);
    }
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-[#f3f4f6] flex flex-col md:flex-row font-sans">
        <AdminSidebar />
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <AdminTopNav />
          <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900">Portfolio</h1>
                <p className="text-sm text-gray-500 mt-1">Manage past projects showcased on your homepage.</p>
              </div>
              <button onClick={handleAddDummyProject} className="bg-brand-primary hover:bg-brand-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" /> Add Project
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {loading ? (
                 <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-2xl border border-gray-100">
                   Loading projects...
                 </div>
              ) : portfolioItems.length === 0 ? (
                 <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-2xl border border-gray-100">
                   No portfolio projects found. Click "Add Project" to create one.
                 </div>
              ) : (
                portfolioItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col">
                    <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      ) : (
                        <ImageIcon className="w-12 h-12 text-gray-300" />
                      )}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-10">
                        <button className="p-2 bg-white rounded-full text-gray-900 hover:text-brand-primary shadow-sm"><Edit2 className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(item.id)} className="p-2 bg-white rounded-full text-gray-900 hover:text-red-600 shadow-sm"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-900 line-clamp-1 flex-1 mr-2">{item.title}</h3>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide ${
                          item.status === "PUBLISHED" ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-700"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-500 font-medium mt-auto pt-2">
                        <span className="truncate">{item.category}</span>
                        <span className="flex-shrink-0 ml-2">{item.date || "No date"}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
