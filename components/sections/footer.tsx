import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TreePine,
  Leaf,
  Heart,
  InstagramIcon,
  Youtube,
  Mail,
  Share2,
} from "lucide-react";
import Image from "next/image";
import { TermosCondicoesPopup } from "../TermosCondicoesPopUp";
import { PoliticaPrivacidadePopup } from "../PoliticaPrivacidade";

export function Footer() {
  return (
    <>
      <svg
        viewBox="0 0 1200 30"
        className="w-full h-full fill-current text-green-600 dark:text-green-400 opacity-10"
      >
        <path d="M0 15 Q300 5 600 15 T1200 15 L1200 30 L0 30 Z" />
        <circle cx="200" cy="12" r="2" />
        <circle cx="600" cy="18" r="3" />
        <circle cx="1000" cy="10" r="2" />
      </svg>
      <footer className="bg-card text-card-foreground py-16 border-t border-border relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg relative overflow-hidden">
                  <Image
                    src="/images/yggdrasil-logo.png"
                    alt="Yggdrasil Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                    YggDrasil
                  </span>
                  <div className="text-xs text-muted-foreground -mt-1 flex items-center gap-1">
                    <Leaf className="w-3 h-3 text-green-500 dark:text-green-400" />
                    Eco Blockchain
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Revolucionando a conservação de árvores através da tecnologia
                blockchain e incentivos sustentáveis para um futuro mais verde.
              </p>
              <div className="flex space-x-2">
                <a
                  href="https://www.instagram.com/yggdrasil.save/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Yggdrasil"
                  className="flex items-center justify-center h-12 w-12 rounded-full 
               text-muted-foreground hover:text-green-600 dark:hover:text-green-400 
               hover:bg-green-50 dark:hover:bg-green-950/50 
               transition-colors duration-200"
                >
                  <InstagramIcon className="h-6 w-6" />
                </a>

                <a
                  href="https://www.youtube.com/@YGGdrasil_Save"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Yggdrasil"
                  className="flex items-center justify-center h-12 w-12 rounded-full 
               text-muted-foreground hover:text-red-600 dark:hover:text-red-400 
               hover:bg-red-50 dark:hover:bg-red-950/50 
               transition-colors duration-200"
                >
                  <Youtube className="h-7 w-7" />
                </a>
              </div>
              <p>Emails</p>
              <div className="flex flex-col gap-1 items-start">
                <Button
                  size="default"
                  variant="ghost"
                  className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/50 transition-colors"
                >
                  <p className="text-sm">yggdrasil.save@gmail.com</p>
                </Button>
                <Button
                  size="default"
                  variant="ghost"
                  className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/50 transition-colors"
                >
                  <p className="text-sm">yggdrasil.team.contato@gmail.com</p>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <TreePine className="w-4 h-4 text-green-600" />
                Plataforma
              </h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-green-600 transition-colors"
                >
                  Tokenizar Árvores
                </Link>
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-green-600 transition-colors"
                >
                  Ser Fiscal
                </Link>
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-green-600 transition-colors"
                >
                  Especialistas
                </Link>
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-green-600 transition-colors"
                >
                  Créditos de Carbono
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              {/* Seção Redes Sociais */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-green-600" />
                  Redes Sociais
                </h3>
                <div className="flex space-x-2">
                  <a
                    href="https://www.instagram.com/yggdrasil.save/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Yggdrasil"
                    className="flex items-center justify-center h-12 w-12 rounded-full 
         text-muted-foreground hover:text-green-600 dark:hover:text-green-400 
         hover:bg-green-50 dark:hover:bg-green-950/50 
         transition-colors duration-200"
                  >
                    <InstagramIcon className="h-6 w-6" />
                  </a>

                  <a
                    href="https://www.youtube.com/@YGGdrasil_Save"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube Yggdrasil"
                    className="flex items-center justify-center h-12 w-12 rounded-full 
         text-muted-foreground hover:text-red-600 dark:hover:text-red-400 
         hover:bg-red-50 dark:hover:bg-red-950/50 
         transition-colors duration-200"
                  >
                    <Youtube className="h-7 w-7" />
                  </a>
                </div>
              </div>

            
            </div>
            <div className="space-y-4">
               <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="w-4 h-4 text-green-600" />
                  Contato para suporte
                </h3>
                <div className="flex flex-col gap-2">
                  <Button
                    size="default"
                    variant="ghost"
                    className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/50 transition-colors justify-start"
                  >
                    <p className="text-sm">yggdrasil.save@gmail.com</p>
                  </Button>
                  <Button
                    size="default"
                    variant="ghost"
                    className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/50 transition-colors justify-start"
                  >
                    <p className="text-sm">yggdrasil.team.contato@gmail.com</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-6 md:mx-4 mt-8" />
        <div className="container mx-4 md:px-6 relative z-10">
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <TreePine className="w-4 h-4 text-green-600" />© 2023 YggDrasil.
              Todos os direitos reservados.
            </div>
            <div className="flex space-x-6">
              <div id="politicasPrivacidade">
                <PoliticaPrivacidadePopup />
              </div>
              <div id="termos&condicoes">
                <TermosCondicoesPopup />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
