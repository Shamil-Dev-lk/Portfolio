import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function InvoicePreview({ params }: { params: { id: string } }) {
  const invoice = await prisma.invoice.findUnique({
    where: { id: params.id },
    include: {
      client: true,
      project: true,
    }
  });

  if (!invoice) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans print:bg-white print:py-0 print:px-0">
      
      {/* Action Bar - Hidden in Print */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <Link href="/dashboard" className="flex items-center text-sm font-bold text-gray-600 hover:text-brand-primary">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
        </Link>
        <button onClick={() => window.print()} className="flex items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white px-5 py-2 rounded-lg font-bold shadow-sm transition-colors text-sm">
          <Printer className="w-4 h-4" /> Download PDF
        </button>
      </div>

      {/* Invoice Paper */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl min-h-[1056px] print:shadow-none print:w-full print:min-h-0 print:m-0">
        
        {/* Header Block */}
        <div className="bg-[#1a1c23] text-white p-12 flex justify-between items-start print:bg-black print:text-white" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold italic text-xl">S</div>
              <div>
                <span className="text-white font-bold text-2xl leading-tight block">ShamilDev</span>
                <span className="text-sm text-gray-400 block">Developer & Designer</span>
              </div>
            </div>
            <div className="text-sm text-gray-300 space-y-1">
              <p>+94 77 123 4567</p>
              <p>hello@shamildev.com</p>
              <p>www.shamildev.com</p>
              <p>Nikaveratiya, Sri Lanka</p>
            </div>
          </div>
          
          <div className="text-right">
            <h1 className="text-4xl font-black tracking-wider mb-6">INVOICE</h1>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-right">
              <div className="text-gray-400 font-medium">Invoice No:</div>
              <div className="font-bold">{invoice.invoiceNumber}</div>
              <div className="text-gray-400 font-medium">Invoice Date:</div>
              <div className="font-bold">{new Date(invoice.createdAt).toLocaleDateString()}</div>
              <div className="text-gray-400 font-medium">Due Date:</div>
              <div className="font-bold">{new Date(invoice.dueDate).toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        {/* Bill To */}
        <div className="p-12 pb-8">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Bill To:</h3>
          <div className="text-gray-900">
            <p className="font-bold text-lg">{invoice.client.name}</p>
            <p className="text-gray-600 mt-1">{invoice.client.email}</p>
            {invoice.client.whatsapp && <p className="text-gray-600">{invoice.client.whatsapp}</p>}
          </div>
        </div>

        {/* Table */}
        <div className="px-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-y border-gray-200">
                <th className="py-4 font-bold text-gray-900 text-sm">Item</th>
                <th className="py-4 font-bold text-gray-900 text-sm">Description</th>
                <th className="py-4 font-bold text-gray-900 text-sm text-center">Qty</th>
                <th className="py-4 font-bold text-gray-900 text-sm text-right">Rate (LKR)</th>
                <th className="py-4 font-bold text-gray-900 text-sm text-right">Amount (LKR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-5 text-sm text-gray-900">1</td>
                <td className="py-5 text-sm text-gray-600">{invoice.project?.name || "Professional Services"}</td>
                <td className="py-5 text-sm text-gray-900 text-center">1</td>
                <td className="py-5 text-sm text-gray-900 text-right">{invoice.total.toFixed(2)}</td>
                <td className="py-5 text-sm font-bold text-gray-900 text-right">{invoice.total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="px-12 mt-8 flex justify-end">
          <div className="w-80">
            <div className="flex justify-between py-2 text-sm text-gray-600 border-b border-gray-100">
              <span>Subtotal</span>
              <span>{invoice.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 text-sm text-gray-600 border-b border-gray-100">
              <span>Discount</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between py-2 text-sm text-gray-600 border-b border-gray-200">
              <span>Tax (0%)</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between py-4 text-lg font-black text-gray-900 bg-gray-50 px-4 rounded-lg mt-2 print:bg-gray-100" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}>
              <span>Total</span>
              <span>Rs. {invoice.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-12 mt-20 pt-12 pb-12 flex justify-between items-end border-t border-gray-100">
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-2">Payment Information</h4>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Bank Transfer / Online Payment / Cash.<br/>
              Please make payment before the due date.
            </p>
            <p className="text-xs font-bold text-gray-400 mt-8 italic">Thank you for choosing ShamilDev!</p>
          </div>
          <div className="text-center flex flex-col items-center">
             <div className="font-signature text-4xl text-gray-800 mb-2 font-light italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
               Shamil Dev
             </div>
             <div className="border-t border-gray-300 pt-2 w-48 text-xs font-bold text-gray-400 uppercase tracking-widest">
               Developer & Designer
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
