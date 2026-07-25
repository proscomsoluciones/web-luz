"use client";

import { useState } from "react";

const FEATURED_ARTICLES = [
  {
    title: "El auge de la IA acuña diez nuevos multimillonarios",
    description: "El impulso global por hardware y software de inteligencia artificial ha creado una riqueza tecnológica sin precedentes."
  },
  {
    title: "Restricciones de visado enfrían el auge inmobiliario en polos tecnológicos",
    description: "Cambios en la política migratoria comienzan a enfriar mercados de vivienda antes muy activos."
  }
];

const SECOND_ROW = [
  { title: "Las guías de aerolíneas impulsan rotaciones en el sector aviación" },
  { title: "Por qué los bancos centrales enfrentan una larga lucha contra la inflación" },
  { title: "La reorientación de las cadenas de suministro en la región" }
];

const THIRD_ROW = [
  { title: "La próxima era del financiamiento de infraestructura" },
  { title: "El costo oculto de posponer reformas fiscales" },
  { title: "Acuerdos comerciales bilaterales y compromisos fiscales domésticos" }
];

const FEATURES = [
  { title: "Por qué la revolución de la IA tomará décadas" },
  { title: "La logística de los corredores globales de carga espacial" },
  { title: "Las redes de energía limpia impulsan un auge solar masivo" },
  { title: "Por qué la inflación de servicios sigue siendo persistente" }
];

const RECENT_ISSUES = [
  { title: "Por qué la opción atómica vuelve a la mesa" },
  { title: "Mapa global de mercados y asignación de riesgos" },
  { title: "La transición eléctrica y las valuaciones heredadas" },
  { title: "El ascenso: escalando la escalera global de la riqueza" }
];

const MORE_FROM_MARKETS = [
  { time: "hace 2 h", title: "Un grupo de fondos lidera el financiamiento de una automotriz de lujo" },
  { time: "hace 3 h", title: "Perú y México reabren la puerta al diálogo tras la disputa política" },
  { time: "hace 4 h", title: "Un fondo se apresura a comprar la participación de un socio minoritario" },
  { time: "hace 5 h", title: "Se relajan los controles de exportación, abriendo la puerta a nuevos chips" }
];

export default function RevistaDigitalPage() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <div className="flex flex-col bg-white text-zinc-950 font-sans flex-1">

      {/* Banner superior */}
      <div className="border-b border-zinc-200 bg-[#f3f3f3] py-3 text-center w-full">
        <div className="mx-auto max-w-[1280px] px-4 flex justify-center">
          <div className="bg-white border border-zinc-300 text-black px-6 py-3 text-xs font-bold flex flex-col md:flex-row items-center justify-between max-w-[800px] w-full shadow-xs gap-4">
            <div className="flex items-center gap-4 text-left">
              <span className="bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded-none">La Gran Historia</span>
              <div>
                <span className="font-serif text-sm font-black text-zinc-900 block leading-tight">La historia que no te puedes perder.</span>
                <span className="text-[11px] text-zinc-500 font-medium">La historia de negocios global que no querrás perderte, entregada a diario.</span>
              </div>
            </div>
            <button className="bg-black hover:bg-zinc-800 text-white font-black text-[10px] uppercase py-2 px-5 rounded-xs transition-colors flex-shrink-0">
              Leer ahora
            </button>
          </div>
        </div>
      </div>

      {/* Contenedor Principal */}
      <main className="mx-auto w-full max-w-[1280px] px-4 py-8">

        <div className="border-b border-zinc-200 pb-4 mb-8">
          <h1 className="font-serif text-5xl font-black tracking-tight text-black leading-none">
            Revista de Mercados
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-200 pb-12 mb-12">

          <div className="lg:col-span-9 flex flex-col gap-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-zinc-200 pb-8">
              {FEATURED_ARTICLES.map((article, idx) => (
                <article key={idx} className="flex flex-col border-r border-zinc-200 pr-6 last:border-r-0 last:pr-0">
                  <div className="aspect-[16/11] w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md bg-gradient-to-br from-zinc-200 to-zinc-400" />
                  <span className="text-[10px] font-black uppercase text-[#ff3366] tracking-wider mb-1 block">
                    Reportaje Especial
                  </span>
                  <h2 className="font-serif text-2.5xl font-black leading-tight text-black hover:text-blue-700 cursor-pointer">
                    {article.title}
                  </h2>
                  <p className="text-xs text-zinc-550 mt-2 leading-relaxed">
                    {article.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-200 pb-8">
              {SECOND_ROW.map((item, idx) => (
                <article key={idx} className="flex flex-col">
                  <div className="aspect-video w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md bg-gradient-to-br from-zinc-200 to-zinc-350" />
                  <h4 className="text-xs font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h4>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-200 pb-8">
              {THIRD_ROW.map((item, idx) => (
                <article key={idx} className="flex flex-col">
                  <div className="aspect-video w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md bg-gradient-to-br from-zinc-200 to-zinc-350" />
                  <h4 className="text-xs font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h4>
                </article>
              ))}
            </div>

            {/* Bloque de audio */}
            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-md flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-24 h-16 rounded-md overflow-hidden border border-zinc-250 flex-shrink-0 relative bg-gradient-to-br from-zinc-200 to-zinc-400" />
                <div>
                  <span className="text-[9px] font-black uppercase text-[#ff3366] tracking-wider block mb-1">Audio Segunda Derivada</span>
                  <h3 className="font-serif text-lg font-black text-black leading-snug hover:underline cursor-pointer">
                    Qué esperar de la próxima decisión del banco central
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-normal">Vigilancia Diaria: expectativas macroeconómicas en profundidad.</p>
                </div>
              </div>

              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="bg-black hover:bg-zinc-800 text-white font-black text-xs py-2 px-5 rounded-full flex items-center gap-1.5 transition-colors flex-shrink-0"
              >
                {isPlayingAudio ? "Pausar 🎧" : "Escuchar 🎧"}
              </button>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3 flex flex-col gap-6 border-l border-zinc-200 pl-6">

            <div className="bg-[#1c1d21] text-white p-5 rounded-md border border-zinc-800 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
              <span className="text-[9px] font-black uppercase text-zinc-400 tracking-wider">EDICIÓN MENSUAL</span>
              <div>
                <h4 className="font-serif text-lg font-black text-white leading-tight mb-2">
                  No Te Pierdas Nuestra Última Edición
                </h4>
                <p className="text-xs text-zinc-400">Análisis económico profundo y contenido premium.</p>
              </div>
              <button className="bg-white hover:bg-zinc-200 text-black text-[10px] font-black uppercase py-2 px-4 rounded-xs mt-4 transition-colors self-start">
                Suscribirme
              </button>
            </div>

            <div className="bg-[#12b842] border border-green-600 p-6 aspect-[3/4] flex flex-col justify-between overflow-hidden shadow-md rounded-md relative text-white">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] self-start opacity-80">Segunda Derivada</span>

              <div className="flex-1 flex items-center justify-center my-4 opacity-30">
                <div className="flex flex-col gap-1 items-center">
                  <div className="w-16 h-4 bg-white rounded-full" />
                  <div className="w-16 h-4 bg-white rounded-full" />
                  <div className="w-16 h-4 bg-white rounded-full" />
                  <div className="w-16 h-4 bg-white rounded-full" />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-black leading-none uppercase tracking-tight text-white mb-2">
                  EL RESUMEN DE RIQUEZA
                </h3>
                <p className="text-[11px] text-green-100">
                  Los ajustes de cartera de la élite empresarial regional.
                </p>
              </div>
            </div>

            <div className="border-t border-zinc-200 pt-4 flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider">Portadas Destacadas</span>
              <p className="text-xs font-bold text-zinc-950 hover:underline cursor-pointer">Los gestores de activos, los nuevos reyes del mercado</p>
              <p className="text-xs font-bold text-zinc-950 hover:underline cursor-pointer">Pico de silicio: la hegemonía tecnológica regional</p>
              <p className="text-xs font-bold text-zinc-950 hover:underline cursor-pointer">El auge de la IA acuña multimillonarios</p>

              <div className="flex items-center justify-between text-xs font-bold text-zinc-400 mt-2">
                <span>◀ 1/3 ▶</span>
              </div>
            </div>

          </div>

        </div>

        <section className="border-b border-zinc-200 pb-12 mb-12">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-500 mb-6">
            Reportajes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURES.map((feat, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col">
                <div className="aspect-[16/10] w-full mb-3 rounded-md overflow-hidden border border-zinc-200 relative bg-gradient-to-br from-zinc-200 to-zinc-350" />
                <h4 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600 transition-colors">
                  {feat.title}
                </h4>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-zinc-200 pb-12 mb-12">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-500 mb-6 font-serif">
            Ediciones Recientes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {RECENT_ISSUES.map((issue, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col border border-zinc-200 rounded-md overflow-hidden bg-white shadow-xs">
                <div className="aspect-[3/4] w-full relative overflow-hidden bg-gradient-to-br from-zinc-200 to-zinc-350 border-b border-zinc-200" />
                <div className="p-4">
                  <h4 className="text-xs font-black text-zinc-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {issue.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="relative overflow-hidden rounded-md bg-[#0b132b] px-8 py-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 border border-zinc-800 shadow-xl mb-12">
          <div className="flex gap-4 items-center">
            <span className="bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded-none">La Gran Historia Diaria</span>
            <div>
              <span className="font-serif text-sm font-black text-zinc-400 block leading-tight">Tu resumen diario imprescindible.</span>
              <span className="text-[11px] text-zinc-300 font-medium">La historia de negocios global que no querrás perderte, entregada a diario.</span>
            </div>
          </div>
          <button className="bg-white hover:bg-zinc-200 text-black font-black text-[10px] uppercase py-2.5 px-5 rounded-xs transition-colors flex-shrink-0">
            Escuchar ahora
          </button>
        </div>

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 flex flex-col divide-y divide-zinc-200">
              <span className="font-sans text-xs font-black uppercase text-zinc-900 mb-4 block">
                Más de Mercados
              </span>

              {MORE_FROM_MARKETS.map((item, idx) => (
                <article key={idx} className="flex gap-6 py-6 items-start">
                  <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">{item.time}</span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-black hover:text-blue-650 cursor-pointer">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-28 h-16 rounded-md overflow-hidden border border-zinc-250 flex-shrink-0 relative bg-gradient-to-br from-zinc-200 to-zinc-350" />
                </article>
              ))}
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="relative border border-zinc-300 bg-[#805ad5] text-white p-6 aspect-[3/4] flex flex-col justify-between overflow-hidden shadow-md rounded-md">
                <span className="text-xs font-black uppercase tracking-[0.2em] self-start opacity-70">Segunda Derivada</span>
                <div>
                  <h3 className="font-serif text-4xl font-black leading-none uppercase tracking-tight text-white mb-2">
                    ACTORES CLAVE
                  </h3>
                  <p className="text-xs text-purple-100">
                    Perfiles de las mentes de inversión que definen la próxima era del mercado.
                  </p>
                </div>
                <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full border-8 border-white opacity-10" />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="border border-zinc-950 hover:bg-zinc-100 text-black px-8 py-2.5 text-xs font-bold uppercase rounded-md transition-colors shadow-xs">
              Cargar más
            </button>
          </div>
        </section>

      </main>

    </div>
  );
}
