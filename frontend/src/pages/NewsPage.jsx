import { mockNews } from '../api/mockData';

export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Главные новости</h1>
      <div className="space-y-6">
        {mockNews.map(news => (
          <div key={news.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row cursor-pointer hover:shadow-md transition-shadow">
            <div className="md:w-1/3">
              <img src={news.image} className="w-full h-48 md:h-full object-cover" />
            </div>
            <div className="p-6 md:w-2/3 flex flex-col justify-center">
              <span className="text-blue-600 font-semibold text-sm mb-2">{news.category} • {news.date}</span>
              <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
              <p className="text-gray-500">{news.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}