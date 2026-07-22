import { Layout } from "../components/layout/Layout";
import { Link } from "wouter";

export function Contact() {
  return (
    <Layout>
      <div className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Contact</h1>
          <p className="text-lg text-muted-foreground mb-16">
            We look forward to hearing from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-card border border-border rounded-xl">
              <h2 className="font-serif text-2xl text-primary mb-4">New Projects</h2>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                If you are interested in a new website build, redesign, or entering into a monthly management agreement, please use our inquiry form.
              </p>
              <Link href="/start" className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors text-sm">
                Start a project
              </Link>
            </div>

            <div className="p-8 bg-card border border-border rounded-xl">
              <h2 className="font-serif text-2xl text-primary mb-4">General Inquiries</h2>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                For media, partnerships, or other general questions not related to a specific project build.
              </p>
              <a href="mailto:hello@example.com" className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-border bg-background text-foreground font-medium hover:bg-secondary transition-colors text-sm">
                Email the studio
              </a>
            </div>
          </div>
          
          <div className="mt-16 pt-16 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Current clients: please log in to your <Link href="/dashboard" className="text-primary hover:underline">Client Platform</Link> to submit support or content edit requests.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
