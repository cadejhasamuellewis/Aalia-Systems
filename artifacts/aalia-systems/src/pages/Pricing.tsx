import { Layout } from "../components/layout/Layout";
import { Link } from "wouter";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <Layout>
      <div className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Pricing & Plans</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent investments for professional design and meticulous ongoing management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Plan 1 */}
            <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
              <h2 className="text-2xl font-serif text-primary mb-2">Website Project</h2>
              <p className="text-sm text-muted-foreground mb-6">One-time build or redesign.</p>
              <div className="mb-8">
                <span className="text-sm text-muted-foreground">Starting at</span>
                <div className="text-3xl font-medium text-foreground mt-1">$3,500</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Custom design & development",
                  "Mobile-responsive layouts",
                  "Contact & inquiry flows",
                  "Basic SEO setup",
                  "Pre-launch testing"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground">
                    <Check size={18} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/start" className="w-full inline-flex items-center justify-center h-12 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
                Inquire
              </Link>
            </div>

            {/* Plan 2 */}
            <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
              <h2 className="text-2xl font-serif text-primary mb-2">Managed Website</h2>
              <p className="text-sm text-muted-foreground mb-6">Monthly website management.</p>
              <div className="mb-8">
                <span className="text-sm text-muted-foreground">Monthly from</span>
                <div className="text-3xl font-medium text-foreground mt-1">$150</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Routine software updates",
                  "Security monitoring",
                  "Uptime tracking",
                  "Domain & SSL tracking",
                  "Client dashboard access"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground">
                    <Check size={18} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/start" className="w-full inline-flex items-center justify-center h-12 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
                Inquire
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
              <h2 className="text-2xl font-serif text-primary mb-2">Custom Documents</h2>
              <p className="text-sm text-muted-foreground mb-6">Forms, branded PDFs, email templates.</p>
              <div className="mb-8">
                <span className="text-sm text-muted-foreground">Investment</span>
                <div className="text-3xl font-medium text-foreground mt-1">Custom quote</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Fillable PDF forms",
                  "Intake documents",
                  "Branded PDFs",
                  "Email templates",
                  "Business files"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground">
                    <Check size={18} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/start" className="w-full inline-flex items-center justify-center h-12 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
                Inquire
              </Link>
            </div>

            {/* Plan 4 */}
            <div className="bg-primary border border-primary rounded-2xl p-8 flex flex-col relative shadow-xl transform lg:-translate-y-4">
              <div className="absolute top-0 inset-x-0 h-1 bg-accent rounded-t-2xl" />
              <h2 className="text-2xl font-serif text-primary-foreground mb-2">Long-Term Support</h2>
              <p className="text-sm text-primary-foreground/80 mb-6">Ongoing support for regular systems help.</p>
              <div className="mb-8">
                <span className="text-sm text-primary-foreground/80">Investment</span>
                <div className="text-3xl font-medium text-primary-foreground mt-1">Contract quote</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Ongoing digital support",
                  "Priority support channel",
                  "Monthly task planning",
                  "Platform support",
                  "Document updates"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-primary-foreground/90">
                    <Check size={18} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/start" className="w-full inline-flex items-center justify-center h-12 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors">
                Inquire
              </Link>
            </div>
          </div>

          <div className="max-w-3xl mx-auto border-t border-border pt-16">
            <h3 className="text-xl font-serif text-primary mb-6">Available Add-ons</h3>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Extra website pages",
                  "Fillable forms",
                  "Email templates",
                  "Basic SEO setup",
                  "Domain/hosting coordination",
                  "Client platform setup",
                  "Additional update requests"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-6 text-center">
              * Note: Payments are processed securely via Square. Aalia Systems does not store your card data.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
