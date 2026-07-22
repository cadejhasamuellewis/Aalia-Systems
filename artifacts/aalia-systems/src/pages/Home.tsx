import { Layout } from "../components/layout/Layout";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Home() {
  return (
    <Layout>
      {/* SECTION 1: Hero */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--secondary)),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-7xl font-serif leading-tight text-primary mb-6">
              Your website, <br className="hidden lg:block" />built and managed with structure.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Aalia builds professional websites and gives clients organized options for handoff, monthly management, custom documents, and long-term digital support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/start" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Start a project
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
                View services
              </Link>
            </div>
          </div>
          
          <div className="relative lg:ml-auto w-full max-w-md">
            <div className="frosted-glass rounded-2xl p-8 relative z-10 border border-white/60">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">System Status</span>
                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              </div>
              <ul className="space-y-5">
                {[
                  "Website online",
                  "Domain connected",
                  "SSL active",
                  "Update request open",
                  "Client files ready",
                  "Square invoice paid",
                  "Approved edits available"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm text-foreground font-medium">
                    <CheckCircle2 size={18} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-4 font-medium uppercase tracking-widest">
              Sample client platform preview
            </p>
            
            {/* Decorative background elements */}
            <div className="absolute top-1/2 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* SECTION 2: Four Core Offers */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4">Choose the support level your business needs.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 border border-border/50 rounded-xl hover:border-border transition-colors bg-background/50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-6 block">01</span>
                <h3 className="text-2xl font-serif text-primary mb-4">Website Project</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A custom website or redesign built for your business, then prepared for handoff.
                </p>
              </div>
            </div>
            <div className="p-10 border border-border/50 rounded-xl hover:border-border transition-colors bg-background/50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-6 block">02</span>
                <h3 className="text-2xl font-serif text-primary mb-4">Managed Website</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ongoing website management for updates, files, domain notes, SSL checks, invoices, and support.
                </p>
              </div>
            </div>
            <div className="p-10 border border-border/50 rounded-xl hover:border-border transition-colors bg-background/50 flex flex-col justify-between md:flex-row md:col-span-2 gap-8 items-center">
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-6 block">03</span>
                <h3 className="text-2xl font-serif text-primary mb-4">Custom Documents + Forms</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                  Branded fillable forms, intake documents, PDFs, email templates, service agreements, and business files.
                </p>
              </div>
            </div>
            <div className="p-10 border border-border/50 rounded-xl hover:border-border transition-colors bg-background/50 flex flex-col justify-between md:flex-row md:col-span-2 gap-8 items-center">
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-6 block">04</span>
                <h3 className="text-2xl font-serif text-primary mb-4">Long-Term Support Contract</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                  Ongoing digital support for businesses that need a steady website and systems partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Client Platform Preview */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-secondary/30" />
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-6">A private platform for managed clients.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clients can view website status, submit requests, upload files, view invoices, manage subscriptions, and edit approved content areas without touching code.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-6">
          <div className="frosted-glass rounded-xl shadow-xl overflow-hidden border border-white/60">
            <div className="flex border-b border-border/50 bg-white/40 px-4">
              {["Website Status", "Requests", "Files", "Invoices", "Subscriptions", "Approved Edits", "Support"].map((tab, i) => (
                <div key={i} className={`px-4 py-4 text-xs font-medium ${i === 0 ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}>
                  {tab}
                </div>
              ))}
            </div>
            <div className="p-8 lg:p-12 bg-white/60 grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-serif text-xl text-primary mb-6">Website Overview</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-lg bg-white border border-border/50">
                    <span className="text-sm font-medium">Uptime Monitoring</span>
                    <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">100% Online</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-white border border-border/50">
                    <span className="text-sm font-medium">Latest Backup</span>
                    <span className="text-xs text-muted-foreground">Today at 3:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-white border border-border/50">
                    <span className="text-sm font-medium">Domain Renewal</span>
                    <span className="text-xs text-muted-foreground">Oct 24, 2025</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-serif text-xl text-primary mb-6">Recent Activity</h4>
                <div className="space-y-4 relative before:absolute before:inset-y-2 before:left-2 before:w-px before:bg-border">
                  {[
                    { title: "Monthly management report available", date: "Oct 1" },
                    { title: "Invoice #1042 paid", date: "Sep 28" },
                    { title: "Content edit request completed", date: "Sep 22" },
                  ].map((event, i) => (
                    <div key={i} className="relative pl-8">
                      <div className="absolute left-[5px] top-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                      <p className="text-sm font-medium text-foreground">{event.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{event.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Brand-Safe Editing */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-6">
              Edit approved content without breaking your website.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Managed clients can update approved text, images, hours, announcements, and service details while the layout, code, colors, spacing, and brand system stay protected.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary font-serif text-sm shrink-0">1</div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Choose an approved section</h4>
                  <p className="text-sm text-muted-foreground">Select a pre-approved area of your site to modify.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary font-serif text-sm shrink-0">2</div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Edit and preview</h4>
                  <p className="text-sm text-muted-foreground">Make your changes and see how they look instantly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary font-serif text-sm shrink-0">3</div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Publish or submit for review</h4>
                  <p className="text-sm text-muted-foreground">Push live immediately or send to Aalia for a quick check.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Protected Elements</p>
              <div className="flex flex-wrap gap-2">
                {["Code", "Layout", "Colors", "Fonts", "Spacing", "Hosting", "DNS", "Payment settings"].map((item, i) => (
                  <span key={i} className="px-3 py-1.5 rounded bg-card border border-border text-xs text-foreground font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="frosted-glass rounded-xl border border-white/60 p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Editing Page</p>
                  <p className="font-medium text-sm">Home / Announcement Bar</p>
                </div>
                <span className="px-2 py-1 rounded bg-amber-50 text-amber-700 text-xs font-medium border border-amber-200">
                  Draft
                </span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div>
                  <label className="text-xs font-medium text-foreground block mb-2">Holiday hours text</label>
                  <div className="w-full h-24 rounded-md border border-border bg-white p-3 text-sm text-muted-foreground">
                    We will be closed for the upcoming winter holidays from Dec 24th to Jan 2nd.
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <button className="flex-1 py-2 rounded-md bg-white border border-border text-sm font-medium hover:bg-secondary transition-colors">
                  Preview
                </button>
                <button className="flex-1 py-2 rounded-md bg-white border border-border text-sm font-medium hover:bg-secondary transition-colors">
                  Save Draft
                </button>
                <button className="flex-1 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Systems on Display */}
      <section className="py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4">Aalia in Practice</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A closer look at what Aalia can build, organize, and manage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Exhibit 1 */}
            <div className="bg-background border border-border p-8 lg:p-12 rounded-xl group hover:border-accent/30 transition-colors">
              <span className="inline-block px-3 py-1 rounded bg-secondary text-primary text-xs font-medium mb-6">Service 01</span>
              <h3 className="text-2xl font-serif text-primary mb-4">Website Build + Handoff</h3>
              <p className="text-foreground font-medium mb-2">The Foundation</p>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Desktop and mobile website preview, complete page lists, technical handoff checklists, and brand notes.
              </p>
              <div className="aspect-[4/3] bg-secondary/50 rounded-lg border border-border flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">Project Preview</span>
              </div>
            </div>

            {/* Exhibit 2 */}
            <div className="bg-background border border-border p-8 lg:p-12 rounded-xl group hover:border-accent/30 transition-colors">
              <span className="inline-block px-3 py-1 rounded bg-secondary text-primary text-xs font-medium mb-6">Service 02</span>
              <h3 className="text-2xl font-serif text-primary mb-4">Managed Website Platform</h3>
              <p className="text-foreground font-medium mb-2">Ongoing Operations</p>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Dashboard showing website status, domain, SSL, requests, files, invoices, and approved edits.
              </p>
              <div className="aspect-[4/3] bg-secondary/50 rounded-lg border border-border p-6 flex flex-col justify-center">
                <div className="space-y-3 w-full max-w-xs mx-auto">
                  <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Website</span><span className="font-medium">Online</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">SSL</span><span className="font-medium">Active</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Form check</span><span className="font-medium text-emerald-600">Passed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Exhibit 3 */}
            <div className="bg-background border border-border p-8 lg:p-12 rounded-xl group hover:border-accent/30 transition-colors">
              <span className="inline-block px-3 py-1 rounded bg-secondary text-primary text-xs font-medium mb-6">Service 03</span>
              <h3 className="text-2xl font-serif text-primary mb-4">Custom Documents + Forms</h3>
              <p className="text-foreground font-medium mb-2">Business Assets</p>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Fillable forms, intake documents, branded PDFs, email templates, and approval forms.
              </p>
              <div className="aspect-[4/3] bg-secondary/50 rounded-lg border border-border p-6 flex items-center justify-center">
                <div className="w-16 h-24 bg-card shadow-sm border border-border rounded-sm rotate-[-5deg]" />
                <div className="w-20 h-28 bg-card shadow-sm border border-border rounded-sm z-10" />
                <div className="w-16 h-24 bg-card shadow-sm border border-border rounded-sm rotate-[5deg]" />
              </div>
            </div>

            {/* Exhibit 4 */}
            <div className="bg-background border border-border p-8 lg:p-12 rounded-xl group hover:border-accent/30 transition-colors">
              <span className="inline-block px-3 py-1 rounded bg-secondary text-primary text-xs font-medium mb-6">Service 04</span>
              <h3 className="text-2xl font-serif text-primary mb-4">Long-Term Digital Support</h3>
              <p className="text-foreground font-medium mb-2">Reliable Partnership</p>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Support timelines, monthly tasks, open requests, completed updates, and ongoing client notes.
              </p>
              <div className="aspect-[4/3] bg-secondary/50 rounded-lg border border-border p-6 flex gap-4 overflow-hidden items-center justify-center">
                 <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
                   {["Tasks", "Requests", "Timeline", "Notes"].map((item, i) => (
                     <div key={i} className="bg-card border border-border rounded p-3 text-center text-xs font-medium">
                       {item}
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Pricing Preview */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4">Simple, predictable pricing.</h2>
              <p className="text-muted-foreground text-lg">Clear scopes. No surprise fees.</p>
            </div>
            <Link href="/pricing" className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors">
              View full details <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-border rounded-xl flex flex-col">
              <h3 className="font-serif text-xl mb-2">Website Project</h3>
              <p className="text-sm text-muted-foreground mb-8">For a new website or redesign.</p>
              <div className="mt-auto font-medium text-foreground">Starting at $3,500</div>
            </div>
            <div className="p-8 border border-border rounded-xl flex flex-col">
              <h3 className="font-serif text-xl mb-2">Managed Website</h3>
              <p className="text-sm text-muted-foreground mb-8">Monthly website management.</p>
              <div className="mt-auto font-medium text-foreground">Monthly from $150</div>
            </div>
            <div className="p-8 border border-border rounded-xl flex flex-col">
              <h3 className="font-serif text-xl mb-2">Custom Documents + Forms</h3>
              <p className="text-sm text-muted-foreground mb-8">Forms, branded PDFs, email templates, and business files.</p>
              <div className="mt-auto font-medium text-foreground">Custom quote</div>
            </div>
            <div className="p-8 border border-border rounded-xl flex flex-col">
              <h3 className="font-serif text-xl mb-2">Long-Term Support Contract</h3>
              <p className="text-sm text-muted-foreground mb-8">Ongoing support for regular website and digital systems help.</p>
              <div className="mt-auto font-medium text-foreground">Contract quote</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Final CTA */}
      <section className="py-32 bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-serif mb-8">Ready to bring order to your web presence?</h2>
          <p className="text-primary-foreground/80 text-lg mb-12 max-w-xl mx-auto">
            Reach out to discuss a custom build, or step into a management plan for an existing site.
          </p>
          <Link href="/start" className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors text-lg">
            Start a project
          </Link>
        </div>
      </section>
    </Layout>
  );
}
