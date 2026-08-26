"use client";

import { 
  Users, Briefcase, Calendar, FileText, LayoutDashboard, LogOut, 
  CreditCard, MessageSquare, Star, Image, Bell, MessageCircle, 
  Settings, User, ChevronDown, Award, PenTool, Link2, MonitorPlay
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  
  const dashboardItems = [
    { name: "Overview", href: "/admin/dashboard", icon: LayoutDashboard }
  ];

  const businessItems = [
    { name: "Clients", href: "/admin/clients", icon: Users },
    { name: "Bookings", href: "/admin/bookings", icon: Calendar, badge: 8 },
    { name: "Projects", href: "/admin/projects", icon: Briefcase },
    { name: "Services", href: "/admin/services", icon: PenTool },
    { name: "Invoices", href: "/admin/invoices", icon: FileText },
    { name: "Payments", href: "/admin/payments", icon: CreditCard },
    { name: "Messages", href: "/admin/messages", icon: MessageSquare, badge: 5 }
  ];

  const contentItems = [
    { name: "Hero & About", href: "/admin/settings", icon: Settings },
    { name: "Skills", href: "/admin/skills", icon: Star },
    { name: "Portfolio", href: "/admin/portfolio", icon: Image },
    { name: "Certificates", href: "/admin/certificates", icon: Award },
    { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
    { name: "Social Links", href: "/admin/social", icon: Link2 }
  ];

  const systemItems = [
    { name: "Notifications", href: "/admin/notifications", icon: Bell },
    { name: "WhatsApp Sync", href: "/admin/whatsapp", icon: MessageCircle },
    { name: "Profile", href: "/admin/profile", icon: User }
  ];

  const NavGroup = ({ title, items }: { title: string, items: any[] }) => (
    <div className="mb-6">
      <h3 className="px-3 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{title}</h3>
      <div className="space-y-1">
        {items.map((item) => {
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
              <item.icon className={`w-4 h-4 mr-3 ${isActive ? 'text-white' : 'text-gray-400'}`} /> 
              <span className="flex-1">{item.name}</span>
              {item.badge && (
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-white text-[#00a82d]' : 'bg-[#00a82d] text-white'}`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full md:w-64 bg-[#1a1c23] text-gray-300 p-4 flex flex-col h-auto md:h-screen sticky top-0 flex-shrink-0 overflow-y-auto custom-scrollbar">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-3 mb-8 px-2 mt-2">
        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold italic">
          S
        </div>
        <div>
          <span className="text-white font-bold text-lg leading-tight block">ShamilDev</span>
          <span className="text-xs text-gray-400 block">Developer & Designer</span>
        </div>
      </Link>

      {/* Admin Profile Widget */}
      <div className="flex items-center gap-3 mb-8 px-2 pb-6 border-b border-gray-800">
        <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
          SD
        </div>
        <div className="flex-1">
          <span className="text-white font-bold text-sm block">Shamil Dev</span>
          <span className="text-xs text-gray-400 block">Administrator</span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <NavGroup title="Dashboard" items={dashboardItems} />
        <NavGroup title="Business" items={businessItems} />
        <NavGroup title="Website Content" items={contentItems} />
        <NavGroup title="System" items={systemItems} />
      </nav>

      {/* Logout */}
      <div className="mt-8 pt-4 border-t border-gray-800 pb-4">
         <button onClick={async () => { 
           const { supabase } = await import("@/lib/supabase");
           await supabase.auth.signOut();
           window.location.href = "/login"; 
         }} className="flex w-full items-center px-3 py-2.5 text-gray-400 hover:bg-red-900/30 hover:text-red-400 rounded-lg font-medium text-sm transition-colors">
           <LogOut className="w-4 h-4 mr-3" /> Logout
         </button>
      </div>
    </div>
  );
}
