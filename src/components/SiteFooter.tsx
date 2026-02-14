
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border/10 py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              THE ELECTRIC <br/><span className="text-primary">CONFECTIONARY</span>
            </h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              Purveyors of fine galvanic sweets and illuminated treats. 
              Established in the fog, reborn in the neon.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-border/20 text-foreground hover:border-primary hover:text-primary hover:bg-transparent">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-border/20 text-foreground hover:border-primary hover:text-primary hover:bg-transparent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-border/20 text-foreground hover:border-primary hover:text-primary hover:bg-transparent">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">All Sweets</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gift Boxes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Subscriptions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Join the Club</h4>
            <p className="text-xs text-muted-foreground mb-4">
              Subscribe for secret menu items and flash sale alerts.
            </p>
            <div className="flex flex-col gap-2">
              <Input 
                placeholder="Enter email address" 
                className="bg-background/5 border-border/10 text-foreground focus-visible:ring-secondary focus-visible:border-secondary"
              />
              <Button className="w-full bg-primary text-foreground hover:bg-primary/90">
                SUBSCRIBE
              </Button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2077 The Electric Confectionary. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
