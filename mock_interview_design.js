// Mock Interview Simulation Design

// Core Components
const mockInterviewSystem = {
  // Interview scenarios with varying difficulty levels
  scenarios: [
    {
      id: "entry_level",
      name: "First Round Interview",
      description: "Basic screening interview with fundamental questions about your background and interest in JP Morgan Global Markets.",
      duration: 20, // minutes
      questionCount: 8,
      interviewerStyle: "friendly",
      difficulty: "standard"
    },
    {
      id: "technical",
      name: "Technical Assessment",
      description: "Deep dive into your technical knowledge of markets, financial instruments, and quantitative concepts.",
      duration: 30,
      questionCount: 10,
      interviewerStyle: "analytical",
      difficulty: "hard"
    },
    {
      id: "superday",
      name: "Superday Simulation",
      description: "Comprehensive interview covering behavioral, technical, and fit questions similar to JP Morgan's final round.",
      duration: 45,
      questionCount: 15,
      interviewerStyle: "challenging",
      difficulty: "ninja"
    }
  ],
  
  // Virtual interviewers with different personalities and styles
  interviewers: [
    {
      id: "sarah",
      name: "Sarah Chen",
      title: "VP, Global Markets",
      style: "analytical",
      focus: "technical precision",
      avatar: "sarah_chen.jpg",
      feedbackStyle: "detailed"
    },
    {
      id: "michael",
      name: "Michael Rodriguez",
      title: "Executive Director, Sales & Trading",
      style: "challenging",
      focus: "stress testing",
      avatar: "michael_rodriguez.jpg",
      feedbackStyle: "direct"
    },
    {
      id: "jennifer",
      name: "Jennifer Park",
      title: "Associate, Global Markets",
      style: "friendly",
      focus: "cultural fit",
      avatar: "jennifer_park.jpg",
      feedbackStyle: "supportive"
    }
  ],
  
  // Feedback system for evaluating responses
  feedbackSystem: {
    criteria: [
      {
        name: "Content Accuracy",
        description: "Correctness of information and concepts presented",
        weight: 0.3
      },
      {
        name: "Structure",
        description: "Organization and logical flow of response",
        weight: 0.2
      },
      {
        name: "Conciseness",
        description: "Ability to be thorough yet efficient with time",
        weight: 0.15
      },
      {
        name: "Confidence",
        description: "Delivery style and perceived confidence",
        weight: 0.15
      },
      {
        name: "JP Morgan Alignment",
        description: "Alignment with JP Morgan's values and culture",
        weight: 0.2
      }
    ],
    
    // Feedback templates for different score ranges
    feedbackTemplates: {
      excellent: "Your response demonstrated {strength} which is exactly what JP Morgan looks for. Consider {improvement} to make it even stronger.",
      good: "You showed solid understanding with {strength}. To improve, focus on {improvement} which would elevate your answer.",
      average: "Your answer covered the basics with {strength}. To stand out, you should work on {improvement} which is important for this role.",
      needsWork: "You touched on {strength}, but your answer needs significant improvement in {improvement} to meet JP Morgan's standards."
    },
    
    // Improvement suggestions database
    improvementSuggestions: [
      "providing more specific examples from your experience",
      "connecting your answer more explicitly to JP Morgan's business",
      "demonstrating deeper market knowledge",
      "showing more structured thinking in your approach",
      "balancing technical details with big-picture understanding",
      "displaying more confidence in your delivery",
      "being more concise while maintaining thoroughness",
      "incorporating relevant market trends into your response"
    ]
  },
  
  // Interactive elements
  interactiveElements: {
    // Unexpected follow-up questions based on user responses
    followUpQuestions: true,
    
    // Interruptions to test thinking under pressure
    interviewerInterruptions: true,
    
    // Time pressure elements
    timePressure: {
      visible: true,
      warningAt: 0.3 // warning when 30% of time remains
    },
    
    // Reaction system to show interviewer's real-time reactions
    interviewerReactions: true
  }
};

// User Interface Components
const mockInterviewUI = {
  // Pre-interview preparation screen
  preparationScreen: {
    scenarioSelection: true,
    interviewerSelection: true,
    difficultyAdjustment: true,
    preparationTips: true,
    warmupQuestions: true
  },
  
  // Main interview interface
  interviewInterface: {
    videoFeed: true, // For interviewer avatar and reactions
    questionDisplay: true,
    responseRecording: true,
    timeRemaining: true,
    notepad: true // For user to take notes during interview
  },
  
  // Post-interview feedback screen
  feedbackScreen: {
    overallScore: true,
    criteriaBreakdown: true,
    strengthsAnalysis: true,
    improvementAreas: true,
    responsePlayback: true,
    comparisonToIdealAnswers: true,
    nextStepsRecommendation: true
  }
};

// Integration with existing question bank
const questionBankIntegration = {
  // Filter questions by category for different interview scenarios
  categoryFilters: [
    "behavioral",
    "technical",
    "fit",
    "markets",
    "brainteasers",
    "ethics"
  ],
  
  // Filter questions by difficulty
  difficultyFilters: [
    "standard",
    "hard",
    "ninja"
  ],
  
  // Dynamic question selection based on user performance
  adaptiveSelection: true,
  
  // Weighting system to ensure good question mix
  questionWeighting: {
    behavioral: 0.3,
    technical: 0.4,
    fit: 0.2,
    markets: 0.1
  }
};

// Technical Implementation
const technicalImplementation = {
  // Front-end components
  frontend: {
    framework: "JavaScript/HTML/CSS",
    responsiveDesign: true,
    accessibilityCompliant: true
  },
  
  // Data storage for interview sessions
  dataStorage: {
    saveInterviewSessions: true,
    exportResults: true,
    compareProgress: true
  },
  
  // Integration with other features
  featureIntegration: {
    performanceAnalytics: true,
    voiceRecording: true,
    marketDataDisplay: true
  }
};

// Export the design
export const mockInterviewDesign = {
  mockInterviewSystem,
  mockInterviewUI,
  questionBankIntegration,
  technicalImplementation
};
