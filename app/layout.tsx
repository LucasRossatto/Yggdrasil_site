import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Yggdrasil - Monitorando a Vida",
  description:
    "Revolucionando a conservação de árvores através da tecnologia blockchain",
  generator: "Next.js",
  authors: [{ name: "Lucas Rossatto" }],
  icons: {
    icon: "/images/yggdrasil-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
     
      <head>
      
        <link
          rel="icon"
          href="/images/yggdrasil-logo.png"
          type="image/png"
          sizes="any"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        ></link>
        <meta name="google-adsense-account" content="ca-pub-4379608956620508"/>
      </head>
      <meta name="google-site-verification" content="N3uLTPQKKwEjJDvNBmGV4VvCp_-NaZJpm-qT15LwXuo" />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange={false}
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4379608956620508"
     crossOrigin="anonymous"></script>
    </html>
    
  );
}
