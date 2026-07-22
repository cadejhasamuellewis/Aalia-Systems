import { Layout } from "../components/layout/Layout";
import { Link } from "wouter";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "item-1",
      title: "Website Projects",
      description: "Custom designed and developed websites that establish a serious, professional online presence.",
      items: ["New websites", "Redesigns", "Mobile-friendly pages", "Contact and inquiry flow", "Handoff support"]
    },
    {
      id: "item-2",
      title: "Managed Websites",
      description: "Quiet, consistent technical management to ensure your site remains healthy and secure.",
      items: ["Website updates", "Update requests", "Domain notes", "SSL notes", "File organization", "Square invoice and subscription tracking", "Client platform access", "Domain and hosting coordination"]
    },
    {
      id: "item-3",
      title: "Custom Documents + Forms",
      description: "Operational materials designed to cohesively match your brand identity.",
      items: ["Fillable forms", "Intake forms", "Branded PDFs", "Email templates", "Service agreements", "Business document cleanup"]
    },
    {
      id: "item-4",
      title: "Long-Term Support",
      description: "Ongoing digital support for businesses that need a steady website and systems partner.",
      items: ["Ongoing digital support", "Website updates", "Document support", "Platform support", "Monthly task planning", "Client communication support"]
    }
  ];

  return (
    <Layout>
      <div className="py-24 lg:py-32 max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Services</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A boutique approach to building, managing, and sustaining your digital footprint. 
            Everything is handled with intention.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {services.map((service) => (
            <Accordion.Item 
              key={service.id} 
              value={service.id}
              className="border border-border bg-card rounded-xl overflow-hidden shadow-sm"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left group">
                  <span className="font-serif text-xl text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </span>
                  <ChevronDown className="text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.2s_ease-out] data-[state=open]:animate-[accordion-down_0.2s_ease-out]">
                <div className="p-6 pt-0 border-t border-border/50 bg-background/50">
                  <p className="text-muted-foreground mb-6 max-w-2xl">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <div className="mt-20 pt-10 border-t border-border text-center">
          <p className="text-muted-foreground mb-6">Ready to discuss your project needs?</p>
          <Link href="/start" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
            Start a project
          </Link>
        </div>
      </div>
    </Layout>
  );
}
