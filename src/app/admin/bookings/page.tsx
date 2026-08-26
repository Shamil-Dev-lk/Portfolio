"use client";
import AuthGuard from "@/components/admin/AuthGuard";
"use client";
import AuthGuard from "@/components/admin/AuthGuard";
"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import AuthGuard from "@/components/admin/AuthGuard";
import { Check, X, Eye, Calendar, CheckCircle2, XCircle, Clock } from "lucide-react";
import { useState } from "react";

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);

  return (
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-3 font-medium">Booking ID</th>
                  <th className="px-6 py-3 font-medium">Client</th>
                  <th className="px-6 py-3 font-medium">Budget / Timeline</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 text-lg mb-1">No Bookings Found</h3>
                      <p className="max-w-sm mx-auto">When clients submit a project request, they will appear here.</p>
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-brand-primary">{booking.bookingNumber}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{new Date(booking.createdAt).toLocaleDateString()}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-900">{booking.client.name}</div>
                        <div className="text-xs text-gray-500">{booking.client.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <div className="font-bold text-green-700">{booking.budget || "TBD"}</div>
                        <div className="text-xs text-gray-500 mt-0.5 flex gap-2">
                          {booking.startDate && <span>Start: {new Date(booking.startDate).toLocaleDateString()}</span>}
                          {booking.deadline && <span>Due: {new Date(booking.deadline).toLocaleDateString()}</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          booking.status === "APPROVED" ? "bg-green-100 text-green-800" :
                          booking.status === "REJECTED" ? "bg-red-100 text-red-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          {booking.status === "APPROVED" && <CheckCircle2 className="w-3 h-3 mr-1" />}
                          {booking.status === "REJECTED" && <XCircle className="w-3 h-3 mr-1" />}
                          {booking.status === "PENDING" && <Clock className="w-3 h-3 mr-1" />}
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {booking.status === "PENDING" ? (
                          <div className="flex items-center justify-end gap-2">
                            <form action={async () => {
                              "use server";
                              const { revalidatePath } = await import("next/cache");
                              await prisma.booking.update({ where: { id: booking.id }, data: { status: "APPROVED" } });
                              revalidatePath("/admin/bookings");
                              revalidatePath("/dashboard");
                            }}>
                              <button type="submit" className="text-xs font-bold px-3 py-1.5 rounded bg-green-50 text-green-700 hover:bg-green-100 transition-colors border border-green-200">Approve</button>
                            </form>
                            <form action={async () => {
                              "use server";
                              const { revalidatePath } = await import("next/cache");
                              await prisma.booking.update({ where: { id: booking.id }, data: { status: "REJECTED" } });
                              revalidatePath("/admin/bookings");
                              revalidatePath("/dashboard");
                            }}>
                              <button type="submit" className="text-xs font-bold px-3 py-1.5 rounded bg-red-50 text-red-700 hover:bg-red-100 transition-colors border border-red-200">Decline</button>
                            </form>
                          </div>
                        ) : (
                          <button className="text-xs font-bold text-brand-primary bg-brand-primary/10 hover:bg-brand-primary/20 px-3 py-1.5 rounded transition-colors">
                            View Details
                          </button>
                        )}
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
  );
}

