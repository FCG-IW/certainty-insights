import { PageLayout } from "@/components/layout";
import { Building2, FileSearch, Scale, Package, Wrench, FileText, TrendingUp, CheckCircle } from "lucide-react";

const industries = [
  "Financial or operational challenges, such as those in restructuring or bankruptcy proceedings",
  "Rapid growth and needing capital to fund expansion, acquire inventory, or meet rising demand, which often outpaces their immediate cash flow, such as those in e-commerce, digital services sectors",
  "Large payrolls and receivables, such as those in staffing and professional services sectors",
  "Significant raw materials, work-in-progress, and finished goods, such as those in manufacturing and distribution sectors",
  "Fluctuating or inconsistent cash flows, such as retailers, manufacturers, distributors, or commodity-based businesses",
  "Seasonal inventory needs or fluctuating sales, such as those in the apparel and electronics sectors",
  "Significant CAPEX investments, such as those in transportation, oilfield services, energy, technology and telecommunications sectors",
  "Cyclical market volatility, such as those in the metals, mining, oil and gas sectors",
  "Loan portfolios, such as auto finance companies, mortgage lenders, hard money real estate lenders, equipment finance companies, consumer lenders and litigation finance firms",
];

const services = [
  { icon: FileSearch, name: "Collateral Field Examinations" },
  { icon: Scale, name: "Forensic Accounting and Fraud Investigations" },
  { icon: Package, name: "Inventory and Fixed Asset Verifications" },
  { icon: TrendingUp, name: "Specialty Field Examinations" },
  { icon: Wrench, name: "Workout Support" },
  { icon: FileText, name: "Other Agreed Upon Procedures" },
];

export default function FinancialInstitutionsPage() {
  return (
    <PageLayout>
      <article className="section-spacing">
        <div className="container-wide">
          {/* Hero Section */}
          <div className="max-w-3xl mb-16">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <Building2 className="h-4 w-4" />
                Our Services
              </span>
            </div>
            <h1 className="mb-8 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Financial Institutions Services
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Critical analysis that enables informed credit decisions with greater certainty.
            </p>
          </div>

          {/* Introduction Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-card to-card p-8 md:p-12 border border-primary/10 mb-16 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative max-w-3xl space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                We have demonstrated success in <span className="font-semibold text-primary">asset-based lending and collateral field 
                examinations</span>, corporate loan fraud investigations, workout support, and 
                other agreed-upon procedures to help lenders and funders protect their investments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The result: a critical analysis that enables informed credit decisions with greater certainty, 
                ultimately leading to successful transactions.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Services Include
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Section */}
          <div className="mb-16">
            <div className="max-w-3xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Industries We Serve
              </h2>
              <p className="text-muted-foreground">
                FCG conducts vital analysis of a borrower's assets, financial information, and operations 
                to support lending decisions across every stage of the business life cycle, including companies with:
              </p>
            </div>
            <div className="grid gap-3">
              {industries.map((industry, index) => (
                <div
                  key={industry}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.03}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-foreground leading-relaxed">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Customization Statement */}
          <div className="relative overflow-hidden rounded-2xl bg-foreground text-background p-8 md:p-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative max-w-3xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Customized Engagements
              </h3>
              <p className="leading-relaxed text-background/90">
                We customize engagements from supporting underwriting and credit 
                personnel on standard asset-based lending (ABL) structures to complex 
                situations (Bankruptcy, Mergers and Acquisitions (M&A), Recapitalizations), 
                adapting procedures to different lender needs and global requirements.
              </p>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
