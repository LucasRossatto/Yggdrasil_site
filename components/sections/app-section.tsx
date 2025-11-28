import {
  BarChart3,
  Bell,
  Camera,
  Coins,
  MapPin,
  Smartphone,
  Zap,
} from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";

import DownloadAppCard from "../DownloadAppCard";

export function AppSection() {
  return (
    <>
      <section
        id="aplicativo"
        className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 flex justify-center items-center overflow-hidden"
      >
        <div className="container px-4 sm:px-6 md:px-0 relative z-10">
          {/* Header */}
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Nosso Aplicativo
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-foreground bg-clip-text text-transparent">
                Nosso Aplicativo
                <span className="text-primary font-bold"> 100% Gratuito</span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[800px] mx-auto px-2 sm:px-0">
              Baixe nosso aplicativo móvel e comece a tokenizar árvores, ganhar
              recompensas e fazer a diferença para o meio ambiente diretamente
              do seu smartphone.
            </p>
          </div>

          {/* Grid principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* App Mockup */}
            <div className="relative order-2 md:order-1 flex justify-center">
              <div className="relative max-w-[90vw] sm:max-w-[412px] w-full">
                <div className="relative aspect-[412/930] w-full">
                  <Image
                    src="/images/app_mobile/tela-inicial-app-light.jpg"
                    alt="YggDrasil Aplicativo Mobile"
                    fill
                    loading="lazy"
                    className="rounded-3xl dark:hidden shadow-2xl border-8 border-gray-800 object-cover"
                  />
                  <Image
                    src="/images/app_mobile/tela-inicial-app-dark.jpg"
                    alt="YggDrasil Aplicativo Mobile"
                    fill
                    loading="lazy"
                    className="rounded-3xl hidden dark:block shadow-2xl border-8 border-gray-800 object-cover"
                  />
                </div>

                {/* Ícones animados */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                  <Coins className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-6 w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Funcionalidades e Downloads */}
            <div className="space-y-8 order-1 md:order-2">
              {/* Funcionalidades */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center md:text-left">
                  Funcionalidades Principais
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Camera,
                      title: "Registro Fotográfico",
                      description:
                        "Capture fotos das árvores com localização GPS automática e metadados detalhados.",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: Zap,
                      title: "Wallet Integrada",
                      description:
                        "Gerencie seus tokens, SCCs e recompensas diretamente no aplicativo.",
                      color: "from-amber-500 to-orange-500",
                    },
                    {
                      icon: BarChart3,
                      title: "Dashboard de Impacto",
                      description:
                        "Acompanhe suas contribuições e o impacto ambiental em tempo real.",
                      color: "from-blue-500 to-indigo-500",
                    },
                    {
                      icon: Bell,
                      title: "Notificações Smart",
                      description:
                        "Receba alertas sobre validações, recompensas e oportunidades próximas.",
                      color: "from-purple-500 to-violet-500",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 w-full max-w-full rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300"
                    >
                      <div
                        className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-md sm:shadow-lg`}
                      >
                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-1 sm:space-y-1.5">
                        <h4 className="text-base sm:text-lg font-semibold text-foreground">
                          {feature.title}
                        </h4>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Downloads */}
              <div className="space-y-6">
                             <DownloadAppCard />


                {/* App Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">
                      Downloads
                    </div>
                  </div>
                  <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                    <div className="text-2xl font-bold text-primary">4.8★</div>
                    <div className="text-sm text-muted-foreground">
                      Avaliação
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
