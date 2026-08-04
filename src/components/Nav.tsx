import { useEffect, useState } from "react"
import { List, X } from "@phosphor-icons/react"
import { nav, profile } from "../data/content"

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="page-shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-mono text-sm tracking-tight text-paper">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
          {profile.name.split(" ")[1]}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-mute transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="inline-flex h-10 items-center rounded-[12px] bg-accent px-4 text-sm font-medium text-ink transition-transform active:scale-[0.98] hover:bg-accent/90"
          >
            Escribime
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-line text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-ink px-4 pb-6 pt-4 lg:hidden"
        >
          <div className="page-shell flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg text-paper"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="inline-flex h-11 items-center justify-center rounded-[12px] bg-accent text-sm font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Escribime
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
