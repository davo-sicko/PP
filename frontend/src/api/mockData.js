export const mockUser = {
  id: 1,
  displayName: 'Иван Тестов',
  username: 'ivan_dev',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  bio: 'Frontend разработчик. Создаю MultiApp.',
  followers: 124,
  following: 56,
};

export const mockPosts = [
  {
    id: 1,
    author: { name: 'Мария Смирнова', username: 'mary_s', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    date: '2 часа назад',
    content: 'Всем привет! Как вам новый дизайн MultiApp? Работа проделана колоссальная',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    likes: 124,
    comments: 14,
  },
  {
    id: 2,
    author: { name: 'Алексей', username: 'alex_go', avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d' },
    date: '5 часов назад',
    content: 'Пишу бэкенд на Go. Обработка WebSocket просто сказка! Кто еще ждет мессенджер?',
    image: null,
    likes: 45,
    comments: 8,
  }
];

export const mockChats = [
  { id: 1, name: 'Мария Смирнова', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', lastMessage: 'Скинь макет плиз', time: '12:45', unread: 2, online: true },
  { id: 2, name: 'Алексей', avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d', lastMessage: 'Я доделал API для чата', time: '10:30', unread: 0, online: false },
];

export const mockMessages = [
  { id: 1, senderId: 2, text: 'Привет! Как дела с фронтендом?', time: '12:40' },
  { id: 2, senderId: 1, text: 'Привет! Верстаю потихоньку, музыкальный плеер делаю', time: '12:42' },
  { id: 3, senderId: 2, text: 'Круто! Скинь макет плиз', time: '12:45' },
];

export const mockTracks = [
  { id: 1, title: 'Neon Nights', artist: 'Synthwave Guy', duration: '3:45', cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=80', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 2, title: 'Deep Focus', artist: 'Lo-Fi Beats', duration: '2:30', cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&q=80', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 3, title: 'Summer Vibe', artist: 'Tropical House', duration: '4:12', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
];

export const mockImages = [
  { id: 1, title: 'Архитектура', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', author: 'Ivan' },
  { id: 2, title: 'Природа', image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80', author: 'Mary' },
  { id: 3, title: 'Дизайн', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80', author: 'Alex' },
  { id: 4, title: 'Минимализм', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&q=80', author: 'Ivan' },
  { id: 5, title: 'Космос', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80', author: 'Mary' },
];

export const mockVideos = [
  { id: 1, title: 'Обзор MultiApp MVP', author: 'Иван Тестов', views: '12 тыс.', date: '2 дня назад', thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80', duration: '10:15' },
  { id: 2, title: 'Как учить Go в 2026', author: 'Алексей', views: '45 тыс.', date: '1 неделя назад', thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80', duration: '25:40' },
];

export const mockNews = [
  { id: 1, title: 'Прорыв в области ИИ', category: 'Технологии', date: 'Сегодня', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80', desc: 'Новая модель показывает невероятные результаты в кодинге.' },
  { id: 2, title: 'Релиз новой игры', category: 'Игры', date: 'Вчера', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&q=80', desc: 'Ожидаемый экшен наконец-то вышел на всех платформах.' },
];