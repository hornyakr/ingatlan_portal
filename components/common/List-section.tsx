import type { ReactNode } from "react";

type ListSectionProps<TItem> = {
  search: ReactNode;
  resultLabel: string;
  items: TItem[];
  renderItem: (item: TItem) => ReactNode;
  getKey: (item: TItem) => string | number;
};

export function ListSection<TItem>({
  search,
  resultLabel,
  items,
  renderItem,
  getKey,
}: ListSectionProps<TItem>) {
  return (
    <section className="bg-background py-10">
      <div className="mx-auto max-w-7xl px-6">
        {search}

        <p className="mt-8 text-base text-foreground">{resultLabel}</p>

        <div className="mt-8 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={getKey(item)}>{renderItem(item)}</div>
          ))}
        </div>

        <div className="mt-14 flex justify-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
        </div>
      </div>
    </section>
  );
}