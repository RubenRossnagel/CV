import { EnvelopeSimple, GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react"
import { profile } from "../data/content"
import { Reveal } from "./Reveal"

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: EnvelopeSimple,
  },
  {
    label: "WhatsApp",
    value: profile.whatsappLabel,
    href: profile.whatsapp,
    icon: WhatsappLogo,
  },
  {
    label: "LinkedIn",
    value: "rubenrossnagel",
    href: profile.linkedin,
    icon: LinkedinLogo,
  },
  {
    label: "GitHub",
    value: "RubenRossnagel",
    href: profile.githubPrimary,
    icon: GithubLogo,
  },
] as const

export function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="page-shell">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Contacto
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-paper md:text-5xl">
              ¿Tenés un rol backend o un proyecto .NET?
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-mute">
              Estoy abierto a oportunidades como desarrollador backend. Escribime
              y coordinamos una charla.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {channels.map((channel, index) => {
            const Icon = channel.icon
            return (
              <Reveal key={channel.label} delay={index * 0.05}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={channel.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group flex items-center gap-4 rounded-[12px] border border-line bg-ink-elevated p-5 transition-colors hover:border-accent/40"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-accent-soft text-accent">
                    <Icon size={22} weight="duotone" />
                  </span>
                  <span>
                    <span className="block text-sm text-mute">{channel.label}</span>
                    <span className="mt-0.5 block text-base text-paper transition-colors group-hover:text-accent">
                      {channel.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
