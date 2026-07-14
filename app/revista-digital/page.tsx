"use client";

import { useState } from "react";

const FEATURED_ARTICLES = [
  {
    title: "AI's Relentless Boom Mints 10 New Billionaires",
    description: "The global push for artificial intelligence hardware and software has created unprecedented tech wealth.",
    img: "/middle_east_friendship.png"
  },
  {
    title: "H-1B Crackdown on Indian Winners Erodes a Texas Real Estate Boom",
    description: "Policy shifts in work visas are beginning to cool down once-hot housing markets in major technology hubs.",
    img: "/federal_reserve.png"
  }
];

const SECOND_ROW = [
  { title: "Delta Guidance Drives Aviation Stock Rotations", img: "/russian_inflation.png" },
  { title: "Why Central Banks Face a Long Fight on Inflation", img: "/middle_east_friendship.png" },
  { title: "Europe's Supply Chain Reorientation", img: "/federal_reserve.png" }
];

const THIRD_ROW = [
  { title: "The Next Era of Infrastructure Funding", img: "/middle_east_friendship.png" },
  { title: "The Hidden Cost of Delayed Fiscal Reforms", img: "/russian_inflation.png" },
  { title: "Bilateral Trade Manifests and Domestic Fiscal Compromises", img: "/federal_reserve.png" }
];

const FEATURES = [
  { title: "Why the AI Revolution Will Take Decades", img: "/russian_inflation.png" },
  { title: "The Logistics of Global Space Cargo Corridors", img: "/middle_east_friendship.png" },
  { title: "Clean Energy Grids Spur Massive Solar Boom", img: "/federal_reserve.png" },
  { title: "Why Service-Sector Inflation Is Stubbornly High", img: "/middle_east_friendship.png" }
];

const RECENT_ISSUES = [
  { title: "Why the Atomic Option Is Back on the Table", img: "/federal_reserve.png" },
  { title: "Global Market Map and Risk Allocations", img: "/middle_east_friendship.png" },
  { title: "The Electric Transition and Legacy Valuations", img: "/russian_inflation.png" },
  { title: "The Ascent: Climbing the Global Wealth Ladder", img: "/middle_east_friendship.png" }
];

const MORE_FROM_MARKETS = [
  { time: "2 hrs ago", title: "Aston Martin Lender Group Led by Arini, BlackRock, Sculptor", img: "/middle_east_friendship.png" },
  { time: "3 hrs ago", title: "Mexico, Peru Open Door To Restoring Relations After Bitter Political Fight", img: "/federal_reserve.png" },
  { time: "4 hrs ago", title: "Why Rogers Rushed to Buy Out Tanenbaum's Stake in Toronto Teams", img: "/russian_inflation.png" },
  { time: "5 hrs ago", title: "US Eases Export Curbs on UAE, Opening Door for AI Chip Sales", img: "/middle_east_friendship.png" }
];

export default function RevistaDigitalPage() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <div className="flex flex-col bg-white text-zinc-950 font-sans min-h-screen">
      
      {/* Top Banner Advertisement (Black and White style matching the screenshot) */}
      <div className="border-b border-zinc-200 bg-[#f3f3f3] py-3 text-center w-full">
        <div className="mx-auto max-w-[1280px] px-4 flex justify-center">
          <div className="bg-white border border-zinc-300 text-black px-6 py-3 text-xs font-bold flex flex-col md:flex-row items-center justify-between max-w-[800px] w-full shadow-xs gap-4">
            <div className="flex items-center gap-4 text-left">
              <span className="bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded-none">Big Take</span>
              <div>
                <span className="font-serif text-sm font-black text-zinc-900 block leading-tight">The story you can't miss.</span>
                <span className="text-[11px] text-zinc-500 font-medium">The one global business story you don't want to miss, delivered daily.</span>
              </div>
            </div>
            <button className="bg-black hover:bg-zinc-800 text-white font-black text-[10px] uppercase py-2 px-5 rounded-xs transition-colors flex-shrink-0">
              Read now
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="mx-auto w-full max-w-[1280px] px-4 py-8">
        
        {/* Page Title */}
        <div className="border-b border-zinc-200 pb-4 mb-8">
          <h1 className="font-serif text-5xl font-black tracking-tight text-black leading-none">
            Markets Magazine
          </h1>
        </div>

        {/* 1. First Section Grid (Left Column: articles, Right Column: sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-200 pb-12 mb-12">
          
          {/* Left Column (Span 9) */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            
            {/* Top row: 2 featured articles side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-zinc-200 pb-8">
              {FEATURED_ARTICLES.map((article, idx) => (
                <article key={idx} className="flex flex-col border-r border-zinc-200 pr-6 last:border-r-0 last:pr-0">
                  <div className="aspect-[16/11] w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md">
                    <img src={article.img} className="absolute inset-0 w-full h-full object-cover" alt={article.title} />
                  </div>
                  <span className="text-[10px] font-black uppercase text-[#ff3366] tracking-wider mb-1 block">
                    Special Report
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

            {/* Second row: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-200 pb-8">
              {SECOND_ROW.map((item, idx) => (
                <article key={idx} className="flex flex-col">
                  <div className="aspect-video w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md">
                    <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
                  </div>
                  <h4 className="text-xs font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h4>
                </article>
              ))}
            </div>

            {/* Third row: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-200 pb-8">
              {THIRD_ROW.map((item, idx) => (
                <article key={idx} className="flex flex-col">
                  <div className="aspect-video w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md">
                    <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
                  </div>
                  <h4 className="text-xs font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h4>
                </article>
              ))}
            </div>

            {/* Listen Row (Featured Audio block inside left grid) */}
            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-md flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-24 h-16 rounded-md overflow-hidden border border-zinc-250 flex-shrink-0 relative bg-zinc-200">
                  <img src="/middle_east_friendship.png" className="absolute inset-0 w-full h-full object-cover" alt="Fed Reserve" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase text-[#ff3366] tracking-wider block mb-1">Bloomberg Audio</span>
                  <h3 className="font-serif text-lg font-black text-black leading-snug hover:underline cursor-pointer">
                    What to Expect From Kevin Warsh at the Federal Reserve
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-normal">Surveillance Daily: In-depth macroeconomic expectations.</p>
                </div>
              </div>
              
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="bg-black hover:bg-zinc-800 text-white font-black text-xs py-2 px-5 rounded-full flex items-center gap-1.5 transition-colors flex-shrink-0"
              >
                {isPlayingAudio ? "Pause 🎧" : "Listen 🎧"}
              </button>
            </div>

          </div>

          {/* Right Column / Sidebar (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 border-l border-zinc-200 pl-6">
            
            {/* Promo Box: "Don't miss our latest issue" */}
            <div className="bg-[#1c1d21] text-white p-5 rounded-md border border-zinc-800 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
              <span className="text-[9px] font-black uppercase text-zinc-400 tracking-wider">MONTHLY ISSUE</span>
              <div>
                <h4 className="font-serif text-lg font-black text-white leading-tight mb-2">
                  Don't Miss Our Latest Issue
                </h4>
                <p className="text-xs text-zinc-400">Deep economic insights and premium analysis.</p>
              </div>
              <button className="bg-white hover:bg-zinc-200 text-black text-[10px] font-black uppercase py-2 px-4 rounded-xs mt-4 transition-colors self-start">
                Subscribe
              </button>
            </div>

            {/* Bright Green Magazine Cover Poster (Bloomberg Markets style) */}
            <div className="bg-[#12b842] border border-green-600 p-6 aspect-[3/4] flex flex-col justify-between overflow-hidden shadow-md rounded-md relative text-white">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] self-start opacity-80">Bloomberg Markets</span>
              
              {/* Stacked Coins Art Overlay */}
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
                  THE WEALTH EDIT
                </h3>
                <p className="text-[11px] text-green-100">
                  Inside the portfolio adjustments of the global business elite.
                </p>
              </div>
            </div>

            {/* Sidebar list of articles */}
            <div className="border-t border-zinc-200 pt-4 flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider">Featured Cover Stories</span>
              <p className="text-xs font-bold text-zinc-950 hover:underline cursor-pointer">Asset Managers Are the New Kings of Wall Street</p>
              <p className="text-xs font-bold text-zinc-950 hover:underline cursor-pointer">Peak Silicon: Taiwan's Tech Hegemony</p>
              <p className="text-xs font-bold text-zinc-950 hover:underline cursor-pointer">AI's Relentless Boom Mints Billionaires</p>
              
              <div className="flex items-center justify-between text-xs font-bold text-zinc-400 mt-2">
                <span>◀ 1/3 ▶</span>
              </div>
            </div>

          </div>

        </div>

        {/* 2. Features Section */}
        <section className="border-b border-zinc-200 pb-12 mb-12">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-500 mb-6">
            Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURES.map((feat, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col">
                <div className="aspect-[16/10] w-full mb-3 rounded-md overflow-hidden border border-zinc-200 relative">
                  <img src={feat.img} className="absolute inset-0 w-full h-full object-cover" alt={feat.title} />
                </div>
                <h4 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600 transition-colors">
                  {feat.title}
                </h4>
              </article>
            ))}
          </div>
        </section>

        {/* 3. Recent Issues Section */}
        <section className="border-b border-zinc-200 pb-12 mb-12">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-500 mb-6 font-serif">
            Recent Issues
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {RECENT_ISSUES.map((issue, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col border border-zinc-200 rounded-md overflow-hidden bg-white shadow-xs">
                {/* 3:4 Aspect Ratio Cover */}
                <div className="aspect-[3/4] w-full relative overflow-hidden bg-zinc-50 border-b border-zinc-200">
                  <img src={issue.img} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={issue.title} />
                </div>
                <div className="p-4">
                  <h4 className="text-xs font-black text-zinc-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {issue.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Banner: Big Take Daily */}
        <div className="relative overflow-hidden rounded-md bg-[#0b132b] px-8 py-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 border border-zinc-800 shadow-xl mb-12">
          <div className="flex gap-4 items-center">
            <span className="bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded-none">Big Take Daily</span>
            <div>
              <span className="font-serif text-sm font-black text-zinc-400 block leading-tight">Your daily must-listen.</span>
              <span className="text-[11px] text-zinc-300 font-medium">The one global business story you don't want to miss, delivered daily.</span>
            </div>
          </div>
          <button className="bg-white hover:bg-zinc-200 text-black font-black text-[10px] uppercase py-2.5 px-5 rounded-xs transition-colors flex-shrink-0">
            Listen now
          </button>
        </div>

        {/* 5. More from Markets Section */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Stream Column */}
            <div className="lg:col-span-8 flex flex-col divide-y divide-zinc-200">
              <span className="font-sans text-xs font-black uppercase text-zinc-900 mb-4 block">
                More from Markets
              </span>

              {MORE_FROM_MARKETS.map((item, idx) => (
                <article key={idx} className="flex gap-6 py-6 items-start">
                  <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">{item.time}</span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-black hover:text-blue-650 cursor-pointer">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-28 h-16 rounded-md overflow-hidden border border-zinc-250 flex-shrink-0 relative">
                    <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt="Markets Stream" />
                  </div>
                </article>
              ))}
            </div>

            {/* Right Collage Column */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="relative border border-zinc-300 bg-[#805ad5] text-white p-6 aspect-[3/4] flex flex-col justify-between overflow-hidden shadow-md rounded-md">
                <span className="text-xs font-black uppercase tracking-[0.2em] self-start opacity-70">Bloomberg Markets</span>
                <div>
                  <h3 className="font-serif text-4xl font-black leading-none uppercase tracking-tight text-white mb-2">
                    POWER PLAYERS
                  </h3>
                  <p className="text-xs text-purple-100">
                    Profiles of the investment masterminds defining the next market era.
                  </p>
                </div>
                <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full border-8 border-white opacity-10" />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="border border-zinc-950 hover:bg-zinc-100 text-black px-8 py-2.5 text-xs font-bold uppercase rounded-md transition-colors shadow-xs">
              Load more
            </button>
          </div>
        </section>

      </main>

    </div>
  );
}
