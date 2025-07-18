import { Card } from "@/components/ui/card";
import { TestTube, Zap, BookOpen } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-pink-100 flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <TestTube className="h-16 w-16 mx-auto text-primary-foreground mb-4" />
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            산과 염기
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            산과 염기의 고유한 성질을 통해 화학의 흥미로운 세계를 상호작용적 학습으로 발견해보세요
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 bg-card/95 backdrop-blur-sm shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2">정의 학습</h3>
            <p className="text-muted-foreground">
              명확한 설명으로 산과 염기의 기본 개념을 마스터하세요
            </p>
          </Card>
          
          <Card className="p-6 bg-card/95 backdrop-blur-sm shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <TestTube className="h-8 w-8 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2">성질 탐구</h3>
            <p className="text-muted-foreground">
              산과 염기가 고유한 특성을 나타내는 이유를 이해하세요
            </p>
          </Card>
          
          <Card className="p-6 bg-card/95 backdrop-blur-sm shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <Zap className="h-8 w-8 text-science-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2">전기 전도성</h3>
            <p className="text-muted-foreground">
              산과 염기 용액이 전기를 전도하는 방법과 이유를 발견하세요
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}