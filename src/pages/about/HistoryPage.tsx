import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";
import StatementSection from "@/components/ui/StatementSection";
import CountUp from "@/components/ui/CountUp";
import bannerMark from "@/assets/FCG_BannerMark_Green 1.png";
import badgeIcon from "@/assets/carbon_badge.svg";
import handshakeIcon from "@/assets/fluent_handshake-20-regular.svg";
import anchorIcon from "@/assets/material-symbols_anchor.svg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useWordPressAcf } from "@/hooks/useWordPressAcf";
import {
  asCleanString,
  getAcfRecordArray,
  getAcfString,
  getAcfStringArray,
  parseCountValue,
} from "@/lib/wordpress";

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
  { end: 2002, suffix: "", label: "Founded" },
  { end: 1000, suffix: "+", label: "Engagements" },
  { end: 20, suffix: "+", label: "Years of Service" },
];

const storyParagraphFallbacks = [
  "Financial Compliance Group was founded in 2002 to provide banks and independent financial services organizations with trusted experts in field examinations, collateral reviews, and forensic investigations, helping them manage risk, protect their investments, and maintain the integrity of their loan portfolios.",
  "Over a thousand engagements since then, the firm's services have expanded to help government agencies mitigate risk when analyzing vendors, grantees, and awardees.",
];

const threeCIcons = [badgeIcon, handshakeIcon, anchorIcon];

export default function HistoryPage() {
  const { data: acf } = useWordPressAcf("history");

  const cmsMilestones = getAcfRecordArray(
    acf,
    "milestones",
    (item) => {
      const rawValue = asCleanString(item.value, asCleanString(item.number, asCleanString(item.end, "0")));
      const { end, suffix } = parseCountValue(rawValue);

      return {
        end,
        suffix: asCleanString(item.suffix, suffix),
        label: asCleanString(item.label, "Milestone"),
      };
    },
    milestones,
  );

  const storyHeading = getAcfString(acf, "story_heading", "Our Story");
  const storyLogoUrl = getAcfString(acf, "story_logo_url", "");
  const storyParagraphs = getAcfStringArray(acf, "story_paragraphs", storyParagraphFallbacks);

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
                <p className="text-base md:text-xl text-muted-foreground font-medium text-left lg:text-right">
                  Over two decades of trusted expertise in financial compliance and risk management.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      
        <StatementSection  compact>
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center">
            {cmsMilestones.map((item, index) => (
              <Reveal key={item.label} delay={index * 100}>
                <div>
                  <CountUp
                    end={item.end}
                    suffix={item.suffix}
                    className="block text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2"
                  />
                  <div className="text-sm md:text-base text-background/70 tracking-wide uppercase">
                    {item.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </>
      </StatementSection>

      {/* Story Content */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="sticky top-32">
                  <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium">
                    {storyHeading}
                  </span>
                </div>
              </Reveal>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal delay={100}>
                <div className="text-left">
                  <img src={storyLogoUrl || bannerMark} alt="FCG" className="w-28 h-auto mb-6" />
                  {storyParagraphs.map((paragraph, index) => (
                    <p
                      key={`${paragraph.slice(0, 20)}-${index}`}
                      className={`text-base md:text-3xl leading-relaxed text-foreground font-medium ${
                        index < storyParagraphs.length - 1 ? "mb-10" : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
              

              
    
            </div>
          </div>
        </div>
      </section>

      {/* The Three Cs */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container-wide">
          <Reveal>
                                              <div className="mb-4">

              <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-4 font-bold  ">
                Our Foundation
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                The Three Cs
              </h2>
                                          </div>

          </Reveal>
                    <Reveal delay={300}>
                                  <div className="mb-16">

                <p className="text-base md:text-3xl leading-relaxed text-foreground font-medium">
                  Over a long career, our founder saw a need for expert professionals who are committed to achieving client and transaction success. She was inspired to launch the firm built on the foundation of the industry's three "Cs" for sound lending decisions.
                </p>
                            </div>

              </Reveal>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {threeCs.map((item, index) => (
              <Reveal key={item.title} delay={index * 100} className="h-[460px]">
                <div className="h-[460px]">
                  <article
                    role="article"
                    className="group bg-card border border-border rounded-lg p-8 hover:bg-primary/5 hover:border-primary transition-colors duration-300 h-[460px] flex flex-col"
                  >
                    <div className="mb-12">
                      <div className="w-20 h-20  flex items-center justify-center   transition-colors">
                        <img
                          src={threeCIcons[index]}
                          alt={`${item.title} icon`}
                          className="w-24 h-24"
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-foreground transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </article>
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
                to="/about/founder"
                className="group flex items-center justify-between p-8 border border-border hover:border-primary hover:bg-primary/5 transition-colors"
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
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
