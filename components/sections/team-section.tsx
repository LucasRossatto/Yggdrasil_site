import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CheckCircle, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

export function TeamSection() {
  return (
    <>
      <section
        id="equipe"
        className="py-20 flex justify-center items-center bg-gradient-to-br from-background to-primary/5 dark:from-background to-primary/10"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              Nossa Equipe
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Especialistas Dedicados à Inovação
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Conheça os profissionais por trás do YggDrasil, unidos pela paixão
              em revolucionar a conservação ambiental.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-7xl mx-auto">
            {[
              {
                name: "Rodrigo Almeida",
                role: "CEO & Fundador",
                description:
                  "Empreendedor apaixonado por construir soluções que têm como propósito o desenvolvimento da sociedade e a preservação do nosso planeta.",
                linkedin: "#",
                profile_image: "/RODRIGO-ALMEIDA.jfif",
              },
              {
                name: "Marlom Romero",
                role: "Dev & Técnico",
                description:
                  "Desenvolvedor especializado em sistemas com RFID e com um profundo apreço por otimizar processos usando tecnologias inovadoras.",
                linkedin: "#",
                profile_image: "/MARLOM-ROMERO.png",
              },
              {
                name: "Dalton Miyazato",
                role: "Dev & Técnico",
                description:
                  "Desenvolvedor especializado em integrar tecnologia de ponta com eficiência, criando impacto positivo e transformando desafios em oportunidades.",
                linkedin: "#",
                profile_image: "/DALTON-MIYAZATO.jpeg",
              },
              {
                name: "Felipe Freisinger",
                role: "Engenheiro Ambiental",
                description:
                  "Engenheiro Ambiental apaixonado por criar soluções sustentáveis para impulsionar a sociedade e preservar o planeta.",
                linkedin: "#",
                profile_image: "/FELIPE-FREISINGER.png",
              },
              {
                name: "Rogério Dragone",
                role: "Comunicação",
                description:
                  "Profissional da Comunicação dedicado a construir narrativas impactantes que inspirem e conectem, alem de comunicar ideias de maneira envolvente, promovendo diálogos significativos na sociedade.",
                linkedin: "#",
                profile_image: "/ROGERIO-DRAGONE.png",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <CardHeader className="pb-4">
                  <div className="relative mx-auto mb-4">
                    <Image
                      src={`/images/team_members${member.profile_image}`}
                      alt={member.name}

                      width={130}
                      height={130}
                      className="rounded-full mx-auto border-4 border-accent-foreground shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-sm underline">{member.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium text-xl">
                    {member.role}
                  </CardDescription>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {member.description}
                  </p>
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
    </>
  );
}
