import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { SupportDeveloper } from "@/components/SupportDeveloper";

export const metadata: Metadata = {
  title: "Support Developer — Buy Me a Coffee | DockDaily",
  description:
    "Support independent developer Shitanshu building DockDaily. Direct UPI contributions to keep DockDaily ad-free, local-first, and privacy-focused.",
};

export default function SupportPage() {
  return (
    <main className="container-page py-16 sm:py-24">
      <SectionHeading
        align="center"
        eyebrow="Support DockDaily"
        title="Help us keep DockDaily calm & independent."
        description="DockDaily is built by a solo developer who believes software should be quiet, local-first, and respectful of your attention."
      />

      <div className="mt-12">
        <SupportDeveloper />
      </div>
    </main>
  );
}
