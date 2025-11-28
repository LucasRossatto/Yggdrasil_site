import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CheckCircle } from "lucide-react";
import ReadMore from "../readMore";
import { LinkedinButton } from "../LinkedinBtn";

export function TeamSection() {
  return (
    <>
      <section
        id="equipe"
        className="py-20 flex justify-center items-center bg-gradient-to-br from-background to-primary/5 dark:from-background to-primary/10"
      >
        <div className="px-4 sm:px-6 md:px-0 container">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              Especialistas Dedicados à Inovação
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Nossa Equipe
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto px-2 sm:px-0">
              Conheça os profissionais por trás do YggDrasil, unidos pela paixão
              em revolucionar a conservação ambiental.
            </p>
          </div>

          {/* Grid de membros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 justify-center items-center max-w-7xl mx-auto">
            {[
              {
                name: "Rodrigo Almeida",
                role: "CEO & Fundador",
                description:
                  "Empreendedor apaixonado por construir soluções que têm como propósito o desenvolvimento da sociedade e a preservação do nosso planeta.",
                linkedin: "https://www.linkedin.com/in/rodrigo-almeida-04a5456",
                profile_image: "/RODRIGO-ALMEIDA.jfif",
              },
              {
                name: "Marlom Romero",
                role: "Dev & Técnico",
                description:
                  "Desenvolvedor especializado em sistemas com RFID e com um profundo apreço por otimizar processos usando tecnologias inovadoras.",
                linkedin: "https://www.linkedin.com/in/marlom-romero",
                profile_image: "/MARLOM-ROMERO.png",
              },
              {
                name: "Dalton Miyazato",
                role: "Dev & Técnico",
                description:
                  "Desenvolvedor especializado em integrar tecnologia de ponta com eficiência, criando impacto positivo e transformando desafios em oportunidades.",
                linkedin:
                  "https://www.linkedin.com/in/dalton-kenyu-miyazato-a7112a22",
                profile_image: "/DALTON-MIYAZATO.jpeg",
              },
              {
                name: "Lucas Rossatto",
                role: "Dev Fullstack Mobile & Técnico",
                description:
                  "Desenvolvedor especializado em aplicativos mobile, sites responsivos e sistemas full-stack, unindo tecnologia moderna e eficiência para entregar soluções completas e escaláveis.",
                linkedin: "https://www.linkedin.com/in/lucasrossatto",
                profile_image: "/LUCAS-ROSSATTO.jpg",
              },
              {
                name: "Diogo Alexandrino",
                role: "Dev & Técnico",
                description:
                  "Desenvolvedor Frontend especializado em criar interfaces modernas, responsivas e orientadas à experiência do usuário.",
                linkedin: "https://www.linkedin.com/in/diogoalexandrinodias",
                profile_image: "/DIOGO-ALEXANDRINO.png",
              },
              {
                name: "Felipe Freisinger",
                role: "Engenheiro Ambiental",
                description:
                  "Engenheiro Ambiental apaixonado por criar soluções sustentáveis para impulsionar a sociedade e preservar o planeta.",
                linkedin:
                  "https://www.linkedin.com/in/felipe-freisinger-chacon-4481b126",
                profile_image: "/FELIPE-FREISINGER.png",
              },
              {
                name: "Rogério Dragone",
                role: "Comunicação",
                description:
                  "Profissional da Comunicação dedicado a construir narrativas impactantes que inspirem e conectem, alem de comunicar ideias de maneira envolvente, promovendo diálogos significativos na sociedade.",
                linkedin: "https://www.linkedin.com/in/rogério-dragone-b5a6527b",
                profile_image: "/ROGERIO-DRAGONE.png",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center w-full sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] mx-auto"
              >
                <CardHeader className="pb-4">
                  <div className="relative mx-auto mb-4 w-[130px] h-[130px]">
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
                  <CardTitle className="text-sm underline">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-green-600 font-medium text-xl">
                    {member.role}
                  </CardDescription>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    <ReadMore text={member.description} maxLength={80} />
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <LinkedinButton name={member.name}/>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
