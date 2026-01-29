import { PageLayout } from "@/components/layout";

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
  "Collateral Field Examinations",
  "Forensic Accounting and Fraud Investigations",
  "Inventory and Fixed Asset Verifications",
  "Specialty Field Examinations",
  "Workout Support",
  "Other Agreed Upon Procedures",
];

export default function FinancialInstitutionsPage() {
  return (
    <PageLayout>
      <article className="section-spacing">
        <div className="container-narrow">
          <h1 className="mb-12 text-foreground">Financial Institutions Services</h1>

          <div className="space-y-8 text-foreground leading-relaxed">
            <p className="text-lg">
              We have demonstrated success in asset-based lending and collateral field 
              examinations, corporate loan fraud investigations, workout support, and 
              other agreed-upon procedures to help lenders and funders, such as 
              commercial banks and independent financial institutions, as well as 
              specialized lenders, protect their investments. The result: a critical 
              analysis that enables informed credit decisions with greater certainty, 
              ultimately leading to successful transactions.
            </p>

            <p>
              FCG conducts a vital analysis of a borrower's assets, financial 
              information, and operations to support lending decisions for a wide 
              range of industries. Our professionals have performed thousands of 
              comprehensive (full-scope examinations) and targeted reviews (limited-scope 
              and special-purpose examinations) of privately-held, family-owned, 
              sponsor-backed and public companies, across every stage of the business 
              life cycle, including those with:
            </p>
          </div>

          {/* Industries List */}
          <ul className="mt-8 space-y-4">
            {industries.map((industry) => (
              <li
                key={industry}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{industry}</span>
              </li>
            ))}
          </ul>

          {/* Customization Statement */}
          <div className="mt-12 p-6 bg-secondary/50 rounded-lg border border-border">
            <p className="text-foreground leading-relaxed">
              We customize engagements from supporting underwriting and credit 
              personnel on standard asset-based lending (ABL) structures to complex 
              situations (Bankruptcy, Mergers and Acquisitions (M&A), Recapitalizations), 
              adapting procedures to different lender needs and global requirements.
            </p>
          </div>

          {/* Services Section */}
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-semibold mb-8 text-foreground">
              Services include:
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border"
                >
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
