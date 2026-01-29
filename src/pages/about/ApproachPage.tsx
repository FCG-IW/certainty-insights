import { PageLayout } from "@/components/layout";

const values = [
  {
    title: "Discipline",
    description:
      "Having performed thousands of field examinations, our seasoned, insight-driven professionals bring discipline and accountability to reduce risk and variability while promoting consistency.",
  },
  {
    title: "Discovery",
    description:
      "Through agreed-upon procedures, we help our clients identify potential risks, analyze their impact, and offer practical guidance to make confident, well-supported credit decisions.",
  },
  {
    title: "Diplomacy",
    description:
      "Our deep people skills and white-glove service builds trust as we balance firmness with empathy, especially in sensitive, high-stakes, or relationship-driven environments. We understand how to work across roles, cultures and personalities.",
  },
];

export default function ApproachPage() {
  return (
    <PageLayout>
      <article className="section-spacing">
        <div className="container-narrow">
          <h1 className="mb-12 text-foreground">Our Approach</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground mb-12">
              Our core business values are centered on partnership, shared expertise, 
              and client-focused success. We operate as collaborative team players, 
              communicating with clients at every step while upholding the highest 
              standards of integrity and transparency in all our interactions. We also 
              share knowledge with lenders investing across the capital structure to 
              help connect the dots.
            </p>
          </div>

          {/* Our Values */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-8 text-foreground">
              Our Values
            </h2>
            <div className="grid gap-8">
              {values.map((item) => (
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
