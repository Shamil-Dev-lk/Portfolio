"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import AuthGuard from "@/components/admin/AuthGuard";
import { Award, Plus, Edit2, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminCertificatesPage() {
  const [certs, setCerts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Certificates
  const fetchCertificates = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('certifications')
      .select('*')
      .order('date', { ascending: false });
    
    if (data) setCerts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  // Delete Certificate
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this certificate?")) return;
    
    const { error } = await supabase.from('certifications').delete().eq('id', id);
    if (!error) {
      setCerts(certs.filter(c => c.id !== id));
    }
  };

  // Add dummy certificate
  const handleAddDummyCert = async () => {
    const newCert = {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2025",
      is_active: true
    };
    
    const { data, error } = await supabase.from('certifications').insert([newCert]).select();
    if (data) {
      setCerts([data[0], ...certs]);
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
                <h1 className="text-2xl font-extrabold text-gray-900">Certifications</h1>
                <p className="text-sm text-gray-500 mt-1">Manage your professional certificates.</p>
              </div>
              <button onClick={handleAddDummyCert} className="bg-brand-primary hover:bg-brand-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" /> Add Certificate
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50 text-gray-500 text-[11px] uppercase tracking-wider font-bold border-b border-gray-100">
                      <th className="px-6 py-4">Title</th>
                      <th className="px-6 py-4">Issuer</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">Loading certificates...</td>
                      </tr>
                    ) : certs.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                          <Award className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                          <h3 className="font-bold text-gray-900 text-lg mb-1">No Certificates Found</h3>
                          <p className="max-w-sm mx-auto">You haven't added any certificates yet.</p>
                        </td>
                      </tr>
                    ) : (
                      certs.map((cert) => (
                        <tr key={cert.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="text-sm font-bold text-gray-900">{cert.title}</div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cert.issuer}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cert.date}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-bold tracking-wide ${
                              cert.is_active ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                            }`}>
                              {cert.is_active ? "ACTIVE" : "HIDDEN"}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button className="p-2 text-gray-400 hover:text-brand-primary bg-gray-50 hover:bg-brand-primary/10 rounded transition-colors">
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button onClick={() => handleDelete(cert.id)} className="p-2 text-gray-400 hover:text-red-600 bg-gray-50 hover:bg-red-50 rounded transition-colors">
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
