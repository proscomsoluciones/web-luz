export interface TariffTrackerProps {
  title: string;
  headline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function TariffTrackerWidget({
  title,
  headline,
  description,
  imageSrc,
  imageAlt,
}: TariffTrackerProps) {
  return (
    <div className="border-t border-zinc-200 pt-6">
      <h4 className="text-[11px] font-black uppercase text-zinc-500 tracking-wider mb-3">
        {title}
      </h4>
      <article className="group cursor-pointer">
        <div className="aspect-[16/10] w-full rounded-md mb-3 overflow-hidden relative border border-zinc-200">
          <img
            src={imageSrc}
            className="absolute inset-0 w-full h-full object-cover"
            alt={imageAlt}
          />
        </div>
        <h3 className="font-serif text-lg font-black leading-tight text-black group-hover:text-blue-600 transition-colors">
          {headline}
        </h3>
        <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
          {description}
        </p>
      </article>
    </div>
  );
}
