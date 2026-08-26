import { Search, Bell, Menu } from "lucide-react";

export default function ClientTopNav({ user }: { user: any }) {
  return (
    <div className="w-full h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
      {/* Left: Menu */}
      <div className="flex items-center gap-6 flex-1">
        <button className="text-gray-500 hover:text-gray-900 md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Center: Client Pill */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="bg-[#00a82d] text-white px-6 py-2 rounded-lg font-bold tracking-wider text-sm shadow-md shadow-green-600/20">
          CLIENT DASHBOARD
        </div>
      </div>

      {/* Right: Notifications & Profile */}
      <div className="flex items-center justify-end gap-6 flex-1">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-600 relative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path strokeLinecap="round" strokeLinejoin="round" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
          </button>
          <button className="text-gray-400 hover:text-gray-600 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
        
        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-900 leading-tight truncate w-24">{user?.name || "Client"}</p>
            <p className="text-xs text-gray-500">Client</p>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-sm">
             {user?.name?.substring(0, 2).toUpperCase() || "CL"}
          </div>
        </div>
      </div>
    </div>
  );
}
