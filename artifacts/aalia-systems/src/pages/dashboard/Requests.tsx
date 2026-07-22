import { PlatformLayout } from "../../components/layout/PlatformLayout";
import { Plus } from "lucide-react";

export function DashboardRequests() {
  const requests = [
    { id: "REQ-108", title: "Update team page with new headshots", date: "Oct 12", status: "Open" },
    { id: "REQ-107", title: "Change holiday hours in footer", date: "Sep 22", status: "Completed" },
    { id: "REQ-106", title: "Add new service to pricing page", date: "Aug 05", status: "Completed" },
  ];

  return (
    <PlatformLayout>
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-3xl font-serif text-primary mb-2">Requests</h1>
          <p className="text-muted-foreground text-sm">Submit design tweaks, development updates, or general support tickets.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors">
          <Plus size={16} />
          New Request
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border bg-background/50">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">ID</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Title</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Date</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {requests.map((req) => (
              <tr key={req.id} className="hover:bg-secondary/20 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-muted-foreground">{req.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-foreground">{req.title}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{req.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2.5 py-1 rounded text-xs font-medium border ${
                    req.status === 'Open' 
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}>
                    {req.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PlatformLayout>
  );
}
