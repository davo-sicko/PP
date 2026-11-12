import { mockImages } from '../api/mockData';
import { Plus } from 'lucide-react';

export default function ImagesPage() {
  return (
    <div className="max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-white">Изображения</h1>
        <button className="flex items-center gap-2 bg-[#141414] border border-zinc-800 hover:bg-zinc-800 text-white px-4 py-2 rounded-xl font-bold transition-colors">
          <Plus size={18} /> Создать доску
        </button>
      </div>

      {/* Masonry сетка с помощью Tailwind columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {mockImages.map(img => (
          <div key={img.id} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer border border-zinc-800/50">
            <img src={img.image} alt={img.title} className="w-full object-cover" />
            
            {/* Оверлей при наведении */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
              <button className="self-end bg-gradient-to-r from-orange-500 to-rose-600 text-white font-bold px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:scale-105 transition-transform">
                Сохранить
              </button>
              <div className="text-white">
                <p className="font-bold text-lg leading-tight">{img.title}</p>
                <p className="text-sm text-zinc-300 mt-1">{img.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}