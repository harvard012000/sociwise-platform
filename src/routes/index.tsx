import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ProductPreview } from "@/components/site/ProductPreview";
import { WhySection } from "@/components/site/WhySection";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MySocivo — Smart Society Management Platform" },
      {
        name: "description",
        content:
          "Manage residents, billing, visitors, and operations — all in one modern, multi-tenant society management platform.",
      },
      { property: "og:title", content: "MySocivo — Smart Society Management Platform" },
      {
        property: "og:description",
        content:
          "Residents, billing, visitors, and operations in one calm place. Built for modern communities.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ProductPreview />
      <WhySection />
      <CTA />
      <Footer />
    </main>
  );
}
