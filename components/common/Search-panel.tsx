import type { ReactNode } from "react";

type SearchPanelProps = {
  children: ReactNode;
};

export function SearchPanel({ children }: SearchPanelProps) {
  return (
    <section className="rounded-md bg-nav p-5 text-nav-foreground">
      {children}
    </section>
  );
}