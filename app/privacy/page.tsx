import type { Metadata } from "next";
import PrivacyPageContent from "@/components/PrivacyPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Next CV Builder",
  description:
    "How Next CV Builder processes CV content, local browser data and technical information.",
};

export default function PrivacyPage() {
  const contactEmail = process.env.NEXT_PUBLIC_PRIVACY_CONTACT_EMAIL?.trim();
  return <PrivacyPageContent contactEmail={contactEmail || undefined} />;
}
