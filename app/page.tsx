"use client";

import { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col bg-white text-zinc-950 font-sans min-h-screen">
      
      {/* Sub Header (Economics Page Title & Navigation) */}
      <div className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 pt-6 pb-2">
          <div className="flex flex-col gap-3">
            <h1 className="font-serif text-6xl font-black tracking-tight text-black leading-none">
              Economics
            </h1>
            {/* Sub-Navigation Links */}
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-zinc-650 border-t border-zinc-200 pt-3 mt-1">
              <a href="#" className="hover:text-black">Indicators</a>
              <a href="#" className="hover:text-black">Central Banks</a>
              <a href="#" className="hover:text-black">Jobs</a>
              <a href="#" className="hover:text-black">Trade</a>
              <a href="#" className="hover:text-black">Tax & Spend</a>
              <a href="#" className="hover:text-black">Inflation & Prices</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <main className="mx-auto w-full max-w-[1280px] px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT & MIDDLE CONTENT (Span 9) */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            
            {/* First Row: 2 columns (Russian Inflation & Fed Report) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-zinc-200 pb-8">
              {/* Russian Inflation */}
              <article className="flex flex-col border-r border-zinc-200 pr-6 last:border-r-0">
                <div className="aspect-[16/11] w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md">
                  <img src="/russian_inflation.png" className="absolute inset-0 w-full h-full object-cover" alt="Russian Inflation" />
                  <div className="absolute bottom-0 inset-x-0 bg-black/40 p-2 text-[10px] text-white font-bold">
                    <span>Alexander Nemenov/AFP/Getty Images</span>
                  </div>
                </div>
                <h2 className="font-serif text-3.5xl font-black leading-tight tracking-tight text-black hover:text-blue-700 cursor-pointer">
                  Gasoline Prices Fuel Fresh Acceleration in Russian Inflation
                </h2>
              </article>

              {/* Fed Report */}
              <article className="flex flex-col">
                <div className="aspect-[16/11] w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md">
                  <img src="/federal_reserve.png" className="absolute inset-0 w-full h-full object-cover" alt="Federal Reserve" />
                  <div className="absolute bottom-0 inset-x-0 bg-black/40 p-2 text-[10px] text-white font-bold">
                    <span>Stefani Reynolds/Bloomberg</span>
                  </div>
                </div>
                <h2 className="font-serif text-3.5xl font-black leading-tight tracking-tight text-black hover:text-blue-700 cursor-pointer">
                  Fed Vows to Deliver Price Stability in Monetary Policy Report
                </h2>
              </article>
            </div>

            {/* Second Row: Middle East Unlikely Friendship (Double height article on left) */}
            <div className="border-b border-zinc-200 pb-8">
              <article className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Image (Double height block - Smog + Faces unified) */}
                <div className="md:col-span-6 flex flex-col border border-zinc-250 rounded-md overflow-hidden">
                  <img src="/middle_east_friendship.png" className="w-full aspect-[4/3] object-cover" alt="Middle East Friendship" />
                </div>
                {/* Text */}
                <div className="md:col-span-6">
                  <span className="text-[11px] font-black uppercase text-zinc-500 tracking-wider">
                    The Big Take
                  </span>
                  <h3 className="font-serif text-3xl font-black leading-tight text-black hover:text-blue-700 cursor-pointer mt-1">
                    The Shattering of the Middle East&apos;s Most Unlikely Friendship
                  </h3>
                  <p className="text-sm text-zinc-650 mt-3 leading-relaxed">
                    Israeli tech titan Eyal Waldman and Palestinian tycoon Bashar Masri were best pals. The Hamas attack and Israel&apos;s response made them bitter enemies.
                  </p>
                </div>
              </article>
            </div>

            {/* Third Row: 3 columns (Mexico/Peru, Rogers, UAE Chips) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-200 pb-8">
              <article className="flex flex-col">
                <div className="aspect-video w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md bg-zinc-100">
                  <img src="/middle_east_friendship.png" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Relations" />
                </div>
                <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                  Mexico, Peru Open Door To Restoring Relations After Bitter Political Fight
                </h4>
              </article>

              <article className="flex flex-col">
                <div className="aspect-video w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md bg-zinc-100">
                  <img src="/federal_reserve.png" className="absolute inset-0 w-full h-full object-cover opacity-85" alt="Rogers Teams" />
                </div>
                <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                  Why Rogers Rushed to Buy Out Tanenbaum&apos;s Stake in Toronto Teams
                </h4>
              </article>

              <article className="flex flex-col">
                <div className="aspect-video w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md bg-zinc-100">
                  <img src="/russian_inflation.png" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="AI Chip Sales" />
                </div>
                <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                  US Eases Export Curbs on UAE, Opening Door for AI Chip Sales
                </h4>
              </article>
            </div>

            {/* Fourth Row: 3 columns (Russian Inflation repeat, Miner ERG, Fed Stability repeat) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="flex flex-col">
                <div className="aspect-video w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md">
                  <img src="/russian_inflation.png" className="absolute inset-0 w-full h-full object-cover" alt="Russian Inflation" />
                </div>
                <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                  Gasoline Prices Fuel Fresh Acceleration in Russian Inflation
                </h4>
              </article>

              <article className="flex flex-col">
                <div className="aspect-video w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md">
                  <img src="/middle_east_friendship.png" className="absolute inset-0 w-full h-full object-cover" alt="Miner ERG" />
                </div>
                <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                  Miner ERG Weighs Breakup to Split Assets Between Its Owners
                </h4>
              </article>

              <article className="flex flex-col">
                <div className="aspect-video w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md">
                  <img src="/federal_reserve.png" className="absolute inset-0 w-full h-full object-cover" alt="Federal Reserve Building" />
                </div>
                <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                  Fed Vows to Deliver Price Stability in Monetary Policy Report
                </h4>
              </article>
            </div>

          </div>

          {/* RIGHT SIDEBAR (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-8 border-l border-zinc-200 pl-6">
            
            {/* Newsletter Sign Up Box */}
            <div className="border border-zinc-200 p-5 bg-white rounded-md">
              <span className="bg-zinc-100 text-zinc-700 font-bold text-[9px] px-1.5 py-0.5 rounded-none uppercase tracking-wider">
                SUBSCRIBER ONLY
              </span>
              <h4 className="text-sm font-black text-black mt-2 leading-snug">
                Get the Economics Daily newsletter.
              </h4>
              <p className="text-xs text-zinc-500 mt-1 mb-3 leading-normal">
                Discover what&apos;s driving the global economy and what it means for policymakers and investors.
              </p>
              <a href="#" className="text-xs text-zinc-700 underline block mb-4">Preview</a>
              
              <label className="flex gap-2 items-start text-[11px] text-zinc-600 mb-4 cursor-pointer">
                <input type="checkbox" className="mt-0.5" />
                <span>Bloomberg may send me offers and promotions.</span>
              </label>

              <button className="w-full bg-black text-white hover:bg-zinc-800 font-black text-xs py-2 px-4 rounded-full flex items-center justify-center gap-1.5 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C9.24 2 7 4.24 7 7v3H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5zm-3 5c0-1.66 1.34-3 3-3s3 1.34 3 3v3H9V7zm3 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
                Subscribe
              </button>
              
              <p className="text-[10px] text-zinc-400 mt-3 leading-tight">
                By continuing, I agree to the <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
              </p>
            </div>

            {/* Bloomberg Surveillance */}
            <div className="border-t border-zinc-200 pt-6">
              <h4 className="text-[11px] font-black uppercase text-zinc-500 tracking-wider mb-3">
                Bloomberg Surveillance
              </h4>
              <div className="border border-zinc-200 p-4 bg-zinc-50 rounded-md">
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-[8px] font-black text-center p-1 uppercase tracking-tighter leading-none flex-shrink-0">
                    Surveillance
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-zinc-900 leading-snug">
                      Bloomberg Surveillance TV
                    </p>
                    <span className="text-[10px] text-zinc-500">July 10th, 2026</span>
                  </div>
                </div>
                {/* Player bar */}
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-7 h-7 rounded-full bg-black text-white hover:bg-zinc-800 flex items-center justify-center transition-colors"
                  >
                    {isPlaying ? (
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                  <div className="flex-1 bg-zinc-250 h-1 rounded-full relative">
                    <div className="bg-red-650 h-full w-[25%]" />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-500">20:01</span>
                </div>
              </div>
            </div>

            {/* Tariff Tracker */}
            <div className="border-t border-zinc-200 pt-6">
              <h4 className="text-[11px] font-black uppercase text-zinc-500 tracking-wider mb-3">
                Tariff Tracker
              </h4>
              <article className="group cursor-pointer">
                <div className="aspect-[16/10] w-full rounded-md mb-3 overflow-hidden relative border border-zinc-200">
                  <img src="/russian_inflation.png" className="absolute inset-0 w-full h-full object-cover" alt="Trump Tariffs" />
                </div>
                <h3 className="font-serif text-lg font-black leading-tight text-black group-hover:text-blue-600 transition-colors">
                  Tracking Trump&apos;s Tariffs Across the Global Economy
                </h3>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                  While the unpredictability and risk of weaker economic growth have roiled financial markets, Trump has signaled plans to press ahead with more aggressive moves.
                </p>
              </article>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* TRUMPONOMICS ROW                                                          */}
        {/* ========================================================================= */}
        <div className="border-t border-zinc-200 mt-10 pt-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Red Trumponomics Logo Box */}
            <div className="w-full md:w-36 h-36 bg-red-600 text-white flex flex-col justify-between p-4 flex-shrink-0 relative overflow-hidden">
              <span className="font-sans text-xs font-black uppercase tracking-[0.2em] self-start opacity-70">Bloomberg</span>
              <div className="font-serif text-xl font-black leading-none uppercase tracking-tighter">
                TRUMP<br />ONOMICS
              </div>
              <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full border-4 border-white opacity-20" />
            </div>

            {/* 4 Cards Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <div className="border border-zinc-250 p-4 flex flex-col justify-between min-h-[144px]">
                <div>
                  <span className="text-[9px] font-black uppercase text-zinc-400 block mb-1">Trumponomics</span>
                  <p className="font-sans text-sm font-bold text-zinc-900 leading-snug hover:underline cursor-pointer">
                    The $2 Trillion Global Arms Race
                  </p>
                </div>
                <span className="text-[10px] text-zinc-500 font-bold flex items-center gap-1 mt-3">
                  🎧 Listen: 26:39
                </span>
              </div>

              <div className="border border-zinc-250 p-4 flex flex-col justify-between min-h-[144px]">
                <div>
                  <span className="text-[9px] font-black uppercase text-zinc-400 block mb-1">Trumponomics</span>
                  <p className="font-sans text-sm font-bold text-zinc-900 leading-snug hover:underline cursor-pointer">
                    The Midterms May Hinge on One Thing
                  </p>
                </div>
                <span className="text-[10px] text-zinc-500 font-bold flex items-center gap-1 mt-3">
                  🎧 Listen: 23:30
                </span>
              </div>

              <div className="border border-zinc-250 p-4 flex flex-col justify-between min-h-[144px]">
                <div>
                  <span className="text-[9px] font-black uppercase text-zinc-400 block mb-1">Trumponomics</span>
                  <p className="font-sans text-sm font-bold text-zinc-900 leading-snug hover:underline cursor-pointer">
                    What If AI Ruins Your Job, Not Takes It?
                  </p>
                </div>
                <span className="text-[10px] text-zinc-500 font-bold flex items-center gap-1 mt-3">
                  🎧 Listen: 29:01
                </span>
              </div>

              <div className="border border-zinc-250 p-4 flex flex-col justify-between min-h-[144px]">
                <div>
                  <span className="text-[9px] font-black uppercase text-zinc-400 block mb-1">Trumponomics</span>
                  <p className="font-sans text-sm font-bold text-zinc-900 leading-snug hover:underline cursor-pointer">
                    Why Oil Didn&apos;t Hit $200
                  </p>
                </div>
                <span className="text-[10px] text-zinc-500 font-bold flex items-center gap-1 mt-3">
                  🎧 Listen: 35:39
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EXPLAINERS SECTION                                                        */}
        {/* ========================================================================= */}
        <div className="border-t border-zinc-200 mt-10 pt-8">
          <h3 className="font-sans text-lg font-black uppercase text-zinc-900 mb-6">
            Explainers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <article className="flex flex-col">
              <div className="aspect-video w-full mb-3 rounded-md overflow-hidden relative border border-zinc-200">
                <img src="/middle_east_friendship.png" className="absolute inset-0 w-full h-full object-cover" alt="SK Hynix" />
              </div>
              <h4 className="text-xs font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                How Once-Struggling SK Hynix Became a Trillion-Dollar Company
              </h4>
            </article>

            <article className="flex flex-col">
              <div className="aspect-video w-full mb-3 rounded-md overflow-hidden relative border border-zinc-200">
                <img src="/federal_reserve.png" className="absolute inset-0 w-full h-full object-cover" alt="Data Centers" />
              </div>
              <h4 className="text-xs font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                How Trump and AI Data Centers Are Boosting Nuclear Power
              </h4>
            </article>

            <article className="flex flex-col">
              <div className="aspect-video w-full mb-3 rounded-md overflow-hidden relative border border-zinc-200">
                <img src="/russian_inflation.png" className="absolute inset-0 w-full h-full object-cover" alt="Hormuz" />
              </div>
              <h4 className="text-xs font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                How the Future of Hormuz Is Testing Oman&apos;s Balancing Act
              </h4>
            </article>

            <article className="flex flex-col">
              <div className="aspect-video w-full mb-3 rounded-md overflow-hidden relative border border-zinc-200">
                <img src="/middle_east_friendship.png" className="absolute inset-0 w-full h-full object-cover" alt="Border checks" />
              </div>
              <h4 className="text-xs font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                Why Europe&apos;s New Digital Border Checks Are Causing Big Delays
              </h4>
            </article>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIDEOS SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="border-t border-zinc-200 mt-10 pt-8">
          <h3 className="font-sans text-lg font-black uppercase text-zinc-900 mb-6">
            Videos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <article className="group cursor-pointer">
              <div className="relative aspect-video w-full bg-zinc-900 rounded-md overflow-hidden mb-2">
                <img src="/russian_inflation.png" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Video 1" />
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-850 opacity-40 group-hover:opacity-60 transition-opacity" />
                <span className="absolute bottom-2 left-2 bg-black/80 text-[10px] font-black text-white px-2 py-0.5 rounded-none flex items-center gap-1.5">
                  ▶ {`6:13`}
                </span>
              </div>
              <h4 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600">
                Delta Travel Demand Withstands Fuel Costs
              </h4>
            </article>

            <article className="group cursor-pointer">
              <div className="relative aspect-video w-full bg-zinc-900 rounded-md overflow-hidden mb-2">
                <img src="/federal_reserve.png" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Video 2" />
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-850 opacity-40 group-hover:opacity-60 transition-opacity" />
                <span className="absolute bottom-2 left-2 bg-black/80 text-[10px] font-black text-white px-2 py-0.5 rounded-none flex items-center gap-1.5">
                  ▶ {`4:14`}
                </span>
              </div>
              <h4 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600">
                Delta Rises on Profit Guidance; EasyJet Moves on Apollo Bid | Stock Movers
              </h4>
            </article>

            <article className="group cursor-pointer">
              <div className="relative aspect-video w-full bg-zinc-900 rounded-md overflow-hidden mb-2">
                <img src="/middle_east_friendship.png" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Video 3" />
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-850 opacity-40 group-hover:opacity-60 transition-opacity" />
                <span className="absolute bottom-2 left-2 bg-black/80 text-[10px] font-black text-white px-2 py-0.5 rounded-none flex items-center gap-1.5">
                  ▶ {`2:09`}
                </span>
              </div>
              <h4 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600">
                SK Hynix Set to Make Record-Setting US Debut
              </h4>
            </article>

            <article className="group cursor-pointer">
              <div className="relative aspect-video w-full bg-zinc-900 rounded-md overflow-hidden mb-2">
                <img src="/russian_inflation.png" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Video 4" />
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-855 opacity-40 group-hover:opacity-60 transition-opacity" />
                <span className="absolute bottom-2 left-2 bg-black/80 text-[10px] font-black text-white px-2 py-0.5 rounded-none flex items-center gap-1.5">
                  ▶ {`7:26`}
                </span>
              </div>
              <h4 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600">
                Nadia Martin Wiggen on Volatile Week in Oil
              </h4>
            </article>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MORE ECONOMICS NEWS (vertical stream with right side thumbnails)          */}
        {/* ========================================================================= */}
        <div className="border-t border-zinc-200 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Stream Column */}
            <div className="lg:col-span-8 flex flex-col divide-y divide-zinc-200">
              <span className="font-sans text-xs font-black uppercase text-zinc-900 mb-4 block">
                More Economics News
              </span>

              <article className="flex gap-6 py-5 items-start">
                <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">36 min ago</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-black hover:text-blue-650 cursor-pointer">
                    Aston Martin Lender Group Led by Arini, BlackRock, Sculptor
                  </h4>
                </div>
              </article>

              <article className="flex gap-6 py-5 items-start">
                <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">2 hr ago</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-black hover:text-blue-650 cursor-pointer">
                    Mexico, Peru Open Door To Restoring Relations After Bitter Political Fight
                  </h4>
                </div>
                <div className="w-24 h-16 rounded-md flex-shrink-0 relative overflow-hidden border border-zinc-250">
                  <img src="/middle_east_friendship.png" className="absolute inset-0 w-full h-full object-cover" alt="Mexico Peru" />
                </div>
              </article>

              <article className="flex gap-6 py-5 items-start">
                <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">3 hr ago</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-black hover:text-blue-650 cursor-pointer">
                    Why Rogers Rushed to Buy Out Tanenbaum&apos;s Stake in Toronto Teams
                  </h4>
                  <p className="text-[11px] text-zinc-500 mt-1">Also: Five US banks report on one day next week</p>
                </div>
                <div className="w-24 h-16 rounded-md flex-shrink-0 relative overflow-hidden border border-zinc-250">
                  <img src="/federal_reserve.png" className="absolute inset-0 w-full h-full object-cover" alt="Rogers Teams" />
                </div>
              </article>

              <article className="flex gap-6 py-5 items-start">
                <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">3 hr ago</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-black hover:text-blue-650 cursor-pointer">
                    The Date Is Set for Farage Versus the Count
                  </h4>
                  <p className="text-[11px] text-zinc-500 mt-1">There&apos;s been so much noise of late that it might be useful to end the week with a recap.</p>
                </div>
                <div className="w-24 h-16 rounded-md flex-shrink-0 relative overflow-hidden border border-zinc-250">
                  <img src="/russian_inflation.png" className="absolute inset-0 w-full h-full object-cover" alt="Farage" />
                </div>
              </article>

              <article className="flex gap-6 py-5 items-start">
                <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">3 hr ago</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-black hover:text-blue-655 cursor-pointer">
                    US Eases Export Curbs on UAE, Opening Door for AI Chip Sales
                  </h4>
                </div>
                <div className="w-24 h-16 rounded-md flex-shrink-0 relative overflow-hidden border border-zinc-250">
                  <img src="/middle_east_friendship.png" className="absolute inset-0 w-full h-full object-cover" alt="UAE Chips" />
                </div>
              </article>

              <article className="flex gap-6 py-5 items-start">
                <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">3 hr ago</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-black hover:text-blue-655 cursor-pointer">
                    Gasoline Prices Fuel Fresh Acceleration in Russian Inflation
                  </h4>
                </div>
                <div className="w-24 h-16 rounded-md flex-shrink-0 relative overflow-hidden border border-zinc-250">
                  <img src="/russian_inflation.png" className="absolute inset-0 w-full h-full object-cover" alt="Russian Gas" />
                </div>
              </article>

              <article className="flex gap-6 py-5 items-start">
                <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">3 hr ago</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-black hover:text-blue-655 cursor-pointer">
                    Miner ERG Weighs Breakup to Split Assets Between Its Owners
                  </h4>
                </div>
                <div className="w-24 h-16 rounded-md flex-shrink-0 relative overflow-hidden border border-zinc-250">
                  <img src="/middle_east_friendship.png" className="absolute inset-0 w-full h-full object-cover" alt="Miner ERG" />
                </div>
              </article>

              <article className="flex gap-6 py-5 items-start">
                <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">3 hr ago</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-black hover:text-blue-655 cursor-pointer">
                    Fed Vows to Deliver Price Stability in Monetary Policy Report
                  </h4>
                </div>
                <div className="w-24 h-16 rounded-md flex-shrink-0 relative overflow-hidden border border-zinc-250">
                  <img src="/federal_reserve.png" className="absolute inset-0 w-full h-full object-cover" alt="Fed Stability" />
                </div>
              </article>

              <article className="flex gap-6 py-5 items-start">
                <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">3 hr ago</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-black hover:text-blue-655 cursor-pointer">
                    The Stock Market and a &quot;Phenomena of our Lifetimes&quot;
                  </h4>
                  <p className="text-[11px] text-zinc-500 mt-1">Something big has changed in the makeup of the US economy.</p>
                </div>
                <div className="w-24 h-16 rounded-md flex-shrink-0 relative overflow-hidden border border-zinc-250">
                  <img src="/middle_east_friendship.png" className="absolute inset-0 w-full h-full object-cover" alt="SK Hynix Stock" />
                </div>
              </article>

              <article className="flex gap-6 py-5 items-start">
                <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">4 hr ago</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-black hover:text-blue-655 cursor-pointer">
                    Sinokor Oil Tankers Wait Near Saudi Arabia as Iran War Reignites
                  </h4>
                </div>
                <div className="w-24 h-16 rounded-md flex-shrink-0 relative overflow-hidden border border-zinc-250">
                  <img src="/russian_inflation.png" className="absolute inset-0 w-full h-full object-cover" alt="Sinokor Tankers" />
                </div>
              </article>

            </div>

            {/* Right Column Divider Column */}
            <div className="lg:col-span-4 hidden lg:block" />
          </div>

          <div className="flex justify-center mt-6">
            <button className="border border-zinc-950 hover:bg-zinc-100 text-black px-8 py-2 text-xs font-bold uppercase rounded-md transition-colors">
              Load more
            </button>
          </div>
        </div>

      </main>

    </div>
  );
}
