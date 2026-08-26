import ClientSidebar from "@/components/client/ClientSidebar";
import ClientTopNav from "@/components/client/ClientTopNav";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { MessageSquare, Send } from "lucide-react";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "shamil_super_secret_dev_key_2026");

export default async function ClientMessagesPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  
  if (!token) return <div>Unauthorized</div>;

  let payload;
  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    payload = verified.payload;
  } catch (e) {
    return <div>Unauthorized</div>;
  }

  const clientId = payload.userId as string;

  const user = await prisma.user.findUnique({
    where: { id: clientId }
  });

  const messages = await prisma.message.findMany({
    where: { OR: [{ senderId: clientId }, { receiverId: clientId }] },
    orderBy: { createdAt: "asc" }
  });

  return (
    <div className="min-h-screen bg-[#f9f9fb] flex flex-col md:flex-row font-sans">
      <ClientSidebar user={user} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <ClientTopNav user={user} />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Messages</h1>
              <p className="text-sm text-gray-500 mt-1">Chat directly with the admin.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10 max-w-4xl h-[600px] flex flex-col">
            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-50/30 flex flex-col gap-4">
              {messages.length === 0 ? (
                <div className="flex-1 flex items-center justify-center flex-col text-gray-400">
                  <MessageSquare className="w-12 h-12 text-gray-200 mb-2" />
                  <p className="text-sm font-medium">No messages yet. Send a message to start the conversation.</p>
                </div>
              ) : (
                messages.map((msg) => {
                  const isMine = msg.senderId === clientId;
                  return (
                    <div key={msg.id} className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[75%] rounded-2xl px-5 py-3 text-sm ${isMine ? 'bg-brand-primary text-white rounded-tr-sm' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'}`}>
                        <p>{msg.content}</p>
                        <div className={`text-[9px] mt-1 text-right ${isMine ? 'text-green-100' : 'text-gray-400'}`}>
                          {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            
            <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input type="text" placeholder="Type your message..." disabled className="flex-1 border border-gray-200 rounded-xl px-4 py-3 outline-none text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" />
              <button disabled className="bg-brand-primary/50 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 cursor-not-allowed">
                <Send className="w-4 h-4" /> Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
