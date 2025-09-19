"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Leaf, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className=" flex h-20 items-center justify-between px-4 md:px-6">
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
          <div></div>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            href="#inicio"
            className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
          >
            Início
          </Link>
          <Link
            href="#sobre"
            className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
          >
            Conheça o YggDrasil
          </Link>
          <Link
            href="#funcionamento"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Como Funciona
          </Link>
          <Link
            href="#aplicativo"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Aplicativo
          </Link>

          <Link
            href="#equipe"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Equipe YggDrasil
          </Link>
          <Link
            href="#apoiadores"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Apoiadores
          </Link>

          <Link
            href="#resultados"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Resultados
          </Link>

          <Link
            href="#faq"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            FAQ
          </Link>
          <Link
            href="#contato"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contato
          </Link>
          <ThemeToggle />
          <a href="https://painel.yggdrasil.eco.br/">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <Leaf className="mr-2 h-4 w-4" />
              Acessar plataforma
            </Button>
          </a>
        </nav>

        <div className="flex items-center space-x-4 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="container px-4 py-6 space-y-4">
            <Link
              href="#inicio"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="#sobre"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Conheça o YggDrasil
            </Link>
            <Link
              href="#funcionamento"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link
              href="#aplicativo"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Aplicativo
            </Link>
            <Link
              href="#equipe"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Equipe YggDrasil
            </Link>
            <Link
              href="#apoiadores"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Apoiadores
            </Link>
            <Link
              href="#resultados"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resultados
            </Link>
            <Link
              href="#faq"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contato"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <a href="https://painel.yggdrasil.eco.br/">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg mt-4">
                <Leaf className="mr-2 h-4 w-4" />
                Acessar plataforma
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
