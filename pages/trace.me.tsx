import dynamic from 'next/dynamic';
import styles from './trace-me-index.module.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster as CustomToaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import Index from '@/components/TraceMeIndex';

const queryClient = new QueryClient();

export default function TraceMePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className={`dark ${styles.traceMeRoot}`}>
          <CustomToaster />
          <Sonner />
          <Index />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
} 