import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import AuthGuard from "@/components/admin/AuthGuard";
import Link from "next/link";
import { Users, Mail, Phone, ExternalLink } from "lucide-react";

export default function AdminClientsPage() {
  const clients = await prisma.user.findMany({
    where: { role: "CLIENT" },
    orderBy: { createdAt: "desc" },
    include: {
      _count: {
        select: { projects: true, invoices: true }
      }
    }
  });

  return (
    <AuthGuard><div className="min-h-screen bg-[#f3f4f6] flex flex-col md:flex-row font-sans">
      <AdminSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <AdminTopNav />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Clients</h1>
              <p className="text-sm text-gray-500 mt-1">Manage all registered clients across the platform.</p>
            </div></AuthGuard>
          </div></AuthGuard>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-3 font-medium">Client Info</th>
                  <th className="px-6 py-3 font-medium">Contact</th>
                  <th className="px-6 py-3 font-medium">Company</th>
                  <th className="px-6 py-3 font-medium">Projects</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clients.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 text-lg mb-1">No Clients Found</h3>
                      <p className="max-w-sm mx-auto">Nobody has registered on the platform yet.</p>
                    </td>
                  </tr>
                ) : (
                  clients.map((client) => (
                    <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-900">{client.name}</div></AuthGuard>
                        <div className="text-xs text-gray-500 mt-0.5">Joined {new Date(client.createdAt).toLocaleDateString()}</div></AuthGuard>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Mail className="w-3 h-3 text-gray-400" /> {client.email}
                        </div></AuthGuard>
                        {client.whatsapp && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="w-3 h-3 text-brand-primary" /> {client.whatsapp}
                          </div></AuthGuard>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {client.company || <span className="text-gray-400 italic">None</span>}
                        {client.country && <div className="text-xs text-gray-500">{client.country}</div>}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-bold">
                        {client._count.projects}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          client.status === "ACTIVE" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right text-sm">
                        <button className="text-brand-primary hover:text-brand-dark font-bold text-xs bg-brand-primary/10 hover:bg-brand-primary/20 px-3 py-1.5 rounded transition-colors flex items-center gap-1 ml-auto">
                          View <ExternalLink className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div></AuthGuard>
        </div></AuthGuard>
        </div></AuthGuard>
      </div></AuthGuard>
    </div></AuthGuard>
  );
}
