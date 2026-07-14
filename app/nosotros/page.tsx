const CAREER_LINKS = [
  { label: "What we do", href: "#" },
  { label: "Our culture", href: "#" },
  { label: "Early careers", href: "#" },
  { label: "Experienced professionals", href: "#" },
];

const VALUE_LINKS = [
  { label: "Inclusion", href: "#" },
  { label: "Philanthropy", href: "#" },
  { label: "Technology", href: "#" },
  { label: "Sustainability", href: "#" },
];

const FOCUS_AREAS = [
  "The Arts",
  "Education",
  "Environment",
  "Government Innovation",
  "Public Health",
];

const STORIES = [
  {
    tag: "Study",
    title: "Meet ASKB: Bloomberg's first Law Agency AI to the Bloomberg Terminal",
    description: "Meet ASKB: Bloomberg's first Law Agency AI to the Bloomberg Terminal. Learn how this new capability helps legal professionals gather, analyze, and apply regulatory and legal information directly in their workflows.",
    img: "/askb_go.png",
  },
  {
    tag: "Article",
    title: "Bloomberg Named 5th Best Place to Work in Technology & AI by Glassdoor",
    description: "Glassdoor reviews show their perspective on what it's like to work here, highlights from employees on culture, career progression, and work-life balance.",
    img: "/glassdoor_best_places.png",
  },
  {
    tag: "Article",
    title: "Building pathways in media: Emma Bowen Foundation students connect with Bloomberg mentors",
    description: "A mentoring program helps Emma Bowen Foundation students connect with Bloomberg mentors, building pathways in media and communications through guidance, mock interviews, and career pathing.",
    img: "/mentoring_pathways.png",
  },
];

export default function NosotrosPage() {
  return (
    <div className="flex flex-col bg-white text-zinc-950 font-sans min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[480px] flex items-center bg-black text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_office.png"
            alt="Bloomberg office meeting"
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-[1280px] w-full px-4 sm:px-6 py-20 flex flex-col items-start">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-4">
            Bloomberg
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black leading-tight max-w-2xl mb-8 tracking-tight">
            Where data, people and ideas intersect.
          </h1>
          <button className="bg-white text-black hover:bg-zinc-200 transition-colors px-8 py-3.5 text-xs font-black uppercase tracking-wider rounded-none shadow-md">
            SEARCH JOBS
          </button>
        </div>
      </section>

      {/* 2. Careers Section (Black Background) */}
      <section className="bg-black text-white border-t border-zinc-900">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left side text and links */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-black leading-tight mb-8">
                Make it happen here: See where a career at Bloomberg could take you.
              </h3>
              
              <div className="flex flex-col border-t border-zinc-800 divide-y divide-zinc-800">
                {CAREER_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between py-5 text-base sm:text-lg font-bold text-zinc-100 hover:text-white transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right side image */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full bg-zinc-900 border border-zinc-800 relative overflow-hidden rounded-md shadow-xl">
                <img
                  src="/team_collaboration.png"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Values Section (White Background) */}
      <section className="bg-white text-zinc-950">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left side values & text */}
            <div className="lg:col-span-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-black mb-6">
                Discover our values – and how we live them
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-8 max-w-xl">
                We believe profit and principles are not mutually exclusive. They reinforce one another.
                And doing the right thing by our people, our customers, our communities and our planet
                is also the best thing for our business.
              </p>
              
              {/* Values 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {VALUE_LINKS.map((value) => (
                  <a
                    key={value.label}
                    href={value.href}
                    className="group flex items-center justify-between py-4 border-b border-zinc-200 text-sm sm:text-base font-black text-zinc-900 hover:text-blue-700 transition-colors"
                  >
                    <span>{value.label}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right side image */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full bg-zinc-100 border border-zinc-200 relative overflow-hidden rounded-md shadow-md">
                <img
                  src="/office_wood.png"
                  alt="Modern office corridor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Face the Data / Philanthropy Section (Light Gray Background) */}
      <section className="bg-zinc-50 border-t border-b border-zinc-200 text-zinc-950">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Left side text and stats */}
            <div className="lg:col-span-8 flex flex-col">
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-black mb-6">
                Face the data. Change the world.
              </h2>
              <p className="text-sm sm:text-base text-zinc-650 leading-relaxed mb-8 max-w-3xl">
                Data is reality. If you face it, you can understand it. Then, you can do something about it.
                We reinvest everything we earn from our business and we&apos;ve put it into our philanthropic
                efforts - along with a host of our partners - to help save and improve lives across the globe.
              </p>
              
              {/* Divider & highlighted stats */}
              <div className="mt-auto pt-6 border-t-4 border-black">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-black font-black">
                  Bloomberg Philanthropies invests in <span className="text-blue-700">700 cities, 150 countries</span>
                </p>
              </div>
            </div>
            
            {/* Right side Focus Areas */}
            <div className="lg:col-span-4 flex flex-col justify-start">
              <div className="border-t border-black pt-4 mb-4">
                <span className="text-[11px] font-black uppercase tracking-wider text-zinc-400 block mb-1">
                  Focus areas
                </span>
                <div className="h-0.5 w-full bg-zinc-200" />
              </div>
              <ul className="flex flex-col gap-3">
                {FOCUS_AREAS.map((area) => (
                  <li
                    key={area}
                    className="text-sm sm:text-base font-bold text-zinc-800 flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Bloomberg's Stories Section (White Background) */}
      <section className="bg-white text-zinc-950">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-16 lg:py-24">
          <h2 className="font-serif text-3xl font-black text-black mb-12 border-b border-zinc-200 pb-4">
            Bloomberg&apos;s stories
          </h2>
          
          <div className="flex flex-col gap-12 lg:gap-16">
            {STORIES.map((story, index) => (
              <article
                key={index}
                className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start pb-12 border-b border-zinc-150 last:border-b-0 last:pb-0"
              >
                
                {/* Story Image */}
                <div className="md:col-span-4 lg:col-span-3">
                  <div className="aspect-[4/3] sm:aspect-[16/10] md:aspect-square w-full bg-zinc-100 border border-zinc-200 relative overflow-hidden rounded-md shadow-xs">
                    <img
                      src={story.img}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Story Info */}
                <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-between h-full py-1">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                        {story.tag}
                      </span>
                      <div className="h-px w-8 bg-zinc-300" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-black text-black leading-tight group-hover:text-blue-700 transition-colors mb-3">
                      {story.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-550 leading-relaxed mb-6 max-w-4xl">
                      {story.description}
                    </p>
                  </div>
                  
                  {/* Arrow Indicator */}
                  <div className="text-xl text-black group-hover:translate-x-2 transition-transform duration-200">
                    →
                  </div>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing CTA (White Background) */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="flex flex-col items-center text-center border-t border-zinc-200 pt-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-black mb-8">
              Make it happen here.
            </h2>
            <button className="bg-black hover:bg-zinc-800 text-white transition-colors px-10 py-4 text-xs font-black uppercase tracking-wider rounded-none shadow-md">
              SEARCH JOBS
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
