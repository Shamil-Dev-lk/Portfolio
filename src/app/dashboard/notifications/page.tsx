import ClientSidebar from "@/components/client/ClientSidebar";
import ClientTopNav from "@/components/client/ClientTopNav";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { Bell, Briefcase, FileText, CheckCircle2 } from "lucide-react";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "shamil_super_secret_dev_key_2026");

export default async function ClientNotificationsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  
  if (!token) return <div>Unauthorized</div>;

  let payload;
  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    payload = verified.payload;
  } catch (e) {
    return <div>Unauthorized</div>;
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.userId as string }
  });

  const notifications = [
    { id: 1, title: "Invoice Paid", desc: "Your invoice INV-2026-0042 has been marked as paid.", time: "2 hours ago", icon: CheckCircle2, color: "text-green-500", bg: "bg-green-50", isRead: false },
    { id: 2, title: "Project Updated", desc: "Your project 'Business Website' has moved to Testing phase.", time: "1 day ago", icon: Briefcase, color: "text-blue-500", bg: "bg-blue-50", isRead: true },
    { id: 3, title: "New Invoice Available", desc: "A new invoice INV-2026-0043 has been generated for your account.", time: "3 days ago", icon: FileText, color: "text-orange-500", bg: "bg-orange-50", isRead: true }
  ];

  return (
    <div className="min-h-screen bg-[#f9f9fb] flex flex-col md:flex-row font-sans">
      <ClientSidebar user={user} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <ClientTopNav user={user} />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Notifications</h1>
              <p className="text-sm text-gray-500 mt-1">Updates on your projects and account.</p>
            </div>
            <button className="text-sm font-bold text-brand-primary hover:text-brand-dark transition-colors">
              Mark all as read
            </button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10 max-w-4xl">
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
