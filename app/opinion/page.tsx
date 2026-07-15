"use client";

import { useState } from "react";

// Mock data to match the screenshot content
const COLUMNISTS = [
  { name: "Marcus Ashworth", role: "Trade Tariffs & Manufacturing", img: "/middle_east_friendship.png" },
  { name: "Shuli Ren", role: "Monetary Policy & Inflation", img: "/russian_inflation.png" },
  { name: "Anjani Trivedi", role: "Labor Markets & Work Culture", img: "/federal_reserve.png" },
];

const PROMOTIONS = [
  { title: "A Federal Reserve on Hold...", category: "Monetary Policy", img: "/federal_reserve.png" },
  { title: "IBM Signs Landmark Quantum Agreement in Paris", category: "Technology", img: "/orange_light.png" },
  { title: "France Prepares for the Olympic Spotlight", category: "Global Affairs", img: "/middle_east_friendship.png" },
  { title: "Yellow Cabs Face New Congestion Charges", category: "Urban Infrastructure", img: "/orange_plane.png" },
];

const EDITORIALS = [
  { title: "Middle East Friendship Accords Reach Crucial Milestone", category: "Diplomacy", img: "/middle_east_friendship.png" },
  { title: "Spanish Election Results Signal Shift in Regional Policy", category: "Politics", img: "/federal_reserve.png" },
  { title: "Russian Inflation Concerns Rise Amid Export Controls", category: "Economy", img: "/russian_inflation.png" },
  { title: "Fed Rate Cuts Expected by Q4 as Trade Settles", category: "Finance", img: "/orange_light.png" },
];

const ECONOMY_POLICY = [
  { title: "Labor Market Slackens as Tech Automation Accelerates", category: "Labor", img: "/team_collaboration.png" },
  { title: "How Collaborative Robotics Are Transforming Factories", category: "Manufacturing", img: "/team_collaboration.png" },
  { title: "Global Corporate Architecture Shifts to Open-Air Layouts", category: "Development", img: "/hero_office.png" },
  { title: "Why Central Banks Need More Patience Than Ever on Rate Cuts", category: "Policy", img: "/federal_reserve.png" },
];

const BUSINESS_FINANCE = [
  { title: "Private Equity Is Louder But Public Markets Hold Real Target", category: "Markets", img: "/orange_plane.png" },
  { title: "The Rise of Horse Racing as a Multi-Billion Dollar Asset Class", category: "Finance", img: "/horse_racing.png" },
  { title: "Luxury Modern Office Design Increases Productivity", category: "Business", img: "/office_wood.png" },
  { title: "Zuckerberg on Meta's Long-Term Corporate Outlook", category: "Technology", img: "/meta_zuck.png" },
];

const GLOBAL_POLICY = [
  { title: "UK School Reform Trapped by High Budget Promises", category: "Education", img: "/soldier_ethical.png" },
  { title: "Trade Tariffs Force Re-routing of Global Supply Lines", category: "Trade", img: "/orange_plane.png" },
  { title: "Airport Logistics Shakeups Following Transit Bottlenecks", category: "Logistics", img: "/orange_plane.png" },
  { title: "How Climate Policies Are Reshaping Port Investments", category: "Environment", img: "/orange_light.png" },
];

const MARKETS = [
  { title: "Asset Prices Reveal Divergent Global Investment Trends", category: "Analysis", img: "/orange_light.png" },
  { title: "Bond Yields Fluctuate as Inflation Forecasts Pivot", category: "Bonds", img: "/federal_reserve.png" },
  { title: "Commodity Surge Drives Up Industrial Input Expenses", category: "Commodities", img: "/team_collaboration.png" },
  { title: "Cryptocurrency Volatility Spikes Ahead of Regulatory Rules", category: "Crypto", img: "/meta_zuck.png" },
];

const SCIENCE_TECH = [
  { title: "Are Memory Chips Drawing a Supercycle? Or Is Mid-Burn Over?", category: "Chips", img: "/orange_light.png" },
  { title: "Cyberattacks Rise Against Medium-Sized Enterprises", category: "Security", img: "/meta_zuck.png" },
  { title: "The Future of Generative AI Hardware Infrastructure", category: "AI Hardware", img: "/orange_light.png" },
  { title: "Biotech Research Funding Pivot Towards Longevity Science", category: "Biotech", img: "/russian_inflation.png" },
];

const MORE_FROM_OPINION = [
  { time: "2h ago", author: "Marcus Ashworth", title: "Porto's $20 Billion Commerce is Tax-Free Paradise", img: "/team_collaboration.png" },
  { time: "4h ago", author: "Anjani Trivedi", title: "Why US EV Market is Still Not Ready for Cheap China Cars", img: "/middle_east_friendship.png" },
  { time: "6h ago", author: "Shuli Ren", title: "Glassdoor is No Longer the Best Place for Your Politics", img: "/glassdoor_best_places.png" },
  { time: "10h ago", author: "Marcus Ashworth", title: "London Stock Exchange Scrambles to Win Back Tech IPOs", img: "/mentoring_pathways.png" },
  { time: "12h ago", author: "Anjani Trivedi", title: "Affordable Houses Should Come From Prefab Factories", img: "/team_collaboration.png" },
  { time: "14h ago", author: "Shuli Ren", title: "How Multi-Billion Horse Racing is Becoming a Real Asset Class", img: "/horse_racing.png" },
  { time: "16h ago", author: "Marcus Ashworth", title: "Why Central Banks Require More Patience Than Ever", img: "/federal_reserve.png" },
  { time: "18h ago", author: "Anjani Trivedi", title: "Zuckerberg's Bold Strategy is Keeping Meta on Top", img: "/meta_zuck.png" },
  { time: "20h ago", author: "Shuli Ren", title: "Are Tech IPOs Having a Mid-Life Crisis?", img: "/orange_light.png" },
  { time: "22h ago", author: "Marcus Ashworth", title: "The Hidden Trading Routes Resisting Geopolitical Tension", img: "/russian_inflation.png" },
];

export default function OpinionPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col bg-white text-black font-sans min-h-screen">
      
      {/* 1. TOP AD BANNER */}
      <div className="w-full bg-[#f3f3f3] border-b border-zinc-200 py-3 flex justify-center">
        <div className="w-full max-w-[1012px] h-[100px] bg-black text-white flex items-center justify-between px-8 relative overflow-hidden">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-widest text-zinc-400">Bloomberg Advertisement</span>
            <h4 className="text-xl font-bold font-serif text-white">Ready to scale your strategy?</h4>
            <p className="text-xs text-zinc-300">Equip your team with the intelligence they need.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#ff3366] text-white hover:bg-red-600 transition-colors text-xs font-black uppercase px-4 py-2 cursor-pointer">
              Learn More
            </button>
          </div>
          <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none">
            <img src="/globe.svg" className="w-24 h-24" alt="globe" />
          </div>
        </div>
      </div>

      {/* 2. SUB-HEADER / SECTION NAVIGATION */}
      <div className="w-full border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-[1012px] px-4 py-3 flex flex-wrap items-center gap-x-3 text-[11px] text-zinc-700 font-sans border-b border-zinc-100">
          <a href="#" className="hover:text-black">Business</a>
          <span className="text-zinc-300">|</span>
          <a href="#" className="hover:text-black">Finance</a>
          <span className="text-zinc-300">|</span>
          <a href="#" className="hover:text-black">Economics</a>
          <span className="text-zinc-300">|</span>
          <a href="#" className="hover:text-black">Markets</a>
          <span className="text-zinc-300">|</span>
          <a href="#" className="hover:text-black">Politics & Policy</a>
          <span className="text-zinc-300">|</span>
          <a href="#" className="hover:text-black">Technology & Ideas</a>
          <span className="text-zinc-300">|</span>
          <a href="#" className="hover:text-black font-semibold">Culture</a>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="mx-auto w-full max-w-[1012px] px-4 py-6">

        {/* 3. MAIN CONTENT GRID: Left (Main + Sub) + Right (Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-200 pb-8">
          
          {/* LEFT AREA: Columns 1-8 */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            <div className="flex flex-col gap-3">
              <span className="text-sm font-black uppercase tracking-wider text-black font-sans">Bloomberg Opinion</span>
              
              {/* Lead Story - Horizontal Grid Layout */}
              <article className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6 border-b border-zinc-200">
                <div className="md:col-span-6 aspect-[4/3] w-full overflow-hidden border border-zinc-200 relative bg-zinc-50">
                  <img
                    src="/morgan_stanley_billboard.png"
                    alt="Morgan Stanley"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <div className="md:col-span-6 flex flex-col justify-center pt-2">
                  <h2 className="font-serif text-3xl font-black leading-tight text-zinc-950 group-hover:text-blue-900 transition-colors mb-2">
                    Morgan Stanley Landed Its Multibillion-Dollar Whale
                  </h2>
                  <p className="text-[11px] text-blue-600 font-bold">
                    By Paul J. Davies, Columnist
                  </p>
                </div>
              </article>
            </div>

            {/* Sub-lead stories: Two column grid with a vertical border */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-zinc-200 pb-6 pt-2">
              
              {/* Sub-lead 1 */}
              <article className="group cursor-pointer flex flex-col gap-3 pr-4 md:border-r md:border-zinc-200">
                <div className="w-full aspect-[4/3] overflow-hidden border border-zinc-200 relative bg-zinc-50">
                  <img
                    src="/memory_chip_energy.png"
                    alt="Memory Chips"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif text-xl font-black leading-snug text-zinc-950 group-hover:text-blue-900 transition-colors">
                  Guess Who&apos;s Coming to Crash the Memory-Chip Party?
                </h3>
                <p className="text-[11px] text-blue-600 font-bold">
                  By Shuli Ren, Columnist
                </p>
              </article>

              {/* Sub-lead 2 */}
              <article className="group cursor-pointer flex flex-col gap-3 pl-2">
                <div className="w-full aspect-[4/3] overflow-hidden border border-zinc-200 relative bg-zinc-50">
                  <img
                    src="/china_ev_plants.png"
                    alt="EV Cars"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif text-xl font-black leading-snug text-zinc-950 group-hover:text-blue-900 transition-colors">
                  China Has Too Few EV Plants, Not Too Many
                </h3>
                <p className="text-[11px] text-blue-600 font-bold">
                  By David Fickling, Columnist
                </p>
              </article>

            </div>

            {/* Columnists mini row with vertical separators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-200 py-4 my-2">
              
              {/* Col 1 */}
              <div className="flex gap-3 pr-4 md:border-r md:border-zinc-200">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-300 shrink-0">
                  <img src="/middle_east_friendship.png" className="w-full h-full object-cover" alt="Karishma Vaswani" />
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-[11px] font-bold text-zinc-900 leading-tight hover:underline hover:text-blue-900 cursor-pointer">
                    Global Hegemons Shouldn&apos;t Rewrite the Rules at Sea
                  </h5>
                  <p className="text-[9px] text-blue-600 font-bold leading-none">By Karishma Vaswani, Columnist</p>
                </div>
              </div>

              {/* Col 2 */}
              <div className="flex gap-3 px-2 md:border-r md:border-zinc-200">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-300 shrink-0">
                  <img src="/russian_inflation.png" className="w-full h-full object-cover" alt="Jessica Karl" />
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-[11px] font-bold text-zinc-900 leading-tight hover:underline hover:text-blue-900 cursor-pointer">
                    The Diarrhea Days of Summer Are Here
                  </h5>
                  <p className="text-[9px] text-blue-600 font-bold leading-none">By Jessica Karl, Columnist</p>
                </div>
              </div>

              {/* Col 3 */}
              <div className="flex gap-3 pl-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-300 shrink-0">
                  <img src="/federal_reserve.png" className="w-full h-full object-cover" alt="Nia-Malika Henderson" />
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-[11px] font-bold text-zinc-900 leading-tight hover:underline hover:text-blue-900 cursor-pointer">
                    Of Course Trump Is Exploiting Graham&apos;s Legacy
                  </h5>
                  <p className="text-[9px] text-blue-600 font-bold leading-none">By Nia-Malika Henderson, Columnist</p>
                </div>
              </div>

            </div>

            {/* Split row: Left (Factories) + Right (List) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
              
              {/* Factories block (Left 7 cols) */}
              <div className="md:col-span-7 flex flex-col gap-3">
                <span className="text-[10px] font-black uppercase text-zinc-400">Editorials</span>
                <div className="w-full aspect-[16/10] overflow-hidden border border-zinc-200 relative bg-zinc-50">
                  <img src="/prefab_house_factory.png" alt="Factories" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-xl font-black leading-snug text-black hover:text-blue-900 cursor-pointer">
                  Affordable Houses Should Come From Factories
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Prefabrication offers the single fastest route to resolving local housing crises, yet structural and zoning barriers remain stubbornly high.
                </p>
              </div>

              {/* Quick list block (Right 5 cols) */}
              <div className="md:col-span-5 flex flex-col justify-between border-l border-zinc-200 pl-6 gap-4">
                <div>
                  <span className="text-[9px] font-black uppercase text-red-655 block mb-1">Editorials</span>
                  <h4 className="font-serif text-sm font-black text-black hover:text-blue-900 cursor-pointer mb-1 leading-snug">
                    Are Tech IPOs Having a Major Mid-Life Crisis?
                  </h4>
                  <p className="text-[11px] text-zinc-500">Public listings no longer appeal to fast-growing firms.</p>
                </div>
                <div className="border-t border-zinc-150 pt-4">
                  <span className="text-[9px] font-black uppercase text-red-655 block mb-1">Editorials</span>
                  <h4 className="font-serif text-sm font-black text-black hover:text-blue-900 cursor-pointer mb-1 leading-snug">
                    Is the Housing Market Really Reaching a Floor?
                  </h4>
                  <p className="text-[11px] text-zinc-500">Mortgage rates settle but buyer sentiment remains frozen.</p>
                </div>
              </div>

            </div>

          </div>

          {/* SIDEBAR AREA: Columns 9-12 */}
          <div className="lg:col-span-4 lg:border-l lg:border-zinc-200 lg:pl-6 flex flex-col gap-6">
            
            {/* Opinion Daily Sign-up Widget (Revised to match screenshot) */}
            <div className="border border-zinc-200 bg-[#f9f9f9] p-5">
              <div className="flex gap-3 mb-4">
                <div className="flex -space-x-2 shrink-0">
                  <img className="w-8 h-8 rounded-full border border-white object-cover" src="/middle_east_friendship.png" alt="author" />
                  <img className="w-8 h-8 rounded-full border border-white object-cover" src="/russian_inflation.png" alt="author" />
                  <img className="w-8 h-8 rounded-full border border-white object-cover" src="/federal_reserve.png" alt="author" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-zinc-900 leading-snug">
                    Get the Opinion newsletter bundle
                  </h4>
                  <p className="text-[10px] text-zinc-550 leading-tight mt-0.5">
                    Matt Levine&apos;s Money Stuff, John Authers&apos; Points of Return and Jessica Karl&apos;s Opinion Today.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-b border-zinc-355 text-xs py-1.5 outline-none focus:border-black rounded-none w-full"
                />
                <label className="flex items-start gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="mt-1 rounded-sm border-zinc-300 text-black focus:ring-black" />
                  <span className="text-[10px] text-zinc-650 leading-tight">
                    Bloomberg may send me offers and promotions.
                  </span>
                </label>
                <button className="bg-black hover:bg-zinc-800 text-white transition-colors text-xs font-bold py-2 px-5 rounded-full self-start flex items-center gap-1 cursor-pointer">
                  <span className="text-sm font-semibold">+</span> Sign Up
                </button>
              </div>
              <p className="text-[9px] text-zinc-400 mt-4 leading-normal">
                By continuing, I agree to the <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
              </p>
            </div>

            {/* Features list with carousel controls (Revised to match screenshot) */}
            <div className="border-t border-zinc-200 pt-6">
              <h4 className="text-xs font-bold text-zinc-900 mb-4 uppercase tracking-wider">Features</h4>
              <div className="flex flex-col gap-3 group cursor-pointer">
                <div className="w-full aspect-[4/3] overflow-hidden border border-zinc-200 relative bg-zinc-50">
                  <img src="/south_asia_propose.png" className="w-full h-full object-cover" alt="Features article" />
                  <span className="absolute bottom-2 right-2 text-[8px] text-white/80 bg-black/40 px-1 py-0.5 font-sans">
                    Astrida Valigorsky/Getty Images
                  </span>
                </div>
                <h5 className="font-serif text-lg font-bold leading-tight text-zinc-900 group-hover:text-blue-900 transition-colors">
                  Minneapolis Offers a Blueprint for How to Beat MAGA
                </h5>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Faced with an unprecedented federal assault, citizens of the Twin Cities turned to their neighborhoods, churches and schools to defeat MAGA.
                </p>
                <p className="text-xs text-blue-600 font-medium">
                  By Francis Wilkinson, Columnist
                </p>
              </div>
              
              {/* Carousel controls */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                </div>
                <div className="flex gap-1">
                  <button className="w-6 h-6 border border-zinc-300 rounded-full flex items-center justify-center text-xs text-zinc-600 hover:border-black hover:text-black cursor-pointer">
                    &lt;
                  </button>
                  <button className="w-6 h-6 border border-zinc-300 rounded-full flex items-center justify-center text-xs text-zinc-600 hover:border-black hover:text-black cursor-pointer">
                    &gt;
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4. GRID CATEGORIES & ROW SECTIONS */}

        {/* Row A: Promotions */}
        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-4">Promotions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PROMOTIONS.map((item, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col gap-2">
                <div className="w-full aspect-[16/10] overflow-hidden border border-zinc-200 relative bg-zinc-50">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
                </div>
                <span className="text-[9px] font-black uppercase text-blue-900">{item.category}</span>
                <h4 className="font-serif text-xs font-black text-black group-hover:text-blue-900 transition-colors leading-snug">
                  {item.title}
                </h4>
              </article>
            ))}
          </div>
        </section>

        {/* Large Blue Callout Banner */}
        <section className="py-6">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white p-6 flex flex-col md:flex-row justify-between items-center gap-4 relative overflow-hidden">
            <div>
              <span className="text-[8px] font-black uppercase tracking-wider text-blue-300 block mb-1">Exclusive Insights</span>
              <h3 className="font-serif text-lg md:text-xl font-bold leading-tight max-w-xl">
                Get the views and opinions from our columnists on the issues shaping politics, finance, and culture.
              </h3>
            </div>
            <button className="bg-white text-blue-950 hover:bg-zinc-200 transition-colors text-xs font-black uppercase px-6 py-2.5 shrink-0 z-10 cursor-pointer">
              News Now
            </button>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none">
              <img src="/globe.svg" className="w-full h-full object-cover" alt="globe decoration" />
            </div>
          </div>
        </section>

        {/* Row B: Editorials */}
        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-4">Editorials</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {EDITORIALS.map((item, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col gap-2">
                <div className="w-full aspect-[16/10] overflow-hidden border border-zinc-200 relative bg-zinc-50">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
                </div>
                <span className="text-[9px] font-black uppercase text-blue-900">{item.category}</span>
                <h4 className="font-serif text-xs font-black text-black group-hover:text-blue-900 transition-colors leading-snug">
                  {item.title}
                </h4>
              </article>
            ))}
          </div>
        </section>

        {/* Row C: Economy & Policy */}
        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-4">Economy & Policy</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ECONOMY_POLICY.map((item, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col gap-2">
                <div className="w-full aspect-[16/10] overflow-hidden border border-zinc-200 relative bg-zinc-50">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
                </div>
                <span className="text-[9px] font-black uppercase text-blue-900">{item.category}</span>
                <h4 className="font-serif text-xs font-black text-black group-hover:text-blue-900 transition-colors leading-snug">
                  {item.title}
                </h4>
              </article>
            ))}
          </div>
        </section>

        {/* Row D: Business & Finance */}
        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-4">Business & Finance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {BUSINESS_FINANCE.map((item, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col gap-2">
                <div className="w-full aspect-[16/10] overflow-hidden border border-zinc-200 relative bg-zinc-50">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
                </div>
                <span className="text-[9px] font-black uppercase text-blue-900">{item.category}</span>
                <h4 className="font-serif text-xs font-black text-black group-hover:text-blue-900 transition-colors leading-snug">
                  {item.title}
                </h4>
              </article>
            ))}
          </div>
        </section>

        {/* Row E: Global Policy */}
        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-4">Global Policy</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {GLOBAL_POLICY.map((item, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col gap-2">
                <div className="w-full aspect-[16/10] overflow-hidden border border-zinc-200 relative bg-zinc-50">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
                </div>
                <span className="text-[9px] font-black uppercase text-blue-900">{item.category}</span>
                <h4 className="font-serif text-xs font-black text-black group-hover:text-blue-900 transition-colors leading-snug">
                  {item.title}
                </h4>
              </article>
            ))}
          </div>
        </section>

        {/* Row F: Markets */}
        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-4">Markets</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {MARKETS.map((item, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col gap-2">
                <div className="w-full aspect-[16/10] overflow-hidden border border-zinc-200 relative bg-zinc-50">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
                </div>
                <span className="text-[9px] font-black uppercase text-blue-900">{item.category}</span>
                <h4 className="font-serif text-xs font-black text-black group-hover:text-blue-900 transition-colors leading-snug">
                  {item.title}
                </h4>
              </article>
            ))}
          </div>
        </section>

        {/* Row G: Science & Tech */}
        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-4">Science & Tech</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SCIENCE_TECH.map((item, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col gap-2">
                <div className="w-full aspect-[16/10] overflow-hidden border border-zinc-200 relative bg-zinc-50">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
                </div>
                <span className="text-[9px] font-black uppercase text-blue-900">{item.category}</span>
                <h4 className="font-serif text-xs font-black text-black group-hover:text-blue-900 transition-colors leading-snug">
                  {item.title}
                </h4>
              </article>
            ))}
          </div>
        </section>

        {/* 5. FEED & SIDEBAR CALLOUT */}
        <section className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Feed (Left 8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-zinc-450 border-b border-zinc-200 pb-2 mb-2">
                More From Opinion
              </h3>
              <div className="flex flex-col divide-y divide-zinc-200">
                {MORE_FROM_OPINION.map((item, idx) => (
                  <article key={idx} className="group cursor-pointer flex justify-between gap-4 py-4 items-center">
                    <div className="flex items-start gap-4">
                      <span className="text-[10px] font-bold text-zinc-400 w-12 shrink-0">{item.time}</span>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black uppercase text-blue-900 mb-0.5">{item.author}</span>
                        <h4 className="font-serif text-sm font-black text-black group-hover:text-blue-900 transition-colors leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <div className="w-16 h-12 overflow-hidden border border-zinc-200 shrink-0 bg-zinc-50">
                      <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar Callout Card (Right 4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="border border-zinc-200 bg-black text-white p-6 flex flex-col justify-between items-start h-[360px] relative overflow-hidden">
                <div className="z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#ff3366] block mb-2">Bloomberg Big Take</span>
                  <h3 className="font-serif text-3xl font-black leading-tight text-white">
                    The story you can&apos;t miss.
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Financial and market audits detailing major transactions and policy changes around the globe.
                  </p>
                </div>
                <button className="bg-white text-black hover:bg-zinc-200 transition-colors text-xs font-black uppercase px-6 py-2.5 z-10 rounded-none cursor-pointer">
                  Read Now
                </button>
                <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none w-full h-1/2">
                  <img src="/globe.svg" className="w-full h-full object-contain" alt="Globe graphic" />
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      
    </div>
  );
}
