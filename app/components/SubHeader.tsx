interface SubHeaderProps {
  title: string;
  links: string[];
}

export function SubHeader({ title, links }: SubHeaderProps) {
  return (
    <div className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 pt-6 pb-2">
        <div className="flex flex-col gap-3">
          <h1 className="font-serif text-6xl font-black tracking-tight text-black leading-none">
            {title}
          </h1>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-zinc-650 border-t border-zinc-200 pt-3 mt-1">
            {links.map((link, index) => (
              <a key={index} href="#" className="hover:text-black">
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
