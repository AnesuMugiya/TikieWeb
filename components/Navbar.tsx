"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Bookmark, User, Grid3x3, Plus } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
  icon: React.FC<{ className?: string }>;
}

interface CauseItem {
  label: string;
  color: string;
  href: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: "Home",       href: "/",          icon: Home       },
  { label: "Explore",    href: "/explore",   icon: Search     },
  { label: "Categories", href: "/categories",icon: Grid3x3    },
  { label: "Saved",      href: "/saved",     icon: Bookmark   },
];

const CAUSES: CauseItem[] = [
  { label: "Hunger relief",  color: "#4a6e38", href: "/causes/hunger-relief"  },
  { label: "Animal welfare", color: "#6e4a38", href: "/causes/animal-welfare" },
  { label: "Education",      color: "#38566e", href: "/causes/education"      },
  { label: "Conservation",   color: "#6e386a", href: "/causes/conservation"   },
];

// ─── Icons ───────────────────────────────────────────────────────────────────

function TikieLogo() {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <div
        className="w-7 h-7 rounded-[7px] flex items-center justify-content-center"
        style={{ background: "#4a6e38" }}
      >
        <span className="text-white font-medium text-[12px] w-full text-center leading-7">
          T
        </span>
      </div>
      <span className="text-base font-medium text-[var(--tk-text)]">tikie</span>
    </div>
  );
}

// ─── Sidebar (desktop) ───────────────────────────────────────────────────────

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden lg:flex flex-col gap-1 w-[220px] flex-shrink-0 h-screen sticky top-0
                 border-r border-[var(--tk-border)] bg-white px-3 py-5"
      style={{ borderColor: "rgba(0,0,0,0.1)" }}
    >
      {/* Logo */}
      <div className="px-3 mb-4">
        <Link href="/">
          <TikieLogo />
        </Link>
      </div>

      {/* Browse section */}
      <p className="text-[11px] font-medium tracking-widest px-3 mb-1"
         style={{ color: "#9b9b9b", letterSpacing: "0.06em" }}>
        BROWSE
      </p>

      {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-[10px] px-3 py-[9px] rounded-[9px] text-sm
                       transition-colors duration-100"
            style={{
              background: active ? "#eef3e9" : "transparent",
              color:      active ? "#2d4a20" : "#6b6b6b",
              fontWeight: active ? 500 : 400,
            }}
          >
            <Icon
              className="w-4 h-4 flex-shrink-0"
              style={{ stroke: active ? "#4a6e38" : "#6b6b6b" }}
            />
            {label}
          </Link>
        );
      })}

      {/* Causes section */}
      <p className="text-[11px] font-medium tracking-widest px-3 mt-4 mb-1"
         style={{ color: "#9b9b9b", letterSpacing: "0.06em" }}>
        CAUSES
      </p>

      {CAUSES.map(({ label, color, href }) => (
        <Link
          key={href}
          href={href}
          className="flex items-center gap-[10px] px-3 py-[9px] rounded-[9px] text-[13px]
                     transition-colors duration-100 hover:bg-[#f5f5f3]"
          style={{ color: "#6b6b6b" }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: color }}
          />
          {label}
        </Link>
      ))}

      {/* Footer actions */}
      <div
        className="mt-auto pt-4 flex flex-col gap-1"
        style={{ borderTop: "0.5px solid rgba(0,0,0,0.1)" }}
      >
        <Link
          href="/sign-in"
          className="flex items-center gap-[10px] px-3 py-[9px] rounded-[9px] text-[13px]
                     transition-colors duration-100 hover:bg-[#f5f5f3]"
          style={{ color: "#6b6b6b" }}
        >
          <User className="w-4 h-4 flex-shrink-0" style={{ stroke: "#6b6b6b" }} />
          Sign in
        </Link>

        <Link
          href="/sell"
          className="flex items-center gap-[10px] px-3 py-[9px] rounded-[9px] text-[13px]
                     font-medium transition-colors duration-100 hover:bg-[#eef3e9]"
          style={{ color: "#4a6e38" }}
        >
          <Plus className="w-4 h-4 flex-shrink-0" style={{ stroke: "#4a6e38" }} />
          Sell on Tikie
        </Link>
      </div>
    </aside>
  );
}

// ─── Top bar (mobile + shared search bar on desktop) ─────────────────────────

function Topbar() {
  return (
    <header
      className="sticky top-0 z-40 bg-white flex items-center justify-between gap-3
                 px-4 lg:px-5 py-3 lg:py-[12px]"
      style={{ borderBottom: "0.5px solid rgba(0,0,0,0.1)" }}
    >
      {/* Logo — visible on mobile only (desktop logo is in sidebar) */}
      <div className="lg:hidden flex-shrink-0">
        <Link href="/">
          <TikieLogo />
        </Link>
      </div>

      {/* Search bar */}
      <div
        className="flex-1 max-w-[480px] flex items-center gap-2 rounded-[9px] px-3 py-2"
        style={{
          background:  "#f5f5f3",
          border:      "0.5px solid rgba(0,0,0,0.1)",
        }}
      >
        <Search className="w-[14px] h-[14px] flex-shrink-0 opacity-40" />
        <span className="text-[13px]" style={{ color: "#9b9b9b" }}>
          Search products, stores, causes...
        </span>
      </div>

      {/* Auth buttons — visible on all screen sizes */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <Link
          href="/sign-in"
          className="hidden sm:block text-[12px] px-[14px] py-[7px] rounded-[8px]
                     transition-colors hover:bg-[#f5f5f3]"
          style={{
            border: "0.5px solid rgba(0,0,0,0.15)",
            color:  "#1a1a1a",
          }}
        >
          Sign in
        </Link>
        <Link
          href="/get-started"
          className="text-[12px] font-medium px-[14px] py-[7px] rounded-[8px]
                     text-white transition-opacity hover:opacity-90"
          style={{ background: "#4a6e38" }}
        >
          Get started
        </Link>
      </div>
    </header>
  );
}

// ─── Bottom nav (mobile only) ─────────────────────────────────────────────────

function BottomNav() {
  const pathname = usePathname();

  const bottomItems = NAV_ITEMS.filter((item) =>
    ["/", "/explore", "/saved"].includes(item.href)
  ).concat([{ label: "Profile", href: "/profile", icon: User }]);

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex justify-around
                 bg-white pb-safe-area-inset-bottom"
      style={{ borderTop: "0.5px solid rgba(0,0,0,0.1)" }}
    >
      {bottomItems.map(({ label, href, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-[3px] py-[10px] px-3
                       min-w-[60px] transition-opacity"
          >
            <Icon
              className="w-5 h-5"
              style={{ stroke: active ? "#4a6e38" : "#9b9b9b" }}
            />
            <span
              className="text-[10px] font-medium"
              style={{ color: active ? "#4a6e38" : "#9b9b9b" }}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

/**
 * Navbar — responsive navigation for Tikie.
 *
 * Layout behaviour:
 *   mobile  (<lg): sticky Topbar at top  +  fixed BottomNav at bottom
 *   desktop (≥lg): sticky Topbar at top  +  Sidebar on the left (sticky, full height)
 *
 * Usage in your root layout:
 *
 *   <div className="flex min-h-screen">
 *     <Navbar />                          ← renders sidebar on desktop
 *     <div className="flex-1 flex flex-col">
 *       <NavbarTopbar />                  ← renders topbar (exported separately)
 *       <main className="flex-1 pb-16 lg:pb-0">{children}</main>
 *       <NavbarBottomNav />               ← renders bottom nav on mobile
 *     </div>
 *   </div>
 *
 * Or use the combined <Navbar /> which renders all three pieces together
 * when wrapped in the layout pattern below.
 */
export default function Navbar() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
      </div>
      <BottomNav />
    </>
  );
}

// Named exports for granular usage
export { Sidebar, Topbar, BottomNav, TikieLogo };