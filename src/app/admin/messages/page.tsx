"use client";
import AuthGuard from "@/components/admin/AuthGuard";
"use client";
import AuthGuard from "@/components/admin/AuthGuard";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import AuthGuard from "@/components/admin/AuthGuard";
import { MessageSquare, Search, Send } from "lucide-react";

export default function AdminMessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      sender: { select: { name: true, role: true } },
      receiver: { select: { name: true, role: true } }
    }
  });

  return (
    <AuthGuard><AuthGuard><div className="min-h-screen bg-[#f3f4f6] flex flex-col md:flex-row font-sans">
      <AdminSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <AdminTopNav />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Messages</h1>
              <p className="text-sm text-gray-500 mt-1">Communicate with your clients directly.</p>
            </div></AuthGuard>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
              <input type="text" placeholder="Search conversations..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-primary" />
            </div></AuthGuard>
          </div></AuthGuard>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10 min-h-[600px] flex">
            {/* Sidebar List */}
            <div className="w-1/3 border-r border-gray-100 flex flex-col">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50 font-bold text-gray-900 text-sm">Recent Conversations</div></AuthGuard>
              <div className="flex-1 overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <MessageSquare className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm">No messages yet.</p>
                  </div></AuthGuard>
                ) : (
                  messages.map((msg) => (
                    <div key={msg.id} className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${msg.isRead ? 'bg-white hover:bg-gray-50' : 'bg-brand-primary/5 hover:bg-brand-primary/10'}`}>
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-gray-900 text-sm">{msg.sender.name}</span>
                        <span className="text-[10px] text-gray-400">{new Date(msg.createdAt).toLocaleDateString()}</span>
                      </div></AuthGuard>
                      <p className="text-xs text-gray-500 truncate">{msg.content}</p>
                    </div></AuthGuard>
                  ))
                )}
              </div></AuthGuard>
            </div></AuthGuard>
            {/* Chat Area */}
            <div className="w-2/3 flex flex-col bg-gray-50/30">
              <div className="flex-1 flex items-center justify-center text-gray-400 flex-col gap-3">
                <MessageSquare className="w-12 h-12 text-gray-200" />
                <p className="text-sm font-medium">Select a conversation to start messaging</p>
              </div></AuthGuard>
              <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
                <input type="text" placeholder="Type your message..." disabled className="flex-1 border border-gray-200 rounded-lg px-4 py-2 outline-none text-sm bg-gray-50" />
                <button disabled className="bg-brand-primary/50 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 cursor-not-allowed">
                  <Send className="w-4 h-4" /> Send
                </button>
              </div></AuthGuard>
            </div></AuthGuard>
          </div></AuthGuard>
        </div></AuthGuard>
      </div></AuthGuard>
    </div></AuthGuard>
  );
}

