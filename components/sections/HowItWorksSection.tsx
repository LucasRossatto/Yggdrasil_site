import { Badge } from "@/components/ui/badge";
import { Leaf, User, Camera, GraduationCap, Coins, TrendingUp, Star } from "lucide-react";
import { StepCard } from "../StepCard";

export function HowItWorksSection() {
  
  const steps = [
  {
    step: "1",
    title: "Usuário, Tokens e Créditos de Carbono",
    description: 
      "Qualquer pessoa pode tokenizar uma árvore, e a partir disso, o usuário passa a possuir um ativo que gera SCC's ou (Save Credit Carbon), os quais o usuário tem a liberdade de vender.",
    icon: User,
    color: "from-green-500 to-emerald-500",
  },
  {
    step: "2",
    title: "Fiscalização Simplificada",
    description: 
      "Fiscais registram fotos e informações básicas sobre as árvores usando o app. Cada avaliação gera recompensas em criptomoedas.",
    icon: Camera,
    color: "from-blue-500 to-indigo-500",
  },
  {
    step: "3",
    title: "Validação Especializada",
    description: 
      "Especialistas em botânica e áreas afins validam os dados enviados pelos fiscais e recebem recompensas por cada relatório.",
    icon: GraduationCap,
    color: "from-purple-500 to-violet-500",
  },
  {
    step: "4",
    title: "Avaliação Mútua",
    description: 
      "Fiscais e especialistas podem avaliar o trabalho um do outro com estrelas; quanto maior a nota, maior a recompensa.",
    icon: Star,
    color: "from-yellow-500 to-amber-500",
  },
  {
    step: "5",
    title: "Geração e Venda de Créditos",
    description: 
      "Árvores validadas geram SCCs que podem ser negociados no mercado, trazendo ganhos reais para os participantes.",
    icon: Coins,
    color: "from-emerald-500 to-teal-500",
  },
];

  return (

    <section
      id="funcionamento"
      className="py-20  bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 relative"
    >
      <div className=" px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Leaf className="w-4 h-4 mr-2" />
            Processo
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-foreground">
              COMO FUNCIONA
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Um processo simples e transparente que conecta preservadores,
            especialistas e investidores em uma rede global de conservação ambiental.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-green-400 via-emerald-500 to-green-600 rounded-full shadow-lg"></div>
          <div className="space-y-12">
            {steps.map((item, index) => (
              <StepCard
                key={item.step}
                {...item}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
