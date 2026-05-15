import { ListPageHero } from "@/components/common/List-page-hero";
import { AgentsListSection } from "@/features/agents/sections/Agents-list-section";
import { FeaturedAgentsSection } from "@/features/agents/sections/Featured-agents-section";
import { OfficesStripSection } from "@/features/offices/sections/Offices-strip-section";

export default function AgentsPage() {
  return (
    <>
        <ListPageHero
        title="Szakemberek"
        lead="Válogass kedvedre a"
        highlightedText="legjobb SZAKEMBEREK"
        />
        <FeaturedAgentsSection />
        <AgentsListSection />
        <OfficesStripSection />
    </>
  );
}