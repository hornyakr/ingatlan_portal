import { FeaturedCardSection } from "@/components/common/Featured-card-section";

const propertiesForRent = [
  {
    title: "Sed ut perspiciatis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
    href: "/ingatlanok/kiado/sed-ut-perspiciatis",
    badge: null,
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    href: "/ingatlanok/kiado/lorem-ipsum-dolor",
    badge: "Új építésű",
  },
  {
    title: "Nemo enim ipsam",
    description:
      "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    href: "/ingatlanok/kiado/nemo-enim-ipsam",
    badge: null,
  },
];

export function PropertiesForRentSection() {
  return (
    <FeaturedCardSection
      title="Kiadó ingatlanok"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      items={propertiesForRent}
      ctaHref="/ingatlanok/kiado"
      ctaLabel="Összes kiadó ingatlan"
    />
  );
}