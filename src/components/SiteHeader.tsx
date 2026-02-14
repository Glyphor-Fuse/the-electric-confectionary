
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/50 backdrop-blur-md supports-[backdrop-filter]:bg-background/20">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border border-primary bg-primary/20 shadow-[0_0_10px_var(--primary)] flex items-center justify-center">
             <span className="text-primary font-serif font-bold text-lg">E</span>
          </div>
          <span className="text-lg font-serif font-bold tracking-wider text-foreground">
            ELECTRIC <span className="text-primary">CONFECTIONARY</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {["Shop", "Heritage", "Locations", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_var(--primary)]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-background/5">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="hidden md:flex border-secondary text-secondary hover:bg-secondary hover:text-foreground hover:shadow-[0_0_15px_var(--secondary)] transition-all duration-300">
            ORDER NOW
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-foreground">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
