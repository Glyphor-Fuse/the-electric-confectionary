
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background antialiased">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="var(--primary)"
      />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
      
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <div className="inline-block mb-6 px-3 py-4 border border-secondary/50 rounded-full bg-secondary/10 backdrop-blur-sm">
          <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase">Est. London 1892 • Re-imagined 2077</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold tracking-tighter text-foreground mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          SUGAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-background-600 animate-pulse-slow">RUSH</span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
          Where Victorian craftsmanship meets neon innovation. Experience the sweet taste of the future, handcrafted with the techniques of the past.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary text-foreground hover:bg-primary/90 hover:shadow-[0_0_30px_var(--primary)] text-lg px-8 py-6 h-auto transition-all duration-500">
            EXPLORE THE COLLECTION
          </Button>
          <Button size="lg" variant="outline" className="border-border/20 text-foreground hover:bg-background/10 hover:border-border/50 text-lg px-8 py-6 h-auto">
            VISIT OUR SHOPS
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="/images/hero-sugar.jpg" 
          alt="Abstract dark sugar glass textures" 
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
    </section>
  );
}

export default HeroSection;
