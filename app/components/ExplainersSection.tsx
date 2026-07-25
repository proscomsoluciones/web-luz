import { ArticleCard, ArticleCardProps } from "./ArticleCard";

interface ExplainersSectionProps {
  title: string;
  items: ArticleCardProps[];
}

export function ExplainersSection({ title, items }: ExplainersSectionProps) {
  return (
    <div className="border-t border-zinc-200 mt-10 pt-8">
      <h3 className="font-sans text-lg font-black uppercase text-zinc-900 mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <ArticleCard
            key={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
            titleSize="xs"
          />
        ))}
      </div>
    </div>
  );
}
