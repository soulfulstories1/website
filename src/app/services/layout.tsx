import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | The Prime Media - Social Media & Digital Marketing",
  description: "End-to-end digital marketing solutions by Aaradhya Digital Solutions. We offer strategy-led social media management, short-form video & reels, AI-assisted content creation, branding, and performance marketing.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
