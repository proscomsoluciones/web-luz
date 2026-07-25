"use client";

export default function HistoriasColumnistas() {
  const columnistsRow1 = [
    { title: "Quashed Cleantech Opportunities Are Costing Us Billions", author: "By Mark Gongloff, Columnist", img: "/middle_east_friendship.png" },
    { title: "How to Fix Social Security, in Six Words", author: "By Kathryn Anne Edwards, Columnist", img: "/russian_inflation.png" },
    { title: "Ukraine's War Effort Just Got a Reboot", author: "By Marc Champion, Columnist", img: "/federal_reserve.png" },
  ];

  const columnistsRow2 = [
    { title: "Quashed Cleantech Opportunities Are Costing Us Billions", author: "By Mark Gongloff, Columnist", img: "/middle_east_friendship.png" },
    { title: "How to Fix Social Security, in Six Words", author: "By Kathryn Anne Edwards, Columnist", img: "/russian_inflation.png" },
    { title: "Ukraine's War Effort Just Got a Reboot", author: "By Marc Champion, Columnist", img: "/federal_reserve.png" },
  ];

  return (
    <div className="flex flex-col gap-8 pt-4">
      {/* 2 Fila de Historias Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-zinc-200 pb-8">
        
        <article className="flex flex-col group cursor-pointer md:border-r md:border-zinc-200 md:pr-6">
          <div className="aspect-[16/10] w-full mb-3 rounded-sm overflow-hidden border border-zinc-200 relative bg-zinc-50">
            <img 
              src="/middle_east_friendship.png" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" 
              alt="OpenAI Hugging Face" 
            />
          </div>
          <h3 className="font-serif text-2xl font-black leading-tight text-zinc-950 group-hover:text-blue-700 transition-colors">
            OpenAI&apos;s Hugging Face Breach Shows AI Is Getting Too Hard to Contain
          </h3>
          <p className="text-xs text-blue-600 font-bold mt-2">
            By Parmy Olson, Columnist
          </p>
        </article>

        <article className="flex flex-col group cursor-pointer">
          <div className="aspect-[16/10] w-full mb-3 rounded-sm overflow-hidden border border-zinc-200 relative bg-zinc-50">
            <img 
              src="/federal_reserve.png" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" 
              alt="Voting Laws" 
            />
          </div>
          <h3 className="font-serif text-2xl font-black leading-tight text-zinc-950 group-hover:text-blue-700 transition-colors">
            Forget the SAVE Act. There&apos;s a Better Way to Fix US Voting Laws
          </h3>
          <p className="text-xs text-blue-600 font-bold mt-2">
            By Ronald Brownstein, Columnist
          </p>
        </article>

      </div>

      {/* Fila 1 de Columnistas con Avatares */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-200 pb-6">
        {columnistsRow1.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 group cursor-pointer">
            <img 
              src={item.img} 
              className="w-12 h-12 rounded-full object-cover border border-zinc-200 flex-shrink-0" 
              alt={item.author} 
            />
            <div className="flex flex-col">
              <h4 className="text-xs font-bold leading-snug text-zinc-950 group-hover:text-blue-700">
                {item.title}
              </h4>
              <span className="text-[10px] text-blue-600 font-semibold mt-1">
                {item.author}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Fila 2 de Columnistas con Avatares */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columnistsRow2.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 group cursor-pointer">
            <img 
              src={item.img} 
              className="w-12 h-12 rounded-full object-cover border border-zinc-200 flex-shrink-0" 
              alt={item.author} 
            />
            <div className="flex flex-col">
              <h4 className="text-xs font-bold leading-snug text-zinc-950 group-hover:text-blue-700">
                {item.title}
              </h4>
              <span className="text-[10px] text-blue-600 font-semibold mt-1">
                {item.author}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
