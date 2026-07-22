import { PlatformLayout } from "../../components/layout/PlatformLayout";
import { UploadCloud, FileText, Image as ImageIcon, File } from "lucide-react";

export function DashboardFiles() {
  const files = [
    { name: "Brand_Guidelines.pdf", type: "PDF", size: "2.4 MB", date: "Jan 12", icon: FileText },
    { name: "Logo_Pack.zip", type: "ZIP", size: "15.1 MB", date: "Jan 12", icon: File },
    { name: "Team_Headshots.zip", type: "ZIP", size: "45.0 MB", date: "Mar 05", icon: ImageIcon },
    { name: "September_Management_Report.pdf", type: "PDF", size: "1.1 MB", date: "Sep 30", icon: FileText },
  ];

  return (
    <PlatformLayout>
      <div className="mb-10">
        <h1 className="text-3xl font-serif text-primary mb-2">Files & Assets</h1>
        <p className="text-muted-foreground text-sm">Access your brand materials and management reports.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <ul className="divide-y divide-border">
              {files.map((file, i) => (
                <li key={i} className="flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-secondary/50 flex items-center justify-center text-muted-foreground border border-border/50">
                      <file.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{file.type} • {file.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground hidden sm:inline">{file.date}</span>
                    <button className="text-xs font-medium text-accent hover:underline">Download</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-background/50 hover:bg-secondary/30 transition-colors cursor-pointer flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center mb-4">
              <UploadCloud size={24} />
            </div>
            <h3 className="font-medium text-sm text-foreground mb-1">Upload a file</h3>
            <p className="text-xs text-muted-foreground mb-4">Drag and drop or click to browse</p>
            <button className="px-4 py-2 bg-background border border-border rounded-md text-sm font-medium hover:bg-secondary transition-colors text-foreground">
              Select File
            </button>
          </div>
        </div>
      </div>
    </PlatformLayout>
  );
}
