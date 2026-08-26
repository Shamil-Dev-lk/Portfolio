"use client";
import AuthGuard from "@/components/admin/AuthGuard";
"use client";
import AuthGuard from "@/components/admin/AuthGuard";
import AuthGuard from "@/components/admin/AuthGuard";
import Link from "next/link";
import { Users, Calendar, Briefcase, DollarSign, FileText, LayoutDashboard, MessageSquare, CheckCircle2 } from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";

export default function AdminDashboard() {
  const [totalClients, activeProjects, upcomingBookings, unpaidInvoices] = await Promise.all([
    prisma.user.count({ where: { role: "CLIENT" } }),
    prisma.project.count({ where: { status: "IN_PROGRESS" } }),
    prisma.booking.count({ where: { status: "PENDING" } }),
    prisma.invoice.count({ where: { status: "SENT" } })
  ]);

  const recentBookings = await prisma.booking.findMany({
    include: { client: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
    take: 5
  });
  
  const recentInvoices = await prisma.invoice.findMany({
    include: { client: { select: { name: true } }, project: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
    take: 6
  });

  const statsGrid = [
    { name: "Total Clients", value: "256", trend: "+12.5%", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "New Bookings", value: "18", trend: "+8.3%", icon: Calendar, color: "text-orange-500", bg: "bg-orange-50" },
    { name: "Active Projects", value: "24", trend: "+15.2%", icon: Briefcase, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Pending Payments", value: "12", trend: "+5.6%", icon: DollarSign, color: "text-red-500", bg: "bg-red-50" },
    { name: "Paid Invoices", value: "42", trend: "+10.8%", icon: FileText, color: "text-green-500", bg: "bg-green-50" },
    { name: "Total Revenue", value: "Rs. 1,250,000", trend: "+18.7%", icon: DollarSign, color: "text-purple-600", bg: "bg-purple-50" },
    { name: "Unread Messages", value: "7", trend: "+7.2%", icon: MessageSquare, color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "Completed Projects", value: "56", trend: "+14.3%", icon: CheckCircle2, color: "text-cyan-500", bg: "bg-cyan-50" }
  ];

  return (
    <AuthGuard><AuthGuard><div className="min-h-screen bg-[#f3f4f6] flex flex-col md:flex-row font-sans">
      <AdminSidebar />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <AdminTopNav />

        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          
          {/* Top 8 Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {statsGrid.map((stat) => (
              <div key={stat.name} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${stat.bg} ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div></AuthGuard>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5">{stat.name}</p>
                  <p className="text-xl font-bold text-gray-900 leading-tight">{stat.value}</p>
                  <p className="text-[10px] text-green-600 font-bold mt-1">{stat.trend} from last month</p>
                </div></AuthGuard>
              </div></AuthGuard>
            ))}
          </div></AuthGuard>

          {/* Middle 3 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            
            {/* 1. Revenue Overview (Mock Line Chart) */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Revenue Overview</h3>
                  <p className="text-3xl font-black text-gray-900">Rs. 1,250,000</p>
                  <p className="text-xs text-green-600 font-bold mt-1">+18.7% from last month</p>
                </div></AuthGuard>
                <select className="text-xs border border-gray-200 rounded-md px-2 py-1 outline-none font-medium">
                  <option>This Month</option>
                </select>
              </div></AuthGuard>
              <div className="flex-1 relative mt-4 min-h-[200px] flex items-end">
                {/* Simple SVG Line Chart Mock */}
                <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,80 L10,75 L20,78 L30,65 L40,68 L50,55 L60,50 L70,40 L80,35 L90,20 L100,10 L100,100 L0,100 Z" fill="url(#gradient)" />
                  <path d="M0,80 L10,75 L20,78 L30,65 L40,68 L50,55 L60,50 L70,40 L80,35 L90,20 L100,10" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="75" r="2" fill="#22c55e" />
                  <circle cx="30" cy="65" r="2" fill="#22c55e" />
                  <circle cx="50" cy="55" r="2" fill="#22c55e" />
                  <circle cx="70" cy="40" r="2" fill="#22c55e" />
                  <circle cx="90" cy="20" r="2" fill="#22c55e" />
                </svg>
                {/* Y Axis Mock */}
                <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-gray-400">
                  <span>1.5M</span><span>1.25M</span><span>1M</span><span>750K</span><span>500K</span><span>250K</span><span>0</span>
                </div></AuthGuard>
                {/* X Axis Mock */}
                <div className="absolute left-8 right-0 bottom-0 flex justify-between text-[10px] text-gray-400">
                  <span>01</span><span>05</span><span>10</span><span>15</span><span>20</span><span>25</span><span>30</span>
                </div></AuthGuard>
              </div></AuthGuard>
            </div></AuthGuard>

            {/* 2. Bookings Overview (Donut Chart) */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-8">Bookings Overview</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                {/* CSS Conic Gradient Donut */}
                <div className="relative w-40 h-40 rounded-full" style={{ background: "conic-gradient(#f59e0b 0% 27.8%, #3b82f6 27.8% 50%, #06b6d4 50% 72.2%, #ef4444 72.2% 88.9%, #22c55e 88.9% 94.5%, #f43f5e 94.5% 100%)" }}>
                  <div className="absolute inset-0 m-6 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                    <span className="text-2xl font-black text-gray-900">18</span>
                    <span className="text-[10px] text-gray-500 font-bold">Total</span>
                  </div></AuthGuard>
                </div></AuthGuard>
                {/* Legend */}
                <div className="space-y-3">
                  <div className="flex items-center text-xs"><span className="w-3 h-3 rounded-full bg-[#f59e0b] mr-2"></span><span className="text-gray-600 font-medium w-20">Pending</span><span className="font-bold">5 (27.8%)</span></div></AuthGuard>
                  <div className="flex items-center text-xs"><span className="w-3 h-3 rounded-full bg-[#3b82f6] mr-2"></span><span className="text-gray-600 font-medium w-20">Reviewed</span><span className="font-bold">4 (22.2%)</span></div></AuthGuard>
                  <div className="flex items-center text-xs"><span className="w-3 h-3 rounded-full bg-[#06b6d4] mr-2"></span><span className="text-gray-600 font-medium w-20">Approved</span><span className="font-bold">4 (22.2%)</span></div></AuthGuard>
                  <div className="flex items-center text-xs"><span className="w-3 h-3 rounded-full bg-[#ef4444] mr-2"></span><span className="text-gray-600 font-medium w-20">In Progress</span><span className="font-bold">3 (16.7%)</span></div></AuthGuard>
                  <div className="flex items-center text-xs"><span className="w-3 h-3 rounded-full bg-[#22c55e] mr-2"></span><span className="text-gray-600 font-medium w-20">Completed</span><span className="font-bold">1 (5.6%)</span></div></AuthGuard>
                  <div className="flex items-center text-xs"><span className="w-3 h-3 rounded-full bg-[#f43f5e] mr-2"></span><span className="text-gray-600 font-medium w-20">Cancelled</span><span className="font-bold">1 (5.6%)</span></div></AuthGuard>
                </div></AuthGuard>
              </div></AuthGuard>
            </div></AuthGuard>

            {/* 3. Right Stack: Recent Booking Requests & Top Services */}
            <div className="flex flex-col gap-6">
              
              {/* Recent Booking Requests */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900 text-sm">Recent Booking Requests</h3>
                  <a href="/admin/bookings" className="text-xs font-bold text-green-600">View All</a>
                </div></AuthGuard>
                <div className="space-y-4">
                  {[
                    { id: 'BK-2026-0018', name: 'John Smith', service: 'Web Development', time: '2h ago', status: 'Pending', color: 'bg-orange-100 text-orange-600' },
                    { id: 'BK-2026-0017', name: 'Sarah Johnson', service: 'UI/UX Design', time: '5h ago', status: 'Pending', color: 'bg-orange-100 text-orange-600' },
                    { id: 'BK-2026-0016', name: 'David Brown', service: 'WordPress', time: '1d ago', status: 'Reviewed', color: 'bg-blue-100 text-blue-600' },
                    { id: 'BK-2026-0015', name: 'Michael Lee', service: 'E-Commerce', time: '1d ago', status: 'Approved', color: 'bg-green-100 text-green-600' },
                    { id: 'BK-2026-0014', name: 'Emma Wilson', service: 'Web Application', time: '2d ago', status: 'In Progress', color: 'bg-purple-100 text-purple-600' }
                  ].map(item => (
                    <div key={item.id} className="flex items-center justify-between text-xs">
                      <span className="font-bold text-gray-900 w-20">{item.id}</span>
                      <span className="text-gray-600 w-24 truncate">{item.name}</span>
                      <span className="text-gray-400 w-24 hidden sm:block truncate">{item.service}</span>
                      <span className="text-gray-400 w-10 text-right">{item.time}</span>
                      <span className={`px-2 py-0.5 rounded-md font-bold w-16 text-center ${item.color} text-[10px]`}>{item.status}</span>
                    </div></AuthGuard>
                  ))}
                </div></AuthGuard>
              </div></AuthGuard>

              {/* Top Services */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900 text-sm">Top Services</h3>
                  <select className="text-[10px] border border-gray-200 rounded px-1 outline-none font-medium">
                    <option>This Month</option>
                  </select>
                </div></AuthGuard>
                <div className="space-y-3">
                  {[
                    { name: 'Web Development', val: 'Rs. 650,000', pct: '85%' },
                    { name: 'WordPress Development', val: 'Rs. 320,000', pct: '45%' },
                    { name: 'UI/UX Design', val: 'Rs. 210,000', pct: '30%' },
                    { name: 'E-Commerce Development', val: 'Rs. 160,000', pct: '20%' },
                    { name: 'Graphic Design', val: 'Rs. 80,000', pct: '10%' }
                  ].map(srv => (
                    <div key={srv.name}>
                      <div className="flex justify-between text-[11px] font-bold text-gray-900 mb-1">
                        <span>{srv.name}</span>
                        <span>{srv.val}</span>
                      </div></AuthGuard>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{width: srv.pct}}></div></AuthGuard>
                      </div></AuthGuard>
                    </div></AuthGuard>
                  ))}
                </div></AuthGuard>
              </div></AuthGuard>

            </div></AuthGuard>
          </div></AuthGuard>

          {/* Bottom Table: Recent Invoices */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-900">Recent Invoices</h3>
              <a href="/admin/invoices" className="text-sm font-bold text-green-600 hover:text-green-700">View All</a>
            </div></AuthGuard>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white text-gray-900 text-xs font-bold border-b border-gray-100">
                    <th className="px-6 py-3">Invoice</th>
                    <th className="px-6 py-3">Client</th>
                    <th className="px-6 py-3">Project</th>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Due Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { id: 'INV-2026-0042', client: 'John Smith', project: 'Business Website', amt: 'Rs. 75,000', status: 'Paid', color: 'bg-green-50 text-green-600 border border-green-200', date: '2026-05-25' },
                    { id: 'INV-2026-0041', client: 'Sarah Johnson', project: 'Mobile App UI', amt: 'Rs. 45,000', status: 'Pending', color: 'bg-orange-50 text-orange-600 border border-orange-200', date: '2026-05-30' },
                    { id: 'INV-2026-0040', client: 'David Brown', project: 'WordPress Site', amt: 'Rs. 35,000', status: 'Paid', color: 'bg-green-50 text-green-600 border border-green-200', date: '2026-05-30' },
                    { id: 'INV-2026-0039', client: 'Michael Lee', project: 'E-Commerce Site', amt: 'Rs. 120,000', status: 'Pending', color: 'bg-orange-50 text-orange-600 border border-orange-200', date: '2026-06-05' },
                    { id: 'INV-2026-0038', client: 'Emma Wilson', project: 'Web Application', amt: 'Rs. 80,000', status: 'Overdue', color: 'bg-red-50 text-red-600 border border-red-200', date: '2026-05-15' }
                  ].map((inv) => (
                    <tr key={inv.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3.5 text-[13px] font-bold text-gray-900">{inv.id}</td>
                      <td className="px-6 py-3.5 text-[13px] font-medium text-gray-600">{inv.client}</td>
                      <td className="px-6 py-3.5 text-[13px] font-medium text-gray-600">{inv.project}</td>
                      <td className="px-6 py-3.5 text-[13px] font-bold text-gray-900">{inv.amt}</td>
                      <td className="px-6 py-3.5">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${inv.color}`}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-[13px] font-medium text-gray-600">{inv.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div></AuthGuard>
          </div></AuthGuard>
          
        </div></AuthGuard>
      </div></AuthGuard>
    </div></AuthGuard>
  );
}

