import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import api from '../api/axios';

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');

    const onSubmit = async (data) => {
    try {
      setServerError('');
      // ВРЕМЕННАЯ ЗАГЛУШКА
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
      setServerError(error.response?.data?.error || 'Ошибка входа.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Вход в MultiApp</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {serverError && <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{serverError}</div>}
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email или Username</label>
            <input
              {...register('login', { required: 'Введите email или username' })}
              className="input-field"
              placeholder="user@example.com"
            />
            {errors.login && <p className="text-red-500 text-xs mt-1">{errors.login.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Пароль</label>
            <input
              type="password"
              {...register('password', { required: 'Введите пароль' })}
              className="input-field"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary">
            {isSubmitting ? 'Загрузка...' : 'Войти'}
          </button>
        </form>

        <div className="text-center text-sm">
          <span className="text-gray-500">Нет аккаунта? </span>
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
}