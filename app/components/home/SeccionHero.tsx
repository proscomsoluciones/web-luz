"use client";

export default function SeccionHero() {
  return (
    <div className="lg:col-span-9 flex flex-col gap-10">
      
      {/* FILA PRINCIPAL 1: Argentina e Inflación en Ghana */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-zinc-200 pb-10">
        
        {/* Columna Izquierda: Argentina / Milei (5 columnas) */}
        <article className="md:col-span-5 flex flex-col md:border-r md:border-zinc-200 md:pr-8">
          <div className="aspect-[4/3] w-full mb-3 relative overflow-hidden rounded-sm bg-zinc-100 group">
            <img 
              src="/milei_argentina.png" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" 
              alt="Javier Milei Argentina Economic Growth" 
            />
            <div className="absolute bottom-1 right-2 text-[9px] text-zinc-400 font-medium">
              Tomas Cuesta/Segunda Derivada
            </div>
          </div>
          <h2 className="font-sans text-2xl md:text-3xl font-black leading-tight tracking-tight text-zinc-950 hover:text-blue-700 cursor-pointer">
            Bad Loans Threaten Argentina&apos;s Next Engine of Economic Growth
          </h2>
        </article>

        {/* Columna Central: Ghana (7 columnas) */}
        <article className="md:col-span-7 flex flex-col">
          <div className="aspect-[4/3] w-full mb-3 relative overflow-hidden rounded-sm bg-zinc-100 group">
            <img 
              src="/ghana_speaker.png" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" 
              alt="Ghana Official Economic Panel" 
            />
            <div className="absolute bottom-1 right-2 text-[9px] text-zinc-400 font-medium">
              Kent Nishimura/Segunda Derivada
            </div>
          </div>
          <h2 className="font-sans text-2xl md:text-3xl font-black leading-tight tracking-tight text-zinc-950 hover:text-blue-700 cursor-pointer">
            Ghana Holds Rate Steady as US-Iran War Drives Inflation Risk
          </h2>
        </article>

      </div>


      {/* FILA PRINCIPAL 3: The Big Take */}
      <div className="border-b border-zinc-200 pb-10">
        <article className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-6 flex flex-col border border-zinc-250 rounded-md overflow-hidden group">
            <img 
              src="/middle_east_friendship.png" 
              className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-300" 
              alt="Middle East Friendship" 
            />
          </div>
          <div className="md:col-span-6 flex flex-col justify-center py-2">
            <span className="text-[11px] font-black uppercase text-zinc-500 tracking-wider">
              The Big Take
            </span>
            <h3 className="font-serif text-2xl md:text-3.5xl font-black leading-tight text-zinc-950 hover:text-blue-700 cursor-pointer mt-1">
              The Shattering of the Middle East&apos;s Most Unlikely Friendship
            </h3>
            <p className="text-sm text-zinc-650 mt-3 leading-relaxed">
              Israeli tech titan Eyal Waldman and Palestinian tycoon Bashar Masri were best pals. The Hamas attack and Israel&apos;s response made them bitter enemies.
            </p>
          </div>
        </article>
      </div>

      {/* FILA PRINCIPAL 4: 3 Columnas (México/Perú, Rogers, Chips UAE) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-200 pb-8">
        <article className="flex flex-col">
          <div className="aspect-video w-full mb-3 border border-zinc-200 relative overflow-hidden rounded-md bg-zinc-100 group">
            <img src="/middle_east_friendship.png" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.02] transition-transform" alt="Relations" />
          </div>
          <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
            Mexico, Peru Open Door To Restoring Relations After Bitter Political Fight
          </h4>
        </article>

        <article className="flex flex-col">
          <div className="aspect-video w-full mb-3 border border-zinc-200 relative overflow-hidden rounded-md bg-zinc-100 group">
            <img src="/federal_reserve.png" className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-[1.02] transition-transform" alt="Rogers Teams" />
          </div>
          <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
            Why Rogers Rushed to Buy Out Tanenbaum&apos;s Stake in Toronto Teams
          </h4>
        </article>

        <article className="flex flex-col">
          <div className="aspect-video w-full mb-3 border border-zinc-200 relative overflow-hidden rounded-md bg-zinc-100 group">
            <img src="/russian_inflation.png" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.02] transition-transform" alt="AI Chip Sales" />
          </div>
          <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
            US Eases Export Curbs on UAE, Opening Door for AI Chip Sales
          </h4>
        </article>
      </div>

      {/* FILA PRINCIPAL 5 (DUPLICADA): 3 Columnas adicionales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="flex flex-col">
          <div className="aspect-video w-full mb-3 border border-zinc-200 relative overflow-hidden rounded-md bg-zinc-100 group">
            <img src="/russian_inflation.png" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.02] transition-transform" alt="Russian Inflation" />
          </div>
          <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
            Gasoline Prices Fuel Fresh Acceleration in Russian Inflation
          </h4>
        </article>

        <article className="flex flex-col">
          <div className="aspect-video w-full mb-3 border border-zinc-200 relative overflow-hidden rounded-md bg-zinc-100 group">
            <img src="/middle_east_friendship.png" className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-[1.02] transition-transform" alt="Miner ERG" />
          </div>
          <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
            Miner ERG Weighs Breakup to Split Assets Between Its Owners
          </h4>
        </article>

        <article className="flex flex-col">
          <div className="aspect-video w-full mb-3 border border-zinc-200 relative overflow-hidden rounded-md bg-zinc-100 group">
            <img src="/federal_reserve.png" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.02] transition-transform" alt="Fed Stability" />
          </div>
          <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
            Fed Vows to Deliver Price Stability in Monetary Policy Report
          </h4>
        </article>
      </div>

    </div>
  );
}
