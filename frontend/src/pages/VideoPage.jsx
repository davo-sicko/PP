import { mockVideos } from '../api/mockData';
import { Play } from 'lucide-react';

export default function VideoPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Видео</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVideos.map(video => (
          <div key={video.id} className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden mb-3 aspect-video">
              <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white"><Play fill="currentColor" /></div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">{video.duration}</span>
            </div>
            <div className="flex gap-3">
              <div className="w-9 h-9 bg-blue-200 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="font-bold line-clamp-2">{video.title}</h3>
                <p className="text-sm text-gray-500">{video.author}</p>
                <p className="text-xs text-gray-400">{video.views} просмотров • {video.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}