import React from "react";

export function VariationA() {
  const brandColors = {
    bg: "hsl(210, 20%, 95%)",
    fg: "hsl(220, 15%, 12%)",
    primary: "hsl(193, 55%, 22%)",
    accent: "hsl(12, 30%, 45%)",
    border: "hsl(210, 25%, 80%)",
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-x-hidden antialiased flex flex-col"
      style={{
        background: brandColors.bg,
        color: brandColors.fg,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dmsans { font-family: 'DM Sans', sans-serif; }
        .tracking-widest-label { letter-spacing: 0.1em; }
        .glass-panel {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }
      `}</style>

      {/* HEADER / NAV */}
      <header
        className="w-full flex items-center justify-between px-8 py-6 max-w-7xl mx-auto"
      >
        <div className="font-playfair font-bold text-2xl tracking-tight" style={{ color: brandColors.primary }}>
          AALIA
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:opacity-70 transition-opacity">Services</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Platform</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Pricing</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Client Login</a>
        </nav>
        <a
          href="#"
          className="px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: brandColors.primary }}
        >
          Start a project
        </a>
      </header>

      {/* 1. HERO */}
      <section className="w-full max-w-7xl mx-auto px-8 pt-20 pb-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-[60%] flex flex-col items-start">
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-medium tracking-tight mb-8">
            Your website, built and managed with structure.
          </h1>
          <p className="text-lg md:text-xl font-dmsans max-w-2xl leading-relaxed mb-10 opacity-90">
            Aalia builds professional websites and gives clients organized options for handoff, monthly management, custom documents, and long-term digital support.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90 shadow-sm"
              style={{ background: brandColors.primary }}
            >
              Start a project
            </a>
            <a
              href="#"
              className="px-8 py-4 text-base font-medium transition-colors hover:bg-black/5 shadow-sm"
              style={{ border: `1px solid ${brandColors.border}` }}
            >
              View services
            </a>
          </div>
        </div>
        
        <div className="w-full lg:w-[40%]">
          <div 
            className="glass-panel rounded-xl p-8 border"
            style={{ borderColor: brandColors.border }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[0.7rem] uppercase font-bold tracking-widest-label text-slate-500">System Status</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                "Website online",
                "Domain connected",
                "SSL active",
                "Update request open",
                "Client files ready",
                "Square invoice paid",
                "Approved edits available"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-green-50 text-green-600 border border-green-200">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-dmsans text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 border-t" style={{ borderColor: brandColors.border }}>
              <span className="text-[0.65rem] uppercase font-bold tracking-widest-label text-slate-400">Sample client platform preview</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICE PATHS */}
      <section className="w-full max-w-7xl mx-auto px-8 pb-32">
        <h2 className="font-playfair text-4xl md:text-5xl font-medium mb-16 max-w-3xl">
          Choose the support level your business needs.
        </h2>
        
        <div className="flex flex-col w-full border-t" style={{ borderColor: brandColors.border }}>
          {[
            {
              num: "01",
              title: "Website Project",
              desc: "A custom website or redesign built for your business, then prepared for handoff."
            },
            {
              num: "02",
              title: "Managed Website",
              desc: "Ongoing website management for updates, files, domain notes, SSL checks, invoices, and support."
            },
            {
              num: "03",
              title: "Custom Documents + Forms",
              desc: "Branded fillable forms, intake documents, PDFs, email templates, and business files."
            },
            {
              num: "04",
              title: "Long-Term Support Contract",
              desc: "Ongoing digital support for businesses that need a steady website and systems partner."
            }
          ].map((service, idx) => (
            <a 
              href="#"
              key={idx} 
              className="flex flex-col md:flex-row md:items-center py-10 md:py-12 border-b group transition-colors hover:bg-black/[0.02]"
              style={{ borderColor: brandColors.border }}
            >
              <div className="w-full md:w-32 mb-4 md:mb-0">
                <span className="font-playfair text-5xl md:text-6xl font-medium transition-colors" style={{ color: brandColors.accent }}>
                  {service.num}
                </span>
              </div>
              <div className="flex-1 md:pr-12">
                <h3 className="font-playfair text-2xl md:text-3xl font-medium mb-2 group-hover:underline decoration-1 underline-offset-4" style={{ color: brandColors.primary }}>
                  {service.title}
                </h3>
              </div>
              <div className="w-full md:w-80 mt-2 md:mt-0 opacity-80">
                <p className="font-dmsans text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div className="hidden md:flex items-center justify-end w-12 opacity-40 group-hover:opacity-100 transition-opacity group-hover:translate-x-2 transform duration-300 text-2xl">
                →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3. PLATFORM SECTION */}
      <section className="w-full bg-white py-32 border-y" style={{ borderColor: brandColors.border }}>
        <div className="max-w-5xl mx-auto px-8 flex flex-col items-center text-center">
          <span className="text-[0.7rem] uppercase font-bold tracking-widest-label mb-6 text-slate-500">Client Platform</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-medium mb-6">
            A private platform for managed clients.
          </h2>
          <p className="text-lg font-dmsans max-w-3xl leading-relaxed opacity-80 mb-16">
            Clients can view website status, submit requests, upload files, view invoices, manage subscriptions, and edit approved content areas without touching code.
          </p>
          
          <div className="w-full rounded-t-xl rounded-b-md overflow-hidden border shadow-2xl shadow-black/5" style={{ borderColor: brandColors.border }}>
            {/* Browser chrome */}
            <div className="bg-slate-50 border-b flex items-center px-4 py-3" style={{ borderColor: brandColors.border }}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              </div>
              <div className="mx-auto bg-white px-32 py-1.5 rounded text-[0.65rem] font-medium text-slate-400 border shadow-sm">aaliasystems.com/client-portal</div>
            </div>
            
            {/* App Nav */}
            <div className="bg-white border-b flex flex-wrap gap-6 px-8 pt-4" style={{ borderColor: brandColors.border }}>
              <span className="text-sm font-medium border-b-2 pb-4 -mb-[1px]" style={{ color: brandColors.primary, borderColor: brandColors.primary }}>Website Status</span>
              <span className="text-sm text-slate-500 pb-4">Requests</span>
              <span className="text-sm text-slate-500 pb-4">Files</span>
              <span className="text-sm text-slate-500 pb-4">Invoices</span>
              <span className="text-sm text-slate-500 pb-4">Subscriptions</span>
              <span className="text-sm text-slate-500 pb-4">Approved Edits</span>
              <span className="text-sm text-slate-500 pb-4">Support</span>
            </div>
            
            {/* App Content */}
            <div className="bg-slate-50/50 p-8 flex flex-col md:flex-row gap-8 text-left">
              <div className="flex-1 space-y-6">
                <h3 className="font-playfair text-xl font-medium">Website Overview</h3>
                <div className="bg-white border rounded-lg p-6 space-y-4" style={{ borderColor: brandColors.border }}>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-sm text-slate-600">Domain</span>
                    <span className="text-sm font-medium">example-studio.com</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-sm text-slate-600">Hosting Status</span>
                    <span className="text-sm font-medium flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Active</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-slate-600">Last Core Update</span>
                    <span className="text-sm font-medium">Oct 12, 2023</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 space-y-6">
                <h3 className="font-playfair text-xl font-medium">Recent Activity</h3>
                <div className="bg-white border rounded-lg p-6 space-y-6" style={{ borderColor: brandColors.border }}>
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: brandColors.primary }}></div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Today</div>
                      <div className="text-sm">Monthly review completed</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 bg-slate-300"></div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Yesterday</div>
                      <div className="text-sm">Invoice #1042 Paid</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 bg-slate-300"></div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Oct 14</div>
                      <div className="text-sm">File "Assets.zip" uploaded</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRAND-SAFE EDITING */}
      <section className="w-full py-32 px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="font-playfair text-4xl md:text-5xl font-medium mb-6">
              Edit approved content without breaking your website.
            </h2>
            <p className="text-lg font-dmsans leading-relaxed opacity-80 mb-12">
              Certain areas of your site can be unlocked for easy text and image edits. The design system remains intact, while you maintain control of the details.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <span className="font-playfair text-xl font-medium" style={{ color: brandColors.accent }}>1.</span>
                <div>
                  <h4 className="font-medium text-base mb-1">Choose an approved section</h4>
                  <p className="text-sm opacity-70">Navigate to content areas we've marked safe for updates.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-playfair text-xl font-medium" style={{ color: brandColors.accent }}>2.</span>
                <div>
                  <h4 className="font-medium text-base mb-1">Edit and preview</h4>
                  <p className="text-sm opacity-70">Make your text or image changes in a safe, isolated view.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-playfair text-xl font-medium" style={{ color: brandColors.accent }}>3.</span>
                <div>
                  <h4 className="font-medium text-base mb-1">Publish or submit for review</h4>
                  <p className="text-sm opacity-70">Push changes live instantly, or submit them to us for a quick check.</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[0.65rem] uppercase font-bold tracking-widest-label mb-3 block text-slate-500">Protected Elements (Cannot be broken)</span>
              <div className="flex flex-wrap gap-2">
                {["Code", "Layout", "Colors", "Fonts", "Spacing", "Hosting", "DNS", "Payment settings"].map(tag => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-slate-200/50 text-slate-600 border border-slate-300/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-xl border overflow-hidden flex flex-col h-[500px]" style={{ borderColor: brandColors.border }}>
              <div className="px-6 py-4 border-b flex justify-between items-center bg-slate-50" style={{ borderColor: brandColors.border }}>
                <div className="text-sm font-medium text-slate-700">Editing Page: Home / Announcement Bar</div>
                <div className="text-[0.65rem] uppercase font-bold tracking-widest-label px-2 py-1 rounded bg-yellow-100 text-yellow-800">Draft</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <label className="text-sm font-medium mb-2 text-slate-700">Holiday hours text</label>
                <textarea 
                  className="w-full flex-1 p-4 border rounded-md resize-none font-dmsans text-sm focus:outline-none focus:ring-1 bg-slate-50" 
                  style={{ borderColor: brandColors.border }}
                  defaultValue="We will be closed from December 24th through January 2nd. All orders placed during this time will ship in the new year."
                ></textarea>
              </div>
              <div className="px-6 py-4 border-t bg-slate-50 flex justify-end gap-3" style={{ borderColor: brandColors.border }}>
                <button className="px-4 py-2 text-sm font-medium bg-white border rounded shadow-sm" style={{ borderColor: brandColors.border }}>Preview</button>
                <button className="px-4 py-2 text-sm font-medium bg-white border rounded shadow-sm" style={{ borderColor: brandColors.border }}>Save Draft</button>
                <button className="px-4 py-2 text-sm font-medium text-white rounded shadow-sm" style={{ background: brandColors.primary }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AALIA IN PRACTICE */}
      <section className="w-full bg-white py-32 border-y" style={{ borderColor: brandColors.border }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-medium mb-4">Aalia in Practice</h2>
            <p className="text-lg font-dmsans opacity-80 max-w-2xl">A closer look at what Aalia can build, organize, and manage.</p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Full width 1 */}
            <div className="w-full bg-slate-50 border rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center" style={{ borderColor: brandColors.border }}>
              <div className="w-full md:w-1/3">
                <span className="text-[0.7rem] uppercase font-bold tracking-widest-label mb-3 block" style={{ color: brandColors.accent }}>Service 01</span>
                <h3 className="font-playfair text-3xl mb-4">Website Build + Handoff</h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  We build robust, scalable sites on modern stacks. When complete, we provide thorough documentation and a structured handoff so you truly own your digital property.
                </p>
              </div>
              <div className="w-full md:w-2/3 flex gap-4 h-64">
                <div className="w-1/4 h-full bg-white border shadow-sm rounded flex flex-col gap-2 p-2 opacity-50" style={{ borderColor: brandColors.border }}>
                  <div className="w-full h-8 bg-slate-100 rounded"></div>
                  <div className="w-full h-full bg-slate-100 rounded"></div>
                </div>
                <div className="w-1/2 h-full bg-white border shadow-sm rounded flex flex-col gap-2 p-3" style={{ borderColor: brandColors.border }}>
                  <div className="w-full h-12 bg-slate-100 rounded"></div>
                  <div className="w-full flex gap-2">
                    <div className="w-1/2 h-24 bg-slate-100 rounded"></div>
                    <div className="w-1/2 h-24 bg-slate-100 rounded"></div>
                  </div>
                  <div className="w-full h-full bg-slate-100 rounded mt-auto"></div>
                </div>
                <div className="w-1/4 h-full bg-white border shadow-sm rounded flex flex-col gap-2 p-2 opacity-50" style={{ borderColor: brandColors.border }}>
                  <div className="w-full h-8 bg-slate-100 rounded"></div>
                  <div className="w-full h-full bg-slate-100 rounded"></div>
                </div>
              </div>
            </div>

            {/* Split row */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Half 1 */}
              <div className="w-full md:w-1/2 bg-slate-50 border rounded-xl p-8 md:p-12 flex flex-col" style={{ borderColor: brandColors.border }}>
                <span className="text-[0.7rem] uppercase font-bold tracking-widest-label mb-3 block" style={{ color: brandColors.accent }}>Service 02</span>
                <h3 className="font-playfair text-2xl mb-4">Managed Website</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-10 flex-1">
                  Leave the technical burden to us. We handle uptime, security, minor updates, and technical debt.
                </p>
                <div className="bg-white border rounded-lg p-4 shadow-sm" style={{ borderColor: brandColors.border }}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Vitals</span>
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-100 rounded w-full"></div>
                    <div className="h-2 bg-slate-100 rounded w-5/6"></div>
                    <div className="h-2 bg-slate-100 rounded w-4/6"></div>
                  </div>
                </div>
              </div>

              {/* Half 2 */}
              <div className="w-full md:w-1/2 bg-slate-50 border rounded-xl p-8 md:p-12 flex flex-col overflow-hidden relative" style={{ borderColor: brandColors.border }}>
                <span className="text-[0.7rem] uppercase font-bold tracking-widest-label mb-3 block" style={{ color: brandColors.accent }}>Service 03</span>
                <h3 className="font-playfair text-2xl mb-4 relative z-10">Custom Documents + Forms</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-10 flex-1 relative z-10">
                  Business systems extend beyond the website. We create beautiful, brand-aligned intake forms and PDFs.
                </p>
                
                {/* Document mockups */}
                <div className="h-32 relative z-0 mt-8">
                  <div className="absolute top-0 right-10 w-48 h-64 bg-white border shadow-md transform rotate-6 rounded-sm p-4" style={{ borderColor: brandColors.border }}>
                    <div className="w-1/2 h-2 bg-slate-200 mb-4"></div>
                    <div className="w-full h-1 bg-slate-100 mb-2"></div>
                    <div className="w-full h-1 bg-slate-100 mb-2"></div>
                    <div className="w-3/4 h-1 bg-slate-100 mb-6"></div>
                    <div className="w-full h-12 border border-slate-100 rounded-sm mb-2"></div>
                    <div className="w-full h-12 border border-slate-100 rounded-sm"></div>
                  </div>
                  <div className="absolute -top-4 right-20 w-48 h-64 bg-white border shadow-lg transform -rotate-3 rounded-sm p-4" style={{ borderColor: brandColors.border }}>
                    <div className="w-1/3 h-3 bg-slate-300 mb-6"></div>
                    <div className="w-full h-1.5 bg-slate-100 mb-2"></div>
                    <div className="w-full h-1.5 bg-slate-100 mb-2"></div>
                    <div className="w-5/6 h-1.5 bg-slate-100 mb-2"></div>
                    <div className="w-full h-1.5 bg-slate-100 mb-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full width 2 */}
            <div className="w-full bg-slate-50 border rounded-xl p-8 md:p-12 flex flex-col" style={{ borderColor: brandColors.border }}>
              <div className="mb-10">
                <span className="text-[0.7rem] uppercase font-bold tracking-widest-label mb-3 block" style={{ color: brandColors.accent }}>Service 04</span>
                <h3 className="font-playfair text-3xl mb-4">Long-Term Support Contract</h3>
                <p className="text-sm opacity-80 leading-relaxed max-w-2xl">
                  Strategic guidance, priority development time, and a dedicated partner for businesses growing their digital footprint year over year.
                </p>
              </div>
              
              <div className="relative pt-8 pb-4">
                <div className="absolute top-[40%] left-0 w-full h-px bg-slate-300"></div>
                <div className="flex justify-between relative z-10 w-full">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-500 mb-4">Q1</span>
                    <div className="w-4 h-4 rounded-full border-[4px] border-slate-50 bg-white shadow-sm ring-1 ring-slate-300"></div>
                    <span className="text-xs mt-4 text-center w-24 opacity-70">Audit & Optimization</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-500 mb-4">Q2</span>
                    <div className="w-4 h-4 rounded-full border-[4px] border-slate-50 bg-white shadow-sm ring-1 ring-slate-300"></div>
                    <span className="text-xs mt-4 text-center w-24 opacity-70">Feature Expansion</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-500 mb-4">Q3</span>
                    <div className="w-4 h-4 rounded-full border-[4px] border-slate-50 shadow-sm ring-1" style={{ borderColor: "white", backgroundColor: brandColors.primary, ringColor: brandColors.primary }}></div>
                    <span className="text-xs mt-4 text-center w-24 font-medium" style={{ color: brandColors.primary }}>Campaign Launch</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-500 mb-4">Q4</span>
                    <div className="w-4 h-4 rounded-full border-[4px] border-slate-50 bg-white shadow-sm ring-1 ring-slate-300"></div>
                    <span className="text-xs mt-4 text-center w-24 opacity-70">Annual Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING TEASER */}
      <section className="w-full bg-white py-32 border-b" style={{ borderColor: brandColors.border }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-medium mb-4">Simple, predictable pricing.</h2>
            <p className="text-lg font-dmsans opacity-80">Clear scopes. No surprise fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { name: "Website Project", price: "Starting at $4,500" },
              { name: "Managed Website", price: "$250 / month" },
              { name: "Custom Documents + Forms", price: "Custom quote" },
              { name: "Long-Term Support Contract", price: "Custom quote" },
            ].map((plan, idx) => (
              <div key={idx} className="border p-6 rounded-lg flex flex-col justify-between h-40 group hover:shadow-md transition-shadow" style={{ borderColor: brandColors.border }}>
                <h4 className="font-playfair text-xl font-medium leading-tight group-hover:text-opacity-80">{plan.name}</h4>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-dmsans text-sm font-medium opacity-70">{plan.price}</span>
                </div>
              </div>
            ))}
          </div>
          
          <a href="#" className="inline-flex items-center text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: brandColors.primary }}>
            View full pricing details <span className="ml-2">→</span>
          </a>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="w-full py-32 px-8 text-white text-center" style={{ background: brandColors.primary }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-playfair text-5xl md:text-6xl font-medium mb-8 leading-tight">
            Ready to bring order to your web presence?
          </h2>
          <p className="text-lg md:text-xl font-dmsans opacity-90 mb-12 max-w-2xl leading-relaxed font-light">
            Reach out to discuss a custom build, or step into a management plan for an existing site.
          </p>
          <a
            href="#"
            className="px-10 py-5 text-base font-medium transition-transform hover:scale-105 shadow-lg rounded-sm"
            style={{ background: brandColors.accent }}
          >
            Start a project
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-12 px-8 text-center text-xs opacity-60 bg-white">
        <p>© {new Date().getFullYear()} Aalia Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}
