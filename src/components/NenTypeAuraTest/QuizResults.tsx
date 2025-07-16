import { nenTypeInfo, type NenType, type NenWeights } from '../../data/nenQuestions';
import styles from "@/styles/nen-type-aura-test.module.css";

interface QuizResultsProps {
  dominantType: NenType;
  percentages: Record<NenType, number>;
  totals: NenWeights;
  onRestart: () => void;
}

const getTypeGradient = (type: NenType) => {
  const gradients = {
    enhancer: 'var(--gradient-enhancer)',
    emitter: 'var(--gradient-emitter)',
    manipulator: 'var(--gradient-manipulator)',
    transmuter: 'var(--gradient-transmuter)',
    conjurer: 'var(--gradient-conjurer)',
    specialist: 'var(--gradient-specialist)'
  };
  return gradients[type];
};

const getTypeShadow = (type: NenType) => {
  const shadows = {
    enhancer: 'var(--shadow-enhancer)',
    emitter: 'var(--shadow-emitter)',
    manipulator: 'var(--shadow-manipulator)',
    transmuter: 'var(--shadow-transmuter)',
    conjurer: 'var(--shadow-conjurer)',
    specialist: 'var(--shadow-specialist)'
  };
  return shadows[type];
};

export const QuizResults = ({ dominantType, percentages, onRestart }: QuizResultsProps) => {
  const typeInfo = nenTypeInfo[dominantType];
  
  // Sort percentages for display
  const sortedPercentages = Object.entries(percentages)
    .sort(([,a], [,b]) => b - a)
    .filter(([,value]) => value > 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            background: getTypeGradient(dominantType),
            filter: 'blur(100px)',
          }}
        />
      </div>
      
      <div className="w-full max-w-5xl space-y-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <div 
            className="inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-secondary mb-6 aura-ring"
            style={{
              background: getTypeGradient(dominantType),
              boxShadow: getTypeShadow(dominantType),
            }}
          >
            <span className="font-bebas text-4xl text-white font-bold drop-shadow-lg">H</span>
          </div>
          
          <h1 className={styles.hunterTitle}>
            EVALUATION COMPLETE
          </h1>
          
          <p className="terminal-text text-lg">
            HUNTER ASSOCIATION • NEN CLASSIFICATION REPORT
          </p>
          
          <div className="scanner-line w-full max-w-lg mx-auto"></div>
        </div>

        {/* Main Results Card */}
        <div 
          className="parchment-card p-10 space-y-10 border-4"
          style={{
            background: 'var(--gradient-results)',
            borderColor: typeInfo.color,
            boxShadow: getTypeShadow(dominantType),
          }}
        >
          
          {/* Primary Classification */}
          <div className="text-center space-y-6">
            <div 
              className="inline-block p-6 rounded-xl"
              style={{
                background: getTypeGradient(dominantType),
                boxShadow: getTypeShadow(dominantType),
              }}
            >
              <h2 
                className="font-bebas text-5xl md:text-7xl font-bold tracking-wider text-white drop-shadow-lg"
              >
                {typeInfo.name.toUpperCase()}
              </h2>
            </div>
            
            <div className="space-y-3">
              <p className="text-xl font-semibold">PRIMARY CLASSIFICATION</p>
              <div 
                className="inline-block px-8 py-4 rounded-lg font-bebas text-4xl font-bold text-white"
                style={{
                  background: getTypeGradient(dominantType),
                  boxShadow: getTypeShadow(dominantType),
                }}
              >
                {percentages[dominantType]}%
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <h3 
              className="font-barlow font-bold text-2xl border-b-4 pb-3"
              style={{ borderColor: typeInfo.color }}
            >
              AURA PROFILE ANALYSIS
            </h3>
            <div 
              className="p-6 rounded-lg border-l-4"
              style={{ 
                borderColor: typeInfo.color,
                backgroundColor: `${typeInfo.color}15`,
              }}
            >
              <p className="text-lg leading-relaxed font-medium">
                {typeInfo.description}
              </p>
            </div>
          </div>

          {/* Percentage Breakdown */}
          <div className="space-y-6">
            <h3 
              className="font-barlow font-bold text-2xl border-b-4 pb-3"
              style={{ borderColor: typeInfo.color }}
            >
              COMPLETE NEN AFFINITY BREAKDOWN
            </h3>
            <div className="grid gap-4">
              {sortedPercentages.map(([type, percentage], index) => {
                const typeColor = nenTypeInfo[type as NenType].color;
                const gradient = getTypeGradient(type as NenType);
                
                return (
                  <div key={type} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-barlow font-semibold text-lg capitalize">
                        {nenTypeInfo[type as NenType].name}
                      </span>
                      <span 
                        className="font-mono font-bold text-xl px-4 py-2 rounded text-white"
                        style={{ 
                          background: gradient,
                          boxShadow: `0 0 15px ${typeColor}40`,
                        }}
                      >
                        {percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-border h-4 rounded-full overflow-hidden">
                      <div 
                        className="h-4 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${percentage}%`,
                          background: gradient,
                          boxShadow: `inset 0 0 10px ${typeColor}60`,
                          animationDelay: `${index * 300}ms`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Character Similarities */}
          <div className="space-y-6">
            <h3 
              className="font-barlow font-bold text-2xl border-b-4 pb-3"
              style={{ borderColor: typeInfo.color }}
            >
              SIMILAR HUNTER ARCHETYPES
            </h3>
            <div className="space-y-4">
              <p className="terminal-text text-lg">
                Your aura profile matches these renowned Hunters:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {typeInfo.characters.map((character) => (
                  <div 
                    key={character} 
                    className="p-4 rounded-lg border-2 text-center font-semibold"
                    style={{
                      borderColor: typeInfo.color,
                      background: `${typeInfo.color}10`,
                      boxShadow: `0 4px 15px ${typeInfo.color}20`,
                    }}
                  >
                    {character}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Traits */}
          <div className="space-y-6">
            <h3 
              className="font-barlow font-bold text-2xl border-b-4 pb-3"
              style={{ borderColor: typeInfo.color }}
            >
              DOMINANT PERSONALITY TRAITS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {typeInfo.traits.map((trait) => (
                <div
                  key={trait}
                  className="px-4 py-3 rounded-lg font-semibold text-center text-white"
                  style={{
                    background: getTypeGradient(dominantType),
                    boxShadow: getTypeShadow(dominantType),
                  }}
                >
                  {trait}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div 
            className="border-t-4 pt-8 space-y-6"
            style={{ borderColor: typeInfo.color }}
          >
            <div className="terminal-text text-center space-y-2 text-lg">
              <p>✓ CLASSIFICATION VERIFIED • HUNTER ASSOCIATION DATABASE</p>
              <p>📊 AURA ANALYSIS COMPLETE • REPORT ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <p>📅 REPORT GENERATED: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
            
            <div className="flex justify-center pt-4">
              <button
                onClick={onRestart}
                className="hunter-button text-xl px-12 py-4"
              >
                RETAKE EVALUATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};