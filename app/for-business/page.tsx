import { CompanyDescriptionSection } from "@/features/company/sections/Company-description-section";
import { CompanyFeatureSection } from "@/features/company/sections/Company-feature-section";
import { CompanyRegistrationCta } from "@/features/company/sections/Company-registration-cta";

export default function ForBusiness() {
  return (
    <>
        <CompanyDescriptionSection />

        <CompanyFeatureSection
            title="Ilyen egyszerűen tudod kezelni céged adatait"
            description="Kezeld irodád alapadatait, bemutatkozását és elérhetőségeit egy átlátható felületen. A rendszer segít abban, hogy céged mindig naprakész információkkal jelenjen meg."
            imagePosition="right"
            variant="muted"
        />

        <CompanyFeatureSection
            title="És még ezt tudod nálunk csinálni"
            description="Tölts fel ingatlanokat, kezeld munkatársaid profilját, és jelenítsd meg irodádat professzionális módon a látogatók számára."
            imagePosition="left"
            variant="default"
        />

        <CompanyRegistrationCta />
    </>
  );
}