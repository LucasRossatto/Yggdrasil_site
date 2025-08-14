import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TreePine, Leaf, ArrowRight, Play, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pb-6 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <Image
          src="/images/perspectiva-de-um-belo-dossel-de-arvores-com-um-rio.jpg"
          alt="Dossel de árvores com rio"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="container flex items-center justify-center  z-10 px-4 md:px-6 pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center bg-card/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20"
              >
                <Leaf className="mr-2 h-4 w-4" />
                Blockchain Ecológico
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block text-foreground">YGGDRASIL</span>
                <span className="block bg-primary bg-clip-text text-transparent">
                  Monitorando a vida
                </span>
              </h1>
              <blockquote className="text-lg md:text-xl text-muted-foreground italic border-l-4 border-primary pl-6 my-8">
                "O incentivo que o mundo precisava para monitorar a vida: com o
                YggDrasil, todos que trabalham para preservação são
                recompensados!"
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary cursor-pointer hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg text-lg px-8 py-6"
              >
                <TreePine className="mr-2 h-5 w-5" />
                Comece Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary cursor-pointer text-primary hover:bg-primary/10 text-lg px-8 py-6 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Conheça o Projeto
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Créditos de Carbono</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>NFTs de Árvores</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Recompensas Crypto</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://yggdrasil.eco.br/CSS/ASSETS/LOGO-FUNDO-BRANCO.png"
                alt="YggDrasil Digital Forest"
                width={800}
                height={600}
                className=""
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse flex items-center justify-center">
              <Leaf className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-10 animate-pulse delay-1000 flex items-center justify-center">
              <TreePine className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="absolute top-1/2 -left-6 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full opacity-15 animate-pulse delay-500 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
