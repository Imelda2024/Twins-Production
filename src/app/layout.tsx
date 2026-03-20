import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import NavbarWrapper from "../components/NavbarWrapper";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TWINS PRODUCTION - Studio Photo & Événementiel",
  description: "Studio photo professionnel, couverture événementielle, design graphique et sérigraphie au Bénin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-[#1A1A2E] text-white font-sans selection:bg-[#FF6B35]/30 antialiased">
        <AuthProvider>
          <NavbarWrapper />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
