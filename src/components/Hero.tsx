import { motion, useReducedMotion } from "motion/react"
import { ArrowDownRight, ArrowUpRight } from "@phosphor-icons/react"
import { profile } from "../data/content"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden border-b border-line"
    >
      <div className="absolute inset-0">
        <img
          src="./images/hero-atmosphere.png"
          alt=""
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
      </div>

      <div className="page-shell relative grid min-h-[100dvh] items-end pb-16 pt-24 md:items-center md:pb-20 md:pt-20">
        <div className="max-w-3xl">
          <motion.p
            className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-accent"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile.role} · Argentina
          </motion.p>

          <motion.h1
            className="text-balance text-4xl font-medium tracking-tighter text-paper md:text-6xl lg:text-7xl leading-[1.05]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-[38ch] text-base leading-relaxed text-mute md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            {profile.headline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <a
              href="#proyectos"
              className="inline-flex h-11 items-center gap-2 rounded-[12px] bg-accent px-5 text-sm font-medium text-ink transition-transform active:scale-[0.98] hover:bg-accent/90"
            >
              Ver proyectos
              <ArrowDownRight size={16} weight="bold" />
            </a>
            <a
              href={profile.githubPrimary}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-[12px] border border-line bg-ink-elevated/70 px-5 text-sm text-paper transition-colors hover:border-accent/40"
            >
              GitHub
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
