import { Link } from "react-router-dom";
import logoPrimaryLight from "@/assets/logo-primary-light.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container-wide section-spacing-sm">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logoPrimaryLight} 
                alt="Financial Compliance Group" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-background/80 max-w-xl leading-relaxed">
              Financial Compliance Group, Inc. is a certified minority woman-owned, 
              small business, and disadvantaged business enterprise headquartered in 
              North Carolina and working nationwide.
            </p>
            
            {/* Certification Logos Placeholder */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="h-12 w-24 rounded bg-background/10 flex items-center justify-center text-xs text-background/50">
                WOSB
              </div>
              <div className="h-12 w-24 rounded bg-background/10 flex items-center justify-center text-xs text-background/50">
                MBE
              </div>
              <div className="h-12 w-24 rounded bg-background/10 flex items-center justify-center text-xs text-background/50">
                DBE
              </div>
              <div className="h-12 w-24 rounded bg-background/10 flex items-center justify-center text-xs text-background/50">
                SBE
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-background/90">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link 
                to="/about/history" 
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/services/financial-institutions" 
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Financial Institutions
              </Link>
              <Link 
                to="/services/government" 
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Government Entities
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/50">
              © {new Date().getFullYear()} Financial Compliance Group, Inc. All rights reserved.
            </p>
            <p className="text-xs text-background/50">
              704-412-8440
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
