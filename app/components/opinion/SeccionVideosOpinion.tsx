"use client";

import { useState } from "react";

export default function SeccionVideosOpinion() {
  const [activeSlide, setActiveSlide] = useState(0);

  const videoSlides = [
    [
      { title: "El auge de la moda tradicional como herramienta política", duration: "1:29" },
      { title: "¿Quién es el nuevo primer ministro?", duration: "1:43" },
      { title: "Una prueba crítica para la oposición", duration: "2:56" },
      { title: "Un futuro con IA: ¿esperanza o amenaza para los trabajadores?", duration: "3:12" },
    ],
    [
      { title: "El cambio arancelario global golpea las cadenas de suministro", duration: "4:05" },
      { title: "Por qué la cultura de oficina moderna está cambiando", duration: "2:18" },
      { title: "La próxima era de la manufactura de semiconductores", duration: "5:40" },
      { title: "Los mercados de energía se adaptan a la nueva realidad geopolítica", duration: "3:55" },
    ],
    [
      { title: "Recortes de tasas y la inflación global", duration: "3:30" },
      { title: "Cómo navegan las startups tecnológicas la regulación de IA", duration: "4:22" },
      { title: "El futuro del transporte público en las grandes ciudades", duration: "2:45" },
      { title: "Transición energética limpia: retos y oportunidades", duration: "6:10" },
    ],
  ];

  const totalSlides = videoSlides.length;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="border-t border-zinc-200 mt-10 pt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-sans text-lg font-black uppercase text-zinc-900">
          Videos
        </h3>
      </div>

      {/* Cuadrícula de Tarjetas de Video (Carrusel Interactivo) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-300">
        {videoSlides[activeSlide].map((video, idx) => (
          <article key={idx} className="group cursor-pointer flex flex-col">
            <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden mb-2 bg-zinc-900 border border-zinc-200 shadow-xs">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 opacity-75 group-hover:opacity-90 transition-opacity" />
              <span className="absolute top-2.5 left-2.5 bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-xs">
                Opinión
              </span>

              {/* Botón de reproducción e indicador de duración */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                <div className="w-7 h-7 rounded-full bg-black/70 flex items-center justify-center border border-white/40 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white drop-shadow-sm">
                  {video.duration}
                </span>
              </div>
            </div>

            <h4 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600 mt-1">
              {video.title}
            </h4>
          </article>
        ))}
      </div>

      {/* Controles del Carrusel */}
      <div className="flex items-center justify-between mt-6 pt-2">
        <div className="flex items-center gap-2 mx-auto">
          {videoSlides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveSlide(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === dotIdx ? 'bg-black w-5' : 'bg-zinc-300 w-2 hover:bg-zinc-400'
              }`}
              aria-label={`Slide ${dotIdx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-600 hover:border-black hover:text-black transition-colors"
            aria-label="Previous videos"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-600 hover:border-black hover:text-black transition-colors"
            aria-label="Next videos"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
