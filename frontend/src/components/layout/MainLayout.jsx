import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, Music, Video, Image, Newspaper, User, Search } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export default function MainLayout() {
  const { user } = useAuthStore();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Главная' },
    { path: '/messages', icon: MessageCircle, label: 'Сообщения' },
    { path: '/music', icon: Music, label: 'Музыка' },
    { path: '/video', icon: Video, label: 'Видео' },
    { path: '/images', icon: Image, label: 'Изображения' },
    { path: '/news', icon: Newspaper, label: 'Новости' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* 1. Левая панель (Навигация) */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-black text-blue-600 tracking-tighter">MultiApp</h1>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                location.pathname === item.path ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon size={22} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <Link to="/profile" className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100">
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">
              {user?.displayName?.[0] || 'U'}
            </div>
            <div>
              <p className="font-semibold text-sm">{user?.displayName}</p>
              <p className="text-xs text-gray-500">@{user?.username}</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* 2. Центральная часть (Контент) */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Верхняя панель поиска */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Поиск по MultiApp..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet /> {/* Сюда будут рендериться страницы */}
        </div>
      </main>

      {/* 3. Правая панель (Контекстная) */}
      <aside className="w-80 bg-white border-l border-gray-200 hidden lg:block p-6">
        <h2 className="text-lg font-bold mb-4">Тренды</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500">Рекомендации</p>
            <p className="font-medium mt-1">Здесь будет очередь воспроизведения или друзья</p>
          </div>
        </div>
      </aside>
    </div>
  );
}