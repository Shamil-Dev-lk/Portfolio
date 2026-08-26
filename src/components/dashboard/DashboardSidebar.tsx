"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  CalendarDays, 
  FolderKanban, 
  MessageSquare, 
  Receipt, 
  FileText, 
  Bell, 
  Settings, 
  LogOut 
} from "lucide-react";

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'My Bookings', href: '/dashboard/bookings', icon: CalendarDays },
  { name: 'My Projects', href: '/dashboard/projects', icon: FolderKanban },
  { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
  { name: 'Invoices', href: '/dashboard/invoices', icon: Receipt },
  { name: 'Reports', href: '/dashboard/reports', icon: FileText },
  { name: 'Notifications', href: '/dashboard/notifications', icon: Bell },
  { name: 'Profile & Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <Link href="/" className="text-xl font-bold text-brand-dark flex items-center">
          <span className="text-brand-primary">Shamil</span>Dev
        </Link>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`
                        group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
                        ${isActive 
                          ? 'bg-brand-primary/10 text-brand-primary' 
                          : 'text-text-secondary hover:text-brand-primary hover:bg-gray-50'
                        }
                      `}
                    >
                      <item.icon
                        className={`h-6 w-6 shrink-0 ${isActive ? 'text-brand-primary' : 'text-gray-400 group-hover:text-brand-primary'}`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          
          <li className="mt-auto">
            <button className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-text-secondary hover:text-red-600 hover:bg-red-50 w-full text-left transition-colors">
              <LogOut className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-red-600" aria-hidden="true" />
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
