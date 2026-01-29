import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { name: "Contract Audit and Assurance Services" },
  { name: "Contract Investigations and Enforcement" },
  { name: "Forensic Accounting and Fraud Investigations" },
  { name: "Fraud Prevention" },
];

const naicsCodes = [
  { code: "541611", description: "Administrative management and General Management Consulting Services" },
  { code: "541614", description: "Process, Physical Distribution and Logistics Consulting Services" },
  { code: "541219", description: "Other Accounting Services" },
  { code: "541618", description: "Other Management Consulting Services" },
  { code: "541211", description: "Offices of Certified Public Accountants" },
];

const nigpCodes = [
  { code: "91804", description: "Accounting, Auditing, Budget Consulting" },
  { code: "91821", description: "Business Consulting" },
  { code: "91838", description: "Education & Training Consulting" },
  { code: "91858", description: "Governmental Consulting" },
  { code: "91875", description: "Management Consulting" },
  { code: "94649", description: "Financial Services (Not Otherwise Classified)" },
  { code: "95839", description: "Financial Management Services" },
  { code: "91806", description: "Administrative Consulting" },
  { code: "91832", description: "Consulting Services (Not Otherwise Classified)" },
  { code: "91849", description: "Finance & Economics Consulting" },
  { code: "91870", description: "Inventory Consulting" },
  { code: "91888", description: "Quality Assurance & Control Consulting" },
  { code: "95816", description: "Business Management Services" },
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

export default function GovernmentPage() {
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
                  Government<br />
                  <span className="text-primary">Agencies</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={200}>
                <p className="text-xl text-muted-foreground font-light">
                  Supporting transparency, accountability, and stewardship of public resources.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/20" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-2">
              <Reveal>
                <span className="text-sm tracking-[0.2em] uppercase text-primary">Mission</span>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <p className="text-2xl md:text-3xl leading-snug font-light">
                  Government agencies operate under heightened expectations for{" "}
                  <span className="text-primary font-medium">transparency</span>,{" "}
                  <span className="text-primary font-medium">accountability</span>, and{" "}
                  <span className="text-primary font-medium">stewardship</span> of public resources.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-background/70 mt-8 leading-relaxed">
                  We verify regulatory compliance and contract performance of vendors, 
                  grantees, and awardees of government contracts to strengthen 
                  accountability and safeguard taxpayer dollars.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
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
          
          <div className="grid md:grid-cols-2 gap-0 border-t border-l border-border">
            {services.map((service, index) => (
              <Reveal key={service.name} delay={index * 100}>
                <div className="group border-b border-r border-border p-10 md:p-12 hover:bg-primary/5 transition-colors duration-500">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors pr-8">
                      {service.name}
                    </h3>
                    <span className="text-4xl font-bold text-primary/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container-wide">
          <Reveal>
            <div className="mb-16">
              <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-4">
                Credentials
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Government Firm Certifications
              </h2>
            </div>
          </Reveal>

          {/* UEI and CAGE */}
          <div className="grid md:grid-cols-2 gap-0 mb-16">
            <Reveal delay={100}>
              <div className="bg-foreground text-background p-10 md:p-12">
                <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-4">
                  Unique Entity Identifier
                </span>
                <p className="text-3xl md:text-4xl font-mono font-bold">NCVRRUH2MQB6</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-primary text-foreground p-10 md:p-12">
                <span className="inline-block text-sm tracking-[0.2em] uppercase text-foreground/70 mb-4">
                  CAGE Code
                </span>
                <p className="text-3xl md:text-4xl font-mono font-bold">8VS15</p>
              </div>
            </Reveal>
          </div>

          {/* Codes Tables */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Reveal delay={100}>
              <div className="bg-card p-8 md:p-10 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-8">NAICS Codes</h3>
                <div className="space-y-4">
                  {naicsCodes.map((item) => (
                    <div key={item.code} className="flex gap-6 text-sm border-b border-border pb-4 last:border-0 last:pb-0">
                      <span className="font-mono text-primary font-bold w-20 flex-shrink-0">
                        {item.code}
                      </span>
                      <span className="text-muted-foreground">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-card p-8 md:p-10 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-8">NIGP Codes</h3>
                <div className="grid grid-cols-1 gap-3">
                  {nigpCodes.map((item) => (
                    <div key={item.code} className="flex gap-4 text-sm">
                      <span className="font-mono text-primary font-bold w-16 flex-shrink-0">
                        {item.code}
                      </span>
                      <span className="text-muted-foreground text-xs leading-relaxed">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Social Economic Certifications */}
          <Reveal delay={100}>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-8">
                Social Economic Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert}
                    className="flex items-start gap-4 p-6 bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <span className="text-sm font-bold text-primary/50">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
