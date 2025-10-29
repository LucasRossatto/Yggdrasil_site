"use client";

import { Chrome, Leaf } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [chromeAllow, setChromeAllow] = useState(true);
  useEffect(() => {
      const link = document.createElement("a");
      link.href = "public/apk/Yggdrasil.apk"; 
      link.download = "Yggdrasil.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, []);
  return (
    
    <div className=" bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 text-foreground antialiased min-h-screen flex items-center justify-center py-12 px-4">
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
      <main className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-8">
           <Image
              src="/images/yggdrasil-logo.png"
              alt="Yggdrasil Logo"
              width={160}
              height={48}
              className="object-contain"
            />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Instale o Aplicativo YggDrasil para Android
        </h1>
        <p className="text-secondary-foreground mb-10">Siga as instruções para continuar</p>

        <div className="w-full text-left space-y-8">
         

          {/* Instruções para download */}
          <ol className="space-y-6">
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-border flex items-center justify-center font-bold text-foreground">
                1
              </div>
              <p className="pt-1  text-foregorund">Selecione "Baixar mesmo assim".</p>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-border flex items-center justify-center font-bold text-foreground">
                2
              </div>
              <p className="pt-1  text-foregorund">Abra o arquivo baixado.</p>
            </li>
            <li className="flex flex-col space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-border flex items-center justify-center font-bold text-foreground">
                  3
                </div>
                <p className="pt-1  text-foregorund">
                  Habilite a instalação de aplicativos desconhecidos.
                </p>
              </div>

              {/* Chrome toggle */}
              <div className="ml-12 p-4 bg-border rounded-lg flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined  text-muted-foreground"><Chrome /></span>
                  <div>
                    <p className="font-medium text-foreground text-sm">Chrome</p>
                    <p className="text-xs  text-muted-foreground">Allow from this source</p>
                  </div>
                </div>
                <label className="switch pointer-events-none">
                  <input
                    type="checkbox"
                    checked={chromeAllow}
                    onChange={() => setChromeAllow(!chromeAllow)}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="ml-12 flex items-start space-x-2 text-xs  text-muted-foreground">
                <p>
                  A interface pode variar de acordo com o sistema operacional e o
                  dispositivo.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-border flex items-center justify-center font-bold text-foreground">
                4
              </div>
              <p className="pt-1  text-foreground">Instale e abra o YggDrasil.</p>
            </li>
          </ol>

          {/* Button */}
          <button className="w-full bg-primary text-foreground font-semibold py-4 rounded-lg hover:bg-primary/25 transition-colors text-base cursor-pointer">
            Repetir download
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Precisa de mais ajuda?{" "}
            <a className="text-primary font-medium hover:underline" href="/#contato">
              Entrar em contato com o suporte
            </a>
          </p>
        </div>
      </main>

      {/* Custom Switch CSS */}
      <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #374151;
          transition: 0.4s;
          border-radius: 34px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: #3b38d8;
        }
        input:checked + .slider:before {
          transform: translateX(20px);
        }
      `}</style>
    </div>
  );
}
