import { useState, useEffect } from 'react';
import { SwipeCard } from '@/components/SwipeCard';
import { ActionButtons } from '@/components/ActionButtons';
import { ResultCard } from '@/components/ResultCard';
import { moodboards, aestheticProfiles } from '@/data/moodboards';
import { Sparkles, Zap } from 'lucide-react';

type GameState = 'intro' | 'swiping' | 'results';

const AestheticSwipe = () => {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [swipeResults, setSwipeResults] = useState<string[]>([]);
  const [shuffledMoodboards, setShuffledMoodboards] = useState(moodboards);

  // Shuffle moodboards on component mount
  useEffect(() => {
    const shuffled = [...moodboards].sort(() => Math.random() - 0.5);
    setShuffledMoodboards(shuffled);
  }, []);

  const handleSwipe = (direction: 'like' | 'dislike') => {
    const currentMoodboard = shuffledMoodboards[currentCardIndex];
    const newResults = [...swipeResults];
    
    if (direction === 'like') {
      newResults.push(currentMoodboard.aesthetic);
    }
    
    setSwipeResults(newResults);
    
    if (currentCardIndex >= 17) { // After 18 swipes (0-17)
      setGameState('results');
    } else {
      setCurrentCardIndex(prev => prev + 1);
    }
  };

  const handleStartGame = () => {
    setGameState('swiping');
    setCurrentCardIndex(0);
    setSwipeResults([]);
  };

  const handleRestart = () => {
    setGameState('intro');
    setCurrentCardIndex(0);
    setSwipeResults([]);
    const shuffled = [...moodboards].sort(() => Math.random() - 0.5);
    setShuffledMoodboards(shuffled);
  };

  const generateResult = () => {
    const aestheticCounts = swipeResults.reduce((acc, aesthetic) => {
      acc[aesthetic] = (acc[aesthetic] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Find dominant aesthetic
    const dominantAesthetic = Object.entries(aestheticCounts).reduce((a, b) => 
      aestheticCounts[a[0]] > aestheticCounts[b[0]] ? a : b
    )[0] || 'clean';

    const profile = aestheticProfiles[dominantAesthetic as keyof typeof aestheticProfiles];
    const randomIndex = Math.floor(Math.random() * profile.names.length);

    return {
      profileName: profile.names[randomIndex],
      description: profile.descriptions[randomIndex],
      emoji: profile.emojis[randomIndex],
      likedCount: swipeResults.length,
      totalCount: 18
    };
  };

  if (gameState === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <div className="relative">
              <h1 className="text-6xl font-bold font-heading bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Aesthetic Swipe
              </h1>
              <p className="text-sm font-mono text-purple-400 mb-2">
                Discover your visual taste profile
              </p>
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-purple-400 animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Find your aesthetic identity through moodboard swiping
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-border/50">
            <h2 className="text-lg font-semibold mb-4 text-foreground">How it works:</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white">1</span>
                <span className="text-sm text-muted-foreground">Swipe through 18 diverse aesthetic moodboards</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white">2</span>
                <span className="text-sm text-muted-foreground">❤️ for vibes you love, ✖️ for pass</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white">3</span>
                <span className="text-sm text-muted-foreground">Get your unique taste profile & share it</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleStartGame}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Zap className="w-5 h-5 inline mr-2" />
            Start Discovering
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'swiping') {
    const currentMoodboard = shuffledMoodboards[currentCardIndex];
    const progress = ((currentCardIndex + 1) / 18) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex flex-col items-center justify-center p-6">
        {/* Progress Bar */}
        <div className="w-full max-w-sm mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{currentCardIndex + 1} of 18</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Swipe Card */}
        <div className="relative mb-8">
          <SwipeCard
            image={currentMoodboard.image}
            title={currentMoodboard.title}
            onSwipe={handleSwipe}
          />
          
          {/* Next card preview */}
          {currentCardIndex < 17 && (
            <SwipeCard
              image={shuffledMoodboards[currentCardIndex + 1].image}
              title={shuffledMoodboards[currentCardIndex + 1].title}
              onSwipe={() => {}}
              className="absolute inset-0 -z-10 scale-95 opacity-50"
            />
          )}
        </div>

        {/* Action Buttons */}
        <ActionButtons 
          onLike={() => handleSwipe('like')}
          onDislike={() => handleSwipe('dislike')}
        />

        <p className="text-muted-foreground text-sm mt-6 text-center">
          Swipe or use the buttons below
        </p>
      </div>
    );
  }

  if (gameState === 'results') {
    const result = generateResult();

    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex flex-col items-center justify-center p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-heading text-foreground mb-2">
            Your Aesthetic Profile
          </h1>
          <p className="text-muted-foreground">
            Share your visual identity with the world
          </p>
        </div>

        <ResultCard {...result} />

        <button
          onClick={handleRestart}
          className="mt-8 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          Take the test again
        </button>
      </div>
    );
  }

  return null;
};

export default AestheticSwipe; 