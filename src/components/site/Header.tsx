import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Zap, LogOut, User } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/classes", label: "Classes" },
  { to: "/trainers", label: "Trainers" },
  { to: "/membership", label: "Membership" },
  { to: "/schedule", label: "Schedule" },
  { to: "/gallery", label: "Gallery" },
  { to: "/transformations", label: "Results" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 font-display text-xl tracking-wider"
        >
          <span className="grid h-9 w-9 place-items-center bg-primary text-primary-foreground">
            <Zap className="h-5 w-5" />
          </span>
          <span>
            GIGGLER <span className="text-primary">BOXING GYM</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.slice(0, 8).map((n) => (
            <a
              key={n.to}
              to={n.to}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: n.to === "/" }}
            >
                {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
