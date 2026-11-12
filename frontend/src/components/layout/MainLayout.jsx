import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, Music, Video, Image as ImageIcon, Newspaper, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { usePlayerStore } from '../../store/playerStore';
import { useEffect, useRef } from 'react';

export default function MainLayout() {
  const { user } = useAuthStore();
  const location = useLocation();
  
  const { currentTrack, isPlaying, togglePlay, setAudioElement } = usePlayerStore();
  const audioRef = useRef(null);

  useEffect(() => {
    setAudioElement(audioRef.current);
  }, [setAudioElement]);

  const navItems = [
    { path: '/', icon: Home, label: 'Главная' },
    { path: '/messages', icon: MessageCircle, label: 'Чаты' },
    { path: '/music', icon: Music, label: 'Музыка' },
    { path: '/video', icon: Video, label: 'Видео' },
    { path: '/images', icon: ImageIcon, label: 'Картинки' },
    { path: '/news', icon: Newspaper, label: 'Новости' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0a] pb-20">
      <audio ref={audioRef} />

      {/* 1. Левая панель */}
      <aside className="w-64 bg-[#0f0f0f] border-r border-zinc-800/50 hidden md:flex flex-col">
        <div className="p-6 flex justify-center">
          {/* Новый логотип */}
          <img src="/logo.png" alt="LOCO Logo" className="h-10 w-auto object-contain" />
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-gradient-to-r from-orange-500/10 to-rose-600/10 text-orange-500 font-bold border border-orange-500/20' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <item.icon size={22} className={isActive ? 'text-orange-500' : ''} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-zinc-800/50">
          <Link to="/profile" className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-900 transition-colors">
            <img src={user?.avatar} alt="avatar" className="w-10 h-10 rounded-full border-2 border-orange-500 object-cover" />
            <div>
              <p className="font-bold text-sm text-white">{user?.displayName}</p>
              <p className="text-xs text-zinc-500">@{user?.username}</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* 2. Центральная часть */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          <Outlet />
        </div>
      </main>

      {/* 3. Глобальный плеер */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 w-full h-20 bg-[#0f0f0f]/95 backdrop-blur-md border-t border-zinc-800/80 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] flex items-center px-6 justify-between z-50">
          <div className="flex items-center gap-4 w-1/3">
            <img src={currentTrack.cover} alt="cover" className="w-12 h-12 rounded-lg object-cover border border-zinc-700" />
            <div>
              <p className="font-bold text-sm text-white">{currentTrack.title}</p>
              <p className="text-xs text-zinc-400">{currentTrack.artist}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <SkipBack size={20} className="text-zinc-400 cursor-pointer hover:text-white transition" />
            <button onClick={togglePlay} className="w-12 h-12 bg-gradient-to-r from-orange-500 to-rose-600 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
            </button>
            <SkipForward size={20} className="text-zinc-400 cursor-pointer hover:text-white transition" />
          </div>
          
          <div className="w-1/3 flex justify-end">
             {/* Громкость */}
          </div>
        </div>
      )}
    </div>
  );
}