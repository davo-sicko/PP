import { useState } from 'react';
import { mockPosts } from '../api/mockData';
import { Heart, MessageCircle, Share2, MoreHorizontal, Image as ImageIcon } from 'lucide-react';

export default function HomePage() {
  // Локальное состояние для визуального лайка
  const [likedPosts, setLikedPosts] = useState({});

  const toggleLike = (id) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-10">
      {/* Создание поста */}
      <div className="bg-[#141414] border border-zinc-800/60 p-4 rounded-2xl shadow-lg flex gap-4 items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold">
          И
        </div>
        <input 
          type="text" 
          placeholder="Что происходит?" 
          className="flex-1 bg-[#0a0a0a] border border-zinc-800 text-white rounded-full px-5 py-3 focus:outline-none focus:border-orange-500 transition-colors" 
        />
        <button className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-orange-500 hover:bg-zinc-800 transition-colors">
          <ImageIcon size={20} />
        </button>
      </div>

      {/* Список постов */}
      {mockPosts.map(post => {
        const isLiked = likedPosts[post.id];
        return (
          <div key={post.id} className="bg-[#141414] border border-zinc-800/60 rounded-2xl shadow-lg overflow-hidden">
            {/* Шапка поста */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt="" className="w-11 h-11 rounded-full object-cover border border-zinc-700" />
                <div>
                  <p className="font-bold text-white">{post.author.name}</p>
                  <p className="text-xs text-zinc-500">@{post.author.username} • {post.date}</p>
                </div>
              </div>
              <button className="text-zinc-500 hover:text-white transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Контент */}
            <div className="px-4 pb-4">
              <p className="text-zinc-200">{post.content}</p>
            </div>
            {post.image && (
              <div className="border-y border-zinc-800/50">
                <img src={post.image} alt="Post content" className="w-full max-h-[500px] object-cover" />
              </div>
            )}

            {/* Действия */}
            <div className="p-4 flex items-center gap-8 text-zinc-400">
              <button 
                onClick={() => toggleLike(post.id)}
                className={`flex items-center gap-2 transition-colors group ${isLiked ? 'text-rose-500' : 'hover:text-rose-500'}`}
              >
                <Heart size={22} fill={isLiked ? "currentColor" : "none"} className={isLiked ? "scale-110 transition-transform" : ""} /> 
                <span className="font-medium">{isLiked ? post.likes + 1 : post.likes}</span>
              </button>
              
              <button className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <MessageCircle size={22} /> 
                <span className="font-medium">{post.comments}</span>
              </button>
              
              <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
                <Share2 size={22} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}