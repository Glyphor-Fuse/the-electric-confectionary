
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";

export function NeonLocation() {
  return (
    <section className="py-12 bg-background border-y border-border/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Panel */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-2">FIND THE <span className="text-primary">SOURCE</span></h2>
              <p className="text-muted-foreground">Follow the neon glow to our flagship store.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border/5 hover:border-secondary/30 transition-colors group">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary group-hover:shadow-[0_0_10px_var(--secondary)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">The Laboratory</h3>
                  <p className="text-muted-foreground">42 Electric Avenue, Shoreditch</p>
                  <p className="text-muted-foreground">London, E1 6AN</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border/5 hover:border-primary/30 transition-colors group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:shadow-[0_0_10px_var(--primary)]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Operating Hours</h3>
                  <div className="grid grid-cols-2 gap-x-8 text-muted-foreground text-sm mt-1">
                    <span>Mon - Thu</span>
                    <span className="text-right">10:00 - 20:00</span>
                    <span>Fri - Sat</span>
                    <span className="text-right text-secondary font-medium">10:00 - 02:00</span>
                    <span>Sunday</span>
                    <span className="text-right">11:00 - 18:00</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border/5 hover:border-border/20 transition-colors">
                <div className="p-3 rounded-full bg-background/5 text-foreground">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Contact</h3>
                  <p className="text-muted-foreground">+44 (0) 20 7946 0123</p>
                  <a href="mailto:hello@electricconfectionary.co.uk" className="text-primary hover:underline">hello@electricconfectionary.co.uk</a>
                </div>
              </div>
            </div>

            <Button className="w-full bg-secondary text-foreground font-bold hover:bg-secondary/90 hover:shadow-[0_0_20px_var(--secondary)]">
              GET DIRECTIONS
            </Button>
          </div>

          {/* Map Mockup */}
          <div className="relative order-1 lg:order-2 h-[500px] w-full rounded-2xl overflow-hidden border border-border/10 shadow-2xl">
            {/* Overlay for tinting */}
            <div className="absolute inset-0 bg-secondary/5 z-10 pointer-events-none mix-blend-overlay" />
            
            {/* Static Map Image Placeholder */}
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
               <img 
                 src="/images/map-dark.jpg" 
                 alt="Dark mode map of Shoreditch" 
                 className="w-full h-full object-cover opacity-60 grayscale invert brightness-[0.8] contrast-[1.2]"
               />
            </div>

            {/* Custom Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className="w-4 h-4 bg-secondary rounded-full shadow-[0_0_20px_var(--secondary),0_0_40px_var(--secondary)] animate-pulse" />
              <div className="mt-2 px-3 py-4 bg-background/80 backdrop-blur-md border border-secondary text-secondary text-xs font-bold rounded-full">
                WE ARE HERE
              </div>
            </div>
            
            {/* Decor */}
            <div className="absolute top-4 left-4 z-20 bg-background/80 p-2 rounded border border-border/10">
               <div className="text-[10px] text-muted-foreground uppercase tracking-widest">System Status</div>
               <div className="text-xs text-secondary font-mono">ONLINE • TRACKING ACTIVE</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default NeonLocation;
