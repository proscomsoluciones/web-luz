"use client";

import { useState } from "react";

const COLUMNISTS = [
  { name: "Maria Fernandez", role: "Monetary Policy & Inflation", img: "/middle_east_friendship.png" },
  { name: "Carlos Aguilar", role: "Trade Tariffs & Manufacturing", img: "/russian_inflation.png" },
  { name: "Lucia Ramirez", role: "Labor Markets & Work Culture", img: "/middle_east_friendship.png" },
  { name: "Diego Torres", role: "Capital Markets & Currencies", img: "/federal_reserve.png" },
];

const VIDEOS = [
  { title: "The Future of AI Hardware", img: "/orange_light.png" },
  { title: "Zuckerberg on Meta's Outlook", img: "/meta_zuck.png" },
  { title: "Airport Logistics Shakeups", img: "/orange_plane.png" },
];

const INSIDE_BUSINESS = [
  { title: "The Rise of Horse Racing as a Multi-Billion Dollar Asset Class", img: "/horse_racing.png" },
  { title: "How Collaborative Robotics Are Transforming Factories", img: "/team_collaboration.png" },
  { title: "Luxury Modern Office Design Increases Productivity", img: "/office_wood.png" },
  { title: "Global Corporate Architecture: A Shift Towards Open Spaces", img: "/hero_office.png" },
];

const TERMINAL_EDITION_ITEMS = [
  {
    date: "July 11",
    category: "Monetary Policy",
    title: "Why Central Banks Need More Patience Than Ever on Rate Cuts",
    desc: "Monetary policymakers are facing intense political pressure to act quickly. Recent history suggests caution yields far more stable outcomes.",
    img: "/orange_plane.png",
  },
  {
    date: "July 10",
    category: "Global Markets",
    title: "What Asset Markets Are Revealing About Long-Term Confidence",
    desc: "Asset prices globally reflect a divergent trend between technology sectors and traditional manufacturing outputs.",
    img: "/orange_light.png",
  },
  {
    date: "July 9",
    category: "Technology",
    title: "Why Small Businesses Require Better Digital Security Frameworks",
    desc: "Cyberattacks on medium businesses are rising rapidly. Standard firewalls are no longer sufficient to secure corporate assets.",
    img: "/meta_zuck.png",
  },
];

export default function OpinionPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col bg-white text-zinc-950 font-sans min-h-screen">
      
      {/* Top Advertising Leaderboard Banner */}
      <div className="border-b border-zinc-200 bg-[#f3f3f3] py-3 text-center w-full">
        <div className="mx-auto max-w-[1280px] px-4 flex justify-center">
          <div className="bg-black text-white px-6 py-2 text-[10px] font-bold flex items-center justify-between max-w-[728px] w-full shadow-xs">
            <span className="font-sans text-[10px] tracking-tight text-zinc-400">Bloomberg Audio Platform</span>
            <span className="text-[#ff3366] font-black uppercase text-[9px]">READY TO SCALE YOUR STRATEGY?</span>
          </div>
        </div>
      </div>

      {/* Sub Header (Bloomberg Opinion Page Title & Navigation) */}
      <div className="border-b border-zinc-200 bg-white w-full">
        <div className="mx-auto max-w-[1280px] px-4 pt-6 pb-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-655 mb-1 block">
            Bloomberg Opinion
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-black tracking-tight text-blue-800 leading-none">
            Opinion
          </h1>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-zinc-650 border-t border-zinc-200 pt-3 mt-4">
            <a href="#" className="hover:text-black">Editorials</a>
            <a href="#" className="hover:text-black">Columnists</a>
            <a href="#" className="hover:text-black">Economy</a>
            <a href="#" className="hover:text-black">Business</a>
            <a href="#" className="hover:text-black">Politics</a>
            <a href="#" className="hover:text-black">Technology</a>
          </nav>
        </div>
      </div>

      {/* Main Grid Content */}
      <main className="mx-auto w-full max-w-[1280px] px-4 py-8">
        
        {/* Top Dense Grid: Main Column (Span 8) + Sidebar (Span 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-200 pb-10">
          
          {/* LEFT AREA: Dense Opinion Articles (Span 8) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Primary Feature Article */}
            <article className="flex flex-col gap-4 border-b border-zinc-200 pb-8">
              <span className="text-[11px] font-black uppercase text-red-655 tracking-wider">
                Bloomberg Opinion
              </span>
              <div className="aspect-[16/9] w-full bg-zinc-100 border border-zinc-200 rounded-md overflow-hidden relative shadow-xs">
                <img
                  src="/orange_plane.png"
                  alt="Orange Airplane on Runway"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-black leading-tight text-black hover:text-blue-700 cursor-pointer tracking-tight">
                Private Equity Is Louder But Markets&apos; Real Target
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
                Private equity firms have captured headlines globally with massive buyouts, but the public equity markets remain the true target and anchor of modern financial stability.
              </p>
            </article>

            {/* Two-Column Mid Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-zinc-200 pb-8">
              
              {/* Column 1 */}
              <article className="flex flex-col gap-3">
                <div className="aspect-[16/10] w-full bg-zinc-100 border border-zinc-200 rounded-md overflow-hidden relative">
                  <img src="/orange_light.png" className="absolute inset-0 w-full h-full object-cover" alt="Memory Chips" />
                </div>
                <span className="text-[10px] font-black uppercase text-red-655 tracking-wider">
                  Technology
                </span>
                <h3 className="font-serif text-xl font-black leading-snug text-black hover:text-blue-700 cursor-pointer">
                  Are Memory Chips Drawing a Supercycle? Or Is Mid-Burn Over?
                </h3>
              </article>

              {/* Column 2 */}
              <article className="flex flex-col gap-3">
                <div className="aspect-[16/10] w-full bg-zinc-100 border border-zinc-200 rounded-md overflow-hidden relative">
                  <img src="/meta_zuck.png" className="absolute inset-0 w-full h-full object-cover" alt="Mark Zuckerberg" />
                </div>
                <span className="text-[10px] font-black uppercase text-red-655 tracking-wider">
                  Social Media
                </span>
                <h3 className="font-serif text-xl font-black leading-snug text-black hover:text-blue-700 cursor-pointer">
                  Meta Is Listening to the Protests, But For Now...
                </h3>
              </article>

            </div>

            {/* Columnists Row (Three Avatars and Names) */}
            <div className="grid grid-cols-3 gap-4 border-b border-zinc-200 pb-8 bg-zinc-50 p-4 rounded-md">
              {COLUMNISTS.slice(0, 3).map((col, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full border border-zinc-300 overflow-hidden flex-shrink-0 bg-zinc-200">
                    <img src={col.img} className="w-full h-full object-cover" alt={col.name} />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-black">{col.name}</h5>
                    <p className="text-[9px] text-zinc-500 font-bold leading-tight">{col.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary Feature Article */}
            <article className="flex flex-col gap-4">
              <div className="aspect-[16/9] w-full bg-zinc-100 border border-zinc-200 rounded-md overflow-hidden relative">
                <img src="/soldier_ethical.png" className="absolute inset-0 w-full h-full object-cover" alt="UK School Reform" />
              </div>
              <span className="text-[10px] font-black uppercase text-red-655 tracking-wider">
                Politics
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-black hover:text-blue-700 cursor-pointer leading-tight">
                The UK Is Trapped by Tapping Ethical School Reform But Can&apos;t Pay For It
              </h3>
              <p className="text-xs sm:text-sm text-zinc-550 leading-relaxed max-w-3xl">
                The latest education budget proposal promises radical changes, but economic limits could derail the reforms before they reach classrooms.
              </p>
            </article>

          </div>

          {/* SIDEBAR: (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:border-l lg:border-zinc-200 lg:pl-6">
            
            {/* Newsletter widget */}
            <div className="bg-black text-white p-6 rounded-md shadow-md">
              <span className="text-[9px] font-black uppercase text-[#ff3366] tracking-wider block mb-1">
                OPINION DAILY
              </span>
              <h4 className="text-sm font-black mb-3 leading-snug">
                Get the newsletter that shapes the global debate.
              </h4>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 text-xs text-white px-3 py-2 outline-none focus:ring-1 focus:ring-zinc-700 rounded-none placeholder-zinc-500"
                />
                <button className="bg-white text-black hover:bg-zinc-200 transition-colors text-xs font-black uppercase tracking-wider py-2 rounded-none">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Highlighted Yellow Ad Block */}
            <div className="border border-zinc-200 bg-[#fffbeb] p-6 rounded-md shadow-xs flex flex-col justify-between aspect-[4/3]">
              <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider">
                China&apos;s Offbeat Business
              </span>
              <h4 className="font-serif text-lg font-black text-amber-950 leading-tight">
                The unofficial trading routes keeping the local currency resilient despite international pressures.
              </h4>
              <a href="#" className="text-xs font-black text-amber-900 hover:underline uppercase tracking-wider mt-4 block">
                Read Article →
              </a>
            </div>

            {/* Videos Grid */}
            <div className="border-t border-zinc-200 pt-6">
              <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-red-655 rounded-full" />
                <span>Videos</span>
              </h4>
              <div className="flex flex-col gap-4">
                {VIDEOS.map((vid, idx) => (
                  <div key={idx} className="group cursor-pointer flex gap-3 items-center">
                    <div className="w-20 h-14 bg-zinc-200 border border-zinc-300 rounded-md overflow-hidden flex-shrink-0 relative">
                      <img src={vid.img} className="w-full h-full object-cover" alt={vid.title} />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <span className="text-white text-xs">▶</span>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-zinc-800 leading-snug group-hover:text-blue-700 transition-colors">
                      {vid.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Columnists Circle List */}
            <div className="border-t border-zinc-200 pt-6">
              <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 mb-4">
                Our Columnists
              </h4>
              <div className="flex flex-col gap-4">
                {COLUMNISTS.map((col, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-zinc-300 flex-shrink-0">
                      <img src={col.img} className="w-full h-full object-cover" alt={col.name} />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-black hover:underline cursor-pointer">{col.name}</h5>
                      <p className="text-[10px] text-zinc-500">{col.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Section: Inside Business */}
        <section className="py-12 border-b border-zinc-200">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 mb-6">
            Inside Business
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INSIDE_BUSINESS.map((item, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col">
                <div className="aspect-[4/3] w-full bg-zinc-150 rounded-md mb-3 overflow-hidden border border-zinc-250 relative">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
                </div>
                <h4 className="font-sans text-xs sm:text-sm font-black text-zinc-900 hover:text-blue-700 transition-colors leading-tight">
                  {item.title}
                </h4>
              </article>
            ))}
          </div>
        </section>

        {/* Bonus Ad Banner */}
        <section className="py-8 border-b border-zinc-200">
          <div className="bg-[#eef88f] border border-zinc-300 p-6 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-md">
            <div>
              <span className="text-[9px] font-black uppercase text-[#1e3a8a] tracking-wider block mb-1">
                Bloomberg Money
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-black text-zinc-950 leading-tight">
                How much fun should I have with my bonus?
              </h3>
            </div>
            <button className="bg-black text-white hover:bg-zinc-800 text-xs font-black uppercase tracking-wider px-6 py-2.5 rounded-none shrink-0 transition-colors">
              Read Guide
            </button>
          </div>
        </section>

        {/* Section: Terminal Edition */}
        <section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left side list of articles */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-2">
                Terminal Edition
              </h3>
              
              <div className="flex flex-col divide-y divide-zinc-150">
                {TERMINAL_EDITION_ITEMS.map((item, idx) => (
                  <article key={idx} className="group cursor-pointer flex gap-4 sm:gap-6 py-6 items-start">
                    <span className="text-xs text-zinc-400 font-bold w-16 shrink-0">{item.date}</span>
                    <div className="flex-1 flex flex-col gap-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-655">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-lg sm:text-xl font-black text-black group-hover:text-blue-700 transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-550 leading-relaxed max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                    <div className="w-24 h-16 sm:w-28 sm:h-20 bg-zinc-100 border border-zinc-200 rounded-md overflow-hidden shrink-0 relative">
                      <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right side Wall Street Week poster */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="relative border border-zinc-300 bg-[#ff3366] text-white p-6 aspect-[3/4] flex flex-col justify-between overflow-hidden shadow-md rounded-md">
                <span className="text-xs font-black uppercase tracking-[0.2em] self-start opacity-70">
                  Bloomberg Opinion
                </span>
                <div>
                  <h3 className="font-serif text-4xl font-black leading-none uppercase tracking-tight text-white mb-2">
                    WALL STREET WEEK
                  </h3>
                  <p className="text-xs text-red-100">
                    Watch the latest episodes analyzing global financial policies, trading markers, and economic stability metrics.
                  </p>
                </div>
                <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full border-8 border-white opacity-10" />
              </div>
            </div>

          </div>
        </section>

      </main>

    </div>
  );
}
