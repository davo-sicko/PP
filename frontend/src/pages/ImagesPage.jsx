import { mockImages } from '../api/mockData';

export default function ImagesPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Изображения</h1>
      {/* Masonry сетка с помощью Tailwind columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {mockImages.map(img => (
          <div key={img.id} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
            <img src={img.image} alt={img.title} className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
              <button className="self-end bg-red-600 text-white font-bold px-4 py-2 rounded-full">Сохранить</button>
              <div className="text-white">
                <p className="font-bold text-lg">{img.title}</p>
                <p className="text-sm opacity-80">{img.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}