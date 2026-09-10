import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | The Prime Media - Aaradhya Digital Solutions",
  description: "Learn about The Prime Media, a creative digital marketing agency by Aaradhya Digital Solutions. We combine strategy, storytelling, and technology to build memorable digital identities.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
