import { Layers, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const points = [
  {
    icon: Layers,
    title: "Multi-tenant architecture",
    desc: "Run hundreds of societies side-by-side with strict data isolation and per-tenant configuration.",
  },
  {
    icon: Zap,
    title: "Real-time system",
    desc: "Live updates across billing, complaints, and notices — residents and admins always in sync.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & reliable",
    desc: "Encryption at rest and in transit, role-based access, and full audit trails by default.",
  },
  {
    icon: Sparkles,
    title: "Built for modern communities",
    desc: "A delightful experience on every device, designed for the way people actually use software.",
  },
];

export function WhySection() {
  return (
    <section id="why" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="text-xs font-medium tracking-widest uppercase text-accent">
              Why MySocivo
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              The platform your committee will actually love
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Modern infrastructure, thoughtful design, and the operational
              depth a real society needs — without the bloat.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "99.9%", v: "Uptime" },
                { k: "10k+", v: "Units managed" },
                { k: "24/7", v: "Support" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl glass p-4 text-center">
                  <div className="text-xl font-semibold text-accent">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-accent/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
