import Link from "next/link";

const navItems = [
  { label: "Ingatlanok", href: "/ingatlanok" },
  { label: "Szakemberek", href: "/szakemberek" },
  { label: "Irodák", href: "/irodak" },
  { label: "Cégeknek", href: "/cegeknek" },
];

export function Navbar() {
  return (
    <header className="w-full bg-slate-500">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-center gap-8 px-6 text-sm font-medium text-white">
        {navItems.slice(0, 2).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-slate-200"
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="/"
          aria-label="Főoldal"
          className="flex items-center gap-2 rounded bg-slate-700 px-2 py-1 text-xl font-light tracking-tight text-white"
        >
          <span className="h-6 w-3 rounded-sm bg-white" />
          <span>photo</span>
        </Link>

        {navItems.slice(2).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-slate-200"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}