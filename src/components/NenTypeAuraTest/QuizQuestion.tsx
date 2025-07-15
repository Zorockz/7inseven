import { useState } from 'react';
import type { QuizQuestion as QuizQuestionType } from '../../data/nenQuestions';

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (optionIndex: number) => void;
  onPrevious: () => void;
  canGoPrevious: boolean;
  selectedAnswer?: number;
}

export const QuizQuestion = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onPrevious,
  canGoPrevious,
  selectedAnswer
}: QuizQuestionProps) => {
  const [tempSelection, setTempSelection] = useState<number | null>(selectedAnswer ?? null);

  const handleOptionSelect = (index: number) => {
    setTempSelection(index);
  };

  const handleConfirm = () => {
    if (tempSelection !== null) {
      onAnswer(tempSelection);
    }
  };

  return (
    <div className="p-8 space-y-6 w-full max-w-2xl mx-auto parchment-bg quiz-card">
      {/* Progress indicator */}
      <div className="flex items-center justify-between text-sm terminal-text">
        <span>QUESTION {questionNumber.toString().padStart(2, '0')}</span>
        <div className="flex-1 mx-4">
          <div className="w-full bg-border h-2 rounded">
            <div 
              className="bg-primary h-2 rounded transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
        <span>PROGRESS: {Math.round((questionNumber / totalQuestions) * 100)}%</span>
      </div>

      {/* Scanner line */}
              <div className="scanner-line w-full"></div>

      {/* Question */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-barlow font-semibold brown-text">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-4 max-w-2xl mx-auto">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={`
              w-full p-4 text-left rounded border-2 transition-all duration-200 backdrop-blur-sm choice-button khaki-bg
              ${tempSelection === index 
                ? 'border-primary hunter-glow shadow-lg choice-button-selected' 
                : 'border-border hover:border-primary/50 hover:shadow-md choice-button-unselected'
              }
            `}
          >
            <div className="flex items-center space-x-3">
              <div className={`
                w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center
                ${tempSelection === index 
                  ? 'border-primary bg-primary shadow-inner' 
                  : 'border-border bg-transparent'
                }
              `}>
                {tempSelection === index && (
                  <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
                )}
              </div>
              <span className="flex-1 brown-text">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex justify-between items-center pt-6">
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className={`
            px-6 py-2 rounded border-2 transition-all duration-200 shadow-md backdrop-blur-sm action-button
            ${canGoPrevious 
              ? 'border-secondary text-secondary-foreground hover:shadow-lg action-button-enabled' 
              : 'border-border text-muted-foreground cursor-not-allowed action-button-disabled'
            }
          `}
        >
          Previous
        </button>

        <div className="terminal-text text-center">
          {questionNumber} of {totalQuestions}
        </div>

        <button
          onClick={handleConfirm}
          disabled={tempSelection === null}
          className={`
            px-6 py-2 rounded border-2 transition-all duration-200 shadow-md backdrop-blur-sm action-button
            ${tempSelection === null 
              ? 'border-border text-muted-foreground cursor-not-allowed action-button-disabled' 
              : 'border-primary text-primary-foreground hover:shadow-lg action-button-enabled'
            }
          `}
        >
          {questionNumber === totalQuestions ? 'Complete Evaluation' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};