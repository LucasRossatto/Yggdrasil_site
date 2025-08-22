import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { Footer } from "@/components/sections/footer";
import { HandHeart, Leaf } from "lucide-react";
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
import SuportProjetSection from "@/components/sections/suport-project-section";

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
      <HowItWorksSection />

      {/* Benefícios Section */}
      <Benefits />

      {/* Nosso Aplicativo Section */}
      <AppSection />

      {/* Equipe Section */}
      <TeamSection />

      {/* Apoiadores */}
      <SupportersSection />

      {/* Impacto/Estatísticas Section */}
      <ImpactSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Apoie o Projeto Section */}
      <SuportProjetSection/>

      {/* Final CTA Section */}
      <CtaSection />

      <Footer />
    </div>
  );
}
