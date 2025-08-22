"use client"

import { Leaf, TreePine, Users, Vault } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardHeader } from "../ui/card";
import CountUp from "../reactBits/CountUp";

export function ImpactSection() {
  return (
    <>
      <section className="py-20 bg-card">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              Nosso Impacto
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Resultados que Fazem a Diferença
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: 10000,
                label: "Árvores Tokenizadas",
                icon: TreePine,
                color: "from-green-500 to-emerald-500",
              },
              {
                number: 5000,
                label: "Kg de CO₂ Compensadas",
                icon: Leaf,
                color: "from-blue-500 to-indigo-500",
              },
              {
                number: 1200,
                label: "Fiscais Ativos",
                icon: Users,
                color: "from-purple-500 to-violet-500",
              },
              {
                number: 150,
                label: "Cofre valhalla",
                icon: Vault,
                color: "from-amber-500 to-orange-500",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="border-border z-10 shadow-lg text-center bg-card"
              >
                <CardHeader>
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <CountUp duration={0.3} to={stat.number}></CountUp>

                  <CardDescription className="text-lg font-medium text-muted-foreground">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
