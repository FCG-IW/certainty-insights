import { PageLayout } from "@/components/layout";
import { Award, Users, Handshake, Clock } from "lucide-react";

const threeCs = [
  {
    icon: Award,
    title: "Competent",
    description:
      "Demonstrating the necessary expertise, professional qualifications, good character, and robust quality control procedures to perform thorough and accurate examinations.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "Working effectively with the lender and the borrower to ensure clear communication, minimize disruption to business operations, accommodate specific client needs and integrate seamlessly to each client's environment.",
  },
  {
    icon: Handshake,
    title: "Committed",
    description:
      "Showing dedication to meeting deadlines, providing consistent service quality, and maintaining ethical standards and professionalism throughout the engagement.",
  },
];

const milestones = [
  { year: "2002", label: "Founded" },
  { year: "1,000+", label: "Engagements" },
  { year: "20+", label: "Years of Service" },
];

export default function HistoryPage() {
  return (
    <PageLayout>
      <article className="section-spacing">
        <div className="container-wide">
          {/* Hero Section */}
          <div className="max-w-3xl mb-16">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <Clock className="h-4 w-4" />
                About FCG
              </span>
            </div>
            <h1 className="mb-8 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our History
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Over two decades of trusted expertise in financial compliance and risk management.
            </p>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-3 gap-4 mb-16 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {milestones.map((item, index) => (
              <div 
                key={item.label}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 text-center border border-primary/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{item.year}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-3xl space-y-8 mb-20">
            <p className="text-lg leading-relaxed text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Financial Compliance Group was founded in 2002 to provide banks and 
              independent financial services organizations with trusted experts in 
              field examinations, collateral reviews, and forensic investigations, 
              helping them manage risk, protect their investments, and maintain the 
              integrity of their loan portfolios. Over a thousand engagements since 
              then, the firm's services have expanded to help government agencies 
              mitigate risk when analyzing vendors, grantees, and awardees.
            </p>

            <p className="text-lg leading-relaxed text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Over a long career, our founder saw a need for expert professionals 
              who are committed to achieving client and transaction success. She was 
              inspired to launch the firm built on the foundation of the industry's 
              three "Cs" for sound lending decisions.
            </p>
          </div>

          {/* The Three Cs */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              The Three Cs
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {threeCs.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
