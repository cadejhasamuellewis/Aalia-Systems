import { Layout } from "../components/layout/Layout";

export function Terms() {
  return (
    <Layout>
      <div className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-serif text-primary mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <p>This is a placeholder page for the Aalia Systems Terms of Service.</p>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provision of this agreement.
            </p>
            <h3>Service Scope</h3>
            <p>
              Aalia Systems provides website design, development, and ongoing technical management. We do not 
              provide legal, tax, or clinical advice. We cannot guarantee specific SEO rankings or 
              absolute immunity from cybersecurity threats, though we employ industry standard practices 
              to mitigate risk.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
