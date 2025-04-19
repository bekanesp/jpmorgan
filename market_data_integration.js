// Market Data Integration for JP Morgan Interview Preparation Tool

// API Configuration for Financial Data Sources
const marketDataConfig = {
  // Primary data sources
  dataSources: {
    alphavantage: {
      baseUrl: "https://www.alphavantage.co/query",
      apiKey: "process.env.ALPHA_VANTAGE_API_KEY", // Will be replaced with actual key in production
      endpoints: {
        stockQuote: "GLOBAL_QUOTE",
        stockSearch: "SYMBOL_SEARCH",
        timeSeriesDaily: "TIME_SERIES_DAILY",
        forex: "CURRENCY_EXCHANGE_RATE",
        economicIndicators: "ECONOMIC_INDICATORS"
      },
      rateLimit: "5 calls per minute"
    },
    finnhub: {
      baseUrl: "https://finnhub.io/api/v1",
      apiKey: "process.env.FINNHUB_API_KEY",
      endpoints: {
        quote: "quote",
        companyNews: "company-news",
        marketNews: "news",
        companyProfile: "stock/profile2",
        financials: "stock/metric"
      },
      rateLimit: "60 calls per minute"
    },
    yahooFinance: {
      baseUrl: "https://yfapi.net",
      apiKey: "process.env.YAHOO_FINANCE_API_KEY",
      endpoints: {
        marketSummary: "v6/finance/quote/marketSummary",
        quote: "v6/finance/quote",
        chart: "v8/finance/chart"
      },
      rateLimit: "100 calls per day"
    }
  },
  
  // Data categories to integrate
  dataCategories: {
    equities: {
      majorIndices: ["S&P 500", "Dow Jones", "Nasdaq", "FTSE 100", "Nikkei 225"],
      sectorETFs: ["XLF", "XLK", "XLE", "XLV", "XLI", "XLP", "XLY", "XLU", "XLB", "XLRE"],
      jpMorganStock: ["JPM"],
      competitors: ["GS", "MS", "BAC", "C", "WFC"]
    },
    fixedIncome: {
      treasuryYields: ["2Y", "5Y", "10Y", "30Y"],
      creditSpreads: ["Investment Grade", "High Yield"],
      yieldCurve: true
    },
    forex: {
      majorPairs: ["EUR/USD", "USD/JPY", "GBP/USD", "USD/CHF", "USD/CAD", "AUD/USD", "NZD/USD"],
      emergingMarkets: ["USD/CNY", "USD/BRL", "USD/MXN", "USD/INR", "USD/ZAR"]
    },
    commodities: {
      energy: ["Crude Oil", "Natural Gas"],
      metals: ["Gold", "Silver", "Copper"],
      agriculture: ["Corn", "Wheat", "Soybeans"]
    },
    economicIndicators: {
      us: ["GDP", "Unemployment", "CPI", "PPI", "Retail Sales", "Housing Starts"],
      global: ["ECB Rate", "BOJ Rate", "BOE Rate", "China GDP", "EU GDP"]
    },
    volatilityMeasures: {
      vix: true,
      movingAverages: [20, 50, 200]
    }
  },
  
  // Update frequency settings
  updateFrequency: {
    realtime: ["equities.majorIndices", "equities.jpMorganStock", "forex.majorPairs", "volatilityMeasures.vix"],
    daily: ["equities.sectorETFs", "equities.competitors", "fixedIncome.treasuryYields", "commodities"],
    weekly: ["economicIndicators", "fixedIncome.creditSpreads", "fixedIncome.yieldCurve"]
  },
  
  // Data caching strategy
  cachingStrategy: {
    realtimeData: "5 minutes",
    dailyData: "24 hours",
    weeklyData: "7 days",
    historicalData: "30 days"
  }
};

// Integration with Technical Questions
const technicalQuestionIntegration = {
  // Question categories that will use market data
  relevantCategories: [
    "market knowledge",
    "trading strategies",
    "risk management",
    "economic analysis",
    "valuation methods",
    "financial instruments"
  ],
  
  // Data integration methods
  integrationMethods: {
    // Dynamically update questions with current market data
    dynamicQuestionUpdates: true,
    
    // Generate new questions based on market conditions
    marketConditionQuestions: true,
    
    // Provide real-world context for theoretical questions
    contextualExamples: true,
    
    // Create visualization-based questions
    dataVisualizationQuestions: true
  },
  
  // Example templates for market data integration
  questionTemplates: [
    {
      template: "Given that {asset} is currently trading at {price}, with a {timeframe} change of {change_pct}%, how would you evaluate its current valuation?",
      dataPoints: ["asset", "price", "timeframe", "change_pct"],
      category: "valuation methods"
    },
    {
      template: "The yield curve currently shows {curve_shape} with the 2Y at {2Y_yield}% and the 10Y at {10Y_yield}%. What economic outlook does this suggest?",
      dataPoints: ["curve_shape", "2Y_yield", "10Y_yield"],
      category: "economic analysis"
    },
    {
      template: "With {volatility_index} at {vix_level}, which trading strategies would you recommend for a client looking to {client_goal}?",
      dataPoints: ["volatility_index", "vix_level", "client_goal"],
      category: "trading strategies"
    },
    {
      template: "JP Morgan stock is currently trading at {jpm_price} with a P/E ratio of {jpm_pe}. How does this compare to competitors like Goldman Sachs at {gs_price} with a P/E of {gs_pe}?",
      dataPoints: ["jpm_price", "jpm_pe", "gs_price", "gs_pe"],
      category: "market knowledge"
    }
  ]
};

// User Interface Components
const marketDataUI = {
  // Dashboard elements
  dashboard: {
    marketSummary: true,
    keyIndicatorsPanel: true,
    jpMorganStockWidget: true,
    recentNewsHeadlines: true
  },
  
  // Data visualization components
  visualizations: {
    charts: ["line", "bar", "candlestick", "heatmap"],
    technicalIndicators: ["moving averages", "RSI", "MACD", "Bollinger Bands"],
    comparisonTools: true,
    historicalPerformance: true
  },
  
  // Integration with interview questions
  questionIntegration: {
    dataContextPanel: true,
    relevantChartDisplay: true,
    marketUpdateAlerts: true,
    dataExplorationTools: true
  },
  
  // Customization options
  customization: {
    favoriteAssets: true,
    watchlists: true,
    alertSettings: true,
    dataDisplayPreferences: true
  }
};

// Learning Resources
const marketDataLearningResources = {
  // Educational content on market data interpretation
  educationalContent: {
    marketIndicatorsGuide: true,
    technicalAnalysisBasics: true,
    fundamentalAnalysisOverview: true,
    economicIndicatorsExplained: true
  },
  
  // Practice exercises for data interpretation
  practiceExercises: {
    marketScenarioAnalysis: true,
    tradingDecisionSimulations: true,
    economicDataInterpretation: true,
    valuationExercises: true
  },
  
  // JP Morgan-specific market perspectives
  jpMorganInsights: {
    researchReportSummaries: true,
    analystPerspectives: true,
    marketOutlookHighlights: true
  }
};

// Technical Implementation
const marketDataImplementation = {
  // Data fetching and processing
  dataProcessing: {
    asyncDataFetching: true,
    errorHandling: true,
    dataTransformation: true,
    cacheManagement: true
  },
  
  // Security considerations
  security: {
    apiKeyProtection: true,
    dataEncryption: true,
    userPermissions: true
  },
  
  // Offline functionality
  offlineCapabilities: {
    cachedDataAccess: true,
    syncOnReconnect: true,
    offlineIndicators: true
  },
  
  // Performance optimization
  performance: {
    lazyLoading: true,
    dataCompression: true,
    efficientRenderingStrategies: true
  }
};

// Export the design
export const marketDataIntegration = {
  marketDataConfig,
  technicalQuestionIntegration,
  marketDataUI,
  marketDataLearningResources,
  marketDataImplementation
};
