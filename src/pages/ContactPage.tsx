import { useState, type FormEvent } from "react";
import { PageLayout } from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";
import interlockGraphic from "@/assets/interlock-graphic.png";
import employmentImage from "@/assets/employment.png";
import { submitWordPressLead } from "@/lib/wordpress";

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    try {
      await submitWordPressLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        source: "contact-page",
        page_url: window.location.href,
        referrer: document.referrer,
        website: "",
      });

      toast({
        title: "Message sent",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "We could not send your message. Please try again.";
      toast({
        title: "Message not sent",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#F4F4F4] pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary border-l-2 border-primary pl-4 mb-8">
                  Contact
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
                  Questions?<br />
                  We're ready to help.
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <p className="text-base md:text-lg text-muted-foreground font-medium text-left lg:text-right">
                  Complete the form below, and an FCG team member will contact you directly.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="bg-[#F4F4F4] py-20 md:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <Reveal>
                  <div className="bg-[#FFFFFF] border border-[#E6E6E6] p-12 md:p-16">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-foreground" />
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Message Sent</h3>
                    <p className="text-muted-foreground text-base md:text-lg mb-8">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-foreground text-background hover:bg-primary transition-colors"
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
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="px-2 lg:px-6">
                  <p className="text-sm md:text-base tracking-[0.2em] uppercase text-foreground font-semibold mb-3">
                    For Immediate Assistance
                  </p>
                  <a
                    href="tel:704-412-8440"
                    className="block text-3xl md:text-4xl font-bold text-primary hover:opacity-90 transition-opacity"
                  >
                    704-412-8440
                  </a>
                  <div className="mt-12 md:mt-14">
                    <img
                      src={interlockGraphic}
                      alt="FCG interlock graphic"
                      className="w-full max-w-[360px]"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={300}>
            <div className="mt-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground mb-10">
                Employment<br />
                Opportunities
              </h2>

              <div className="overflow-hidden rounded-[32px] bg-[#FFFFFF] border border-[#E6E6E6]">
                <img
                  src={employmentImage}
                  alt="Employment opportunities"
                  className="w-full h-auto object-cover"
                />

                <div className="bg-primary px-6 py-7 md:px-8 md:py-8">
                  <p className="text-foreground text-base md:text-xl leading-relaxed max-w-2xl mb-4">
                    We recruit and retain individuals committed to partnership, shared expertise, and client-focused success.
                  </p>
                  <a
                    href="mailto:careers@financialcompliancegroup.com"
                    className="inline-flex items-center gap-2 text-foreground text-2xl font-medium hover:opacity-80 transition-opacity"
                  >
                    <Mail className="h-6 w-6" />
                    careers@financialcompliancegroup.com
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
