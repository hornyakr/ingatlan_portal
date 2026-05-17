import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

type CompanyFeatureSectionProps = {
  title: string;
  description: string;
  imagePosition: "left" | "right";
  variant: "default" | "muted";
};

export function CompanyFeatureSection({
  title,
  description,
  imagePosition,
  variant,
}: CompanyFeatureSectionProps) {
  const image = (
    <div className="relative flex aspect-[16/9] min-h-64 items-center justify-between overflow-hidden border border-border bg-card p-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-px w-[140%] origin-left rotate-[29deg] bg-border" />
        <div className="absolute bottom-0 left-0 h-px w-[140%] origin-left -rotate-[29deg] bg-border" />
      </div>

      <ChevronLeft className="z-10 size-10 text-foreground" aria-hidden="true" />
      <ChevronRight className="z-10 size-10 text-foreground" aria-hidden="true" />

      <Maximize2
        className="absolute bottom-3 right-3 size-5 text-muted-foreground"
        aria-hidden="true"
      />
    </div>
  );

  const content = (
    <div className="max-w-xl space-y-5">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );

  return (
    <section
      className={cn(
        "px-6 py-14 lg:px-8",
        variant === "muted" ? "bg-secondary" : "bg-background",
      )}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {imagePosition === "left" ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </section>
  );
}