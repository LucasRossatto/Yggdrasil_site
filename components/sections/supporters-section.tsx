import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function SupportersSection() {
  const supporters = [
    {
      name: "Ilumini",
      image_path: "/images/supporters/ILUMINI-LOGO.jpg",
    },
    {
      name: "Visionare",
      image_path: "/images/supporters/VISIONARE-LOGO.png",
    },
    {
      name: "Advantag",
      image_path: "/images/supporters/ADVANTAG-LOGO.png",
    },
  ];

  return (
    <>
      <section id="apoiadores" className="py-20 bg-card">
        <div className="text-center space-y-4 mb-16">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20"
          >
            Conheça nossos apoiadores
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Apoiadores
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Conheça as empresas e parceiros que apoiam o YggDrasil, unidos pelo compromisso de promover inovação e sustentabilidade ambiental.
          </p>
        </div>
        <Card className="border-0">
          <CardContent className="flex flex-wrap justify-center gap-6">
            {supporters.map((supporter, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <Image
                  src={supporter.image_path}
                  alt={supporter.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </>
  );
}
