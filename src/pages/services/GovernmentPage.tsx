import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";
import { 
  ArrowUpRight, 
  FileCheck, 
  Search, 
  Scale, 
  ShieldCheck,
  Building2,
  BadgeCheck,
  Award,
  Fingerprint,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { 
    name: "Contract Audit and Assurance Services",
    description: "Comprehensive review of vendor contracts to ensure compliance with terms, conditions, and regulatory requirements.",
    icon: FileCheck
  },
  { 
    name: "Contract Investigations and Enforcement",
    description: "Thorough investigation of contract performance issues and support for enforcement actions.",
    icon: Search
  },
  { 
    name: "Forensic Accounting and Fraud Investigations",
    description: "Expert analysis to detect, investigate, and document financial irregularities and fraudulent activities.",
    icon: Scale
  },
  { 
    name: "Fraud Prevention",
    description: "Proactive strategies and controls to identify vulnerabilities and prevent fraud before it occurs.",
    icon: ShieldCheck
  },
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
  { name: "Women-Owned Small Business (WOSB) Federal Contracting Program", icon: Award },
  { name: "Disadvantaged Business Enterprise Program (DBE), Historically Underutilized Business, N.C Department of Transportation", icon: BadgeCheck },
  { name: "Airport Concession Disadvantaged Business Enterprise (ACDBE) Historically Underutilized Business, N.C. Department of Transportation", icon: Building2 },
  { name: "Minority Business Enterprise (MBE), Historically Underutilized Business (HUB), State of North Carolina", icon: BadgeCheck },
  { name: "Small Business Enterprise (SBE) Historically Underutilized Business (HUB), State of North Carolina", icon: BadgeCheck },
  { name: "Minority Business Enterprise (MBE) Charlotte Business INClusion, City of Charlotte", icon: Building2 },
  { name: "Small Business Enterprise (SBE) Charlotte Business INClusion, City of Charlotte", icon: Building2 },
  { name: "Small Professional Services Firm (SPSF), NC Department of Transportation", icon: FileText },
  { name: "Registered Vendor, MWSBE Program, Mecklenburg County, NC", icon: Fingerprint },
];

export default function GovernmentPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.2em] uppercase text-primary border-l-2 border-primary pl-4 mb-8">
                  <Building2 className="h-4 w-4" />
                  Services
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
                  Government<br />
                  <span className="text-primary">Agencies</span>
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="text-xl text-muted-foreground font-light mt-8 max-w-xl">
                  Supporting transparency, accountability, and stewardship of public resources.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="bg-foreground text-background p-8 md:p-10 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20" />
                  <ShieldCheck className="h-12 w-12 text-primary mb-6" />
                  <p className="text-lg font-medium mb-2">Trusted Partner</p>
                  <p className="text-background/70 text-sm leading-relaxed">
                    Certified to serve federal, state, and local government entities with the highest standards of integrity.
                  </p>
                </div>
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
              <div>
                <span className="text-sm tracking-[0.2em] uppercase text-primary mb-4 block">
                  What We Do
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Our Services
                </h2>
              </div>
              <Link 
                to="/contact"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.name} delay={index * 100}>
                  <div className="group bg-card border border-border p-8 md:p-10 hover:border-primary/30 hover:shadow-lg transition-all duration-500 h-full">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                        <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors pr-4">
                            {service.name}
                          </h3>
                          <span className="text-3xl font-bold text-primary/20 flex-shrink-0">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
              <div className="bg-card p-8 md:p-10 border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">NAICS Codes</h3>
                </div>
                <div className="space-y-4">
                  {naicsCodes.map((item) => (
                    <div key={item.code} className="flex gap-6 text-sm border-b border-border pb-4 last:border-0 last:pb-0 group">
                      <span className="font-mono text-primary font-bold w-20 flex-shrink-0 group-hover:text-primary/80 transition-colors">
                        {item.code}
                      </span>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-card p-8 md:p-10 border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <Fingerprint className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">NIGP Codes</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {nigpCodes.map((item) => (
                    <div key={item.code} className="flex gap-4 text-sm group">
                      <span className="font-mono text-primary font-bold w-16 flex-shrink-0 group-hover:text-primary/80 transition-colors">
                        {item.code}
                      </span>
                      <span className="text-muted-foreground text-xs leading-relaxed group-hover:text-foreground transition-colors">
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
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Social Economic Certifications
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <div 
                      key={cert.name}
                      className="group flex items-start gap-4 p-6 bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground leading-relaxed">{cert.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
