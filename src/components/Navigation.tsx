import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { href: "#dogodek", label: "Dogodek" },
    { href: "#pesem-na-teden", label: "Pesem na teden" },
    { href: "#o-meni", label: "O meni" },
    { href: "#clanek", label: "V medijih" },
  ];

  const handleNavClick = (href: string) => {
    if (isHome) {
      // On home page, scroll to section
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // On subpage, close menu and let Link handle it
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-foreground text-xl">Center Connect</Link>

        <div className="hidden md:flex gap-8">
          {links.map((l) => 
            isHome ? (
              <a 
                key={l.href} 
                href={l.href} 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(l.href);
                }}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link 
                key={l.href}
                to="/" 
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meni"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          {links.map((l) => 
            isHome ? (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(l.href);
                  setMenuOpen(false);
                }}
                className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
