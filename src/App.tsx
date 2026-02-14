
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { PickAndMixGrid } from "@/components/PickAndMixGrid";
import { HeritageStory } from "@/components/HeritageStory";
import { NeonLocation } from "@/components/NeonLocation";
import { SiteFooter } from "@/components/SiteFooter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
          <SiteHeader />
          <HeroSection />
          <PickAndMixGrid />
          <HeritageStory />
          <NeonLocation />
          <SiteFooter />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
