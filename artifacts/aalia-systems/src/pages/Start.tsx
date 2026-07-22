import { Layout } from "../components/layout/Layout";
import { Button } from "@/components/ui/button";

export function Start() {
  return (
    <Layout>
      <div className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Start a Project</h1>
            <p className="text-lg text-muted-foreground">
              Please complete the form below to inquire about a new website build, redesign, or monthly management plan. We aim to respond within 2 business days.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 lg:p-12 shadow-sm">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full h-12 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full h-12 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full h-12 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="business" className="text-sm font-medium text-foreground">Business Name</label>
                <input 
                  type="text" 
                  id="business" 
                  className="w-full h-12 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  placeholder="Your Business LLC"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground block">What are you inquiring about?</label>
                <div className="space-y-2">
                  {[
                    "New Website Build",
                    "Website Redesign",
                    "Monthly Website Management",
                    "Client Platform Access",
                    "Other"
                  ].map((option, i) => (
                    <label key={i} className="flex items-center gap-3 p-3 border border-border rounded-md hover:bg-secondary/50 cursor-pointer transition-colors">
                      <input type="checkbox" className="w-4 h-4 text-accent rounded border-border focus:ring-accent" />
                      <span className="text-sm text-foreground">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-medium text-foreground">Project Details</label>
                <textarea 
                  id="details" 
                  rows={5}
                  className="w-full p-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  placeholder="Please share a few details about your goals..."
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full h-14 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Submit Inquiry
              </button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                This is a static demo form. No data will be sent.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
