import { PlatformLayout } from "../../components/layout/PlatformLayout";
import { Info, Lock } from "lucide-react";

export function DashboardEditor() {
  return (
    <PlatformLayout>
      <div className="mb-10">
        <h1 className="text-3xl font-serif text-primary mb-2">Brand-Safe Editor</h1>
        <p className="text-muted-foreground text-sm">Update your content. We'll protect the code and design.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="border-b border-border/50 bg-background/50 p-4 flex gap-4">
              <select className="px-3 py-1.5 rounded bg-white border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/50">
                <option>Page: Home</option>
                <option>Page: About</option>
                <option>Page: Services</option>
              </select>
              <select className="px-3 py-1.5 rounded bg-white border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/50">
                <option>Section: Announcement Bar</option>
                <option>Section: Hero Text</option>
                <option>Section: Business Hours</option>
              </select>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium text-foreground">Announcement Text</label>
                <span className="px-2 py-1 rounded bg-amber-50 text-amber-700 text-xs font-medium border border-amber-200">
                  Draft
                </span>
              </div>
              
              <textarea 
                className="w-full h-32 p-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none text-sm text-foreground"
                defaultValue="We will be closed for the upcoming winter holidays from Dec 24th to Jan 2nd."
              />
              
              <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-border/50">
                <button className="px-4 py-2 rounded-md bg-background border border-border text-sm font-medium hover:bg-secondary transition-colors">
                  Preview
                </button>
                <button className="px-4 py-2 rounded-md bg-background border border-border text-sm font-medium hover:bg-secondary transition-colors">
                  Save Draft
                </button>
                <button className="px-6 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                  Submit for Review
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-secondary/50 border border-border rounded-xl p-6">
            <div className="flex items-start gap-3 mb-6">
              <Info className="text-primary mt-0.5" size={18} />
              <div>
                <h3 className="font-medium text-sm text-foreground mb-1">How it works</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Make your changes and submit them. They will either go live immediately or be routed to Aalia for a quick visual check, depending on your account settings.
                </p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border/50">
              <h3 className="font-medium text-sm text-foreground mb-4">Protected Elements</h3>
              <ul className="space-y-3">
                {["Layout & Grid", "Brand Colors", "Typography", "Spacing", "Codebase"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Lock size={14} className="text-muted-foreground/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PlatformLayout>
  );
}
