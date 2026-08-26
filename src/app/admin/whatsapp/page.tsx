import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import { MessageCircle, CheckCircle2, Save, Smartphone } from "lucide-react";

export default function AdminWhatsappPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col md:flex-row font-sans">
      <AdminSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <AdminTopNav />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-green-500" /> WhatsApp Integration
            </h1>
            <p className="text-sm text-gray-500 mt-1">Configure automated WhatsApp notifications for your clients.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Settings Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">API Configuration</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp Business API Key</label>
                  <input type="password" defaultValue="wk_prod_8932479823749823" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-sm font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Sender Phone Number ID</label>
                  <input type="text" defaultValue="1049382948392" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-sm font-medium" />
                </div>
                
                <h3 className="font-bold text-gray-900 mt-8 mb-4 border-b border-gray-100 pb-4 pt-4">Automated Triggers</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500" />
                    <span className="text-sm font-medium text-gray-700">Send message when Booking is Approved</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500" />
                    <span className="text-sm font-medium text-gray-700">Send message when Project is Completed</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500" />
                    <span className="text-sm font-medium text-gray-700">Send message when Invoice is Sent</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500" />
                    <span className="text-sm font-medium text-gray-700">Send message when Invoice is Overdue</span>
                  </label>
                </div>

                <div className="pt-6">
                  <button type="button" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors w-full justify-center">
                    <Save className="w-4 h-4" /> Save Configuration
                  </button>
                </div>
              </form>
            </div>

            {/* Preview Device */}
            <div className="flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <div className="w-72 h-[600px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-xl overflow-hidden relative flex flex-col">
                <div className="w-full h-16 bg-[#075E54] text-white px-4 py-3 flex items-center gap-3 shadow-md z-10">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#075E54] font-bold">S</div>
                  <div>
                    <div className="font-bold text-sm leading-tight">ShamilDev</div>
                    <div className="text-[10px] opacity-80">business account</div>
                  </div>
                </div>
                <div className="flex-1 bg-[#ECE5DD] p-4 relative" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: 'cover' }}>
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-sm text-gray-800 relative mb-4">
                    <p className="font-bold mb-2">Hello John Smith,</p>
                    <p className="mb-2">Your invoice has been created.</p>
                    <div className="bg-gray-50 border border-gray-100 p-2 rounded mb-2 font-mono text-xs text-gray-600">
                      Invoice: INV-2026-0042<br/>
                      Amount: Rs. 75,000.00<br/>
                      Due Date: 2026-05-25
                    </div>
                    <p className="mb-2">Please check your Client Dashboard for the invoice and payment details.</p>
                    <p>Thank you,<br/>ShamilDev</p>
                    <span className="text-[9px] text-gray-400 absolute bottom-1 right-2">10:30 AM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
