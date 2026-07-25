export interface ArticleCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  imageOpacity?: string;
  titleSize?: "sm" | "xs";
}

export function ArticleCard({
  imageSrc,
  imageAlt,
  title,
  imageOpacity,
  titleSize = "sm",
}: ArticleCardProps) {
  const titleClasses = titleSize === "xs" ? "text-xs" : "text-sm";

  return (
    <article className="flex flex-col">
      <div className="aspect-video w-full mb-3 border border-zinc-250 relative overflow-hidden rounded-md bg-zinc-100">
        <img
          src={imageSrc}
          className={`absolute inset-0 w-full h-full object-cover ${imageOpacity || ""}`}
          alt={imageAlt}
        />
      </div>
      <h4 className={`${titleClasses} font-bold leading-snug text-black hover:text-blue-600 cursor-pointer`}>
        {title}
      </h4>
    </article>
  );
}
