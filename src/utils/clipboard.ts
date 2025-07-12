import { toast } from '@/hooks/use-toast';

export const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard! 📋",
      description: "Ready to flex on your timeline ✨",
    });
  } catch (err) {
    toast({
      title: "Copy failed",
      description: "Try selecting and copying manually",
      variant: "destructive",
    });
  }
};

export const generateRandomLikes = (): number => {
  return Math.floor(Math.random() * 10000) + 1000;
}; 