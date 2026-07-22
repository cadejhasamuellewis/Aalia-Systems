import { Layout } from "../components/layout/Layout";

export function About() {
  return (
    <Layout>
      <div className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-8">About Aalia Systems</h1>
          
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed">
            <p className="text-xl text-foreground font-medium mb-12">
              Aalia Systems is a boutique website management studio dedicated to building and sustaining professional digital spaces for small businesses.
            </p>

            <div className="h-px bg-border w-full my-12" />

            <h2>The Philosophy</h2>
            <p>
              We believe a website is not a static piece of marketing collateral—it is a living system. Too often, small businesses invest heavily in a launch, only to let the site languish because they lack the time or technical confidence to maintain it. 
            </p>
            <p>
              Aalia Systems exists to solve this. We build clean, intentional websites and provide the quiet, rigorous back-office management required to keep them secure, updated, and aligned with your brand over time.
            </p>

            <h2>A Woman-Owned Studio</h2>
            <p>
              Founded on the principles of meticulous organization and calm competence, our studio operates as an extension of your own business. We handle the technical infrastructure, domain notes, and content updates so you can focus entirely on your work, knowing your digital presence is managed by someone who cares about the details.
            </p>

            <h2>Design-Led Systems</h2>
            <p>
              Functionality shouldn't come at the cost of aesthetics. Our client platform is designed to be as refined and pleasing to use as the public-facing websites we build. We reject the cluttered, enterprise-software look in favor of frosted panels, clear hierarchy, and beautiful typography. Every interaction is meant to feel curated.
            </p>

            <div className="mt-16 p-8 bg-card border border-border rounded-xl">
              <h3 className="text-xl font-serif text-primary mt-0 mb-4">A note on our scope:</h3>
              <p className="text-sm m-0">
                While we build robust systems for our clients, we maintain clear boundaries. Aalia Systems does not store Protected Health Information (PHI) or credit card data (all payments run securely through Square). We build the vessel; you retain control of your critical business data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
