import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import founderImage from "@/assets/Asset-founder.png";
import { useWordPressAcf } from "@/hooks/useWordPressAcf";
import { getAcfString, getAcfStringArray } from "@/lib/wordpress";

const credentials = [
  "Master's Degree in Accounting and Financial Management, University of Maryland Global Campus",
  "Bachelor's Degree in Business Administration, Johnson C. Smith University",
  "Certified Fraud Examiner (CFE)",
];

const founderBioFallback = [
  "Her analytical approach emphasizes both quantitative evaluation and qualitative insight, enabling stakeholders to make informed credit decisions.",
  "Beyond examinations, Dana is known for translating complex findings into clear, actionable recommendations. She has designed and delivered training programs for fraud detection, internal controls, and compliance best practices for financial institutions and corporate clients, equipping teams with practical tools to prevent and detect misconduct.",
  "Before founding FCG in 2002, Dana served as an examiner with a national field examination firm, performing field exams and audits as well as monitoring loan portfolios. Previously, she worked as an independent contractor through MSM Securities as a Fraud Prevention Inspector nationwide to perform site verifications and inspection of Medicare/Medicaid Provider Facilities to combat fraud, waste and abuse for the U.S. Government.",
];

export default function FounderPage() {
  const { data: acf } = useWordPressAcf("founder");

  const heroKicker = getAcfString(acf, "hero_kicker", "Leadership");
  const heroName = getAcfString(acf, "hero_name", "Dana Campbell Latimer, CFE");
  const heroTagline = getAcfString(
    acf,
    "hero_tagline",
    "Founder and President with over three decades of industry experience.",
  );
  const heroEmail = getAcfString(acf, "hero_email", "dana@fcgllc.net");
  const heroEmailLabel = getAcfString(acf, "hero_email_label", "Connect via Email");
  const heroLinkedIn = getAcfString(
    acf,
    "hero_linkedin_url",
    "https://www.linkedin.com/in/dana-campbell-latimer-cfe-6310b45/",
  );
  const heroLinkedInLabel = getAcfString(acf, "hero_linkedin_label", "LinkedIn");

  const mainImageUrl = getAcfString(acf, "main_image_url", "");
  const mainImageAlt = getAcfString(acf, "main_image_alt", "Dana Campbell Latimer");
  const bioLead = getAcfString(
    acf,
    "bio_lead",
    "Dana Campbell Latimer is widely recognized for her expertise in fraud investigation, lending due diligence, forensic financial analysis and compliance consulting.",
  );
  const bioParagraphs = getAcfStringArray(acf, "bio_paragraphs", founderBioFallback);
  const educationItems = getAcfStringArray(acf, "education_items", credentials);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            {/* Left: Heading */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary border-l-2 border-primary pl-4 mb-8">
                  {heroKicker}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
                  {heroName}
                </h1>
              </Reveal>
            </div>

            {/* Right: Tagline & Actions */}
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <p className="text-base md:text-lg text-muted-foreground font-light text-left lg:text-right mb-6 lg:mb-8">
                  {heroTagline}
                </p>
                <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                  <a
                    href={`mailto:${heroEmail}`}
                    className="group inline-flex items-center justify-center sm:justify-start gap-2 bg-primary text-background px-4 py-3 font-medium hover:bg-foreground transition-colors text-sm md:text-base"
                  >
                    <Mail className="h-4 w-4" />
                    {heroEmailLabel}
                  </a>
                  <a
                    href={heroLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center sm:justify-start gap-2 border border-primary px-4 py-3 font-medium hover:border-border hover:text-primary transition-colors text-sm md:text-base"
                  >
                    <Linkedin className="h-4 w-4" />
                    {heroLinkedInLabel}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Image */}
            <div className="lg:col-span-5">
              <Reveal>
                <img
                  src={mainImageUrl || founderImage}
                  alt={mainImageAlt}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </Reveal>
            </div>

            {/* Right: Bio Content */}
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <Reveal delay={100}>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.3] text-foreground">
                    {bioLead}
                  </p>
                </Reveal>

                {bioParagraphs.map((paragraph, index) => (
                  <Reveal key={`${paragraph.slice(0, 20)}-${index}`} delay={200 + index * 100}>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
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
            {educationItems.map((credential, index) => (
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
