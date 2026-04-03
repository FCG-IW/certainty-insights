import { PageLayout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import interlockGraphic from "@/assets/interlock-graphic.png";
import { Reveal, useParallax } from "@/hooks/useScrollReveal";
import Timeline from "@/components/ui/Timeline";
import StatementSection from "@/components/ui/StatementSection";
import CountUp from "@/components/ui/CountUp";
import { useWordPressAcf } from "@/hooks/useWordPressAcf";
import { asCleanString, getAcfRecordArray, getAcfString } from "@/lib/wordpress";

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
    number: "01",
    title: "Discipline",
    description: "Seasoned professionals bringing accountability to reduce risk and promote consistency.",
  },
  {
    number: "02",
    title: "Discovery",
    description: "Identify potential risks, analyze impact, and offer practical guidance for confident decisions.",
  },
  {
    number: "03",
    title: "Diplomacy",
    description: "White-glove service balancing firmness with empathy in high-stakes environments.",
  },
];

const statementFallback =
  "Over the course of more than two decades of deep analytical and accounting expertise, diplomatic and consultative approach, and relentless work ethic. We are committed to building trust through transparency and strong communication processes, helping our clients and their customers navigate complex commercial lending, investing and government contracting transactions successfully.";

export default function HomePage() {
  const { ref: parallaxRef, offset } = useParallax(0.3);
  const { data: acf } = useWordPressAcf("home");

  const statementLabel = getAcfString(acf, "statement_label", "About");
  const statementContent = getAcfString(acf, "statement_content", statementFallback);
  const cmsValues = getAcfRecordArray(
    acf,
    "values_items",
    (item, index) => ({
      number: asCleanString(item.number, String(index + 1).padStart(2, "0")),
      title: asCleanString(item.title, "Value"),
      description: asCleanString(item.description),
    }),
    values,
  );

  return (
    <>
      {/* Marquee Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    <PageLayout>
      {/* Hero Section - Clean & Focused */}
      <section className="min-h-[85vh] flex items-center pt-8">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Typography */}
            <div className="space-y-10">
              <Reveal delay={0}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
                  Delivering{" "}
                  <span className="text-primary">Actionable Insights</span>{" "}
                  and Inspiring{" "}
                  <span className="text-primary">Certainty.</span>
                </h1>
              </Reveal>
              
              <Reveal delay={100}>
                <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
                  When making informed credit decisions, you need accurate
                  and reliable information about an organization's financial or
                  non-financial status. That's where FCG comes in.
                </p>
              </Reveal>
              
              <Reveal delay={200}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/services/financial-institutions"
                    className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 font-medium hover:bg-primary transition-colors duration-300"
                  >
                    Explore Services
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 border border-border px-7 py-3.5 font-medium hover:border-foreground transition-colors duration-300"
                  >
                    Get in Touch
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: Graphic */}
            <div ref={parallaxRef} className="hidden lg:block">
              <Reveal delay={300} direction="right">
                <div 
                  className="relative"
                  style={{ transform: `translateY(${offset}px)` }}
                >
                  <img 
                    src={interlockGraphic} 
                    alt="FCG Interlock Graphic" 
                    className="w-full max-w-sm mx-auto"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Statement Section - Magazine Style */}
      <StatementSection label={statementLabel}>
        {statementContent}
      </StatementSection>

      {/* Values Section - Timeline-style Our Approach */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Our Approach
              </h2>
              <Link
                to="/about/approach"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Learn more <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Timeline steps={cmsValues} />
        </div>
      </section>

      {/* Clients Section - Premium Marquee */}
      <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container-wide relative">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Our Clients
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-background">
                Trusted by Industry Leaders
              </h2>
            </div>
          </Reveal>
          
          {/* Animated Marquee - First Row */}
          <div className="relative mb-4 overflow-hidden">
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-foreground to-transparent z-10" />
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-foreground to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...clients, ...clients].map((client, index) => (
                <div 
                  key={`${client}-${index}`}
                  className="flex-shrink-0 mx-2 md:mx-3"
                >
                  <div className="px-4 py-2.5 md:px-6 md:py-4 border border-background/10 bg-background/5 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-default">
                    <span className="text-xs md:text-base text-background/90 font-medium whitespace-nowrap">
                      {client}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Animated Marquee - Second Row (Reverse) */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-foreground to-transparent z-10" />
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-foreground to-transparent z-10" />
            <div className="flex animate-marquee-reverse">
              {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
                <div 
                  key={`${client}-reverse-${index}`}
                  className="flex-shrink-0 mx-2 md:mx-3"
                >
                  <div className="px-4 py-2.5 md:px-6 md:py-4 border border-background/10 bg-background/5 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-default">
                    <span className="text-xs md:text-base text-background/90 font-medium whitespace-nowrap">
                      {client}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Marquee - Third Row (Mobile Only) */}
          <div className="relative mt-4 overflow-hidden md:hidden">
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-foreground to-transparent z-10" />
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-foreground to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...clients.slice(2), ...clients.slice(0, 2), ...clients.slice(2), ...clients.slice(0, 2)].map((client, index) => (
                <div
                  key={`${client}-mobile-third-${index}`}
                  className="flex-shrink-0 mx-2"
                >
                  <div className="px-4 py-2.5 border border-background/10 bg-background/5 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-default">
                    <span className="text-xs text-background/90 font-medium whitespace-nowrap">
                      {client}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats or Trust Indicators */}
          <Reveal delay={200}>
              <div className="mt-16 pt-12 border-t border-background/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <CountUp
                    end={20}
                    suffix="+"
                    className="block text-primary mb-2"
                    style={{
                      fontFamily: "Outfit, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(48px, 12vw, 80px)",
                      lineHeight: 1,
                    }}
                  />
                  <span className="text-sm text-background/60 uppercase tracking-wider">Years Experience</span>
                </div>
                <div>
                  <CountUp
                    end={1000}
                    suffix="+"
                    className="block text-primary mb-2"
                    style={{
                      fontFamily: "Outfit, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(48px, 12vw, 80px)",
                      lineHeight: 1,
                    }}
                  />
                  <span className="text-sm text-background/60 uppercase tracking-wider">Engagements</span>
                </div>
                <div>
                  <CountUp
                    end={100}
                    suffix="%"
                    className="block text-primary mb-2"
                    style={{
                      fontFamily: "Outfit, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(48px, 12vw, 80px)",
                      lineHeight: 1,
                    }}
                  />
                  <span className="text-sm text-background/60 uppercase tracking-wider">Commitment</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      

      {/* CTA Section - Split Design */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                How can we help?
              </h2>
              <p className="text-base md:text-xl text-muted-foreground">
                Specialized services for financial institutions and government entities
              </p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-0">
            <Reveal delay={100}>
              <Link
                to="/services/financial-institutions"
                className="group relative block bg-foreground text-background p-12 md:p-16 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="relative z-10">
                  <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-6">
                    Services
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors">
                    Financial<br />Institutions
                  </h3>
                  <p className="text-background/70 mb-8 max-w-sm">
                    Collateral field examinations, forensic accounting, and agreed-upon 
                    procedures for lenders.
                  </p>
                  <span className="inline-flex items-center gap-3 text-primary font-medium">
                    Learn more
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={200}>
              <Link
                to="/services/government"
                className="group relative block bg-primary text-foreground p-12 md:p-16 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="relative z-10">
                  <span className="inline-block text-sm tracking-[0.2em] uppercase text-foreground/70 mb-6">
                    Services
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Government<br />Entities
                  </h3>
                  <p className="text-foreground/70 mb-8 max-w-sm">
                    Contract audit, compliance verification, and fraud prevention 
                    for federal, state, and local agencies.
                  </p>
                  <span className="inline-flex items-center gap-3 text-foreground font-medium">
                    Learn more
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
      </PageLayout>
    </>
  );
}
