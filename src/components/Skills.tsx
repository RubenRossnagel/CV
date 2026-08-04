import { skills } from "../data/content"
import { Reveal } from "./Reveal"

const row = [
  ...skills.languages,
  ...skills.data,
  ...skills.tools,
]

export function Skills() {
  return (
    <section className="overflow-hidden border-b border-line py-16 md:py-20" aria-label="Stack">
      <Reveal className="page-shell mb-10">
        <h2 className="text-2xl font-medium tracking-tight text-paper md:text-3xl">
          Stack con el que trabajo
        </h2>
        <p className="mt-3 max-w-[50ch] text-sm leading-relaxed text-mute md:text-base">
          C#, SQL y el ecosistema .NET, con experiencia práctica en Windows,
          bases de datos y herramientas de desarrollo.
        </p>
      </Reveal>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />
        <div className="skills-marquee">
          {[...row, ...row].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex shrink-0 items-center rounded-[12px] border border-line bg-ink-soft px-4 py-2 font-mono text-sm text-paper"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
