import { mockTracks } from '../api/mockData';
import { usePlayerStore } from '../store/playerStore';
import { Play, Pause } from 'lucide-react';

export default function MusicPage() {
  const { playTrack, currentTrack, isPlaying, togglePlay } = usePlayerStore();

  const handlePlayClick = (e, track) => {
    e.stopPropagation();
    if (currentTrack?.id === track.id) {
      togglePlay();
    } else {
      playTrack(track);
    }
  };

  return (
    <div className="max-w-6xl mx-auto pb-10">
      <h1 className="text-3xl font-black mb-8 text-white">Музыка</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockTracks.map(track => {
          const isCurrent = currentTrack?.id === track.id;
          
          return (
            <div 
              key={track.id} 
              className={`bg-[#141414] p-4 rounded-2xl shadow-lg border transition-all group relative cursor-pointer hover:bg-zinc-900/80 ${isCurrent ? 'border-orange-500/50' : 'border-zinc-800/60 hover:border-zinc-700'}`} 
              onClick={() => playTrack(track)}
            >
              <div className="relative rounded-xl overflow-hidden mb-4 shadow-md">
                <img src={track.cover} alt={track.title} className="w-full aspect-square object-cover" />
                
                {/* Кнопка Play поверх обложки */}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${isCurrent || !isCurrent ? 'opacity-0 group-hover:opacity-100' : ''}`}>
                  <button 
                    onClick={(e) => handlePlayClick(e, track)}
                    className="w-14 h-14 bg-gradient-to-r from-orange-500 to-rose-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(249,115,22,0.5)] transform hover:scale-110 transition-transform"
                  >
                    {isCurrent && isPlaying ? <Pause fill="currentColor" size={24} /> : <Play fill="currentColor" size={24} className="ml-1" />}
                  </button>
                </div>
              </div>
              
              <h3 className={`font-bold text-lg truncate ${isCurrent ? 'text-orange-500' : 'text-white'}`}>
                {track.title}
              </h3>
              <p className="text-zinc-400 text-sm truncate">{track.artist}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}