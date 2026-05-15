import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type ListCardProps = {
  title: string;
  description: string;
  badgeLabel?: string;
};

export function ListCard({ title, description, badgeLabel }: ListCardProps) {
  return (
    <Card className="overflow-hidden rounded-none border-border bg-card text-card-foreground shadow-none">
      <div className="relative aspect-[4/2.55] border-b border-border bg-muted">
        <span className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_calc(50%-1px),var(--color-border),transparent_calc(50%+1px))]" />
        <span className="absolute inset-0 bg-[linear-gradient(to_top_right,transparent_calc(50%-1px),var(--color-border),transparent_calc(50%+1px))]" />

        {badgeLabel ? (
          <Badge className="absolute left-0 top-4 rounded-none px-3 py-1 text-xs font-semibold uppercase">
            {badgeLabel}
          </Badge>
        ) : null}
      </div>

      <CardContent className="px-10 py-12">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>

        <p className="mt-6 max-w-xs text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}