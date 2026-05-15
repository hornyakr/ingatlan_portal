import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const properties = [
  {
    price: "79.6 M Ft",
    address: "Kisjakab utca 13, XIV. kerület",
    area: "72 m2 terület",
    rooms: "3 szoba",
    balcony: "12 m2 erkély",
    href: "/ingatlanok/kiemelt-1",
  },
  {
    price: "79.6 M Ft",
    address: "Kisjakab utca 13, XIV. kerület",
    area: "72 m2 terület",
    rooms: "3 szoba",
    balcony: "12 m2 erkély",
    href: "/ingatlanok/kiemelt-2",
  },
  {
    price: "79.6 M Ft",
    address: "Kisjakab utca 13, XIV. kerület",
    area: "72 m2 terület",
    rooms: "3 szoba",
    balcony: "12 m2 erkély",
    href: "/ingatlanok/kiemelt-3",
  },
];

function PropertyImagePlaceholder() {
  return (
    <div className="relative aspect-[3.25/1] border border-border bg-background">
      <span className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_calc(50%-1px),var(--color-border),transparent_calc(50%+1px))]" />
      <span className="absolute inset-0 bg-[linear-gradient(to_top_right,transparent_calc(50%-1px),var(--color-border),transparent_calc(50%+1px))]" />
    </div>
  );
}

export function FeaturedPropertiesSection() {
  return (
    <section className="bg-muted py-20 text-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
          Kiemelt Ingatlanok
        </h2>

        <div className="relative mt-14">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Előző kiemelt ingatlanok"
            className="absolute -left-16 top-24 hidden h-16 w-16 text-foreground hover:bg-accent lg:flex"
          >
            <ChevronLeft className="h-14 w-14" />
          </Button>

          <div className="grid gap-10 md:grid-cols-3">
            {properties.map((property) => (
              <article key={property.href}>
                <PropertyImagePlaceholder />

                <div className="mt-5">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {property.price}
                  </h3>

                  <div className="mt-4 space-y-2 text-base text-foreground">
                    <p>{property.address}</p>
                    <p>{property.area}</p>
                    <p>{property.rooms}</p>
                    <p>{property.balcony}</p>
                  </div>

                  <Link
                    href={property.href}
                    className="mt-7 inline-flex text-base font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Következő kiemelt ingatlanok"
            className="absolute -right-16 top-24 hidden h-16 w-16 text-foreground hover:bg-accent lg:flex"
          >
            <ChevronRight className="h-14 w-14" />
          </Button>
        </div>
      </div>
    </section>
  );
}