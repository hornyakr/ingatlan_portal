import { ListPageHero } from "@/components/common/List-page-hero";
import OfficesListSection from "@/features/offices/sections/Offices-list-section";
import { OfficesStripSection } from "@/features/offices/sections/Offices-strip-section";

export default function OfficesPage() {
  return (
    <>
        <ListPageHero
                title="Irodák"
                lead="Válogass kedvedre a"
                highlightedText="legjobb IRODÁK"
                />
        <OfficesStripSection />
        <OfficesListSection />
    </>
  );
}