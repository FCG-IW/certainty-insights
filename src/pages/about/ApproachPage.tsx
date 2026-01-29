import { PageLayout } from "@/components/layout";
import { Shield, Search, Users, Compass } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Discipline",
    description:
      "Having performed thousands of field examinations, our seasoned, insight-driven professionals bring discipline and accountability to reduce risk and variability while promoting consistency.",
  },
  {
    icon: Search,
    title: "Discovery",
    description:
      "Through agreed-upon procedures, we help our clients identify potential risks, analyze their impact, and offer practical guidance to make confident, well-supported credit decisions.",
  },
  {
    icon: Users,
    title: "Diplomacy",
    description:
      "Our deep people skills and white-glove service builds trust as we balance firmness with empathy, especially in sensitive, high-stakes, or relationship-driven environments. We understand how to work across roles, cultures and personalities.",
  },
];

export default function ApproachPage() {
  return (
    <PageLayout>
      <article className="section-spacing">
        <div className="container-wide">
          {/* Hero Section */}
          <div className="max-w-3xl mb-16">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <Compass className="h-4 w-4" />
                About FCG
              </span>
            </div>
            <h1 className="mb-8 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our Approach
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Partnership, shared expertise, and client-focused success at every step.
            </p>
          </div>

          {/* Introduction Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-card to-card p-8 md:p-12 border border-primary/10 mb-16 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative max-w-3xl">
              <p className="text-xl leading-relaxed text-foreground">
                Our core business values are centered on <span className="font-semibold text-primary">partnership, shared expertise, 
                and client-focused success</span>. We operate as collaborative team players, 
                communicating with clients at every step while upholding the highest 
                standards of integrity and transparency in all our interactions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                We also share knowledge with lenders investing across the capital structure to 
                help connect the dots.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Our Values
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((item, index) => (
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
