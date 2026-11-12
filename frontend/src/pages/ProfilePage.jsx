import { mockUser, mockPosts } from '../api/mockData';
import { Settings, Bell } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="card-dark overflow-hidden mb-6">
        {/* Обложка */}
        <div className="h-48 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 relative">
           <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
        </div>
        
        <div className="px-8 pb-8 relative">
          <img src={mockUser.avatar} className="w-32 h-32 rounded-full border-4 border-[#141414] absolute -top-16 bg-[#141414] object-cover" />
          <div className="mt-20 flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-black">{mockUser.displayName}</h1>
              <p className="text-zinc-500">@{mockUser.username}</p>
              <p className="mt-3 text-zinc-300">{mockUser.bio}</p>
              <div className="flex gap-4 mt-4 text-sm text-zinc-400">
                <span><strong className="text-white text-base">{mockUser.followers}</strong> подписчиков</span>
                <span><strong className="text-white text-base">{mockUser.following}</strong> подписок</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition"><Bell size={20}/></button>
              <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-rose-600 rounded-xl font-bold hover:opacity-90 transition shadow-[0_0_15px_rgba(249,115,22,0.2)]">Редактировать</button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4 ml-2">Мои публикации</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
         {mockPosts.map(p => p.image && (
            <div key={p.id} className="relative group rounded-xl overflow-hidden aspect-square">
              <img src={p.image} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold text-white">
                Смотреть
              </div>
            </div>
         ))}
      </div>
    </div>
  );
}