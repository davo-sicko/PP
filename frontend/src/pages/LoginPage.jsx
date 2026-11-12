import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');

  const onSubmit = async (data) => {
    try {
      setServerError('');
      // ВРЕМЕННАЯ ЗАГЛУШКА (пока нет бэкенда)
      setAuth({ 
        user: { 
          id: 1, 
          displayName: 'Иван Тестов', 
          username: data.login,
          avatar: 'https://i.pravatar.cc/150?u=test'
        }, 
        accessToken: 'fake-token' 
      });
      navigate('/');
    } catch (error) {
      setServerError('Ошибка входа. Проверьте данные.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Фоновое свечение */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-md w-full space-y-8 bg-[#141414] border border-zinc-800/60 p-10 rounded-3xl shadow-2xl relative z-10">
        <div>
          {/* Новый логотип */}
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="LOCO Logo" className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
          </div>
          <p className="mt-2 text-center text-sm text-zinc-400 font-medium">
            Общайся. Создавай. Будь в движении.
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {serverError && (
            <div className="text-rose-500 text-sm text-center bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl">
              {serverError}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Email или Username</label>
            <input
              {...register('login', { required: 'Введите email или username' })}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              placeholder="user@example.com"
            />
            {errors.login && <p className="text-rose-500 text-xs mt-1">{errors.login.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Пароль</label>
            <input
              type="password"
              {...register('password', { required: 'Введите пароль' })}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-rose-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full px-4 py-3 mt-4 font-bold text-white bg-gradient-to-r from-orange-500 to-rose-600 rounded-xl hover:from-orange-400 hover:to-rose-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#141414] transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          >
            {isSubmitting ? 'Загрузка...' : 'Войти'}
          </button>
        </form>

        <div className="text-center text-sm">
          <span className="text-zinc-500">Нет аккаунта? </span>
          <Link to="/register" className="font-bold text-orange-500 hover:text-orange-400 transition-colors">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
}