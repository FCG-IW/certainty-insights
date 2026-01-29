import { PageLayout } from "@/components/layout";
import { BadgeCheck, Award, Building2 } from "lucide-react";

const certificationLogos = [
  { abbr: "WOSB", name: "Women-Owned Small Business" },
  { abbr: "MBE", name: "Minority Business Enterprise" },
  { abbr: "DBE", name: "Disadvantaged Business Enterprise" },
  { abbr: "SBE", name: "Small Business Enterprise" },
  { abbr: "HUB", name: "Historically Underutilized Business" },
];

const certifications = [
  "Women-Owned Small Business (WOSB) Federal Contracting Program",
  "Disadvantaged Business Enterprise Program (DBE), Historically Underutilized Business, N.C Department of Transportation",
  "Airport Concession Disadvantaged Business Enterprise (ACDBE) Historically Underutilized Business, N.C. Department of Transportation",
  "Minority Business Enterprise (MBE), Historically Underutilized Business (HUB), State of North Carolina",
  "Small Business Enterprise (SBE) Historically Underutilized Business (HUB), State of North Carolina",
  "Minority Business Enterprise (MBE) Charlotte Business INClusion, City of Charlotte",
  "Small Business Enterprise (SBE) Charlotte Business INClusion, City of Charlotte",
  "Small Professional Services Firm (SPSF), NC Department of Transportation",
  "Registered Vendor, MWSBE Program, Mecklenburg County, NC",
];

export default function CertificationsPage() {
  return (
    <PageLayout>
      <article className="section-spacing">
        <div className="container-wide">
          {/* Hero Section */}
          <div className="max-w-3xl mb-16">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <BadgeCheck className="h-4 w-4" />
                About FCG
              </span>
            </div>
            <h1 className="mb-8 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our Certifications
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Financial Compliance Group, Inc. is a certified minority woman-owned, 
              small business, and disadvantaged business enterprise headquartered in 
              North Carolina and working nationwide.
            </p>
          </div>

          {/* Certification Badges */}
          <div className="mb-16 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {certificationLogos.map((cert, index) => (
                <div 
                  key={cert.abbr}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 text-center border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="text-xl font-bold text-primary">{cert.abbr}</div>
                    <div className="text-xs text-muted-foreground mt-1 leading-tight">{cert.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certification List */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-2xl font-semibold mb-8 text-foreground flex items-center gap-3">
              <Building2 className="h-6 w-6 text-primary" />
              Social Economic Certifications
            </h2>
            <div className="grid gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <span className="text-foreground leading-relaxed pt-1">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
