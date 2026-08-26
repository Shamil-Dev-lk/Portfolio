"use client";
import AuthGuard from "@/components/admin/AuthGuard";
import ClientSidebar from "@/components/client/ClientSidebar";
import ClientTopNav from "@/components/client/ClientTopNav";



import { Briefcase, CheckCircle2 } from "lucide-react";
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
              <h1 className="text-2xl font-extrabold text-gray-900">My Projects</h1>
              <p className="text-sm text-gray-500 mt-1">Track the progress of your ongoing and completed work.</p>
            </div>
            <Link href="/booking" className="bg-brand-primary hover:bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors">
              Start New Project
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.length === 0 ? (
              <div className="col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 text-lg mb-1">No Projects Found</h3>
                <p className="max-w-sm mx-auto text-gray-500">You don't have any active projects. Book a service to get started.</p>
              </div>
            ) : (
              projects.map((project) => (
                <div key={project.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">{project.name}</h2>
                      <p className="text-xs text-gray-500 mt-0.5">Project ID: {project.projectNumber}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      project.status === "COMPLETED" ? "bg-green-100 text-green-700" :
                      project.status === "IN_PROGRESS" ? "bg-blue-100 text-blue-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {project.status.replace("_", " ")}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-bold text-gray-900 mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className={`h-2 rounded-full ${project.status === 'COMPLETED' ? 'bg-green-500' : 'bg-brand-primary'}`} style={{width: `${project.progress}%`}}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Started</p>
                      <p className="text-sm font-bold text-gray-900">{new Date(project.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Deadline</p>
                      <p className="text-sm font-bold text-gray-900">{project.deadline ? new Date(project.deadline).toLocaleDateString() : 'TBD'}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

