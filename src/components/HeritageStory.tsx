
import { Separator } from "@/components/ui/separator";

export function HeritageStory() {
  return (
    <section className="py-24 bg-background relative">
      {/* Decorative Top Divider */}
      <div className="w-full h-12 mb-12 flex items-center justify-center opacity-30">
        <svg width="100%" height="40" viewBox="0 0 1200 40" preserveAspectRatio="none" className="text-primary fill-current">
          <path d="M0,20 C300,0 300,40 600,20 C900,0 900,40 1200,20 L1200,22 C900,42 900,2 600,22 C300,42 300,2 0,22 Z" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <span className="text-primary font-serif italic text-xl mb-4 block">Our Story</span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
          CRAFTED IN THE <span className="text-secondary">SHADOWS</span> OF VICTORIAN LONDON
        </h2>
        
        <div className="relative p-8 md:p-12 border border-border/10 bg-card/30 backdrop-blur-sm rounded-sm">
          {/* Corner Ornaments */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light font-serif">
            Founded in 1892 by the enigmatic confectioner <span className="text-foreground">Arthur Pendelton</span>, our shop began as a small gas-lit establishment in Shoreditch. 
            Rumors swirled that Pendelton used <span className="text-secondary">galvanic currents</span> to crystallize his sugars, creating sweets that hummed with energy.
          </p>
          <Separator className="my-6 bg-background/10" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light font-serif">
            Today, we honor that electro-culinary heritage. We combine traditional copper-pan boiling techniques with modern bioluminescent ingredients, 
            ensuring every bite is a shock to the senses.
          </p>
        </div>
      </div>

      {/* Decorative Bottom Divider */}
      <div className="w-full h-12 mt-12 flex items-center justify-center opacity-30">
        <svg width="100%" height="40" viewBox="0 0 1200 40" preserveAspectRatio="none" className="text-secondary fill-current">
          <path d="M0,20 C300,40 300,0 600,20 C900,40 900,0 1200,20 L1200,22 C900,2 900,42 600,22 C300,2 300,42 0,22 Z" />
        </svg>
      </div>
    </section>
  );
}

export default HeritageStory;
