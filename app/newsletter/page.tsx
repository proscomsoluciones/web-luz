"use client";

import { useState } from "react";

const RECENT_EDITIONS = [
  {
    time: "hace 11 h",
    title: "Las apuestas apalancadas sobre un fabricante de chips se multiplicarán tras su debut",
    description: "Emisores de ETFs tienen al menos media docena de productos listos para lanzar la próxima semana."
  },
  {
    time: "9 de julio, 2026",
    title: "Los precios de los combustibles muestran que la inflación sigue siendo un riesgo",
    description: "Aunque el petróleo ha bajado, el costo de productos refinados como la gasolina resulta más persistente."
  },
  {
    time: "8 de julio, 2026",
    title: "Una tecnológica se vuelve la compañía más valiosa de la región",
    description: "Su valuación se mantiene relativamente baja pese al dominio continuo de sus chips en centros de datos de IA."
  }
];

const MORE_NEWSLETTERS = [
  {
    title: "Resumen Vespertino Regional",
    description: "Entiende las historias más importantes del día con contexto y análisis.",
    badge: "DIARIO",
    type: "free"
  },
  {
    title: "Resumen Matutino",
    description: "Ponte al día con todo lo que necesitas saber, desde noticias de la madrugada hasta las historias del día.",
    badge: "DIARIO",
    type: "free"
  },
  {
    title: "Dinero",
    description: "Ideas y herramientas para hacer más con tu dinero.",
    badge: "3X SEMANAL",
    badgeExtra: "NUEVO",
    type: "free"
  },
  {
    title: "El Riesgo de Todo",
    host: "con Bruno Escalante",
    description: "Desarma la red de riesgos para consumidores e inversionistas en un mercado cambiante, solo para suscriptores.",
    badge: "SEMANAL",
    badgeTop: "SOLO SUSCRIPTORES",
    type: "premium"
  }
];

export default function NewsletterPage() {
  const [subscribedList, setSubscribedList] = useState<string[]>([]);

  const toggleSubscribe = (title: string) => {
    if (subscribedList.includes(title)) {
      setSubscribedList(subscribedList.filter((item) => item !== title));
    } else {
      setSubscribedList([...subscribedList, title]);
    }
  };

  return (
    <div className="flex flex-col bg-white text-zinc-950 font-sans flex-1">

      {/* Main Content Area */}
      <main className="mx-auto w-full max-w-[1280px] px-4 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-200 pb-12 mb-12">

          <div className="lg:col-span-3">
            <h1 className="font-serif text-3xl font-black text-black tracking-tight sticky top-24">
              Newsletters
            </h1>
          </div>

          <div className="lg:col-span-9 flex flex-col gap-12">

            {/* Destacado: Markets Daily */}
            <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 flex flex-col items-start justify-center min-h-[160px]">
                <div className="flex gap-2 mb-3">
                  <span className="bg-zinc-100 text-zinc-700 text-[9px] font-black px-2 py-0.5 uppercase tracking-wider rounded-none">
                    DIARIO
                  </span>
                  <span className="bg-red-50 text-red-655 text-[9px] font-black px-2 py-0.5 uppercase tracking-wider rounded-none">
                    POPULAR
                  </span>
                </div>
                <h2 className="font-serif text-4.5xl font-black leading-none text-zinc-900 mb-3">
                  Markets Daily
                </h2>
                <p className="text-sm text-zinc-550 leading-relaxed max-w-xl mb-6">
                  Qué está pasando en acciones, bonos, divisas y materias primas ahora mismo — y qué los moverá después.
                </p>

                <button
                  onClick={() => toggleSubscribe("Markets Daily")}
                  className="bg-black hover:bg-zinc-800 text-white font-black text-xs py-2.5 px-6 rounded-full flex items-center gap-2 transition-colors shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                  </svg>
                  {subscribedList.includes("Markets Daily") ? "Suscrito" : "Suscribirme"}
                </button>
              </div>

              <div className="md:col-span-5">
                <div className="aspect-square w-full bg-blue-600 rounded-md overflow-hidden relative shadow-md border border-blue-700 flex flex-col justify-between p-6 text-white">
                  <span className="bg-blue-800/80 text-[9px] font-black px-2 py-0.5 uppercase tracking-wider self-start rounded-none">
                    SOLO SUSCRIPTORES
                  </span>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-yellow-400 absolute" />
                      <div className="absolute w-24 h-0.5 bg-white transform rotate-45" />
                      <div className="absolute w-24 h-0.5 bg-white transform -rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Ediciones Recientes */}
            <div className="border-t border-zinc-200 pt-8">
              <h3 className="text-xs font-black uppercase tracking-wider text-zinc-900 mb-6">
                Ediciones Recientes
              </h3>

              <div className="flex flex-col divide-y divide-zinc-200">
                {RECENT_EDITIONS.map((edition, idx) => (
                  <article key={idx} className="flex gap-6 py-6 items-start">
                    <div className="flex-1">
                      <span className="text-[11px] font-bold text-zinc-400 block mb-1">
                        {edition.time}
                      </span>
                      <h4 className="font-serif text-lg font-black text-black hover:text-blue-700 transition-colors leading-snug">
                        {edition.title}
                      </h4>
                      <p className="text-xs text-zinc-500 mt-2 leading-relaxed max-w-2xl">
                        {edition.description}
                      </p>
                    </div>

                    <div className="w-32 h-20 rounded-md overflow-hidden border border-zinc-250 flex-shrink-0 relative bg-gradient-to-br from-zinc-200 to-zinc-350" />
                  </article>
                ))}
              </div>

              <div className="flex justify-center mt-6">
                <button className="border border-zinc-950 hover:bg-zinc-100 text-black px-8 py-2.5 text-xs font-bold uppercase rounded-md transition-colors shadow-xs">
                  Cargar más
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Más Newsletters */}
        <section className="pt-4">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
            <h3 className="text-lg font-black uppercase tracking-wider text-black">
              Más Newsletters
            </h3>
            <a href="#" className="text-xs font-bold text-zinc-650 hover:underline">
              Ver todos &gt;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {MORE_NEWSLETTERS.map((newsletter, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col border border-zinc-200 rounded-md overflow-hidden bg-white shadow-xs">

                <div className="aspect-square w-full relative overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-250 border-b border-zinc-200">
                  {newsletter.badgeTop && (
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-[8px] font-black px-1.5 py-0.5 uppercase tracking-wider rounded-none">
                      {newsletter.badgeTop}
                    </span>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between min-h-[160px]">
                  <div>
                    <div className="flex gap-1.5 items-center mb-1.5">
                      <span className="bg-zinc-100 text-zinc-650 text-[8px] font-black px-1.5 py-0.5 uppercase tracking-wider rounded-none">
                        {newsletter.badge}
                      </span>
                      {newsletter.badgeExtra && (
                        <span className="bg-yellow-100 text-yellow-800 text-[8px] font-black px-1.5 py-0.5 uppercase tracking-wider rounded-none">
                          {newsletter.badgeExtra}
                        </span>
                      )}
                    </div>
                    <h4 className="text-xs font-black text-zinc-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {newsletter.title}
                    </h4>
                    {newsletter.host && (
                      <p className="text-[10px] text-zinc-455 font-bold leading-tight mt-0.5">{newsletter.host}</p>
                    )}
                    <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed line-clamp-3">
                      {newsletter.description}
                    </p>
                  </div>

                  <div className="border-t border-zinc-150 pt-3 mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-zinc-500 hover:underline">
                      Última edición
                    </span>

                    {newsletter.type === "premium" ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubscribe(newsletter.title);
                        }}
                        className="bg-black hover:bg-zinc-800 text-white font-black text-[9px] px-3 py-1 rounded-full flex items-center gap-1 transition-all"
                      >
                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                        </svg>
                        {subscribedList.includes(newsletter.title) ? "Suscrito" : "Suscribirme"}
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubscribe(newsletter.title);
                        }}
                        className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors"
                        aria-label="Agregar"
                      >
                        {subscribedList.includes(newsletter.title) ? "✓" : "+"}
                      </button>
                    )}
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
