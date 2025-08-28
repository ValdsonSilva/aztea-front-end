export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-[var(--footer-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
        <p className="text-left text-[var(--black)] text-base">
          © 2025 AZTEA Media
        </p>
        <nav className="flex flex-wrap items-center gap-4">
          <a className="hover:text-white text-[var(--black)] text-base" href="#">About</a>
          <a className="hover:text-white text-[var(--black)] text-base" href="#">Privacy Policy</a>
          <a className="hover:text-white text-[var(--black)] text-base" href="#">Terms of use</a>
          <a className="hover:text-white text-[var(--black)] text-base" href="mailto:contact@azteamedia.com">contact@azteamedia.com</a>
        </nav>
      </div>
    </footer>
  );
}
