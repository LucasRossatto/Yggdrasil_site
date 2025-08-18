import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TreePine } from "lucide-react";

type StepCardProps = {
  step: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  reversed?: boolean;
};

export function StepCard({ step, title, description, icon: IconComp, color, reversed = false }: StepCardProps) {
  return (
    <>
      {/* --- Mobile Layout (step acima do card) --- */}
      <div className="flex flex-col items-center gap-4 block md:hidden">
        <div className="relative z-10 flex items-center justify-center w-14 h-14 
                        bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-800 dark:to-emerald-800 
                        rounded-full border-4 border-green-400 shadow-lg">
          <span className="text-lg font-bold text-foreground">{step}</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm relative overflow-hidden w-full max-w-md">
          <div className="absolute top-2 left-2 opacity-10">
            <TreePine className="w-6 h-6 text-green-600" />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 justify-between">
              <span>{title}</span>
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                <IconComp className="h-6 w-6 text-white" />
              </div>
            </CardTitle>
            <CardDescription className="text-sm">
              {description}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* --- Desktop Layout (step central) --- */}
      <div
        className={`
          hidden md:flex items-center 
          ${reversed ? "flex-row-reverse" : "flex-row"}
        `}
      >
        {/* Card */}
        <div className={`w-1/2 ${reversed ? "pl-8 text-left" : "pr-8 text-right"}`}>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm relative overflow-hidden">
            <div className={`absolute ${reversed ? "top-2 right-2" : "top-2 left-2"} opacity-10`}>
              <TreePine className="w-6 h-6 text-green-600" />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {reversed ? (
                  <>
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                      <IconComp className="h-6 w-6 text-white" />
                    </div>
                    <span>{title}</span>
                  </>
                ) : (
                  <>
                    <span>{title}</span>
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                      <IconComp className="h-6 w-6 text-white" />
                    </div>
                  </>
                )}
              </CardTitle>
              <CardDescription className="text-base">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Step central */}
        <div className="relative z-10 flex items-center justify-center w-16 h-16 
                        bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-800 dark:to-emerald-800 
                        rounded-full border-4 border-green-400 shadow-lg">
          <span className="text-xl font-bold text-foreground">{step}</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        {/* Espaço complementar */}
        <div className="w-1/2"></div>
      </div>
    </>
  );
}
