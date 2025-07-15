import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Battery, CircuitBoard, Lightbulb } from "lucide-react";

export function ConductivitySection() {
  return (
    <section className="py-20 px-6 bg-gradient-feature">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Electrical Conductivity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how and why acid and base solutions conduct electricity through the movement of ions
          </p>
        </div>

        {/* Main Concept */}
        <Card className="mb-12 p-8 shadow-medium bg-gradient-card">
          <div className="text-center mb-8">
            <Zap className="h-16 w-16 text-science-blue mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-card-foreground mb-4">
              Both Acids and Bases Conduct Electricity
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When dissolved in water, both acids and bases create solutions that can conduct electrical current. 
              This happens because they form ions, which are charged particles that can move and carry electric charge.
            </p>
          </div>
        </Card>

        {/* How It Works */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 shadow-medium">
            <div className="flex items-center mb-6">
              <Battery className="h-8 w-8 text-acid mr-3" />
              <h3 className="text-2xl font-bold text-card-foreground">Acids in Water</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-acid/10 p-6 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-3">Ionization Process</h4>
                <p className="text-muted-foreground mb-3">
                  When acids dissolve in water, they release hydrogen ions (H⁺) and anions:
                </p>
                <div className="bg-background p-3 rounded border-l-4 border-acid">
                  <p className="font-mono text-acid">HCl → H⁺ + Cl⁻</p>
                  <p className="font-mono text-acid">H₂SO₄ → 2H⁺ + SO₄²⁻</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Why This Conducts</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• H⁺ ions move toward the negative electrode (cathode)</li>
                  <li>• Anions move toward the positive electrode (anode)</li>
                  <li>• Moving charges create electrical current</li>
                  <li>• More ions = better conductivity</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium">
            <div className="flex items-center mb-6">
              <Battery className="h-8 w-8 text-base mr-3" />
              <h3 className="text-2xl font-bold text-card-foreground">Bases in Water</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-base/10 p-6 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-3">Ionization Process</h4>
                <p className="text-muted-foreground mb-3">
                  When bases dissolve in water, they release hydroxide ions (OH⁻) and cations:
                </p>
                <div className="bg-background p-3 rounded border-l-4 border-base">
                  <p className="font-mono text-base">NaOH → Na⁺ + OH⁻</p>
                  <p className="font-mono text-base">Ca(OH)₂ → Ca²⁺ + 2OH⁻</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Why This Conducts</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cations move toward the negative electrode (cathode)</li>
                  <li>• OH⁻ ions move toward the positive electrode (anode)</li>
                  <li>• Ion movement creates electrical current</li>
                  <li>• Higher concentration = higher conductivity</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Visual Demonstration */}
        <Card className="p-8 shadow-medium mb-12">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
            Conductivity Demonstration
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <CircuitBoard className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h4 className="font-semibold text-card-foreground mb-3">Pure Water</h4>
              <Badge variant="outline" className="mb-3">Poor Conductor</Badge>
              <p className="text-sm text-muted-foreground">
                Very few ions present, barely conducts electricity
              </p>
            </div>
            
            <div className="text-center">
              <Lightbulb className="h-12 w-12 text-acid mx-auto mb-4" />
              <h4 className="font-semibold text-card-foreground mb-3">Acid Solution</h4>
              <Badge className="mb-3 bg-acid text-white">Good Conductor</Badge>
              <p className="text-sm text-muted-foreground">
                Many H⁺ and anions allow current flow, bulb lights up
              </p>
            </div>
            
            <div className="text-center">
              <Lightbulb className="h-12 w-12 text-base mx-auto mb-4" />
              <h4 className="font-semibold text-card-foreground mb-3">Base Solution</h4>
              <Badge className="mb-3 bg-base text-white">Good Conductor</Badge>
              <p className="text-sm text-muted-foreground">
                Many OH⁻ and cations enable current flow, bulb lights up
              </p>
            </div>
          </div>
        </Card>

        {/* Key Factors */}
        <Card className="p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
            Factors Affecting Conductivity
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                <Zap className="h-5 w-5 text-primary mr-2" />
                Concentration
              </h4>
              <p className="text-muted-foreground mb-4">
                Higher concentration of acid or base means more ions in solution, 
                leading to better electrical conductivity.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-primary font-medium text-sm">
                  1M HCl conducts better than 0.1M HCl
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                <Zap className="h-5 w-5 text-primary mr-2" />
                Strength
              </h4>
              <p className="text-muted-foreground mb-4">
                Strong acids and bases ionize completely, producing more ions 
                and conducting electricity better than weak ones.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-primary font-medium text-sm">
                  HCl (strong) conducts better than CH₃COOH (weak)
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}