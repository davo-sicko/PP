import { mockUser, mockPosts } from '../api/mockData';

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Шапка профиля */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="px-8 pb-8 relative">
          <img src={mockUser.avatar} className="w-32 h-32 rounded-full border-4 border-white absolute -top-16 bg-white" />
          <div className="mt-20 flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{mockUser.displayName}</h1>
              <p className="text-gray-500">@{mockUser.username}</p>
              <p className="mt-2 text-gray-700">{mockUser.bio}</p>
              <div className="flex gap-4 mt-4 text-sm">
                <span><strong className="text-gray-900">{mockUser.followers}</strong> подписчиков</span>
                <span><strong className="text-gray-900">{mockUser.following}</strong> подписок</span>
              </div>
            </div>
            <button className="px-6 py-2 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50">Редактировать</button>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">Мои публикации</h2>
      {/* Просто выводим посты из ленты для примера */}
      <div className="grid grid-cols-2 gap-4">
         {mockPosts.map(p => p.image && (
            <img key={p.id} src={p.image} className="w-full aspect-square object-cover rounded-xl" />
         ))}
      </div>
    </div>
  );
}