import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TreePine, Coins, Users, Award, TrendingUp } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: <Coins className="h-8 w-8" />,
      title: "Tokenização",
      description: "Transforme árvores em ativos digitais que geram créditos de carbono comercializáveis",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Fiscais",
      description: "Qualquer pessoa pode atuar como fiscal, fornecendo dados e fotos das árvores",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Especialistas",
      description: "Profissionais validam os dados e elaboram diagnósticos completos das árvores",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Recompensas",
      description: "Sistema de remuneração em criptomoedas baseado na qualidade do trabalho",
      color: "from-cyan-500 to-blue-600",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-card relative">
      <div className="absolute top-0 left-0 w-full h-16 opacity-10">
        <svg viewBox="0 0 1200 60" className="flex flex-1 fill-current text-green-600 dark:text-green-400">
          <path d="M0 30 Q300 10 600 30 T1200 30 L1200 60 L0 60 Z" />
          <circle cx="150" cy="25" r="3" />
          <circle cx="450" cy="35" r="2" />
          <circle cx="750" cy="20" r="4" />
          <circle cx="1050" cy="30" r="3" />
        </svg>
      </div>

      <div className=" px-4 md:px-6 relative z-10 mt-2">
        <div className="text-center space-y-4 mb-16">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 border-green-200 dark:border-green-700"
          >
            <TreePine  className="mr-2 h-4 w-4" />
            Nossa Missão
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">Quem Somos</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            O YggDrasil é um projeto que visa aumentar o plantio e a conservação de árvores em todo o mundo, por meio de
            incentivos como criptomoedas, NFTs e créditos de carbono.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <Card
              key={index}
              className="group hover-lift card-glow transition-all duration-300 border-border/50 dark:border-border"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div
                  className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
