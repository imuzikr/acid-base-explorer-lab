import { HeroSection } from "@/components/HeroSection";
import { DefinitionsSection } from "@/components/DefinitionsSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import { ConductivitySection } from "@/components/ConductivitySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DefinitionsSection />
      <PropertiesSection />
      <ConductivitySection />
    </div>
  );
};

export default Index;
