import {
  BarChart3,
  Bell,
  Camera,
  Coins,
  MapPin,
  QrCode,
  Smartphone,
  Zap,
} from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Button } from "../ui/button";

export function AppSection() {
  return (
    <>
      <section
        id="aplicativo"
        className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 flex justify-center items-center overflow-hidden"
      >
        <div className="absolute opacity-10">
          <div className="absolute top-10 left-5 w-24 h-48">
            <svg
              viewBox="0 0 80 160"
              className="w-full h-full fill-current text-primary"
            >
              <path d="M40 160 L40 100 L25 115 L40 85 L15 100 L40 70 L10 85 L40 55 L5 70 L40 40 L40 0 L40 40 L75 70 L40 55 L70 85 L40 70 L65 100 L40 85 L55 115 L40 100 L40 160" />
            </svg>
          </div>
          <div className="absolute bottom-10 right-5 w-32 h-56">
            <svg
              viewBox="0 0 100 180"
              className="w-full h-full fill-current text-secondary"
            >
              <path d="M50 180 L50 120 L30 135 L50 105 L20 120 L50 90 L15 105 L50 75 L10 90 L50 60 L50 0 L50 60 L90 90 L50 75 L85 105 L50 90 L80 120 L50 105 L70 135 L50 120 L50 180" />
            </svg>
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Nosso Aplicativo
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="bg-foreground bg-clip-text text-transparent">
                Nosso Aplicativo 
                 <span className="text-primary font-bold"> 100% Gratuito</span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
              Baixe nosso aplicativo móvel e comece a tokenizar árvores, ganhar
              recompensas e fazer a diferença para o meio ambiente diretamente
              do seu smartphone.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* App Mockup */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 flex justify-center">
                <div className="relative">
                  <div className="relative w-[412px] h-[930px]">
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
                      loading="lazy"
                      fill
                      className="rounded-3xl hidden dark:block shadow-2xl border-8 border-gray-800 object-cover"
                    />
                  </div>
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
            </div>

            {/* App Features */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
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
                      className="flex items-start space-x-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300"
                    >
                      <div
                        className={`h-12 w-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Section */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary sm: py-4 hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg flex-1"
                  >
                    <i className="bi bi-android2 mr-2 h-5 w-5"></i>
                    Download Android
                  </Button>
                  <Button
                    size="lg"
                    variant="default"
                    className="border-primary hover:bg-foreground/80 sm: py-4  text-primary flex-1 bg-foreground"
                  >
                    <i className="mr-2 h-5 w-5 bi bi-apple"></i>
                    Download iOS
                  </Button>
                </div>

                {/* QR Code */}
                <div className="flex items-center justify-center space-x-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                  <div className="text-center space-y-2">
                    <QrCode className="h-16 w-16 mx-auto text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Escaneie para baixar
                    </p>
                  </div>
                </div>

                {/* App Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                    <div className="text-2xl font-bold text-primary">50K+</div>
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
