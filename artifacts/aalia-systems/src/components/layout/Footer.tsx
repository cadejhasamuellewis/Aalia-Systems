import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl tracking-tight text-foreground mb-4">
              Aalia Systems
            </h2>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Website management studio. Custom websites, redesigns, and monthly management for small businesses that value quiet competence and refined systems.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Studio
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-sm text-foreground hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-sm text-foreground hover:text-accent transition-colors">
                  Managed Websites
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-sm text-foreground hover:text-accent transition-colors">
                  Client Platform
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-foreground hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Connect
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/start" className="text-sm text-foreground hover:text-accent transition-colors">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-foreground hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-foreground hover:text-accent transition-colors">
                  Client Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Aalia Systems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
