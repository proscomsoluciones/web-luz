"use client";

export default function TarjetaRastreador() {
  return (
    <div className="border-t border-zinc-200 pt-6">
      <h4 className="text-[11px] font-black uppercase text-zinc-500 tracking-wider mb-3">
        Tariff Tracker
      </h4>
      <article className="group cursor-pointer">
        <div className="aspect-[16/10] w-full rounded-md mb-3 overflow-hidden relative border border-zinc-200">
          <img 
            src="/russian_inflation.png" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            alt="Trump Tariffs" 
          />
        </div>
        <h3 className="font-serif text-lg font-black leading-tight text-black group-hover:text-blue-600 transition-colors">
          Tracking Trump&apos;s Tariffs Across the Global Economy
        </h3>
        <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
          While the unpredictability and risk of weaker economic growth have roiled financial markets, Trump has signaled plans to press ahead.
        </p>
      </article>
    </div>
  );
}
