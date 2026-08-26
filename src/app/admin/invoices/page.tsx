"use client";
import AuthGuard from "@/components/admin/AuthGuard";
"use client";
import AuthGuard from "@/components/admin/AuthGuard";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AuthGuard from "@/components/admin/AuthGuard";
import Link from "next/link";
import { Plus, Download, Eye, FileText, CheckCircle2 } from "lucide-react";

// Server component
export default function AdminInvoicesPage() {
  const invoices = await prisma.invoice.findMany({
    include: {
      client: { select: { name: true, email: true } },
      project: { select: { name: true } }
    },
    orderBy: { createdAt: "desc" }
  });

  return (
    <AuthGuard><AuthGuard><div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <AdminSidebar />
      <div className="flex-1 p-8 overflow-y-auto h-screen">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Invoices</h1>
            <p className="text-sm text-gray-500 mt-1">Manage and generate client invoices.</p>
          </div></AuthGuard>
          <button className="bg-brand-primary hover:bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Create Invoice
          </button>
        </div></AuthGuard>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-3 font-medium">Invoice No.</th>
                  <th className="px-6 py-3 font-medium">Client</th>
                  <th className="px-6 py-3 font-medium">Amount</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Due Date</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {invoices.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 text-lg mb-1">No Invoices Found</h3>
                      <p className="max-w-sm mx-auto">There are no invoices in the database yet. Create one to get started.</p>
                    </td>
                  </tr>
                ) : (
                  invoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-brand-primary">{inv.invoiceNumber}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {inv.client.name}
                        <div className="text-xs text-gray-500 font-normal">{inv.client.email}</div></AuthGuard>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">${inv.total.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          inv.status === "PAID" ? "bg-green-100 text-green-800" :
                          inv.status === "SENT" ? "bg-blue-100 text-blue-800" :
                          inv.status === "OVERDUE" ? "bg-red-100 text-red-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{new Date(inv.dueDate).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-right text-sm">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/dashboard/invoices/${inv.id}`} className="p-2 text-gray-400 hover:text-brand-primary bg-gray-50 hover:bg-brand-primary/10 rounded transition-colors" title="View">
                            <Eye className="w-4 h-4" />
                          </Link>
                          <button onClick={() => window.open(`/dashboard/invoices/${inv.id}`, '_blank')} className="p-2 text-gray-400 hover:text-brand-primary bg-gray-50 hover:bg-brand-primary/10 rounded transition-colors" title="Download PDF">
                            <Download className="w-4 h-4" />
                          </button>
                        </div></AuthGuard>
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
  );
}

