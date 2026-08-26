"use client";
import AuthGuard from "@/components/admin/AuthGuard";
import ClientSidebar from "@/components/client/ClientSidebar";
import ClientTopNav from "@/components/client/ClientTopNav";



import { User, Mail, Phone, MapPin, Key, Save } from "lucide-react";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "shamil_super_secret_dev_key_2026");

export default function Page() { const bookings = []; const clients = []; const projects = []; const invoices = []; const payments = []; const messages = []; const user = null; const recentBookings = []; const recentInvoices = []; const activeProject = null; return (
    <AuthGuard><div className="min-h-screen bg-[#f9f9fb] flex flex-col md:flex-row font-sans">
      <ClientSidebar user={user} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <ClientTopNav user={user} />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900">My Profile</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your account details and contact information.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Col - Avatar & Overview */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-3xl mb-4 shadow-inner border-4 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
                  {user?.name?.substring(0, 2).toUpperCase() || "CL"}
                </div>
                <h2 className="text-xl font-bold text-gray-900">{user?.name}</h2>
                <p className="text-sm text-gray-500 font-medium mb-4">{user?.company || "Independent Client"}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold">
                  Active Member
                </div>
              </div>
            </div>

            {/* Right Col - Forms */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-400" /> Account Information
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                      <input type="text" defaultValue={user?.name || ""} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm font-medium text-gray-900" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Company (Optional)</label>
                      <input type="text" defaultValue={user?.company || ""} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm font-medium text-gray-900" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input type="email" defaultValue={user?.email} disabled className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 outline-none text-sm font-medium text-gray-500" />
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">Email cannot be changed.</p>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp / Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input type="text" defaultValue={user?.whatsapp || ""} className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm font-medium text-gray-900" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end">
                    <button type="button" className="flex items-center gap-2 bg-[#00a82d] hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors">
                      <Save className="w-4 h-4" /> Save Profile
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Key className="w-5 h-5 text-gray-400" /> Security
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">New Password</label>
                      <input type="password" placeholder="Leave blank to keep current" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Confirm Password</label>
                      <input type="password" placeholder="Leave blank to keep current" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm" />
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end">
                    <button type="button" className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors">
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

