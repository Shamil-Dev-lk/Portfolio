import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import { User, Mail, Shield, Key, Save } from "lucide-react";

export default function AdminProfilePage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col md:flex-row font-sans">
      <AdminSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <AdminTopNav />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900">Administrator Profile</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your personal information and security settings.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Col - Avatar & Overview */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4 shadow-inner">
                  SD
                </div>
                <h2 className="text-xl font-bold text-gray-900">Shamil Dev</h2>
                <p className="text-sm text-gray-500 font-medium mb-4">Administrator</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold">
                  <Shield className="w-3.5 h-3.5" /> Full Access
                </div>
              </div>
            </div>

            {/* Right Col - Forms */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-400" /> Personal Information
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                      <input type="text" defaultValue="Shamil Dev" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm font-medium text-gray-900" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input type="email" defaultValue="admin@shamildev.com" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm font-medium text-gray-900" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end">
                    <button type="button" className="flex items-center gap-2 bg-[#00a82d] hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors">
                      <Save className="w-4 h-4" /> Save Changes
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Key className="w-5 h-5 text-gray-400" /> Security Settings
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">New Password</label>
                      <input type="password" placeholder="Leave blank to keep current" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Confirm New Password</label>
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
