"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/logs", label: "Logs" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold">Portfolio Hub</Link>
          <nav className="flex items-center gap-4 text-sm">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={active ? "font-semibold underline" : "text-gray-600 hover:text-black"}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}