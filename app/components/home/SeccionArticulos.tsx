"use client";

export default function SeccionArticulos() {
  const articulos = [
    { title: "How Once-Struggling SK Hynix Became a Trillion-Dollar Company", image: "/middle_east_friendship.png" },
    { title: "How Trump and AI Data Centers Are Boosting Nuclear Power", image: "/federal_reserve.png" },
    { title: "How the Future of Hormuz Is Testing Oman's Balancing Act", image: "/russian_inflation.png" },
    { title: "Why Europe's New Digital Border Checks Are Causing Big Delays", image: "/middle_east_friendship.png" },
  ];

  return (
    <div className="border-t border-zinc-200 mt-10 pt-8">
      <h3 className="font-sans text-lg font-black uppercase text-zinc-900 mb-6">
        Artículos
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {articulos.map((article, idx) => (
          <article key={idx} className="flex flex-col">
            <div className="aspect-video w-full mb-3 rounded-md overflow-hidden relative border border-zinc-200">
              <img src={article.image} className="absolute inset-0 w-full h-full object-cover" alt={article.title} />
            </div>
            <h4 className="text-xs font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
              {article.title}
            </h4>
          </article>
        ))}
      </div>
    </div>
  );
}
