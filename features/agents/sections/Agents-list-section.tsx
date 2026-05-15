import { ListCard } from "@/components/common/List-card";
import { ListSection } from "@/components/common/List-section";
import { AgentSearchPanel } from "../components/Agent-search-panel";

type AgentListItem = {
  id: number;
  title: string;
  description: string;
  badgeLabel?: string;
};

const agents: AgentListItem[] = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: "Sed ut perspiciatis",
  description:
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  badgeLabel: index === 0 ? "Legnépszerűbb" : undefined,
}));

export function AgentsListSection() {
  return (
    <ListSection
      search={<AgentSearchPanel placeholder="Kit keresel?" />}
      resultLabel="150 db szakember"
      items={agents}
      getKey={(agent) => agent.id}
      renderItem={(agent) => (
        <ListCard
          title={agent.title}
          description={agent.description}
          badgeLabel={agent.badgeLabel}
        />
      )}
    />
  );
}