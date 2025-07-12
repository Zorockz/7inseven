import React, { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { copyToClipboard, generateRandomLikes } from "@/utils/clipboard";

interface FlexCardProps {
  image: string;
  caption: string;
  onFlexAgain: () => void;
}

// Custom hook for likes functionality
const useLikes = () => {
  const [likes] = useState(() => generateRandomLikes());
  return likes;
};

// Custom hook for clipboard functionality
const useClipboard = () => {
  const handleCopy = useCallback(async (text: string) => {
    await copyToClipboard(text);
  }, []);

  return { handleCopy };
};

// Header component
const CardHeader: React.FC = () => (
  <div className="flex items-center gap-3 p-4 pb-0">
    <div className="w-8 h-8 rounded-full bg-gradient-story flex items-center justify-center">
      <span className="text-white text-sm font-bold">F</span>
    </div>
    <div className="flex-1">
      <p className="font-semibold text-sm text-foreground">fakeflex</p>
      <p className="text-xs text-muted-foreground">Sponsored • Delulu Island</p>
    </div>
  </div>
);

// Image component
const CardImage: React.FC<{ image: string }> = ({ image }) => (
  <div className="aspect-square relative overflow-hidden mt-3">
    <img 
      src={image} 
      alt="Fake flex content" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
  </div>
);

// Content component
const CardContent: React.FC<{ 
  caption: string; 
  likes: number; 
  onGenerate: () => void; 
  onCopy: () => void;
}> = ({ caption, likes, onGenerate, onCopy }) => (
  <div className="p-4 pb-2">
    <p className="text-sm font-semibold mb-1 text-foreground">
      {likes.toLocaleString()} likes
    </p>

    <div className="mb-4">
      <p className="text-base font-medium leading-relaxed text-foreground">
        <span className="font-semibold text-foreground">fakeflex</span> {caption}
      </p>
    </div>

    <div className="flex gap-2">
      <Button 
        onClick={onGenerate}
        variant="flex" 
        className="flex-1 text-white font-semibold"
      >
        <RefreshCw className="w-4 h-4" />
        Generate Caption
      </Button>
      <Button 
        onClick={onCopy}
        variant="outline" 
        size="icon"
        className="shrink-0 border-foreground/20 text-foreground hover:bg-foreground/10"
      >
        Copy
      </Button>
    </div>
  </div>
);

export function FlexCard({ image, caption, onFlexAgain }: FlexCardProps) {
  const likes = useLikes();
  const { handleCopy } = useClipboard();

  const handleCopyCaption = useCallback(() => {
    handleCopy(caption);
  }, [caption, handleCopy]);

  return (
    <Card className="w-full max-w-sm mx-auto bg-card border-0 shadow-card overflow-hidden animate-bounce-in">
      <CardHeader />
      <CardImage image={image} />
      <CardContent 
        caption={caption}
        likes={likes}
        onGenerate={onFlexAgain}
        onCopy={handleCopyCaption}
      />
    </Card>
  );
} 