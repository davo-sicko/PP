import { mockPosts } from '../api/mockData';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-4">Лента</h2>
        <input type="text" placeholder="Что у вас нового?" className="w-full bg-gray-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      {mockPosts.map(post => (
        <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 flex items-center gap-3">
            <img src={post.author.avatar} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-xs text-gray-500">@{post.author.username} • {post.date}</p>
            </div>
          </div>
          <div className="px-4 pb-3">
            <p>{post.content}</p>
          </div>
          {post.image && <img src={post.image} alt="Post" className="w-full max-h-96 object-cover" />}
          <div className="p-4 flex items-center gap-6 border-t border-gray-50 text-gray-500">
            <button className="flex items-center gap-2 hover:text-red-500"><Heart size={20} /> {post.likes}</button>
            <button className="flex items-center gap-2 hover:text-blue-500"><MessageCircle size={20} /> {post.comments}</button>
            <button className="flex items-center gap-2 hover:text-green-500"><Share2 size={20} /></button>
          </div>
        </div>
      ))}
    </div>
  );
}