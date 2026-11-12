import { mockVideos } from '../api/mockData';
import { Play } from 'lucide-react';

export default function VideoPage() {
  return (
    <div className="max-w-7xl mx-auto pb-10">
      <h1 className="text-3xl font-black mb-8 text-white">Видео</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {mockVideos.map(video => (
          <div key={video.id} className="group cursor-pointer">
            {/* Превью */}
            <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video border border-zinc-800/50">
              <img 
                src={video.thumbnail} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={video.title}
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="w-14 h-14 bg-orange-500/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                   <Play fill="currentColor" size={24} className="ml-1" />
                 </div>
              </div>
              <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-md">
                {video.duration}
              </span>
            </div>
            
            {/* Инфо о видео */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold border border-zinc-700">
                {video.author[0]}
              </div>
              <div>
                <h3 className="font-bold text-white leading-tight line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {video.title}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">{video.author}</p>
                <p className="text-zinc-500 text-xs mt-0.5">{video.views} просмотров • {video.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}