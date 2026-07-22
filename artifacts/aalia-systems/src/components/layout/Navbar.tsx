import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Managed Websites", path: "/care" },
    { label: "Client Platform", path: "/platform" },
    { label: "Pricing", path: "/pricing" },
  ];

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="font-serif text-2xl tracking-tight text-foreground">
            Aalia Systems
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm tracking-wide transition-colors ${
                location === link.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-px h-4 bg-border mx-2" />
          <Link
            href="/start"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Start a Project
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Client Login
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2 -mr-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 bg-background/95 backdrop-blur-xl border-b border-border z-40 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-2xl font-serif ${
                    location === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-border w-full my-4" />
              <Link
                href="/start"
                className="text-xl font-serif text-foreground hover:text-primary"
              >
                Start a Project
              </Link>
              <Link
                href="/dashboard"
                className="text-xl font-serif text-primary mt-4"
              >
                Client Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
