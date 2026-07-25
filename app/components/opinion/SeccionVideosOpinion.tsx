"use client";

import { useState } from "react";

export default function SeccionVideosOpinion() {
  const [activeSlide, setActiveSlide] = useState(0);

  const videoSlides = [
    [
      { title: "China's Hanfu Boom Is a Political Tool", duration: "1:29", img: "/middle_east_friendship.png" },
      { title: "Who Is the UK's New Prime Minister?", duration: "1:43", img: "/russian_inflation.png" },
      { title: "This Is a Critical Test for Democrats", duration: "2:56", img: "/federal_reserve.png" },
      { title: "An AI Future: Hope or Threat for Real Workers?", duration: "3:12", img: "/middle_east_friendship.png" },
    ],
    [
      { title: "Global Tariff Shift Disrupts Supply Chains", duration: "4:05", img: "/federal_reserve.png" },
      { title: "Why Modern Office Work Culture Is Evolving", duration: "2:18", img: "/russian_inflation.png" },
      { title: "The Next Era of Semiconductor Manufacturing", duration: "5:40", img: "/middle_east_friendship.png" },
      { title: "Energy Markets Adapt to New Geopolitical Reality", duration: "3:55", img: "/federal_reserve.png" },
    ],
    [
      { title: "Central Bank Rate Cuts and Global Inflation", duration: "3:30", img: "/russian_inflation.png" },
      { title: "How Tech Startups Are Navigating AI Regulation", duration: "4:22", img: "/middle_east_friendship.png" },
      { title: "The Future of Public Transit in Major Cities", duration: "2:45", img: "/federal_reserve.png" },
      { title: "Clean Energy Transition: Challenges and Opportunities", duration: "6:10", img: "/russian_inflation.png" },
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
              <img 
                src={video.img} 
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-[1.03] transition-transform duration-300" 
                alt={video.title} 
              />
              <span className="absolute top-2.5 left-2.5 bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-xs">
                Opinion
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

      {/* Controles del Carrusel (Indicadores de puntos al centro + Flechas de navegación a la derecha) */}
      <div className="flex items-center justify-between mt-6 pt-2">
        {/* Puntos Indicadores al Centro */}
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

        {/* Botones Flecha Anteriores/Siguientes (Alineados como en la imagen de referencia) */}
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
