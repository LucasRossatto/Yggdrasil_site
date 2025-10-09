"use client";

import Image from "next/image";
import { HandHeart, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PixDialog() {
  const [copied, setCopied] = useState(false);

  const pixKey = "33.622.628/0001-03";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <a className="border-primary cursor-pointer hover:bg-accent-foreground font-bold bg-foreground text-primary px-4 py-2 rounded-sm text-2xl flex flex-row items-center justify-center gap-2 transition-all">
          <HandHeart className="h-5 w-5" />
          <span className="text-xs">Apoiar agora</span>
        </a>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px] flex flex-col items-center text-center">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-foreground">
            Apoie o Projeto 💚
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Escaneie o QR Code abaixo ou copie a chave Pix para contribuir com o desenvolvimento.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center mt-4">
          <div className="p-3 bg-white rounded-lg shadow-md">
            <Image
              src="/public/images/Pix.jpg"
              alt="QR Code Pix"
              width={200}
              height={200}
              className="rounded-md object-contain"
            />
          </div>

          <div className="w-full mt-4 flex items-center gap-2">
            <Input
              readOnly
              value={pixKey}
              className="text-center font-mono text-sm"
            />
            <Button
              onClick={handleCopy}
              variant="outline"
              size="icon"
              title="Copiar chave Pix"
            >
              {copied ? (
                <CheckCircle className="text-green-500 h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-2">
            Obrigado por apoiar 💚 cada contribuição faz diferença!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
