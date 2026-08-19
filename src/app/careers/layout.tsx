import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | The Prime Media - Aaradhya Digital Solutions",
  description: "Join the team at The Prime Media, an initiative by Aaradhya Digital Solutions. We are always looking for creative talent in strategy, content creation, short-form video, and digital marketing.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
