import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import dashboard from "@/assets/dashboard-mock.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <motion.div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full -z-10"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.12 195 / 0.25), transparent 60%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Multi-tenant • Real-time • Secure
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]"
            >
              Simplify Society Living with{" "}
              <span className="text-gradient-brand">MySocivo</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              Manage residents, billing, visitors, and operations — all in one
              modern platform built for the way communities actually live.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold transition hover:opacity-90 glow-accent"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#preview"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/60 text-accent px-6 py-3 text-sm font-semibold transition hover:bg-accent/10"
              >
                <PlayCircle className="h-4 w-4" />
                View Demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 justify-center lg:justify-start text-xs text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
                Trusted by modern societies
              </div>
              <div>99.9% uptime</div>
              <div>SOC-2 ready</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-accent/10 blur-3xl" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl glass overflow-hidden shadow-card"
            >
              <img
                src={dashboard}
                alt="MySocivo dashboard preview"
                width={1280}
                height={896}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
