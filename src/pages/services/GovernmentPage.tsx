import { PageLayout } from "@/components/layout";

const services = [
  "Contract Audit and Assurance Services",
  "Contract Investigations and Enforcement",
  "Forensic Accounting and Fraud Investigations",
  "Fraud Prevention",
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

const certifications = [
  "Women-Owned Small Business (WOSB) Federal Contracting Program",
  "Disadvantaged Business Enterprise Program (DBE), Historically Underutilized Business, N.C Department of Transportation",
  "Airport Concession Disadvantaged Business Enterprise (ACDBE) Historically Underutilized Business, N.C. Department of Transportation",
  "Minority Business Enterprise (MBE), Historically Underutilized Business (HUB), State of North Carolina",
  "Small Business Enterprise (SBE) Historically Underutilized Business (HUB), State of North Carolina",
  "Minority Business Enterprise (MBE) Charlotte Business INClusion, City of Charlotte",
  "Small Business Enterprise (SBE) Charlotte Business INClusion, City of Charlotte",
  "Small Professional Services Firm (SPSF), NC Department of Transportation",
  "Registered Vendor, MWSBE Program, Mecklenburg County, NC",
];

export default function GovernmentPage() {
  return (
    <PageLayout>
      <article className="section-spacing">
        <div className="container-narrow">
          <h1 className="mb-12 text-foreground">Government Agencies Services</h1>

          <div className="space-y-6 text-foreground leading-relaxed">
            <p className="text-lg">
              Government agencies operate under heightened expectations for 
              transparency, accountability, and stewardship of public resources—and 
              FCG is built to support those mandates. We can work with procurement 
              officers and financial personnel from federal, state, and local agencies 
              to support their decision-making.
            </p>

            <p>
              We verify regulatory compliance and contract performance of vendors, 
              grantees, and awardees of government contracts to strengthen 
              accountability. For complex financial concerns, our Forensic Accounting 
              and Fraud Investigations specialists provide precise, defensible analyses 
              that help detect fraud, support enforcement actions, and safeguard 
              taxpayer dollars. Together, these services help agencies reduce risk, 
              protect resources, and maintain public trust.
            </p>
          </div>

          {/* Services Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Services for Government Entities
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border"
                >
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Government Firm Certifications */}
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-semibold mb-8 text-foreground">
              Government Firm Certifications
            </h2>

            {/* UEI and CAGE */}
            <div className="mb-10 p-6 bg-secondary/50 rounded-lg border border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Unique Entity Identifier and CAGE Code
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <span className="text-sm text-muted-foreground">UNIQUE Identifier</span>
                  <p className="text-lg font-mono font-medium text-foreground">NCVRRUH2MQB6</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">CAGE Code</span>
                  <p className="text-lg font-mono font-medium text-foreground">8VS15</p>
                </div>
              </div>
            </div>

            {/* NAICS Codes */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                NAICS Codes
              </h3>
              <div className="space-y-2">
                {naicsCodes.map((item) => (
                  <div key={item.code} className="flex gap-4 text-sm">
                    <span className="font-mono text-primary font-medium w-16 flex-shrink-0">
                      {item.code}
                    </span>
                    <span className="text-foreground">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NIGP Codes */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                NIGP Codes
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {nigpCodes.map((item) => (
                  <div key={item.code} className="flex gap-4 text-sm">
                    <span className="font-mono text-primary font-medium w-14 flex-shrink-0">
                      {item.code}
                    </span>
                    <span className="text-foreground">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Economic Certifications */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Social Economic Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-foreground text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
