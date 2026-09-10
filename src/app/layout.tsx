import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { basePath } from "@/utils/paths";

export const metadata: Metadata = {
  title: "The Prime Media | Strategy-led Digital Marketing & Social Media Agency",
  description: "The Prime Media is a creative growth agency by Aaradhya Digital Solutions. We help startups, SMEs, and personal brands build meaningful digital identities through strategy, short-form video, AI-assisted content, and performance marketing. Your brand, at its prime.",
  keywords: "The Prime Media, Aaradhya Digital Solutions, aaradhyadigitalsolutions, digital marketing agency, social media management, creative content, short-form video, reels, AI content creation, personal branding, startups, fashion, lifestyle, real estate marketing, performance marketing, brand identity",
  authors: [{ name: "The Prime Media" }],
  creator: "Aaradhya Digital Solutions",
  publisher: "Aaradhya Digital Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: `${basePath}/Logo.svg`,
    shortcut: `${basePath}/Logo.svg`,
    apple: `${basePath}/Logo.svg`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "The Prime Media | Your Brand, at its Prime",
    description: "End-to-end strategy-led social media management, content creation, branding, and performance marketing for growing companies and personal brands. An Aaradhya Digital Solutions initiative.",
    siteName: "The Prime Media",
    emails: ["hello@aaradhyadigitalsolutions.com"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Prime Media | Your Brand, at its Prime",
    description: "Creative growth agency focusing on strategy, storytelling, and digital identities. An Aaradhya Digital Solutions initiative.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.theprimemedia.com/#organization",
      "name": "The Prime Media",
      "alternateName": "The Prime Media by Aaradhya Digital Solutions",
      "url": "https://www.theprimemedia.com",
      "logo": "https://www.theprimemedia.com/Logo.svg",
      "slogan": "Your Brand, at it's Prime.",
      "email": "hello@aaradhyadigitalsolutions.com",
      "description": "The Prime Media is a creative growth agency specializing in strategy-led social media management, short-form video, AI-assisted content creation, branding, and performance marketing.",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Aaradhya Digital Solutions",
        "url": "https://www.aaradhyadigitalsolutions.com"
      },
      "areaServed": "India",
      "knowsAbout": [
        "Social Media Management",
        "Short-form Video Creation",
        "AI-assisted Content Creation",
        "Performance Marketing",
        "Branding and Visual Identity",
        "Website Design",
        "LinkedIn Personal Branding"
      ],
      "sameAs": [
        "https://www.linkedin.com/company/main-character-media-by-aaradhya-digital-solutions",
        "https://www.instagram.com/theprime__media",
        "https://www.facebook.com/share/19FVbNNMLa/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.theprimemedia.com/#website",
      "url": "https://www.theprimemedia.com",
      "name": "The Prime Media",
      "publisher": {
        "@id": "https://www.theprimemedia.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
