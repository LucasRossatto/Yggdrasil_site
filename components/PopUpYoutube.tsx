"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroVideoButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão que abre o vídeo */}
      <Button
        size="lg"
        variant="default"
        onClick={() => setIsOpen(true)}
        className="border-primary cursor-pointer hover:bg-accent-foreground text-primary text-lg px-8 py-6 bg-foreground"
      >
        <Play className="mr-2 h-5 w-5" />
        Conheça o Projeto
      </Button>

      {/* Popup do vídeo */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative  rounded-xl overflow-hidden shadow-lg w-full max-w-3xl">
            {/* Botão de fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl z-10"
            >
              &times;
            </button>

            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/hxl0eOpS4bo?si=h21sv0Ip7u85_FtT"
                title="Yggdrasil Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
