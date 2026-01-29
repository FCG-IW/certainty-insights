import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";

const threeCs = [
  {
    number: "01",
    title: "Competent",
    description:
      "Demonstrating the necessary expertise, professional qualifications, good character, and robust quality control procedures to perform thorough and accurate examinations.",
  },
  {
    number: "02",
    title: "Collaborative",
    description:
      "Working effectively with the lender and the borrower to ensure clear communication, minimize disruption to business operations, accommodate specific client needs and integrate seamlessly to each client's environment.",
  },
  {
    number: "03",
    title: "Committed",
    description:
      "Showing dedication to meeting deadlines, providing consistent service quality, and maintaining ethical standards and professionalism throughout the engagement.",
  },
];

const milestones = [
  { value: "2002", label: "Founded" },
  { value: "1,000+", label: "Engagements" },
  { value: "20+", label: "Years of Service" },
];

export default function HistoryPage() {
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
                  Our History
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={200}>
                <p className="text-xl text-muted-foreground font-light">
                  Over two decades of trusted expertise in financial compliance and risk management.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-foreground text-background">
        <div className="container-wide">
          <div className="grid grid-cols-3 gap-8 text-center">
            {milestones.map((item, index) => (
              <Reveal key={item.label} delay={index * 100}>
                <div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm md:text-base text-background/70 tracking-wide uppercase">
                    {item.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="sticky top-32">
                  <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                    Our Story
                  </span>
                </div>
              </Reveal>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal delay={100}>
                <p className="text-2xl md:text-3xl leading-relaxed text-foreground font-light">
                  Financial Compliance Group was founded in 2002 to provide banks and 
                  independent financial services organizations with{" "}
                  <span className="text-primary font-medium">trusted experts</span> in 
                  field examinations, collateral reviews, and forensic investigations.
                </p>
              </Reveal>
              
              <Reveal delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Helping them manage risk, protect their investments, and maintain the 
                  integrity of their loan portfolios. Over a thousand engagements since 
                  then, the firm's services have expanded to help government agencies 
                  mitigate risk when analyzing vendors, grantees, and awardees.
                </p>
              </Reveal>
              
              <Reveal delay={300}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over a long career, our founder saw a need for expert professionals 
                  who are committed to achieving client and transaction success. She was 
                  inspired to launch the firm built on the foundation of the industry's 
                  three "Cs" for sound lending decisions.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Cs */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container-wide">
          <Reveal>
            <div className="mb-16">
              <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-4">
                Our Foundation
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                The Three Cs
              </h2>
            </div>
          </Reveal>
          
          <div className="space-y-0 border-t border-border">
            {threeCs.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="group grid md:grid-cols-12 gap-8 py-12 border-b border-border hover:bg-card transition-colors duration-500">
                  <div className="md:col-span-2">
                    <span className="text-5xl md:text-6xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                      {item.number}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
