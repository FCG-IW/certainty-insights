import { useState } from "react";
import { PageLayout } from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Send, MessageSquare, Briefcase, CheckCircle } from "lucide-react";

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

    // Simulate submission (no backend)
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
      <article className="section-spacing">
        <div className="container-wide">
          {/* Hero Section */}
          <div className="max-w-3xl mb-16">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <MessageSquare className="h-4 w-4" />
                Get in Touch
              </span>
            </div>
            <h1 className="mb-6 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Questions? We're ready to help.
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Need more information? Complete the form below, and an FCG team member 
              will contact you directly.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {isSubmitted ? (
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 p-12 border border-primary/20 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-3xl bg-card p-8 md:p-10 border border-border">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full"></div>
                  <form onSubmit={handleSubmit} className="relative space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          placeholder="Your full name"
                          className="h-12 bg-background border-border focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          placeholder="you@company.com"
                          className="h-12 bg-background border-border focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(123) 456-7890"
                        className="h-12 bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        placeholder="How can we help you?"
                        rows={5}
                        className="bg-background border-border focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 text-base group"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-card p-6 border border-border hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    For immediate needs
                  </h3>
                  <a
                    href="tel:704-412-8440"
                    className="text-2xl font-semibold text-primary hover:underline"
                  >
                    704-412-8440
                  </a>
                </div>
              </div>

              {/* Employment Section */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-foreground to-foreground/95 p-6 text-background opacity-0 animate-fade-in-right" style={{ animationDelay: "0.5s" }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-4">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Employment Opportunities
                  </h3>
                  <p className="text-background/80 text-sm leading-relaxed mb-6">
                    We recruit and retain individuals committed to partnership, 
                    shared expertise, and client-focused success.
                  </p>
                  <a
                    href="mailto:careers@financialcompliancegroup.com"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    careers@financialcompliancegroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
