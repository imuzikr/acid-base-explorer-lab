import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplet, TestTube } from "lucide-react";

export function DefinitionsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-feature">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            산과 염기 이해하기
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            산과 염기를 구별하는 기본 정의와 특성을 학습하세요
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
                <h3 className="text-2xl font-bold text-card-foreground">산 (Acids)</h3>
                <Badge variant="secondary" className="mt-1 bg-acid/20 text-acid">pH &lt; 7</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">아레니우스 정의</h4>
                <p className="text-muted-foreground leading-relaxed">
                  산은 물에 녹을 때 수소 이온(H⁺)을 생성하는 물질입니다. 
                  더 많은 H⁺ 이온이 방출될수록 산의 세기가 강해집니다.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">브뢴스테드-로우리 정의</h4>
                <p className="text-muted-foreground leading-relaxed">
                  산은 양성자(H⁺)를 주는 물질입니다. 다른 물질에게 수소 이온을 쉽게 내어줍니다.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">일반적인 예시</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 염산 (HCl) - 위산</li>
                  <li>• 구연산 (C₆H₈O₇) - 감귤류 과일</li>
                  <li>• 아세트산 (CH₃COOH) - 식초</li>
                  <li>• 황산 (H₂SO₄) - 자동차 배터리</li>
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
                <h3 className="text-2xl font-bold text-card-foreground">염기 (Bases)</h3>
                <Badge variant="secondary" className="mt-1 bg-base/20 text-base">pH &gt; 7</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">아레니우스 정의</h4>
                <p className="text-muted-foreground leading-relaxed">
                  염기는 물에 녹을 때 수산화 이온(OH⁻)을 생성하는 물질입니다. 
                  더 많은 OH⁻ 이온이 방출될수록 염기의 세기가 강해집니다.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">브뢴스테드-로우리 정의</h4>
                <p className="text-muted-foreground leading-relaxed">
                  염기는 양성자(H⁺)를 받는 물질입니다. 다른 물질로부터 수소 이온을 쉽게 받아들입니다.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">일반적인 예시</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 수산화 나트륨 (NaOH) - 배수관 청소제</li>
                  <li>• 암모니아 (NH₃) - 가정용 세제</li>
                  <li>• 수산화 칼슘 (Ca(OH)₂) - 석회수</li>
                  <li>• 수산화 마그네슘 (Mg(OH)₂) - 제산제</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* pH Scale Visual */}
        <Card className="mt-12 p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">pH 척도</h3>
          <div className="grid grid-cols-14 gap-1 mb-4">
            {Array.from({ length: 14 }, (_, i) => (
              <div 
                key={i} 
                className={`h-12 flex items-center justify-center text-white font-bold rounded ${
                  i < 7 ? 'bg-acid' : i === 7 ? 'bg-muted' : 'bg-base'
                }`}
                style={i < 7 || i > 7 ? { width: '50%' } : {}}
              >
                {i}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 text-center mt-6">
            <div>
              <p className="font-semibold text-acid">산성 (0-6)</p>
              <p className="text-sm text-muted-foreground">H⁺ 이온이 많음</p>
            </div>
            <div>
              <p className="font-semibold text-muted-foreground">중성 (7)</p>
              <p className="text-sm text-muted-foreground">H⁺와 OH⁻가 동일</p>
            </div>
            <div>
              <p className="font-semibold text-base">염기성 (8-14)</p>
              <p className="text-sm text-muted-foreground">OH⁻ 이온이 많음</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}