import { PlatformLayout } from "../../components/layout/PlatformLayout";
import { Download } from "lucide-react";

export function DashboardInvoices() {
  const invoices = [
    { id: "INV-1042", desc: "Monthly Website Management - October", amount: "$250.00", date: "Oct 01", status: "Paid" },
    { id: "INV-1031", desc: "Monthly Website Management - September", amount: "$250.00", date: "Sep 01", status: "Paid" },
    { id: "INV-1020", desc: "Monthly Website Management - August", amount: "$250.00", date: "Aug 01", status: "Paid" },
    { id: "INV-0985", desc: "Custom Form Template Addition", amount: "$150.00", date: "Jul 15", status: "Paid" },
  ];

  return (
    <PlatformLayout>
      <div className="mb-10">
        <h1 className="text-3xl font-serif text-primary mb-2">Invoices</h1>
        <p className="text-muted-foreground text-sm">Billing history and upcoming payments.</p>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border bg-background/50">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Invoice</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Description</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Amount</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Date</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Status</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-secondary/20 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-foreground">{inv.id}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{inv.desc}</td>
                <td className="px-6 py-4 text-sm font-medium text-foreground">{inv.amount}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{inv.date}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 rounded text-xs font-medium border bg-emerald-50 text-emerald-700 border-emerald-200">
                    {inv.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-muted-foreground hover:text-accent transition-colors" title="Download PDF">
                    <Download size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p className="text-xs text-muted-foreground mt-6 text-center">
        Payments are processed securely via Square. Aalia Systems does not store your card data.
      </p>
    </PlatformLayout>
  );
}
