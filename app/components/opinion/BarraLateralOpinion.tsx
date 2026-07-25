"use client";

import BoletinOpinion from "./BoletinOpinion";

export default function BarraLateralOpinion() {
  return (
    <div className="lg:col-span-4 flex flex-col gap-8 lg:border-l lg:border-zinc-200 lg:pl-6">
      
      {/* 1. Tarjeta de Boletín */}
      <BoletinOpinion />

      {/* 2. Banner Publicitario Cuadrado */}
      <div className="bg-black text-white p-5 rounded-md relative overflow-hidden flex flex-col justify-between min-h-[220px]">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
            Segunda Derivada
          </span>
          <span className="text-zinc-300 text-xs font-light">
            Skip the overhaul.
          </span>
          <h4 className="text-xl font-extrabold text-white leading-tight mt-1">
            Ready to scale your strategy?
          </h4>
        </div>
        
        <button className="bg-white text-black hover:bg-zinc-200 text-[11px] font-bold py-2 px-3 rounded-xs text-left w-fit mt-4 transition-colors">
          Discover solutions for investment managers.
        </button>
      </div>

      {/* 3. Sección Features */}
      <div className="border-t border-zinc-200 pt-6">
        <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 mb-3">
          Features
        </h4>
        <article className="group cursor-pointer">
          <div className="aspect-[4/3] w-full rounded-md overflow-hidden border border-zinc-200 relative mb-2">
            <img 
              src="/middle_east_friendship.png" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" 
              alt="Features" 
            />
          </div>
          <h4 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600">
            When Protests Shift from the Streets to Corporate Boardrooms
          </h4>
        </article>
      </div>

    </div>
  );
}
