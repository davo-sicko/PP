import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export default function PrivateRoute() {
  const { isAuthenticated, isInitialized } = useAuthStore();

  if (!isInitialized) return <div className="flex h-screen items-center justify-center">Загрузка...</div>;
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}