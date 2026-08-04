import { experience } from "../data/content"
import { Reveal } from "./Reveal"

export function Experience() {
  return (
    <section id="experiencia" className="border-b border-line py-20 md:py-28">
      <div className="page-shell">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight text-paper md:text-5xl">
            Experiencia
          </h2>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-mute">
            Trayectoria en soporte, sistemas de gestión y operación de negocio.
            Base útil para backend orientado a productos reales.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.06}>
              <article className="grid gap-6 py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-10">
                <div>
                  <p className="font-mono text-xs text-accent">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-medium tracking-tight text-paper md:text-2xl">
                    {job.company}
                  </h3>
                  <p className="mt-2 text-sm text-mute">{job.role}</p>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-4 text-sm leading-relaxed text-mute before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/70 md:text-base"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
