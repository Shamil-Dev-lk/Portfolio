import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import { Bell, Briefcase, FileText, CheckCircle2 } from "lucide-react";

export default function AdminNotificationsPage() {
  const notifications = [
    { id: 1, title: "New Booking Request", desc: "John Smith submitted a new booking for Web Development.", time: "10 mins ago", icon: Briefcase, color: "text-blue-500", bg: "bg-blue-50", isRead: false },
    { id: 2, title: "Invoice Paid", desc: "Invoice INV-2026-0042 has been paid via Bank Transfer.", time: "2 hours ago", icon: FileText, color: "text-green-500", bg: "bg-green-50", isRead: true },
    { id: 3, title: "Project Completed", desc: "Corporate Portal project has reached 100% progress.", time: "1 day ago", icon: CheckCircle2, color: "text-purple-500", bg: "bg-purple-50", isRead: true }
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col md:flex-row font-sans">
      <AdminSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <AdminTopNav />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Notifications</h1>
              <p className="text-sm text-gray-500 mt-1">Recent system alerts and client activities.</p>
            </div>
            <button className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">
              Mark all as read
            </button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10">
            <div className="divide-y divide-gray-50">
              {notifications.map((notif) => (
                <div key={notif.id} className={`p-6 flex items-start gap-4 transition-colors ${notif.isRead ? 'bg-white' : 'bg-brand-primary/5 hover:bg-brand-primary/10 cursor-pointer'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notif.bg} ${notif.color}`}>
                    <notif.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className={`text-sm ${notif.isRead ? 'font-bold text-gray-700' : 'font-extrabold text-gray-900'}`}>{notif.title}</h3>
                      <span className="text-xs text-gray-400 font-medium">{notif.time}</span>
                    </div>
                    <p className={`text-sm ${notif.isRead ? 'text-gray-500' : 'text-gray-700'}`}>{notif.desc}</p>
                  </div>
                  {!notif.isRead && <div className="w-2.5 h-2.5 rounded-full bg-brand-primary mt-1.5 shadow-sm"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
