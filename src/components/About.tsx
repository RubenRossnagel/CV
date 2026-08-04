import { ArrowUpRight } from "@phosphor-icons/react"
import { profile, skills } from "../data/content"
import { Reveal } from "./Reveal"

export function About() {
  return (
    <section id="sobre" className="border-b border-line py-20 md:py-28">
      <div className="page-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <h2 className="max-w-[14ch] text-3xl font-medium tracking-tight text-paper md:text-5xl">
            Construyo backends claros para problemas reales.
          </h2>
          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-mute md:text-lg">
            {profile.summary}
          </p>
          <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-mute">
            Vengo de soporte técnico, administración y sistemas de gestión. Esa
            mezcla me ayuda a entender el negocio antes de escribir código.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[12px] border border-line px-4 py-2 text-sm text-paper transition-colors hover:border-accent/40"
            >
              LinkedIn
              <ArrowUpRight size={14} weight="bold" />
            </a>
            <a
              href={profile.platzi}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[12px] border border-line px-4 py-2 text-sm text-paper transition-colors hover:border-accent/40"
            >
              Platzi
              <ArrowUpRight size={14} weight="bold" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-6 rounded-[12px] border border-line bg-ink-elevated p-6 md:p-8">
            <div>
              <p className="font-mono text-xs text-accent">Enfoque</p>
              <ul className="mt-3 grid gap-2">
                {skills.focus.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-2 text-sm text-paper last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-mute">Ubicación</p>
              <p className="mt-2 text-sm text-paper">{profile.location}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
