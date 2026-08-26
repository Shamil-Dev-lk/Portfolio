"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import AuthGuard from "@/components/admin/AuthGuard";
import { MessageSquareQuote, Plus, Edit2, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Testimonials
  const fetchTestimonials = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setTestimonials(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Delete Testimonial
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    
    const { error } = await supabase.from('testimonials').delete().eq('id', id);
    if (!error) {
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  // Add dummy testimonial
  const handleAddDummyTestimonial = async () => {
    const newTest = {
      client_name: "John Doe",
      role: "CEO",
      company: "Acme Corp",
      content: "Amazing work, highly recommended!",
      rating: 5,
      status: "PUBLISHED"
    };
    
    const { data, error } = await supabase.from('testimonials').insert([newTest]).select();
    if (data) {
      setTestimonials([data[0], ...testimonials]);
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
                <h1 className="text-2xl font-extrabold text-gray-900">Testimonials</h1>
                <p className="text-sm text-gray-500 mt-1">Manage client reviews shown on your homepage.</p>
              </div>
              <button onClick={handleAddDummyTestimonial} className="bg-brand-primary hover:bg-brand-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" /> Add Testimonial
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50 text-gray-500 text-[11px] uppercase tracking-wider font-bold border-b border-gray-100">
                      <th className="px-6 py-4">Client</th>
                      <th className="px-6 py-4">Review</th>
                      <th className="px-6 py-4">Rating</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">Loading testimonials...</td>
                      </tr>
                    ) : testimonials.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                          <MessageSquareQuote className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                          <h3 className="font-bold text-gray-900 text-lg mb-1">No Testimonials Found</h3>
                          <p className="max-w-sm mx-auto">You haven't added any client reviews yet.</p>
                        </td>
                      </tr>
                    ) : (
                      testimonials.map((test) => (
                        <tr key={test.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img src={test.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(test.client_name)}&background=random`} alt={test.client_name} className="w-8 h-8 rounded-full object-cover" />
                              <div>
                                <div className="text-sm font-bold text-gray-900">{test.client_name}</div>
                                <div className="text-[10px] text-gray-500">{test.role || test.company || "Client"}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-xs text-gray-600 max-w-sm truncate">{test.content}</div>
                          </td>
                          <td className="px-6 py-4 text-sm font-bold text-yellow-500">{test.rating}/5</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-bold tracking-wide ${
                              test.status === "PUBLISHED" ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-700"
                            }`}>
                              {test.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button className="p-2 text-gray-400 hover:text-brand-primary bg-gray-50 hover:bg-brand-primary/10 rounded transition-colors">
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button onClick={() => handleDelete(test.id)} className="p-2 text-gray-400 hover:text-red-600 bg-gray-50 hover:bg-red-50 rounded transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
