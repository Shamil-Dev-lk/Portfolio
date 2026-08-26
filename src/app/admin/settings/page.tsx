
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import CmsForm from "../dashboard/CmsForm";

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col md:flex-row font-sans">
      <AdminSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <AdminTopNav />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900">Website Settings</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your homepage content and global platform configurations.</p>
          </div>
          
          <div className="max-w-3xl">
             <CmsForm />
          </div>
        </div>
      </div>
    </div>
  );
}

