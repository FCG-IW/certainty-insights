import { PageLayout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const clients = [
  "Asset-Based Lenders",
  "Accounting Firms",
  "Cash-Flow Lenders",
  "Commercial Banks",
  "Factoring Companies",
  "Government Agencies",
  "Independent and Specialty Finance Companies",
  "Inventory and Floorplan Financing Providers",
];

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="section-spacing border-b border-border">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="max-w-xl">
              <h1 className="text-foreground mb-8">
                Delivering Actionable Insights and Inspiring Certainty.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When making informed credit decisions, you need accurate and reliable 
                information about an organization's financial or non-financial status. 
                That's where FCG comes in.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/services/financial-institutions"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium hover:bg-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  Editorial Image Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-foreground">
              Over the course of more than two decades in business, we have earned a 
              reputation for our deep analytical and accounting expertise, diplomatic 
              and consultative approach, and relentless work ethic. We are committed 
              to building trust through transparency and strong communication processes, 
              helping our clients and their customers navigate complex commercial lending, 
              investing and government contracting transactions successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-spacing-sm bg-secondary/50 border-y border-border">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold mb-8 text-foreground">
            Our clients include:
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center gap-3 text-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <Link
              to="/services/financial-institutions"
              className="group p-8 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                Financial Institutions
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Collateral field examinations, forensic accounting, and agreed-upon 
                procedures for lenders and financial institutions.
              </p>
              <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/services/government"
              className="group p-8 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                Government Entities
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Contract audit, compliance verification, and fraud prevention 
                services for federal, state, and local agencies.
              </p>
              <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
