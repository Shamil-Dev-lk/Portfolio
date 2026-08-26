"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import AuthGuard from "@/components/admin/AuthGuard";
import { PenTool, Plus, Edit2, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Services
  const fetchServices = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setServices(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Delete Service
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    
    const { error } = await supabase.from('services').delete().eq('id', id);
    if (!error) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  // Add dummy service
  const handleAddDummyService = async () => {
    const newService = {
      name: "New Custom Service",
      description: "A description of the new service.",
      price: 500.00,
      status: "ACTIVE"
    };
    
    const { data, error } = await supabase.from('services').insert([newService]).select();
    if (data) {
      setServices([data[0], ...services]);
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
                <h1 className="text-2xl font-extrabold text-gray-900">Services</h1>
                <p className="text-sm text-gray-500 mt-1">Manage the services you offer to clients.</p>
              </div>
              <button onClick={handleAddDummyService} className="bg-brand-primary hover:bg-brand-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" /> Add Service
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10 max-w-5xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50 text-gray-500 text-[11px] uppercase tracking-wider font-bold border-b border-gray-100">
                      <th className="px-6 py-4">Service</th>
                      <th className="px-6 py-4">Price</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {loading ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-gray-500">Loading services...</td>
                      </tr>
                    ) : services.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                          <PenTool className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                          <h3 className="font-bold text-gray-900 text-lg mb-1">No Services Found</h3>
                          <p className="max-w-sm mx-auto">You haven't added any services yet.</p>
                        </td>
                      </tr>
                    ) : (
                      services.map((service) => (
                        <tr key={service.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="text-sm font-bold text-gray-900 mb-1">{service.name}</div>
                            <div className="text-xs text-gray-500 line-clamp-1 max-w-md">{service.description}</div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                            {service.price ? `$${service.price}` : 'Custom'}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-bold tracking-wide ${
                              service.status === "ACTIVE" ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-700"
                            }`}>
                              {service.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button className="p-2 text-gray-400 hover:text-brand-primary bg-gray-50 hover:bg-brand-primary/10 rounded transition-colors">
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button onClick={() => handleDelete(service.id)} className="p-2 text-gray-400 hover:text-red-600 bg-gray-50 hover:bg-red-50 rounded transition-colors">
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
