import { useEffect, useMemo, useRef, useState } from "react";
import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";
import StatementSection from "@/components/ui/StatementSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import interlockGraphic from "@/assets/interlock-graphic.png";
import bannerMark from "@/assets/FCG_BannerMark_Green 1.png";
import logomarkGreen from "@/assets/logomark-green.png";

const values = [
  {
    number: "01",
    title: "Discipline",
    image: bannerMark,
    imageAlt: "Discipline value visual",
    description:
      "Having performed thousands of field examinations, our seasoned, insight-driven professionals bring discipline and accountability to reduce risk and variability while promoting consistency.",
  },
  {
    number: "02",
    title: "Discovery",
    image: bannerMark,
    imageAlt: "Discovery value visual",
    description:
      "Through agreed-upon procedures, we help our clients identify potential risks, analyze their impact, and offer practical guidance to make confident, well-supported credit decisions.",
  },
  {
    number: "03",
    title: "Diplomacy",
    image: bannerMark,
    imageAlt: "Diplomacy value visual",
    description:
      "Our deep people skills and white-glove service builds trust as we balance firmness with empathy, especially in sensitive, high-stakes, or relationship-driven environments. We understand how to work across roles, cultures and personalities.",
  },
];

export default function ApproachPage() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [rotationSeed, setRotationSeed] = useState(0);
  const [featuredHeight, setFeaturedHeight] = useState<number | undefined>(undefined);
  const rightColumnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % values.length);
    }, 4800);

    return () => window.clearInterval(rotation);
  }, [rotationSeed]);

  useEffect(() => {
    const syncHeights = () => {
      if (window.innerWidth < 1024 || !rightColumnRef.current) {
        setFeaturedHeight(undefined);
        return;
      }

      setFeaturedHeight(rightColumnRef.current.offsetHeight);
    };

    syncHeights();

    const observer = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(() => syncHeights())
      : undefined;

    if (observer && rightColumnRef.current) {
      observer.observe(rightColumnRef.current);
    }

    window.addEventListener("resize", syncHeights);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", syncHeights);
    };
  }, [activeIndex]);

  const orderedValues = useMemo(
    () =>
      values.map((_, offset) => {
        const sourceIndex = (activeIndex + offset) % values.length;
        return {
          ...values[sourceIndex],
          sourceIndex,
        };
      }),
    [activeIndex]
  );

  const featuredValue = orderedValues[0];
  const adjacentValues = orderedValues.slice(1);

  return (
    <PageLayout>
      <style>{`
        @keyframes approach-swap {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
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
                <p className="text-xl text-muted-foreground font-light text-right">
                  Partnership, shared expertise, and client-focused success at every step.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

     <StatementSection label="Philosophy">
            Our core business values are centered on{" "}
            <span className="text-primary font-medium">partnership</span>,{" "}
            <span className="text-primary font-medium">shared expertise</span>, and{" "}
            <span className="text-primary font-medium">client-focused success</span>.{" "}
            We operate as collaborative team players, communicating with clients at every step while upholding the highest standards of integrity and transparency in all our interactions. We  share knowledge with lenders investing across the capital structure to help connect the dots.
          </StatementSection>

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

          <div
            key={activeIndex}
            className="grid lg:grid-cols-12 gap-4 md:gap-6 items-stretch animate-[approach-swap_550ms_ease]"
          >
            <Reveal delay={100} className="lg:col-span-8 h-full">
              <article
                className="h-full border border-primary/40 bg-card p-7 md:p-9 flex flex-col"
                style={{ height: featuredHeight ? `${featuredHeight}px` : undefined }}
              >
                <div className="mb-2">
                  <span className="inline-block text-xs tracking-[0.24em] uppercase text-primary/80 font-medium">
                    {featuredValue.number}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-5">{featuredValue.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-4xl">
                  {featuredValue.description}
                </p>
                <div className="rounded-md overflow-hidden border-b-4 border-primary bg-secondary/40 mt-2 flex-1 min-h-[260px]">
                  <img
                    src={featuredValue.image}
                    alt={featuredValue.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </article>
            </Reveal>

            <div ref={rightColumnRef} className="lg:col-span-4 grid grid-rows-2 gap-4 md:gap-6">
              {adjacentValues.map((item, index) => (
                <Reveal key={item.title} delay={200 + index * 100} className="h-full">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(item.sourceIndex);
                      setRotationSeed((seed) => seed + 1);
                    }}
                    className="h-full w-full border border-border bg-primary/10 p-7 md:p-9 flex flex-col text-left hover:bg-primary/15 hover:border-primary/40 transition-colors duration-300"
                    aria-label={`Show ${item.title} as featured value`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="inline-block text-xs tracking-[0.24em] uppercase text-primary/80 font-medium mt-1">
                        {item.number}
                      </span>
                      <div className="w-14 h-14 rounded-md bg-card/70 border border-border/70 p-2 flex items-center justify-center shrink-0">
                        <img src={item.image} alt={item.imageAlt} className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-5">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
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
                to="/about/founder"
                className="group flex items-center justify-between p-8 bg-card border border-border hover:border-primary transition-colors"
              >
                <div>
                  <span className="block text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Meet Our Founder
                  </span>
                  <span className="text-sm text-muted-foreground">Dana Campbell Latimer, CFE</span>
                </div>
                <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
              </Link>
            </Reveal>
            <Reveal delay={200}>
              <Link
                to="/about/history"
                className="group flex items-center justify-between p-8 bg-card border border-border hover:border-primary transition-colors"
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
