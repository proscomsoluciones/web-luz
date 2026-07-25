"use client";

export default function SeccionBoletinesOpinion() {
  const newsletters = [
    { author: "John Authers | Columnist", title: "The Oil Question That Really Matters for Stocks", img: "/middle_east_friendship.png" },
    { author: "Jessica Karl | Columnist", title: "Will AI Steal Jobs? It's Already Stolen the Job Search", img: "/russian_inflation.png" },
    { author: "Matt Levine | Columnist", title: "LSE Will Trade 22.83 Hours a Day", img: "/federal_reserve.png" },
    { author: "John Authers | Columnist", title: "Chancellor Healey Is Back. The '70s Needn't Be", img: "/middle_east_friendship.png" },
  ];

  return (
    <div className="border-t border-zinc-200 mt-10 pt-8">
      <h3 className="font-sans text-lg font-black uppercase text-zinc-900 mb-6">
        Newsletters
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {newsletters.map((item, idx) => (
          <article key={idx} className="flex flex-col group cursor-pointer">
            <div className="aspect-video w-full mb-3 rounded-md overflow-hidden relative border border-zinc-200 bg-zinc-50">
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" alt={item.title} />
            </div>
            <span className="text-[11px] text-blue-600 font-bold mb-1">
              {item.author}
            </span>
            <h4 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600">
              {item.title}
            </h4>
          </article>
        ))}
      </div>
    </div>
  );
}
