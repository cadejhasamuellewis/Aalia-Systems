import React from "react";

export function V2() {
  const brandColors = {
    bg: "hsl(210, 20%, 95%)",
    fg: "hsl(220, 15%, 12%)",
    primary: "hsl(193, 55%, 22%)",
    accent: "hsl(12, 30%, 45%)",
    panel: "#ffffff",
    border: "hsl(210, 25%, 80%)"
  };

  return (
    <div 
      className="min-h-screen font-['DM_Sans'] overflow-x-hidden" 
      style={{ backgroundColor: brandColors.bg, color: brandColors.fg }}
    >
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8 sticky top-0 z-50 mix-blend-multiply">
        <a href="#" className="font-['Playfair_Display'] text-2xl font-bold tracking-tight">
          Aalia Systems
        </a>
        <a 
          href="#" 
          className="px-6 py-3 rounded-none text-white text-sm font-medium tracking-wide hover:opacity-90 transition-opacity shadow-sm"
          style={{ backgroundColor: brandColors.primary }}
        >
          Start a project
        </a>
      </nav>

      {/* HERO — The Work */}
      <section className="px-6 md:px-12 pb-24 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[85vh]">
          {/* Panel 1 */}
          <div 
            className="flex flex-col p-8 md:p-12 border transition-transform hover:-translate-y-1 shadow-sm"
            style={{ backgroundColor: brandColors.panel, borderColor: brandColors.border }}
          >
            <div className="mb-12">
              <div className="text-xs font-bold tracking-widest mb-3 uppercase" style={{ color: brandColors.accent }}>
                Service 01
              </div>
              <h2 className="font-['Playfair_Display'] text-3xl">Website Build + Handoff</h2>
            </div>
            
            {/* Visual: Sitemap grid */}
            <div className="flex-grow flex items-center justify-center py-12">
              <div className="grid grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12 relative w-full max-w-sm">
                {/* Connecting lines */}
                <div className="absolute top-[40px] left-1/2 w-[66%] h-12 -translate-x-1/2 border-t border-l border-r" style={{ borderColor: brandColors.border }}></div>
                <div className="absolute top-[40px] left-[16.5%] h-12 border-l hidden md:block" style={{ borderColor: brandColors.border }}></div>
                
                <div className="col-span-3 flex justify-center z-10">
                  <div className="px-4 py-2 text-xs border bg-white shadow-sm" style={{ borderColor: brandColors.border, color: brandColors.fg }}>Home</div>
                </div>
                
                <div className="flex justify-center z-10">
                  <div className="px-2 md:px-4 py-2 text-xs border bg-white w-full text-center shadow-sm" style={{ borderColor: brandColors.border, color: brandColors.fg }}>About</div>
                </div>
                <div className="flex justify-center z-10">
                  <div className="px-2 md:px-4 py-2 text-xs border bg-white w-full text-center shadow-sm" style={{ borderColor: brandColors.border, color: brandColors.fg }}>Services</div>
                </div>
                <div className="flex justify-center z-10">
                  <div className="px-2 md:px-4 py-2 text-xs border bg-white w-full text-center shadow-sm" style={{ borderColor: brandColors.border, color: brandColors.fg }}>Work</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-sm leading-relaxed max-w-sm opacity-80">
              A foundational website designed, built, and thoroughly documented. Handed over completely for your team to manage.
            </div>
          </div>

          {/* Panel 2 */}
          <div 
            className="flex flex-col p-8 md:p-12 border transition-transform hover:-translate-y-1 shadow-sm"
            style={{ backgroundColor: brandColors.panel, borderColor: brandColors.border }}
          >
            <div className="mb-12">
              <div className="text-xs font-bold tracking-widest mb-3 uppercase" style={{ color: brandColors.accent }}>
                Service 02
              </div>
              <h2 className="font-['Playfair_Display'] text-3xl">Managed Website Platform</h2>
            </div>
            
            {/* Visual: Status data */}
            <div className="flex-grow flex items-center justify-center py-12">
              <div className="w-full max-w-sm flex flex-col gap-4 bg-gray-50/50 p-6 border rounded-sm" style={{ borderColor: brandColors.border }}>
                {[
                  { label: "Website", status: "Online", color: "hsl(150, 40%, 45%)" },
                  { label: "SSL", status: "Active", color: "hsl(150, 40%, 45%)" },
                  { label: "Domain", status: "Connected", color: "hsl(150, 40%, 45%)" },
                  { label: "Invoice", status: "Paid", color: brandColors.accent }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b last:border-0" style={{ borderColor: brandColors.border }}>
                    <span className="text-sm font-medium">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-xs uppercase tracking-wider font-bold opacity-70">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-sm leading-relaxed max-w-sm opacity-80">
              We host, maintain, and support your website month-to-month, ensuring peak performance without your intervention.
            </div>
          </div>

          {/* Panel 3 */}
          <div 
            className="flex flex-col p-8 md:p-12 border transition-transform hover:-translate-y-1 shadow-sm"
            style={{ backgroundColor: brandColors.panel, borderColor: brandColors.border }}
          >
            <div className="mb-12">
              <div className="text-xs font-bold tracking-widest mb-3 uppercase" style={{ color: brandColors.accent }}>
                Service 03
              </div>
              <h2 className="font-['Playfair_Display'] text-3xl">Custom Documents + Forms</h2>
            </div>
            
            {/* Visual: Overlapping documents */}
            <div className="flex-grow flex items-center justify-center py-12">
              <div className="relative w-48 h-48">
                {/* Doc 1 */}
                <div 
                  className="absolute top-0 right-0 w-32 h-40 border bg-white p-4 shadow-sm"
                  style={{ borderColor: brandColors.border, transform: "rotate(6deg)" }}
                >
                  <div className="w-1/2 h-1 bg-gray-200 mb-4"></div>
                  <div className="w-full h-1 bg-gray-100 mb-2"></div>
                  <div className="w-4/5 h-1 bg-gray-100 mb-2"></div>
                  <div className="w-full h-1 bg-gray-100"></div>
                </div>
                {/* Doc 2 */}
                <div 
                  className="absolute top-4 right-6 w-32 h-40 border bg-white p-4 shadow-sm"
                  style={{ borderColor: brandColors.border, transform: "rotate(-3deg)" }}
                >
                  <div className="w-1/2 h-1 bg-gray-300 mb-4"></div>
                  <div className="w-full h-1 bg-gray-200 mb-2"></div>
                  <div className="w-4/5 h-1 bg-gray-200 mb-2"></div>
                  <div className="w-full h-1 bg-gray-200"></div>
                </div>
                {/* Doc 3 */}
                <div 
                  className="absolute top-8 left-0 w-32 h-40 border bg-white p-4 shadow-md"
                  style={{ borderColor: brandColors.border, transform: "rotate(-12deg)" }}
                >
                  <div className="w-1/2 h-1.5 mb-4" style={{ backgroundColor: brandColors.primary }}></div>
                  <div className="w-full h-1 bg-gray-200 mb-2"></div>
                  <div className="w-4/5 h-1 bg-gray-200 mb-2"></div>
                  <div className="w-full h-1 bg-gray-200"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-sm leading-relaxed max-w-sm opacity-80">
              Interactive PDFs, fillable forms, and branded collateral designed to match your online presence perfectly.
            </div>
          </div>

          {/* Panel 4 */}
          <div 
            className="flex flex-col p-8 md:p-12 border transition-transform hover:-translate-y-1 shadow-sm"
            style={{ backgroundColor: brandColors.panel, borderColor: brandColors.border }}
          >
            <div className="mb-12">
              <div className="text-xs font-bold tracking-widest mb-3 uppercase" style={{ color: brandColors.accent }}>
                Service 04
              </div>
              <h2 className="font-['Playfair_Display'] text-3xl">Long-Term Digital Support</h2>
            </div>
            
            {/* Visual: Vertical timeline */}
            <div className="flex-grow flex items-center justify-center py-12">
              <div className="relative border-l-2 ml-4 pl-6 py-2 space-y-6 w-full max-w-[220px]" style={{ borderColor: brandColors.border }}>
                {[
                  { month: "JUL", task: "Quarterly Review" },
                  { month: "AUG", task: "Content Update" },
                  { month: "SEP", task: "Security Audit" },
                  { month: "OCT", task: "Quarterly Review" },
                  { month: "NOV", task: "Feature Addition" }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div 
                      className="absolute -left-[31px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 bg-white" 
                      style={{ borderColor: brandColors.primary }}
                    ></div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold opacity-60 w-10">{item.month}</span>
                      <span className="text-right flex-1 truncate">{item.task}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-sm leading-relaxed max-w-sm opacity-80">
              On-demand retainer services for strategic updates, ongoing iteration, and continued growth of your platform.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — After the work, the pitch */}
      <section className="px-6 py-24 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[0.2em] mb-8 uppercase" style={{ color: brandColors.accent }}>
          Aalia Systems
        </span>
        <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
          Your website, built and managed with structure.
        </h1>
        <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl mb-12">
          Aalia builds professional websites and gives clients organized options for handoff, monthly management, custom documents, and long-term digital support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#" 
            className="px-8 py-4 text-white font-medium text-sm text-center shadow-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: brandColors.primary }}
          >
            Start a project
          </a>
          <a 
            href="#" 
            className="px-8 py-4 border font-medium text-sm text-center bg-white hover:bg-black/5 transition-colors"
            style={{ borderColor: brandColors.border, color: brandColors.fg }}
          >
            View services
          </a>
        </div>
      </section>

      {/* SECTION 3 — Four service paths */}
      <section className="px-6 md:px-12 py-24 border-t bg-white" style={{ borderColor: brandColors.border }}>
        <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-16 max-w-2xl">Choose the support level your business needs.</h2>
        
        <div className="flex flex-col">
          {[
            {
              num: "01",
              title: "Website Build + Handoff",
              desc: "A one-time project delivering a complete, optimized website ready for your team to run."
            },
            {
              num: "02",
              title: "Managed Website Platform",
              desc: "Ongoing hosting, maintenance, and technical support wrapped in a predictable monthly fee."
            },
            {
              num: "03",
              title: "Custom Documents + Forms",
              desc: "Extending your brand into essential operational materials and interactive client touchpoints."
            },
            {
              num: "04",
              title: "Long-Term Digital Support",
              desc: "A dedicated partner for continuous improvements, strategic updates, and technical guidance."
            }
          ].map((service, i) => (
            <a 
              key={i} 
              href="#" 
              className="group flex flex-col md:flex-row items-start md:items-center py-10 border-b relative"
              style={{ borderColor: brandColors.border }}
            >
              <span className="text-4xl md:text-5xl font-light mb-4 md:mb-0 md:w-32 transition-colors group-hover:text-current" style={{ color: `${brandColors.accent}50` }}>
                {service.num}
              </span>
              <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl flex-1 mb-3 md:mb-0">
                {service.title}
              </h3>
              <p className="md:w-1/3 text-sm opacity-70 leading-relaxed pr-8">
                {service.desc}
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
                <div className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors group-hover:bg-black group-hover:text-white" style={{ borderColor: brandColors.border }}>
                  →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 4 — Client platform */}
      <section className="px-6 md:px-12 py-24 border-t" style={{ borderColor: brandColors.border, backgroundColor: brandColors.bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-4">A private platform for managed clients.</h2>
            <p className="opacity-70 max-w-xl text-lg">Every managed client receives access to a dedicated dashboard to view invoices, submit support tickets, and track ongoing work.</p>
          </div>
          
          {/* Browser frame mockup */}
          <div className="rounded-t-lg border border-b-0 overflow-hidden shadow-2xl bg-white" style={{ borderColor: brandColors.border }}>
            {/* Browser chrome */}
            <div className="h-10 flex items-center px-4 gap-2 border-b bg-gray-50/80" style={{ borderColor: brandColors.border }}>
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            {/* App UI */}
            <div className="flex flex-col md:flex-row min-h-[500px]">
              {/* Sidebar */}
              <div className="w-full md:w-64 border-r bg-gray-50/30 p-6 flex flex-col gap-6" style={{ borderColor: brandColors.border }}>
                <div className="font-['Playfair_Display'] font-bold text-lg mb-4">Acme Corp</div>
                <div className="space-y-2 text-sm opacity-80">
                  <div className="font-medium px-3 py-2 bg-white rounded shadow-sm border" style={{ borderColor: brandColors.border }}>Overview</div>
                  <div className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer transition-colors">Invoices</div>
                  <div className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer transition-colors">Support Tickets</div>
                  <div className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer transition-colors">Analytics</div>
                </div>
              </div>
              {/* Content area */}
              <div className="flex-1 p-6 md:p-10">
                <h3 className="text-2xl font-bold mb-8 font-['Playfair_Display']">Good morning, Sarah.</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="border p-5 rounded-sm shadow-sm" style={{ borderColor: brandColors.border }}>
                    <div className="text-xs opacity-60 mb-3 uppercase tracking-wide font-bold">System Status</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      <span className="font-medium text-sm">All systems operational</span>
                    </div>
                  </div>
                  <div className="border p-5 rounded-sm shadow-sm" style={{ borderColor: brandColors.border }}>
                    <div className="text-xs opacity-60 mb-3 uppercase tracking-wide font-bold">Next Invoice</div>
                    <div className="font-medium text-sm">Nov 1, 2023</div>
                  </div>
                  <div className="border p-5 rounded-sm shadow-sm" style={{ borderColor: brandColors.border }}>
                    <div className="text-xs opacity-60 mb-3 uppercase tracking-wide font-bold">Open Tickets</div>
                    <div className="font-medium text-sm">0</div>
                  </div>
                </div>
                <div className="border p-6 rounded-sm shadow-sm" style={{ borderColor: brandColors.border }}>
                  <h4 className="font-bold mb-4 text-sm uppercase tracking-wide opacity-60">Recent Activity</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm pb-4 border-b" style={{ borderColor: brandColors.border }}>
                      <span className="font-medium">Monthly performance report generated</span>
                      <span className="opacity-50 text-xs">Oct 15</span>
                    </div>
                    <div className="flex justify-between text-sm pb-4 border-b" style={{ borderColor: brandColors.border }}>
                      <span className="font-medium">Security patch applied</span>
                      <span className="opacity-50 text-xs">Oct 12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Brand-safe editing */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-10">Edit content without breaking the design.</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="text-sm font-bold opacity-30 pt-1">01</div>
                <div>
                  <h4 className="font-bold mb-2">Structured Fields</h4>
                  <p className="text-sm opacity-70 leading-relaxed">No drag-and-drop chaos. Just fill in the blanks and the site updates automatically.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-sm font-bold opacity-30 pt-1">02</div>
                <div>
                  <h4 className="font-bold mb-2">Brand Guardrails</h4>
                  <p className="text-sm opacity-70 leading-relaxed">Colors, fonts, and spacing are locked in. Everything you publish stays perfectly on brand.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-sm font-bold opacity-30 pt-1">03</div>
                <div>
                  <h4 className="font-bold mb-2">Real-time Preview</h4>
                  <p className="text-sm opacity-70 leading-relaxed">See your changes instantly before you hit publish. No surprises.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mock editor */}
          <div className="border p-8 shadow-xl bg-gray-50/30" style={{ borderColor: brandColors.border }}>
            <div className="flex justify-between items-center mb-8 border-b pb-4" style={{ borderColor: brandColors.border }}>
              <div className="font-bold font-['Playfair_Display'] text-lg">Edit "About Us"</div>
              <div className="px-4 py-2 text-xs font-bold text-white bg-black rounded-sm cursor-pointer shadow-sm">Save Changes</div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold opacity-60 mb-2 uppercase tracking-wide">Headline</label>
                <div className="w-full border p-4 text-sm font-['Playfair_Display'] text-xl bg-white shadow-sm" style={{ borderColor: brandColors.border }}>
                  Our story began in 2018.
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold opacity-60 mb-2 uppercase tracking-wide">Body Text</label>
                <div className="w-full border p-4 text-sm opacity-80 min-h-[120px] bg-white shadow-sm leading-relaxed" style={{ borderColor: brandColors.border }}>
                  We believe in building tools that respect both the creator and the audience. What started as a small consultancy has grown into...
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold opacity-60 mb-2 uppercase tracking-wide">Featured Image</label>
                <div className="w-full border-2 border-dashed p-10 text-center text-sm opacity-50 flex flex-col items-center justify-center gap-3 bg-white" style={{ borderColor: brandColors.border }}>
                  <div className="w-10 h-10 rounded bg-gray-200"></div>
                  <span className="font-medium">Click to upload new image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section 
        className="px-6 py-32 text-center flex flex-col items-center justify-center min-h-[50vh]"
        style={{ backgroundColor: brandColors.primary, color: "white" }}
      >
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl mb-10 max-w-3xl leading-[1.1]">
          Ready to bring order to your web presence?
        </h2>
        <a 
          href="#" 
          className="px-10 py-5 text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity shadow-md"
          style={{ backgroundColor: brandColors.accent }}
        >
          Start a project
        </a>
      </section>
      
      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center border-t text-sm opacity-70" style={{ borderColor: brandColors.border, backgroundColor: brandColors.bg }}>
        <div className="font-medium">&copy; {new Date().getFullYear()} Aalia Systems. All rights reserved.</div>
        <div className="flex gap-8 mt-6 md:mt-0 font-medium">
          <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
          <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
      </footer>
    </div>
  );
}
