import { Card, CardContent } from '@/components/ui/card';
import { Share2 } from 'lucide-react';

interface ResultCardProps {
  profileName: string;
  description: string;
  emoji: string;
  likedCount: number;
  totalCount: number;
}

export const ResultCard = ({ 
  profileName, 
  description, 
  emoji, 
  likedCount, 
  totalCount 
}: ResultCardProps) => {
  const percentage = Math.round((likedCount / totalCount) * 100);

  const handleShare = async () => {
    const text = `I just discovered my aesthetic profile: ${profileName} ${emoji}\n\n${description}\n\nTake the test at: ${window.location.origin}/aesthetic-swipe`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Aesthetic Profile',
          text: text,
          url: window.location.origin + '/aesthetic-swipe'
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(text);
        alert('Profile copied to clipboard!');
      } catch (error) {
        console.log('Error copying to clipboard:', error);
      }
    }
  };

  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg">
      <CardContent className="p-8">
        <div className="text-center">
          {/* Profile Header */}
          <div className="mb-6">
            <div className="text-6xl mb-4">{emoji}</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">{profileName}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          </div>

          {/* Stats */}
          <div className="bg-muted/50 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Your Taste Score</span>
              <span className="text-sm font-semibold text-foreground">{percentage}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Liked {likedCount} of {totalCount}</span>
              <span>{likedCount} aesthetic vibes</span>
            </div>
          </div>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            Share My Profile
          </button>
        </div>
      </CardContent>
    </Card>
  );
}; 