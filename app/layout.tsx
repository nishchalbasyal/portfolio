import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Background } from "@/components/Background";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nishchalbasyal.com"),
  title: "Nishchal Basyal | AI Automation Engineer & LangGraph Agent Builder",
  description:
    "AI Automation Engineer in Germany building LangGraph agents, n8n workflows, LLM systems, and scalable Python automation pipelines.",
  keywords: [
    "AI Automation Engineer",
    "AI Agent Developer",
    "LangGraph Developer",
    "LangGraph",
    "n8n Automation",
    "N8N Automation Engineer",
    "LLM Workflow Builder",
    "Python",
    "Python Automation",
    "MSc NLP Germany",
  ],
  authors: [{ name: "Nishchal Basyal" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Nishchal Basyal",
    title: "Nishchal Basyal | AI Automation Engineer & LangGraph Agent Builder",
    description:
      "MSc student at Universität Trier building LangGraph agents, n8n automations, LLM workflows, and scalable AI systems in Germany.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nishchal Basyal - AI Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishchal Basyal | AI Automation Engineer",
    description:
      "Building LangGraph agents, n8n workflows, LLM systems, and Python automation pipelines in Germany.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-bg">
        <Background />
        <div className="relative z-10">
          <ThemeProvider>
            <LangProvider>{children}</LangProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
