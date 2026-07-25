export interface TrumponomicsItem {
  title: string;
  duration: string;
}

interface TrumponomicsSectionProps {
  items: TrumponomicsItem[];
}

export function TrumponomicsSection({ items }: TrumponomicsSectionProps) {
  return (
    <div className="border-t border-zinc-200 mt-10 pt-8">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Red Trumponomics Logo Box */}
        <div className="w-full md:w-36 h-36 bg-red-600 text-white flex flex-col justify-between p-4 flex-shrink-0 relative overflow-hidden">
          <span className="font-sans text-xs font-black uppercase tracking-[0.2em] self-start opacity-70">
            Bloomberg
          </span>
          <div className="font-serif text-xl font-black leading-none uppercase tracking-tighter">
            TRUMP<br />ONOMICS
          </div>
          <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full border-4 border-white opacity-20" />
        </div>

        {/* 4 Cards Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-zinc-250 p-4 flex flex-col justify-between min-h-[144px]"
            >
              <div>
                <span className="text-[9px] font-black uppercase text-zinc-400 block mb-1">
                  Trumponomics
                </span>
                <p className="font-sans text-sm font-bold text-zinc-900 leading-snug hover:underline cursor-pointer">
                  {item.title}
                </p>
              </div>
              <span className="text-[10px] text-zinc-500 font-bold flex items-center gap-1 mt-3">
                🎧 Listen: {item.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
