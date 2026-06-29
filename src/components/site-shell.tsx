import Link from 'next/link';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/for-schools', label: 'For Schools' },
  { href: '/for-partners', label: 'For Partners' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/contact', label: 'Contact Us' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-teal-600 text-sm font-bold text-white">
            BC
          </div>
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-xl font-bold text-transparent">
            BeyondClassrooms
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/for-schools"
          className="rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-md">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-teal-600 text-sm font-bold text-white">
              BC
            </div>
            <span className="text-xl font-bold">BeyondClassrooms</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Connecting schools and industry partners through curriculum-aligned, real-world learning experiences.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/for-schools" className="transition hover:text-white">
                  For Schools
                </Link>
              </li>
              <li>
                <Link href="/for-partners" className="transition hover:text-white">
                  For Partners
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="transition hover:text-white">
                  Experiences
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:hello@beyondclassrooms.com" className="transition hover:text-white">
                  hello@beyondclassrooms.com
                </a>
              </li>
              <li>
                <a href="tel:+611300000000" className="transition hover:text-white">
                  +61 1300 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
