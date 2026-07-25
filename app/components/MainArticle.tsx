export interface MainArticleProps {
  imageSrc: string;
  imageAlt: string;
  credit?: string;
  title: string;
}

export function MainArticle({ imageSrc, imageAlt, credit, title }: MainArticleProps) {
  return (
    <article className="flex flex-col border-r border-zinc-200 pr-6 last:border-r-0">
      <div className="aspect-[16/11] w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md">
        <img src={imageSrc} className="absolute inset-0 w-full h-full object-cover" alt={imageAlt} />
        {credit && (
          <div className="absolute bottom-0 inset-x-0 bg-black/40 p-2 text-[10px] text-white font-bold">
            <span>{credit}</span>
          </div>
        )}
      </div>
      <h2 className="font-serif text-3.5xl font-black leading-tight tracking-tight text-black hover:text-blue-700 cursor-pointer">
        {title}
      </h2>
    </article>
  );
}
