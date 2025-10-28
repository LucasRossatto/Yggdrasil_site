import { Award, BarChart3, Coins, Globe, Leaf, Shield, Users } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";


export function Benefits(){
    return(
    <>
    {/* Benefícios Section */}
      <section className="py-20 bg-background relative justify-center items-center">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-8 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Leaf
                  className="w-8 h-8 text-green-600 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            >
              <Award className="w-4 h-4 mr-2" />
              Vantagens
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-foreground">
                Benefícios
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Descubra as vantagens de fazer parte da maior rede de conservação
              ambiental descentralizada do mundo.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Impacto Ambiental Global",
                description:
                  "Contribua para a conservação de árvores em escala mundial através de uma plataforma descentralizada.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Coins,
                title: "Recompensas Financeiras",
                description:
                  "Ganhe criptomoedas e Save Credits Carbon por suas contribuições para a conservação.",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: Shield,
                title: "Transparência Blockchain",
                description:
                  "Todas as transações são registradas de forma transparente e imutável na blockchain.",
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: Users,
                title: "Comunidade Engajada",
                description:
                  "Faça parte de uma comunidade global dedicada à preservação ambiental.",
                color: "from-purple-500 to-violet-500",
              },
              {
                icon: BarChart3,
                title: "Métricas de Impacto",
                description:
                  "Acompanhe o impacto real das suas ações através de dados e estatísticas detalhadas.",
                color: "from-teal-500 to-cyan-500",
              },
              {
                icon: Award,
                title: "Reconhecimento",
                description:
                  "Sistema de avaliações por estrelas que reconhece e recompensa a qualidade do trabalho.",
                color: "from-rose-500 to-pink-500",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                  <svg
                    viewBox="0 0 60 60"
                    className="w-full h-full fill-current text-green-600"
                  >
                    <circle cx="30" cy="30" r="25" />
                    <path d="M30 10 L35 25 L30 30 L25 25 Z" />
                  </svg>
                </div>
                <CardHeader className="text-center">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4 shadow-lg relative`}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full"></div>
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
    )
}