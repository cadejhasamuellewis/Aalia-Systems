export function V1() {
  const colors = {
    bg: 'hsl(210, 20%, 95%)',
    fg: 'hsl(220, 15%, 12%)',
    primary: 'hsl(193, 55%, 22%)',
    accent: 'hsl(12, 30%, 45%)',
    white: '#ffffff',
    border: 'hsl(210, 25%, 80%)'
  };

  return (
    <div 
      className="min-h-screen w-full flex flex-col font-['DM_Sans'] selection:bg-[hsl(193,55%,22%)] selection:text-white"
      style={{ backgroundColor: colors.bg, color: colors.fg }}
    >
      {/* NAV */}
      <nav className="w-full px-8 py-6 flex justify-between items-center z-10 border-b" style={{ borderColor: colors.border, backgroundColor: colors.bg }}>
        <a href="#" className="font-['Playfair_Display'] text-2xl font-medium tracking-tight" style={{ color: colors.primary }}>
          Aalia Systems
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:opacity-70 transition-opacity">Services</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Platform</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Pricing</a>
          <a href="#" className="px-5 py-2.5 text-white transition-opacity hover:opacity-90" style={{ backgroundColor: colors.primary }}>
            Start a project
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="w-full min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 text-center">
        <span className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: colors.accent }}>Before we begin</span>
        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-medium max-w-4xl leading-[1.1] mb-16" style={{ color: colors.primary }}>
          What does your business need right now?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 text-left">
          {/* Tile 1 */}
          <a href="#" className="group p-8 transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md duration-300" style={{ backgroundColor: colors.white, border: `1px solid ${colors.border}` }}>
            <h3 className="font-['Playfair_Display'] text-2xl mb-3" style={{ color: colors.primary }}>Build a website</h3>
            <p className="text-sm leading-relaxed opacity-80">A custom site designed and built for your business.</p>
          </a>
          
          {/* Tile 2 - Selected */}
          <a href="#" className="group p-8 transition-transform hover:-translate-y-1 shadow-md duration-300" style={{ backgroundColor: colors.primary, color: colors.white, border: `1px solid ${colors.primary}` }}>
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-['Playfair_Display'] text-2xl">Manage my site</h3>
              <span className="text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-sm" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>Selected</span>
            </div>
            <p className="text-sm leading-relaxed opacity-90">Monthly management, updates, domain, SSL, and client platform.</p>
          </a>

          {/* Tile 3 */}
          <a href="#" className="group p-8 transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md duration-300" style={{ backgroundColor: colors.white, border: `1px solid ${colors.border}` }}>
            <h3 className="font-['Playfair_Display'] text-2xl mb-3" style={{ color: colors.primary }}>Documents + forms</h3>
            <p className="text-sm leading-relaxed opacity-80">Branded fillable forms, PDFs, templates, and business files.</p>
          </a>

          {/* Tile 4 */}
          <a href="#" className="group p-8 transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md duration-300" style={{ backgroundColor: colors.white, border: `1px solid ${colors.border}` }}>
            <h3 className="font-['Playfair_Display'] text-2xl mb-3" style={{ color: colors.primary }}>Long-term support</h3>
            <p className="text-sm leading-relaxed opacity-80">Ongoing website, documents, and digital systems partnership.</p>
          </a>
        </div>

        <p className="text-sm mb-10 opacity-70">Each path leads to a tailored scope and pricing.</p>
        
        <a href="#" className="px-8 py-3 text-sm font-medium transition-colors hover:bg-black/5" style={{ color: colors.primary, border: `1px solid ${colors.primary}` }}>
          See all services
        </a>
      </header>

      {/* SECTION 2 */}
      <section className="w-full px-6 py-32 border-t" style={{ borderColor: colors.border, backgroundColor: colors.white }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl mb-16" style={{ color: colors.primary }}>Four ways to work with Aalia.</h2>
          
          <div className="flex flex-col border-t" style={{ borderColor: colors.border }}>
            {[
              { num: '01', title: 'Website Project', desc: 'Build or redesign, prepared for handoff' },
              { num: '02', title: 'Managed Website', desc: 'Ongoing management and client platform access' },
              { num: '03', title: 'Custom Documents + Forms', desc: 'Branded files, PDFs, templates, agreements' },
              { num: '04', title: 'Long-Term Support Contract', desc: 'Steady digital systems partner' }
            ].map((s, i) => (
              <a href="#" key={i} className="group flex flex-col md:flex-row md:items-center py-10 border-b transition-colors hover:bg-[hsl(210,20%,98%)]" style={{ borderColor: colors.border }}>
                <span className="text-sm font-mono opacity-40 w-16 mb-3 md:mb-0">{s.num}</span>
                <h3 className="font-['Playfair_Display'] text-2xl w-full md:w-2/5 mb-3 md:mb-0" style={{ color: colors.primary }}>{s.title}</h3>
                <p className="opacity-70 text-sm flex-1 mb-4 md:mb-0 pr-6">{s.desc}</p>
                <span className="text-sm font-bold tracking-wide w-auto md:w-32 text-left md:text-right transition-transform group-hover:translate-x-1" style={{ color: colors.accent }}>Learn more &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="w-full px-6 py-32 flex flex-col items-center" style={{ backgroundColor: colors.bg }}>
        <h2 className="font-['Playfair_Display'] text-4xl mb-16 text-center max-w-xl leading-tight" style={{ color: colors.primary }}>
          Managed clients get a private platform.
        </h2>
        
        <div className="w-full max-w-5xl rounded-md shadow-xl overflow-hidden flex flex-col" style={{ backgroundColor: colors.white, border: `1px solid ${colors.border}` }}>
          {/* Browser header */}
          <div className="h-14 w-full flex items-center px-5 border-b" style={{ borderColor: colors.border, backgroundColor: colors.white }}>
            <div className="flex gap-2.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="mx-auto px-8 py-1.5 text-xs opacity-50 font-mono rounded" style={{ backgroundColor: 'rgba(0,0,0,0.04)' }}>
              client.aaliasystems.com
            </div>
          </div>
          
          {/* Platform content */}
          <div className="flex flex-col md:flex-row h-[450px]">
            {/* Sidebar */}
            <div className="w-full md:w-56 border-b md:border-b-0 md:border-r p-6 flex flex-row md:flex-col gap-2 md:gap-4 text-sm overflow-x-auto md:overflow-visible" style={{ borderColor: colors.border, backgroundColor: 'hsl(210, 20%, 98%)' }}>
              <div className="font-['Playfair_Display'] text-lg mb-2 hidden md:block" style={{ color: colors.primary }}>Your Portal</div>
              <div className="font-bold px-3 py-2 rounded whitespace-nowrap" style={{ backgroundColor: 'rgba(0,0,0,0.04)', color: colors.primary }}>Website</div>
              <div className="opacity-60 hover:opacity-100 px-3 py-2 cursor-pointer transition-opacity whitespace-nowrap">Requests</div>
              <div className="opacity-60 hover:opacity-100 px-3 py-2 cursor-pointer transition-opacity whitespace-nowrap">Files</div>
              <div className="opacity-60 hover:opacity-100 px-3 py-2 cursor-pointer transition-opacity whitespace-nowrap">Invoices</div>
              <div className="opacity-60 hover:opacity-100 px-3 py-2 cursor-pointer transition-opacity whitespace-nowrap">Edits</div>
              <div className="opacity-60 hover:opacity-100 px-3 py-2 cursor-pointer transition-opacity md:mt-auto whitespace-nowrap">Support</div>
            </div>
            {/* Main area */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto">
              <h4 className="text-3xl font-['Playfair_Display'] mb-3" style={{ color: colors.primary }}>Website Status</h4>
              <p className="text-sm opacity-60 mb-10">All systems operational.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-sm border" style={{ borderColor: colors.border }}>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Uptime</div>
                  <div className="text-4xl font-['Playfair_Display']" style={{ color: colors.primary }}>99.9%</div>
                </div>
                <div className="p-8 rounded-sm border" style={{ borderColor: colors.border }}>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Last Update</div>
                  <div className="text-4xl font-['Playfair_Display']" style={{ color: colors.primary }}>2 hrs ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="w-full px-6 py-32" style={{ backgroundColor: colors.white, borderTop: `1px solid ${colors.border}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connector line on desktop */}
            <div className="hidden md:block absolute top-[30px] left-20 right-20 h-[1px] bg-black/10"></div>
            
            {[
              { num: '1', title: 'You describe what you need', desc: 'Fill out a brief, straightforward scope questionnaire.' },
              { num: '2', title: 'Aalia builds or organizes it', desc: 'Design, development, and system structuring executed with precision.' },
              { num: '3', title: 'You receive structured output', desc: 'Handoff or ongoing management via your secure client platform.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col pt-4 md:pt-0">
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center font-['Playfair_Display'] text-2xl mb-10 mx-auto md:mx-0 shadow-sm" style={{ backgroundColor: colors.bg, color: colors.primary, border: `1px solid ${colors.border}` }}>
                  {step.num}
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-center md:text-left" style={{ color: colors.primary }}>{step.title}</h3>
                <p className="text-sm opacity-70 text-center md:text-left leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="w-full px-6 py-32" style={{ backgroundColor: colors.bg, borderTop: `1px solid ${colors.border}` }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl mb-16 text-center" style={{ color: colors.primary }}>Transparent, scoped pricing.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Website Project', price: 'Starting at $3,500', note: 'One-time fee' },
              { title: 'Managed Website', price: 'Monthly from $250', note: 'Subscription' },
              { title: 'Custom Documents', price: 'Custom quote', note: 'Per project' },
              { title: 'Long-Term Support', price: 'Contract quote', note: 'Retainer' }
            ].map((plan, i) => (
              <div key={i} className="p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300" style={{ backgroundColor: colors.white, border: `1px solid ${colors.border}` }}>
                <div>
                  <h3 className="font-['Playfair_Display'] text-xl mb-8 leading-snug" style={{ color: colors.primary }}>{plan.title}</h3>
                  <div className="text-sm font-bold tracking-wide mb-2">{plan.price}</div>
                  <div className="text-xs opacity-60">{plan.note}</div>
                </div>
                <div className="mt-12 pt-6 border-t" style={{ borderColor: colors.border }}>
                  <a href="#" className="text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: colors.primary }}>View details &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="w-full px-6 py-40 text-center" style={{ backgroundColor: colors.primary, color: colors.white }}>
        <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl mb-12 max-w-3xl mx-auto leading-tight">
          Ready to answer that question?
        </h2>
        <a href="#" className="inline-block px-12 py-5 text-sm font-bold tracking-widest uppercase transition-transform hover:-translate-y-1 shadow-lg" style={{ backgroundColor: colors.accent, color: colors.white }}>
          Start a project
        </a>
      </section>
      
      {/* FOOTER */}
      <footer className="w-full px-8 py-12 flex flex-col md:flex-row justify-between items-center text-xs opacity-70" style={{ backgroundColor: colors.fg, color: colors.white }}>
        <div className="mb-6 md:mb-0 font-['Playfair_Display'] text-lg">Aalia Systems</div>
        <div className="flex gap-8">
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Client Login</a>
        </div>
      </footer>
    </div>
  );
}
