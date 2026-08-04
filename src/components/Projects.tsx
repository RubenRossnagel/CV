import { ArrowUpRight } from "@phosphor-icons/react"
import { projects } from "../data/content"
import { Reveal } from "./Reveal"

export function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="proyectos" className="border-b border-line py-20 md:py-28">
      <div className="page-shell">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight text-paper md:text-5xl">
            Proyectos seleccionados
          </h2>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-mute">
            Trabajo propio y repos públicos en C#, .NET, APIs y sistemas de
            gestión. Código vivo en GitHub.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <a
              href={featured.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-[12px] border border-line bg-ink-elevated transition-colors hover:border-accent/40"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={featured.image}
                  alt={`Vista del proyecto ${featured.title}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-5 md:p-6">
                <div>
                  <h3 className="text-xl font-medium text-paper md:text-2xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-mute">
                    {featured.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-mute"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  weight="bold"
                  className="mt-1 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </a>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            {rest.slice(0, 2).map((project, index) => (
              <Reveal key={project.title} delay={0.08 + index * 0.05}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-line bg-ink-soft transition-colors hover:border-accent/40"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`Vista del proyecto ${project.title}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-3 p-5">
                    <div>
                      <h3 className="text-lg font-medium text-paper">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-mute">
                        {project.blurb}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      weight="bold"
                      className="mt-1 shrink-0 text-accent"
                    />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:col-span-12" delay={0.12}>
            <a
              href={rest[2].href}
              target="_blank"
              rel="noreferrer"
              className="group grid overflow-hidden rounded-[12px] border border-line bg-ink-elevated transition-colors hover:border-accent/40 md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="aspect-[16/10] md:aspect-auto md:min-h-[240px]">
                <img
                  src={rest[2].image}
                  alt={`Vista del proyecto ${rest[2].title}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-5 md:p-8">
                <div>
                  <h3 className="text-xl font-medium text-paper md:text-2xl">
                    {rest[2].title}
                  </h3>
                  <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-mute md:text-base">
                    {rest[2].blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {rest[2].stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-mute"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  weight="bold"
                  className="mt-1 shrink-0 text-accent"
                />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
