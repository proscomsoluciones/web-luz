import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <div className="lg:col-span-3 flex flex-col gap-8 border-l border-zinc-200 pl-6">
      {children}
    </div>
  );
}
