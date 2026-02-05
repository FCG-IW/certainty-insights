import { PageLayout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import interlockGraphic from "@/assets/interlock-graphic.png";
import { Reveal, useParallax } from "@/hooks/useScrollReveal";

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

export default function HomePage() {
  const { ref: parallaxRef, offset } = useParallax(0.3);

  return (
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
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  When making informed credit decisions, you need accurate and reliable 
                  information about an organization's financial or non-financial status. 
                  That's where FCG comes in.
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
      <section className="py-32 md:py-40 bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-2">
              <Reveal>
                <span className="text-sm tracking-[0.2em] uppercase text-primary">About</span>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <p className="text-2xl md:text-3xl lg:text-4xl leading-snug font-light">
                  Over two decades of{" "}
                  <span className="text-primary font-medium">deep analytical and accounting expertise</span>,{" "}
                  diplomatic and consultative approach, and{" "}
                  <span className="text-primary font-medium">relentless work ethic</span>. We are committed to 
                  building trust through transparency and strong communication, helping clients navigate 
                  complex commercial lending, investing, and government contracting transactions.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Numbered Editorial */}
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
          
          <div className="grid md:grid-cols-3 gap-0 border-t border-border">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 100}>
                <div className="group border-b md:border-b-0 md:border-r last:border-r-0 border-border p-8 md:p-10 hover:bg-secondary/50 transition-colors duration-500 cursor-default">
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-6xl md:text-7xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {value.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section - Marquee Style */}
      <section className="py-16 border-y border-border bg-secondary/30">
        <div className="container-wide">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                Trusted by industry leaders
              </span>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <Reveal key={client} delay={index * 50}>
                <div className="group text-center py-6 px-4 hover:bg-card transition-colors duration-300 cursor-default">
                  <span className="text-sm md:text-base text-foreground font-medium group-hover:text-primary transition-colors">
                    {client}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
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
              <p className="text-xl text-muted-foreground">
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
  );
}
