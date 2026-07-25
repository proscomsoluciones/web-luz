"use client";

import { useState } from "react";

const FEATURED_AUDIO = [
  {
    title: "Fundación",
    description: "Cada temporada, esta serie premiada te lleva dentro de un drama distinto de alto riesgo en la industria tecnológica."
  },
  {
    title: "El Programa de Camila Reyes",
    description: "Dale sentido al mundo con una conversación esencial, cada fin de semana."
  },
  {
    title: "Rendimientos Extraños",
    description: "Andrea Solís e Ismael Duarte exploran los temas más interesantes en finanzas, mercados y economía."
  },
  {
    title: "Movimientos del Mercado",
    description: "Conversaciones de cinco minutos sobre los movimientos bursátiles clave del día."
  },
  {
    title: "La Gran Historia",
    description: "Una gran historia, cada día. Nuestro equipo te lleva dentro de las noticias."
  },
  {
    title: "Noticias Ahora",
    description: "Las últimas noticias, cuando las quieras, actualizadas durante todo el día."
  }
];

const SCHEDULE_ITEMS = [
  { time: "17:46", title: "Renata Vidal, Capital Piedra, Socia", type: "text" },
  { time: "18:00", title: "Semana en Wall Street", type: "show" },
  { time: "18:08", title: "Bruno Escalante, Noticias Segunda Derivada, Presentador", type: "text" },
  { time: "19:00", title: "Maestros de los Negocios", type: "show" },
  { time: "19:08", title: "Fernanda Lozano, Seguros del Norte, Directora Ejecutiva", type: "text" },
  { time: "20:00", title: "Reflector de Podcasts", type: "show" },
  { time: "20:08", title: "Ricardo Salas, Gestión de Activos Tesis, Gerente de Inversión", type: "text" }
];

const PODCAST_ITEMS = [
  { show: "Líderes con Renata Vidal", date: "5 de julio", episode: "Una charla sobre alto rendimiento deportivo" },
  { show: "El Programa de Camila Reyes", date: "10 de julio", episode: "Cómo se planifica una transición energética" },
  { show: "Rendimientos Extraños", date: "10 de julio", episode: "Los ETFs apalancados de Corea sacuden los mercados" },
  { show: "Cosas de Dinero", date: "10 de julio", episode: "Pagado en huevos" },
  { show: "La Gran Historia", date: "10 de julio", episode: "La economía agotadora del tenis profesional" },
  { show: "La Gran Historia Asia", date: "7 de julio", episode: "Una potencia asiática muestra músculo militar" },
  { show: "El Trato", date: "8 de julio", episode: "Entrevista con una campeona olímpica" },
  { show: "Divulgación", date: "9 de diciembre", episode: "Estos funcionarios federales ejercen el poder de la transparencia" }
];

const RADIO_ITEMS = [
  { show: "Noticias Ahora", date: "10 de julio", episode: "Las bolsas cierran con alzas moderadas tras acuerdo de cese al fuego" },
  { show: "Movimientos del Mercado", date: "10 de julio", episode: "Tecnológicas y minoristas lideran las alzas" },
  { show: "Maestros de los Negocios", date: "9 de julio", episode: "Fernanda Lozano" },
  { show: "Amanecer Regional", date: "10 de julio", episode: "Vista previa de inflación" },
  { show: "Negocios Diario", date: "9 de julio", episode: "Crisis de talento en tierras raras" },
  { show: "Vigilancia", date: "10 de julio", episode: "10 de julio, 2026" },
  { show: "Este Fin de Semana", date: "5 de julio", episode: "Resumen político del feriado" },
  { show: "Aquí Está Por Qué", date: "10 de julio", episode: "Por qué el gasto en defensa no está rindiendo frutos" }
];

const DOCUMENTARIES = [
  { title: "Fundación", description: "En la temporada 6, un homicidio de un fundador tecnológico se convierte en símbolo del declive de una ciudad." },
  { title: "La Sexta Oficina", description: "Superpotencias, secretos y el espía que fue atrapado." },
  { title: "FIV Interrumpida", description: "Una investigación sobre errores clínicos y presiones financieras en clínicas de fertilidad." },
  { title: "El Suburbio", description: "Cómo un suburbio se convirtió en el epicentro de la lucha contra el contenido falso." },
  { title: "Pronóstico", description: "Una reportera documenta su propio viaje íntimo mientras descubre el negocio de la fertilidad." },
  { title: "El Cheque de Pago", description: "Una temporada global que explora la crisis de desigualdad tras la pandemia." }
];

const WORLD_ITEMS = [
  { show: "Amanecer Europa", date: "10 de julio", episode: "Cambios políticos en el Reino Unido" },
  { show: "Segunda Derivada Oceanía", date: "8 de julio", episode: "La mina que anticipa grandes conflictos" },
  { show: "Próxima África", date: "9 de julio", episode: "Cómo el fútbol moldea la política regional" },
  { show: "La Gran Historia Asia", date: "7 de julio", episode: "Una potencia asiática muestra músculo militar" },
  { show: "Amanecer Asia", date: "9 de julio", episode: "Fabricante de chips recauda financiamiento récord" }
];

export default function PodcastPage() {
  const [activePlay, setActivePlay] = useState(false);
  const [station, setStation] = useState("Nacional");

  return (
    <div className="flex flex-col bg-white text-zinc-950 font-sans flex-1">

      {/* Sub-Navegación */}
      <div className="border-b border-zinc-200 bg-white w-full">
        <div className="mx-auto max-w-[1280px] px-4 py-3">
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-bold text-zinc-650 uppercase tracking-wider">
            <a href="#" className="hover:text-black transition-colors text-black border-b-2 border-black pb-1">Programas</a>
            <a href="#" className="hover:text-black transition-colors">Radio</a>
            <a href="#" className="hover:text-black transition-colors">Podcasts</a>
          </nav>
        </div>
      </div>

      {/* Reproductor Principal */}
      <section className="bg-black text-white w-full py-8 border-b border-zinc-800">
        <div className="mx-auto max-w-[1280px] px-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">

              <div className="w-28 h-28 bg-[#1e2025] border border-zinc-850 overflow-hidden relative shadow-lg rounded-md flex-shrink-0 flex items-center justify-center p-3">
                <div className="text-center font-serif leading-none">
                  <span className="text-[7px] tracking-[0.25em] text-zinc-400 uppercase font-black">Segunda Derivada</span>
                  <div className="text-sm font-black mt-1 leading-snug text-white uppercase">Equilibrio de Poder</div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-bold mb-1">
                  <span>Radio Segunda Derivada</span>
                  <span className="text-zinc-600">•</span>
                  <span>{station}</span>
                </div>
                <h2 className="font-serif text-3.5xl font-black leading-tight text-white mb-2">
                  Equilibrio de Poder
                </h2>
                <p className="text-xs text-zinc-455 leading-relaxed max-w-2xl">
                  Un programa centrado en política y las decisiones que se toman en los pasillos del poder regional.
                </p>
              </div>
            </div>

            <div className="w-full bg-zinc-800 h-0.5 rounded-full relative">
              <div className="bg-white h-full w-[45%]" />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button className="text-zinc-400 hover:text-white" aria-label="Mute/Unmute">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
              </button>

              <button
                onClick={() => setActivePlay(!activePlay)}
                className="border border-white hover:bg-white hover:text-black text-white px-8 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2"
              >
                <span className="text-sm">🎧</span>
                <span>Escuchar en Vivo</span>
              </button>

              <div className="flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-655 animate-ping" />
                <span className="bg-red-655 text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-wider rounded-none">
                  EN VIVO
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="mx-auto w-full max-w-[1280px] px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-200 pb-10">

          <div className="lg:col-span-8 flex flex-col gap-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 mb-2 border-b border-zinc-200 pb-2">
              Audio Destacado
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {FEATURED_AUDIO.map((show, idx) => (
                <article key={idx} className="group cursor-pointer flex flex-col">
                  <div className="aspect-square w-full bg-gradient-to-br from-zinc-200 to-zinc-350 rounded-md mb-3 overflow-hidden border border-zinc-200 relative" />
                  <h4 className="font-sans text-sm font-black text-zinc-900 hover:text-blue-700 transition-colors">
                    {show.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 mt-1 leading-normal line-clamp-3">
                    {show.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 border-l border-zinc-200 pl-6">

            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <span className="text-xs font-bold text-zinc-650">Estación Actual</span>
              <select
                value={station}
                onChange={(e) => setStation(e.target.value)}
                className="bg-white border border-zinc-300 text-xs font-bold text-zinc-800 px-4 py-1.5 rounded-full outline-none cursor-pointer hover:bg-zinc-50"
              >
                <option value="Nacional">Nacional</option>
                <option value="Ciudad de México">Ciudad de México</option>
                <option value="Bogotá">Bogotá</option>
              </select>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase text-zinc-500 tracking-wider mb-4 border-b border-zinc-200 pb-2">
                Programación en Vivo
              </h4>

              <div className="flex flex-col divide-y divide-zinc-150">
                {SCHEDULE_ITEMS.map((item, idx) => (
                  <div key={idx} className="py-3 flex gap-4 items-start">
                    <span className="text-xs text-zinc-400 font-bold w-12 flex-shrink-0">{item.time}</span>

                    <div className="flex-1 flex gap-3 items-center">
                      {item.type === "show" && (
                        <div className="w-10 h-10 bg-gradient-to-br from-zinc-200 to-zinc-350 border border-zinc-300 rounded-md overflow-hidden flex-shrink-0" />
                      )}
                      <p className={`text-xs text-zinc-900 leading-snug ${item.type === "show" ? "font-black" : "font-medium text-zinc-600"}`}>
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        <section className="py-8 border-b border-zinc-200">
          <span className="text-xs font-bold text-zinc-500 block mb-4">Disponible en</span>
          <div className="flex flex-wrap gap-3">
            {["App Segunda Derivada", "Apple", "Spotify", "Youtube", "iHeart"].map((platform) => (
              <span key={platform} className="border border-zinc-300 text-xs font-bold text-zinc-800 px-4 py-2 rounded-full cursor-pointer hover:bg-zinc-50 transition-colors">
                {platform}
              </span>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 mb-6">
            Podcasts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {PODCAST_ITEMS.map((pod, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col border border-zinc-200 rounded-md overflow-hidden bg-white shadow-xs">
                <div className="aspect-square w-full relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-250" />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 block mb-1 font-bold">
                      {pod.show} • {pod.date}
                    </span>
                    <h4 className="text-xs font-black text-zinc-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {pod.episode}
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button className="border border-zinc-950 hover:bg-zinc-100 text-black px-8 py-2 text-xs font-bold uppercase rounded-md transition-colors shadow-xs">
              Cargar más
            </button>
          </div>
        </section>

        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 mb-6">
            Radio
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {RADIO_ITEMS.map((radio, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col border border-zinc-200 rounded-md overflow-hidden bg-white shadow-xs">
                <div className="aspect-square w-full relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-250" />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 block mb-1 font-bold">
                      {radio.show} • {radio.date}
                    </span>
                    <h4 className="text-xs font-black text-zinc-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {radio.episode}
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button className="border border-zinc-950 hover:bg-zinc-100 text-black px-8 py-2 text-xs font-bold uppercase rounded-md transition-colors shadow-xs">
              Cargar más
            </button>
          </div>
        </section>

        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 mb-6 font-serif">
            Documentales en Audio
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {DOCUMENTARIES.map((doc, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col">
                <div className="aspect-square w-full bg-gradient-to-br from-zinc-200 to-zinc-350 rounded-md mb-3 overflow-hidden border border-zinc-200 relative" />
                <h4 className="font-sans text-sm font-black text-zinc-900 hover:text-blue-700 transition-colors">
                  {doc.title}
                </h4>
                <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                  {doc.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 mb-6">
            Alrededor del Mundo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {WORLD_ITEMS.map((item, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col border border-zinc-200 rounded-md overflow-hidden bg-white shadow-xs">
                <div className="aspect-square w-full relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-250" />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 block mb-1 font-bold">
                      {item.show} • {item.date}
                    </span>
                    <h4 className="text-xs font-black text-zinc-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {item.episode}
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
