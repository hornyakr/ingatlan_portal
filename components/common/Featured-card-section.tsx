import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type FeaturedCardItem = {
  title: string;
  description: string;
  href: string;
  badge?: string | null;
};

type FeaturedCardSectionProps = {
  title: string;
  description: string;
  items: FeaturedCardItem[];
  ctaHref: string;
  ctaLabel: string;
};

function ImagePlaceholder({ badge }: { badge?: string | null }) {
  return (
    <div className="relative aspect-[4/2.55] border-b border-border bg-muted">
      <span className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_calc(50%-1px),var(--color-border),transparent_calc(50%+1px))]" />
      <span className="absolute inset-0 bg-[linear-gradient(to_top_right,transparent_calc(50%-1px),var(--color-border),transparent_calc(50%+1px))]" />

      {badge ? (
        <Badge className="absolute left-0 top-4 rounded-none px-3 py-1 text-xs font-semibold uppercase">
          {badge}
        </Badge>
      ) : null}
    </div>
  );
}

export function FeaturedCardSection({
  title,
  description,
  items,
  ctaHref,
  ctaLabel,
}: FeaturedCardSectionProps) {
  return (
    <section className="border-b border-border bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl font-normal tracking-tight text-foreground md:text-6xl">
            {title}
          </h2>

          <p className="mt-10 max-w-4xl text-2xl leading-snug text-muted-foreground md:text-3xl">
            {description}
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.href}
              className="overflow-hidden border border-border bg-card text-card-foreground"
            >
              <ImagePlaceholder badge={item.badge} />

              <div className="px-8 py-12">
                <h3 className="text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-7 max-w-xs text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <Button asChild size="lg" className="mt-16 px-10 text-xl font-normal">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}