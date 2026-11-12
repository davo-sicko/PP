import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import api from './api/axios';
import { useAuthStore } from './store/authStore';

// Компоненты
import PrivateRoute from './components/auth/PrivateRoute';
import MainLayout from './components/layout/MainLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

export default function App() {
  const { setAuth, clearAuth, setInitialized } = useAuthStore();

  // Проверка сессии при загрузке приложения (перезагрузка страницы)
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Если есть httpOnly cookie, бэкенд вернет новый access token
        const { data } = await api.post('/auth/refresh');
        setAuth({ user: data.user, accessToken: data.accessToken });
      } catch (error) {
        clearAuth(); // Сессии нет
      } finally {
        setInitialized(); // Готово, можно рендерить роутер
      }
    };
    initAuth();
  }, [setAuth, clearAuth, setInitialized]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Публичные роуты */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Защищенные роуты */}
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            {/* Заглушки для остальных разделов */}
            <Route path="/messages" element={<div className="p-4">Мессенджер в разработке</div>} />
            <Route path="/music" element={<div className="p-4">Музыка в разработке</div>} />
            <Route path="/video" element={<div className="p-4">Видео в разработке</div>} />
            <Route path="/images" element={<div className="p-4">Изображения в разработке</div>} />
            <Route path="/news" element={<div className="p-4">Новости в разработке</div>} />
            <Route path="/profile" element={<div className="p-4">Профиль в разработке</div>} />
          </Route>
        </Route>
        
        {/* Редирект на главную при несуществующих путях */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}