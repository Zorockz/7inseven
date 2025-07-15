import styles from "@/styles/nen-type-aura-test.module.css";

export const QuizHeader = () => {
  return (
    <div className="text-center mb-8 space-y-4">
      {/* Hunter License Badge */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary border-4 border-secondary mb-4">
        <span className="font-bebas text-2xl text-primary-foreground font-bold">H</span>
      </div>
      
      {/* Main Title */}
      <h1 className="hunter-title text-center">
        NEN TYPE
      </h1>
      
      {/* Subtitle */}
      <p className="hunter-subtitle text-center">
        INNATE POTENTIAL EVALUATION
      </p>
      
      {/* Scanner line animation */}
      <div className="relative w-full max-w-md mx-auto">
        <div className="scanner-line scanner-sweep"></div>
      </div>
      
      {/* Description */}
      <div className="parchment-card p-6 max-w-2xl mx-auto">
        <p className="terminal-text text-center">
          Hunter Association Database Access • Classification: CONFIDENTIAL
        </p>
        <p className="text-center mt-2 text-sm">
          Answer the following questions to determine your natural Nen category affinity.
          <br />
          Results will be compiled into your official evaluation report.
        </p>
      </div>
    </div>
  );
};