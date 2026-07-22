import { Layout } from "../components/layout/Layout";
import { Link } from "wouter";
import { ShieldCheck, Activity, Key, FileText, Wrench } from "lucide-react";

export function Care() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Security & Uptime",
      desc: "Continuous monitoring to ensure your site is online and safe from common vulnerabilities."
    },
    {
      icon: Wrench,
      title: "Update Support",
      desc: "Routine software, plugin, and framework updates applied systematically to prevent breakage."
    },
    {
      icon: Key,
      title: "Domain & SSL Tracking",
      desc: "We track your renewals and certificates so your site never unexpectedly goes offline."
    },
    {
      icon: FileText,
      title: "Monthly Management Reports",
      desc: "A clear, plain-English summary of what was done, status checks, and upcoming renewals."
    },
    {
      icon: Activity,
      title: "Performance Checks",
      desc: "Regular audits of page speed and mobile responsiveness to ensure a high-quality user experience."
    }
  ];

  return (
    <Layout>
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Managed Websites</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A website isn't a static flyer—it's software. Monthly management ensures your site remains secure, fast, and functional long after launch, managed quietly in the background so you can focus on your business.
              </p>
              <Link href="/pricing" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                View management plans
              </Link>
            </div>
            <div className="bg-card border border-border p-8 rounded-xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <ShieldCheck size={120} />
              </div>
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">Monthly Report Preview</p>
                <div className="space-y-4">
                  <div className="p-4 bg-background border border-border rounded-lg flex justify-between items-center">
                    <span className="font-medium text-sm">Core Updates</span>
                    <span className="text-xs text-muted-foreground">Completed Oct 1</span>
                  </div>
                  <div className="p-4 bg-background border border-border rounded-lg flex justify-between items-center">
                    <span className="font-medium text-sm">Security Scan</span>
                    <span className="text-xs text-emerald-600 font-medium">Clean</span>
                  </div>
                  <div className="p-4 bg-background border border-border rounded-lg flex justify-between items-center">
                    <span className="font-medium text-sm">Backup Status</span>
                    <span className="text-xs text-muted-foreground">30 stored safely</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="p-8 border border-border bg-background rounded-xl">
                <feature.icon className="text-accent mb-6" size={28} />
                <h3 className="font-serif text-xl text-primary mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
