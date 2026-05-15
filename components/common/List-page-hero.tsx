type ListPageHeroProps = {
  title: string;
  lead: string;
  highlightedText: string;
};

export function ListPageHero({
  title,
  lead,
  highlightedText,
}: ListPageHeroProps) {
  return (
    <section className="border-b border-border bg-muted">
      <div className="relative mx-auto flex min-h-[300px] max-w-7xl items-center overflow-hidden px-6">
        <span className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_calc(50%-1px),var(--color-border),transparent_calc(50%+1px))]" />
        <span className="absolute inset-0 bg-[linear-gradient(to_top_right,transparent_calc(50%-1px),var(--color-border),transparent_calc(50%+1px))]" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>

          <p className="mt-2 text-2xl leading-tight text-foreground md:text-3xl">
            {lead}{" "}
            <strong className="font-semibold">{highlightedText}</strong> közül
          </p>
        </div>
      </div>
    </section>
  );
}