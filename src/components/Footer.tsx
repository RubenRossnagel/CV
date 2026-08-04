import { profile } from "../data/content"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-8">
      <div className="page-shell">
        <p className="font-mono text-xs text-mute">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  )
}
