import {
  Building2,
  Receipt,
  UserCheck,
  MessageSquareWarning,
  Bell,
  LayoutDashboard,
  ScrollText,
} from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Building2,
    title: "Multi-Tenant Setup",
    desc: "Onboard unlimited societies with isolated data, branding, and admins.",
  },
  {
    icon: Receipt,
    title: "Maintenance & Billing",
    desc: "Automated invoices, reminders, and online payments with full history.",
  },
  {
    icon: UserCheck,
    title: "Visitor Management",
    desc: "Pre-approve guests, track entries, and keep gate operations seamless.",
  },
  {
    icon: MessageSquareWarning,
    title: "Complaint System",
    desc: "Residents raise tickets; admins track, assign, and resolve in minutes.",
  },
  {
    icon: Bell,
    title: "Notifications",
    desc: "Real-time alerts via push, email, and SMS so nobody misses a thing.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    desc: "A single command center for collections, occupancy, and operations.",
  },
  {
    icon: ScrollText,
    title: "Audit Logs",
    desc: "Every action recorded — transparent, searchable, and tamper-evident.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest uppercase text-accent">
            Features
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Everything your society needs, in one place
          </h2>
          <p className="mt-4 text-muted-foreground">
            Replace spreadsheets, WhatsApp groups, and ledgers with a single
            platform built for residents, admins, and committees.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group relative h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
                  style={{
                    background:
                      "radial-gradient(400px circle at 50% 0%, oklch(0.68 0.12 195 / 0.18), transparent 60%)",
                  }}
                />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition group-hover:scale-110">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
