import { Layout } from "../components/layout/Layout";

export function Privacy() {
  return (
    <Layout>
      <div className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-serif text-primary mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <p>This is a placeholder page for the Aalia Systems Privacy Policy.</p>
            <p>
              Aalia Systems respects your privacy and is committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you 
              visit our website and tell you about your privacy rights.
            </p>
            <h3>Data Collection</h3>
            <p>
              We only collect data necessary to provide our services. We do not sell your personal information.
              Aalia Systems does not store or process Protected Health Information (PHI) or raw credit card data. 
              All payments are processed securely via third-party providers such as Square.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
