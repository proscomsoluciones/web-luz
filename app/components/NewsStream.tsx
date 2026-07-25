export interface NewsStreamItem {
  time: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface NewsStreamProps {
  title: string;
  items: NewsStreamItem[];
}

export function NewsStream({ title, items }: NewsStreamProps) {
  return (
    <div className="border-t border-zinc-200 mt-12 pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col divide-y divide-zinc-200">
          <span className="font-sans text-xs font-black uppercase text-zinc-900 mb-4 block">
            {title}
          </span>

          {items.map((item, index) => (
            <article key={index} className="flex gap-6 py-5 items-start">
              <span className="text-xs text-zinc-400 font-bold w-16 flex-shrink-0">
                {item.time}
              </span>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-black hover:text-blue-650 cursor-pointer">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <p className="text-[11px] text-zinc-500 mt-1">{item.subtitle}</p>
                )}
              </div>
              {item.imageSrc && (
                <div className="w-24 h-16 rounded-md flex-shrink-0 relative overflow-hidden border border-zinc-250">
                  <img
                    src={item.imageSrc}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={item.imageAlt || item.title}
                  />
                </div>
              )}
            </article>
          ))}
        </div>
        <div className="lg:col-span-4 hidden lg:block" />
      </div>

      <div className="flex justify-center mt-6">
        <button className="border border-zinc-950 hover:bg-zinc-100 text-black px-8 py-2 text-xs font-bold uppercase rounded-md transition-colors">
          Load more
        </button>
      </div>
    </div>
  );
}
