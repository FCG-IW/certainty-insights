import { useState } from "react";
import { PageLayout } from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message sent",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary border-l-2 border-primary pl-4 mb-8">
                  Contact
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
                  Questions?<br />
                  <span className="text-primary">We're ready.</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={200}>
                <p className="text-xl text-muted-foreground font-light">
                  Complete the form below, and an FCG team member will contact you directly.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <Reveal>
                  <div className="bg-foreground text-background p-12 md:p-16">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-foreground" />
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Message Sent</h3>
                    <p className="text-background/70 text-lg mb-8">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-background/30 text-background hover:bg-background/10"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={100}>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-sm tracking-wide uppercase text-muted-foreground">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          placeholder="Your full name"
                          className="h-14 border-0 border-b-2 border-border rounded-none bg-transparent px-0 text-lg focus:border-primary focus-visible:ring-0 transition-colors"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-sm tracking-wide uppercase text-muted-foreground">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="you@company.com"
                          className="h-14 border-0 border-b-2 border-border rounded-none bg-transparent px-0 text-lg focus:border-primary focus-visible:ring-0 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm tracking-wide uppercase text-muted-foreground">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(123) 456-7890"
                        className="h-14 border-0 border-b-2 border-border rounded-none bg-transparent px-0 text-lg focus:border-primary focus-visible:ring-0 transition-colors"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-sm tracking-wide uppercase text-muted-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="How can we help you?"
                        rows={4}
                        className="border-0 border-b-2 border-border rounded-none bg-transparent px-0 text-lg focus:border-primary focus-visible:ring-0 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group h-14 px-8 text-lg bg-foreground hover:bg-primary transition-colors"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </Reveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal delay={200}>
                <div className="bg-foreground text-background p-8 md:p-10">
                  <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-4">
                    Immediate Assistance
                  </span>
                  <a
                    href="tel:704-412-8440"
                    className="block text-4xl md:text-5xl font-bold hover:text-primary transition-colors"
                  >
                    704-412-8440
                  </a>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="border-2 border-foreground p-8 md:p-10">
                  <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary mb-4">
                    Employment Opportunities
                  </span>
                  <p className="text-muted-foreground mb-6">
                    We recruit and retain individuals committed to partnership, 
                    shared expertise, and client-focused success.
                  </p>
                  <a
                    href="mailto:careers@financialcompliancegroup.com"
                    className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    careers@financialcompliancegroup.com
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
