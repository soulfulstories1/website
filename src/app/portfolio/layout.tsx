import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | The Prime Media by Aaradhya Digital Solutions",
  description: "Explore our creative portfolio. See how The Prime Media helps startups, fashion, lifestyle, real estate, and personal brands build premium digital identities and engage their target audience.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
