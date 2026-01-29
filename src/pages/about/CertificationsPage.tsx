import { PageLayout } from "@/components/layout";

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

export default function CertificationsPage() {
  return (
    <PageLayout>
      <article className="section-spacing">
        <div className="container-narrow">
          <h1 className="mb-12 text-foreground">Our Certifications</h1>

          <p className="text-lg leading-relaxed text-foreground mb-12">
            Financial Compliance Group, Inc. is a certified minority woman-owned, 
            small business, and disadvantaged business enterprise headquartered in 
            North Carolina and working nationwide.
          </p>

          {/* Certification Logos Placeholder */}
          <div className="mb-16 p-8 bg-secondary/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Certification Logos
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="h-16 w-32 rounded bg-background border border-border flex items-center justify-center text-xs text-muted-foreground">
                WOSB
              </div>
              <div className="h-16 w-32 rounded bg-background border border-border flex items-center justify-center text-xs text-muted-foreground">
                MBE
              </div>
              <div className="h-16 w-32 rounded bg-background border border-border flex items-center justify-center text-xs text-muted-foreground">
                DBE
              </div>
              <div className="h-16 w-32 rounded bg-background border border-border flex items-center justify-center text-xs text-muted-foreground">
                SBE
              </div>
              <div className="h-16 w-32 rounded bg-background border border-border flex items-center justify-center text-xs text-muted-foreground">
                HUB
              </div>
            </div>
          </div>

          {/* Certification List */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-foreground">
              Social Economic Certifications
            </h2>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-start gap-3 text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
