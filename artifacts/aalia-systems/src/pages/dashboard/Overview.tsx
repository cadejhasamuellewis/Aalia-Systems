import { PlatformLayout } from "../../components/layout/PlatformLayout";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export function DashboardOverview() {
  return (
    <PlatformLayout>
      <div className="mb-10">
        <h1 className="text-3xl font-serif text-primary mb-2">Welcome back.</h1>
        <p className="text-muted-foreground text-sm">Here is the current status of your web presence.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Status Card */}
        <div className="col-span-full lg:col-span-2 bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-serif text-lg text-primary">System Status</h2>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              All Systems Operational
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 flex-1">
            <div className="space-y-3">
               <div className="flex items-center gap-3 text-sm">
                 <CheckCircle2 size={16} className="text-emerald-500" />
                 <span>Website Online</span>
               </div>
               <div className="flex items-center gap-3 text-sm">
                 <CheckCircle2 size={16} className="text-emerald-500" />
                 <span>SSL Certificate Active</span>
               </div>
               <div className="flex items-center gap-3 text-sm">
                 <CheckCircle2 size={16} className="text-emerald-500" />
                 <span>Domain Connected</span>
               </div>
            </div>
            <div className="space-y-3">
               <div className="flex items-center gap-3 text-sm">
                 <CheckCircle2 size={16} className="text-emerald-500" />
                 <span>Monthly Management Plan Active</span>
               </div>
               <div className="flex items-center gap-3 text-sm">
                 <CheckCircle2 size={16} className="text-emerald-500" />
                 <span>Daily Backups Verified</span>
               </div>
               <div className="flex items-center gap-3 text-sm text-muted-foreground">
                 <AlertCircle size={16} />
                 <span>Next Update: Oct 15</span>
               </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-primary border border-primary rounded-xl p-6 text-primary-foreground flex flex-col justify-between">
          <div>
            <h2 className="font-serif text-lg mb-2">Need an update?</h2>
            <p className="text-sm text-primary-foreground/80 mb-6">Submit a request or use the brand editor to make changes yourself.</p>
          </div>
          <div className="space-y-3">
            <Link href="/dashboard/editor" className="flex items-center justify-between w-full p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium">
              Open Brand Editor <ArrowRight size={16} />
            </Link>
            <Link href="/dashboard/requests" className="flex items-center justify-between w-full p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium">
              Submit a Request <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-serif text-lg text-primary">Recent Activity</h2>
            <Link href="/dashboard/requests" className="text-xs text-accent hover:underline">View all</Link>
          </div>
          <div className="space-y-4">
            {[
              { title: "September Management Report", type: "File", date: "Sep 30" },
              { title: "Invoice #1042", type: "Invoice", date: "Sep 28" },
              { title: "Update staff bios", type: "Request", date: "Sep 15" }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-background border border-border/50">
                <div>
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.type}</p>
                </div>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscriptions */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-serif text-lg text-primary">Active Subscriptions</h2>
            <Link href="/dashboard/subscriptions" className="text-xs text-accent hover:underline">Manage</Link>
          </div>
          <div className="p-4 rounded-lg border border-border/50 bg-background/50">
            <div className="flex justify-between items-start mb-4 border-b border-border/50 pb-4">
              <div>
                <p className="font-medium text-sm">Managed Website + Platform</p>
                <p className="text-xs text-muted-foreground mt-1">Monthly billing cycle</p>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded bg-secondary text-primary">Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Next renewal:</span>
              <span className="text-sm font-medium text-foreground">Oct 28, {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </div>
    </PlatformLayout>
  );
}
