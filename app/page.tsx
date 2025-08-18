import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { Footer } from "@/components/sections/footer";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  TreePine,
  Coins,
  Camera,
  GraduationCap,
  Globe,
  ArrowRight,
  Mail,
  Phone,
  User,
  MessageSquare,
  CheckCircle,
  Award,
  Linkedin,
  Shield,
  TrendingUp,
  Users,
  BarChart3,
  Heart,
  Target,
  Smartphone,
  Download,
  QrCode,
  MapPin,
  Bell,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import FAQSection from "@/components/sections/FAQ";
import { Benefits } from "@/components/sections/benefits";
import { AppSection } from "@/components/sections/app-section";
import { TeamSection } from "@/components/sections/team-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SupportersSection } from "@/components/sections/supporters-section";

export default function YggdrasilRedesign() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Tree silhouettes */}
        <div className="absolute bottom-0 left-0 w-32 h-64 opacity-5">
          <svg
            viewBox="0 0 100 200"
            className="w-full h-full fill-current text-green-800"
          >
            <path d="M50 200 L50 120 L30 140 L50 100 L20 120 L50 80 L10 100 L50 60 L5 80 L50 40 L50 0 L50 40 L95 80 L50 60 L90 100 L50 80 L80 120 L50 100 L70 140 L50 120 L50 200" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-72 opacity-5">
          <svg
            viewBox="0 0 120 220"
            className="w-full h-full fill-current text-green-700"
          >
            <path d="M60 220 L60 140 L35 160 L60 120 L25 140 L60 100 L15 120 L60 80 L10 100 L60 60 L5 80 L60 40 L60 0 L60 40 L115 80 L60 60 L110 100 L60 80 L105 120 L60 100 L85 140 L60 120 L85 160 L60 140 L60 220" />
          </svg>
        </div>

        {/* Floating leaves animation */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <Leaf className="w-4 h-4 text-green-800 dark:text-green-400  opacity-30 animate-bounce" />
            </div>
          ))}
        </div>
      </div>

      <Header />

      <HeroSection />

      <AboutSection />

       {/* Branch divider */}
      <div className="relative top-0 left-0 w-full h-16 opacity-10">
        <svg
          viewBox="0 0 1200 60"
          className="flex flex-1 fill-current text-green-600 dark:text-green-400"
        >
          <path d="M0 30 Q300 10 600 30 T1200 30 L1200 60 L0 60 Z" />
          <circle cx="150" cy="25" r="3" />
          <circle cx="450" cy="35" r="2" />
          <circle cx="750" cy="20" r="4" />
          <circle cx="1050" cy="30" r="3" />
        </svg>
      </div>

      {/* Branch divider */}
      <div className="relative h-12 overflow-hidden">
        <svg
          viewBox="0 0 1200 40"
          className="absolute inset-0 w-full h-full fill-current text-emerald-600 opacity-15"
        >
          <path d="M0 20 Q200 5 400 20 T800 20 T1200 20 L1200 40 L0 40 Z" />
        </svg>
      </div>

      {/* Como Funciona Section */}
      <HowItWorksSection/>

      {/* Benefícios Section */}
      <Benefits/>

      {/* Nosso Aplicativo Section */}
      <AppSection/>

      {/* Equipe Section */}
      <TeamSection/>

      {/* Apoiadores */}
      <SupportersSection/>

      {/* Impacto/Estatísticas Section */}
      <ImpactSection/>

      {/* FAQ Section */}
      <FAQSection/>

      {/* Apoie o Projeto Section */}
      <section id="apoieOProjeto" className="py-20 bg-card">
        <div className="px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20"
              >
                Apoie o Projeto
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Junte-se à Revolução Verde
              </h2>
              <p className="text-xl text-muted-foreground">
                Quer fazer parte da mudança? Entre em contato conosco e descubra
                como pode contribuir para um futuro mais sustentável.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <Card className="border-0 shadow-xl z-10">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">
                    Formulário de Apoio
                  </CardTitle>
                  <CardDescription className="text-center">
                    Preencha os dados abaixo e nossa equipe entrará em contato
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="nome" className="text-sm font-medium">
                        Nome Completo
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="nome"
                          placeholder="Seu nome completo"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telefone" className="text-sm font-medium">
                        Telefone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="telefone"
                          placeholder="(11) 99999-9999"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-mail
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Textarea
                        id="mensagem"
                        placeholder="Como você gostaria de apoiar o YggDrasil?"
                        className="pl-10 min-h-[120px]"
                      />
                    </div>
                  </div>

                  <Button
                    variant={"default"}
                    className="w-full bg-primary"
                    size="lg"
                  >
                    Enviar Mensagem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Heart className="h-6 w-6 text-red-500" />
                      Formas de Apoiar
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">
                          Investimento
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Contribua financeiramente para o desenvolvimento da
                          plataforma
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Parcerias</p>
                        <p className="text-sm text-muted-foreground">
                          Estabeleça parcerias estratégicas com sua organização
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">
                          Divulgação
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Ajude a espalhar nossa missão em suas redes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Expertise</p>
                        <p className="text-sm text-muted-foreground">
                          Compartilhe conhecimento técnico ou ambiental
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 z-10 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Target className="h-6 w-6 text-primary" />
                      Nossa Meta
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Queremos tokenizar 1 milhão de árvores até 2025, criando
                      um ecossistema sustentável que recompense a conservação
                      ambiental e gere impacto positivo real no planeta.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CtaSection/>

      <Footer />
    </div>
  );
}
