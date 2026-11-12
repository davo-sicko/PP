import { mockNews } from '../api/mockData';

export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      <h1 className="text-3xl font-black mb-8 text-white">Главные новости</h1>
      
      <div className="space-y-6">
        {mockNews.map(news => (
          <div 
            key={news.id} 
            className="bg-[#141414] border border-zinc-800/60 rounded-2xl overflow-hidden flex flex-col md:flex-row cursor-pointer hover:border-zinc-700 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="md:w-2/5 overflow-hidden">
              <img 
                src={news.image} 
                className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={news.title}
              />
            </div>
            
            <div className="p-6 md:w-3/5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-orange-500 font-bold text-xs uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full">
                  {news.category}
                </span>
                <span className="text-zinc-500 text-sm">{news.date}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors leading-tight">
                {news.title}
              </h2>
              
              <p className="text-zinc-400 leading-relaxed line-clamp-3">
                {news.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}