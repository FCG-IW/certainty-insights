import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";
import StatementSection from "@/components/ui/StatementSection";
import { ArrowRight, Mail, Linkedin } from "lucide-react";

const credentials = [
  "Master's Degree in Accounting and Financial Management, University of Maryland Global Campus",
  "Bachelor's Degree in Business Administration, Johnson C. Smith University",
  "Certified Fraud Examiner (CFE)",
];

const expertise = [
  "Fraud Investigation",
  "Lending Due Diligence",
  "Forensic Financial Analysis",
  "Compliance Consulting",
];

export default function FounderPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary border-l-2 border-primary pl-4 mb-8">
                  Leadership
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
                  Dana Campbell<br />
                  <span className="text-primary">Latimer, CFE</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={200}>
                <p className="text-xl text-muted-foreground font-light mb-6">
                  Founder and President with over three decades of industry experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:dana@fcgllc.net"
                    className="group inline-flex items-center gap-3 bg-foreground text-background px-5 py-3 font-medium hover:bg-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Connect via Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dana-campbell-latimer-cfe-6310b45/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 border border-border px-5 py-3 font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StatementSection label="Expertise">
        <>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {expertise.map((item, index) => (
              <Reveal key={item} delay={index * 50}>
                <span className="text-sm md:text-base tracking-wide text-background/80">
                  {item}
                </span>
              </Reveal>
            ))}
          </div>
        </>
      </StatementSection>

      {/* Bio Content */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Photo Placeholder */}
            <div className="lg:col-span-4">
              <Reveal>
                <div className="sticky top-32">
                  <div className="aspect-[3/4] bg-gradient-to-br from-secondary to-secondary/50 relative">
                    {/* Decorative Frame */}
                    <div className="absolute -inset-4 border border-primary/20" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-primary/20 mb-2">DCL</div>
                        <p className="text-sm text-muted-foreground">Photo Placeholder</p>
                      </div>
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-foreground text-background px-6 py-4">
                      <div className="text-3xl font-bold">30+</div>
                      <div className="text-sm text-background/70">Years Experience</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bio Text */}
            <div className="lg:col-span-8">
              <div className="max-w-2xl">
                <Reveal delay={100}>
                  <p className="text-2xl md:text-3xl leading-relaxed text-foreground font-light mb-8">
                    Dana Campbell Latimer is widely recognized for her expertise in{" "}
                    <span className="text-primary font-medium">fraud investigation</span>,{" "}
                    lending due diligence,{" "}
                    <span className="text-primary font-medium">forensic financial analysis</span>{" "}
                    and compliance consulting.
                  </p>
                </Reveal>

                <Reveal delay={200}>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Her analytical approach emphasizes both quantitative evaluation and 
                    qualitative insight, enabling stakeholders to make informed credit decisions.
                  </p>
                </Reveal>

                <Reveal delay={300}>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Beyond examinations, Dana is known for translating complex findings 
                    into clear, actionable recommendations. She has designed and delivered 
                    training programs for fraud detection, internal controls, and compliance 
                    best practices for financial institutions and corporate clients — 
                    equipping teams with practical tools to prevent and detect misconduct.
                  </p>
                </Reveal>

                <Reveal delay={400}>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Before founding FCG in 2002, Dana served as an examiner with a 
                    national field examination firm, performing field exams and audits 
                    as well as monitoring loan portfolios. Previously, she worked as an 
                    independent contractor through MSM Securities as a Fraud Prevention 
                    Inspector nationwide to perform site verifications and inspection of 
                    Medicare/Medicaid Provider Facilities to combat fraud, waste and abuse 
                    for the U.S. Government.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container-wide">
          <Reveal>
            <div className="mb-16">
              <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-4">
                Credentials
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Education & Certifications
              </h2>
            </div>
          </Reveal>

          <div className="space-y-0 border-t border-border">
            {credentials.map((credential, index) => (
              <Reveal key={credential} delay={index * 100}>
                <div className="flex items-center gap-8 py-8 border-b border-border hover:bg-card transition-colors">
                  <span className="text-4xl font-bold text-primary/30 w-16">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg text-foreground">{credential}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-4">
                Continue Exploring
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Learn More About FCG
              </h2>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Reveal delay={100}>
              <a
                href="/about/approach"
                className="group flex items-center justify-between p-8 border border-border hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <div>
                  <span className="block text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Our Approach
                  </span>
                  <span className="text-sm text-muted-foreground">Discipline, Discovery, Diplomacy</span>
                </div>
                <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
              </a>
            </Reveal>
            <Reveal delay={200}>
              <a
                href="/about/history"
                className="group flex items-center justify-between p-8 border border-border hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <div>
                  <span className="block text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Our History
                  </span>
                  <span className="text-sm text-muted-foreground">Trusted since 2002</span>
                </div>
                <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
