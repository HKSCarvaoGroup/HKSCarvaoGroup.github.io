import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Compare from "./pages/Compare";
import About from "./pages/About";
import PolicyDetail from "./pages/PolicyDetail";
import Benchmarks from "./pages/Benchmarks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-14 border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10 flex items-center px-4">
                <SidebarTrigger />
                <h2 className="ml-4 font-semibold text-lg">AI Policy Framework</h2>
              </header>
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/compare" element={<Compare />} />
                  <Route path="/benchmarks" element={<Benchmarks />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/policy/:id" element={<PolicyDetail />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </TooltipProvider>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
