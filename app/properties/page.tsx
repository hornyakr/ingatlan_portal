import { ListPageHero } from "@/components/common/List-page-hero";
import { OfficesStripSection } from "@/features/offices/sections/Offices-strip-section";
import { FeaturedPropertiesSection } from "@/features/properties/sections/Featured-properties-section";
import { PropertiesListSection } from "@/features/properties/sections/Properties-list-section";


export default function PropertiesPage() {
  return (
    <>
      <ListPageHero
              title="Ingatlanok"
              lead="Válogass kedvedre a"
              highlightedText="legjobb INGATLANOK"
            />
      <FeaturedPropertiesSection />
      <PropertiesListSection />
      <OfficesStripSection />
    </>
  );
}