import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";
import StatementSection from "@/components/ui/StatementSection";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import founderImage from "@/assets/founder.png";
import fcgLogotypeDark from "@/assets/FCG_Logotype_Dark 1.png";

const credentials = [
  "Master's Degree in Accounting and Financial Management, University of Maryland Global Campus",
  "Bachelor's Degree in Business Administration, Johnson C. Smith University",
  "Certified Fraud Examiner (CFE)",
];

const expertiseBadges = [
  { label: "Fraud Investigation", x: 14, y: 8 },
  { label: "Lending Due Diligence", x: 78, y: 41 },
  { label: "Forensic Financial Analysis", x: 30, y: 60 },
  { label: "Compliance Consulting", x: 56, y: 94 },
];

const expertiseBadgeGradient = "linear-gradient(94.82deg, #000a08, #00705a)";

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
                  Latimer, CFE
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={200}>
                <p className="text-xl text-muted-foreground font-light text-right mb-6">
                  Founder and President with over three decades of industry experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:dana@fcgllc.net"
                    className="group inline-flex items-center gap-3 bg-primary text-background px-5 py-3 font-medium hover:bg-foreground transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Connect via Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dana-campbell-latimer-cfe-6310b45/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 border border-primary px-5 py-3 font-medium hover:border-border hover:text-primary transition-colors"
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

      <StatementSection
        label=""
        backgroundImage={founderImage}
        backgroundImageOpacity={1}
        backgroundOverlayOpacity={0}
        blobOpacityScale={0.5}
        minHeight="clamp(560px, 78vh, 900px)"
      >
        <>
          <div className="relative w-full h-[360px] md:h-[450px] lg:h-[520px]" style={{ fontSize: "16px", lineHeight: 1.2 }}>
            <div className="hidden md:block absolute inset-0">
              {expertiseBadges.map((item, index) => (
                <span
                  key={item.label}
                  className="absolute inline-flex -translate-x-1/2 -translate-y-1/2 items-center rounded-xl border border-primary/35 px-5 py-3 text-[18px] font-semibold tracking-wide text-background shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-[calc(50%+4px)] hover:scale-[1.03] hover:border-primary/70 hover:brightness-110 hover:shadow-[0_14px_30px_rgba(0,0,0,0.45)]"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    backgroundImage: expertiseBadgeGradient,
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>

            <div className="md:hidden flex h-full flex-wrap content-center justify-center gap-4 px-2">
              {expertiseBadges.map((item, index) => (
                <Reveal key={`${item.label}-mobile`} delay={index * 80}>
                  <span
                    className="inline-flex items-center rounded-xl border border-primary/35 px-4 py-2 text-sm font-semibold tracking-wide text-background shadow-[0_8px_20px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-primary/70 hover:brightness-110 hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
                    style={{ backgroundImage: expertiseBadgeGradient }}
                  >
                    {item.label}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </>
      </StatementSection>

      {/* Bio Content */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Brand Panel */}
            <div className="lg:col-span-4">
              <Reveal>
                <div className="h-full min-h-[260px] md:min-h-[320px] lg:min-h-[520px] flex items-center justify-center px-4 md:px-6">
                  <img
                    src={fcgLogotypeDark}
                    alt="Financial Compliance Group"
                    className="w-full max-w-[360px] h-auto object-contain"
                  />
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
              <Link
                to="/about/approach"
                className="group flex items-center justify-between p-8 border border-border hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <div>
                  <span className="block text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Our Approach
                  </span>
                  <span className="text-sm text-muted-foreground">Discipline, Discovery, Diplomacy</span>
                </div>
                <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
              </Link>
            </Reveal>
            <Reveal delay={200}>
              <Link
                to="/about/history"
                className="group flex items-center justify-between p-8 border border-border hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <div>
                  <span className="block text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Our History
                  </span>
                  <span className="text-sm text-muted-foreground">Trusted since 2002</span>
                </div>
                <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
