import { PageLayout } from "@/components/layout";

const threeCs = [
  {
    title: "Competent",
    description:
      "Demonstrating the necessary expertise, professional qualifications, good character, and robust quality control procedures to perform thorough and accurate examinations.",
  },
  {
    title: "Collaborative",
    description:
      "Working effectively with the lender and the borrower to ensure clear communication, minimize disruption to business operations, accommodate specific client needs and integrate seamlessly to each client's environment.",
  },
  {
    title: "Committed",
    description:
      "Showing dedication to meeting deadlines, providing consistent service quality, and maintaining ethical standards and professionalism throughout the engagement.",
  },
];

export default function HistoryPage() {
  return (
    <PageLayout>
      <article className="section-spacing">
        <div className="container-narrow">
          <h1 className="mb-12 text-foreground">Our History</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground mb-8">
              Financial Compliance Group was founded in 2002 to provide banks and 
              independent financial services organizations with trusted experts in 
              field examinations, collateral reviews, and forensic investigations, 
              helping them manage risk, protect their investments, and maintain the 
              integrity of their loan portfolios. Over a thousand engagements since 
              then, the firm's services have expanded to help government agencies 
              mitigate risk when analyzing vendors, grantees, and awardees.
            </p>

            <p className="text-lg leading-relaxed text-foreground mb-12">
              Over a long career, our founder saw a need for expert professionals 
              who are committed to achieving client and transaction success. She was 
              inspired to launch the firm built on the foundation of the industry's 
              three "Cs" for sound lending decisions.
            </p>
          </div>

          {/* The Three Cs */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-foreground">
              The Three Cs
            </h2>
            <div className="grid gap-8">
              {threeCs.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-primary pl-6 py-2"
                >
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
