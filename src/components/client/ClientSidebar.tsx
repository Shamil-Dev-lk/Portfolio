
"use client";

import { 
  Briefcase, Calendar, FileText, LayoutDashboard, LogOut, 
  CreditCard, MessageSquare, Bell, User, ChevronDown 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientSidebar({ user }: { user: any }) {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Projects", href: "/dashboard/projects", icon: Briefcase },
    { name: "My Bookings", href: "/dashboard/bookings", icon: Calendar },
    { name: "Invoices", href: "/dashboard/invoices", icon: FileText },
    { name: "Payments", href: "/dashboard/payments", icon: CreditCard },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare, badge: 3 },
    { name: "Notifications", href: "/dashboard/notifications", icon: Bell, badge: 4 },
    { name: "Profile", href: "/dashboard/profile", icon: User }
  ];

  return (
    <div className="w-full md:w-64 bg-[#1a1c23] text-gray-300 p-4 flex flex-col h-auto md:h-screen sticky top-0 flex-shrink-0 overflow-y-auto custom-scrollbar">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-3 mb-8 px-2 mt-2">
        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold italic">
          S
        </div>
        <div>
          <span className="text-white font-bold text-lg leading-tight block">ShamilDev</span>
          <span className="text-xs text-gray-400 block">Client Panel</span>
        </div>
      </Link>

      {/* Client Profile Widget */}
      <div className="flex items-center gap-3 mb-8 px-2 pb-6 border-b border-gray-800">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm overflow-hidden">
           {user?.name?.substring(0, 2).toUpperCase() || "CL"}
        </div>
        <div className="flex-1">
          <span className="text-white font-bold text-sm block truncate">{user?.name || "Client"}</span>
          <span className="text-xs text-gray-400 block">Client</span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>

      {/* Navigation */}
      <nav className="space-y-1 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`flex items-center px-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                isActive 
                  ? "bg-[#00a82d] text-white shadow-lg shadow-green-900/20" 
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <item.icon className={`w-4 h-4 mr-3 ${isActive ? "text-white" : "text-gray-400"}`} /> 
              <span className="flex-1">{item.name}</span>
              {item.badge && (
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-white text-[#00a82d]" : "bg-[#00a82d] text-white"}`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="mt-8 pt-4 border-t border-gray-800 pb-4">
         <button onClick={() => { document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"; window.location.href = "/login"; }} className="flex w-full items-center px-3 py-2.5 text-gray-400 hover:bg-red-900/30 hover:text-red-400 rounded-lg font-medium text-sm transition-colors">
           <LogOut className="w-4 h-4 mr-3" /> Logout
         </button>
      </div>
    </div>
  );
}

