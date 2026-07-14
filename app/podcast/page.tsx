"use client";

import { useState } from "react";

const FEATURED_AUDIO = [
  {
    title: "Foundering",
    description: "Each season, this award-winning series brings you inside a different high-stakes drama from the technology industry.",
    img: "/middle_east_friendship.png"
  },
  {
    title: "The Mishal Husain Show",
    description: "Make sense of the world with one essential conversation, every weekend.",
    img: "/federal_reserve.png"
  },
  {
    title: "Odd Lots",
    description: "Joe Weisenthal and Tracy Alloway explore the most interesting topics in finance, markets and economics.",
    img: "/middle_east_friendship.png"
  },
  {
    title: "Stock Movers",
    description: "Five-minute conversations on the day's key stock movements.",
    img: "/russian_inflation.png"
  },
  {
    title: "Big Take",
    description: "One big story, every day. Bloomberg journalists take you inside the stories.",
    img: "/federal_reserve.png"
  },
  {
    title: "News Now",
    description: "The latest news, whenever you want it, updated throughout the day.",
    img: "/russian_inflation.png"
  }
];

const SCHEDULE_ITEMS = [
  { time: "17:46", title: "Rick Davis, Stonecourt Capital LP, Partner", type: "text" },
  { time: "18:00", title: "Bloomberg Wall Street Week", type: "show", img: "/middle_east_friendship.png" },
  { time: "18:08", title: "David Westin, Bloomberg News, Anchor", type: "text" },
  { time: "19:00", title: "Masters in Business", type: "show", img: "/federal_reserve.png" },
  { time: "19:08", title: "McKeel O Hagerty, Hagerty Insurance Agency, Chief Executive Officer", type: "text" },
  { time: "20:00", title: "Bloomberg Podcast Spotlight", type: "show", img: "/russian_inflation.png" },
  { time: "20:08", title: "Steven Richards \"Steve\", Thesis Asset Management Limited, Investment Manager", type: "text" }
];

const PODCAST_ITEMS = [
  {
    show: "Leaders With Francine Lacqua",
    date: "July 5",
    episode: "Rafael Nadal",
    img: "/federal_reserve.png"
  },
  {
    show: "The Mishal Husain Show",
    date: "July 10",
    episode: "Steve Richards on Burnham's Plan",
    img: "/middle_east_friendship.png"
  },
  {
    show: "Odd Lots",
    date: "July 10",
    episode: "Korea's Levered ETFs Shake Up Global Markets",
    img: "/russian_inflation.png"
  },
  {
    show: "Money Stuff",
    date: "July 10",
    episode: "Paid in Eggs",
    img: "/federal_reserve.png"
  },
  {
    show: "Big Take",
    date: "July 10",
    episode: "The Grueling Economics of Tennis",
    img: "/middle_east_friendship.png"
  },
  {
    show: "Big Take Asia",
    date: "July 7",
    episode: "China Flashes Its Military Muscle",
    img: "/russian_inflation.png"
  },
  {
    show: "The Deal",
    date: "July 8",
    episode: "Hilary Knight",
    img: "/federal_reserve.png"
  },
  {
    show: "Disclosure",
    date: "December 9",
    episode: "These Federal Officers Wield the Power of Transparency",
    img: "/middle_east_friendship.png"
  }
];

const RADIO_ITEMS = [
  { show: "News Now", date: "July 10", episode: "Stocks Close Modestly Higher, Cease Fire Ends But Talks Continue", img: "/russian_inflation.png" },
  { show: "Stock Movers", date: "July 10", episode: "Oracle, SK Hynix, Meta", img: "/middle_east_friendship.png" },
  { show: "Masters in Business", date: "July 9", episode: "McKeel Hagerty", img: "/federal_reserve.png" },
  { show: "Daybreak US", date: "July 10", episode: "US CPI Preview", img: "/russian_inflation.png" },
  { show: "Businessweek Daily", date: "July 9", episode: "Rare Earth Talent Crisis", img: "/federal_reserve.png" },
  { show: "Surveillance", date: "July 10", episode: "July 10th, 2026", img: "/middle_east_friendship.png" },
  { show: "This Weekend", date: "July 5", episode: "Trump Gives July 4th Speech", img: "/russian_inflation.png" },
  { show: "Here's Why", date: "July 10", episode: "Here's Why Defense Spending Isn't Delivering", img: "/federal_reserve.png" }
];

const DOCUMENTARIES = [
  {
    title: "Foundering",
    description: "In Season 6 of Foundering: The Killing of Bob Lee, a beloved tech founder's homicide became a symbol for the decline of San Francisco.",
    img: "/middle_east_friendship.png"
  },
  {
    title: "The Sixth Bureau",
    description: "Superpowers, secrets and the spy who got caught – how the US got inside China's elusive intelligence agency.",
    img: "/federal_reserve.png"
  },
  {
    title: "IVF Disrupted",
    description: "An investigation into clinical mistakes, staffing crises, and financial pressures at one of America's fastest-growing IVF chains.",
    img: "/russian_inflation.png"
  },
  {
    title: "Levittown",
    description: "The story of how a New York suburb became the epicenter of the global fight against deepfake pornography.",
    img: "/middle_east_friendship.png"
  },
  {
    title: "Prognosis",
    description: "Misconception follows reporter Kristen V. Brown on her own intimate journey as she uncovers the business of fertility.",
    img: "/federal_reserve.png"
  },
  {
    title: "The Pay Check",
    description: "The Pay Check podcast goes global in season four to explore the inequality crisis brought on by the Covid-19 pandemic.",
    img: "/russian_inflation.png"
  }
];

const WORLD_ITEMS = [
  { show: "Daybreak Europe", date: "July 10", episode: "Burnham's UK Coronation", img: "/middle_east_friendship.png" },
  { show: "Bloomberg Australia", date: "July 8", episode: "The Mine That Predicts Major Wars", img: "/federal_reserve.png" },
  { show: "Next Africa", date: "July 9", episode: "How Football Shapes Moroccan Politics", img: "/russian_inflation.png" },
  { show: "Big Take Asia", date: "July 7", episode: "China Flashes Its Military Muscle", img: "/middle_east_friendship.png" },
  { show: "Daybreak Asia", date: "July 9", episode: "SK Hynix Raises $26.5B", img: "/federal_reserve.png" }
];

export default function PodcastPage() {
  const [activePlay, setActivePlay] = useState(false);
  const [station, setStation] = useState("National");

  return (
    <div className="flex flex-col bg-white text-zinc-950 font-sans min-h-screen">
      
      {/* Top Banner Advertisement */}
      <div className="border-b border-zinc-200 bg-[#f3f3f3] py-2 text-center w-full">
        <div className="mx-auto max-w-[1280px] px-4 flex justify-center">
          <div className="bg-black text-white px-6 py-2 text-xs font-bold flex items-center justify-between max-w-[728px] w-full shadow-xs">
            <span className="font-sans text-[10px] tracking-tight text-zinc-400">Bloomberg Audio Platform</span>
            <span className="text-[#ff3366] font-black uppercase text-[9px]">READY TO SCALE YOUR STRATEGY?</span>
          </div>
        </div>
      </div>

      {/* Sub-Navigation (Shows, Radio, Live TV, Podcasts, Briefings) */}
      <div className="border-b border-zinc-200 bg-white w-full">
        <div className="mx-auto max-w-[1280px] px-4 py-3">
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-bold text-zinc-650 uppercase tracking-wider">
            <a href="#" className="hover:text-black transition-colors text-black border-b-2 border-black pb-1">Shows</a>
            <a href="#" className="hover:text-black transition-colors">Radio</a>
            <a href="#" className="hover:text-black transition-colors">Live TV</a>
            <a href="#" className="hover:text-black transition-colors">Podcasts</a>
            <a href="#" className="hover:text-black transition-colors">Briefings</a>
          </nav>
        </div>
      </div>

      {/* Hero Player Section (Full width black block matching the screenshot) */}
      <section className="bg-black text-white w-full py-8 border-b border-zinc-800">
        <div className="mx-auto max-w-[1280px] px-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              
              {/* Cover image (Square Bloomberg Balance of Power logo style) */}
              <div className="w-28 h-28 bg-[#1e2025] border border-zinc-850 overflow-hidden relative shadow-lg rounded-md flex-shrink-0 flex items-center justify-center p-3">
                <div className="text-center font-serif leading-none">
                  <span className="text-[7px] tracking-[0.25em] text-zinc-400 uppercase font-black">Bloomberg</span>
                  <div className="text-sm font-black mt-1 leading-snug text-white uppercase">Balance of Power</div>
                </div>
              </div>

              {/* Episode details */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-bold mb-1">
                  <span>Bloomberg Radio</span>
                  <span className="text-zinc-600">•</span>
                  <span>National</span>
                </div>
                <h2 className="font-serif text-3.5xl font-black leading-tight text-white mb-2">
                  Balance of Power
                </h2>
                <p className="text-xs text-zinc-455 leading-relaxed max-w-2xl">
                  Bloomberg Balance of Power focuses on politics and policies on Capitol Hill, in President Trump&apos;s administration, the federal agencies and the courts.
                </p>
              </div>
            </div>

            {/* Progress bar line */}
            <div className="w-full bg-zinc-800 h-0.5 rounded-full relative">
              <div className="bg-white h-full w-[45%]" />
            </div>

            {/* Play controls bar */}
            <div className="flex items-center justify-between gap-4">
              
              {/* Speaker icon */}
              <button className="text-zinc-400 hover:text-white" aria-label="Mute/Unmute">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
              </button>

              {/* Listen Live Button */}
              <button
                onClick={() => setActivePlay(!activePlay)}
                className="border border-white hover:bg-white hover:text-black text-white px-8 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2"
              >
                <span className="text-sm">🎧</span>
                <span>Listen Live</span>
              </button>

              {/* LIVE blinking badge */}
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-655 animate-ping" />
                <span className="bg-red-655 text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-wider rounded-none">
                  LIVE
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <main className="mx-auto w-full max-w-[1280px] px-4 py-8">
        
        {/* 2. Main Grid: Featured Audio & Live Radio Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-200 pb-10">
          
          {/* Featured Audio (Span 8) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 mb-2 border-b border-zinc-200 pb-2">
              Featured Audio
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {FEATURED_AUDIO.map((show, idx) => (
                <article key={idx} className="group cursor-pointer flex flex-col">
                  {/* Aspect Ratio 1:1 Cover Art */}
                  <div className="aspect-square w-full bg-zinc-150 rounded-md mb-3 overflow-hidden border border-zinc-200 relative">
                    <img src={show.img} className="absolute inset-0 w-full h-full object-cover" alt={show.title} />
                  </div>
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

          {/* Live Radio Schedule & Dropdown (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 border-l border-zinc-200 pl-6">
            
            {/* Station Dropdown */}
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <span className="text-xs font-bold text-zinc-650">Current Station</span>
              <select
                value={station}
                onChange={(e) => setStation(e.target.value)}
                className="bg-white border border-zinc-300 text-xs font-bold text-zinc-800 px-4 py-1.5 rounded-full outline-none cursor-pointer hover:bg-zinc-50"
              >
                <option value="National">National</option>
                <option value="London">London</option>
                <option value="New York">New York</option>
              </select>
            </div>

            {/* Schedule List */}
            <div>
              <h4 className="text-[11px] font-black uppercase text-zinc-500 tracking-wider mb-4 border-b border-zinc-200 pb-2">
                Live Radio Schedule
              </h4>
              
              <div className="flex flex-col divide-y divide-zinc-150">
                {SCHEDULE_ITEMS.map((item, idx) => (
                  <div key={idx} className="py-3 flex gap-4 items-start">
                    <span className="text-xs text-zinc-400 font-bold w-12 flex-shrink-0">{item.time}</span>
                    
                    <div className="flex-1 flex gap-3 items-center">
                      {item.type === "show" && item.img && (
                        <div className="w-10 h-10 bg-zinc-200 border border-zinc-300 rounded-md overflow-hidden flex-shrink-0">
                          <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                        </div>
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

        {/* 3. Available On Platform Badges */}
        <section className="py-8 border-b border-zinc-200">
          <span className="text-xs font-bold text-zinc-500 block mb-4">Available on</span>
          <div className="flex flex-wrap gap-3">
            {["Bloomberg App", "Apple", "Spotify", "Youtube", "iHeart", "SiriusXM", "TuneIn"].map((platform) => (
              <span key={platform} className="border border-zinc-300 text-xs font-bold text-zinc-800 px-4 py-2 rounded-full cursor-pointer hover:bg-zinc-50 transition-colors">
                {platform}
              </span>
            ))}
          </div>
        </section>

        {/* 4. Podcasts Grid Section */}
        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 mb-6">
            Podcasts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {PODCAST_ITEMS.map((pod, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col border border-zinc-200 rounded-md overflow-hidden bg-white shadow-xs">
                <div className="aspect-square w-full relative overflow-hidden border-b border-zinc-200 bg-zinc-50">
                  <img src={pod.img} className="absolute inset-0 w-full h-full object-cover" alt={pod.show} />
                </div>
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
              Load more
            </button>
          </div>
        </section>

        {/* 5. Radio Section */}
        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 mb-6">
            Radio
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {RADIO_ITEMS.map((radio, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col border border-zinc-200 rounded-md overflow-hidden bg-white shadow-xs">
                <div className="aspect-square w-full relative overflow-hidden border-b border-zinc-200 bg-zinc-50">
                  <img src={radio.img} className="absolute inset-0 w-full h-full object-cover" alt={radio.show} />
                </div>
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
              Load more
            </button>
          </div>
        </section>

        {/* 6. Audio Documentaries Section */}
        <section className="py-8 border-b border-zinc-200">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 mb-6 font-serif">
            Audio Documentaries
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {DOCUMENTARIES.map((doc, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col">
                <div className="aspect-square w-full bg-zinc-150 rounded-md mb-3 overflow-hidden border border-zinc-200 relative">
                  <img src={doc.img} className="absolute inset-0 w-full h-full object-cover" alt={doc.title} />
                </div>
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

        {/* 7. Around the World Section */}
        <section className="py-8">
          <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 mb-6">
            Around the World
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {WORLD_ITEMS.map((item, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col border border-zinc-200 rounded-md overflow-hidden bg-white shadow-xs">
                <div className="aspect-square w-full relative overflow-hidden border-b border-zinc-200 bg-zinc-50">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.show} />
                </div>
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
