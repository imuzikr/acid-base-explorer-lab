import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplet, TestTube } from "lucide-react";

export function DefinitionsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-feature">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Understanding Acids & Bases
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn the fundamental definitions and characteristics that distinguish acids from bases
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Acids Section */}
          <Card className="p-8 shadow-medium hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-acid/10 rounded-full mr-4">
                <Droplet className="h-8 w-8 text-acid" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-card-foreground">Acids</h3>
                <Badge variant="secondary" className="mt-1 bg-acid/20 text-acid">pH &lt; 7</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">Arrhenius Definition</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Acids are substances that produce hydrogen ions (H⁺) when dissolved in water. 
                  The more H⁺ ions released, the stronger the acid.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">Brønsted-Lowry Definition</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Acids are proton (H⁺) donors. They readily give up hydrogen ions to other substances.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">Common Examples</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Hydrochloric acid (HCl) - stomach acid</li>
                  <li>• Citric acid (C₆H₈O₇) - citrus fruits</li>
                  <li>• Acetic acid (CH₃COOH) - vinegar</li>
                  <li>• Sulfuric acid (H₂SO₄) - car batteries</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Bases Section */}
          <Card className="p-8 shadow-medium hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-base/10 rounded-full mr-4">
                <TestTube className="h-8 w-8 text-base" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-card-foreground">Bases</h3>
                <Badge variant="secondary" className="mt-1 bg-base/20 text-base">pH &gt; 7</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">Arrhenius Definition</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Bases are substances that produce hydroxide ions (OH⁻) when dissolved in water. 
                  The more OH⁻ ions released, the stronger the base.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">Brønsted-Lowry Definition</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Bases are proton (H⁺) acceptors. They readily accept hydrogen ions from other substances.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">Common Examples</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sodium hydroxide (NaOH) - drain cleaner</li>
                  <li>• Ammonia (NH₃) - household cleaners</li>
                  <li>• Calcium hydroxide (Ca(OH)₂) - lime water</li>
                  <li>• Magnesium hydroxide (Mg(OH)₂) - antacids</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* pH Scale Visual */}
        <Card className="mt-12 p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">The pH Scale</h3>
          <div className="grid grid-cols-14 gap-1 mb-4">
            {Array.from({ length: 14 }, (_, i) => (
              <div 
                key={i} 
                className={`h-12 flex items-center justify-center text-white font-bold rounded ${
                  i < 7 ? 'bg-acid' : i === 7 ? 'bg-muted' : 'bg-base'
                }`}
              >
                {i}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 text-center mt-6">
            <div>
              <p className="font-semibold text-acid">Acidic (0-6)</p>
              <p className="text-sm text-muted-foreground">More H⁺ ions</p>
            </div>
            <div>
              <p className="font-semibold text-muted-foreground">Neutral (7)</p>
              <p className="text-sm text-muted-foreground">Equal H⁺ and OH⁻</p>
            </div>
            <div>
              <p className="font-semibold text-base">Basic (8-14)</p>
              <p className="text-sm text-muted-foreground">More OH⁻ ions</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}