import { useState } from 'react';
import { nenQuestions, type NenWeights, type NenType } from '../../data/nenQuestions';
import { QuizResults } from './QuizResults';
import { QuizIntro } from './QuizIntro';
import { QuizQuestion } from './QuizQuestion';
import styles from "@/styles/nen-type-aura-test.module.css";

export const NenQuiz = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [weights, setWeights] = useState<NenWeights>({
    enhancer: 0,
    emitter: 0,
    manipulator: 0,
    transmuter: 0,
    conjurer: 0,
    specialist: 0
  });
  const [answers, setAnswers] = useState<number[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof nenQuestions>([]);

  const handleStart = () => {
    // Properly shuffle the questions using Fisher-Yates algorithm
    const shuffled = [...nenQuestions];
    
    // Add some extra randomization by shuffling multiple times
    for (let shuffle = 0; shuffle < 3; shuffle++) {
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
    }
    
    setShuffledQuestions(shuffled);
    setCurrentStep('quiz');
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
    
    // Add weights from selected option
    const question = shuffledQuestions[currentQuestion];
    const selectedOption = question.options[optionIndex];
    const newWeights = {
      enhancer: weights.enhancer + selectedOption.weights.enhancer,
      emitter: weights.emitter + selectedOption.weights.emitter,
      manipulator: weights.manipulator + selectedOption.weights.manipulator,
      transmuter: weights.transmuter + selectedOption.weights.transmuter,
      conjurer: weights.conjurer + selectedOption.weights.conjurer,
      specialist: weights.specialist + selectedOption.weights.specialist
    };
    
    setWeights(newWeights);
    
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep('intro');
    setCurrentQuestion(0);
    setWeights({
      enhancer: 0,
      emitter: 0,
      manipulator: 0,
      transmuter: 0,
      conjurer: 0,
      specialist: 0
    });
    setAnswers([]);
    setShuffledQuestions([]);
  };

  const calculatePercentages = (): Record<NenType, number> => {
    const total = Object.values(weights).reduce((sum, val) => sum + val, 0);
    const percentages: Record<NenType, number> = {} as Record<NenType, number>;
    
    // Calculate base percentages
    Object.entries(weights).forEach(([type, value]) => {
      percentages[type as NenType] = total > 0 ? Math.round((value / total) * 100) : 0;
    });
    
    // Add dynamic adjustments based on answer patterns
    const answerPatterns = analyzeAnswerPatterns();
    Object.entries(answerPatterns).forEach(([type, adjustment]) => {
      if (percentages[type as NenType] !== undefined) {
        percentages[type as NenType] = Math.max(0, Math.min(100, percentages[type as NenType] + adjustment));
      }
    });
    
    // Normalize percentages to ensure they sum to 100
    const newTotal = Object.values(percentages).reduce((sum, val) => sum + val, 0);
    if (newTotal > 0) {
      Object.keys(percentages).forEach((type) => {
        percentages[type as NenType] = Math.round((percentages[type as NenType] / newTotal) * 100);
      });
    }
    
    return percentages;
  };

  const analyzeAnswerPatterns = (): Record<NenType, number> => {
    const patterns: Record<NenType, number> = {
      enhancer: 0,
      emitter: 0,
      manipulator: 0,
      transmuter: 0,
      conjurer: 0,
      specialist: 0
    };
    
    // Analyze consistency in answers
    let consecutiveEnhancer = 0;
    let consecutiveEmitter = 0;
    let consecutiveManipulator = 0;
    let consecutiveTransmuter = 0;
    let consecutiveConjurer = 0;
    let consecutiveSpecialist = 0;
    
    answers.forEach((answerIndex, questionIndex) => {
      if (questionIndex < shuffledQuestions.length) {
        const question = shuffledQuestions[questionIndex];
        const selectedOption = question.options[answerIndex];
        
        // Track consecutive choices for each type
        if (selectedOption.weights.enhancer > 0) consecutiveEnhancer++;
        else consecutiveEnhancer = 0;
        if (selectedOption.weights.emitter > 0) consecutiveEmitter++;
        else consecutiveEmitter = 0;
        if (selectedOption.weights.manipulator > 0) consecutiveManipulator++;
        else consecutiveManipulator = 0;
        if (selectedOption.weights.transmuter > 0) consecutiveTransmuter++;
        else consecutiveTransmuter = 0;
        if (selectedOption.weights.conjurer > 0) consecutiveConjurer++;
        else consecutiveConjurer = 0;
        if (selectedOption.weights.specialist > 0) consecutiveSpecialist++;
        else consecutiveSpecialist = 0;
      }
    });
    
    // Apply bonuses for consistent patterns
    if (consecutiveEnhancer >= 3) patterns.enhancer += 5;
    if (consecutiveEmitter >= 3) patterns.emitter += 5;
    if (consecutiveManipulator >= 3) patterns.manipulator += 5;
    if (consecutiveTransmuter >= 3) patterns.transmuter += 5;
    if (consecutiveConjurer >= 3) patterns.conjurer += 5;
    if (consecutiveSpecialist >= 3) patterns.specialist += 5;
    
    // Apply penalties for inconsistent patterns
    const totalAnswers = answers.length;
    if (totalAnswers > 0) {
      const enhancerRatio = weights.enhancer / totalAnswers;
      const emitterRatio = weights.emitter / totalAnswers;
      const manipulatorRatio = weights.manipulator / totalAnswers;
      const transmuterRatio = weights.transmuter / totalAnswers;
      const conjurerRatio = weights.conjurer / totalAnswers;
      const specialistRatio = weights.specialist / totalAnswers;
      
      // If someone shows very low affinity for a type, reduce it further
      if (enhancerRatio < 0.5) patterns.enhancer -= 3;
      if (emitterRatio < 0.5) patterns.emitter -= 3;
      if (manipulatorRatio < 0.5) patterns.manipulator -= 3;
      if (transmuterRatio < 0.5) patterns.transmuter -= 3;
      if (conjurerRatio < 0.5) patterns.conjurer -= 3;
      if (specialistRatio < 0.5) patterns.specialist -= 3;
    }
    
    return patterns;
  };

  const getDominantType = (): NenType => {
    // Find the type with the highest weight
    let dominantType: NenType = 'enhancer';
    let maxWeight = weights.enhancer;
    
    if (weights.emitter > maxWeight) {
      dominantType = 'emitter';
      maxWeight = weights.emitter;
    }
    if (weights.manipulator > maxWeight) {
      dominantType = 'manipulator';
      maxWeight = weights.manipulator;
    }
    if (weights.transmuter > maxWeight) {
      dominantType = 'transmuter';
      maxWeight = weights.transmuter;
    }
    if (weights.conjurer > maxWeight) {
      dominantType = 'conjurer';
      maxWeight = weights.conjurer;
    }
    if (weights.specialist > maxWeight) {
      dominantType = 'specialist';
      maxWeight = weights.specialist;
    }
    
    return dominantType;
  };

  return (
    <div className={`${styles['quiz-wrapper']} ${styles.quizBackground}`}>
      {currentStep === 'intro' && <QuizIntro onStart={handleStart} />}
      {currentStep === 'quiz' && shuffledQuestions.length > 0 && (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative z-10" style={{
          backgroundImage: 'url(/parchment-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
          <div className="w-full max-w-4xl">
            <QuizQuestion
              question={shuffledQuestions[currentQuestion]}
              questionNumber={currentQuestion + 1}
              totalQuestions={shuffledQuestions.length}
              onAnswer={handleAnswer}
              onPrevious={handlePrevious}
              canGoPrevious={currentQuestion > 0}
              selectedAnswer={answers[currentQuestion]}
            />
          </div>
        </div>
      )}
      {currentStep === 'results' && (
        <QuizResults
          dominantType={getDominantType()}
          percentages={calculatePercentages()}
          totals={weights}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};