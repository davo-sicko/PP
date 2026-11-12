import { mockTracks } from '../api/mockData';
import { usePlayerStore } from '../store/playerStore';
import { Play } from 'lucide-react';

export default function MusicPage() {
  const { playTrack, currentTrack } = usePlayerStore();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Музыка</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTracks.map(track => (
          <div key={track.id} className={`bg-white p-4 rounded-2xl shadow-sm border ${currentTrack?.id === track.id ? 'border-blue-500' : 'border-gray-100'} group relative cursor-pointer`} onClick={() => playTrack(track)}>
            <div className="relative rounded-xl overflow-hidden mb-4">
              <img src={track.cover} alt={track.title} className="w-full aspect-square object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <Play fill="currentColor" size={24} className="ml-1" />
                </div>
              </div>
            </div>
            <h3 className="font-bold text-lg">{track.title}</h3>
            <p className="text-gray-500">{track.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}