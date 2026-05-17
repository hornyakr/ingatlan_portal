// components/layout/navbar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Ingatlanok", href: "/properties", match: "/properties" },
  { label: "Szakemberek", href: "/agents", match: "/agents" },
  { label: "Irodák", href: "/offices", match: "/offices" },
  { label: "Cégeknek", href: "/for-business", match: "/for-business" },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (match: string): boolean => pathname.startsWith(match);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nav/95 backdrop-blur border-b border-nav-border bg-nav text-nav-foreground">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Building2 className="h-4 w-4" />
          </span>
          <span className="text-lg font-medium">photo</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-sm px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive(item.match) && "bg-primary text-primary-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="hidden rounded-full px-7 md:inline-flex">
          <Link href="/dashboard/ingatlanjaim">Ingatlanjaim</Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <nav className="mt-8 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-foreground",
                    isActive(item.match) && "bg-primary text-primary-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <Button asChild className="mt-4">
                <Link href="/dashboard/ingatlanjaim">Ingatlanjaim</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}