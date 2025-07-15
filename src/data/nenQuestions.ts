export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  weights: NenWeights;
}

export interface NenWeights {
  enhancer: number;
  emitter: number;
  manipulator: number;
  transmuter: number;
  conjurer: number;
  specialist: number;
}

export type NenType = 'enhancer' | 'emitter' | 'manipulator' | 'transmuter' | 'conjurer' | 'specialist';

export const nenQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "You're trapped in a collapsing building with other people. Your first instinct is to:",
    options: [
      {
        text: "Shield others with your body and break through debris with brute force",
        weights: { enhancer: 3, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "Create distance and blast away obstacles from a safe position",
        weights: { enhancer: 0, emitter: 3, manipulator: 0, transmuter: 1, conjurer: 0, specialist: 0 }
      },
      {
        text: "Take command and coordinate everyone's escape route systematically",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Quickly adapt your approach, changing tactics as the situation evolves",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "Use whatever tools or makeshift devices you can create to engineer an escape",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 2,
    question: "During a heated argument, you tend to:",
    options: [
      {
        text: "Express your feelings directly and honestly, even if it's confrontational",
        weights: { enhancer: 3, emitter: 1, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 0 }
      },
      {
        text: "Step back physically and mentally, needing space to process",
        weights: { enhancer: 0, emitter: 3, manipulator: 0, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Carefully analyze the situation and guide the conversation strategically",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Change your approach mid-conversation, keeping others off-balance",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 3, conjurer: 0, specialist: 0 }
      },
      {
        text: "Present carefully prepared facts and evidence to support your position",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 3,
    question: "If you could have any superpower, it would be:",
    options: [
      {
        text: "Superhuman strength and invulnerability",
        weights: { enhancer: 3, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "Telekinesis or energy blasts that work from a distance",
        weights: { enhancer: 0, emitter: 3, manipulator: 1, transmuter: 0, conjurer: 0, specialist: 0 }
      },
      {
        text: "Mind control or the ability to influence others' actions",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "Shapeshifting or the ability to alter your properties at will",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "The power to materialize any object you can imagine in perfect detail",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 4,
    question: "When playing games, you prefer:",
    options: [
      {
        text: "Action games where skill and reflexes determine the winner",
        weights: { enhancer: 3, emitter: 1, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 0 }
      },
      {
        text: "Games where you can play solo or maintain independence",
        weights: { enhancer: 1, emitter: 3, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 0 }
      },
      {
        text: "Strategy games that require long-term planning and control",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Games with unpredictable elements where you can improvise",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "Complex games with intricate rules and detailed mechanics",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 5,
    question: "Your worst nightmare would involve:",
    options: [
      {
        text: "Being completely powerless to protect those you care about",
        weights: { enhancer: 3, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "Being trapped with no escape route or personal space",
        weights: { enhancer: 1, emitter: 3, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 0 }
      },
      {
        text: "Losing control of a situation completely",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "Being stuck in the same routine forever with no change",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "Having all your carefully planned work destroyed",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 6,
    question: "In a survival situation, your priority would be:",
    options: [
      {
        text: "Building physical strength and endurance to outlast the challenges",
        weights: { enhancer: 3, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Finding or creating a secure base away from immediate threats",
        weights: { enhancer: 1, emitter: 3, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 0 }
      },
      {
        text: "Establishing dominance over your environment and potential threats",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "Staying flexible and adapting quickly to changing conditions",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "Creating the tools and shelter needed for long-term survival",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 7,
    question: "When someone betrays your trust, you:",
    options: [
      {
        text: "Confront them immediately and directly about their actions",
        weights: { enhancer: 3, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "Distance yourself and cut ties without much explanation",
        weights: { enhancer: 0, emitter: 3, manipulator: 0, transmuter: 1, conjurer: 0, specialist: 0 }
      },
      {
        text: "Carefully plan how to use this information to your advantage",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Act unpredictably - sometimes forgiving, sometimes ruthless",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "Document everything and build an airtight case before taking action",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 8,
    question: "Your ideal vacation would be:",
    options: [
      {
        text: "An adventure sport destination with physical challenges",
        weights: { enhancer: 3, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "A remote location where you can be completely alone",
        weights: { enhancer: 0, emitter: 3, manipulator: 0, transmuter: 1, conjurer: 0, specialist: 0 }
      },
      {
        text: "A luxury resort where everything is perfectly organized and controlled",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Backpacking with no set itinerary, letting each day surprise you",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "A cultural immersion trip with detailed research and planning",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 9,
    question: "If you were a teacher, your students would remember you for:",
    options: [
      {
        text: "Being passionate, energetic, and pushing them to be their best",
        weights: { enhancer: 3, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "Giving them space to learn independently while being available when needed",
        weights: { enhancer: 0, emitter: 3, manipulator: 0, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Having perfectly structured lessons and maintaining classroom order",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Making every lesson different and keeping everyone guessing",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "Creating detailed, comprehensive materials and thorough explanations",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 10,
    question: "Your biggest fear about yourself is:",
    options: [
      {
        text: "That you're too simple or predictable for complex situations",
        weights: { enhancer: 3, emitter: 1, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 0 }
      },
      {
        text: "That your independence pushes people away when you need them",
        weights: { enhancer: 1, emitter: 3, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 0 }
      },
      {
        text: "That your need for control makes you manipulative or cold",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "That your unpredictability makes you unreliable to others",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "That your perfectionism prevents you from taking necessary risks",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 11,
    question: "In your friend group, you're known as:",
    options: [
      {
        text: "The loyal protector who's always ready to stand up for others",
        weights: { enhancer: 3, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "The independent one who comes and goes as they please",
        weights: { enhancer: 1, emitter: 3, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 0 }
      },
      {
        text: "The organizer who keeps everyone coordinated and on track",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "The wildcard who keeps things interesting and unpredictable",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "The planner who researches everything and comes prepared",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 12,
    question: "When facing an impossible deadline, you:",
    options: [
      {
        text: "Work harder and longer, pushing through with sheer determination",
        weights: { enhancer: 3, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Isolate yourself to focus completely without distractions",
        weights: { enhancer: 1, emitter: 3, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 0 }
      },
      {
        text: "Delegate tasks and coordinate others to maximize efficiency",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Constantly change your approach until you find what works",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "Create detailed systems and tools to work more efficiently",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 13,
    question: "Your ideal pet would be:",
    options: [
      {
        text: "A loyal dog that would protect your family",
        weights: { enhancer: 3, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "A cat that's independent but affectionate on its own terms",
        weights: { enhancer: 1, emitter: 3, manipulator: 0, transmuter: 1, conjurer: 0, specialist: 0 }
      },
      {
        text: "A highly intelligent animal you could train extensively",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "An exotic animal that surprises you with its behavior",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "A pet that requires careful care and detailed attention",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 14,
    question: "When someone asks for your help, you:",
    options: [
      {
        text: "Drop everything and help immediately with whatever they need",
        weights: { enhancer: 3, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "Help if you can, but maintain your boundaries and independence",
        weights: { enhancer: 1, emitter: 3, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 0 }
      },
      {
        text: "Assess the situation and provide strategic guidance",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Help in unexpected ways that they didn't think to ask for",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "Research their problem thoroughly and provide comprehensive solutions",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  },
  {
    id: 15,
    question: "If you had unlimited resources, you would:",
    options: [
      {
        text: "Use them to become stronger and help those in need",
        weights: { enhancer: 3, emitter: 0, manipulator: 0, transmuter: 0, conjurer: 0, specialist: 1 }
      },
      {
        text: "Create a perfect sanctuary where you could live freely",
        weights: { enhancer: 0, emitter: 3, manipulator: 0, transmuter: 1, conjurer: 0, specialist: 0 }
      },
      {
        text: "Build systems to improve society and solve major problems",
        weights: { enhancer: 0, emitter: 0, manipulator: 3, transmuter: 0, conjurer: 1, specialist: 0 }
      },
      {
        text: "Travel the world experiencing everything it has to offer",
        weights: { enhancer: 0, emitter: 0, manipulator: 0, transmuter: 3, conjurer: 0, specialist: 1 }
      },
      {
        text: "Fund research and development to advance human knowledge",
        weights: { enhancer: 0, emitter: 0, manipulator: 1, transmuter: 0, conjurer: 3, specialist: 0 }
      }
    ]
  }
];

export const nenTypeInfo = {
  enhancer: {
    name: "Enhancer",
    description: "Your current aura pattern shows strong enhancement tendencies. You approach challenges with direct physical strength and unwavering determination. Your aura naturally amplifies your existing abilities, making you formidable in direct confrontation. However, remember that nen types can evolve based on your experiences and choices.",
    characters: ["Gon Freecss", "Uvogin", "Palm Siberia"],
    color: "hsl(var(--hunter-red))",
    traits: ["Direct", "Honest", "Determined", "Strong-willed"]
  },
  emitter: {
    name: "Emitter", 
    description: "Your current aura flow indicates strong emission patterns. You prefer to maintain distance while projecting your power outward, reflecting your independent and self-reliant nature. Your aura can travel far from your body, allowing for strategic long-range abilities. Your nen type may shift as your personality and circumstances change.",
    characters: ["Razor", "Leorio Paradinight", "Franklin Bordeau"],
    color: "hsl(var(--aura-teal))",
    traits: ["Independent", "Quick-tempered", "Self-reliant", "Strong-willed"]
  },
  manipulator: {
    name: "Manipulator",
    description: "Your current aura analysis reveals strong manipulation tendencies. You excel at controlling situations through careful planning and strategic thinking. Your aura can influence others or objects, reflecting your logical and calculating nature. Remember that nen types are not fixed - they can change as you grow and evolve.",
    characters: ["Illumi Zoldyck", "Shalnark", "Shoot McMahon"],
    color: "hsl(var(--aura-purple))",
    traits: ["Logical", "Calculating", "Patient", "Strategic"]
  },
  transmuter: {
    name: "Transmuter",
    description: "Your current aura pattern shows strong transmutation characteristics. Your aura changes properties like a shapeshifter, reflecting your adaptable and unpredictable nature. You thrive on keeping others guessing and adapting to changing circumstances. Your nen type may continue to evolve as you face new challenges.",
    characters: ["Killua Zoldyck", "Hisoka", "Zeno Zoldyck"],
    color: "hsl(180 100% 50%)",
    traits: ["Whimsical", "Deceptive", "Changeable", "Unpredictable"]
  },
  conjurer: {
    name: "Conjurer",
    description: "Your current aura analysis indicates strong conjuration patterns. You create complex objects and systems with your aura, reflecting your methodical and detail-oriented approach. Your creations require intense focus and preparation, showing your perfectionist nature. Your nen type can develop further as you refine your abilities.",
    characters: ["Kurapika", "Kortopi", "Shizuku Murasaki"],
    color: "hsl(60 100% 50%)",
    traits: ["Serious", "Methodical", "Perfectionist", "Detail-oriented"]
  },
  specialist: {
    name: "Specialist",
    description: "Your current aura pattern is unique and defies standard classification. Your abilities don't fit into conventional categories, reflecting your individuality and mysterious nature. You have capabilities that challenge traditional understanding of nen. Your specialist abilities may continue to develop in unexpected ways.",
    characters: ["Neferpitou", "Chrollo Lucilfer", "Kite"],
    color: "hsl(var(--aura-pink))",
    traits: ["Unique", "Mysterious", "Individualistic", "Unpredictable"]
  }
}; 