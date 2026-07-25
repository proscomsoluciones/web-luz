import { ReactNode } from "react";

interface MainContentGridProps {
  children: ReactNode;
}

export function MainContentGrid({ children }: MainContentGridProps) {
  return (
    <div className="lg:col-span-9 flex flex-col gap-8">
      {children}
    </div>
  );
}
