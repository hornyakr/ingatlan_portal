import { ListCard } from "@/components/common/List-card";
import { ListSection } from "@/components/common/List-section";
import { OfficeSearchPanel } from "../components/Office-search-panel";

type OfficeListItem = {
  id: number;
  title: string;
  description: string;
  badgeLabel?: string;
};

const offices: OfficeListItem[] = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: "Sed ut perspiciatis",
  description:
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  badgeLabel: index === 0 ? "Legnépszerűbb" : undefined,
}));

export default function OfficesListSection() {
  return (
    <ListSection
          search={<OfficeSearchPanel placeholder="Kit keresel?" />}
          resultLabel="150 db iroda"
          items={offices}
          getKey={(office) => office.id}
          renderItem={(office) => (
            <ListCard
              title={office.title}
              description={office.description}
              badgeLabel={office.badgeLabel}
            />
          )}
        />
  );
}