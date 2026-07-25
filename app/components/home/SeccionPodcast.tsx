"use client";

export default function SeccionPodcast() {
  const podcastEpisodes = [
    { title: "The $2 Trillion Global Arms Race", duration: "26:39" },
    { title: "The Midterms May Hinge on One Thing", duration: "23:30" },
    { title: "What If AI Ruins Your Job, Not Takes It?", duration: "29:01" },
    { title: "Why Oil Didn't Hit $200", duration: "35:39" },
  ];

  return (
    <div className="border-t border-zinc-200 mt-10 pt-8">
      <h3 className="font-sans text-lg font-black uppercase text-zinc-900 mb-6">
        Podcast
      </h3>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Caja de Logo Trumponomics */}
        <div className="w-full md:w-36 h-36 bg-red-600 text-white flex flex-col justify-between p-4 flex-shrink-0 relative overflow-hidden">
          <span className="font-sans text-[10px] font-black uppercase tracking-[0.15em] self-start opacity-80">Segunda Derivada</span>
          <div className="font-serif text-xl font-black leading-none uppercase tracking-tighter">
            TRUMP<br />ONOMICS
          </div>
          <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full border-4 border-white opacity-20" />
        </div>

        {/* Cuadrícula de 4 Tarjetas */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {podcastEpisodes.map((episode, idx) => (
            <div key={idx} className="border border-zinc-250 p-4 flex flex-col justify-between min-h-[144px]">
              <div>
                <span className="text-[9px] font-black uppercase text-zinc-400 block mb-1">Trumponomics</span>
                <p className="font-sans text-sm font-bold text-zinc-900 leading-snug hover:underline cursor-pointer">
                  {episode.title}
                </p>
              </div>
              <span className="text-[10px] text-zinc-500 font-bold flex items-center gap-1 mt-3">
                🎧 Listen: {episode.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
