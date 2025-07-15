import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Battery, CircuitBoard, Lightbulb } from "lucide-react";

export function ConductivitySection() {
  return (
    <section className="py-20 px-6 bg-gradient-feature">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            전기 전도성
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            이온의 움직임을 통해 산과 염기 용액이 어떻게 그리고 왜 전기를 전도하는지 알아보세요
          </p>
        </div>

        {/* Main Concept */}
        <Card className="mb-12 p-8 shadow-medium bg-gradient-card">
          <div className="text-center mb-8">
            <Zap className="h-16 w-16 text-science-blue mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-card-foreground mb-4">
              산과 염기 모두 전기를 전도합니다
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              물에 녹을 때, 산과 염기는 모두 전류를 흘릴 수 있는 용액을 만듭니다. 
              이는 전하를 띤 입자인 이온들이 생성되어 움직이며 전기 전하를 운반하기 때문입니다.
            </p>
          </div>
        </Card>

        {/* How It Works */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 shadow-medium">
            <div className="flex items-center mb-6">
              <Battery className="h-8 w-8 text-acid mr-3" />
              <h3 className="text-2xl font-bold text-card-foreground">물에 녹은 산</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-acid/10 p-6 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-3">이온화 과정</h4>
                <p className="text-muted-foreground mb-3">
                  산이 물에 녹으면 수소 이온(H⁺)과 음이온을 방출합니다:
                </p>
                <div className="bg-background p-3 rounded border-l-4 border-acid">
                  <p className="font-mono text-acid">HCl → H⁺ + Cl⁻</p>
                  <p className="font-mono text-acid">H₂SO₄ → 2H⁺ + SO₄²⁻</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">왜 전도되는가</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• H⁺ 이온은 음극(cathode)으로 이동합니다</li>
                  <li>• 음이온은 양극(anode)으로 이동합니다</li>
                  <li>• 움직이는 전하가 전류를 만듭니다</li>
                  <li>• 이온이 많을수록 전도성이 좋아집니다</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium">
            <div className="flex items-center mb-6">
              <Battery className="h-8 w-8 text-base mr-3" />
              <h3 className="text-2xl font-bold text-card-foreground">물에 녹은 염기</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-base/10 p-6 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-3">이온화 과정</h4>
                <p className="text-muted-foreground mb-3">
                  염기가 물에 녹으면 수산화 이온(OH⁻)과 양이온을 방출합니다:
                </p>
                <div className="bg-background p-3 rounded border-l-4 border-base">
                  <p className="font-mono text-base">NaOH → Na⁺ + OH⁻</p>
                  <p className="font-mono text-base">Ca(OH)₂ → Ca²⁺ + 2OH⁻</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">왜 전도되는가</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 양이온은 음극(cathode)으로 이동합니다</li>
                  <li>• OH⁻ 이온은 양극(anode)으로 이동합니다</li>
                  <li>• 이온의 움직임이 전류를 만듭니다</li>
                  <li>• 농도가 높을수록 전도성이 높아집니다</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Visual Demonstration */}
        <Card className="p-8 shadow-medium mb-12">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
            전도성 실험
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <CircuitBoard className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h4 className="font-semibold text-card-foreground mb-3">순수한 물</h4>
              <Badge variant="outline" className="mb-3">약한 전도체</Badge>
              <p className="text-sm text-muted-foreground">
                이온이 매우 적어서 전기를 거의 전도하지 않음
              </p>
            </div>
            
            <div className="text-center">
              <Lightbulb className="h-12 w-12 text-acid mx-auto mb-4" />
              <h4 className="font-semibold text-card-foreground mb-3">산 용액</h4>
              <Badge className="mb-3 bg-acid text-white">좋은 전도체</Badge>
              <p className="text-sm text-muted-foreground">
                많은 H⁺와 음이온이 전류 흐름을 허용, 전구가 켜짐
              </p>
            </div>
            
            <div className="text-center">
              <Lightbulb className="h-12 w-12 text-base mx-auto mb-4" />
              <h4 className="font-semibold text-card-foreground mb-3">염기 용액</h4>
              <Badge className="mb-3 bg-base text-white">좋은 전도체</Badge>
              <p className="text-sm text-muted-foreground">
                많은 OH⁻와 양이온이 전류 흐름을 가능하게 함, 전구가 켜짐
              </p>
            </div>
          </div>
        </Card>

        {/* Key Factors */}
        <Card className="p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
            전도성에 영향을 주는 요인들
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                <Zap className="h-5 w-5 text-primary mr-2" />
                농도
              </h4>
              <p className="text-muted-foreground mb-4">
                산이나 염기의 농도가 높을수록 용액에 더 많은 이온이 있어서 
                전기 전도성이 더 좋아집니다.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-primary font-medium text-sm">
                  1M HCl이 0.1M HCl보다 전도성이 좋음
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                <Zap className="h-5 w-5 text-primary mr-2" />
                세기
              </h4>
              <p className="text-muted-foreground mb-4">
                강산과 강염기는 완전히 이온화되어 더 많은 이온을 생성하므로 
                약산이나 약염기보다 전기를 더 잘 전도합니다.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-primary font-medium text-sm">
                  HCl(강산)이 CH₃COOH(약산)보다 전도성이 좋음
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}