export function V4() {
  const colors = {
    background: "#ffffff",
    foreground: "hsl(220, 15%, 12%)",
    primary: "hsl(193, 55%, 22%)",
    muted: "hsl(215, 15%, 40%)",
    border: "hsl(210, 25%, 80%)",
  };

  return (
    <div
      className="min-h-screen antialiased selection:bg-[#f0f0f0] flex flex-col"
      style={{ backgroundColor: colors.background, color: colors.foreground }}
    >
      {/* NAV */}
      <nav
        className="flex items-center justify-between px-8 md:px-16 py-8"
        style={{ borderBottom: `1px solid ${colors.border}` }}
      >
        <span className="font-['Playfair_Display'] font-medium text-xl tracking-tight">
          Aalia Systems
        </span>
        <a
          href="#"
          className="font-['Playfair_Display'] italic text-lg hover:opacity-80 transition-opacity"
          style={{ color: colors.primary }}
        >
          Start a project
        </a>
      </nav>

      <main className="flex-1 px-8 md:px-16 w-full max-w-[1600px] mx-auto">
        {/* HERO */}
        <section className="pt-24 pb-32 md:pt-40 md:pb-48">
          <h1
            className="font-['Playfair_Display'] text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] leading-[1.05] tracking-tight font-medium max-w-[95%] lg:max-w-[85%]"
          >
            Your website, built and managed with structure.
          </h1>
          <p
            className="font-['DM_Sans'] text-lg md:text-xl leading-relaxed max-w-lg mt-12 md:mt-24"
            style={{ color: colors.muted }}
          >
            Aalia builds professional websites and gives clients organized options
            for handoff, monthly management, custom documents, and long-term digital support.
          </p>
        </section>

        <div style={{ borderBottom: `1px solid ${colors.border}` }} />

        {/* SERVICES */}
        <section className="py-24">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-['DM_Sans'] text-sm tracking-widest uppercase font-medium">
              Services
            </h2>
            <span style={{ color: colors.border }}>——</span>
          </div>

          <div className="flex flex-col">
            {[
              {
                name: "Website Project",
                price: "Starting at $2,500",
                desc: "Custom build or redesign, prepared for handoff.",
              },
              {
                name: "Managed Website",
                price: "Monthly from $150",
                desc: "Updates, domain, SSL, files, Square invoicing, and client platform.",
              },
              {
                name: "Custom Documents + Forms",
                price: "Custom quote",
                desc: "Fillable forms, PDFs, email templates, service agreements.",
              },
              {
                name: "Long-Term Support Contract",
                price: "Contract quote",
                desc: "Steady website, documents, and digital systems partnership.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="py-10 flex flex-col gap-2"
                style={{ borderBottom: `1px solid ${colors.border}` }}
              >
                <div className="flex items-end justify-between w-full gap-4">
                  <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl whitespace-nowrap">
                    {service.name}
                  </h3>
                  <div
                    className="flex-1 border-b border-dotted mb-[6px] hidden md:block mx-4 opacity-50"
                    style={{ borderColor: colors.border }}
                  />
                  <span className="font-['DM_Sans'] whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
                <p
                  className="font-['DM_Sans'] italic text-sm md:text-base mt-1"
                  style={{ color: colors.muted }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-24">
          <h2 className="font-['DM_Sans'] text-sm tracking-widest uppercase font-medium mb-12">
            About
          </h2>
          <p className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
            Aalia is a boutique website management studio. We build professional websites
            for small businesses and give clients organized options for ongoing management,
            custom documents, and long-term digital support. Payments are handled through Square.
            Aalia does not store card data.
          </p>
        </section>

        <div style={{ borderBottom: `1px solid ${colors.border}` }} />

        {/* PLATFORM */}
        <section className="py-24">
          <h2 className="font-['DM_Sans'] text-sm tracking-widest uppercase font-medium mb-12">
            Client Platform
          </h2>
          <div className="max-w-2xl">
            <p className="font-['DM_Sans'] text-lg md:text-2xl leading-relaxed mb-8">
              Managed clients access a private platform for website status, requests,
              files, invoices, and approved edits. No code access required.
            </p>
            <a
              href="#"
              className="font-['Playfair_Display'] italic text-xl hover:opacity-80 transition-opacity"
              style={{ color: colors.primary }}
            >
              Request platform access →
            </a>
          </div>
        </section>

        <div style={{ borderBottom: `1px solid ${colors.border}` }} />

        {/* CONTACT */}
        <section className="py-32 md:py-48">
          <h2 className="font-['DM_Sans'] text-sm tracking-widest uppercase font-medium mb-12">
            Contact
          </h2>
          <div className="max-w-3xl">
            <p className="font-['DM_Sans'] text-xl md:text-3xl leading-relaxed mb-16">
              Start a project — describe your business, current site (if any), and what you need.
            </p>
            <a
              href="#"
              className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-7xl italic hover:opacity-80 transition-opacity"
              style={{ color: colors.primary }}
            >
              → Start a project
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className="px-8 md:px-16 py-12"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <p
          className="font-['DM_Sans'] text-xs md:text-sm uppercase tracking-widest"
          style={{ color: colors.muted }}
        >
          Aalia Systems · Website management studio · Payments via Square · Clients keep ownership of their accounts.
        </p>
      </footer>
    </div>
  );
}
