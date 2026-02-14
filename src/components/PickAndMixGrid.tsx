
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info, Sparkles } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Neon Gummy Bears",
    description: "Bio-luminescent gelatin infused with electric lime zest.",
    price: "£8.50",
    image: "/images/candy-bears.jpg",
    tags: ["Sour", "Vegan"],
    glow: "lime"
  },
  {
    id: 2,
    name: "Midnight Licorice",
    description: "Activated charcoal licorice wheels with a hint of anise.",
    price: "£6.00",
    image: "/images/candy-licorice.jpg",
    tags: ["Classic", "Bold"],
    glow: "magenta"
  },
  {
    id: 3,
    name: "Crystal Rock Candy",
    description: "Hard spun sugar crystals that crackle like static electricity.",
    price: "£12.00",
    image: "/images/candy-rock.jpg",
    tags: ["Hard", "Sweet"],
    glow: "cyan"
  },
  {
    id: 4,
    name: "Plasma Bonbons",
    description: "Liquid center chocolates that explode with flavor.",
    price: "£15.00",
    image: "/images/candy-bonbon.jpg",
    tags: ["Chocolate", "Luxury"],
    glow: "magenta"
  },
  {
    id: 5,
    name: "Voltage Violets",
    description: "Candied violet petals dusted with fizzing sherbet.",
    price: "£9.50",
    image: "/images/candy-violet.jpg",
    tags: ["Floral", "Fizz"],
    glow: "purple"
  },
  {
    id: 6,
    name: "Quantum Jawbreakers",
    description: "Layered hard candy that changes flavor every minute.",
    price: "£5.00",
    image: "/images/candy-jawbreaker.jpg",
    tags: ["Long-lasting", "Fun"],
    glow: "lime"
  }
];

export function PickAndMixGrid() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            PICK & <span className="text-secondary drop-shadow-[0_0_10px_var(--secondary)]">MIX</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select your treats from our luminous collection. Hover to inspect flavor profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative">
               <Card className="bg-card border-border/5 overflow-hidden transition-all duration-500 hover:scale-[1.02] group-hover:border-primary/50 group-hover:shadow-[0_0_20px_var(--primary)] h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20">
                     <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="ghost" size="icon" className="bg-background/50 hover:bg-primary hover:text-foreground rounded-full text-foreground/70">
                          <Info className="w-4 h-4" />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 border-primary/20 bg-background/90 backdrop-blur-xl">
                        <div className="flex justify-between space-x-4">
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold text-primary">{product.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {product.description}
                            </p>
                            <div className="flex items-center pt-2">
                              <Sparkles className="mr-2 h-4 w-4 opacity-70" />{" "}
                              <span className="text-xs text-muted-foreground">
                                Sugar-free options available
                              </span>
                            </div>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">{product.name}</CardTitle>
                    <span className="font-mono text-secondary font-bold">{product.price}</span>
                  </div>
                  <CardDescription className="line-clamp-2 pt-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardFooter className="mt-auto flex gap-2">
                  {product.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-background/5 hover:bg-background/10 text-foreground-300 border-none">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
              
              {/* Glow Effect Layer */}
              <div 
                className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-r ${product.glow === 'lime' ? 'from-secondary to-green-900' : 'from-primary to-background-900'} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PickAndMixGrid;
