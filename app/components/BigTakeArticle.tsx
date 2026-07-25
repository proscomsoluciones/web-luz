export interface BigTakeArticleProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function BigTakeArticle({
  category,
  title,
  description,
  imageSrc,
  imageAlt,
}: BigTakeArticleProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
      <div className="md:col-span-6 flex flex-col border border-zinc-250 rounded-md overflow-hidden">
        <img src={imageSrc} className="w-full aspect-[4/3] object-cover" alt={imageAlt} />
      </div>
      <div className="md:col-span-6">
        <span className="text-[11px] font-black uppercase text-zinc-500 tracking-wider">
          {category}
        </span>
        <h3 className="font-serif text-3xl font-black leading-tight text-black hover:text-blue-700 cursor-pointer mt-1">
          {title}
        </h3>
        <p className="text-sm text-zinc-650 mt-3 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
