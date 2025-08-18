import { ArrowRight, Download, TreePine } from "lucide-react";
import { Button } from "../ui/button";

export function CtaSection() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-full h-32">
            <svg
              viewBox="0 0 1200 100"
              className="w-full h-full fill-current text-primary-foreground"
            >
              <path d="M0 100 L50 60 L100 80 L150 50 L200 70 L250 45 L300 65 L350 40 L400 60 L450 35 L500 55 L550 30 L600 50 L650 25 L700 45 L750 20 L800 40 L850 15 L900 35 L950 10 L1000 30 L1050 5 L1100 25 L1150 0 L1200 20 L1200 100 Z" />
            </svg>
          </div>
          <div className="absolute top-10 right-10 w-20 h-40">
            <TreePine className="w-full h-full text-primary-foreground" />
          </div>
          <div className="absolute top-20 left-10 w-16 h-32">
            <TreePine className="w-full h-full text-primary-foreground" />
          </div>
        </div>

        <div className="px-4 md:px-6 text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Pronto para Fazer a Diferença?
            </h2>
            <p className="text-xl opacity-90">
              Junte-se ao YggDrasil e seja parte da solução para a conservação
              global de árvores. Cada árvore tokenizada é um passo em direção a
              um planeta mais verde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg"
              >
                <TreePine className="mr-2 h-5 w-5" />
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6 bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar Aplicativo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
