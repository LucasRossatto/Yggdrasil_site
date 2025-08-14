import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { Footer } from "@/components/sections/footer"
import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
} from "lucide-react"
import Image from "next/image"

export default function YggdrasilRedesign() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Tree silhouettes */}
        <div className="absolute bottom-0 left-0 w-32 h-64 opacity-5">
          <svg viewBox="0 0 100 200" className="w-full h-full fill-current text-green-800">
            <path d="M50 200 L50 120 L30 140 L50 100 L20 120 L50 80 L10 100 L50 60 L5 80 L50 40 L50 0 L50 40 L95 80 L50 60 L90 100 L50 80 L80 120 L50 100 L70 140 L50 120 L50 200" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-72 opacity-5">
          <svg viewBox="0 0 120 220" className="w-full h-full fill-current text-green-700">
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
              <Leaf className="w-4 h-4 text-green-400 opacity-20 animate-bounce" />
            </div>
          ))}
        </div>
      </div>

      <Header />

      <HeroSection />

      {/* Branch divider */}
      <div className="relative h-16 overflow-hidden">
        <svg viewBox="0 0 1200 60" className="absolute inset-0 w-full h-full fill-current text-green-600 opacity-20">
          <path d="M0 30 Q300 10 600 30 T1200 30 L1200 60 L0 60 Z" />
          <circle cx="150" cy="25" r="3" className="fill-current text-green-500" />
          <circle cx="450" cy="35" r="2" className="fill-current text-emerald-500" />
          <circle cx="750" cy="20" r="4" className="fill-current text-green-400" />
          <circle cx="1050" cy="30" r="3" className="fill-current text-teal-500" />
        </svg>
      </div>

      <AboutSection />

      {/* Branch divider */}
      <div className="relative h-12 overflow-hidden">
        <svg viewBox="0 0 1200 40" className="absolute inset-0 w-full h-full fill-current text-emerald-600 opacity-15">
          <path d="M0 20 Q200 5 400 20 T800 20 T1200 20 L1200 40 L0 40 Z" />
        </svg>
      </div>

      {/* Como Funciona Section */}
      <section
        id="funcionamento"
        className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 relative"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              <Leaf className="w-4 h-4 mr-2" />
              Processo
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                COMO FUNCIONA
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Um processo simples e transparente que conecta preservadores, especialistas e investidores em uma rede
              global de conservação ambiental.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-green-400 via-emerald-500 to-green-600 rounded-full shadow-lg"></div>

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Cadastro na Plataforma",
                  description:
                    "Registre-se como fiscal ou especialista e comece a contribuir para a conservação ambiental.",
                  icon: User,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  step: "2",
                  title: "Registro de Árvore",
                  description:
                    "Fiscais fotografam e registram informações básicas das árvores usando nosso aplicativo móvel.",
                  icon: Camera,
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  step: "3",
                  title: "Validação Especializada",
                  description: "Especialistas certificados analisam e validam os dados fornecidos pelos fiscais.",
                  icon: GraduationCap,
                  color: "from-purple-500 to-violet-500",
                },
                {
                  step: "4",
                  title: "Geração de Créditos",
                  description: "Árvores validadas são tokenizadas e geram SCCs (Save Credit Carbon) automaticamente.",
                  icon: Coins,
                  color: "from-amber-500 to-orange-500",
                },
                {
                  step: "5",
                  title: "Venda e Recompensas",
                  description:
                    "Créditos podem ser vendidos no mercado e participantes recebem recompensas em criptomoedas.",
                  icon: TrendingUp,
                  color: "from-emerald-500 to-teal-500",
                },
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm relative overflow-hidden">
                      <div className={`absolute ${index % 2 === 0 ? "top-2 left-2" : "top-2 right-2"} opacity-10`}>
                        <TreePine className="w-6 h-6 text-green-600" />
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          {index % 2 === 0 ? (
                            <>
                              <span>{item.title}</span>
                              <div
                                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                              >
                                <item.icon className="h-6 w-6 text-white" />
                              </div>
                            </>
                          ) : (
                            <>
                              <div
                                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                              >
                                <item.icon className="h-6 w-6 text-white" />
                              </div>
                              <span>{item.title}</span>
                            </>
                          )}
                        </CardTitle>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-800 dark:to-emerald-800 rounded-full border-4 border-green-400 shadow-lg">
                    <span className="text-xl font-bold text-green-600 dark:text-green-300">{item.step}</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-8 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-600 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              </div>
            ))}
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              <Award className="w-4 h-4 mr-2" />
              Vantagens
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                BENEFÍCIOS
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Descubra as vantagens de fazer parte da maior rede de conservação ambiental descentralizada do mundo.
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
                description: "Ganhe criptomoedas e créditos de carbono por suas contribuições para a conservação.",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: Shield,
                title: "Transparência Blockchain",
                description: "Todas as transações são registradas de forma transparente e imutável na blockchain.",
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: Users,
                title: "Comunidade Engajada",
                description: "Faça parte de uma comunidade global dedicada à preservação ambiental.",
                color: "from-purple-500 to-violet-500",
              },
              {
                icon: BarChart3,
                title: "Métricas de Impacto",
                description: "Acompanhe o impacto real das suas ações através de dados e estatísticas detalhadas.",
                color: "from-teal-500 to-cyan-500",
              },
              {
                icon: Award,
                title: "Reconhecimento",
                description: "Sistema de avaliações por estrelas que reconhece e recompensa a qualidade do trabalho.",
                color: "from-rose-500 to-pink-500",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                  <svg viewBox="0 0 60 60" className="w-full h-full fill-current text-green-600">
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
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Aplicativo Section */}
      <section
        id="aplicativo"
        className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-5 w-24 h-48">
            <svg viewBox="0 0 80 160" className="w-full h-full fill-current text-primary">
              <path d="M40 160 L40 100 L25 115 L40 85 L15 100 L40 70 L10 85 L40 55 L5 70 L40 40 L40 0 L40 40 L75 70 L40 55 L70 85 L40 70 L65 100 L40 85 L55 115 L40 100 L40 160" />
            </svg>
          </div>
          <div className="absolute bottom-10 right-5 w-32 h-56">
            <svg viewBox="0 0 100 180" className="w-full h-full fill-current text-secondary">
              <path d="M50 180 L50 120 L30 135 L50 105 L20 120 L50 90 L15 105 L50 75 L10 90 L50 60 L50 0 L50 60 L90 90 L50 75 L85 105 L50 90 L80 120 L50 105 L70 135 L50 120 L50 180" />
            </svg>
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              <Smartphone className="w-4 h-4 mr-2" />
              Nosso Aplicativo
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="bg-foreground bg-clip-text text-transparent">YggDrasil Mobile App</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
              Baixe nosso aplicativo móvel e comece a tokenizar árvores, ganhar recompensas e fazer a diferença para o
              meio ambiente diretamente do seu smartphone.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* App Mockup */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 flex justify-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    alt="YggDrasil Mobile App"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-2xl border-8 border-gray-800"
                  />
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                    <Coins className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 -right-6 w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* App Features */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Funcionalidades Principais</h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: Camera,
                      title: "Registro Fotográfico",
                      description: "Capture fotos das árvores com localização GPS automática e metadados detalhados.",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: Zap,
                      title: "Wallet Integrada",
                      description: "Gerencie seus tokens, SCCs e recompensas diretamente no aplicativo.",
                      color: "from-amber-500 to-orange-500",
                    },
                    {
                      icon: BarChart3,
                      title: "Dashboard de Impacto",
                      description: "Acompanhe suas contribuições e o impacto ambiental em tempo real.",
                      color: "from-blue-500 to-indigo-500",
                    },
                    {
                      icon: Bell,
                      title: "Notificações Smart",
                      description: "Receba alertas sobre validações, recompensas e oportunidades próximas.",
                      color: "from-purple-500 to-violet-500",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300"
                    >
                      <div
                        className={`h-12 w-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Section */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg flex-1"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download iOS
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 flex-1 bg-transparent"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Android
                  </Button>
                </div>

                {/* QR Code */}
                <div className="flex items-center justify-center space-x-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                  <div className="text-center space-y-2">
                    <QrCode className="h-16 w-16 mx-auto text-primary" />
                    <p className="text-sm text-muted-foreground">Escaneie para baixar</p>
                  </div>
                </div>

                {/* App Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Downloads</div>
                  </div>
                  <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                    <div className="text-2xl font-bold text-primary">4.8★</div>
                    <div className="text-sm text-muted-foreground">Avaliação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe Section */}
      <section
        id="equipe"
        className="py-20 bg-gradient-to-br from-background to-primary/5 dark:from-background to-primary/10"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Nossa Equipe
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Especialistas Dedicados à Inovação
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Conheça os profissionais por trás do YggDrasil, unidos pela paixão em revolucionar a conservação
              ambiental.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-7xl mx-auto">
            {[
              {
                name: "Rodrigo Almeida",
                role: "CEO & Fundador",
                description: "Visionário por trás do YggDrasil, com experiência em sustentabilidade e blockchain.",
                linkedin: "#",
              },
              {
                name: "Marlom Romero",
                role: "Dev & Técnico",
                description: "Especialista em sistemas RFID e tecnologias de identificação para monitoramento.",
                linkedin: "#",
              },
              {
                name: "Dalton Miyazato",
                role: "Dev & Técnico",
                description: "Focado na integração de tecnologias de ponta com máxima eficiência.",
                linkedin: "#",
              },
              {
                name: "Felipe Freisinger",
                role: "Engenheiro Ambiental",
                description: "Especialista em sustentabilidade e impacto ambiental do projeto.",
                linkedin: "#",
              },
              {
                name: "Rogério Dragone",
                role: "Comunicação",
                description: "Responsável por conectar o YggDrasil com a comunidade global.",
                linkedin: "#",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <CardHeader className="pb-4">
                  <div className="relative mx-auto mb-4">
                    <Image
                      src={`/placeholder.svg?height=120&width=120&query=professional headshot ${member.name}`}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium text-sm">{member.role}</CardDescription>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{member.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent border-primary/20 text-primary hover:bg-primary/10"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto/Estatísticas Section */}
      <section className="py-20 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Nosso Impacto
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Resultados que Fazem a Diferença
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "10,000+",
                label: "Árvores Tokenizadas",
                icon: TreePine,
                color: "from-green-500 to-emerald-500",
              },
              {
                number: "5,000",
                label: "Toneladas CO₂ Compensadas",
                icon: Leaf,
                color: "from-blue-500 to-indigo-500",
              },
              {
                number: "1,200+",
                label: "Fiscais Ativos",
                icon: Users,
                color: "from-purple-500 to-violet-500",
              },
              {
                number: "150+",
                label: "Especialistas Certificados",
                icon: Award,
                color: "from-amber-500 to-orange-500",
              },
            ].map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center bg-card">
                <CardHeader>
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                  <CardDescription className="text-lg font-medium text-muted-foreground">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5 dark:from-background to-primary/10">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Perguntas Frequentes
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Tire Suas Dúvidas
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Como funciona a tokenização de árvores?",
                  answer:
                    "Cada árvore registrada e validada por nossos especialistas é transformada em um token único na blockchain, gerando créditos de carbono (SCCs) que podem ser comercializados no mercado.",
                },
                {
                  question: "Qualquer pessoa pode ser um fiscal?",
                  answer:
                    "Sim! Qualquer pessoa com um smartphone pode se cadastrar como fiscal e começar a registrar árvores. Nosso aplicativo móvel torna o processo simples e intuitivo.",
                },
                {
                  question: "Como são calculadas as recompensas?",
                  answer:
                    "As recompensas são baseadas na qualidade do trabalho, avaliações por estrelas da comunidade e quantidade de árvores validadas. Quanto melhor sua avaliação, maiores as recompensas.",
                },
                {
                  question: "Os créditos de carbono são reconhecidos oficialmente?",
                  answer:
                    "Trabalhamos para garantir que nossos SCCs (Save Credit Carbon) atendam aos padrões internacionais de créditos de carbono e sejam reconhecidos no mercado global.",
                },
                {
                  question: "Como posso me tornar um especialista certificado?",
                  answer:
                    "Especialistas devem ter formação em botânica, dendrologia ou áreas afins. O processo de certificação inclui análise de credenciais e testes de conhecimento técnico.",
                },
                {
                  question: "A plataforma é segura?",
                  answer:
                    "Sim, utilizamos tecnologia blockchain para garantir transparência e segurança. Todos os dados são criptografados e as transações são imutáveis e verificáveis.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg shadow-sm border-0">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Apoie o Projeto Section */}
      <section id="apoiadores" className="py-20 bg-card">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Apoie o Projeto
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Junte-se à Revolução Verde
              </h2>
              <p className="text-xl text-muted-foreground">
                Quer fazer parte da mudança? Entre em contato conosco e descubra como pode contribuir para um futuro
                mais sustentável.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Formulário de Apoio</CardTitle>
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
                        <Input id="nome" placeholder="Seu nome completo" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telefone" className="text-sm font-medium">
                        Telefone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="telefone" placeholder="(11) 99999-9999" className="pl-10" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-mail
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="email" type="email" placeholder="seu@email.com" className="pl-10" />
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
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
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
                        <p className="font-medium text-foreground">Investimento</p>
                        <p className="text-sm text-muted-foreground">
                          Contribua financeiramente para o desenvolvimento da plataforma
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
                        <p className="font-medium text-foreground">Divulgação</p>
                        <p className="text-sm text-muted-foreground">Ajude a espalhar nossa missão em suas redes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Expertise</p>
                        <p className="text-sm text-muted-foreground">Compartilhe conhecimento técnico ou ambiental</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Target className="h-6 w-6 text-primary" />
                      Nossa Meta
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Queremos tokenizar 1 milhão de árvores até 2025, criando um ecossistema sustentável que recompense
                      a conservação ambiental e gere impacto positivo real no planeta.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-full h-32">
            <svg viewBox="0 0 1200 100" className="w-full h-full fill-current text-primary-foreground">
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

        <div className="container px-4 md:px-6 text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Pronto para Fazer a Diferença?
            </h2>
            <p className="text-xl opacity-90">
              Junte-se ao YggDrasil e seja parte da solução para a conservação global de árvores. Cada árvore tokenizada
              é um passo em direção a um planeta mais verde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg">
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

      <Footer />
    </div>
  )
}
