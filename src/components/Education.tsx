import { courses, education } from "../data/content"
import { Reveal } from "./Reveal"

export function Education() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <div className="page-shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight text-paper md:text-4xl">
            Formación
          </h2>
          <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-mute md:text-base">
            Analista en sistemas, formación técnica y cursos enfocados en .NET,
            bases de datos y desarrollo web.
          </p>

          <div className="mt-8 space-y-6">
            {education.map((item) => (
              <article
                key={item.title}
                className="border-t border-line pt-5 first:border-t-0 first:pt-0"
              >
                <h3 className="text-lg font-medium text-paper">{item.title}</h3>
                <p className="mt-1 text-sm text-mute">{item.place}</p>
                <p className="mt-1 font-mono text-xs text-accent">{item.detail}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[12px] border border-line bg-gradient-to-br from-accent-soft/40 via-ink-elevated to-ink-elevated p-6 md:p-8">
            <h3 className="text-xl font-medium text-paper">Cursos clave</h3>
            <p className="mt-2 text-sm text-mute">
              Platzi, Udemy y Google. Selección orientada a backend y .NET.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {courses.map((course) => (
                <div
                  key={course}
                  className="rounded-[12px] border border-line/80 bg-ink/50 px-3 py-2.5 text-sm text-paper"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
