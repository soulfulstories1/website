import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Main Character Media — Making Your Brand the Main Character",
  description: "We are a creative growth agency that helps brands become memorable, recognizable, and impossible to ignore. Social media management, content creation, branding, web design, LinkedIn personal branding, and performance marketing.",
  openGraph: {
    title: "Main Character Media — Making Your Brand the Main Character",
    description: "Your brand is the main character. We help write the story.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
