import { useState } from 'react';
import { Heart, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SwipeCardProps {
  image: string;
  title: string;
  onSwipe: (direction: 'like' | 'dislike') => void;
  className?: string;
  disabled?: boolean;
}

export const SwipeCard = ({ image, title, onSwipe, className }: SwipeCardProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;
    setDragOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Check if swipe threshold is met
    if (Math.abs(dragOffset.x) > 100) {
      if (dragOffset.x > 0) {
        onSwipe('like');
      } else {
        onSwipe('dislike');
      }
    }
    
    setDragOffset({ x: 0, y: 0 });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setStartPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - startPos.x;
    const deltaY = touch.clientY - startPos.y;
    setDragOffset({ x: deltaX, y: deltaY });
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(dragOffset.x) > 100) {
      if (dragOffset.x > 0) {
        onSwipe('like');
      } else {
        onSwipe('dislike');
      }
    }
    
    setDragOffset({ x: 0, y: 0 });
  };

  const rotation = dragOffset.x * 0.1;
  const opacity = 1 - Math.abs(dragOffset.x) * 0.002;

  return (
    <div
      className={cn(
        "relative w-80 h-96 bg-card rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing select-none",
        "shadow-lg transition-transform duration-200",
        isDragging && "transition-none",
        className
      )}
      style={{
        transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) rotate(${rotation}deg)`,
        opacity: opacity,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image */}
      <div 
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Title */}
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
      
      {/* Enhanced Reaction Overlays */}
      {dragOffset.x > 50 && (
        <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
          <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-xl">
            ❤️ LOVE
          </div>
        </div>
      )}
      
      {dragOffset.x < -50 && (
        <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
          <div className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-xl">
            ❌ PASS
          </div>
        </div>
      )}
    </div>
  );
}; 