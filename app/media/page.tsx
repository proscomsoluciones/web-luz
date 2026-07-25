"use client";

import { useState } from "react";

const SHOWS = [
  {
    title: "Segunda Derivada INVESTIGA",
    subtitle: "SERIE DOCUMENTAL",
    duration: "45:00"
  },
  {
    title: "Segunda Derivada PRIMER",
    subtitle: "DE LO MICRO A LO MACRO",
    duration: "25:30"
  },
  {
    title: "LÍDERES",
    subtitle: "con Renata Vidal",
    duration: "22:15"
  },
  {
    title: "el circuito",
    subtitle: "con Camila Reyes",
    duration: "24:10"
  },
  {
    title: "MARKETING CUÁNTICO",
    subtitle: "con Bruno Escalante",
    duration: "28:40"
  },
  {
    title: "EL EXPLORADOR INFINITO",
    subtitle: "con Ismael Duarte",
    duration: "19:52"
  },
  {
    title: "Documentales Cortos",
    subtitle: "ORIGINALES SEGUNDA DERIVADA",
    duration: "12:15"
  },
  {
    title: "Documentales Semanales",
    subtitle: "ORIGINALES SEGUNDA DERIVADA",
    duration: "30:00"
  }
];

export default function MediaPage() {
  const [activeShow, setActiveShow] = useState(SHOWS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col bg-black text-white font-sans flex-1">

      {/* Sub Header para Originales */}
      <div className="border-b border-zinc-900 bg-black">
        <div className="mx-auto max-w-[1280px] px-4 pt-6 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3366] mb-1 block">Segunda Derivada</span>
          <h1 className="font-serif text-5xl font-black tracking-tight text-white leading-none">
            Originales
          </h1>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-zinc-400 border-t border-zinc-900 pt-3 mt-4">
            <a href="#originales" className="hover:text-white transition-colors text-white border-b-2 border-[#ff3366] pb-1">Todos los Programas</a>
            <a href="/podcast" className="hover:text-white transition-colors">Podcasts</a>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="mx-auto w-full max-w-[1280px] px-4 py-8">

        {/* Reproductor Principal (Hero cinematográfico) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-900 pb-10 mb-10">
          <div className="lg:col-span-8">
            <div className="relative aspect-video w-full bg-zinc-950 border border-zinc-900 rounded-md overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
              <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-white hover:bg-zinc-200 text-black flex items-center justify-center transition-all transform hover:scale-105 shadow-2xl"
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/85 px-2 py-0.5 text-xs font-bold uppercase rounded-none">
                {activeShow.title} — {activeShow.duration}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="text-[10px] font-black uppercase text-[#ff3366] tracking-wider mb-2 block">REPRODUCIENDO AHORA</span>
            <h2 className="font-serif text-3.5xl font-black leading-tight text-white mb-2">
              {activeShow.title}
            </h2>
            <p className="text-xs uppercase font-bold text-zinc-550 mb-3 tracking-widest">
              {activeShow.subtitle}
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Mira episodios exclusivos, documentales y reportajes de investigación de nuestro equipo editorial.
            </p>
            <button className="self-start bg-white hover:bg-zinc-200 text-black px-6 py-2.5 text-xs font-black uppercase tracking-wider rounded-none transition-colors">
              Agregar a Mi Lista
            </button>
          </div>
        </section>

        {/* Grilla de Todos los Programas */}
        <section id="originales" className="mb-12">
          <h3 className="text-lg font-black uppercase tracking-wider text-white mb-6">
            Todos los Originales
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {SHOWS.map((show, idx) => (
              <article
                key={idx}
                onClick={() => {
                  setActiveShow(show);
                  setIsPlaying(false);
                }}
                className={`group cursor-pointer flex flex-col transition-all duration-200 transform hover:scale-[1.01] ${activeShow.title === show.title ? 'ring-2 ring-[#ff3366]' : ''}`}
              >
                <div className="relative aspect-[3/4] w-full mb-3 overflow-hidden rounded-md border border-zinc-900 bg-gradient-to-br from-zinc-700 to-zinc-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[9px] font-black uppercase text-zinc-400 tracking-wider mb-0.5">
                      {show.subtitle}
                    </span>
                    <h4 className="font-serif text-lg font-black leading-tight text-white group-hover:text-[#ff3366] transition-colors">
                      {show.title}
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

    </div>
  );
}
