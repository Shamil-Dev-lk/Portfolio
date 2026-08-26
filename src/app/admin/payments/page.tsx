import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import AuthGuard from "@/components/admin/AuthGuard";
import { CreditCard, Plus, Download, CheckCircle2 } from "lucide-react";

export default function AdminPaymentsPage() {
  const payments = await prisma.payment.findMany({
    orderBy: { paidAt: "desc" },
    include: {
      invoice: {
        include: {
          client: { select: { name: true } }
        }
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
              <h1 className="text-2xl font-extrabold text-gray-900">Payments</h1>
              <p className="text-sm text-gray-500 mt-1">Track and record client payments.</p>
            </div></AuthGuard>
            <button className="bg-brand-primary hover:bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" /> Record Payment
            </button>
          </div></AuthGuard>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-500 text-[11px] uppercase tracking-wider font-bold border-b border-gray-100">
                    <th className="px-6 py-4">Transaction ID</th>
                    <th className="px-6 py-4">Client</th>
                    <th className="px-6 py-4">Invoice</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Method</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {payments.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                        <CreditCard className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="font-bold text-gray-900 text-lg mb-1">No Payments Found</h3>
                        <p className="max-w-sm mx-auto">Record a payment manually or integrate a payment gateway.</p>
                      </td>
                    </tr>
                  ) : (
                    payments.map((payment) => (
                      <tr key={payment.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">{payment.reference || payment.id.split('-')[0]}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{payment.invoice?.client?.name || "Unknown"}</td>
                        <td className="px-6 py-4 text-sm text-brand-primary font-bold hover:underline cursor-pointer">
                          {payment.invoice?.invoiceNumber}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">Rs. {payment.amount.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded text-[10px] font-bold tracking-wide">
                            {payment.method.replace("_", " ")}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">{new Date(payment.paidAt).toLocaleDateString()}</td>
                        <td className="px-6 py-4 text-right">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            payment.status === "COMPLETED" ? "bg-green-50 text-green-700" :
                            payment.status === "PENDING" ? "bg-orange-50 text-orange-700" :
                            "bg-red-50 text-red-700"
                          }`}>
                            {payment.status === "COMPLETED" && <CheckCircle2 className="w-3.5 h-3.5" />}
                            {payment.status}
                          </span>
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
