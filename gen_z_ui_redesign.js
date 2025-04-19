// Gen Z-Focused UI Redesign for JP Morgan Interview Preparation Tool

// Core Design System Variables
const designSystem = {
  // Color palette with dark mode support
  colors: {
    // Primary brand colors
    primary: {
      light: '#0f6dff', // JP Morgan blue modernized
      dark: '#2a9fff'   // Brighter blue for dark mode
    },
    // Secondary accent colors (vibrant for Gen Z appeal)
    accent: {
      purple: '#8a2be2',
      teal: '#00d4b1',
      coral: '#ff6b6b',
      yellow: '#ffda44'
    },
    // Background colors with dark mode
    background: {
      light: '#ffffff',
      dark: '#121212',
      glass: 'rgba(255, 255, 255, 0.1)' // For glassmorphism effects
    },
    // Text colors with dark mode
    text: {
      light: {
        primary: '#212121',
        secondary: '#616161',
        tertiary: '#9e9e9e'
      },
      dark: {
        primary: '#f5f5f5',
        secondary: '#b0b0b0',
        tertiary: '#757575'
      }
    },
    // Status colors
    status: {
      success: '#4caf50',
      warning: '#ff9800',
      error: '#f44336',
      info: '#2196f3'
    }
  },
  
  // Typography system with variable fonts
  typography: {
    fontFamily: {
      primary: '"Inter var", -apple-system, BlinkMacSystemFont, sans-serif',
      secondary: '"Manrope var", -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"JetBrains Mono", monospace'
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem'
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  
  // Spacing system
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  },
  
  // Border radius for modern rounded corners
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px'
  },
  
  // Shadows for depth and elevation
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
    // Neomorphic shadows
    neomorph: {
      light: '10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff',
      dark: '10px 10px 20px #0d0d0d, -10px -10px 20px #171717'
    },
    // Glassmorphism
    glass: '0 8px 32px rgba(0, 0, 0, 0.1)'
  },
  
  // Animation timings
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    }
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  
  // Z-index scale
  zIndex: {
    base: 0,
    elevated: 10,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    toast: 1500
  }
};

// Component Library with Gen Z-focused design patterns
const componentLibrary = {
  // Button variants with micro-interactions
  button: {
    base: `
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: ${designSystem.typography.fontWeight.medium};
      border: none;
      cursor: pointer;
      transition: all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut};
      overflow: hidden;
      
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 10%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform 0.5s, opacity 1s;
      }
      
      &:active::after {
        transform: scale(0, 0);
        opacity: 0.3;
        transition: 0s;
      }
    `,
    primary: `
      background-color: var(--color-primary);
      color: white;
      padding: ${designSystem.spacing.md} ${designSystem.spacing.lg};
      border-radius: ${designSystem.borderRadius.md};
      box-shadow: ${designSystem.shadows.md};
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: ${designSystem.shadows.lg};
      }
      
      &:active {
        transform: translateY(0);
      }
    `,
    secondary: `
      background-color: transparent;
      color: var(--color-primary);
      padding: ${designSystem.spacing.md} ${designSystem.spacing.lg};
      border-radius: ${designSystem.borderRadius.md};
      border: 2px solid var(--color-primary);
      
      &:hover {
        background-color: rgba(var(--color-primary-rgb), 0.1);
      }
    `,
    tertiary: `
      background-color: transparent;
      color: var(--color-text-primary);
      padding: ${designSystem.spacing.sm} ${designSystem.spacing.md};
      
      &:hover {
        background-color: rgba(var(--color-text-primary-rgb), 0.05);
        border-radius: ${designSystem.borderRadius.md};
      }
    `,
    icon: `
      width: 2.5rem;
      height: 2.5rem;
      border-radius: ${designSystem.borderRadius.full};
      padding: 0;
      
      &:hover {
        background-color: rgba(var(--color-text-primary-rgb), 0.05);
      }
    `,
    // Floating action button for mobile
    fab: `
      position: fixed;
      bottom: ${designSystem.spacing.xl};
      right: ${designSystem.spacing.xl};
      width: 3.5rem;
      height: 3.5rem;
      border-radius: ${designSystem.borderRadius.full};
      background-color: var(--color-primary);
      color: white;
      box-shadow: ${designSystem.shadows.lg};
      z-index: ${designSystem.zIndex.fixed};
      
      &:hover {
        transform: translateY(-4px) scale(1.05);
        box-shadow: ${designSystem.shadows.xl};
      }
    `
  },
  
  // Card components with glassmorphism/neomorphism
  card: {
    base: `
      border-radius: ${designSystem.borderRadius.lg};
      padding: ${designSystem.spacing.lg};
      transition: all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut};
    `,
    standard: `
      background-color: var(--color-background);
      box-shadow: ${designSystem.shadows.md};
      
      &:hover {
        box-shadow: ${designSystem.shadows.lg};
        transform: translateY(-2px);
      }
    `,
    glass: `
      background: rgba(var(--color-background-rgb), 0.7);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(var(--color-text-tertiary-rgb), 0.1);
      box-shadow: ${designSystem.shadows.glass};
      
      &:hover {
        box-shadow: ${designSystem.shadows.xl};
        transform: translateY(-2px);
      }
    `,
    neomorph: `
      background-color: var(--color-background);
      box-shadow: var(--shadow-neomorph);
      
      &:hover {
        transform: scale(1.02);
      }
    `,
    interactive: `
      cursor: pointer;
      transition: all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut};
      
      &:hover {
        transform: translateY(-4px);
      }
      
      &:active {
        transform: translateY(-2px);
      }
    `
  },
  
  // Navigation components
  navigation: {
    // Bottom navigation for mobile
    bottomNav: `
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 4rem;
      background: rgba(var(--color-background-rgb), 0.8);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(var(--color-text-tertiary-rgb), 0.1);
      z-index: ${designSystem.zIndex.fixed};
    `,
    // Tab navigation
    tabs: `
      display: flex;
      border-bottom: 1px solid rgba(var(--color-text-tertiary-rgb), 0.2);
      margin-bottom: ${designSystem.spacing.lg};
      
      .tab {
        padding: ${designSystem.spacing.md} ${designSystem.spacing.lg};
        cursor: pointer;
        position: relative;
        color: var(--color-text-secondary);
        
        &.active {
          color: var(--color-primary);
          
          &::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 2px;
            background-color: var(--color-primary);
            border-radius: ${designSystem.borderRadius.full} ${designSystem.borderRadius.full} 0 0;
          }
        }
        
        &:hover:not(.active) {
          color: var(--color-text-primary);
        }
      }
    `,
    // Sidebar navigation
    sidebar: `
      width: 240px;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background-color: var(--color-background);
      border-right: 1px solid rgba(var(--color-text-tertiary-rgb), 0.1);
      padding: ${designSystem.spacing.lg};
      z-index: ${designSystem.zIndex.fixed};
      transition: transform ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut};
      
      @media (max-width: ${designSystem.breakpoints.lg}) {
        transform: translateX(-100%);
        
        &.open {
          transform: translateX(0);
        }
      }
    `
  },
  
  // Form elements
  form: {
    input: `
      width: 100%;
      padding: ${designSystem.spacing.md};
      border-radius: ${designSystem.borderRadius.md};
      border: 2px solid rgba(var(--color-text-tertiary-rgb), 0.2);
      background-color: var(--color-background);
      color: var(--color-text-primary);
      transition: all ${designSystem.animation.duration.fast} ${designSystem.animation.easing.easeInOut};
      
      &:focus {
        border-color: var(--color-primary);
        box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.2);
        outline: none;
      }
      
      &::placeholder {
        color: var(--color-text-tertiary);
      }
    `,
    checkbox: `
      position: relative;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: ${designSystem.borderRadius.sm};
      border: 2px solid rgba(var(--color-text-tertiary-rgb), 0.5);
      background-color: var(--color-background);
      transition: all ${designSystem.animation.duration.fast} ${designSystem.animation.easing.easeInOut};
      cursor: pointer;
      
      &:checked {
        background-color: var(--color-primary);
        border-color: var(--color-primary);
        
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0.75rem;
          height: 0.75rem;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    `,
    switch: `
      position: relative;
      display: inline-block;
      width: 3rem;
      height: 1.5rem;
      
      input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(var(--color-text-tertiary-rgb), 0.5);
        transition: ${designSystem.animation.duration.normal};
        border-radius: ${designSystem.borderRadius.full};
        
        &:before {
          position: absolute;
          content: "";
          height: 1.25rem;
          width: 1.25rem;
          left: 0.125rem;
          bottom: 0.125rem;
          background-color: white;
          transition: ${designSystem.animation.duration.normal};
          border-radius: 50%;
        }
      }
      
      input:checked + .slider {
        background-color: var(--color-primary);
      }
      
      input:checked + .slider:before {
        transform: translateX(1.5rem);
      }
    `
  },
  
  // Badge and achievement components
  badge: {
    base: `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: ${designSystem.spacing.xs} ${designSystem.spacing.sm};
      border-radius: ${designSystem.borderRadius.full};
      font-size: ${designSystem.typography.fontSize.xs};
      font-weight: ${designSystem.typography.fontWeight.medium};
    `,
    primary: `
      background-color: var(--color-primary);
      color: white;
    `,
    secondary: `
      background-color: rgba(var(--color-primary-rgb), 0.1);
      color: var(--color-primary);
    `,
    success: `
      background-color: var(--color-status-success);
      color: white;
    `,
    warning: `
      background-color: var(--color-status-warning);
      color: white;
    `,
    error: `
      background-color: var(--color-status-error);
      color: white;
    `,
    info: `
      background-color: var(--color-status-info);
      color: white;
    `,
    // Achievement badge with animation
    achievement: `
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border-radius: ${designSystem.borderRadius.full};
      background: linear-gradient(45deg, var(--color-accent-purple), var(--color-accent-teal));
      color: white;
      box-shadow: ${designSystem.shadows.md};
      
      &::before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        background: linear-gradient(45deg, var(--color-accent-purple), var(--color-accent-teal));
        border-radius: ${designSystem.borderRadius.full};
        z-index: -1;
        opacity: 0.5;
        animation: pulse 2s infinite;
      }
      
      @keyframes pulse {
        0% {
          transform: scale(1);
          opacity: 0.5;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.3;
        }
        100% {
          transform: scale(1);
          opacity: 0.5;
        }
      }
    `
  },
  
  // Progress indicators
  progress: {
    bar: `
      width: 100%;
      height: 0.5rem;
      background-color: rgba(var(--color-text-tertiary-rgb), 0.2);
      border-radius: ${designSystem.borderRadius.full};
      overflow: hidden;
      
      .fill {
        height: 100%;
        background-color: var(--color-primary);
        border-radius: ${designSystem.borderRadius.full};
        transition: width ${designSystem.animation.duration.slow} ${designSystem.animation.easing.easeInOut};
      }
    `,
    circle: `
      position: relative;
      width: 4rem;
      height: 4rem;
      
      svg {
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
        
        circle {
          fill: none;
          stroke-width: 8;
          stroke-linecap: round;
          
          &.bg {
            stroke: rgba(var(--color-text-tertiary-rgb), 0.2);
          }
          
          &.progress {
            stroke: var(--color-primary);
            stroke-dasharray: 283;
            stroke-dashoffset: calc(283 - (283 * var(--progress-value) / 100));
            transition: stroke-dashoffset ${designSystem.animation.duration.slow} ${designSystem.animation.easing.easeInOut};
          }
        }
      }
      
      .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: ${designSystem.typography.fontSize.sm};
        font-weight: ${designSystem.typography.fontWeight.bold};
        color: var(--color-text-primary);
      }
    `,
    steps: `
      display: flex;
      align-items: center;
      width: 100%;
      
      .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        
        .indicator {
          width: 2rem;
          height: 2rem;
          border-radius: ${designSystem.borderRadius.full};
          background-color: rgba(var(--color-text-tertiary-rgb), 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-secondary);
          font-weight: ${designSystem.typography.fontWeight.medium};
          margin-bottom: ${designSystem.spacing.sm};
          transition: all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut};
          
          &.active {
            background-color: var(--color-primary);
            color: white;
          }
          
          &.completed {
            background-color: var(--color-status-success);
            color: white;
          }
        }
        
        .label {
          font-size: ${designSystem.typography.fontSize.sm};
          color: var(--color-text-secondary);
          text-align: center;
        }
        
        &:not(:last-child)::after {
          content: '';
          height: 2px;
          width: 100%;
          background-color: rgba(var(--color-text-tertiary-rgb), 0.2);
          margin: 0 ${designSystem.spacing.sm};
        }
      }
    `
  },
  
  // Tooltip and popover
  tooltip: `
    position: relative;
    display: inline-block;
    
    .tooltip-content {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(-8px);
      padding: ${designSystem.spacing.sm} ${designSystem.spacing.md};
      background-color: var(--color-text-primary);
      color: var(--color-background);
      border-radius: ${designSystem.borderRadius.md};
      font-size: ${designSystem.typography.fontSize.xs};
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: all ${designSystem.animation.duration.fast} ${designSystem.animation.easing.easeInOut};
      z-index: ${designSystem.zIndex.tooltip};
      
      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 5px;
        border-style: solid;
        border-color: var(--color-text-primary) transparent transparent transparent;
      }
    }
    
    &:hover .tooltip-content {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  `,
  
  // Modal and dialog
  modal: `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${designSystem.zIndex.modal};
    
    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(4px);
      animation: fadeIn ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeOut};
    }
    
    .content {
      position: relative;
      background-color: var(--color-background);
      border-radius: ${designSystem.borderRadius.lg};
      padding: ${designSystem.spacing.xl};
      max-width: 90%;
      max-height: 90%;
      overflow-y: auto;
      box-shadow: ${designSystem.shadows.xl};
      animation: scaleIn ${designSystem.animation.duration.normal} ${designSystem.animation.easing.spring};
      
      @media (min-width: ${designSystem.breakpoints.md}) {
        max-width: 500px;
      }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes scaleIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `,
  
  // Toast notifications
  toast: `
    position: fixed;
    bottom: ${designSystem.spacing.xl};
    left: 50%;
    transform: translateX(-50%);
    padding: ${designSystem.spacing.md} ${designSystem.spacing.lg};
    background-color: var(--color-background);
    color: var(--color-text-primary);
    border-radius: ${designSystem.borderRadius.md};
    box-shadow: ${designSystem.shadows.lg};
    z-index: ${designSystem.zIndex.toast};
    animation: slideUp ${designSystem.animation.duration.normal} ${designSystem.animation.easing.spring};
    
    &.success {
      border-left: 4px solid var(--color-status-success);
    }
    
    &.error {
      border-left: 4px solid var(--color-status-error);
    }
    
    &.warning {
      border-left: 4px solid var(--color-status-warning);
    }
    
    &.info {
      border-left: 4px solid var(--color-status-info);
    }
    
    @keyframes slideUp {
      from { transform: translateX(-50%) translateY(100%); opacity: 0; }
      to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
  `,
  
  // Skeleton loading states
  skeleton: `
    background: linear-gradient(
      90deg,
      rgba(var(--color-text-tertiary-rgb), 0.1) 25%,
      rgba(var(--color-text-tertiary-rgb), 0.2) 50%,
      rgba(var(--color-text-tertiary-rgb), 0.1) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: ${designSystem.borderRadius.md};
    
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `
};

// Layout Templates for Key Screens
const layoutTemplates = {
  // Dashboard layout
  dashboard: `
    <div class="dashboard-layout">
      <header class="app-header">
        <div class="logo">JP Morgan Interview Prep</div>
        <div class="header-actions">
          <button class="theme-toggle" aria-label="Toggle dark mode">
            <svg><!-- Dark/Light mode icon --></svg>
          </button>
          <div class="user-menu">
            <img src="avatar.jpg" alt="User avatar" class="avatar" />
            <div class="user-info">
              <span class="user-name">Sam Kane</span>
              <span class="user-progress">Interview in 3 days</span>
            </div>
          </div>
        </div>
      </header>
      
      <div class="dashboard-content">
        <aside class="sidebar">
          <nav class="main-nav">
            <a href="#" class="nav-item active">
              <svg><!-- Dashboard icon --></svg>
              <span>Dashboard</span>
            </a>
            <a href="#" class="nav-item">
              <svg><!-- Practice icon --></svg>
              <span>Practice</span>
            </a>
            <a href="#" class="nav-item">
              <svg><!-- Mock Interview icon --></svg>
              <span>Mock Interviews</span>
            </a>
            <a href="#" class="nav-item">
              <svg><!-- Market Data icon --></svg>
              <span>Market Data</span>
            </a>
            <a href="#" class="nav-item">
              <svg><!-- Resources icon --></svg>
              <span>Resources</span>
            </a>
            <a href="#" class="nav-item">
              <svg><!-- Analytics icon --></svg>
              <span>Analytics</span>
            </a>
            <a href="#" class="nav-item">
              <svg><!-- Settings icon --></svg>
              <span>Settings</span>
            </a>
          </nav>
          
          <div class="sidebar-footer">
            <div class="progress-summary">
              <div class="progress-circle">
                <!-- SVG circle progress -->
                <div class="progress-text">78%</div>
              </div>
              <div class="progress-label">Overall Readiness</div>
            </div>
          </div>
        </aside>
        
        <main class="main-content">
          <section class="welcome-section">
            <div class="glass-card">
              <h1>Welcome back, Sam!</h1>
              <p>Your JP Morgan interview is in <strong>3 days</strong>. Let's make sure you're fully prepared.</p>
              <div class="action-buttons">
                <button class="primary-button">Continue Practice</button>
                <button class="secondary-button">Take Mock Interview</button>
              </div>
            </div>
          </section>
          
          <section class="stats-section">
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-icon"><!-- Questions icon --></div>
                <div class="stat-value">342</div>
                <div class="stat-label">Questions Practiced</div>
              </div>
              <div class="stat-card">
                <div class="stat-icon"><!-- Clock icon --></div>
                <div class="stat-value">18.5</div>
                <div class="stat-label">Hours Prepared</div>
              </div>
              <div class="stat-card">
                <div class="stat-icon"><!-- Star icon --></div>
                <div class="stat-value">85%</div>
                <div class="stat-label">Correct Answers</div>
              </div>
              <div class="stat-card">
                <div class="stat-icon"><!-- Trophy icon --></div>
                <div class="stat-value">12</div>
                <div class="stat-label">Achievements</div>
              </div>
            </div>
          </section>
          
          <section class="focus-areas-section">
            <h2>Recommended Focus Areas</h2>
            <div class="focus-cards">
              <div class="focus-card">
                <div class="focus-header">
                  <div class="focus-icon"><!-- Technical icon --></div>
                  <h3>Technical Knowledge</h3>
                </div>
                <div class="focus-progress">
                  <div class="progress-bar">
                    <div class="fill" style="width: 65%"></div>
                  </div>
                  <span class="progress-text">65%</span>
                </div>
                <p>Strengthen your understanding of market mechanics and financial instruments.</p>
                <button class="focus-button">Practice Now</button>
              </div>
              
              <div class="focus-card">
                <div class="focus-header">
                  <div class="focus-icon"><!-- Behavioral icon --></div>
                  <h3>Behavioral Questions</h3>
                </div>
                <div class="focus-progress">
                  <div class="progress-bar">
                    <div class="fill" style="width: 82%"></div>
                  </div>
                  <span class="progress-text">82%</span>
                </div>
                <p>Continue practicing your teamwork and leadership examples.</p>
                <button class="focus-button">Practice Now</button>
              </div>
            </div>
          </section>
          
          <section class="recent-activity-section">
            <div class="section-header">
              <h2>Recent Activity</h2>
              <a href="#" class="view-all">View All</a>
            </div>
            <div class="activity-timeline">
              <div class="activity-item">
                <div class="activity-icon"><!-- Practice icon --></div>
                <div class="activity-content">
                  <div class="activity-title">Completed Technical Practice Session</div>
                  <div class="activity-meta">2 hours ago • 25 questions • 80% correct</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon"><!-- Mock icon --></div>
                <div class="activity-content">
                  <div class="activity-title">Finished Mock Interview</div>
                  <div class="activity-meta">Yesterday • 45 minutes • 75% score</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon"><!-- Voice icon --></div>
                <div class="activity-content">
                  <div class="activity-title">Recorded Practice Responses</div>
                  <div class="activity-meta">2 days ago • 8 questions • Voice analysis complete</div>
                </div>
              </div>
            </div>
          </section>
          
          <section class="market-updates-section">
            <div class="section-header">
              <h2>Latest Market Updates</h2>
              <a href="#" class="view-all">View All</a>
            </div>
            <div class="market-cards">
              <div class="market-card">
                <div class="market-header">
                  <h3>S&P 500</h3>
                  <span class="market-change positive">+1.2%</span>
                </div>
                <div class="market-chart">
                  <!-- SVG chart -->
                </div>
                <div class="market-footer">
                  <span class="market-value">4,782.36</span>
                  <span class="market-time">Updated 15 min ago</span>
                </div>
              </div>
              
              <div class="market-card">
                <div class="market-header">
                  <h3>10-Year Treasury</h3>
                  <span class="market-change negative">-0.05%</span>
                </div>
                <div class="market-chart">
                  <!-- SVG chart -->
                </div>
                <div class="market-footer">
                  <span class="market-value">3.85%</span>
                  <span class="market-time">Updated 15 min ago</span>
                </div>
              </div>
              
              <div class="market-card">
                <div class="market-header">
                  <h3>EUR/USD</h3>
                  <span class="market-change positive">+0.3%</span>
                </div>
                <div class="market-chart">
                  <!-- SVG chart -->
                </div>
                <div class="market-footer">
                  <span class="market-value">1.0865</span>
                  <span class="market-time">Updated 15 min ago</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <nav class="mobile-nav">
        <a href="#" class="nav-item active">
          <svg><!-- Dashboard icon --></svg>
          <span>Home</span>
        </a>
        <a href="#" class="nav-item">
          <svg><!-- Practice icon --></svg>
          <span>Practice</span>
        </a>
        <a href="#" class="nav-item">
          <svg><!-- Mock icon --></svg>
          <span>Mock</span>
        </a>
        <a href="#" class="nav-item">
          <svg><!-- Data icon --></svg>
          <span>Data</span>
        </a>
        <a href="#" class="nav-item">
          <svg><!-- Profile icon --></svg>
          <span>Profile</span>
        </a>
      </nav>
    </div>
  `,
  
  // Practice questions screen
  practiceQuestions: `
    <div class="practice-layout">
      <header class="app-header">
        <button class="back-button" aria-label="Go back">
          <svg><!-- Back icon --></svg>
        </button>
        <h1>Practice Questions</h1>
        <div class="header-actions">
          <button class="theme-toggle" aria-label="Toggle dark mode">
            <svg><!-- Dark/Light mode icon --></svg>
          </button>
        </div>
      </header>
      
      <div class="practice-filters">
        <div class="filter-chips">
          <button class="filter-chip active">All</button>
          <button class="filter-chip">Behavioral</button>
          <button class="filter-chip">Technical</button>
          <button class="filter-chip">Markets</button>
          <button class="filter-chip">Fit</button>
          <button class="filter-chip">
            <svg><!-- Ninja icon --></svg>
            Interview Ninja
          </button>
        </div>
        
        <div class="difficulty-selector">
          <span>Difficulty:</span>
          <div class="difficulty-buttons">
            <button class="difficulty-button">Easy</button>
            <button class="difficulty-button active">Medium</button>
            <button class="difficulty-button">Hard</button>
            <button class="difficulty-button ninja">
              <svg><!-- Ninja icon --></svg>
              Ninja
            </button>
          </div>
        </div>
      </div>
      
      <main class="question-container">
        <div class="question-card">
          <div class="question-header">
            <div class="question-meta">
              <span class="question-category">Technical</span>
              <span class="question-difficulty">Medium</span>
            </div>
            <div class="question-actions">
              <button class="bookmark-button" aria-label="Bookmark question">
                <svg><!-- Bookmark icon --></svg>
              </button>
              <button class="share-button" aria-label="Share question">
                <svg><!-- Share icon --></svg>
              </button>
            </div>
          </div>
          
          <div class="question-content">
            <h2>Explain the difference between yield curve flattening and inversion, and what each might signal about the economy.</h2>
          </div>
          
          <div class="answer-section">
            <div class="answer-tabs">
              <button class="answer-tab active">Type Answer</button>
              <button class="answer-tab">Record Voice</button>
              <button class="answer-tab">View Sample</button>
            </div>
            
            <div class="answer-input-container">
              <textarea class="answer-input" placeholder="Type your answer here..."></textarea>
              
              <div class="answer-actions">
                <button class="secondary-button">Save Draft</button>
                <button class="primary-button">Submit Answer</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="question-navigation">
          <button class="nav-button prev" aria-label="Previous question">
            <svg><!-- Previous icon --></svg>
          </button>
          <div class="question-counter">Question 24 of 50</div>
          <button class="nav-button next" aria-label="Next question">
            <svg><!-- Next icon --></svg>
          </button>
        </div>
      </main>
      
      <aside class="practice-sidebar">
        <div class="session-info">
          <div class="session-timer">
            <svg><!-- Timer icon --></svg>
            <span>12:45</span>
          </div>
          <div class="session-progress">
            <div class="progress-bar">
              <div class="fill" style="width: 48%"></div>
            </div>
            <span>24/50 Questions</span>
          </div>
        </div>
        
        <div class="question-list">
          <h3>Questions</h3>
          <div class="question-grid">
            <button class="question-number completed">1</button>
            <button class="question-number completed">2</button>
            <button class="question-number completed">3</button>
            <!-- More question numbers -->
            <button class="question-number active">24</button>
            <!-- More question numbers -->
            <button class="question-number">50</button>
          </div>
        </div>
        
        <div class="performance-summary">
          <h3>Session Performance</h3>
          <div class="performance-stats">
            <div class="stat">
              <div class="stat-value">18</div>
              <div class="stat-label">Completed</div>
            </div>
            <div class="stat">
              <div class="stat-value">5</div>
              <div class="stat-label">Excellent</div>
            </div>
            <div class="stat">
              <div class="stat-value">10</div>
              <div class="stat-label">Good</div>
            </div>
            <div class="stat">
              <div class="stat-value">3</div>
              <div class="stat-label">Needs Work</div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  `,
  
  // Mock interview screen
  mockInterview: `
    <div class="mock-interview-layout">
      <div class="interview-environment">
        <div class="interviewer-section">
          <div class="interviewer-video">
            <!-- Video or animated avatar of interviewer -->
            <div class="interviewer-avatar">
              <img src="interviewer.jpg" alt="JP Morgan Interviewer" />
            </div>
          </div>
          
          <div class="interview-controls">
            <button class="control-button" aria-label="Mute">
              <svg><!-- Mute icon --></svg>
            </button>
            <button class="control-button" aria-label="Camera">
              <svg><!-- Camera icon --></svg>
            </button>
            <button class="control-button" aria-label="Settings">
              <svg><!-- Settings icon --></svg>
            </button>
            <button class="end-button" aria-label="End Interview">
              End Interview
            </button>
          </div>
        </div>
        
        <div class="interview-content">
          <div class="interview-header">
            <div class="interview-info">
              <h1>Mock Interview: Global Markets</h1>
              <div class="interview-meta">
                <span class="interviewer-name">Interviewer: Sarah Johnson</span>
                <span class="interview-time">Time: 15:32</span>
              </div>
            </div>
          </div>
          
          <div class="conversation-container">
            <div class="message interviewer">
              <div class="message-avatar">
                <img src="interviewer-small.jpg" alt="Interviewer" />
              </div>
              <div class="message-content">
                <div class="message-text">Hello Sam, thanks for joining today. I'd like to start by asking you to tell me about yourself and why you're interested in the Global Markets Summer Analyst role at JP Morgan.</div>
                <div class="message-time">15:01</div>
              </div>
            </div>
            
            <div class="message user">
              <div class="message-avatar">
                <img src="user-small.jpg" alt="You" />
              </div>
              <div class="message-content">
                <div class="message-text">Hi Sarah, thank you for taking the time to interview me today. I'm currently a junior at UVA studying Finance with a minor in Computer Science...</div>
                <div class="message-time">15:03</div>
              </div>
            </div>
            
            <div class="message interviewer">
              <div class="message-avatar">
                <img src="interviewer-small.jpg" alt="Interviewer" />
              </div>
              <div class="message-content">
                <div class="message-text">That's great background. Can you tell me about a time when you had to analyze data to make a decision?</div>
                <div class="message-time">15:05</div>
              </div>
            </div>
            
            <div class="current-question">
              <div class="question-indicator">Current Question</div>
              <div class="question-text">Can you walk me through how you would value a company using DCF analysis?</div>
              
              <div class="response-options">
                <button class="response-button text">
                  <svg><!-- Text icon --></svg>
                  Type Response
                </button>
                <button class="response-button voice active">
                  <svg><!-- Microphone icon --></svg>
                  Voice Response
                </button>
              </div>
              
              <div class="voice-recorder">
                <div class="recording-indicator">
                  <div class="recording-waves">
                    <!-- Animated recording waves -->
                  </div>
                  <span class="recording-time">0:22</span>
                </div>
                
                <div class="recorder-controls">
                  <button class="recorder-button" aria-label="Pause">
                    <svg><!-- Pause icon --></svg>
                  </button>
                  <button class="recorder-button stop" aria-label="Stop">
                    <svg><!-- Stop icon --></svg>
                  </button>
                  <button class="recorder-button" aria-label="Restart">
                    <svg><!-- Restart icon --></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="interview-sidebar">
          <div class="interview-tips">
            <h3>Interview Tips</h3>
            <ul class="tips-list">
              <li class="tip">Maintain eye contact with the camera</li>
              <li class="tip">Structure your answers using the STAR method</li>
              <li class="tip">Be concise but thorough in your responses</li>
              <li class="tip">Show enthusiasm for the role and company</li>
            </ul>
          </div>
          
          <div class="real-time-feedback">
            <h3>Real-time Feedback</h3>
            <div class="feedback-metrics">
              <div class="metric">
                <div class="metric-label">Clarity</div>
                <div class="metric-bar">
                  <div class="fill" style="width: 85%"></div>
                </div>
              </div>
              <div class="metric">
                <div class="metric-label">Confidence</div>
                <div class="metric-bar">
                  <div class="fill" style="width: 72%"></div>
                </div>
              </div>
              <div class="metric">
                <div class="metric-label">Technical Accuracy</div>
                <div class="metric-bar">
                  <div class="fill" style="width: 68%"></div>
                </div>
              </div>
              <div class="metric">
                <div class="metric-label">Engagement</div>
                <div class="metric-bar">
                  <div class="fill" style="width: 90%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="interview-notes">
            <h3>Your Notes</h3>
            <textarea class="notes-input" placeholder="Take notes during the interview..."></textarea>
          </div>
        </div>
      </div>
    </div>
  `,
  
  // Market data screen
  marketData: `
    <div class="market-data-layout">
      <header class="app-header">
        <button class="back-button" aria-label="Go back">
          <svg><!-- Back icon --></svg>
        </button>
        <h1>Market Data</h1>
        <div class="header-actions">
          <button class="refresh-button" aria-label="Refresh data">
            <svg><!-- Refresh icon --></svg>
          </button>
          <button class="theme-toggle" aria-label="Toggle dark mode">
            <svg><!-- Dark/Light mode icon --></svg>
          </button>
        </div>
      </header>
      
      <div class="market-dashboard">
        <div class="market-overview">
          <div class="market-header">
            <h2>Market Overview</h2>
            <div class="time-selector">
              <button class="time-button active">1D</button>
              <button class="time-button">1W</button>
              <button class="time-button">1M</button>
              <button class="time-button">3M</button>
              <button class="time-button">1Y</button>
              <button class="time-button">YTD</button>
            </div>
          </div>
          
          <div class="market-grid">
            <div class="market-card major">
              <div class="market-title">
                <h3>S&P 500</h3>
                <div class="market-change positive">
                  <span class="change-value">+1.2%</span>
                  <svg><!-- Up arrow --></svg>
                </div>
              </div>
              <div class="market-chart">
                <!-- Interactive SVG chart -->
              </div>
              <div class="market-details">
                <div class="detail">
                  <span class="detail-label">Value</span>
                  <span class="detail-value">4,782.36</span>
                </div>
                <div class="detail">
                  <span class="detail-label">Open</span>
                  <span class="detail-value">4,725.12</span>
                </div>
                <div class="detail">
                  <span class="detail-label">High</span>
                  <span class="detail-value">4,795.28</span>
                </div>
                <div class="detail">
                  <span class="detail-label">Low</span>
                  <span class="detail-value">4,720.05</span>
                </div>
              </div>
            </div>
            
            <div class="market-card">
              <div class="market-title">
                <h3>Dow Jones</h3>
                <div class="market-change positive">
                  <span class="change-value">+0.8%</span>
                  <svg><!-- Up arrow --></svg>
                </div>
              </div>
              <div class="market-chart">
                <!-- Interactive SVG chart -->
              </div>
            </div>
            
            <div class="market-card">
              <div class="market-title">
                <h3>Nasdaq</h3>
                <div class="market-change positive">
                  <span class="change-value">+1.5%</span>
                  <svg><!-- Up arrow --></svg>
                </div>
              </div>
              <div class="market-chart">
                <!-- Interactive SVG chart -->
              </div>
            </div>
            
            <div class="market-card">
              <div class="market-title">
                <h3>10-Year Treasury</h3>
                <div class="market-change negative">
                  <span class="change-value">-0.05%</span>
                  <svg><!-- Down arrow --></svg>
                </div>
              </div>
              <div class="market-chart">
                <!-- Interactive SVG chart -->
              </div>
            </div>
          </div>
        </div>
        
        <div class="market-sections">
          <div class="section-tabs">
            <button class="section-tab active">Equities</button>
            <button class="section-tab">Fixed Income</button>
            <button class="section-tab">Currencies</button>
            <button class="section-tab">Commodities</button>
            <button class="section-tab">Crypto</button>
          </div>
          
          <div class="section-content">
            <div class="section-header">
              <h2>Top Equities</h2>
              <div class="section-filters">
                <button class="filter-button active">Gainers</button>
                <button class="filter-button">Losers</button>
                <button class="filter-button">Volume</button>
              </div>
            </div>
            
            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>% Change</th>
                    <th>Volume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AAPL</td>
                    <td>Apple Inc.</td>
                    <td>182.63</td>
                    <td class="positive">+3.42</td>
                    <td class="positive">+1.91%</td>
                    <td>68.2M</td>
                  </tr>
                  <tr>
                    <td>MSFT</td>
                    <td>Microsoft Corp.</td>
                    <td>415.32</td>
                    <td class="positive">+7.85</td>
                    <td class="positive">+1.93%</td>
                    <td>22.5M</td>
                  </tr>
                  <tr>
                    <td>AMZN</td>
                    <td>Amazon.com Inc.</td>
                    <td>178.75</td>
                    <td class="positive">+2.63</td>
                    <td class="positive">+1.49%</td>
                    <td>35.1M</td>
                  </tr>
                  <tr>
                    <td>NVDA</td>
                    <td>NVIDIA Corp.</td>
                    <td>875.28</td>
                    <td class="positive">+25.42</td>
                    <td class="positive">+2.99%</td>
                    <td>42.7M</td>
                  </tr>
                  <tr>
                    <td>GOOGL</td>
                    <td>Alphabet Inc.</td>
                    <td>152.18</td>
                    <td class="positive">+1.85</td>
                    <td class="positive">+1.23%</td>
                    <td>18.9M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div class="market-news">
          <div class="news-header">
            <h2>Latest Market News</h2>
            <a href="#" class="view-all">View All</a>
          </div>
          
          <div class="news-cards">
            <div class="news-card">
              <div class="news-image">
                <img src="news1.jpg" alt="News image" />
              </div>
              <div class="news-content">
                <div class="news-meta">
                  <span class="news-source">Bloomberg</span>
                  <span class="news-time">2 hours ago</span>
                </div>
                <h3 class="news-title">Fed Signals Potential Rate Cut in September Meeting</h3>
                <p class="news-excerpt">Federal Reserve officials indicated they're getting closer to cutting interest rates...</p>
              </div>
            </div>
            
            <div class="news-card">
              <div class="news-image">
                <img src="news2.jpg" alt="News image" />
              </div>
              <div class="news-content">
                <div class="news-meta">
                  <span class="news-source">CNBC</span>
                  <span class="news-time">5 hours ago</span>
                </div>
                <h3 class="news-title">Tech Stocks Rally on Strong Earnings Reports</h3>
                <p class="news-excerpt">Technology shares led gains in the broader market as several major companies...</p>
              </div>
            </div>
            
            <div class="news-card">
              <div class="news-image">
                <img src="news3.jpg" alt="News image" />
              </div>
              <div class="news-content">
                <div class="news-meta">
                  <span class="news-source">Wall Street Journal</span>
                  <span class="news-time">Yesterday</span>
                </div>
                <h3 class="news-title">Oil Prices Stabilize After Middle East Tensions Ease</h3>
                <p class="news-excerpt">Crude oil futures steadied on Wednesday as diplomatic efforts...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  
  // Voice recording and analysis screen
  voiceRecording: `
    <div class="voice-recording-layout">
      <header class="app-header">
        <button class="back-button" aria-label="Go back">
          <svg><!-- Back icon --></svg>
        </button>
        <h1>Voice Practice</h1>
        <div class="header-actions">
          <button class="theme-toggle" aria-label="Toggle dark mode">
            <svg><!-- Dark/Light mode icon --></svg>
          </button>
        </div>
      </header>
      
      <div class="voice-practice-container">
        <div class="question-section">
          <div class="question-card glass">
            <div class="question-header">
              <div class="question-meta">
                <span class="question-category">Behavioral</span>
                <span class="question-difficulty">Medium</span>
              </div>
            </div>
            
            <div class="question-content">
              <h2>Tell me about a time when you had to work with a difficult team member. How did you handle the situation?</h2>
            </div>
            
            <div class="question-tips">
              <div class="tip-header">
                <svg><!-- Tip icon --></svg>
                <h3>Response Tips</h3>
              </div>
              <ul class="tips-list">
                <li>Use the STAR method (Situation, Task, Action, Result)</li>
                <li>Focus on your actions and problem-solving approach</li>
                <li>Highlight collaboration and communication skills</li>
                <li>Demonstrate emotional intelligence and empathy</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="recording-section">
          <div class="recording-card">
            <div class="recording-visualizer">
              <!-- Audio waveform visualization -->
              <div class="waveform-container">
                <canvas id="waveform"></canvas>
              </div>
              
              <div class="recording-timer">
                <span class="timer-value">00:00</span>
                <span class="timer-label">Recording Time</span>
              </div>
            </div>
            
            <div class="recording-controls">
              <button class="control-button" aria-label="Previous question">
                <svg><!-- Previous icon --></svg>
              </button>
              <button class="control-button record" aria-label="Start recording">
                <svg><!-- Record icon --></svg>
              </button>
              <button class="control-button" aria-label="Next question">
                <svg><!-- Next icon --></svg>
              </button>
            </div>
            
            <div class="recording-instructions">
              <p>Click the record button and speak your answer clearly. Try to maintain a steady pace and confident tone.</p>
            </div>
          </div>
          
          <div class="recordings-list">
            <h3>Your Recordings</h3>
            
            <div class="recording-items">
              <div class="recording-item">
                <div class="recording-info">
                  <div class="recording-name">Response 1</div>
                  <div class="recording-meta">
                    <span class="recording-duration">1:45</span>
                    <span class="recording-date">Today, 2:30 PM</span>
                  </div>
                </div>
                
                <div class="recording-actions">
                  <button class="action-button" aria-label="Play">
                    <svg><!-- Play icon --></svg>
                  </button>
                  <button class="action-button" aria-label="Delete">
                    <svg><!-- Delete icon --></svg>
                  </button>
                </div>
              </div>
              
              <div class="recording-item">
                <div class="recording-info">
                  <div class="recording-name">Response 2</div>
                  <div class="recording-meta">
                    <span class="recording-duration">2:12</span>
                    <span class="recording-date">Today, 3:15 PM</span>
                  </div>
                </div>
                
                <div class="recording-actions">
                  <button class="action-button" aria-label="Play">
                    <svg><!-- Play icon --></svg>
                  </button>
                  <button class="action-button" aria-label="Delete">
                    <svg><!-- Delete icon --></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="analysis-section">
          <div class="analysis-card">
            <h3>Voice Analysis</h3>
            
            <div class="analysis-metrics">
              <div class="metric">
                <div class="metric-header">
                  <span class="metric-name">Clarity</span>
                  <span class="metric-value">85%</span>
                </div>
                <div class="metric-bar">
                  <div class="fill" style="width: 85%"></div>
                </div>
                <div class="metric-feedback">Great articulation and pronunciation</div>
              </div>
              
              <div class="metric">
                <div class="metric-header">
                  <span class="metric-name">Pace</span>
                  <span class="metric-value">72%</span>
                </div>
                <div class="metric-bar">
                  <div class="fill" style="width: 72%"></div>
                </div>
                <div class="metric-feedback">Good pace, could slow down slightly at key points</div>
              </div>
              
              <div class="metric">
                <div class="metric-header">
                  <span class="metric-name">Confidence</span>
                  <span class="metric-value">78%</span>
                </div>
                <div class="metric-bar">
                  <div class="fill" style="width: 78%"></div>
                </div>
                <div class="metric-feedback">Strong tone, minimal filler words</div>
              </div>
              
              <div class="metric">
                <div class="metric-header">
                  <span class="metric-name">Structure</span>
                  <span class="metric-value">68%</span>
                </div>
                <div class="metric-bar">
                  <div class="fill" style="width: 68%"></div>
                </div>
                <div class="metric-feedback">Good STAR format, could strengthen conclusion</div>
              </div>
            </div>
            
            <div class="analysis-transcript">
              <h4>Transcript</h4>
              <div class="transcript-text">
                <p>"During my group project in my Financial Markets class, I worked with a team member who consistently missed deadlines and didn't communicate effectively. I recognized that this was affecting our team's progress, so I decided to address the situation directly but diplomatically.</p>
                <p>I scheduled a private conversation with them to understand if there were any underlying issues. They shared that they were struggling with other course commitments. Instead of just expressing frustration, I worked with them to create a more manageable timeline and offered to help with certain tasks.</p>
                <p>We also established clearer communication channels and check-in points. This approach helped them become more engaged, and they started meeting their deadlines. Our project ultimately received an A, and we maintained a positive working relationship."</p>
              </div>
            </div>
            
            <div class="analysis-feedback">
              <h4>Improvement Suggestions</h4>
              <ul class="feedback-list">
                <li>Add more specific details about how you helped with tasks</li>
                <li>Quantify the improvement in team performance after your intervention</li>
                <li>Mention what you learned from this experience</li>
                <li>Reduce filler words like "um" and "you know"</li>
              </ul>
            </div>
            
            <div class="comparison-section">
              <h4>Compare with Sample Answer</h4>
              <button class="comparison-button">
                <svg><!-- Compare icon --></svg>
                View Sample Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};

// Animation and Micro-interaction Library
const animationLibrary = {
  // Button interactions
  buttonInteractions: `
    .button {
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 10%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform 0.5s, opacity 1s;
      }
      
      &:active::after {
        transform: scale(0, 0);
        opacity: 0.3;
        transition: 0s;
      }
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 7px 14px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.08);
      }
      
      &:active {
        transform: translateY(0);
      }
    }
  `,
  
  // Card hover effects
  cardHoverEffects: `
    .card {
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 20px rgba(0,0,0,0.15);
      }
      
      &.interactive {
        cursor: pointer;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        &:hover::before {
          opacity: 1;
        }
      }
    }
  `,
  
  // Progress indicators
  progressIndicators: `
    .progress-bar {
      position: relative;
      overflow: hidden;
      
      .fill {
        transition: width 1s cubic-bezier(0.65, 0, 0.35, 1);
        
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.2) 50%,
            rgba(255,255,255,0) 100%
          );
          width: 50%;
          transform: translateX(-100%);
          animation: shimmer 2s infinite;
        }
      }
      
      @keyframes shimmer {
        100% {
          transform: translateX(200%);
        }
      }
    }
    
    .progress-circle {
      svg {
        transform: rotate(-90deg);
        
        circle.progress {
          transition: stroke-dashoffset 1s cubic-bezier(0.65, 0, 0.35, 1);
        }
      }
    }
  `,
  
  // Achievement unlocked animation
  achievementUnlocked: `
    @keyframes achievementUnlocked {
      0% {
        transform: scale(0.5);
        opacity: 0;
      }
      25% {
        transform: scale(1.2);
        opacity: 1;
      }
      50% {
        transform: scale(0.9);
      }
      75% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
    
    .achievement-badge.unlocked {
      animation: achievementUnlocked 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      
      &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border-radius: 50%;
        background: conic-gradient(
          from 0deg,
          var(--color-primary),
          var(--color-accent-purple),
          var(--color-accent-teal),
          var(--color-primary)
        );
        z-index: -1;
        animation: rotate 4s linear infinite;
      }
      
      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }
    }
  `,
  
  // Page transitions
  pageTransitions: `
    .page-transition-enter {
      opacity: 0;
      transform: translateY(20px);
    }
    
    .page-transition-enter-active {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .page-transition-exit {
      opacity: 1;
      transform: translateY(0);
    }
    
    .page-transition-exit-active {
      opacity: 0;
      transform: translateY(-20px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
  `,
  
  // Notification animations
  notificationAnimations: `
    @keyframes notificationSlideIn {
      0% {
        transform: translateX(100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes notificationSlideOut {
      0% {
        transform: translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateX(100%);
        opacity: 0;
      }
    }
    
    .notification {
      animation: notificationSlideIn 0.3s forwards, notificationSlideOut 0.3s forwards 3s;
      
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background-color: rgba(255,255,255,0.5);
        width: 100%;
        animation: notificationTimer 3s linear forwards;
      }
      
      @keyframes notificationTimer {
        0% {
          width: 100%;
        }
        100% {
          width: 0%;
        }
      }
    }
  `,
  
  // Loading states
  loadingStates: `
    .loading-spinner {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid rgba(var(--color-primary-rgb), 0.1);
      border-top-color: var(--color-primary);
      animation: spin 1s infinite linear;
      
      @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }
    }
    
    .loading-dots {
      display: flex;
      align-items: center;
      justify-content: center;
      
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--color-primary);
        margin: 0 4px;
        animation: dotPulse 1.5s infinite ease-in-out;
        
        &:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        &:nth-child(3) {
          animation-delay: 0.4s;
        }
      }
      
      @keyframes dotPulse {
        0%, 100% {
          transform: scale(0.5);
          opacity: 0.5;
        }
        50% {
          transform: scale(1);
          opacity: 1;
        }
      }
    }
    
    .skeleton-loader {
      background: linear-gradient(
        90deg,
        rgba(var(--color-text-tertiary-rgb), 0.1) 25%,
        rgba(var(--color-text-tertiary-rgb), 0.2) 50%,
        rgba(var(--color-text-tertiary-rgb), 0.1) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 4px;
      
      @keyframes shimmer {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
    }
  `,
  
  // Form interactions
  formInteractions: `
    .form-input {
      position: relative;
      
      input, textarea {
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
        
        &:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.2);
        }
      }
      
      label {
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
        transition: all 0.2s ease;
        pointer-events: none;
        color: var(--color-text-tertiary);
      }
      
      input:focus + label,
      input:not(:placeholder-shown) + label {
        top: 0;
        transform: translateY(-50%) scale(0.8);
        background-color: var(--color-background);
        padding: 0 4px;
      }
    }
    
    .checkbox {
      position: relative;
      
      input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        
        & + label {
          position: relative;
          padding-left: 28px;
          cursor: pointer;
          
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 18px;
            height: 18px;
            border: 2px solid rgba(var(--color-text-tertiary-rgb), 0.5);
            border-radius: 3px;
            transition: all 0.2s ease;
          }
        }
        
        &:checked + label::before {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
        }
        
        &:checked + label::after {
          content: '';
          position: absolute;
          left: 6px;
          top: 2px;
          width: 6px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          transition: all 0.2s ease;
        }
      }
    }
  `,
  
  // Scroll-triggered animations
  scrollAnimations: `
    .fade-in-up {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
      
      &.visible {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .fade-in {
      opacity: 0;
      transition: opacity 0.6s ease;
      
      &.visible {
        opacity: 1;
      }
    }
    
    .scale-in {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity 0.6s ease, transform 0.6s ease;
      
      &.visible {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .slide-in-left {
      opacity: 0;
      transform: translateX(-30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
      
      &.visible {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .slide-in-right {
      opacity: 0;
      transform: translateX(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
      
      &.visible {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,
  
  // Chart animations
  chartAnimations: `
    .chart-bar {
      transform: scaleY(0);
      transform-origin: bottom;
      animation: barGrow 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
      
      @keyframes barGrow {
        to {
          transform: scaleY(1);
        }
      }
    }
    
    .chart-line {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: drawLine 1.5s ease forwards;
      
      @keyframes drawLine {
        to {
          stroke-dashoffset: 0;
        }
      }
    }
    
    .chart-pie {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 0 100;
      animation: fillPie 1s ease-out forwards;
      
      @keyframes fillPie {
        to {
          stroke-dasharray: var(--percent) 100;
        }
      }
    }
  `,
  
  // Navigation interactions
  navigationInteractions: `
    .nav-item {
      position: relative;
      transition: color 0.3s ease;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--color-primary);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease;
      }
      
      &:hover::after,
      &.active::after {
        transform: scaleX(1);
        transform-origin: left;
      }
      
      &.active {
        color: var(--color-primary);
        font-weight: 500;
      }
    }
    
    .mobile-nav-item {
      transition: all 0.3s ease;
      
      &.active {
        color: var(--color-primary);
        transform: translateY(-5px);
        
        .icon {
          transform: scale(1.1);
        }
      }
    }
  `,
  
  // Theme toggle animation
  themeToggleAnimation: `
    .theme-toggle {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: transparent;
      border: none;
      cursor: pointer;
      
      .sun, .moon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
      }
      
      .sun {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
      
      .moon {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5);
      }
      
      &.dark-mode {
        .sun {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.5);
        }
        
        .moon {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
  `
};

// User Testing Protocol Design
const userTestingProtocol = {
  // Test objectives
  objectives: [
    "Evaluate the overall usability and intuitiveness of the redesigned interface",
    "Assess the effectiveness of Gen Z-focused design elements",
    "Measure user engagement with new interactive features",
    "Identify any usability issues or pain points",
    "Gather feedback on visual design, animations, and micro-interactions",
    "Evaluate the effectiveness of social and collaborative features",
    "Test the mobile experience and cross-device functionality"
  ],
  
  // Test methodology
  methodology: {
    approach: "Mixed-methods approach combining task-based testing, think-aloud protocol, and post-test interviews",
    participants: {
      count: 10,
      demographics: "Gen Z users (18-25 years old) with varying levels of familiarity with financial interviews",
      recruitment: "Recruited through university career centers and social media"
    },
    sessions: {
      format: "Remote moderated testing via video conferencing",
      duration: "60 minutes per participant",
      recording: "Screen and audio recording with participant consent"
    }
  },
  
  // Test tasks
  tasks: [
    {
      name: "Dashboard Navigation",
      description: "Navigate through the main dashboard and identify key features",
      success_criteria: "User can identify and access all main sections within 2 minutes"
    },
    {
      name: "Practice Question Session",
      description: "Start a practice session, answer 3 questions, and review feedback",
      success_criteria: "User can complete the flow without assistance and understand feedback"
    },
    {
      name: "Mock Interview Experience",
      description: "Participate in a 5-minute mock interview simulation",
      success_criteria: "User can navigate the interface and complete the interview"
    },
    {
      name: "Voice Recording and Analysis",
      description: "Record a response to a question and review the analysis",
      success_criteria: "User can successfully record and understand the feedback provided"
    },
    {
      name: "Market Data Exploration",
      description: "Find specific market information and interpret the data visualization",
      success_criteria: "User can locate requested information and explain what the data shows"
    },
    {
      name: "Mobile Experience",
      description: "Complete key tasks on a mobile device",
      success_criteria: "User can navigate and complete tasks efficiently on mobile"
    },
    {
      name: "Social Feature Interaction",
      description: "Share an achievement and find study group options",
      success_criteria: "User can successfully engage with social features"
    }
  ],
  
  // Evaluation metrics
  metrics: {
    quantitative: [
      "Task completion rate",
      "Time on task",
      "Error rate",
      "Navigation efficiency (clicks to completion)",
      "System Usability Scale (SUS) score",
      "Feature discovery rate"
    ],
    qualitative: [
      "Think-aloud observations",
      "Emotional responses",
      "Perceived usefulness",
      "Aesthetic appreciation",
      "Engagement level",
      "Feature preference ranking"
    ]
  },
  
  // Post-test interview questions
  interviewQuestions: [
    "How would you describe your overall experience with the interface?",
    "Which features did you find most engaging or helpful?",
    "Were there any elements that felt confusing or frustrating?",
    "How does this compare to other educational or preparation tools you've used?",
    "Did the design feel modern and appealing to you?",
    "How likely would you be to use this tool for interview preparation?",
    "What additional features would make this more valuable to you?",
    "Did the social and collaborative features appeal to you?",
    "How did the animations and interactive elements affect your experience?",
    "Would you recommend this tool to friends preparing for interviews?"
  ],
  
  // Analysis plan
  analysisApproach: {
    usabilityIssues: "Severity rating (1-4) based on impact and frequency",
    prioritization: "Issues categorized as critical, major, minor, or cosmetic",
    recommendations: "Actionable design recommendations for each identified issue",
    successMetrics: "Defined thresholds for task success and satisfaction scores"
  },
  
  // Reporting format
  reportingFormat: {
    executiveSummary: "High-level findings and recommendations",
    detailedFindings: "Comprehensive analysis of all test results",
    usabilityIssues: "Detailed description of identified issues with severity ratings",
    recommendations: "Specific design recommendations with mockups where appropriate",
    metrics: "Quantitative data visualization and analysis",
    videoHighlights: "Edited clips demonstrating key findings"
  }
};

// Export the design system
export {
  designSystem,
  componentLibrary,
  layoutTemplates,
  animationLibrary,
  userTestingProtocol
};
