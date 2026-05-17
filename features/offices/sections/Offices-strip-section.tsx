export function OfficesStripSection() {
  const items = Array.from({ length: 5 });

  return (
    <section className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-muted-foreground">Irodák</p>

        <div className="mt-6 flex items-center justify-center gap-10">
          {items.map((_, index) => (
            <div
              key={index}
              className="relative h-16 w-32 border border-border bg-muted"
            >
              {/* X placeholder */}
              <span className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_calc(50%-1px),var(--color-border),transparent_calc(50%+1px))]" />
              <span className="absolute inset-0 bg-[linear-gradient(to_top_right,transparent_calc(50%-1px),var(--color-border),transparent_calc(50%+1px))]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}