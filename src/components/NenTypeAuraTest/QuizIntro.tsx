import styles from "@/styles/nen-type-aura-test.module.css";

interface QuizIntroProps {
  onStart: () => void;
}

export const QuizIntro = ({ onStart }: QuizIntroProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8 relative z-10" style={{
      backgroundImage: 'url(/parchment-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      
      {/* Hunter x Hunter Logo */}
      <div className="flex flex-col items-center space-y-8">
        <div className="w-64 h-32 flex items-center justify-center hunter-glow">
          <div className="text-center">
            <div className="font-bebas text-6xl text-primary font-bold tracking-wider drop-shadow-lg">
              HUNTER
            </div>
            <div className="font-bebas text-4xl text-secondary font-bold tracking-wider drop-shadow-lg">
              × HUNTER
            </div>
          </div>
        </div>
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h1 className="hunter-title text-6xl md:text-8xl">
            NEN TYPE
          </h1>
          <h2 className="hunter-subtitle text-2xl md:text-3xl">
            EVALUATION SYSTEM
          </h2>
        </div>
      </div>

      {/* Scanner line animation */}
      <div className="relative w-full max-w-lg mx-auto">
        <div className="scanner-line scanner-sweep"></div>
      </div>

      {/* Main introduction card */}
      <div className="p-8 max-w-3xl mx-auto space-y-6 my-8 md:my-12 lg:my-16" style={{
        backgroundImage: 'url(/parchment-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0.5rem',
        border: '2px solid hsl(var(--border))',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(2px)'
      }}>
        <div className="text-center space-y-4">
          <div className="terminal-text text-lg">
            HUNTER ASSOCIATION • CONFIDENTIAL DATABASE ACCESS
          </div>
          
          <h3 className="font-barlow font-bold text-2xl" style={{ color: '#7c4a03' }}>
            DISCOVER YOUR INNATE NEN POTENTIAL
          </h3>
          
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Welcome, aspiring Hunter. This evaluation will analyze your current aura patterns and 
              determine your dominant Nen category based on your personality, instincts, and decision-making patterns.
            </p>
            
            <p>
              The Hunter Association has developed this assessment to identify your current affinity for the six 
              primary Nen types: <span className="font-semibold text-primary">Enhancer</span>, 
              <span className="font-semibold text-accent"> Emitter</span>, 
              <span className="font-semibold text-aura-purple"> Manipulator</span>, 
              <span className="font-semibold text-blue-400"> Transmuter</span>, 
              <span className="font-semibold text-yellow-500"> Conjurer</span>, or 
              <span className="font-semibold text-purple-500"> Specialist</span>.
            </p>
            
            <p className="text-sm text-muted-foreground italic">
              Note: Nen types are not set in stone. Your aura patterns can evolve and change based on your experiences, 
              personal growth, and the challenges you face. This evaluation reflects your current state.
            </p>
          </div>
          
          {/* Warning/Instructions */}
          <div className="border-l-4 border-primary p-4 text-left" style={{
            backgroundImage: 'url(/parchment-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '0.25rem',
            opacity: '0.8'
          }}>
            <h4 className="font-semibold mb-2">⚠️ EVALUATION INSTRUCTIONS:</h4>
            <ul className="space-y-1 text-sm terminal-text">
              <li>• Answer all questions honestly based on your natural instincts</li>
              <li>• There are no wrong answers - only authentic responses</li>
              <li>• Your results will be compiled into an official Hunter report</li>
              <li>• This evaluation measures your <em>innate</em> potential before Nen training</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Start button */}
      <div className="text-center space-y-4">
        <button
          onClick={onStart}
          className="px-8 py-3 rounded border-2 transition-all duration-200 shadow-md text-xl font-semibold backdrop-blur-sm"
          style={{
            borderColor: 'hsl(var(--primary))',
            backgroundImage: 'url(/parchment-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'hsl(var(--primary))',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.8';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
          }}
        >
          BEGIN EVALUATION
        </button>
        
        <p className="terminal-text text-sm">
          Estimated time: 5-7 minutes
        </p>
      </div>

      {/* Footer */}
      <div className="text-center terminal-text text-xs space-y-1">
        <p>HUNTER ASSOCIATION DATABASE • CLASSIFICATION SYSTEM v2.0</p>
        <p>AUTHORIZED PERSONNEL ONLY</p>
      </div>
    </div>
  );
};