import { useState } from "react";
import { PageLayout } from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with Lovable Cloud database
    // For now, just show success message
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent",
      description: "Thank you for contacting us. We'll respond shortly.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      <article className="section-spacing">
        <div className="container-narrow">
          <h1 className="mb-4 text-foreground">Questions? We're ready to help.</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Need more information? Complete the form below, and an FCG team member 
            will contact you directly.
          </p>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold mb-4 text-foreground">
                  For immediate needs
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:704-412-8440"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span>704-412-8440</span>
                  </a>
                </div>
              </div>

              {/* Employment Section */}
              <div className="pt-8 border-t border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  Employment Opportunities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Financial Compliance Group recruits and retains individuals 
                  who are committed to upholding and supporting our core business 
                  philosophy, which is centered on partnership, shared expertise, 
                  and client-focused success.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you are interested in joining our team, please forward your 
                  resume and contact information to{" "}
                  <a
                    href="mailto:careers@financialcompliancegroup.com"
                    className="text-primary hover:underline"
                  >
                    careers@financialcompliancegroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
