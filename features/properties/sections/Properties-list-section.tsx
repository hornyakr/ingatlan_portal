import { ListCard } from "@/components/common/List-card";
import { ListSection } from "@/components/common/List-section";
import { PropertySearchBar } from "@/features/properties/components/Property-search-bar";

type PropertyListItem = {
  id: number;
  title: string;
  description: string;
  badgeLabel?: string;
};

const properties: PropertyListItem[] = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: "Sed ut perspiciatis",
  description:
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  badgeLabel: [0, 4, 5].includes(index) ? "Új építésű" : undefined,
}));

export function PropertiesListSection() {
  return (
    <ListSection
      search={<PropertySearchBar />}
      resultLabel="150 db ingatlan"
      items={properties}
      getKey={(property) => property.id}
      renderItem={(property) => (
        <ListCard
          title={property.title}
          description={property.description}
          badgeLabel={property.badgeLabel}
        />
      )}
    />
  );
}