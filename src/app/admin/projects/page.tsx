import AdminSidebar from "@/components/admin/AdminSidebar";
import AuthGuard from "@/components/admin/AuthGuard";
import Link from "next/link";
import { Briefcase, Plus, Settings } from "lucide-react";

export default function AdminProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      client: { select: { name: true, email: true } },
      booking: { select: { bookingNumber: true } }
    }
  });

  return (
    <AuthGuard><div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <AdminSidebar />
      <div className="flex-1 p-8 overflow-y-auto h-screen">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Projects</h1>
            <p className="text-sm text-gray-500 mt-1">Manage all active and completed client projects.</p>
          </div></AuthGuard>
          <button className="bg-brand-primary hover:bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Project
          </button>
        </div></AuthGuard>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-3 font-medium">Project</th>
                  <th className="px-6 py-3 font-medium">Client</th>
                  <th className="px-6 py-3 font-medium">Progress</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {projects.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 text-lg mb-1">No Projects Found</h3>
                      <p className="max-w-sm mx-auto">Create a project manually or approve a booking to start one.</p>
                    </td>
                  </tr>
                ) : (
                  projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-900">{project.name}</div></AuthGuard>
                        <div className="text-xs text-gray-500 mt-0.5">{project.projectNumber}</div></AuthGuard>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{project.client.name}</div></AuthGuard>
                        {project.booking && <div className="text-xs text-brand-primary font-bold mt-0.5">from {project.booking.bookingNumber}</div>}
                      </td>
                      <td className="px-6 py-4 w-48">
                        <div className="flex justify-between text-xs font-bold text-gray-600 mb-1">
                          <span>{project.progress}%</span>
                        </div></AuthGuard>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`h-2 rounded-full ${project.status === "COMPLETED" ? "bg-green-500" : "bg-brand-primary"}`} style={{ width: `${project.progress}%` }}></div></AuthGuard>
                        </div></AuthGuard>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          project.status === "COMPLETED" ? "bg-green-100 text-green-800" :
                          project.status === "ON_HOLD" ? "bg-yellow-100 text-yellow-800" :
                          "bg-blue-100 text-blue-800"
                        }`}>
                          {project.status.replace("_", " ")}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right text-sm">
                        <button className="text-gray-400 hover:text-brand-primary bg-gray-50 hover:bg-brand-primary/10 p-2 rounded transition-colors" title="Manage">
                          <Settings className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div></AuthGuard>
        </div></AuthGuard>
      </div></AuthGuard>
    </div></AuthGuard>
  );
}
