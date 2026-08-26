"use client";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
export default function Page() {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <AdminSidebar />
      <div className="lg:ml-64 transition-all duration-300">
        <AdminTopNav user={{ name: "Admin", email: "admin@example.com" }} />
        <div className="p-4 sm:p-6 lg:p-8 mt-16 lg:mt-0">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Under Construction</h2>
            <p className="text-gray-500">This admin feature is being rewritten for static export.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
