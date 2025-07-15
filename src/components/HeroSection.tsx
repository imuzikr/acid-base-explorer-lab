import { Card } from "@/components/ui/card";
import { TestTube, Zap, BookOpen } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <TestTube className="h-16 w-16 mx-auto text-primary-foreground mb-4" />
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Acids & Bases
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Discover the fascinating world of chemistry through interactive learning about acids, bases, and their unique properties
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 bg-card/95 backdrop-blur-sm shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Learn Definitions</h3>
            <p className="text-muted-foreground">
              Master the fundamental concepts of acids and bases with clear explanations
            </p>
          </Card>
          
          <Card className="p-6 bg-card/95 backdrop-blur-sm shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <TestTube className="h-8 w-8 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Explore Properties</h3>
            <p className="text-muted-foreground">
              Understand why acids and bases exhibit their characteristic behaviors
            </p>
          </Card>
          
          <Card className="p-6 bg-card/95 backdrop-blur-sm shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <Zap className="h-8 w-8 text-science-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Electrical Conductivity</h3>
            <p className="text-muted-foreground">
              Discover how and why acid and base solutions conduct electricity
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}