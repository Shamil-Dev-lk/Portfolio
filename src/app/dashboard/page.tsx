"use client";
import AuthGuard from "@/components/admin/AuthGuard";

import Link from "next/link";


import { Briefcase, FileText, CheckCircle2, DollarSign, Plus, ArrowRight, MessageSquare, CreditCard, Bell } from "lucide-react";
import ClientSidebar from "@/components/client/ClientSidebar";
import ClientTopNav from "@/components/client/ClientTopNav";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "shamil_super_secret_dev_key_2026");

export default function Page() { const bookings = []; const clients = []; const projects = []; const invoices = []; const payments = []; const messages = []; const user = null; const recentBookings = []; const recentInvoices = []; const activeProject = null; return (
    <AuthGuard><div className="min-h-screen bg-[#f9f9fb] flex flex-col md:flex-row font-sans">
      <ClientSidebar user={user} />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <ClientTopNav user={user} />

        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
              Welcome back, {user?.name?.split(' ')[0]}! 👋
            </h1>
            <p className="text-gray-500 mt-1">Here's what's happening with your projects.</p>
          </div>
          
          {/* Top 4 Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-blue-50 text-blue-500">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium mb-0.5">Active Projects</p>
                <p className="text-xl font-bold text-gray-900 leading-tight">{activeProjectsCount}</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-orange-50 text-orange-500">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium mb-0.5">Pending Invoices</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-xl font-bold text-gray-900 leading-tight">{pendingInvoicesCount}</p>
                  <p className="text-[10px] text-gray-500 font-bold">Unpaid</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-green-50 text-green-500">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium mb-0.5">Paid Invoices</p>
                <p className="text-xl font-bold text-gray-900 leading-tight">{paidInvoicesCount}</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-purple-50 text-purple-600">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium mb-0.5">Total Spent</p>
                <p className="text-xl font-bold text-gray-900 leading-tight">Rs. {totalSpent.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column (Main content) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* My Active Project Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900">My Active Project</h3>
                  <a href="/dashboard/projects" className="text-xs font-bold text-green-600">View All</a>
                </div>
                
                {activeProject ? (
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-900">{activeProject.name}</h2>
                    <p className="text-sm text-gray-500 mt-1 mb-6">Project ID: {activeProject.projectNumber}</p>
                    
                    <div className="mb-8">
                      <div className="flex justify-end text-xs font-bold text-gray-900 mb-2">
                        <span>{activeProject.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{width: `${activeProject.progress}%`}}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">Start Date</p>
                        <p className="text-sm font-bold text-gray-900">{activeProject.createdAt.toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">Deadline</p>
                        <p className="text-sm font-bold text-gray-900">In Progress</p>
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <p className="text-xs text-gray-500 font-medium mb-2">Project Progress</p>
                        <div className="space-y-1.5">
                          <div className="flex items-center text-xs text-green-600 font-medium"><CheckCircle2 className="w-3 h-3 mr-1.5" /> Planning</div>
                          <div className="flex items-center text-xs text-green-600 font-medium"><CheckCircle2 className="w-3 h-3 mr-1.5" /> Design</div>
                          <div className={`flex items-center text-xs ${activeProject.progress > 50 ? 'text-green-600' : 'text-gray-400'} font-medium`}><CheckCircle2 className="w-3 h-3 mr-1.5" /> Development</div>
                          <div className={`flex items-center text-xs ${activeProject.progress > 80 ? 'text-green-600' : 'text-gray-400'} font-medium`}><CheckCircle2 className="w-3 h-3 mr-1.5" /> Testing</div>
                          <div className={`flex items-center text-xs ${activeProject.progress >= 100 ? 'text-green-600' : 'text-gray-400'} font-medium`}><CheckCircle2 className="w-3 h-3 mr-1.5" /> Completed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <Briefcase className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">No active projects right now.</p>
                    <Link href="/booking" className="mt-4 inline-block bg-green-50 text-green-600 font-bold px-4 py-2 rounded-lg text-sm">Start a Project</Link>
                  </div>
                )}
              </div>

              {/* My Services (Invoices Table) */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-bold text-gray-900">My Invoices</h3>
                  <a href="/dashboard/invoices" className="text-xs font-bold text-green-600">View All</a>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-white text-gray-900 text-[11px] uppercase font-bold border-b border-gray-100">
                        <th className="px-6 py-3">Invoice</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Project</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {recentInvoices.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-8 text-center text-gray-500 text-sm">No invoices found.</td>
                        </tr>
                      ) : recentInvoices.map((inv) => (
                        <tr key={inv.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-xs font-bold text-gray-900">{inv.invoiceNumber}</td>
                          <td className="px-6 py-4 text-xs font-medium text-gray-500">{new Date(inv.createdAt).toLocaleDateString()}</td>
                          <td className="px-6 py-4 text-xs font-medium text-gray-600 truncate max-w-[120px]">{inv.project?.name || "General"}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              inv.status === 'PAID' ? 'bg-green-50 text-green-600 border border-green-200' :
                              'bg-orange-50 text-orange-600 border border-orange-200'
                            }`}>
                              {inv.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs font-bold text-gray-900">Rs. {inv.total.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              
              {/* Recent Notifications */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900">Recent Notifications</h3>
                  <a href="#" className="text-xs font-bold text-green-600">View All</a>
                </div>
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900 leading-snug">Your invoice <span className="font-bold">INV-2026-0042</span> has been paid.</p>
                      <p className="text-[10px] text-gray-400 mt-1">2h ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900 leading-snug">Your project has been updated.</p>
                      <p className="text-xs text-gray-500 mt-0.5">Project Testing Phase</p>
                      <p className="text-[10px] text-gray-400 mt-1">1d ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900 leading-snug">New message from admin.</p>
                      <p className="text-xs text-gray-500 mt-0.5">Please check the details</p>
                      <p className="text-[10px] text-gray-400 mt-1">10d ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/booking" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-green-50 group transition-colors border border-gray-100 hover:border-green-100 text-center">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-2 shadow-sm group-hover:text-green-600 text-gray-500">
                      <Plus className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-900 block">Book a Service</span>
                    <span className="text-[9px] text-gray-500 mt-0.5">Start a new project</span>
                  </Link>
                  
                  <Link href="/dashboard/projects" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 group transition-colors border border-gray-100 hover:border-blue-100 text-center">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-2 shadow-sm group-hover:text-blue-600 text-gray-500">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-900 block">View Projects</span>
                    <span className="text-[9px] text-gray-500 mt-0.5">Check project status</span>
                  </Link>
                  
                  <Link href="/dashboard/invoices" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-orange-50 group transition-colors border border-gray-100 hover:border-orange-100 text-center">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-2 shadow-sm group-hover:text-orange-600 text-gray-500">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-900 block">View Invoices</span>
                    <span className="text-[9px] text-gray-500 mt-0.5">Check your invoices</span>
                  </Link>
                  
                  <Link href="/dashboard/messages" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-red-50 group transition-colors border border-gray-100 hover:border-red-100 text-center">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-2 shadow-sm group-hover:text-red-600 text-gray-500">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-900 block">Send Message</span>
                    <span className="text-[9px] text-gray-500 mt-0.5">Contact with admin</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

