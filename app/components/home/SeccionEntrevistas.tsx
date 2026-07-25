"use client";

export default function SeccionEntrevistas() {
  const entrevistas = [
    { title: "Delta Travel Demand Withstands Fuel Costs", image: "/russian_inflation.png", duration: "6:13" },
    { title: "Delta Rises on Profit Guidance; EasyJet Moves on Apollo Bid | Stock Movers", image: "/federal_reserve.png", duration: "4:14" },
    { title: "SK Hynix Set to Make Record-Setting US Debut", image: "/middle_east_friendship.png", duration: "2:09" },
    { title: "Nadia Martin Wiggen on Volatile Week in Oil", image: "/russian_inflation.png", duration: "7:26" },
  ];

  return (
    <div className="border-t border-zinc-200 mt-10 pt-8">
      <h3 className="font-sans text-lg font-black uppercase text-zinc-900 mb-6">
        Entrevistas
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {entrevistas.map((video, idx) => (
          <article key={idx} className="group cursor-pointer">
            <div className="relative aspect-video w-full bg-zinc-900 rounded-md overflow-hidden mb-2">
              <img src={video.image} className="absolute inset-0 w-full h-full object-cover opacity-60" alt={video.title} />
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-850 opacity-40 group-hover:opacity-60 transition-opacity" />
              <span className="absolute bottom-2 left-2 bg-black/80 text-[10px] font-black text-white px-2 py-0.5 rounded-none flex items-center gap-1.5">
                ▶ {video.duration}
              </span>
            </div>
            <h4 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600">
              {video.title}
            </h4>
          </article>
        ))}
      </div>
    </div>
  );
}
