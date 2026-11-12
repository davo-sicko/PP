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
import ProfilePage from './pages/ProfilePage';
import MusicPage from './pages/MusicPage';
import MessagesPage from './pages/MessagesPage';
import VideoPage from './pages/VideoPage';
import ImagesPage from './pages/ImagesPage';
import NewsPage from './pages/NewsPage';

export default function App() {
  const { setAuth, clearAuth, setInitialized } = useAuthStore();

  // Проверка сессии при загрузке приложения (перезагрузка страницы)
  useEffect(() => {
    const initAuth = async () => {
      /* ВРЕМЕННО ОТКЛЮЧЕНО
      try {
        const { data } = await api.post('/auth/refresh');
        setAuth({ user: data.user, accessToken: data.accessToken });
      } catch (error) {
        clearAuth();
      } finally {
        setInitialized();
      }
      */
     // Вместо этого сразу говорим, что инициализация прошла
     setInitialized(); 
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
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/images" element={<ImagesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Route>
        
        {/* Редирект на главную при несуществующих путях */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}