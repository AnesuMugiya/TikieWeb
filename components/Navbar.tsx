"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

// ─── Nav Constants ────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Features",
    href: "/features",
    dropdown: [
      { label: "Collaboration", href: "/features/collaboration" },
      { label: "Automation", href: "/features/automation" },
      { label: "Integrations", href: "/features/integrations" },
      { label: "Security", href: "/features/security" },
    ],
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Analytics", href: "/analytics" },
  { label: "Pricing", href: "/pricing" },
] as const;

// ─── Types ────────────────────────────────────────────────────────────────────

type DropdownItem = { label: string; href: string };

// ─── Logo ─────────────────────────────────────────────────────────────────────

function SocioraLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group select-none">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#2d5a3d] transition-transform duration-300 group-hover:rotate-12"
      >
        <line x1="9"  y1="2"  x2="7"  y2="26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="21" y1="2"  x2="19" y2="26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="3"  y1="10" x2="25" y2="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="2"  y1="18" x2="24" y2="18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="text-[1.15rem] font-semibold tracking-tight text-gray-900">
        Sociora
      </span>
    </Link>
  );
}

// ─── Desktop Dropdown Panel ───────────────────────────────────────────────────

function DropdownMenu({ items }: { items: readonly DropdownItem[] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl border border-gray-100 bg-white shadow-lg shadow-gray-200/70 py-1.5 z-50">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

// ─── Desktop Nav Item ─────────────────────────────────────────────────────────

function NavItem({
  link,
  active,
}: {
  link: (typeof NAV_LINKS)[number];
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const hasDropdown = "dropdown" in link;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {hasDropdown ? (
        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex items-center gap-1 text-sm font-medium transition-colors px-1 py-1 ${
            active ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          {link.label}
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
      ) : (
        <Link
          href={link.href}
          className={`text-sm font-medium transition-colors px-1 py-1 ${
            active ? "text-gray-900 font-semibold" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          {link.label}
        </Link>
      )}

      {hasDropdown && open && (
        <DropdownMenu
          items={(link as { dropdown: readonly DropdownItem[] }).dropdown}
        />
      )}
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar({ activePath = "/" }: { activePath?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className="w-full bg-[#f0f4f2]/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-40">
      {/* ── Top bar ── */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        <SocioraLogo />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavItem link={link} active={activePath === link.href} />
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 hover:bg-gray-700 active:scale-95 transition-all duration-150"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger — visible only below md */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          className="flex md:hidden items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile drawer ──
           The drawer is JS-gated (only in DOM when mobileOpen=true).
           We intentionally avoid md:hidden here — it can conflict with
           Tailwind's JIT purging and suppress the panel on small screens. */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-6 pt-3 shadow-lg space-y-0.5">
          {NAV_LINKS.map((link) => {
            const hasDropdown = "dropdown" in link;
            const isExpanded = mobileExpanded === link.label;

            return (
              <div key={link.href} className="border-b border-gray-50 last:border-none">
                {hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(isExpanded ? null : link.label)
                      }
                      className="flex w-full items-center justify-between py-3 text-sm font-medium text-gray-800"
                    >
                      {link.label}
                      <ChevronDown
                        size={15}
                        className={`text-gray-400 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="mb-2 ml-2 space-y-0.5 border-l-2 border-gray-100 pl-3">
                        {(link as { dropdown: readonly DropdownItem[] }).dropdown.map(
                          (item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobile}
                              className="block py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                            >
                              {item.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="block py-3 text-sm font-medium text-gray-800 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Mobile CTA */}
          <div className="flex flex-col gap-3 pt-4">
            <Link
              href="/login"
              onClick={closeMobile}
              className="block text-center text-sm font-medium text-gray-700 hover:text-gray-900 py-2.5 border border-gray-200 rounded-lg transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={closeMobile}
              className="block text-center rounded-lg bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 hover:bg-gray-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}