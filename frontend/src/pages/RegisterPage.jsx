import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
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
      // Когда бэкенд будет готов, удалите эти 7 строк и раскомментируйте код ниже
      setAuth({ 
        user: { 
          id: 1, 
          displayName: data.displayName, 
          username: data.username,
          avatar: 'https://i.pravatar.cc/150?u=test'
        }, 
        accessToken: 'fake-token' 
      });
      navigate('/');

      /* 
      // КОД ДЛЯ БУДУЩЕГО ПОДКЛЮЧЕНИЯ БЭКЕНДА:
      const response = await api.post('/auth/register', data);
      setAuth({ user: response.data.user, accessToken: response.data.accessToken });
      navigate('/');
      */
    } catch (error) {
      setServerError('Ошибка регистрации. Попробуйте позже.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Фоновое оранжевое свечение */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-lg w-full space-y-8 bg-[#141414] border border-zinc-800/60 p-10 rounded-3xl shadow-2xl relative z-10">
        <div>
          {/* Логотип LOCO */}
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="LOCO Logo" 
              className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]" 
            />
          </div>
          <h2 className="text-center text-3xl font-black tracking-tight text-white">Создать аккаунт</h2>
          <p className="mt-2 text-center text-sm text-zinc-400">Присоединяйся к LOCO</p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {serverError && (
            <div className="text-rose-500 text-sm text-center bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl">
              {serverError}
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Имя</label>
              <input 
                {...register('displayName', { required: 'Введите имя' })} 
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                placeholder="Иван"
              />
              {errors.displayName && <p className="text-rose-500 text-xs mt-1">{errors.displayName.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Username</label>
              <input 
                {...register('username', { required: 'Введите username', validate: validateUsername })} 
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                placeholder="ivan_dev"
              />
              {errors.username && <p className="text-rose-500 text-xs mt-1">{errors.username.message || 'Неверный формат'}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">Email</label>
            <input 
              type="email" 
              {...register('email', { required: 'Введите email', validate: validateEmail })} 
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
              placeholder="user@example.com"
            />
            {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email.message || 'Неверный формат'}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Телефон</label>
              <input 
                {...register('phone', { required: 'Введите телефон', validate: validatePhone })} 
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                placeholder="+79991234567" 
              />
              {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone.message || 'Неверный формат'}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Дата рождения</label>
              <input 
                type="date" 
                {...register('birthDate', { required: 'Укажите дату' })} 
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all [color-scheme:dark]" 
              />
              {errors.birthDate && <p className="text-rose-500 text-xs mt-1">{errors.birthDate.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">Пароль</label>
            <input 
              type="password" 
              {...register('password', { required: 'Введите пароль', validate: validatePassword })} 
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
              placeholder="Минимум 8 символов"
            />
            {errors.password && <p className="text-rose-500 text-xs mt-1">{errors.password.message || 'Слишком короткий пароль'}</p>}
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">Повтор пароля</label>
            <input 
              type="password" 
              {...register('passwordConfirm', { 
                required: 'Повторите пароль', 
                validate: value => value === password || 'Пароли не совпадают' 
              })} 
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
              placeholder="••••••••"
            />
            {errors.passwordConfirm && <p className="text-rose-500 text-xs mt-1">{errors.passwordConfirm.message}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full px-4 py-3 mt-6 font-bold text-white bg-gradient-to-r from-orange-500 to-rose-600 rounded-xl hover:from-orange-400 hover:to-rose-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#141414] transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          >
            {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="text-center text-sm mt-4">
          <span className="text-zinc-500">Уже есть аккаунт? </span>
          <Link to="/login" className="font-bold text-orange-500 hover:text-orange-400 transition-colors">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}