import { PageLayout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Search, Users, CheckCircle } from "lucide-react";
import interlockGraphic from "@/assets/interlock-graphic.png";

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

const values = [
  {
    icon: Shield,
    title: "Discipline",
    description: "Seasoned professionals bringing accountability to reduce risk and promote consistency.",
  },
  {
    icon: Search,
    title: "Discovery",
    description: "Identify potential risks, analyze impact, and offer practical guidance for confident decisions.",
  },
  {
    icon: Users,
    title: "Diplomacy",
    description: "White-glove service balancing firmness with empathy in high-stakes environments.",
  },
];

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="section-spacing border-b border-border overflow-hidden">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="max-w-xl">
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-6 px-3 py-1 bg-primary/10 rounded-full">
                  <CheckCircle className="h-4 w-4" />
                  Trusted Since 2002
                </span>
              </div>
              <h1 className="text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Delivering Actionable Insights and Inspiring Certainty.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                When making informed credit decisions, you need accurate and reliable 
                information about an organization's financial or non-financial status. 
                That's where FCG comes in.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Link
                  to="/services/financial-institutions"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                >
                  Our Services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:border-primary/30 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: Interlock Graphic */}
            <div className="relative opacity-0 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl blur-2xl"></div>
                <div className="relative animate-float">
                  <img 
                    src={interlockGraphic} 
                    alt="FCG Interlock Graphic" 
                    className="w-full max-w-md mx-auto drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground font-light">
              Over the course of more than two decades in business, we have earned a 
              reputation for our <span className="font-semibold text-primary">deep analytical and accounting expertise</span>, 
              diplomatic and consultative approach, and relentless work ethic.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing-sm bg-gradient-to-b from-secondary/30 to-secondary/60">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold mb-12 text-center text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Our Approach
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-spacing-sm">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold mb-8 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Our clients include:
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client, index) => (
              <div
                key={client}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-sm text-foreground">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-b from-background to-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              How can we help?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide specialized services for both financial institutions and government entities.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <Link
              to="/services/financial-institutions"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 lg:p-10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  Financial Institutions
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Collateral field examinations, forensic accounting, and agreed-upon 
                  procedures for lenders and financial institutions.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </div>
            </Link>

            <Link
              to="/services/government"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 lg:p-10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  Government Entities
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Contract audit, compliance verification, and fraud prevention 
                  services for federal, state, and local agencies.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
