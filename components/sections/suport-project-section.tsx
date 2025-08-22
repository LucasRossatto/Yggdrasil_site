import { ArrowRight, CheckCircle, HandHeart, Heart, Mail, MessageSquare, Phone, Target, User } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function SuportProjetSection() {
  return (
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
                      <p className="font-medium text-foreground">Divulgação</p>
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
                  <a className="border-primary cursor-pointer hover:bg-accent-foreground font-bold  bg-foreground text-primary px-4 py-2 rounded-sm text-2xl  flex flex-row items-center justify-center gap-2">
                    <HandHeart className="h-5 w-5" />
                    <span className="text-xs">Apoiar agora</span>
                  </a>
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
                    Queremos tokenizar 1 milhão de árvores até 2025, criando um
                    ecossistema sustentável que recompense a conservação
                    ambiental e gere impacto positivo real no planeta.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
