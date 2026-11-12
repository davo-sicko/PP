import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,
  isInitialized: false, // Флаг: проверили ли мы сессию при загрузке

  setAuth: ({ user, accessToken }) => set({ 
    user, 
    accessToken, 
    isAuthenticated: true, 
    isInitialized: true 
  }),
  
  clearAuth: () => set({ 
    user: null, 
    accessToken: null, 
    isAuthenticated: false, 
    isInitialized: true 
  }),

  setInitialized: () => set({ isInitialized: true }),
}));