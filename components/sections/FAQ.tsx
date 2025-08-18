"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
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
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary/5 dark:from-background dark:to-primary/10">
      <div className="px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20"
          >
            Perguntas Frequentes
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Tire Suas Dúvidas
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={`faq-${faq.question}`} // key única
                value={faq.question}
                className="bg-card rounded-lg shadow-sm border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline text-foreground cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
