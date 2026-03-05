import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";
import StatementSection from "@/components/ui/StatementSection";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { number: "01", name: "Collateral Field Examinations" },
  { number: "02", name: "Forensic Accounting and Fraud Investigations" },
  { number: "03", name: "Inventory and Fixed Asset Verifications" },
  { number: "04", name: "Specialty Field Examinations" },
  { number: "05", name: "Workout Support" },
  { number: "06", name: "Other Agreed Upon Procedures" },
];

const industries = [
  "Financial or operational challenges, such as those in restructuring or bankruptcy proceedings",
  "Rapid growth and needing capital to fund expansion, acquire inventory, or meet rising demand",
  "Large payrolls and receivables, such as those in staffing and professional services sectors",
  "Significant raw materials, work-in-progress, and finished goods, such as those in manufacturing and distribution",
  "Fluctuating or inconsistent cash flows, such as retailers, manufacturers, distributors",
  "Seasonal inventory needs or fluctuating sales, such as those in apparel and electronics",
  "Significant CAPEX investments, such as those in transportation, oilfield services, energy",
  "Cyclical market volatility, such as those in metals, mining, oil and gas",
  "Loan portfolios, such as auto finance companies, mortgage lenders, equipment finance firms",
];

export default function FinancialInstitutionsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary border-l-2 border-primary pl-4 mb-8">
                  Services
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
                  Financial<br />
                  <span className="text-primary">Institutions</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={200}>
                <p className="text-xl text-muted-foreground font-light">
                  Critical analysis enabling informed credit decisions with greater certainty.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StatementSection label="Expertise">
        <>
          <p className="text-2xl md:text-3xl leading-snug font-light">
            We have demonstrated success in <span className="text-primary font-medium">asset-based lending</span>, <span className="text-primary font-medium">collateral field examinations</span>, corporate loan fraud investigations, workout support, and other agreed-upon procedures.
          </p>
          <p className="text-lg text-background/70 mt-8 leading-relaxed">
            Helping lenders, commercial banks, and independent financial institutions protect their investments and make confident, well-supported decisions.
          </p>
        </>
      </StatementSection>

      {/* Services Grid */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Our Services
              </h2>
              <Link 
                to="/contact"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
            {services.map((service, index) => (
              <Reveal key={service.name} delay={index * 50}>
                <div className="group border-b border-r border-border p-8 md:p-10 hover:bg-primary/5 transition-colors duration-500 h-full">
                  <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors block mb-6">
                    {service.number}
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container-wide">
          <Reveal>
            <div className="mb-16">
              <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-4">
                Industries We Serve
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl">
                Comprehensive reviews across every stage of the business life cycle
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <Reveal delay={100}>
                <p className="text-lg text-muted-foreground leading-relaxed sticky top-32">
                  FCG conducts vital analysis of a borrower's assets, financial information, 
                  and operations to support lending decisions for a wide range of industries.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-0 border-t border-border">
                {industries.map((industry, index) => (
                  <Reveal key={index} delay={index * 50}>
                    <div className="flex items-start gap-6 py-6 border-b border-border hover:bg-card transition-colors">
                      <span className="text-2xl font-bold text-primary/30 w-10">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-foreground leading-relaxed">{industry}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container-wide">
          <Reveal>
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We customize engagements from supporting underwriting and credit personnel 
                on standard ABL structures to complex situations.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-lg font-medium hover:bg-primary transition-colors"
              >
                Discuss Your Needs
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
