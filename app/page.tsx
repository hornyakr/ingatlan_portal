import { FeaturedAgentsSection } from "@/features/agents/sections/Featured-agents-section";
import { FeaturedPropertiesSection } from "@/features/properties/sections/Featured-properties-section";
import { FeaturedPropertyHero } from "@/features/properties/sections/Featured-property-hero";
import { PropertiesForRentSection } from "@/features/properties/sections/Properties-for-rent-section";
import { PropertiesForSaleSection } from "@/features/properties/sections/Properties-for-sale-section";

export default function HomePage() {
  return (
    <>
      <FeaturedPropertyHero />
      <FeaturedAgentsSection />
      <PropertiesForSaleSection />
      <FeaturedPropertiesSection />
      <PropertiesForRentSection /> 
    </>
  );
}