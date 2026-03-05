import { PageLayout } from "@/components/layout";
import StatementSection from "@/components/ui/StatementSection";

import { Reveal } from "@/hooks/useScrollReveal";

const certificationBadges = [
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
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary border-l-2 border-primary pl-4 mb-8">
                  About FCG
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
                  Our<br />
                  <span className="text-primary">Certifications</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={200}>
                <p className="text-xl text-muted-foreground font-light">
                  A certified minority woman-owned, small business, and disadvantaged 
                  business enterprise working nationwide.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Badges */}
      <section className="py-16 bg-foreground text-background">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
            {certificationBadges.map((cert, index) => (
              <Reveal key={cert.abbr} delay={index * 50}>
                <div className="border-r border-background/10 last:border-r-0 text-center py-8 px-4">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {cert.abbr}
                  </div>
                  <div className="text-xs md:text-sm text-background/60 leading-tight">
                    {cert.name}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full Certifications List */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="mb-16">
              <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-4">
                Credentials
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Social Economic Certifications
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-0 border-t border-l border-border">
            {certifications.map((cert, index) => (
              <Reveal key={cert} delay={index * 50}>
                <div className="group flex items-start gap-6 p-8 border-b border-r border-border hover:bg-primary/5 transition-colors">
                  <span className="text-3xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-foreground leading-relaxed pt-1">
                    {cert}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatementSection label="About">
        <>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            Headquartered in North Carolina and serving clients nationwide.
          </p>
        </>
      </StatementSection>
    </PageLayout>
  );
}
