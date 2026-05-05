import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="cta" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
            <div className="absolute inset-0 -z-10 bg-radial-fade" />
            <div
              aria-hidden
              className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full -z-10 animate-pulse-glow"
              style={{ background: "radial-gradient(circle, oklch(0.68 0.12 195 / 0.35), transparent 60%)" }}
            />
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
              Start Managing Your Society <span className="text-gradient-brand">the Smart Way</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Join forward-thinking communities running their operations on MySocivo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition glow-accent"
              >
                Get Started Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#preview"
                className="inline-flex items-center justify-center rounded-lg border border-accent/60 text-accent px-6 py-3 text-sm font-semibold hover:bg-accent/10 transition"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
