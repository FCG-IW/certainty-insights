import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";
import { 
  ArrowRight, 
  FileCheck, 
  Search, 
  Scale, 
  ShieldCheck,
  CheckCircle2,
  Building2,
  FileText,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { 
    name: "Contract Audit & Assurance",
    description: "Comprehensive review of vendor contracts ensuring compliance with terms, conditions, and regulatory requirements.",
    icon: FileCheck,
    featured: true
  },
  { 
    name: "Contract Investigations",
    description: "Thorough investigation of contract performance issues and enforcement support.",
    icon: Search,
    featured: false
  },
  { 
    name: "Forensic Accounting",
    description: "Expert analysis to detect, investigate, and document financial irregularities.",
    icon: Scale,
    featured: false
  },
  { 
    name: "Fraud Prevention",
    description: "Proactive strategies and controls to identify vulnerabilities before they're exploited.",
    icon: ShieldCheck,
    featured: true
  },
];

const stats = [
  { value: "1000+", label: "Engagements" },
  { value: "20+", label: "Years Experience" },
  { value: "100%", label: "Compliance Rate" },
];

const naicsCodes = [
  { code: "541611", description: "Administrative & General Management Consulting" },
  { code: "541614", description: "Process & Logistics Consulting" },
  { code: "541219", description: "Other Accounting Services" },
  { code: "541618", description: "Other Management Consulting" },
  { code: "541211", description: "Offices of CPAs" },
];

const nigpCodes = [
  "91804", "91821", "91838", "91858", "91875", "94649", 
  "95839", "91806", "91832", "91849", "91870", "91888", "95816"
];

const certifications = [
  "Women-Owned Small Business (WOSB)",
  "Disadvantaged Business Enterprise (DBE)",
  "Minority Business Enterprise (MBE)",
  "Small Business Enterprise (SBE)",
  "Small Professional Services Firm (SPSF)",
];

export default function GovernmentPage() {
  return (
    <PageLayout>
      {/* Dramatic Hero */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-foreground text-background">
        {/* Large decorative number */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[40rem] font-bold text-background/[0.03] leading-none select-none pointer-events-none">
          G
        </div>
        
        {/* Accent bar */}
        <div className="absolute left-0 top-0 w-2 h-full bg-primary" />
        
        <div className="container-wide relative py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-foreground" />
                  </div>
                  <span className="text-sm font-medium tracking-[0.3em] uppercase text-primary">
                    Government Services
                  </span>
                </div>
              </Reveal>
              
              <Reveal delay={100}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
                  Protecting
                  <br />
                  <span className="text-primary">Public</span>
                  <br />
                  Trust
                </h1>
              </Reveal>
              
              <Reveal delay={200}>
                <p className="text-xl text-background/60 max-w-md leading-relaxed mb-12">
                  Expert oversight ensuring transparency, accountability, and 
                  stewardship of taxpayer resources.
                </p>
              </Reveal>
              
              <Reveal delay={300}>
                <Link 
                  to="/contact"
                  className="group inline-flex items-center gap-4 bg-primary text-foreground px-8 py-4 font-medium hover:bg-primary/90 transition-colors"
                >
                  Start a Conversation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
            
            <div className="hidden lg:block">
              <Reveal delay={200}>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={stat.label}
                      className={`p-6 ${index === 1 ? 'bg-primary text-foreground' : 'bg-background/5 border border-background/10'}`}
                    >
                      <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                      <div className={`text-sm ${index === 1 ? 'text-foreground/70' : 'text-background/50'}`}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StatementSection label="Our Mission">
        <>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-foreground">
            We verify regulatory compliance and contract performance of <span className="text-primary">vendors</span>, <span className="text-primary">grantees</span>, and <span className="text-primary">awardees</span> — strengthening accountability and safeguarding taxpayer dollars.
          </p>
        </>
      </StatementSection>

      {/* Services - Bento Grid */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container-wide">
          <Reveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-sm tracking-[0.2em] uppercase text-primary mb-4 block">
                  Capabilities
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  What We Do
                </h2>
              </div>
              <Link 
                to="/contact"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          
          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isLarge = service.featured;
              
              return (
                <Reveal 
                  key={service.name} 
                  delay={index * 100}
                >
                  <div 
                    className={`group relative overflow-hidden ${
                      isLarge 
                        ? 'lg:row-span-2 bg-foreground text-background' 
                        : 'bg-card border border-border'
                    } p-8 md:p-10 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-500`}
                  >
                    {/* Decorative corner */}
                    <div className={`absolute top-0 right-0 w-24 h-24 ${isLarge ? 'bg-primary/20' : 'bg-primary/5'} -translate-y-12 translate-x-12 rotate-45`} />
                    
                    <div>
                      <div className={`w-14 h-14 ${isLarge ? 'bg-primary' : 'bg-primary/10'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`h-7 w-7 ${isLarge ? 'text-foreground' : 'text-primary'}`} />
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-4 ${isLarge ? 'text-background' : 'text-foreground'} group-hover:text-primary transition-colors`}>
                        {service.name}
                      </h3>
                      
                      <p className={`leading-relaxed ${isLarge ? 'text-background/70' : 'text-muted-foreground'}`}>
                        {service.description}
                      </p>
                    </div>
                    
                    <div className={`mt-8 pt-6 border-t ${isLarge ? 'border-background/10' : 'border-border'}`}>
                      <span className={`text-5xl font-bold ${isLarge ? 'text-background/10' : 'text-primary/10'}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials - Split Design */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Left - Dark with IDs */}
          <div className="bg-foreground text-background py-24 md:py-32 px-8 md:px-16 lg:px-20">
            <Reveal>
              <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-8">
                Federal Registration
              </span>
            </Reveal>
            
            <Reveal delay={100}>
              <div className="space-y-12">
                <div>
                  <p className="text-background/50 text-sm mb-2">Unique Entity Identifier (UEI)</p>
                  <p className="text-4xl md:text-5xl font-mono font-bold tracking-wider">
                    NCVRR<span className="text-primary">UH2</span>MQB6
                  </p>
                </div>
                
                <div>
                  <p className="text-background/50 text-sm mb-2">CAGE Code</p>
                  <p className="text-4xl md:text-5xl font-mono font-bold tracking-wider">
                    8VS<span className="text-primary">15</span>
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="mt-16 pt-8 border-t border-background/10">
                <p className="text-sm text-background/50 mb-6">NAICS Codes</p>
                <div className="flex flex-wrap gap-3">
                  {naicsCodes.map((item) => (
                    <span 
                      key={item.code}
                      className="px-4 py-2 bg-background/5 border border-background/10 font-mono text-sm hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {item.code}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          
          {/* Right - Light with Certifications */}
          <div className="bg-card py-24 md:py-32 px-8 md:px-16 lg:px-20">
            <Reveal>
              <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-8">
                Certifications
              </span>
            </Reveal>
            
            <Reveal delay={100}>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Certified to serve at every level of government
              </h3>
            </Reveal>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Reveal key={cert} delay={150 + index * 50}>
                  <div className="group flex items-center gap-4 p-5 bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{cert}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            
            <Reveal delay={400}>
              <Link 
                to="/about/certifications"
                className="inline-flex items-center gap-2 mt-10 text-sm font-medium text-primary hover:underline"
              >
                View all certifications <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NIGP Codes - Minimal Strip */}
      <section className="py-12 bg-secondary/50 border-y border-border overflow-hidden">
        <div className="container-wide">
          <div className="flex items-center gap-8">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              NIGP Codes:
            </span>
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {nigpCodes.map((code) => (
                <span 
                  key={code}
                  className="px-3 py-1 bg-card border border-border font-mono text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors whitespace-nowrap"
                >
                  {code}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="relative bg-foreground text-background p-12 md:p-20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Reveal>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to strengthen accountability?
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="text-xl text-background/60">
                    Let's discuss how we can help protect your agency's interests 
                    and ensure compliance.
                  </p>
                </Reveal>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Reveal delay={200}>
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 bg-primary text-foreground px-8 py-4 font-medium hover:bg-primary/90 transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Reveal>
                <Reveal delay={300}>
                  <Link 
                    to="/services/financial-institutions"
                    className="inline-flex items-center justify-center gap-3 bg-transparent border border-background/20 text-background px-8 py-4 font-medium hover:bg-background/5 transition-colors"
                  >
                    Financial Services
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
