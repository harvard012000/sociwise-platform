import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import billing from "@/assets/preview-billing.png";
import complaints from "@/assets/preview-complaints.png";
import visitors from "@/assets/preview-visitors.png";
import charts from "@/assets/preview-charts.png";

const tabs = [
  { id: "billing", label: "Billing Cards", img: billing },
  { id: "complaints", label: "Complaints", img: complaints },
  { id: "visitors", label: "Visitor Table", img: visitors },
  { id: "charts", label: "Charts", img: charts },
];

export function ProductPreview() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="preview" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest uppercase text-accent">
            Product preview
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            A workspace built for clarity
          </h2>
          <p className="mt-4 text-muted-foreground">
            Switch between modules and see how MySocivo brings every workflow
            together.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  active.id === t.id
                    ? "bg-accent text-accent-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-6 relative rounded-2xl glass p-2 md:p-3 shadow-card overflow-hidden">
            <div className="absolute -inset-8 -z-10 bg-radial-fade opacity-60" />
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.img}
                alt={`${active.label} preview`}
                width={896}
                height={640}
                loading="lazy"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="w-full h-auto rounded-xl"
              />
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
