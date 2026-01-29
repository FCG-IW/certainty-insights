import { PageLayout } from "@/components/layout";
import { User, GraduationCap, Award, Briefcase } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    text: "Master's Degree in Accounting and Financial Management, University of Maryland Global Campus",
  },
  {
    icon: GraduationCap,
    text: "Bachelor's Degree in Business Administration, Johnson C. Smith University",
  },
  {
    icon: Award,
    text: "Certified Fraud Examiner (CFE)",
  },
];

const highlights = [
  "30+ years of industry experience",
  "Fraud investigation expertise",
  "Forensic financial analysis",
  "Compliance consulting",
];

export default function FounderPage() {
  return (
    <PageLayout>
      <article className="section-spacing">
        <div className="container-wide">
          {/* Hero Section */}
          <div className="max-w-3xl mb-12">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <User className="h-4 w-4" />
                Leadership
              </span>
            </div>
            <h1 className="mb-6 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our Founder
            </h1>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Photo Card */}
            <div className="lg:col-span-1 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.3s" }}>
              <div className="sticky top-24">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl flex items-center justify-center overflow-hidden border border-border">
                    <div className="text-center p-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4">
                        <User className="h-10 w-10" />
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Dana Campbell Latimer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {highlights.map((item, index) => (
                    <div 
                      key={item}
                      className="p-3 bg-card rounded-xl border border-border text-center"
                    >
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2">
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-3xl font-semibold mb-2 text-foreground">
                  Dana Campbell Latimer, CFE
                </h2>
                <p className="text-lg text-primary font-medium mb-8">
                  Founder and President
                </p>
              </div>

              <div className="space-y-6 text-foreground leading-relaxed">
                <p className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  Dana Campbell Latimer, CFE, serves as Founder and President of 
                  Financial Compliance Group and brings more than three decades of 
                  industry experience. She is widely recognized for her expertise in 
                  fraud investigation, lending due diligence, forensic financial 
                  analysis and compliance consulting. Her analytical approach emphasizes 
                  both quantitative evaluation and qualitative insight, enabling 
                  stakeholders to make informed credit decisions.
                </p>

                <p className="opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  Beyond examinations, Dana is known for translating complex findings 
                  into clear, actionable recommendations. She has designed and delivered 
                  training a range of training programs fraud detection, internal 
                  controls, and compliance best practices for financial institutions 
                  and corporate clients — equipping teams with practical tools to 
                  prevent and detect misconduct.
                </p>

                <p className="opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
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
              <div className="mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Education and Certifications
                </h3>
                <div className="grid gap-4">
                  {credentials.map((credential, index) => (
                    <div
                      key={credential.text}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <credential.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm text-foreground leading-relaxed pt-2">
                        {credential.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
