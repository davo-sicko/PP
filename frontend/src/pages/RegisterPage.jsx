import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import api from '../api/axios';
import { validateEmail, validatePhone, validateUsername, validatePassword } from '../utils/validation';

export default function RegisterPage() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');
  
  const password = watch('password');

    const onSubmit = async (data) => {
    try {
      setServerError('');
      // ВРЕМЕННАЯ ЗАГЛУШКА (пока нет бэкенда)
      // Мы просто берем данные из формы и пускаем пользователя внутрь
      setAuth({ 
        user: { 
          id: 1, 
          displayName: data.displayName, 
          username: data.username,
          avatar: 'https://i.pravatar.cc/150?u=test' // Фейковая аватарка
        }, 
        accessToken: 'fake-token' 
      });
      navigate('/');
      
      /* 
      // КОГДА БУДЕТ БЭКЕНД, РАСКОММЕНТИРУЙТЕ ЭТО:
      const response = await api.post('/auth/register', data);
      setAuth({ user: response.data.user, accessToken: response.data.accessToken });
      navigate('/');
      */
    } catch (error) {
      setServerError(error.response?.data?.error || 'Ошибка регистрации.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Создать аккаунт</h2>
        </div>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {serverError && <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{serverError}</div>}
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Имя</label>
              <input {...register('displayName', { required: 'Введите имя' })} className="input-field" />
              {errors.displayName && <p className="text-red-500 text-xs mt-1">{errors.displayName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input {...register('username', { required: 'Введите username', validate: validateUsername })} className="input-field" />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message || 'Только латиница и цифры (мин. 3)'}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" {...register('email', { required: 'Введите email', validate: validateEmail })} className="input-field" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message || 'Неверный формат email'}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Телефон</label>
              <input {...register('phone', { required: 'Введите телефон', validate: validatePhone })} className="input-field" placeholder="+79991234567" />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message || 'Неверный формат'}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Дата рождения</label>
              <input type="date" {...register('birthDate', { required: 'Укажите дату' })} className="input-field" />
              {errors.birthDate && <p className="text-red-500 text-xs mt-1">{errors.birthDate.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Пароль</label>
            <input type="password" {...register('password', { required: 'Введите пароль', validate: validatePassword })} className="input-field" />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message || 'Минимум 8 символов'}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Повтор пароля</label>
            <input type="password" {...register('passwordConfirm', { 
              required: 'Повторите пароль', 
              validate: value => value === password || 'Пароли не совпадают' 
            })} className="input-field" />
            {errors.passwordConfirm && <p className="text-red-500 text-xs mt-1">{errors.passwordConfirm.message}</p>}
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary mt-4">
            {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="text-center text-sm">
          <span className="text-gray-500">Уже есть аккаунт? </span>
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}