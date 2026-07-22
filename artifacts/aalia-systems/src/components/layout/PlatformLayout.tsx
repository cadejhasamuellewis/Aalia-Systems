import React from "react";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  FileEdit, 
  Inbox,
  FileBox, 
  CreditCard, 
  Repeat, 
  LifeBuoy, 
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PlatformLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Requests", path: "/dashboard/requests", icon: Inbox },
    { label: "Files", path: "/dashboard/files", icon: FileBox },
    { label: "Invoices", path: "/dashboard/invoices", icon: CreditCard },
    { label: "Subscriptions", path: "/dashboard/subscriptions", icon: Repeat },
    { label: "Brand Editor", path: "/dashboard/editor", icon: FileEdit },
    { label: "Support", path: "#", icon: LifeBuoy },
  ];

  return (
    <div className="min-h-[100dvh] flex bg-secondary/30 selection:bg-accent/20">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-card fixed inset-y-0 z-10">
        <div className="h-20 flex items-center px-6 border-b border-border">
          <Link href="/" className="font-serif text-xl tracking-tight text-foreground">
            Aalia Systems
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <div className="mb-6 px-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
              Client Portal
            </p>
            <p className="text-sm font-medium text-foreground">
              Sample Client
            </p>
          </div>
          
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon size={18} className={location === item.path ? "text-primary" : "opacity-70"} />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-border">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            <LogOut size={18} className="opacity-70" />
            Log out
          </Link>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 inset-x-0 h-16 bg-card border-b border-border flex items-center justify-between px-4 z-50">
        <Link href="/" className="font-serif text-lg tracking-tight text-foreground">
          Aalia Systems
        </Link>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-foreground"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-64 bg-card border-r border-border z-50 flex flex-col lg:hidden"
            >
              <div className="h-16 flex items-center justify-between px-4 border-b border-border">
                <span className="font-serif text-lg tracking-tight text-foreground">
                  Aalia Systems
                </span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="mb-6 px-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    Client Portal
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Sample Client
                  </p>
                </div>
                
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                        location === item.path
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      <item.icon size={18} className={location === item.path ? "text-primary" : "opacity-70"} />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0 p-6 lg:p-10">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
