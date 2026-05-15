import { FeaturedCardSection } from "@/components/common/Featured-card-section";

const propertiesForSale = [
  {
    title: "Sed ut perspiciatis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
    href: "/ingatlanok/sed-ut-perspiciatis",
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    href: "/ingatlanok/lorem-ipsum-dolor",
  },
  {
    title: "Nemo enim ipsam",
    description:
      "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    href: "/ingatlanok/nemo-enim-ipsam",
  },
];

export function PropertiesForSaleSection() {
  return (
    <FeaturedCardSection
      title="Eladó ingatlanok"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      items={propertiesForSale}
      ctaHref="/ingatlanok"
      ctaLabel="Összes eladó ingatlan"
    />
  );
}