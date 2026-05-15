// components/property/featured-property-hero.tsx

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = ["72 m2 terület", "3 szoba", "12 m2 erkély"];

export function FeaturedPropertyHero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid min-h-[720px] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_560px] lg:px-10">
        <div>
          <h1 className="max-w-xl text-5xl font-normal leading-tight tracking-tight text-foreground lg:text-6xl">
            The largest community
            <br />
            of photo enthusiasts
          </h1>

          <Button className="mt-10 rounded-md px-7 py-6 text-base font-semibold uppercase">
            Részletes keresés
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] bg-secondary p-10">
          <Button className="absolute right-0 top-0 rounded-none px-10 py-6 text-base font-semibold uppercase">
            Ingatlanjaim
          </Button>

          <div className="mb-8 flex items-center gap-8 pt-10">
            <div className="h-32 w-32 shrink-0 rounded-full border border-border bg-background" />

            <div>
              <h2 className="text-3xl font-medium text-foreground">
                Kis Józska
              </h2>
              <p className="text-lg text-muted-foreground">
                ingatlancégtől
              </p>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            <div className="relative aspect-square border border-border bg-background">
              <div className="absolute left-0 top-5 bg-primary px-3 py-1 text-xs font-semibold uppercase text-primary-foreground">
                Új építésű
              </div>

              <Button
                size="icon"
                variant="secondary"
                className="absolute left-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full"
                aria-label="Előző kép"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                size="icon"
                variant="secondary"
                className="absolute right-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full"
                aria-label="Következő kép"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="space-y-8 pt-8">
              <div>
                <p className="text-3xl font-semibold text-foreground">
                  79.6 M Ft
                </p>
                <p className="text-base text-muted-foreground">
                  963 415 Ft/m2
                </p>
              </div>

              <div className="space-y-4 text-base text-foreground">
                {features.map((feature) => (
                  <p key={feature}>{feature}</p>
                ))}
              </div>

              <p className="text-base text-foreground">
                Kisjakab utca 13, XIV. kerület
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-md">
            <h3 className="text-3xl font-medium text-foreground">
              Bemutatkozás
            </h3>
            <p className="mt-3 text-lg leading-snug text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}