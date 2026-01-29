import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";

const values = [
  {
    number: "01",
    title: "Discipline",
    description:
      "Having performed thousands of field examinations, our seasoned, insight-driven professionals bring discipline and accountability to reduce risk and variability while promoting consistency.",
  },
  {
    number: "02",
    title: "Discovery",
    description:
      "Through agreed-upon procedures, we help our clients identify potential risks, analyze their impact, and offer practical guidance to make confident, well-supported credit decisions.",
  },
  {
    number: "03",
    title: "Diplomacy",
    description:
      "Our deep people skills and white-glove service builds trust as we balance firmness with empathy, especially in sensitive, high-stakes, or relationship-driven environments. We understand how to work across roles, cultures and personalities.",
  },
];

export default function ApproachPage() {
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
                  Our Approach
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={200}>
                <p className="text-xl text-muted-foreground font-light">
                  Partnership, shared expertise, and client-focused success at every step.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Statement Banner */}
      <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/20" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-2">
              <Reveal>
                <span className="text-sm tracking-[0.2em] uppercase text-primary">Philosophy</span>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <p className="text-2xl md:text-3xl lg:text-4xl leading-snug font-light">
                  Our core business values are centered on{" "}
                  <span className="text-primary font-medium">partnership</span>,{" "}
                  <span className="text-primary font-medium">shared expertise</span>, and{" "}
                  <span className="text-primary font-medium">client-focused success</span>.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-background/70 mt-8 leading-relaxed">
                  We operate as collaborative team players, communicating with clients at 
                  every step while upholding the highest standards of integrity and 
                  transparency in all our interactions.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="mb-16">
              <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-4">
                What Drives Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Our Values
              </h2>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-0 border-t border-l border-border">
            {values.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="group border-b border-r border-border p-10 md:p-12 hover:bg-primary/5 transition-colors duration-500 h-full">
                  <div className="mb-8">
                    <span className="text-7xl md:text-8xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Quote */}
      <section className="py-16 border-t border-border">
        <div className="container-wide">
          <Reveal>
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
              We also share knowledge with lenders investing across the capital structure 
              to help connect the dots.
            </p>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
