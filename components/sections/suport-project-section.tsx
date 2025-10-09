"use client";

import {
  Pin,
  CheckCircle,
  HandHeart,
  Heart,
  Mail,
  MessageSquare,
  Target,
  User,
  Send,
} from "lucide-react";
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
import { useState } from "react";
import { toast } from "sonner";
import z from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/utils/send-email";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DialogHeader } from "../ui/dialog";
import { PixDialog } from "../PixDialog";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, "Assunto é obrigatório"),
  message: z.string().min(1, "Mensagem é obrigatória"),
  token: z.string().min(1, "reCAPTCHA é obrigatório"),
});

export type FormData = z.infer<typeof contactSchema>;

export default function SuportProjetSection() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    if (!recaptchaToken) {
      toast.error("reCAPTCHA necessário");
      return;
    }
    setIsSubmitting(true);
    try {
      sendEmail({ ...data, token: recaptchaToken });
      reset();
      setRecaptchaToken(null);
      toast.success(
        "Mensagem enviada!, Obrigado pelo seu contato. Responderei em breve."
      );
    } catch (error) {
      toast.error(
        "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <div id="contato" className="grid gap-8 lg:grid-cols-2 items-start">
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
                <form
                  method="post"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome Completo
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="name"
                          {...register("name")}
                          placeholder="Seu nome completo"
                          className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-[#3B82F6]"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.name.message}
                        </p>
                      )}
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
                        {...register("email")}
                        placeholder="seu@email.com"
                        className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-[#3B82F6]"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Assunto
                    </label>
                    <div className="relative">
                      <Pin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="subject"
                        {...register("subject")}
                        placeholder="Digite o assunto"
                        className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-[#3B82F6] resize-none"
                      />
                    </div>
                    {errors.subject && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Como você gostaria de apoiar o YggDrasil?"
                        rows={5}
                        className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-[#3B82F6] resize-none"
                      />
                    </div>
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <ReCAPTCHA
                      {...register("token")}
                      className="g-recaptcha"
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                      onChange={(token) => {
                        setRecaptchaToken(token);
                        if (token) setValue("token", token);
                      }}
                    />
                    {errors.token && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.token.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    variant={"default"}
                    className="w-full bg-primary"
                  >
                    <Send className="ml-2 h-4 w-4" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
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
                  <PixDialog/>    
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
