"use client";
import AuthGuard from "@/components/admin/AuthGuard";
import ClientSidebar from "@/components/client/ClientSidebar";
import ClientTopNav from "@/components/client/ClientTopNav";



import { Calendar, Plus, ExternalLink } from "lucide-react";
import Link from "next/link";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "shamil_super_secret_dev_key_2026");

export default function Page() { const bookings = []; const clients = []; const projects = []; const invoices = []; const payments = []; const messages = []; const user = null; const recentBookings = []; const recentInvoices = []; const activeProject = null; return (
    <AuthGuard><div className="min-h-screen bg-[#f9f9fb] flex flex-col md:flex-row font-sans">
      <ClientSidebar user={user} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <ClientTopNav user={user} />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">My Bookings</h1>
              <p className="text-sm text-gray-500 mt-1">View the status of your service requests.</p>
            </div>
            <Link href="/booking" className="bg-brand-primary hover:bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" /> New Booking
            </Link>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-500 text-[11px] uppercase tracking-wider font-bold border-b border-gray-100">
                    <th className="px-6 py-4">Booking ID</th>
                    <th className="px-6 py-4">Service Required</th>
                    <th className="px-6 py-4">Budget Range</th>
                    <th className="px-6 py-4">Date Submitted</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {bookings.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                        <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="font-bold text-gray-900 text-lg mb-1">No Bookings Found</h3>
                        <p className="max-w-sm mx-auto">You haven't requested any services yet.</p>
                      </td>
                    </tr>
                  ) : (
                    bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">{booking.id.split('-')[0]}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{booking.serviceType.replace("_", " ")}</td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-600">{booking.budget}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{new Date(booking.createdAt).toLocaleDateString()}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                            booking.status === "APPROVED" ? "bg-green-50 text-green-700" :
                            booking.status === "PENDING" ? "bg-orange-50 text-orange-700" :
                            "bg-red-50 text-red-700"
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

