"use client";

import Link from "next/link";

export default function BannerPublicidad() {
  return (
    <div className="border-t border-zinc-200 mt-12 pt-8">
      <div className="w-full bg-black text-white p-6 md:p-10 rounded-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 min-h-[200px]">
        
        {/* LADO IZQUIERDO: Texto de alto impacto para captar atención */}
        <div className="flex flex-col gap-1 z-10 max-w-md">
          <span className="text-amber-400 text-sm md:text-base font-bold tracking-wide uppercase">
            ¿Por qué tu mente te engaña al decidir?
          </span>
          <h3 className="text-2xl md:text-3.5xl font-black text-white leading-tight tracking-tight">
            Descubre los sesgos ocultos<br />que condicionan tus elecciones.
          </h3>
        </div>

        {/* CENTRO: Imagen enmarcada con detalles gráficos */}
        <div className="flex items-center gap-2 h-44 z-10 my-2 md:my-0">
          <div className="w-20 md:w-28 h-full rounded-2xl overflow-hidden border border-amber-500/40 relative shadow-lg">
            <img 
              src="/banner_executive.png" 
              className="absolute inset-0 w-[240%] max-w-none h-full object-cover -left-4" 
              alt="Psicología de decisiones y sesgos" 
            />
          </div>
          <div className="w-10 md:w-14 h-[85%] rounded-2xl overflow-hidden border border-amber-500/40 relative shadow-lg">
            <img 
              src="/banner_executive.png" 
              className="absolute inset-0 w-[400%] max-w-none h-full object-cover -left-16" 
              alt="Detalle analítico" 
            />
          </div>
          <div className="w-8 md:w-10 h-[65%] rounded-2xl overflow-hidden border border-amber-500/40 relative shadow-lg bg-gradient-to-b from-amber-400 to-amber-600 opacity-80" />
        </div>

        {/* LADO DERECHO: Marca y Botón CTA que redirige a /podcast */}
        <div className="flex flex-col justify-between items-end gap-6 z-10 text-right self-stretch md:self-auto">
          <span className="font-sans text-xl md:text-2xl font-black tracking-tight text-white select-none">
            Segunda Derivada
          </span>
          
          <Link 
            href="/podcast" 
            className="bg-white text-black hover:bg-zinc-200 text-xs font-black py-3 px-5 rounded-xs shadow-md transition-colors leading-tight block text-center"
          >
            Explorar Episodios del Podcast →
          </Link>
        </div>

      </div>
    </div>
  );
}
