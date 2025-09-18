import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TreePine, Leaf, ArrowRight, Play, CheckCircle } from "lucide-react";
import HeroVideoButton from "../PopUpYoutube";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pb-6 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <Image
          src="/images/perspectiva-de-um-belo-dossel-de-arvores-com-um-rio.jpg"
          alt="Dossel de árvores com rio"
          fill
          className="object-cover opacity-30"
          blurDataURL="/images/perspectiva-de-um-belo-dossel-de-arvores-com-um-rio.jpg"
          loading="eager"
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
             <a href="#funcionamento">
               <Button
                size="lg"
                variant="default"
                className="bg-primary cursor-pointer hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg text-lg px-8 py-6"
              >
                <TreePine className="mr-2 h-5 w-5" />
                Comece Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
             </a>
             <HeroVideoButton/>
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
            <div className="relative">
              <Image
                src="/images/LOGO-YGGDRASIL.png"
                alt="YggDrasil Digital Forest"
                width={800}
                height={600}
                blurDataURL="/images/LOGO-YGGDRASIL.png"
                loading="eager"
              />
            </div>
            <div className="group filter blur-[2px]  transition-all duration-300 hover:blur-none hover:scale-110 hover:brightness-125 absolute -top-4 -right-4 w-26 h-26 rounded-full opacity-20 group-hover:opacity-100  hover:opacity-100 cursor-pointer flex items-center justify-center *:z-50">
              <div className="absolute inset-0 border-1 border-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90"></div>
              <div className="absolute inset-0 border-1 border-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>

              <Image
                src="/images/hero/YggCoin_transparente.png"
                alt="Leaf"
                fill
                className="object-contain"
              />

              <div className="absolute -left-7 bottom-22 mb-2 px-2 py-1 bg-black bg-opacity-70  text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity hover:opacity-100 duration-300 pointer-events-none">
                YGG
              </div>
            </div>
            <div className="group filter blur-[2px] transition-all duration-300 hover:blur-none hover:scale-110 hover:brightness-125 absolute -bottom-5 -left-8 w-32 h-32 rounded-full opacity-20 hover:opacity-100 cursor-pointer  flex items-center justify-center *:z-50">
              <div className="absolute inset-0 border-1 border-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-105"></div>
              <div className="absolute inset-0 border-1 border-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-120"></div>

              <Image
                src="/images/hero/tag_transparente.png"
                alt="Tree"
                fill
                className="object-contain"
              />
              <div className="absolute left-30 bottom-28 mb-2 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                YGGTAG
              </div>
            </div>

            <div className="group filter blur-[2px]  transition-all cursor-pointer  duration-300 hover:blur-none hover:scale-110 hover:brightness-125 absolute top-1/2 -left-12 w-18 h-18 rounded-full opacity-20 hover:opacity-100 flex items-center justify-center *:z-50">
              <div className="absolute inset-0 border-1 border-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-100"></div>
              <div className="absolute inset-0 border-1 border-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-125"></div>

              <Image
                src="/images/hero/SCC_transparente.png"
                alt="Leaf small"
                fill
                className="object-contain"
              />
              <div className="absolute -left-8 bottom-16 mb-2 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                SCC
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
