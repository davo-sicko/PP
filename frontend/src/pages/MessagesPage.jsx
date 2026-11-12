import { useState } from 'react';
import { mockChats, mockMessages } from '../api/mockData';
import { Send } from 'lucide-react';

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(mockChats[0]);

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Список чатов */}
      <div className="w-1/3 border-r border-gray-100 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-xl font-bold">Чаты</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {mockChats.map(chat => (
            <div key={chat.id} onClick={() => setActiveChat(chat)} className={`p-4 flex gap-3 cursor-pointer hover:bg-gray-50 ${activeChat.id === chat.id ? 'bg-blue-50' : ''}`}>
              <div className="relative">
                <img src={chat.avatar} className="w-12 h-12 rounded-full" />
                {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <p className="font-semibold truncate">{chat.name}</p>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Окно чата */}
      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="p-4 bg-white border-b border-gray-100 flex items-center gap-3">
          <img src={activeChat.avatar} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-bold">{activeChat.name}</p>
            <p className="text-xs text-green-500">{activeChat.online ? 'В сети' : 'Был(а) недавно'}</p>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mockMessages.map(msg => (
            <div key={msg.id} className={`flex ${msg.senderId === 1 ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-3 rounded-2xl ${msg.senderId === 1 ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'}`}>
                <p>{msg.text}</p>
                <span className={`text-[10px] block mt-1 ${msg.senderId === 1 ? 'text-blue-200 text-right' : 'text-gray-400'}`}>{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
          <input type="text" placeholder="Написать сообщение..." className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none" />
          <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white"><Send size={18} /></button>
        </div>
      </div>
    </div>
  );
}