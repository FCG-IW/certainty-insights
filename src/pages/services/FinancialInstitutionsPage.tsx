import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";
import StatementSection from "@/components/ui/StatementSection";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import bannerMark from "@/assets/FCG_BannerMark_Green 1.png";
import interlockGraphic from "@/assets/interlock-graphic.png";
import { useWordPressAcf } from "@/hooks/useWordPressAcf";
import { asCleanString, getAcfRecordArray, getAcfString, getAcfStringArray } from "@/lib/wordpress";

const services = [
  { number: "01", name: "COLLATERAL FIELD EXAMINATIONS" },
  { number: "02", name: "FORENSIC ACCOUNTING AND FRAUD INVESTIGATIONS" },
  { number: "03", name: "INVENTORY AND FIXED ASSET VERIFICATIONS" },
  { number: "04", name: "SPECIALTY FIELD EXAMINATIONS" },
  { number: "05", name: "WORKOUT SUPPORT" },
  { number: "06", name: "OTHER AGREED UPON PROCEDURES" },
];

const industries = [
  "Financial or operational challenges, such as those in restructuring or bankruptcy proceedings",
  "Rapid growth and needing capital to fund expansion, acquire inventory, or meet rising demand, which often outpaces their immediate cash flow, such as those in   e-commerce, digital services sectors",
  "Large payrolls and receivables, such as those in staffing and professional services sectors",
  "Significant raw materials, work-in-progress, and finished goods, such as those in manufacturing and distribution sectors",
  "Fluctuating or inconsistent cash flows, such as retailers, manufacturers, distributors, or commodity-based businesses",
  "Seasonal inventory needs or fluctuating sales, such as those in apparel and electronics sectors",
  "Significant CAPEX investments, such as those in transportation, oilfield services, energy, technology and telecommunications sectors",
  "Cyclical market volatility, such as those in the metals, mining, oil and gas sectors",
  "Loan portfolios, such as auto finance companies, mortgage lenders, hard money real estate lenders, equipment finance companies, consumer lenders and litigation finance firms",
];

const statementFallback =
  "We have demonstrated success in asset-based lending and collateral field examinations, corporate loan fraud investigations, workout support, and other agreed-upon procedures to help lenders and funders, such as commercial banks and independent financial institutions, as well as specialized lenders, protect their investments. The result: a critical analysis that enables informed credit decisions with greater certainty, ultimately leading to successful transactions.";

const situationsFallback =
  "FCG conducts a vital analysis of a borrower's assets, financial information, and operations to support lending decisions for a wide range of industries. Our professionals have performed thousands of comprehensive (full-scope examinations) and targeted reviews (limited-scope and special-purpose examinations) of privately-held, family-owned, sponsor-backed and public companies, across every stage of the business life cycle, including those with:";

export default function FinancialInstitutionsPage() {
  const { data: acf } = useWordPressAcf("financial-institutions");

  const statementLabel = getAcfString(acf, "statement_label", "Expertise");
  const statementContent = getAcfString(acf, "statement_content", statementFallback);
  const cmsServices = getAcfRecordArray(
    acf,
    "services",
    (item, index) => ({
      number: asCleanString(item.number, String(index + 1).padStart(2, "0")),
      name: asCleanString(item.name, "Service"),
    }),
    services,
  );
  const situationsIntro = getAcfString(acf, "situations_intro", situationsFallback);
  const situationItems = getAcfStringArray(acf, "situations_items", industries);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary border-l-2 border-primary pl-4 mb-8">
                  Services
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
                  Financial<br />
                  Institutions
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <p className="text-base md:text-xl text-muted-foreground font-light text-left lg:text-right">
                  Critical analysis enabling informed credit decisions with greater certainty.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StatementSection label={statementLabel}>{statementContent}</StatementSection>

      {/* Services Grid */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Our Services
              </h2>
              <Link 
                to="/contact"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cmsServices.map((service, index) => (
              <Reveal key={service.name} delay={index * 50}>
                <div className="group border border-border p-8 md:p-10 bg-[#F8F8F8] hover:bg-primary/10 transition-all duration-300 h-full hover:shadow-lg">
                  <span className="text-5xl font-bold text-primary group-hover:text-primary transition-colors block mb-6">
                    {service.number}
                  </span>
                  <h3 className={`text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug ${index === 4 ? 'max-w-[130px]' : index === 0 || index === 3 ? 'max-w-[200px]' : 'max-w-sm'}`}>
                    {service.name}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Situations Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container-wide">
          <Reveal>
            <div className="mb-16">
             
              <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl">
                Situations
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-6">
              <Reveal delay={100}>
                 <img 
                  src={bannerMark}
                  alt="Engagements"
                  className=" h-auto mb-8"
                />  
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed sticky top-32">
                  {situationsIntro}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <div className="space-y-0 border-t border-border">
                {situationItems.map((industry, index) => (
                  <Reveal key={index} delay={index * 50}>
                    <div className="flex items-start gap-6 py-6 border-b border-border hover:bg-card transition-colors">
                      <span className="text-2xl font-bold text-primary/30 w-10">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-foreground leading-relaxed">{industry}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="bg-foreground rounded-lg p-12 md:p-16 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-6 flex flex-col justify-start">
                <h2 className="text-4xl md:text-5xl font-bold text-background mb-10 leading-relaxed">
                  Engagements <br />
                  Built Around Your <br />
                  Lending Needs
                </h2>
                <p className="text-md text-background/80 leading-relaxed">
                  We customize engagements from supporting underwriting and credit personnel on standard asset-based lending (ABL) structures to complex situations (Bankruptcy, Mergers and Acquisitions (M&A), Recapitalizations), adapting procedures to different lender needs and global requirements.
                </p>
              </div>
              <div className="lg:col-span-6 flex flex-col justify-center items-center">
                <img 
                  src={interlockGraphic}
                  alt="Engagements"
                  className="w-full max-w-[240px] h-auto mb-8"
                />
                <div className="flex flex-col gap-4 w-full max-w-[300px]  justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-foreground px-8 py-4 text-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Contact Us
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-background text-background px-8 py-4 text-lg font-medium hover:bg-background/10 transition-colors"
                  >
                    Discuss Your Needs
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
