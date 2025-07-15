import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NenQuiz } from "@/components/NenTypeAuraTest/NenQuiz";

const queryClient = new QueryClient();

export default function NenTypeAuraTestPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <NenQuiz />
      </TooltipProvider>
    </QueryClientProvider>
  );
} 