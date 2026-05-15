import { Building2, Eye, ShieldCheck, Timer } from "lucide-react";

const items = [
  {
    title: "Tartsd egy helyen céged adatait",
    description:
      "Rögzítsd és kezeld irodád alapadatait, elérhetőségeit és bemutatkozását egyetlen központi felületen.",
    icon: Building2,
  },
  {
    title: "Biztosíts vállalkozásodnak egyedi megjelenést",
    description:
      "Mutasd be cégedet igényes profillal, hogy az érdeklődők könnyebben megtalálják és felismerjék irodádat.",
    icon: Eye,
  },
  {
    title: "Átlátható működés",
    description:
      "A strukturált adatkezelés segít abban, hogy minden fontos céges információ gyorsan elérhető legyen.",
    icon: ShieldCheck,
  },
  {
    title: "Gyors indulás",
    description:
      "A regisztráció után rövid időn belül elkezdheted kialakítani céges profilodat és kezelni megjelenésedet.",
    icon: Timer,
  },
];

export function CompanyDescriptionSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Regisztráld ingatlanirodádat
        </h1>
      </div>

      <div className="mt-10 grid gap-x-16 gap-y-10 md:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article key={item.title} className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}