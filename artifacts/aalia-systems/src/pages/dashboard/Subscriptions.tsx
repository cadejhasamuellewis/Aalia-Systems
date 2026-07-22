import { PlatformLayout } from "../../components/layout/PlatformLayout";
import { Check, CreditCard } from "lucide-react";

export function DashboardSubscriptions() {
  return (
    <PlatformLayout>
      <div className="mb-10">
        <h1 className="text-3xl font-serif text-primary mb-2">Subscriptions</h1>
        <p className="text-muted-foreground text-sm">Manage your monthly management plan.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-accent" />
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 gap-4">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-secondary text-primary text-xs font-medium mb-3">
                  Current Plan
                </span>
                <h2 className="text-2xl font-serif text-primary mb-1">Managed + Platform</h2>
                <p className="text-sm text-muted-foreground">Billed monthly</p>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-3xl font-medium text-foreground">$250.00</div>
                <p className="text-xs text-muted-foreground mt-1">Next payment: Oct 28</p>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 mb-8">
              <h3 className="text-sm font-medium text-foreground mb-4">Included in your plan:</h3>
              <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                {[
                  "Routine software updates",
                  "Security & uptime monitoring",
                  "Domain & SSL tracking",
                  "Monthly management report",
                  "Client dashboard access",
                  "Brand-safe approved edits",
                  "File & asset management",
                  "Priority support channel"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
               <button className="px-6 py-2 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
                 Change Plan
               </button>
               <button className="px-6 py-2 rounded-md bg-background border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors">
                 Cancel Subscription
               </button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                <CreditCard size={18} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground">Payment Method</h3>
                <p className="text-xs text-muted-foreground">Managed via Square</p>
              </div>
            </div>
            <div className="p-3 bg-background border border-border rounded flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-5 bg-muted rounded flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">VISA</span>
                </div>
                <span className="text-sm font-medium text-foreground">•••• 4242</span>
              </div>
              <span className="text-xs text-muted-foreground">Exp 12/26</span>
            </div>
            <button className="w-full mt-4 text-xs font-medium text-accent hover:underline text-left">
              Update payment method on Square
            </button>
          </div>
        </div>
      </div>
    </PlatformLayout>
  );
}
