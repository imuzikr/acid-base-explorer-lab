import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Thermometer, Droplets, AlertTriangle } from "lucide-react";

export function PropertiesSection() {
  const acidProperties = [
    {
      icon: Eye,
      title: "Taste",
      description: "Sour taste (like lemons or vinegar)",
      note: "Never taste chemicals in a lab!"
    },
    {
      icon: Droplets,
      title: "Litmus Paper",
      description: "Turn blue litmus paper red",
      note: "Classic acid test"
    },
    {
      icon: Thermometer,
      title: "React with Metals",
      description: "React with zinc, magnesium to produce hydrogen gas",
      note: "Zn + 2HCl → ZnCl₂ + H₂"
    },
    {
      icon: AlertTriangle,
      title: "Corrosive",
      description: "Can cause burns and damage materials",
      note: "Always handle with care"
    }
  ];

  const baseProperties = [
    {
      icon: Eye,
      title: "Feel",
      description: "Slippery or soapy feeling on skin",
      note: "Due to breaking down oils"
    },
    {
      icon: Droplets,
      title: "Litmus Paper",
      description: "Turn red litmus paper blue",
      note: "Classic base test"
    },
    {
      icon: Thermometer,
      title: "React with Acids",
      description: "Neutralize acids to form salt and water",
      note: "Acid + Base → Salt + Water"
    },
    {
      icon: AlertTriangle,
      title: "Caustic",
      description: "Strong bases can cause severe burns",
      note: "Handle with extreme caution"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Common Properties Explained
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding why acids and bases behave the way they do through their molecular structure and ion behavior
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Acid Properties */}
          <div>
            <div className="flex items-center mb-8">
              <h3 className="text-3xl font-bold text-foreground">Acid Properties</h3>
              <Badge className="ml-3 bg-acid text-white">H⁺ Rich</Badge>
            </div>
            
            <div className="space-y-6">
              {acidProperties.map((property, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="flex items-start">
                    <div className="p-3 bg-acid/10 rounded-full mr-4 flex-shrink-0">
                      <property.icon className="h-6 w-6 text-acid" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-card-foreground mb-2">
                        {property.title}
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        {property.description}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {property.note}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Base Properties */}
          <div>
            <div className="flex items-center mb-8">
              <h3 className="text-3xl font-bold text-foreground">Base Properties</h3>
              <Badge className="ml-3 bg-base text-white">OH⁻ Rich</Badge>
            </div>
            
            <div className="space-y-6">
              {baseProperties.map((property, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="flex items-start">
                    <div className="p-3 bg-base/10 rounded-full mr-4 flex-shrink-0">
                      <property.icon className="h-6 w-6 text-base" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-card-foreground mb-2">
                        {property.title}
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        {property.description}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {property.note}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Why These Properties Exist */}
        <Card className="mt-16 p-8 shadow-medium bg-gradient-card">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
            Why Do These Properties Exist?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-card-foreground flex items-center">
                <Droplets className="h-5 w-5 text-acid mr-2" />
                Acid Behavior
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Acids release H⁺ ions in water. These hydrogen ions are responsible for the sour taste 
                and ability to react with metals. The concentration of H⁺ ions determines the strength 
                of the acid and its corrosive properties.
              </p>
              <div className="bg-acid/10 p-4 rounded-lg">
                <p className="text-acid font-medium text-sm">
                  HCl → H⁺ + Cl⁻ (in water)
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-card-foreground flex items-center">
                <Droplets className="h-5 w-5 text-base mr-2" />
                Base Behavior
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Bases release OH⁻ ions or accept H⁺ ions. The OH⁻ ions react with oils on skin, 
                creating a slippery feeling. This same property makes them effective cleaners 
                and gives them their ability to neutralize acids.
              </p>
              <div className="bg-base/10 p-4 rounded-lg">
                <p className="text-base font-medium text-sm">
                  NaOH → Na⁺ + OH⁻ (in water)
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}