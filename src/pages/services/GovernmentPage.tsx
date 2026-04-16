import { PageLayout } from "@/components/layout";
import { Reveal } from "@/hooks/useScrollReveal";
import StatementSection from "@/components/ui/StatementSection";
import { useWordPressAcf } from "@/hooks/useWordPressAcf";
import {
  asCleanString,
  getAcfIndexedRecords,
  getAcfRecordArray,
  getAcfString,
} from "@/lib/wordpress";

import { 
  ArrowRight, 
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { 
    name: "Contract Audit & Assurance",
    number: "01"
  },
  { 
    name: "Contract Investigations",
    number: "02"
  },
  { 
    name: "Forensic Accounting",
    number: "03"
  },
  { 
    name: "Fraud Prevention",
    number: "04"
  },
];

const naicsCodes = [
  { code: "541611", description: "Administrative management and General Management Consulting Services" },
  { code: "541614", description: "Process, Physical Distribution and Logistics Consulting Services" },
  { code: "541219", description: "Other Accounting Services" },
  { code: "541618", description: "Other Management Consulting Services" },
  { code: "541211", description: "Offices of Certified Public Accountants" },
];

const nigpCodes = [
  { code: "91804", description: "Accounting, Auditing, Budget Consulting" },
  { code: "91821", description: "Business Consulting" },
  { code: "91838", description: "Education & Training Consulting" },
  { code: "91858", description: "Governmental Consulting" },
  { code: "91875", description: "Management Consulting" },
  { code: "94649", description: "Financial Services (Not Otherwise Classified)" },
  { code: "95839", description: "Financial Management Services" },
  { code: "91806", description: "Administrative Consulting" },
  { code: "91832", description: "Consulting Services (Not Otherwise Classified)" },
  { code: "91849", description: "Finance & Economics Consulting" },
  { code: "91870", description: "Inventory Consulting" },
  { code: "91888", description: "Quality Assurance & Control Consulting" },
  { code: "95816", description: "Business Management Services" },
];

const socioeconomicCertifications = [
  { number: "01", title: "Women-Owned Small Business (WOSB) Federal Contracting Program", description: "" },
  { number: "02", title: "Disadvantaged Business Enterprise Program (DBE), Historically Underutilized Business, N.C. Department of Transportation", description: "" },
  { number: "03", title: "Airport Concession Disadvantaged Business Enterprise (ACDBE) Historically Underutilized Business, N.C. Department of Transportation", description: "" },
  { number: "04", title: "Minority Business Enterprise (MBE),  Historically Underutilized Business (HUB), State of North Carolina", description: "" },
  { number: "05", title: "Small Business Enterprise (SBE) Historically Underutilized Business (HUB), State of North Carolina", description: "" },
  { number: "06", title: "Minority Business Enterprise (MBE) Charlotte Business INClusion, City of Charlotte", description: "" },
  { number: "07", title: "Small Business Enterprise (SBE) Charlotte Business INClusion, City of Charlotte", description: "" },
  { number: "08", title: "Small Professional Services Firm (SPSF), N.C. Department of Transportation", description: "" },
  { number: "09", title: "Registered Vendor, MWSBE Program, Mecklenburg County, NC", description: "" },
];

export default function GovernmentPage() {
  const { data: acf } = useWordPressAcf("government");

  const statementLabel = getAcfString(acf, "statement_label", "Our Mission");
  const statementContent = getAcfString(
    acf,
    "statement_content",
    "Government agencies operate under heightened expectations for transparency, accountability, and stewardship of public resources, and FCG is built to support those mandates. We can work with procurement officers and financial personnel from federal, state, and local agencies to support their decision-making. We verify regulatory compliance and contract performance of vendors, grantees, and awardees of government contracts to strengthen accountability. For complex financial concerns, our Forensic Accounting and Fraud Investigations specialists provide precise, defensible analyses that help detect fraud, support enforcement actions, and safeguard taxpayer dollars. Together, these services help agencies reduce risk, protect resources, and maintain public trust.",
  );

  const repeaterServices = getAcfRecordArray(
    acf,
    "services",
    (item, index) => ({
      name: asCleanString(item.name, "Service"),
      number: asCleanString(item.number, String(index + 1).padStart(2, "0")),
    }),
    services,
  );

  const fixedServices = getAcfIndexedRecords(acf, "service", ["number", "name"], 12)
    .map((item, index) => ({
      number: asCleanString(item.number, String(index + 1).padStart(2, "0")),
      name: asCleanString(item.name),
    }))
    .filter((item) => item.name.length > 0);
  const cmsServices = repeaterServices.length > 0 ? repeaterServices : fixedServices;

  const credentialsKicker = getAcfString(acf, "credentials_kicker", "Credentials");
  const credentialsHeading = getAcfString(acf, "credentials_heading", "Government Firm Certifications");
  const ueiLabel = getAcfString(acf, "uei_label", "Unique Entity Identifier");
  const ueiValue = getAcfString(acf, "uei_value", "NCVRRRUH2MQB6");
  const cageLabel = getAcfString(acf, "cage_label", "CAGE Code");
  const cageValue = getAcfString(acf, "cage_value", "8VS15");
  const naicsHeading = getAcfString(acf, "naics_heading", "NAICS Codes");
  const nigpHeading = getAcfString(acf, "nigp_heading", "NIGP Codes");

  const repeaterNaics = getAcfRecordArray(
    acf,
    "naics_codes",
    (item) => ({
      code: asCleanString(item.code),
      description: asCleanString(item.description),
    }),
    naicsCodes,
  );
  const fixedNaics = getAcfIndexedRecords(acf, "naics", ["code", "description"], 20)
    .map((item) => ({
      code: asCleanString(item.code),
      description: asCleanString(item.description),
    }))
    .filter((item) => item.code.length > 0 && item.description.length > 0);
  const cmsNaics = repeaterNaics.length > 0 ? repeaterNaics : fixedNaics;

  const repeaterNigp = getAcfRecordArray(
    acf,
    "nigp_codes",
    (item) => ({
      code: asCleanString(item.code),
      description: asCleanString(item.description),
    }),
    nigpCodes,
  );
  const fixedNigp = getAcfIndexedRecords(acf, "nigp", ["code", "description"], 30)
    .map((item) => ({
      code: asCleanString(item.code),
      description: asCleanString(item.description),
    }))
    .filter((item) => item.code.length > 0 && item.description.length > 0);
  const cmsNigp = repeaterNigp.length > 0 ? repeaterNigp : fixedNigp;

  const socioeconomicHeading = getAcfString(acf, "socioeconomic_heading", "Social Economic Certifications");
  const repeaterSocioeconomic = getAcfRecordArray(
    acf,
    "socioeconomic_certifications",
    (item, index) => ({
      number: asCleanString(item.number, String(index + 1).padStart(2, "0")),
      title: asCleanString(item.title),
      description: asCleanString(item.description),
    }),
    socioeconomicCertifications,
  );
  const fixedSocioeconomic = getAcfIndexedRecords(
    acf,
    "socioeconomic",
    ["number", "title", "description"],
    20,
  )
    .map((item, index) => ({
      number: asCleanString(item.number, String(index + 1).padStart(2, "0")),
      title: asCleanString(item.title),
      description: asCleanString(item.description),
    }))
    .filter((item) => item.title.length > 0);
  const cmsSocioeconomic = repeaterSocioeconomic.length > 0 ? repeaterSocioeconomic : fixedSocioeconomic;

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
                      Government<br />
                      Services
                    </h1>
                  </Reveal>
                </div>
                <div className="lg:col-span-5">
                  <Reveal delay={200}>
                    <p className="text-base md:text-xl text-muted-foreground font-light text-left lg:text-right">
Supporting transparency,
accountability, and stewardship of public resources.                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
    
 <StatementSection label={statementLabel}>
   {statementContent}
      </StatementSection>
    
   
      {/* Services Grid */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="flex items-center justify-between mb-16">
              <div>
          
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Our Services
                </h2>
              </div>
              <Link 
                to="/contact"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {cmsServices.map((service, index) => (
              <Reveal key={service.name} delay={index * 50}>
                <div className="group border border-border p-8 md:p-10 bg-[#F8F8F8] hover:bg-primary/10 transition-all duration-300 h-full hover:shadow-lg">
                  <span className="text-5xl font-bold text-primary group-hover:text-primary transition-colors block mb-6">
                    {service.number}
                  </span>
                  <h3 className={`text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug max-w-sm`}>
                    {service.name.toUpperCase()}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* Credentials Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-wide">
          <Reveal>
            <div className="mb-16">
              <span className="text-sm tracking-[0.2em] uppercase text-primary block mb-4">
                {credentialsKicker}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {credentialsHeading}
              </h2>
            </div>
          </Reveal>

          {/* UEI and CAGE Code Boxes */}
          <Reveal delay={100}>
            <div className="grid md:grid-cols-2 gap-0 mb-16">
              <div className="bg-foreground text-background p-8 md:p-10">
                <p className="text-xs tracking-[0.2em] uppercase text-primary/60 mb-3">
                  {ueiLabel}
                </p>
                <p className="text-3xl md:text-4xl font-mono font-bold">
                  {ueiValue}
                </p>
              </div>
              <div className="bg-primary text-foreground p-8 md:p-10">
                <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">
                  {cageLabel}
                </p>
                <p className="text-3xl md:text-4xl font-mono font-bold">
                  {cageValue}
                </p>
              </div>
            </div>
          </Reveal>

          {/* NAICS and NIGP Codes Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* NAICS Codes */}
            <Reveal delay={150}>
              <div className="bg-[#FFFFFF] border border-[#E6E6E6] p-8">
                <h3 className="text-lg font-bold text-foreground mb-6">{naicsHeading}</h3>
                <div className="space-y-4">
                  {cmsNaics.map((item) => (
                    <div key={item.code}>
                      <p className="text-primary font-mono font-bold mb-1">{item.code}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* NIGP Codes */}
            <Reveal delay={200}>
              <div className="bg-[#FFFFFF] border border-[#E6E6E6] p-8">
                <h3 className="text-lg font-bold text-foreground mb-6">{nigpHeading}</h3>
                <div className="space-y-3">
                  {cmsNigp.map((item) => (
                    <div key={item.code} className="flex items-center gap-6">
                      <p className="text-primary font-mono font-bold flex-shrink-0">{item.code}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Social Economic Certifications Section */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                {socioeconomicHeading}
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              {cmsSocioeconomic.map((cert) => (
                <div key={cert.number} className="bg-[#FFFFFF] border border-[#E6E6E6] p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-3xl font-bold text-primary">{cert.number}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{cert.title} {cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="bg-foreground rounded-lg p-12 md:p-16 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-6 flex flex-col justify-start">
                <h2 className="text-4xl md:text-5xl font-bold text-background mb-10 leading-relaxed">
                  Ready to Strengthen <br />
                  Accountability <br />
                  
                </h2>
                <p className="text-md text-background/80 leading-relaxed">
                  Let's discuss how we can help protect your agency's interests and ensure compliance across all government levels.
                </p>
              </div>
              <div className="lg:col-span-6 flex flex-col justify-center items-center">
         
                <div className="flex flex-col gap-4 w-full max-w-[300px] justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-foreground px-8 py-4 text-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/services/financial-institutions"
                    className="inline-flex items-center justify-center gap-2 border border-background text-background px-8 py-4 text-lg font-medium hover:bg-background/10 transition-colors"
                  >
                    Financial Services
                    <ArrowRight className="h-5 w-5" />
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
