import { Heart, X } from 'lucide-react';

interface ActionButtonsProps {
  onLike: () => void;
  onDislike: () => void;
}

export const ActionButtons = ({ onLike, onDislike }: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-6">
      <button
        onClick={onDislike}
        className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-110"
      >
        <X className="w-8 h-8 text-red-500" />
      </button>
      
      <button
        onClick={onLike}
        className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-110"
      >
        <Heart className="w-8 h-8 text-green-500 fill-current" />
      </button>
    </div>
  );
}; 