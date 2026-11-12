import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, Music, Video, Image as ImageIcon, Newspaper, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { usePlayerStore } from '../../store/playerStore';
import { useEffect, useRef } from 'react';

export default function MainLayout() {
  const { user } = useAuthStore();
  const location = useLocation();
  
  // Логика плеера
  const { currentTrack, isPlaying, togglePlay, setAudioElement } = usePlayerStore();
  const audioRef = useRef(null);

  useEffect(() => {
    setAudioElement(audioRef.current);
  }, [setAudioElement]);

  const navItems = [
    { path: '/', icon: Home, label: 'Главная' },
    { path: '/messages', icon: MessageCircle, label: 'Сообщения' },
    { path: '/music', icon: Music, label: 'Музыка' },
    { path: '/video', icon: Video, label: 'Видео' },
    { path: '/images', icon: ImageIcon, label: 'Картинки' },
    { path: '/news', icon: Newspaper, label: 'Новости' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 pb-20">
      {/* Скрытый аудио-элемент */}
      <audio ref={audioRef} />

      {/* 1. Левая панель */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-black text-blue-600 tracking-tighter">MultiApp</h1>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${location.pathname === item.path ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}>
              <item.icon size={22} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <Link to="/profile" className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100">
            <img src={user?.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-sm">{user?.displayName}</p>
              <p className="text-xs text-gray-500">@{user?.username}</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* 2. Центральная часть */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </main>

      {/* 3. Глобальный плеер (фиксирован внизу) */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 w-full h-20 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] flex items-center px-6 justify-between z-50">
          <div className="flex items-center gap-4 w-1/3">
            <img src={currentTrack.cover} alt="cover" className="w-12 h-12 rounded object-cover" />
            <div>
              <p className="font-bold text-sm">{currentTrack.title}</p>
              <p className="text-xs text-gray-500">{currentTrack.artist}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <SkipBack size={20} className="text-gray-500 cursor-pointer hover:text-gray-900" />
            <button onClick={togglePlay} className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition">
              {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
            </button>
            <SkipForward size={20} className="text-gray-500 cursor-pointer hover:text-gray-900" />
          </div>
          
          <div className="w-1/3 flex justify-end">
             {/* Место для громкости */}
          </div>
        </div>
      )}
    </div>
  );
}