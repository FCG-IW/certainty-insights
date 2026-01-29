import { PageLayout } from "@/components/layout";
import { Landmark, FileSearch, Scale, ShieldCheck, ClipboardCheck, BadgeCheck, Hash } from "lucide-react";

const services = [
  { icon: ClipboardCheck, name: "Contract Audit and Assurance Services" },
  { icon: FileSearch, name: "Contract Investigations and Enforcement" },
  { icon: Scale, name: "Forensic Accounting and Fraud Investigations" },
  { icon: ShieldCheck, name: "Fraud Prevention" },
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
      <article className="section-spacing">
        <div className="container-wide">
          {/* Hero Section */}
          <div className="max-w-3xl mb-16">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <Landmark className="h-4 w-4" />
                Our Services
              </span>
            </div>
            <h1 className="mb-8 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Government Agencies Services
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Supporting transparency, accountability, and stewardship of public resources.
            </p>
          </div>

          {/* Introduction Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-card to-card p-8 md:p-12 border border-primary/10 mb-16 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative max-w-3xl space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                Government agencies operate under heightened expectations for 
                <span className="font-semibold text-primary"> transparency, accountability, and stewardship</span> of public resources—and 
                FCG is built to support those mandates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We verify regulatory compliance and contract performance of vendors, 
                grantees, and awardees of government contracts to strengthen 
                accountability and safeguard taxpayer dollars.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Services for Government Entities
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Government Firm Certifications */}
          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-semibold mb-8 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Government Firm Certifications
            </h2>

            {/* UEI and CAGE */}
            <div className="grid gap-6 md:grid-cols-2 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.55s" }}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 border border-primary/10">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Unique Entity Identifier
                </div>
                <p className="text-2xl font-mono font-bold text-foreground">NCVRRUH2MQB6</p>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 border border-primary/10">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  CAGE Code
                </div>
                <p className="text-2xl font-mono font-bold text-foreground">8VS15</p>
              </div>
            </div>

            {/* Codes Grid */}
            <div className="grid gap-8 lg:grid-cols-2 mb-10">
              {/* NAICS Codes */}
              <div className="bg-card rounded-2xl p-6 border border-border opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Hash className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">NAICS Codes</h3>
                </div>
                <div className="space-y-3">
                  {naicsCodes.map((item) => (
                    <div key={item.code} className="flex gap-4 text-sm group">
                      <span className="font-mono text-primary font-semibold w-16 flex-shrink-0 group-hover:scale-105 transition-transform">
                        {item.code}
                      </span>
                      <span className="text-muted-foreground">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* NIGP Codes */}
              <div className="bg-card rounded-2xl p-6 border border-border opacity-0 animate-fade-in" style={{ animationDelay: "0.65s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Hash className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">NIGP Codes</h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {nigpCodes.map((item) => (
                    <div key={item.code} className="flex gap-4 text-sm group">
                      <span className="font-mono text-primary font-semibold w-14 flex-shrink-0 group-hover:scale-105 transition-transform">
                        {item.code}
                      </span>
                      <span className="text-muted-foreground text-xs">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Economic Certifications */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Social Economic Certifications</h3>
              </div>
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert} 
                    className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed pt-1">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
