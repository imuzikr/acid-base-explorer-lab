import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Thermometer, Droplets, AlertTriangle } from "lucide-react";

export function PropertiesSection() {
  const acidProperties = [
    {
      icon: Eye,
      title: "맛",
      description: "신맛 (레몬이나 식초와 같은)",
      note: "실험실에서 화학물질을 맛보지 마세요!"
    },
    {
      icon: Droplets,
      title: "리트머스 지시지",
      description: "파란색 리트머스 지시지를 빨간색으로 변화",
      note: "산의 전형적인 반응"
    },
    {
      icon: Thermometer,
      title: "금속과의 반응",
      description: "아연, 마그네슘과 반응하여 수소 기체 생성",
      note: "Zn + 2HCl → ZnCl₂ + H₂"
    },
    {
      icon: AlertTriangle,
      title: "부식성",
      description: "화상을 입히고 물질을 손상시킬 수 있음",
      note: "항상 주의해서 다루세요"
    }
  ];

  const baseProperties = [
    {
      icon: Eye,
      title: "촉감",
      description: "피부에 미끄러운 느낌이나 비누 같은 느낌",
      note: "기름을 분해하기 때문"
    },
    {
      icon: Droplets,
      title: "리트머스 지시지",
      description: "빨간색 리트머스 지시지를 파란색으로 변화",
      note: "염기의 전형적인 반응"
    },
    {
      icon: Thermometer,
      title: "산과의 반응",
      description: "산을 중화하여 염과 물을 생성",
      note: "산 + 염기 → 염 + 물"
    },
    {
      icon: AlertTriangle,
      title: "가성",
      description: "강한 염기는 심각한 화상을 입힐 수 있음",
      note: "극도로 조심해서 다루세요"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            공통 성질 해설
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            분자 구조와 이온 거동을 통해 산과 염기가 왜 그런 방식으로 행동하는지 이해하기
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Acid Properties */}
          <div>
            <div className="flex items-center mb-8">
              <h3 className="text-3xl font-bold text-foreground">산의 성질</h3>
              <Badge className="ml-3 bg-acid text-white">H⁺ 풍부</Badge>
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
              <h3 className="text-3xl font-bold text-foreground">염기의 성질</h3>
              <Badge className="ml-3 bg-base text-white">OH⁻ 풍부</Badge>
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
            이러한 성질이 나타나는 이유는?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-card-foreground flex items-center">
                <Droplets className="h-5 w-5 text-acid mr-2" />
                산의 거동
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                산은 물에서 H⁺ 이온을 방출합니다. 이 수소 이온들이 신맛과 
                금속과 반응하는 능력을 담당합니다. H⁺ 이온의 농도가 산의 세기와 
                부식성을 결정합니다.
              </p>
              <div className="bg-acid/10 p-4 rounded-lg">
                <p className="text-acid font-medium text-sm">
                  HCl → H⁺ + Cl⁻ (물에서)
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-card-foreground flex items-center">
                <Droplets className="h-5 w-5 text-base mr-2" />
                염기의 거동
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                염기는 OH⁻ 이온을 방출하거나 H⁺ 이온을 받습니다. OH⁻ 이온은 피부의 
                기름과 반응하여 미끄러운 느낌을 만듭니다. 이 같은 성질로 효과적인 세제가 
                되고 산을 중화하는 능력을 갖게 됩니다.
              </p>
              <div className="bg-base/10 p-4 rounded-lg">
                <p className="text-base font-medium text-sm">
                  NaOH → Na⁺ + OH⁻ (물에서)
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}