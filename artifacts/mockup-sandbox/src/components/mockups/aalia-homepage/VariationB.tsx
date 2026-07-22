import React from "react";

export function VariationB() {
  return (
    <div
      className="min-h-screen text-slate-900"
      style={{
        backgroundColor: "hsl(210, 20%, 95%)",
        color: "hsl(220, 15%, 12%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dmsans { font-family: 'DM Sans', sans-serif; }
        
        .hero-bg {
          background: linear-gradient(135deg, hsl(210,22%,92%) 0%, hsl(210,18%,97%) 100%);
        }
        
        .nav-link {
          position: relative;
          text-decoration: none;
          color: inherit;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: currentColor;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        .check-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1.5px solid hsl(193, 55%, 22%);
        }
        .check-icon::after {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: hsl(193, 55%, 22%);
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.06);
        }
      `}} />

      {/* NAVIGATION */}
      <nav className="absolute top-0 left-0 w-full z-10 px-8 py-6 flex justify-between items-center">
        <div className="font-playfair font-bold text-2xl tracking-tight" style={{ color: "hsl(193, 55%, 22%)" }}>
          Aalia Systems
        </div>
        <div className="flex gap-8 text-sm font-medium tracking-wide">
          <a href="#" className="nav-link">Services</a>
          <a href="#" className="nav-link">Platform</a>
          <a href="#" className="nav-link">Work</a>
          <a href="#" className="nav-link">Pricing</a>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="hero-bg relative pt-40 pb-24 px-8 min-h-[90vh] flex flex-col justify-center border-b" style={{ borderColor: "hsl(210, 25%, 80%)" }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
            
            {/* Left Column - 55% */}
            <div className="lg:w-[55%]">
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-8" style={{ color: "hsl(220, 15%, 12%)" }}>
                Your website, built and managed with structure.
              </h1>
              <p className="text-lg md:text-xl max-w-xl leading-relaxed mb-10 opacity-80 font-dmsans">
                Aalia Systems provides structured website builds, private client platforms, and long-term technical support for businesses that value stability over trends.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "hsl(193, 55%, 22%)" }}>
                  Start a project
                </a>
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-widest transition-colors hover:bg-white" style={{ border: "1px solid hsl(210, 25%, 80%)", color: "hsl(220, 15%, 12%)" }}>
                  View services
                </a>
              </div>
            </div>

            {/* Right Column - 45% */}
            <div className="lg:w-[45%] relative w-full mt-12 lg:mt-0">
              <div className="bg-white p-8 rounded-2xl relative z-10" 
                style={{ 
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)", 
                  border: "8px solid hsl(210, 25%, 80%)" 
                }}>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                  <div className="uppercase tracking-widest text-xs font-bold" style={{ color: "hsl(220, 15%, 12%)" }}>System Status</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">All systems operational</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Core Application Server",
                    "Database Replication",
                    "Asset Delivery Network",
                    "Background Job Processing",
                    "Daily Encrypted Backups",
                    "SSL Certificate Auto-Renewal",
                    "Uptime Monitoring"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                      <div className="check-icon"></div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 text-center">
                  <span className="text-[0.65rem] uppercase tracking-widest text-gray-400 font-bold">Sample client platform preview</span>
                </div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-dashed rounded-3xl -z-10 scale-105" style={{ borderColor: "hsl(210, 25%, 70%)", opacity: 0.5 }}></div>
            </div>
            
          </div>
          
          {/* Footer of hero */}
          <div className="pt-8 border-t flex justify-between items-center" style={{ borderColor: "hsl(210, 25%, 80%)" }}>
            <span className="text-xs uppercase tracking-widest font-bold opacity-50">Serving managed clients since 2022</span>
            <span className="text-xs uppercase tracking-widest font-bold opacity-50">San Francisco &middot; Global</span>
          </div>
        </div>
      </section>

      {/* 2. SERVICE PATHS */}
      <section className="bg-white py-32 px-8 border-b" style={{ borderColor: "hsl(210, 25%, 80%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl leading-tight mb-4" style={{ color: "hsl(220, 15%, 12%)" }}>
              Choose the support level<br/>your business needs.
            </h2>
            <div className="w-16 h-px mt-8" style={{ backgroundColor: "hsl(12, 30%, 45%)" }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 01 */}
            <div className="relative p-10 bg-white rounded-xl hover-lift group overflow-hidden" style={{ border: "1.5px solid hsl(210, 25%, 80%)" }}>
              <div className="absolute -top-4 -right-4 text-[8rem] font-playfair font-bold leading-none pointer-events-none transition-transform group-hover:scale-110" style={{ color: "hsl(220, 15%, 12%)", opacity: 0.03 }}>
                01
              </div>
              <div className="text-[0.7rem] font-bold uppercase tracking-widest mb-6" style={{ color: "hsl(12, 30%, 45%)" }}>Service 01</div>
              <h3 className="font-playfair text-2xl md:text-3xl mb-4 pr-12">Website Project</h3>
              <p className="text-sm md:text-base opacity-70 leading-relaxed mb-12 max-w-sm">
                A structured, phased build process resulting in a fast, accessible, and easily managed website. Fixed scope, clear deliverables.
              </p>
              <div className="flex items-center text-sm font-bold uppercase tracking-widest mt-auto group-hover:gap-3 transition-all" style={{ color: "hsl(193, 55%, 22%)" }}>
                <span>Learn more</span>
                <span className="ml-2">&rarr;</span>
              </div>
            </div>

            {/* Card 02 */}
            <div className="relative p-10 bg-white rounded-xl hover-lift group overflow-hidden" style={{ border: "1.5px solid hsl(210, 25%, 80%)" }}>
              <div className="absolute -top-4 -right-4 text-[8rem] font-playfair font-bold leading-none pointer-events-none transition-transform group-hover:scale-110" style={{ color: "hsl(220, 15%, 12%)", opacity: 0.03 }}>
                02
              </div>
              <div className="text-[0.7rem] font-bold uppercase tracking-widest mb-6" style={{ color: "hsl(12, 30%, 45%)" }}>Service 02</div>
              <h3 className="font-playfair text-2xl md:text-3xl mb-4 pr-12">Managed Website</h3>
              <p className="text-sm md:text-base opacity-70 leading-relaxed mb-12 max-w-sm">
                Complete technical oversight. We handle hosting, updates, security, and minor content edits while you focus on your business.
              </p>
              <div className="flex items-center text-sm font-bold uppercase tracking-widest mt-auto group-hover:gap-3 transition-all" style={{ color: "hsl(193, 55%, 22%)" }}>
                <span>Learn more</span>
                <span className="ml-2">&rarr;</span>
              </div>
            </div>

            {/* Card 03 - Full Width Banner */}
            <div className="relative p-10 bg-white rounded-xl hover-lift group overflow-hidden md:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-8" style={{ border: "1.5px solid hsl(210, 25%, 80%)" }}>
              <div className="absolute -top-4 -right-4 text-[8rem] font-playfair font-bold leading-none pointer-events-none transition-transform group-hover:scale-105" style={{ color: "hsl(220, 15%, 12%)", opacity: 0.03 }}>
                03
              </div>
              
              <div className="max-w-xl relative z-10">
                <div className="text-[0.7rem] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(12, 30%, 45%)" }}>Service 03</div>
                <h3 className="font-playfair text-2xl md:text-3xl mb-3">Custom Documents + Forms</h3>
                <p className="text-sm md:text-base opacity-70 leading-relaxed">
                  Bespoke internal tooling, standardized document generation, and secure data collection workflows built directly into your platform.
                </p>
              </div>

              <div className="relative z-10 flex-shrink-0 flex items-center gap-6">
                <div className="hidden md:flex flex-col gap-2 mr-8 opacity-20">
                  <div className="w-16 h-1 rounded" style={{ backgroundColor: "hsl(220, 15%, 12%)" }}></div>
                  <div className="w-24 h-1 rounded" style={{ backgroundColor: "hsl(220, 15%, 12%)" }}></div>
                  <div className="w-12 h-1 rounded" style={{ backgroundColor: "hsl(220, 15%, 12%)" }}></div>
                </div>
                <div className="flex items-center text-sm font-bold uppercase tracking-widest group-hover:gap-3 transition-all" style={{ color: "hsl(193, 55%, 22%)" }}>
                  <span>Learn more</span>
                  <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </div>

            {/* Card 04 - Full Width Banner */}
            <div className="relative p-10 bg-white rounded-xl hover-lift group overflow-hidden md:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-8" style={{ border: "1.5px solid hsl(210, 25%, 80%)" }}>
              <div className="absolute -top-4 -right-4 text-[8rem] font-playfair font-bold leading-none pointer-events-none transition-transform group-hover:scale-105" style={{ color: "hsl(220, 15%, 12%)", opacity: 0.03 }}>
                04
              </div>
              
              <div className="max-w-xl relative z-10">
                <div className="text-[0.7rem] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(12, 30%, 45%)" }}>Service 04</div>
                <h3 className="font-playfair text-2xl md:text-3xl mb-3">Long-Term Support Contract</h3>
                <p className="text-sm md:text-base opacity-70 leading-relaxed">
                  Dedicated monthly engineering hours for feature additions, performance optimization, and strategic technical planning.
                </p>
              </div>

              <div className="relative z-10 flex-shrink-0 flex items-center gap-6">
                <div className="hidden md:flex items-end gap-2 mr-8 opacity-20 h-10">
                  <div className="w-2 h-4 rounded-sm" style={{ backgroundColor: "hsl(220, 15%, 12%)" }}></div>
                  <div className="w-2 h-8 rounded-sm" style={{ backgroundColor: "hsl(220, 15%, 12%)" }}></div>
                  <div className="w-2 h-6 rounded-sm" style={{ backgroundColor: "hsl(220, 15%, 12%)" }}></div>
                  <div className="w-2 h-10 rounded-sm" style={{ backgroundColor: "hsl(220, 15%, 12%)" }}></div>
                </div>
                <div className="flex items-center text-sm font-bold uppercase tracking-widest group-hover:gap-3 transition-all" style={{ color: "hsl(193, 55%, 22%)" }}>
                  <span>Learn more</span>
                  <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM SECTION */}
      <section className="py-32 px-8 border-b" style={{ borderColor: "hsl(210, 25%, 80%)" }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <div className="text-[0.7rem] font-bold uppercase tracking-widest mb-6" style={{ color: "hsl(12, 30%, 45%)" }}>Client Platform</div>
            <h2 className="font-playfair text-4xl leading-tight mb-6" style={{ color: "hsl(220, 15%, 12%)" }}>
              A private platform for managed clients.
            </h2>
            <p className="text-base opacity-70 leading-relaxed mb-8">
              Every managed client receives access to a secure, centralized dashboard. Manage your billing, track support requests, and view system status without hunting through your inbox.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest" style={{ color: "hsl(193, 55%, 22%)" }}>
              Explore platform features &rarr;
            </a>
          </div>

          <div className="lg:w-2/3 w-full">
            {/* App dashboard simulation */}
            <div className="bg-white rounded-2xl flex overflow-hidden shadow-2xl" style={{ border: "1px solid hsl(210, 25%, 80%)", height: "450px" }}>
              {/* Sidebar */}
              <div className="w-48 flex-shrink-0 border-r py-6 flex flex-col bg-gray-50/50" style={{ borderColor: "hsl(210, 25%, 90%)" }}>
                <div className="px-6 mb-8 font-playfair font-bold text-lg" style={{ color: "hsl(193, 55%, 22%)" }}>Aalia</div>
                
                <div className="flex flex-col gap-1 px-3">
                  {[
                    { label: "Website", active: true },
                    { label: "Requests", active: false },
                    { label: "Files", active: false },
                    { label: "Invoices", active: false },
                    { label: "Subscriptions", active: false },
                    { label: "Support", active: false }
                  ].map((nav, i) => (
                    <div key={i} className={`px-3 py-2 rounded-md text-sm font-medium ${nav.active ? "bg-white shadow-sm text-slate-900" : "text-gray-500 hover:text-gray-900"}`}
                         style={nav.active ? { color: "hsl(193, 55%, 22%)" } : {}}>
                      {nav.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 bg-white p-8 overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-playfair text-2xl font-medium">Website Overview</h3>
                  <div className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider border border-green-200">Active</div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/30">
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Uptime</div>
                    <div className="font-medium text-lg">100% Online</div>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/30">
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Last Backup</div>
                    <div className="font-medium text-lg">Today, 3:00 AM</div>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/30">
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Domain Renewal</div>
                    <div className="font-medium text-lg">Oct 24, 2025</div>
                  </div>
                </div>

                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">Recent Activity</h4>
                
                <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
                  <div className="relative">
                    <div className="absolute -left-6 top-1 w-2 h-2 rounded-full bg-white border-2 border-gray-300"></div>
                    <div className="text-sm font-medium">Security patch applied</div>
                    <div className="text-xs text-gray-500 mt-1">Yesterday, 14:32</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 top-1 w-2 h-2 rounded-full bg-white border-2 border-gray-300"></div>
                    <div className="text-sm font-medium">Content update deployed</div>
                    <div className="text-xs text-gray-500 mt-1">Sep 12, 09:15</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 top-1 w-2 h-2 rounded-full bg-white border-2 border-gray-300"></div>
                    <div className="text-sm font-medium">Monthly performance report generated</div>
                    <div className="text-xs text-gray-500 mt-1">Sep 1, 00:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRAND-SAFE EDITING */}
      <section className="bg-white py-32 px-8 border-b" style={{ borderColor: "hsl(210, 25%, 80%)" }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <div className="text-[0.7rem] font-bold uppercase tracking-widest mb-6" style={{ color: "hsl(12, 30%, 45%)" }}>Content Management</div>
            <h2 className="font-playfair text-4xl leading-tight mb-8" style={{ color: "hsl(220, 15%, 12%)" }}>
              Brand-safe editing<br/>without the breakage.
            </h2>
            
            <div className="space-y-8 mt-12">
              <div className="flex gap-4">
                <div className="text-sm font-bold opacity-30">01</div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Structured Data</h4>
                  <p className="text-sm opacity-70">Instead of a blank canvas where everything can be dragged out of alignment, you edit clean, structured fields.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-sm font-bold opacity-30">02</div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Instant Previews</h4>
                  <p className="text-sm opacity-70">See exactly how your content will look before publishing, with your brand's typography and spacing automatically applied.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-sm font-bold opacity-30">03</div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Version Control</h4>
                  <p className="text-sm opacity-70">Mistakes happen. Every save creates a restorable revision, ensuring you never permanently lose content.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center">
            {/* Editor Panel Simulation */}
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden" style={{ border: "1px solid hsl(210, 25%, 80%)" }}>
              <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <div className="font-medium text-sm">Edit 'About Us'</div>
                <div className="px-2 py-1 bg-yellow-100 text-yellow-800 text-[0.65rem] font-bold uppercase tracking-widest rounded-md">Draft</div>
              </div>
              <div className="p-5 space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Headline</label>
                  <div className="w-full p-3 border border-gray-200 rounded-md font-playfair text-lg">
                    Our story begins with structure.
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Body Content</label>
                  <div className="w-full p-3 border border-gray-200 rounded-md text-sm text-gray-600 h-32 align-top">
                    We believe that a strong foundation is the prerequisite for scaling. Before we write any code, we establish...
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
                <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-md text-gray-600 hover:bg-gray-100">Cancel</button>
                <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-md text-white shadow-sm" style={{ backgroundColor: "hsl(193, 55%, 22%)" }}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AALIA IN PRACTICE */}
      <section className="bg-white border-b" style={{ borderColor: "hsl(210, 25%, 80%)" }}>
        <div className="w-full py-16 px-8 border-b border-gray-100" style={{ backgroundColor: "hsl(210, 20%, 97%)" }}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-playfair text-3xl lg:text-4xl" style={{ color: "hsl(220, 15%, 12%)" }}>Aalia in Practice</h2>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
          
          {/* Exhibit 1 */}
          <div className="bg-white p-12 lg:p-16 flex flex-col justify-between">
            <div className="mb-12">
              <h3 className="font-playfair text-2xl mb-2">Website Build + Handoff</h3>
              <p className="text-sm opacity-70">A complete, accessible foundation.</p>
            </div>
            <div className="w-full aspect-video bg-gray-50 rounded-xl border border-gray-100 p-6 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                {["Home", "About", "Services", "Contact", "Blog", "Work"].map((page, i) => (
                  <div key={i} className="aspect-square bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center flex-col gap-2">
                    <div className="w-6 h-1 rounded-sm bg-gray-200"></div>
                    <div className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400">{page}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exhibit 2 */}
          <div className="bg-white p-12 lg:p-16 flex flex-col justify-between">
            <div className="mb-12">
              <h3 className="font-playfair text-2xl mb-2">Managed Website Platform</h3>
              <p className="text-sm opacity-70">Visibility into your digital infrastructure.</p>
            </div>
            <div className="w-full aspect-video bg-gray-50 rounded-xl border border-gray-100 p-6 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="grid grid-cols-3 gap-2 p-3 border-b border-gray-100 bg-gray-50 text-[0.65rem] font-bold uppercase tracking-widest text-gray-500">
                  <div>Item</div>
                  <div>Status</div>
                  <div>Date</div>
                </div>
                {[
                  { item: "SSL Cert", status: "Active", date: "Oct 24" },
                  { item: "Database", status: "Optimized", date: "Oct 22" },
                  { item: "CDN Cache", status: "Cleared", date: "Oct 20" },
                  { item: "Core Update", status: "Applied", date: "Oct 15" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 p-3 border-b border-gray-50 text-xs">
                    <div className="font-medium">{row.item}</div>
                    <div className="text-green-600">{row.status}</div>
                    <div className="text-gray-400">{row.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exhibit 3 */}
          <div className="bg-white p-12 lg:p-16 flex flex-col justify-between">
            <div className="mb-12">
              <h3 className="font-playfair text-2xl mb-2">Custom Documents</h3>
              <p className="text-sm opacity-70">Programmatic PDF generation & forms.</p>
            </div>
            <div className="w-full aspect-video bg-gray-50 rounded-xl border border-gray-100 p-6 flex items-center justify-center relative overflow-hidden">
              <div className="relative w-32 h-40">
                <div className="absolute top-0 left-0 w-full h-full bg-white border border-gray-300 shadow-md rounded-sm flex flex-col p-3 transition-transform hover:-translate-y-4" style={{ transform: "rotate(-8deg) translateX(-20px)", zIndex: 1 }}>
                  <div className="w-1/2 h-2 bg-gray-200 mb-4 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-100 mb-2 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-100 mb-2 rounded-sm"></div>
                  <div className="w-4/5 h-1 bg-gray-100 rounded-sm"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white border border-gray-300 shadow-lg rounded-sm flex flex-col p-3 transition-transform hover:-translate-y-4" style={{ transform: "rotate(0deg)", zIndex: 2 }}>
                  <div className="w-1/2 h-2 bg-gray-200 mb-4 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-100 mb-2 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-100 mb-2 rounded-sm"></div>
                  <div className="w-4/5 h-1 bg-gray-100 mb-4 rounded-sm"></div>
                  <div className="w-full h-8 bg-gray-50 border border-gray-100 rounded-sm"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white border border-gray-300 shadow-md rounded-sm flex flex-col p-3 transition-transform hover:-translate-y-4" style={{ transform: "rotate(8deg) translateX(20px)", zIndex: 1 }}>
                  <div className="w-1/2 h-2 bg-gray-200 mb-4 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-100 mb-2 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-100 mb-2 rounded-sm"></div>
                  <div className="w-4/5 h-1 bg-gray-100 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Exhibit 4 */}
          <div className="bg-white p-12 lg:p-16 flex flex-col justify-between">
            <div className="mb-12">
              <h3 className="font-playfair text-2xl mb-2">Long-Term Digital Support</h3>
              <p className="text-sm opacity-70">Dedicated engineering retention.</p>
            </div>
            <div className="w-full aspect-video bg-gray-50 rounded-xl border border-gray-100 p-6 flex items-center justify-center">
              <div className="relative pl-8 space-y-6 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200 max-w-xs w-full">
                {[
                  { month: "August", tasks: "12 Tasks" },
                  { month: "September", tasks: "8 Tasks" },
                  { month: "October", tasks: "15 Tasks" },
                  { month: "November", tasks: "Current" }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-white border-2 border-gray-400"></div>
                    <div className="flex justify-between items-center">
                      <div className="font-medium text-sm">{item.month}</div>
                      <div className="text-[0.65rem] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white border border-gray-200 text-gray-500">{item.tasks}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PRICING TEASER */}
      <section className="py-24 px-8 border-b" style={{ borderColor: "hsl(210, 25%, 80%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-playfair text-3xl mb-2">Transparent Engagement</h2>
              <p className="text-sm opacity-70">Standardized services with predictable pricing.</p>
            </div>
            <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest mt-6 md:mt-0" style={{ color: "hsl(193, 55%, 22%)" }}>
              View full pricing details &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Website Project", desc: "One-time structural build", price: "$3,500+" },
              { name: "Managed Website", desc: "Monthly technical oversight", price: "$150 / mo" },
              { name: "Custom Documents", desc: "Automated PDF workflows", price: "Custom quote" },
              { name: "Support Contract", desc: "Retained engineering hours", price: "From $800 / mo" }
            ].map((pkg, i) => (
              <div key={i} className="bg-white p-6 rounded-xl hover-lift" style={{ border: "1px solid hsl(210, 25%, 85%)" }}>
                <h4 className="font-playfair font-medium text-lg mb-1">{pkg.name}</h4>
                <p className="text-xs text-gray-500 mb-8">{pkg.desc}</p>
                <div className="text-sm font-bold tracking-wide">{pkg.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 px-8 text-white relative overflow-hidden" style={{ backgroundColor: "hsl(193, 55%, 22%)" }}>
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full border border-white opacity-5 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="w-10 h-[2px] mb-8" style={{ backgroundColor: "hsl(12, 30%, 45%)" }}></div>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">
            Ready to structure your digital presence?
          </h2>
          <p className="text-lg opacity-80 mb-12 max-w-2xl font-dmsans">
            We are currently accepting new clients for Q4. Start a conversation about your project requirements or request access to a demo platform.
          </p>
          <a href="#" className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "hsl(12, 30%, 45%)" }}>
            Start a project
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-8 text-center border-t" style={{ borderColor: "hsl(210, 25%, 80%)" }}>
        <p className="text-xs uppercase tracking-widest font-bold opacity-40">
          &copy; {new Date().getFullYear()} Aalia Systems. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

