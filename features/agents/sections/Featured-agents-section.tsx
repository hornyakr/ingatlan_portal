import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const agents = [
  {
    name: "Sed ut perspiciatis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
    href: "/szakemberek/sed-ut-perspiciatis",
  },
  {
    name: "Lorem ipsum dolor",
    description:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    href: "/szakemberek/lorem-ipsum-dolor",
  },
  {
    name: "Nemo enim ipsam",
    description:
      "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
    href: "/szakemberek/nemo-enim-ipsam",
  },
];

export function FeaturedAgentsSection() {
  return (
    <section className="bg-muted py-20 text-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
          Kiemelt Szakemberek
        </h2>

        <div className="relative mt-14">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Előző szakemberek"
            className="absolute -left-5 top-24 hidden h-14 w-14 text-foreground hover:bg-accent lg:flex"
          >
            <ChevronLeft className="h-12 w-12" />
          </Button>

          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            {agents.map((agent) => (
              <article key={agent.href}>
                <div className="relative h-24 w-24 rounded-full border border-border bg-background">
                  <span className="absolute left-1/2 top-0 h-full -translate-x-1/2 rotate-45 border-l border-border" />
                  <span className="absolute left-1/2 top-0 h-full -translate-x-1/2 -rotate-45 border-l border-border" />
                </div>

                <h3 className="mt-10 text-2xl font-semibold text-foreground">
                  {agent.name}
                </h3>

                <p className="mt-6 max-w-sm text-base leading-7 text-muted-foreground">
                  {agent.description}
                </p>

                <Link
                  href={agent.href}
                  className="mt-7 inline-flex text-base font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Learn more
                </Link>
              </article>
            ))}
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Következő szakemberek"
            className="absolute -right-5 top-24 hidden h-14 w-14 text-foreground hover:bg-accent lg:flex"
          >
            <ChevronRight className="h-12 w-12" />
          </Button>
        </div>
      </div>
    </section>
  );
}