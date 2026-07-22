import { Layout } from "../components/layout/Layout";
import { Link } from "wouter";

export function Platform() {
  return (
    <Layout>
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">The Client Platform</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A private, organized space for monthly clients to manage their digital assets, handle invoices, and make brand-safe edits without breaking the design.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 space-y-24">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 frosted-glass p-8 rounded-xl border border-white/60 shadow-lg">
              <div className="space-y-4">
                <div className="flex justify-between p-3 bg-white rounded border border-border/50">
                  <span className="text-sm font-medium">Monthly Retainer</span>
                  <span className="text-sm text-muted-foreground">Paid</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded border border-border/50">
                  <span className="text-sm font-medium">Design Request</span>
                  <span className="text-xs bg-secondary text-primary px-2 py-1 rounded">In Progress</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded border border-border/50">
                  <span className="text-sm font-medium">Brand Guidelines.pdf</span>
                  <span className="text-sm text-accent hover:underline cursor-pointer">Download</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif text-primary mb-4">Everything in its place.</h2>
              <p className="text-muted-foreground leading-relaxed">
                No more digging through email threads for invoices or wondering about the status of a request. The platform centralizes your subscriptions, file assets, and support tickets in a single, calm interface.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-primary mb-4">Brand-safe content editing.</h2>
              <p className="text-muted-foreground leading-relaxed">
                Need to update holiday hours or swap a team photo? Submit edits through a protected interface. You modify the content; we ensure the layout, typography, and mobile responsiveness stay flawless.
              </p>
            </div>
            <div className="frosted-glass p-8 rounded-xl border border-white/60 shadow-lg">
              <div className="space-y-4">
                 <div className="p-4 bg-white rounded border border-border/50">
                   <p className="text-xs font-semibold text-muted-foreground mb-2">Edit: Hero Announcement</p>
                   <div className="w-full h-12 bg-secondary/50 rounded border border-border mb-3" />
                   <div className="flex justify-end gap-2">
                     <div className="h-8 w-20 bg-muted/20 rounded" />
                     <div className="h-8 w-24 bg-primary/20 rounded" />
                   </div>
                 </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-16 border-t border-border">
            <h2 className="text-2xl font-serif text-primary mb-6">Experience the platform</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Platform access is included with the Managed Website package. Take a look around the sample environment to see how it works.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/pricing" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                View Pricing
              </Link>
              <Link href="/dashboard" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
                Explore Demo Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
