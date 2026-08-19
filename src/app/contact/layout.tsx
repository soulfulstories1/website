import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | The Prime Media - Aaradhya Digital Solutions",
  description: "Get in touch with The Prime Media by Aaradhya Digital Solutions. Book a discovery call today to discuss strategy-led social media, short-form videos, and bringing your brand to its prime.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
