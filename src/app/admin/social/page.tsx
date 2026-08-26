import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import { Link2, Plus, Edit2, Trash2 } from "lucide-react";

export default function AdminSocialPage() {
  const links = [
    { id: 1, platform: "LinkedIn", url: "https://linkedin.com/in/shamil", status: "ACTIVE" },
    { id: 2, platform: "GitHub", url: "https://github.com/shamil", status: "ACTIVE" },
    { id: 3, platform: "Instagram", url: "https://instagram.com/shamil", status: "HIDDEN" }
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col md:flex-row font-sans">
      <AdminSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <AdminTopNav />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Social Links</h1>
              <p className="text-sm text-gray-500 mt-1">Manage external links in your footer and contact section.</p>
            </div>
            <button className="bg-brand-primary hover:bg-brand-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Link
            </button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10 max-w-4xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-500 text-[11px] uppercase tracking-wider font-bold border-b border-gray-100">
                    <th className="px-6 py-4">Platform</th>
                    <th className="px-6 py-4">URL</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {links.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                        <Link2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="font-bold text-gray-900 text-lg mb-1">No Links Found</h3>
                        <p className="max-w-sm mx-auto">You haven't added any social links yet.</p>
                      </td>
                    </tr>
                  ) : (
                    links.map((link) => (
                      <tr key={link.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="text-sm font-bold text-gray-900">{link.platform}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <a href={link.url} target="_blank" className="hover:text-brand-primary hover:underline">{link.url}</a>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-bold tracking-wide ${
                            link.status === "ACTIVE" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                          }`}>
                            {link.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="p-2 text-gray-400 hover:text-brand-primary bg-gray-50 hover:bg-brand-primary/10 rounded transition-colors">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-600 bg-gray-50 hover:bg-red-50 rounded transition-colors">
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
  );
}
