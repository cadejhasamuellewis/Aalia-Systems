export function V3() {
  const brand = {
    bg: "hsl(210, 20%, 95%)",
    fg: "hsl(220, 15%, 12%)",
    primary: "hsl(193, 55%, 22%)",
    accent: "hsl(12, 30%, 45%)",
    white: "#ffffff",
    border: "hsl(210, 25%, 80%)"
  };

  return (
    <div className="min-h-screen font-['DM_Sans'] text-sm tracking-wide" style={{ backgroundColor: brand.bg, color: brand.fg }}>
      {/* NAV */}
      <nav className="border-b" style={{ borderColor: brand.border, backgroundColor: brand.white }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between uppercase text-xs tracking-[0.2em]">
          <div>
            <a href="#" style={{ color: brand.primary }} className="font-bold">Aalia Systems</a>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Platform</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Client Login</a>
            <a href="#" style={{ color: brand.accent }} className="hover:opacity-70 transition-opacity">Start a project &rarr;</a>
          </div>
          <div className="md:hidden">
            <a href="#" style={{ color: brand.accent }} className="hover:opacity-70 transition-opacity">Menu</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-start">
          <div className="bg-white border rounded-sm overflow-hidden" style={{ borderColor: brand.border, backgroundColor: brand.white }}>
            <div className="border-b p-4 text-xs uppercase tracking-widest font-semibold" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>
              Entity Profile
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] border-b" style={{ borderColor: brand.border }}>
                <div className="p-4 uppercase text-xs font-semibold tracking-wider flex items-center border-r" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>Studio</div>
                <div className="p-4 font-['Playfair_Display'] text-3xl" style={{ color: brand.primary }}>Aalia Systems</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] border-b" style={{ borderColor: brand.border }}>
                <div className="p-4 uppercase text-xs font-semibold tracking-wider flex items-center border-r" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>Established</div>
                <div className="p-4 text-sm font-mono">2022</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] border-b" style={{ borderColor: brand.border }}>
                <div className="p-4 uppercase text-xs font-semibold tracking-wider flex items-center border-r" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>Type</div>
                <div className="p-4 text-sm">Boutique website management studio</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] border-b" style={{ borderColor: brand.border }}>
                <div className="p-4 uppercase text-xs font-semibold tracking-wider flex items-start sm:items-center border-r" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>Services</div>
                <div className="p-4 text-sm leading-relaxed">
                  4 core paths: Website Build &middot; Managed Website &middot; Documents + Forms &middot; Long-Term Support
                </div>
              </div>
              <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] border-b" style={{ borderColor: brand.border }}>
                <div className="p-4 uppercase text-xs font-semibold tracking-wider flex items-start sm:items-center border-r" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>Clients</div>
                <div className="p-4 text-sm">Small businesses, independent practices, local services</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr]" style={{ borderColor: brand.border }}>
                <div className="p-4 uppercase text-xs font-semibold tracking-wider flex items-start sm:items-center border-r" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>Billing</div>
                <div className="p-4 text-sm">Handled through Square. No card data stored.</div>
              </div>
            </div>
          </div>

          <div className="border rounded-sm p-6" style={{ borderColor: brand.border, backgroundColor: brand.primary, color: brand.bg }}>
            <div className="text-xs uppercase tracking-widest mb-6 font-semibold opacity-70">Client System Status</div>
            
            <div className="flex flex-col gap-4 font-mono text-xs sm:text-sm">
              <div className="flex items-center justify-between">
                <span>Website Online</span>
                <span className="flex-1 mx-4 border-b border-dashed opacity-30"></span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.bg }}></span> Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Domain Connected</span>
                <span className="flex-1 mx-4 border-b border-dashed opacity-30"></span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.bg }}></span> Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span>SSL Certificate</span>
                <span className="flex-1 mx-4 border-b border-dashed opacity-30"></span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.bg }}></span> Valid</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Update Queue</span>
                <span className="flex-1 mx-4 border-b border-dashed opacity-30"></span>
                <span>1 open</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Files</span>
                <span className="flex-1 mx-4 border-b border-dashed opacity-30"></span>
                <span>3 ready</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Invoice</span>
                <span className="flex-1 mx-4 border-b border-dashed opacity-30"></span>
                <span>Paid</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Approved Edits</span>
                <span className="flex-1 mx-4 border-b border-dashed opacity-30"></span>
                <span className="opacity-70">Available</span>
              </div>
            </div>

            <div className="mt-10 text-[10px] uppercase tracking-widest opacity-50 text-center">
              Sample client platform preview
            </div>
          </div>
        </section>

        {/* SECTION 2 - Services */}
        <section>
          <div className="text-xs uppercase tracking-widest mb-4 font-bold border-b pb-2" style={{ borderColor: brand.border }}>Services</div>
          <div className="overflow-x-auto bg-white border rounded-sm" style={{ borderColor: brand.border }}>
            <table className="w-full text-left text-sm min-w-[700px]">
              <thead className="text-[10px] sm:text-xs uppercase tracking-wider" style={{ backgroundColor: brand.bg, borderColor: brand.border }}>
                <tr>
                  <th className="p-4 border-b border-r font-semibold w-12 text-center" style={{ borderColor: brand.border }}>#</th>
                  <th className="p-4 border-b border-r font-semibold" style={{ borderColor: brand.border }}>Service</th>
                  <th className="p-4 border-b border-r font-semibold" style={{ borderColor: brand.border }}>Scope</th>
                  <th className="p-4 border-b font-semibold" style={{ borderColor: brand.border }}>Pricing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: brand.border }}>
                  <td className="p-4 border-r text-center font-mono text-xs opacity-60" style={{ borderColor: brand.border }}>01</td>
                  <td className="p-4 border-r font-medium" style={{ borderColor: brand.border, color: brand.primary }}>Website Project</td>
                  <td className="p-4 border-r opacity-90" style={{ borderColor: brand.border }}>New websites &middot; Redesigns &middot; Mobile-friendly &middot; Handoff</td>
                  <td className="p-4 font-mono text-xs opacity-80">Starting at $___</td>
                </tr>
                <tr className="border-b" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>
                  <td className="p-4 border-r text-center font-mono text-xs opacity-60" style={{ borderColor: brand.border }}>02</td>
                  <td className="p-4 border-r font-medium" style={{ borderColor: brand.border, color: brand.primary }}>Managed Website</td>
                  <td className="p-4 border-r opacity-90" style={{ borderColor: brand.border }}>Updates &middot; Domain &middot; SSL &middot; Files &middot; Platform access</td>
                  <td className="p-4 font-mono text-xs opacity-80">Monthly from $___</td>
                </tr>
                <tr className="border-b" style={{ borderColor: brand.border }}>
                  <td className="p-4 border-r text-center font-mono text-xs opacity-60" style={{ borderColor: brand.border }}>03</td>
                  <td className="p-4 border-r font-medium" style={{ borderColor: brand.border, color: brand.primary }}>Custom Documents</td>
                  <td className="p-4 border-r opacity-90" style={{ borderColor: brand.border }}>Fillable forms &middot; PDFs &middot; Templates &middot; Agreements</td>
                  <td className="p-4 font-mono text-xs opacity-80">Custom quote</td>
                </tr>
                <tr>
                  <td className="p-4 border-r text-center font-mono text-xs opacity-60" style={{ borderColor: brand.border }}>04</td>
                  <td className="p-4 border-r font-medium" style={{ borderColor: brand.border, color: brand.primary }}>Long-Term Support</td>
                  <td className="p-4 border-r opacity-90" style={{ borderColor: brand.border }}>Website + Documents + Platform + Task planning</td>
                  <td className="p-4 font-mono text-xs opacity-80">Contract quote</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3 - Platform */}
        <section>
          <div className="text-xs uppercase tracking-widest mb-4 font-bold border-b pb-2" style={{ borderColor: brand.border }}>Client Platform.</div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0 border rounded-sm overflow-hidden bg-white" style={{ borderColor: brand.border }}>
            <div className="p-6 sm:p-8 lg:border-r border-b lg:border-b-0" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>
              <div className="font-['Playfair_Display'] text-2xl mb-6" style={{ color: brand.primary }}>Structured Management.</div>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                Active clients receive a dedicated platform portal. No more digging through email threads to find your logo or domain details.
              </p>
              <ul className="space-y-4 text-sm flex flex-col">
                <li className="flex items-start gap-3">
                  <span className="font-mono mt-0.5 opacity-50 text-xs">+</span>
                  <span>Track website updates and active requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono mt-0.5 opacity-50 text-xs">+</span>
                  <span>Access brand files, logos, and raw assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono mt-0.5 opacity-50 text-xs">+</span>
                  <span>View domain, hosting, and SSL status</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono mt-0.5 opacity-50 text-xs">+</span>
                  <span>Review and download customized documents</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-white flex flex-col gap-4 overflow-x-auto">
              <div className="border rounded flex min-w-[500px]" style={{ borderColor: brand.border }}>
                <div className="w-48 border-r p-4 bg-gray-50 flex flex-col gap-2" style={{ borderColor: brand.border, backgroundColor: "hsl(210, 20%, 98%)" }}>
                  <div className="text-[10px] uppercase font-bold tracking-widest mb-2 opacity-50">Menu</div>
                  <div className="text-xs p-1.5 bg-white border rounded shadow-sm font-medium" style={{ borderColor: brand.border }}>Dashboard</div>
                  <div className="text-xs p-1.5 opacity-60">Requests</div>
                  <div className="text-xs p-1.5 opacity-60">Files</div>
                  <div className="text-xs p-1.5 opacity-60">Settings</div>
                </div>
                <div className="flex-1 p-6">
                  <div className="text-sm font-bold mb-4">Welcome back, Client.</div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border rounded p-3" style={{ borderColor: brand.border }}>
                      <div className="text-[10px] uppercase tracking-wider opacity-60 mb-1">Open Requests</div>
                      <div className="text-lg font-mono">1</div>
                    </div>
                    <div className="border rounded p-3" style={{ borderColor: brand.border }}>
                      <div className="text-[10px] uppercase tracking-wider opacity-60 mb-1">Files Ready</div>
                      <div className="text-lg font-mono">3</div>
                    </div>
                  </div>
                  <div className="border rounded" style={{ borderColor: brand.border }}>
                    <div className="border-b p-2 text-xs font-medium" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>Recent Activity</div>
                    <div className="p-3 text-[11px] border-b" style={{ borderColor: brand.border }}>Header navigation updated &mdash; Today, 9:00 AM</div>
                    <div className="p-3 text-[11px] opacity-60">Intake form PDF uploaded &mdash; Yesterday</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 - Process */}
        <section>
          <div className="text-xs uppercase tracking-widest mb-4 font-bold border-b pb-2" style={{ borderColor: brand.border }}>Workflow</div>
          <div className="flex flex-col border rounded-sm overflow-hidden bg-white" style={{ borderColor: brand.border }}>
            <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_1.5fr] border-b items-center" style={{ borderColor: brand.border }}>
              <div className="p-4 sm:p-6 border-r text-center font-mono font-bold h-full flex items-center justify-center" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>01</div>
              <div className="p-4 sm:p-6 font-['Playfair_Display'] text-xl md:border-r" style={{ borderColor: brand.border, color: brand.primary }}>You describe your needs</div>
              <div className="p-4 sm:p-6 text-sm opacity-80 hidden md:block">Submit your scope, deliverable requirements, and preferred timeline via our structured intake.</div>
            </div>
            <div className="p-4 text-sm opacity-80 md:hidden border-b" style={{ borderColor: brand.border }}>Submit your scope, deliverable requirements, and preferred timeline via our structured intake.</div>

            <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_1.5fr] border-b items-center" style={{ borderColor: brand.border }}>
              <div className="p-4 sm:p-6 border-r text-center font-mono font-bold h-full flex items-center justify-center" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>02</div>
              <div className="p-4 sm:p-6 font-['Playfair_Display'] text-xl md:border-r" style={{ borderColor: brand.border, color: brand.primary }}>Aalia organizes & builds</div>
              <div className="p-4 sm:p-6 text-sm opacity-80 hidden md:block">We handle development, design formatting, and operational setup behind the scenes.</div>
            </div>
            <div className="p-4 text-sm opacity-80 md:hidden border-b" style={{ borderColor: brand.border }}>We handle development, design formatting, and operational setup behind the scenes.</div>

            <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_1.5fr] items-center" style={{ borderColor: brand.border }}>
              <div className="p-4 sm:p-6 border-r text-center font-mono font-bold h-full flex items-center justify-center" style={{ borderColor: brand.border, backgroundColor: brand.bg }}>03</div>
              <div className="p-4 sm:p-6 font-['Playfair_Display'] text-xl md:border-r" style={{ borderColor: brand.border, color: brand.primary }}>You receive the output</div>
              <div className="p-4 sm:p-6 text-sm opacity-80 hidden md:block">Finalized assets delivered cleanly, with ongoing client platform access for tracking.</div>
            </div>
            <div className="p-4 text-sm opacity-80 md:hidden">Finalized assets delivered cleanly, with ongoing client platform access for tracking.</div>
          </div>
        </section>

        {/* SECTION 5 - Pricing */}
        <section>
          <div className="text-xs uppercase tracking-widest mb-4 font-bold border-b pb-2" style={{ borderColor: brand.border }}>Pricing Breakdown</div>
          <div className="bg-white border rounded-sm overflow-hidden" style={{ borderColor: brand.border }}>
            <table className="w-full text-left text-sm">
              <thead className="text-[10px] sm:text-xs uppercase tracking-wider" style={{ backgroundColor: brand.bg, borderColor: brand.border }}>
                <tr>
                  <th className="p-4 border-b font-semibold border-r" style={{ borderColor: brand.border }}>Plan / Service</th>
                  <th className="p-4 border-b font-semibold border-r hidden sm:table-cell" style={{ borderColor: brand.border }}>Structure</th>
                  <th className="p-4 border-b font-semibold text-right" style={{ borderColor: brand.border }}>Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: brand.border }}>
                  <td className="p-4 font-medium border-r" style={{ borderColor: brand.border }}>Website Project <span className="sm:hidden block text-xs opacity-60 mt-1 font-normal">One-time build</span></td>
                  <td className="p-4 border-r opacity-70 hidden sm:table-cell" style={{ borderColor: brand.border }}>One-time build</td>
                  <td className="p-4 text-right font-mono text-xs">Starting at $___</td>
                </tr>
                <tr className="border-b" style={{ borderColor: brand.border }}>
                  <td className="p-4 font-medium border-r" style={{ borderColor: brand.border }}>Managed Website <span className="sm:hidden block text-xs opacity-60 mt-1 font-normal">Monthly retainer</span></td>
                  <td className="p-4 border-r opacity-70 hidden sm:table-cell" style={{ borderColor: brand.border }}>Monthly retainer</td>
                  <td className="p-4 text-right font-mono text-xs">Monthly from $___</td>
                </tr>
                <tr className="border-b" style={{ borderColor: brand.border }}>
                  <td className="p-4 font-medium border-r" style={{ borderColor: brand.border }}>Custom Documents <span className="sm:hidden block text-xs opacity-60 mt-1 font-normal">Per asset</span></td>
                  <td className="p-4 border-r opacity-70 hidden sm:table-cell" style={{ borderColor: brand.border }}>Per asset</td>
                  <td className="p-4 text-right font-mono text-xs">Custom Quote</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium border-r" style={{ borderColor: brand.border }}>Long-Term Support <span className="sm:hidden block text-xs opacity-60 mt-1 font-normal">Contract basis</span></td>
                  <td className="p-4 border-r opacity-70 hidden sm:table-cell" style={{ borderColor: brand.border }}>Contract basis</td>
                  <td className="p-4 text-right font-mono text-xs">Custom Quote</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6 - Contact Row & Footer */}
        <section className="mt-8 mb-16">
          <a href="mailto:start@aaliasystems.com" className="block border rounded-sm bg-white hover:bg-gray-50 transition-colors" style={{ borderColor: brand.border }}>
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between group">
              <span className="text-sm font-bold uppercase tracking-wider mb-2 md:mb-0">Ready to start &mdash; Send an inquiry</span>
              <span className="text-sm font-mono flex items-center gap-4" style={{ color: brand.primary }}>
                start@aaliasystems.com 
                <span className="group-hover:translate-x-1 transition-transform inline-block" style={{ color: brand.accent }}>&rarr;</span>
              </span>
            </div>
          </a>

          <footer className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between text-[10px] sm:text-[11px] uppercase tracking-widest opacity-60" style={{ borderColor: brand.border }}>
            <div>Aalia Systems &middot; Website management studio</div>
            <div className="mt-2 md:mt-0">Payments via Square &middot; &copy; {new Date().getFullYear()}</div>
          </footer>
        </section>

      </main>
    </div>
  );
}
