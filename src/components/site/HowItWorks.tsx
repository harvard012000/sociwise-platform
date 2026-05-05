import { Building, Users, Settings2, BarChart3 } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { icon: Building, title: "Create Society", desc: "Set up your society profile, units, and admins in minutes." },
  { icon: Users, title: "Add Residents", desc: "Invite residents and assign units with role-based access." },
  { icon: Settings2, title: "Manage Operations", desc: "Run billing, visitors, complaints, and notices in one place." },
  { icon: BarChart3, title: "Track Everything", desc: "Live insights on collections, tickets, and community health." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest uppercase text-accent">
            How it works
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            From setup to scale in four simple steps
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="relative rounded-2xl glass p-6 h-full transition hover:-translate-y-1 hover:border-accent/40">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-[0_0_30px_-6px_oklch(0.68_0.12_195/0.6)]">
                    <s.icon className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-background border border-accent/40 text-[10px] font-semibold text-accent flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
