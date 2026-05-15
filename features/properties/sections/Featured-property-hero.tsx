import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = ["72 m2 terület", "3 szoba", "12 m2 erkély"];

export function FeaturedPropertyHero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid min-h-[720px] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_500px] lg:px-10">
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

        <div className="relative mx-auto w-full max-w-[500px] bg-secondary px-9 pb-9 pt-9">
  <Button
    size="icon"
    variant="ghost"
    className="absolute -left-16 top-16 h-12 w-12 text-muted-foreground"
    aria-label="Előző ingatlan"
  >
    <ChevronLeft className="h-12 w-12" />
  </Button>

  <Button
    size="icon"
    variant="ghost"
    className="absolute -right-16 top-16 h-12 w-12 text-muted-foreground"
    aria-label="Következő ingatlan"
  >
    <ChevronRight className="h-12 w-12" />
  </Button>

  <Button className="absolute right-0 top-0 rounded-none px-9 py-5 text-sm font-semibold uppercase">
    Ingatlanjaim
  </Button>

  <div className="mb-7 flex items-center gap-8 pt-5">
    <div className="h-28 w-28 shrink-0 rounded-full border border-border bg-background" />

    <div>
      <h2 className="text-2xl font-medium leading-none text-foreground">
        Kis Józska
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">ingatlancégtől</p>
    </div>
  </div>

  <div className="grid items-start gap-7 lg:grid-cols-[320px_1fr]">
    <div className="relative -ml-16 aspect-square border border-border bg-background">
      <div className="absolute -left-3 top-4 bg-primary px-3 py-1 text-xs font-semibold uppercase text-primary-foreground">
        Új építésű
      </div>

      <Button
        size="icon"
        variant="secondary"
        className="absolute left-3 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full"
        aria-label="Előző kép"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        size="icon"
        variant="secondary"
        className="absolute right-3 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full"
        aria-label="Következő kép"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>

    <div className="space-y-7 pt-8 text-sm">
      <div>
        <p className="text-2xl font-semibold leading-none text-foreground">
          79.6 M Ft
        </p>
        <p className="mt-2 text-sm text-muted-foreground">963 415 Ft/m2</p>
      </div>

      <div className="space-y-3 text-foreground">
        {features.map((feature) => (
          <p key={feature}>{feature}</p>
        ))}
      </div>

      <p className="text-foreground">Kisjakab utca 13, XIV. kerület</p>
    </div>
  </div>

  <div className="mt-8 max-w-[390px] pl-0">
    <h3 className="text-2xl font-medium text-foreground">Bemutatkozás</h3>
    <p className="mt-3 text-base leading-snug text-muted-foreground">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud...
    </p>
  </div>
</div>
      </div>
    </section>
  );
}