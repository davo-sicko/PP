import { useState } from 'react';
import { mockChats, mockMessages } from '../api/mockData';
import { Send, Search, Phone, MoreVertical } from 'lucide-react';

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(mockChats[0]);

  return (
    <div className="h-[calc(100vh-8rem)] flex card-dark overflow-hidden">
      {/* Список чатов */}
      <div className="w-1/3 border-r border-zinc-800/50 flex flex-col bg-[#0f0f0f]">
        <div className="p-4 border-b border-zinc-800/50 flex justify-between items-center">
          <h2 className="text-xl font-bold">Чаты</h2>
          <Search size={20} className="text-zinc-400 cursor-pointer" />
        </div>
        <div className="flex-1 overflow-y-auto">
          {mockChats.map(chat => (
            <div 
              key={chat.id} 
              onClick={() => setActiveChat(chat)} 
              className={`p-4 flex gap-3 cursor-pointer transition-colors ${
                activeChat.id === chat.id ? 'bg-zinc-900/80 border-l-2 border-orange-500' : 'hover:bg-zinc-900/40 border-l-2 border-transparent'
              }`}
            >
              <div className="relative">
                <img src={chat.avatar} className="w-12 h-12 rounded-full object-cover" />
                {chat.online && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#0f0f0f] rounded-full"></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <p className="font-bold truncate text-zinc-100">{chat.name}</p>
                  <span className="text-xs text-zinc-500">{chat.time}</span>
                </div>
                <p className="text-sm text-zinc-400 truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-rose-600 rounded-full flex items-center justify-center text-[10px] font-bold">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Окно чата */}
      <div className="flex-1 flex flex-col bg-[#0a0a0a] relative">
        <div className="p-4 bg-[#0f0f0f] border-b border-zinc-800/50 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <img src={activeChat.avatar} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-bold">{activeChat.name}</p>
              <p className="text-xs text-orange-500">{activeChat.online ? 'В сети' : 'Был(а) недавно'}</p>
            </div>
          </div>
          <div className="flex gap-4 text-zinc-400">
            <Phone size={20} className="cursor-pointer hover:text-white" />
            <MoreVertical size={20} className="cursor-pointer hover:text-white" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mockMessages.map(msg => (
            <div key={msg.id} className={`flex ${msg.senderId === 1 ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-3 rounded-2xl shadow-md ${
                msg.senderId === 1 
                  ? 'bg-gradient-to-br from-orange-500 to-rose-600 text-white rounded-br-none' 
                  : 'bg-[#1a1a1a] text-zinc-200 rounded-bl-none border border-zinc-800'
              }`}>
                <p>{msg.text}</p>
                <span className={`text-[10px] block mt-1 ${msg.senderId === 1 ? 'text-orange-200 text-right' : 'text-zinc-500'}`}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#0f0f0f] border-t border-zinc-800/50 flex gap-2">
          <input type="text" placeholder="Написать сообщение..." className="flex-1 bg-[#1a1a1a] text-white border border-zinc-800 rounded-full px-4 py-3 focus:outline-none focus:border-orange-500" />
          <button className="w-12 h-12 bg-gradient-to-r from-orange-500 to-rose-600 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform">
            <Send size={20} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}