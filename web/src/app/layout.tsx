import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Hub",
  description: "Security & Infra-oriented portfolio hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} min-h-screen bg-gray-50 text-gray-900`}>
        <SiteHeader />
        <main className="py-8">
          <Container>{children}</Container>
        </main>
        <footer className="border-t py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Satoru Kawashima
        </footer>
      </body>
    </html>
  );
}