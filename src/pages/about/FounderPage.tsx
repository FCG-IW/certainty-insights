import { PageLayout } from "@/components/layout";

const credentials = [
  "Master's Degree in Accounting and Financial Management, University of Maryland Global Campus",
  "Bachelor's Degree in Business Administration, Johnson C. Smith University",
  "Certified Fraud Examiner (CFE)",
];

export default function FounderPage() {
  return (
    <PageLayout>
      <article className="section-spacing">
        <div className="container-narrow">
          <h1 className="mb-12 text-foreground">Our Founder</h1>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Photo Placeholder */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm text-center px-4">
                  Photo of Dana Campbell Latimer
                </span>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Dana Campbell Latimer, CFE
              </h2>
              <p className="text-sm text-primary font-medium mb-6">
                Founder and President
              </p>

              <div className="space-y-6 text-foreground leading-relaxed">
                <p>
                  Dana Campbell Latimer, CFE, serves as Founder and President of 
                  Financial Compliance Group and brings more than three decades of 
                  industry experience. She is widely recognized for her expertise in 
                  fraud investigation, lending due diligence, forensic financial 
                  analysis and compliance consulting. Her analytical approach emphasizes 
                  both quantitative evaluation and qualitative insight, enabling 
                  stakeholders to make informed credit decisions.
                </p>

                <p>
                  Beyond examinations, Dana is known for translating complex findings 
                  into clear, actionable recommendations. She has designed and delivered 
                  training a range of training programs fraud detection, internal 
                  controls, and compliance best practices for financial institutions 
                  and corporate clients — equipping teams with practical tools to 
                  prevent and detect misconduct.
                </p>

                <p>
                  Before founding FCG in 2002, Dana served as an examiner with a 
                  national field examination firm, performing field exams and audits 
                  as well as monitoring loan portfolios. Previously, she worked as an 
                  independent contractor through MSM Securities as a Fraud Prevention 
                  Inspector nationwide to perform site verifications and inspection of 
                  Medicare/Medicaid Provider Facilities to combat fraud, waste and abuse 
                  for the U.S. Government.
                </p>
              </div>

              {/* Education and Certifications */}
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Education and Certifications
                </h3>
                <ul className="space-y-2">
                  {credentials.map((credential) => (
                    <li
                      key={credential}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
