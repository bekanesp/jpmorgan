// Modern Visual Design Elements for JP Morgan Interview Prep Tool
// Specifically designed for Gen Z aesthetic preferences

// Core Visual Design System
const visualDesignSystem = {
  // Color System with Dark Mode Focus
  colorSystem: {
    // Primary color palette - JP Morgan blue with modern variations
    primary: {
      50: '#E6F0FF',
      100: '#CCE0FF',
      200: '#99C2FF',
      300: '#66A3FF',
      400: '#3385FF',
      500: '#0066FF', // Primary brand color
      600: '#0052CC',
      700: '#003D99',
      800: '#002966',
      900: '#001433'
    },
    
    // Secondary color palette - Modern accent colors
    secondary: {
      50: '#FFF0E6',
      100: '#FFE0CC',
      200: '#FFC299',
      300: '#FFA366',
      400: '#FF8533',
      500: '#FF6600', // Secondary brand color
      600: '#CC5200',
      700: '#993D00',
      800: '#662900',
      900: '#331400'
    },
    
    // Neutral color palette - For dark mode focus
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
      950: '#0A0F1A'
    },
    
    // Success, warning, error states
    success: {
      light: '#ECFDF5',
      main: '#10B981',
      dark: '#065F46'
    },
    warning: {
      light: '#FFFBEB',
      main: '#F59E0B',
      dark: '#92400E'
    },
    error: {
      light: '#FEF2F2',
      main: '#EF4444',
      dark: '#991B1B'
    },
    
    // Dark mode specific colors
    darkMode: {
      background: {
        primary: '#0A0F1A',
        secondary: '#111827',
        tertiary: '#1F2937'
      },
      surface: {
        primary: '#1F2937',
        secondary: '#374151',
        elevated: '#4B5563'
      },
      text: {
        primary: '#F9FAFB',
        secondary: '#E5E7EB',
        tertiary: '#9CA3AF',
        disabled: '#6B7280'
      },
      border: {
        subtle: 'rgba(255, 255, 255, 0.1)',
        default: 'rgba(255, 255, 255, 0.15)',
        prominent: 'rgba(255, 255, 255, 0.25)'
      }
    },
    
    // Light mode specific colors (for toggle option)
    lightMode: {
      background: {
        primary: '#FFFFFF',
        secondary: '#F9FAFB',
        tertiary: '#F3F4F6'
      },
      surface: {
        primary: '#FFFFFF',
        secondary: '#F9FAFB',
        elevated: '#FFFFFF'
      },
      text: {
        primary: '#111827',
        secondary: '#374151',
        tertiary: '#6B7280',
        disabled: '#9CA3AF'
      },
      border: {
        subtle: 'rgba(0, 0, 0, 0.05)',
        default: 'rgba(0, 0, 0, 0.1)',
        prominent: 'rgba(0, 0, 0, 0.15)'
      }
    },
    
    // Gradient palettes for modern effects
    gradients: {
      primary: 'linear-gradient(135deg, #0066FF 0%, #00CCFF 100%)',
      secondary: 'linear-gradient(135deg, #FF6600 0%, #FF9900 100%)',
      dark: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
      glow: 'linear-gradient(135deg, rgba(0, 102, 255, 0.5) 0%, rgba(0, 204, 255, 0.5) 100%)',
      glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      success: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
      warning: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
      error: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)'
    }
  },
  
  // Typography System - Modern, clean, accessible
  typography: {
    // Font families
    fontFamily: {
      display: "'Clash Display', sans-serif", // Modern, geometric display font
      heading: "'Outfit', sans-serif", // Clean, contemporary sans-serif
      body: "'Inter', sans-serif", // Highly readable UI font
      mono: "'JetBrains Mono', monospace" // Modern monospace for code/technical content
    },
    
    // Font weights
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    
    // Font sizes with fluid typography
    fontSize: {
      xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', // 12-14px
      sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', // 14-16px
      base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', // 16-18px
      lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)', // 18-20px
      xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)', // 20-24px
      '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)', // 24-30px
      '3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)', // 30-36px
      '4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)', // 36-48px
      '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)' // 48-64px
    },
    
    // Line heights
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    },
    
    // Letter spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    
    // Text styles for consistent application
    textStyles: {
      displayLarge: {
        fontFamily: "'Clash Display', sans-serif",
        fontSize: 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.025em'
      },
      displayMedium: {
        fontFamily: "'Clash Display', sans-serif",
        fontSize: 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.025em'
      },
      displaySmall: {
        fontFamily: "'Clash Display', sans-serif",
        fontSize: 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)',
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '-0.025em'
      },
      headingLarge: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: '-0.025em'
      },
      headingMedium: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '-0.015em'
      },
      headingSmall: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '-0.01em'
      },
      bodyLarge: {
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: 'normal'
      },
      bodyMedium: {
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: 'normal'
      },
      bodySmall: {
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: 'normal'
      },
      caption: {
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: '0.025em'
      },
      button: {
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: '0.01em',
        textTransform: 'none'
      },
      overline: {
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: '0.05em',
        textTransform: 'uppercase'
      },
      code: {
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: 'normal'
      }
    }
  },
  
  // Spacing System - Consistent spacing scale
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem', // 2px
    1: '0.25rem',    // 4px
    1.5: '0.375rem', // 6px
    2: '0.5rem',     // 8px
    2.5: '0.625rem', // 10px
    3: '0.75rem',    // 12px
    3.5: '0.875rem', // 14px
    4: '1rem',       // 16px
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px
    7: '1.75rem',    // 28px
    8: '2rem',       // 32px
    9: '2.25rem',    // 36px
    10: '2.5rem',    // 40px
    11: '2.75rem',   // 44px
    12: '3rem',      // 48px
    14: '3.5rem',    // 56px
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem',      // 96px
    28: '7rem',      // 112px
    32: '8rem',      // 128px
    36: '9rem',      // 144px
    40: '10rem',     // 160px
    44: '11rem',     // 176px
    48: '12rem',     // 192px
    52: '13rem',     // 208px
    56: '14rem',     // 224px
    60: '15rem',     // 240px
    64: '16rem',     // 256px
    72: '18rem',     // 288px
    80: '20rem',     // 320px
    96: '24rem'      // 384px
  },
  
  // Border Radius - For modern, soft UI
  borderRadius: {
    none: '0',
    sm: '0.25rem',      // 4px
    md: '0.375rem',     // 6px
    lg: '0.5rem',       // 8px
    xl: '0.75rem',      // 12px
    '2xl': '1rem',      // 16px
    '3xl': '1.5rem',    // 24px
    '4xl': '2rem',      // 32px
    full: '9999px'
  },
  
  // Shadows - For depth and elevation
  shadows: {
    // Dark mode optimized shadows
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)',
    none: 'none',
    
    // Colored shadows for emphasis
    primary: '0 10px 15px -3px rgba(0, 102, 255, 0.3), 0 4px 6px -2px rgba(0, 102, 255, 0.1)',
    success: '0 10px 15px -3px rgba(16, 185, 129, 0.3), 0 4px 6px -2px rgba(16, 185, 129, 0.1)',
    warning: '0 10px 15px -3px rgba(245, 158, 11, 0.3), 0 4px 6px -2px rgba(245, 158, 11, 0.1)',
    error: '0 10px 15px -3px rgba(239, 68, 68, 0.3), 0 4px 6px -2px rgba(239, 68, 68, 0.1)',
    
    // Glow effects
    glow: {
      sm: '0 0 5px rgba(0, 102, 255, 0.5)',
      md: '0 0 15px rgba(0, 102, 255, 0.5)',
      lg: '0 0 30px rgba(0, 102, 255, 0.5)',
      primary: '0 0 20px rgba(0, 102, 255, 0.6)',
      success: '0 0 20px rgba(16, 185, 129, 0.6)',
      warning: '0 0 20px rgba(245, 158, 11, 0.6)',
      error: '0 0 20px rgba(239, 68, 68, 0.6)'
    }
  },
  
  // Z-index scale for consistent layering
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: 'auto'
  }
};

// Modern Visual Effects
const visualEffects = {
  // Glassmorphism effects
  glassmorphism: {
    // Create glassmorphism effect
    createGlassEffect: (opacity = 0.1, blur = 10, border = true) => {
      return {
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        borderRadius: visualDesignSystem.borderRadius.xl,
        border: border ? '1px solid rgba(255, 255, 255, 0.18)' : 'none',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      };
    },
    
    // Glass card component
    glassCard: {
      light: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: visualDesignSystem.borderRadius.xl,
        border: '1px solid rgba(255, 255, 255, 0.18)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      medium: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: visualDesignSystem.borderRadius.xl,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      heavy: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: visualDesignSystem.borderRadius.xl,
        border: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      colored: {
        backgroundColor: 'rgba(0, 102, 255, 0.15)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: visualDesignSystem.borderRadius.xl,
        border: '1px solid rgba(0, 102, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    
    // Glass navbar
    glassNavbar: {
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: visualDesignSystem.zIndex[50]
    },
    
    // Glass modal
    glassModal: {
      backgroundColor: 'rgba(31, 41, 55, 0.7)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderRadius: visualDesignSystem.borderRadius['2xl'],
      border: '1px solid rgba(255, 255, 255, 0.125)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
    }
  },
  
  // Neomorphism effects
  neomorphism: {
    // Create neomorphic effect
    createNeomorphEffect: (lightAngle = 145, darkAngle = 325, intensity = 0.15, distance = 10) => {
      const lightColor = `rgba(255, 255, 255, ${intensity})`;
      const darkColor = `rgba(0, 0, 0, ${intensity})`;
      
      return {
        borderRadius: visualDesignSystem.borderRadius.xl,
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
        boxShadow: `${distance}px ${distance}px ${distance * 2}px ${darkColor}, 
                   -${distance}px -${distance}px ${distance * 2}px ${lightColor}`,
        border: 'none'
      };
    },
    
    // Neomorphic button
    neomorphButton: {
      flat: {
        borderRadius: visualDesignSystem.borderRadius.lg,
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
        boxShadow: `5px 5px 10px rgba(0, 0, 0, 0.2), 
                   -5px -5px 10px rgba(255, 255, 255, 0.05)`,
        border: 'none',
        transition: 'all 0.2s ease'
      },
      pressed: {
        borderRadius: visualDesignSystem.borderRadius.lg,
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
        boxShadow: `inset 5px 5px 10px rgba(0, 0, 0, 0.2), 
                   inset -5px -5px 10px rgba(255, 255, 255, 0.05)`,
        border: 'none',
        transition: 'all 0.2s ease'
      }
    },
    
    // Neomorphic card
    neomorphCard: {
      borderRadius: visualDesignSystem.borderRadius.xl,
      backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
      boxShadow: `10px 10px 20px rgba(0, 0, 0, 0.2), 
                 -10px -10px 20px rgba(255, 255, 255, 0.05)`,
      border: 'none',
      padding: visualDesignSystem.spacing[6]
    },
    
    // Neomorphic input
    neomorphInput: {
      borderRadius: visualDesignSystem.borderRadius.lg,
      backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
      boxShadow: `inset 5px 5px 10px rgba(0, 0, 0, 0.2), 
                 inset -5px -5px 10px rgba(255, 255, 255, 0.05)`,
      border: 'none',
      padding: `${visualDesignSystem.spacing[3]} ${visualDesignSystem.spacing[4]}`
    }
  },
  
  // Gradient effects
  gradients: {
    // Create custom gradient
    createGradient: (colors, angle = 135) => {
      return `linear-gradient(${angle}deg, ${colors.join(', ')})`;
    },
    
    // Mesh gradients (modern, organic gradients)
    meshGradients: {
      blue: `radial-gradient(at 0% 0%, rgba(0, 102, 255, 0.5) 0px, transparent 50%),
             radial-gradient(at 100% 0%, rgba(0, 204, 255, 0.5) 0px, transparent 50%),
             radial-gradient(at 100% 100%, rgba(0, 102, 255, 0.3) 0px, transparent 50%),
             radial-gradient(at 0% 100%, rgba(0, 153, 255, 0.4) 0px, transparent 50%)`,
      
      orange: `radial-gradient(at 0% 0%, rgba(255, 102, 0, 0.5) 0px, transparent 50%),
               radial-gradient(at 100% 0%, rgba(255, 153, 0, 0.5) 0px, transparent 50%),
               radial-gradient(at 100% 100%, rgba(255, 102, 0, 0.3) 0px, transparent 50%),
               radial-gradient(at 0% 100%, rgba(255, 128, 0, 0.4) 0px, transparent 50%)`,
      
      mixed: `radial-gradient(at 0% 0%, rgba(0, 102, 255, 0.5) 0px, transparent 50%),
              radial-gradient(at 100% 0%, rgba(255, 102, 0, 0.5) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(0, 204, 255, 0.3) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(255, 153, 0, 0.4) 0px, transparent 50%)`
    },
    
    // Gradient text
    gradientText: {
      primary: {
        background: visualDesignSystem.colorSystem.gradients.primary,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent'
      },
      secondary: {
        background: visualDesignSystem.colorSystem.gradients.secondary,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent'
      }
    },
    
    // Gradient borders
    gradientBorder: {
      createBorder: (width = 2, gradient = visualDesignSystem.colorSystem.gradients.primary) => {
        return {
          position: 'relative',
          borderRadius: visualDesignSystem.borderRadius.xl,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            padding: `${width}px`,
            background: gradient,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none'
          }
        };
      }
    }
  },
  
  // Glow effects
  glowEffects: {
    // Create glow effect
    createGlowEffect: (color = 'rgba(0, 102, 255, 0.7)', intensity = 20) => {
      return {
        boxShadow: `0 0 ${intensity}px ${color}`
      };
    },
    
    // Pulsating glow
    pulsatingGlow: {
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      '@keyframes pulse': {
        '0%, 100%': {
          boxShadow: '0 0 10px rgba(0, 102, 255, 0.7)'
        },
        '50%': {
          boxShadow: '0 0 20px rgba(0, 102, 255, 0.9)'
        }
      }
    },
    
    // Text glow
    textGlow: {
      primary: {
        textShadow: '0 0 10px rgba(0, 102, 255, 0.7)'
      },
      secondary: {
        textShadow: '0 0 10px rgba(255, 102, 0, 0.7)'
      },
      success: {
        textShadow: '0 0 10px rgba(16, 185, 129, 0.7)'
      },
      warning: {
        textShadow: '0 0 10px rgba(245, 158, 11, 0.7)'
      },
      error: {
        textShadow: '0 0 10px rgba(239, 68, 68, 0.7)'
      }
    },
    
    // Button glow
    buttonGlow: {
      primary: {
        boxShadow: '0 0 15px rgba(0, 102, 255, 0.7)',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 0 25px rgba(0, 102, 255, 0.9)'
        }
      },
      secondary: {
        boxShadow: '0 0 15px rgba(255, 102, 0, 0.7)',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 0 25px rgba(255, 102, 0, 0.9)'
        }
      }
    }
  },
  
  // Blur effects
  blurEffects: {
    // Background blur
    backgroundBlur: {
      sm: {
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)'
      },
      md: {
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      },
      lg: {
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      },
      xl: {
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)'
      }
    },
    
    // Content blur (for loading states or modals)
    contentBlur: {
      filter: 'blur(8px)',
      transition: 'filter 0.3s ease'
    }
  }
};

// Micro-interactions and Animations
const animations = {
  // Timing functions
  timingFunctions: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smooth, natural movement
    in: 'cubic-bezier(0.4, 0, 1, 1)',        // Quick acceleration
    out: 'cubic-bezier(0, 0, 0.2, 1)',       // Gentle deceleration
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',   // Smooth acceleration and deceleration
    bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' // Bouncy effect
  },
  
  // Duration presets
  durations: {
    fastest: '100ms',
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
    slowest: '700ms'
  },
  
  // Transition presets
  transitions: {
    // All properties
    all: {
      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
    },
    
    // Specific properties
    transform: {
      transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)'
    },
    opacity: {
      transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)'
    },
    colors: {
      transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), border-color 300ms cubic-bezier(0.4, 0, 0.2, 1)'
    },
    shadow: {
      transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  
  // Keyframe animations
  keyframes: {
    // Fade animations
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
    fadeOut: {
      from: { opacity: 1 },
      to: { opacity: 0 }
    },
    
    // Slide animations
    slideInRight: {
      from: { transform: 'translateX(100%)' },
      to: { transform: 'translateX(0)' }
    },
    slideOutRight: {
      from: { transform: 'translateX(0)' },
      to: { transform: 'translateX(100%)' }
    },
    slideInLeft: {
      from: { transform: 'translateX(-100%)' },
      to: { transform: 'translateX(0)' }
    },
    slideOutLeft: {
      from: { transform: 'translateX(0)' },
      to: { transform: 'translateX(-100%)' }
    },
    slideInUp: {
      from: { transform: 'translateY(100%)' },
      to: { transform: 'translateY(0)' }
    },
    slideOutUp: {
      from: { transform: 'translateY(0)' },
      to: { transform: 'translateY(-100%)' }
    },
    slideInDown: {
      from: { transform: 'translateY(-100%)' },
      to: { transform: 'translateY(0)' }
    },
    slideOutDown: {
      from: { transform: 'translateY(0)' },
      to: { transform: 'translateY(100%)' }
    },
    
    // Scale animations
    scaleIn: {
      from: { transform: 'scale(0.9)', opacity: 0 },
      to: { transform: 'scale(1)', opacity: 1 }
    },
    scaleOut: {
      from: { transform: 'scale(1)', opacity: 1 },
      to: { transform: 'scale(0.9)', opacity: 0 }
    },
    
    // Pulse animation
    pulse: {
      '0%, 100%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.05)' }
    },
    
    // Bounce animation
    bounce: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' }
    },
    
    // Spin animation
    spin: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' }
    },
    
    // Shimmer animation (for loading states)
    shimmer: {
      '0%': { backgroundPosition: '-1000px 0' },
      '100%': { backgroundPosition: '1000px 0' }
    },
    
    // Typing animation
    typing: {
      from: { width: '0' },
      to: { width: '100%' }
    },
    
    // Blink animation (for cursor)
    blink: {
      '50%': { borderColor: 'transparent' }
    }
  },
  
  // Animation presets
  presets: {
    // Fade animations
    fadeIn: {
      animation: 'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    fadeOut: {
      animation: 'fadeOut 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    
    // Slide animations
    slideInRight: {
      animation: 'slideInRight 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    slideOutRight: {
      animation: 'slideOutRight 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    slideInLeft: {
      animation: 'slideInLeft 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    slideOutLeft: {
      animation: 'slideOutLeft 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    slideInUp: {
      animation: 'slideInUp 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    slideOutUp: {
      animation: 'slideOutUp 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    slideInDown: {
      animation: 'slideInDown 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    slideOutDown: {
      animation: 'slideOutDown 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    
    // Scale animations
    scaleIn: {
      animation: 'scaleIn 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    scaleOut: {
      animation: 'scaleOut 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    
    // Pulse animation
    pulse: {
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    },
    
    // Bounce animation
    bounce: {
      animation: 'bounce 1s ease infinite'
    },
    
    // Spin animation
    spin: {
      animation: 'spin 1s linear infinite'
    },
    
    // Shimmer animation (for loading states)
    shimmer: {
      backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
      backgroundSize: '1000px 100%',
      animation: 'shimmer 2s infinite'
    },
    
    // Typing animation
    typing: {
      overflow: 'hidden',
      borderRight: '0.15em solid',
      whiteSpace: 'nowrap',
      margin: '0 auto',
      animation: 'typing 3.5s steps(40, end), blink 0.75s step-end infinite'
    }
  },
  
  // Micro-interactions
  microInteractions: {
    // Button hover effect
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: visualDesignSystem.shadows.lg
    },
    
    // Button active effect
    buttonActive: {
      transform: 'translateY(1px)',
      boxShadow: visualDesignSystem.shadows.sm
    },
    
    // Card hover effect
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: visualDesignSystem.shadows.xl
    },
    
    // Input focus effect
    inputFocus: {
      boxShadow: `0 0 0 2px ${visualDesignSystem.colorSystem.primary[500]}`,
      borderColor: 'transparent'
    },
    
    // Link hover effect
    linkHover: {
      textDecoration: 'none',
      backgroundImage: `linear-gradient(transparent 0%, transparent calc(50% - 8px), ${visualDesignSystem.colorSystem.primary[500]} calc(50% - 8px), ${visualDesignSystem.colorSystem.primary[500]} calc(50% + 8px), transparent calc(50% + 8px), transparent 100%)`,
      transition: 'background-position 120ms ease-in-out, padding 120ms ease-in-out',
      backgroundSize: '100% 200%',
      backgroundPosition: '0 0',
      '&:hover': {
        backgroundPosition: '0 100%'
      }
    },
    
    // Checkbox animation
    checkboxAnimation: {
      '& svg': {
        transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        transform: 'scale(0)',
        opacity: 0
      },
      '&:checked svg': {
        transform: 'scale(1)',
        opacity: 1
      }
    },
    
    // Toggle switch animation
    toggleAnimation: {
      '& .toggle-thumb': {
        transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1), background-color 200ms cubic-bezier(0.4, 0, 0.2, 1)'
      },
      '&:checked .toggle-thumb': {
        transform: 'translateX(20px)',
        backgroundColor: visualDesignSystem.colorSystem.primary[500]
      },
      '& .toggle-track': {
        transition: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1)'
      },
      '&:checked .toggle-track': {
        backgroundColor: visualDesignSystem.colorSystem.primary[200]
      }
    },
    
    // Ripple effect
    rippleEffect: {
      position: 'relative',
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100px',
        height: '100px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '50%',
        transform: 'scale(0)',
        animation: 'ripple 600ms linear',
        opacity: 0
      },
      '@keyframes ripple': {
        '0%': {
          transform: 'scale(0)',
          opacity: 1
        },
        '100%': {
          transform: 'scale(4)',
          opacity: 0
        }
      }
    }
  }
};

// Modern UI Components
const uiComponents = {
  // Button styles
  buttons: {
    // Base button styles
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: visualDesignSystem.typography.fontFamily.body,
      fontWeight: visualDesignSystem.typography.fontWeight.medium,
      borderRadius: visualDesignSystem.borderRadius.lg,
      transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 0 2px ${visualDesignSystem.colorSystem.primary[500]}`
      },
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
      }
    },
    
    // Button sizes
    sizes: {
      xs: {
        fontSize: visualDesignSystem.typography.fontSize.xs,
        padding: `${visualDesignSystem.spacing[1]} ${visualDesignSystem.spacing[2]}`,
        height: visualDesignSystem.spacing[6]
      },
      sm: {
        fontSize: visualDesignSystem.typography.fontSize.sm,
        padding: `${visualDesignSystem.spacing[1.5]} ${visualDesignSystem.spacing[3]}`,
        height: visualDesignSystem.spacing[8]
      },
      md: {
        fontSize: visualDesignSystem.typography.fontSize.base,
        padding: `${visualDesignSystem.spacing[2]} ${visualDesignSystem.spacing[4]}`,
        height: visualDesignSystem.spacing[10]
      },
      lg: {
        fontSize: visualDesignSystem.typography.fontSize.lg,
        padding: `${visualDesignSystem.spacing[2.5]} ${visualDesignSystem.spacing[5]}`,
        height: visualDesignSystem.spacing[12]
      },
      xl: {
        fontSize: visualDesignSystem.typography.fontSize.xl,
        padding: `${visualDesignSystem.spacing[3]} ${visualDesignSystem.spacing[6]}`,
        height: visualDesignSystem.spacing[14]
      }
    },
    
    // Button variants
    variants: {
      // Solid buttons
      solid: {
        primary: {
          backgroundColor: visualDesignSystem.colorSystem.primary[500],
          color: '#FFFFFF',
          border: 'none',
          '&:hover': {
            backgroundColor: visualDesignSystem.colorSystem.primary[600],
            transform: 'translateY(-2px)',
            boxShadow: visualDesignSystem.shadows.md
          },
          '&:active': {
            backgroundColor: visualDesignSystem.colorSystem.primary[700],
            transform: 'translateY(1px)',
            boxShadow: visualDesignSystem.shadows.sm
          }
        },
        secondary: {
          backgroundColor: visualDesignSystem.colorSystem.secondary[500],
          color: '#FFFFFF',
          border: 'none',
          '&:hover': {
            backgroundColor: visualDesignSystem.colorSystem.secondary[600],
            transform: 'translateY(-2px)',
            boxShadow: visualDesignSystem.shadows.md
          },
          '&:active': {
            backgroundColor: visualDesignSystem.colorSystem.secondary[700],
            transform: 'translateY(1px)',
            boxShadow: visualDesignSystem.shadows.sm
          }
        },
        success: {
          backgroundColor: visualDesignSystem.colorSystem.success.main,
          color: '#FFFFFF',
          border: 'none',
          '&:hover': {
            backgroundColor: visualDesignSystem.colorSystem.success.dark,
            transform: 'translateY(-2px)',
            boxShadow: visualDesignSystem.shadows.md
          },
          '&:active': {
            transform: 'translateY(1px)',
            boxShadow: visualDesignSystem.shadows.sm
          }
        },
        warning: {
          backgroundColor: visualDesignSystem.colorSystem.warning.main,
          color: '#FFFFFF',
          border: 'none',
          '&:hover': {
            backgroundColor: visualDesignSystem.colorSystem.warning.dark,
            transform: 'translateY(-2px)',
            boxShadow: visualDesignSystem.shadows.md
          },
          '&:active': {
            transform: 'translateY(1px)',
            boxShadow: visualDesignSystem.shadows.sm
          }
        },
        error: {
          backgroundColor: visualDesignSystem.colorSystem.error.main,
          color: '#FFFFFF',
          border: 'none',
          '&:hover': {
            backgroundColor: visualDesignSystem.colorSystem.error.dark,
            transform: 'translateY(-2px)',
            boxShadow: visualDesignSystem.shadows.md
          },
          '&:active': {
            transform: 'translateY(1px)',
            boxShadow: visualDesignSystem.shadows.sm
          }
        },
        dark: {
          backgroundColor: visualDesignSystem.colorSystem.neutral[800],
          color: '#FFFFFF',
          border: 'none',
          '&:hover': {
            backgroundColor: visualDesignSystem.colorSystem.neutral[900],
            transform: 'translateY(-2px)',
            boxShadow: visualDesignSystem.shadows.md
          },
          '&:active': {
            transform: 'translateY(1px)',
            boxShadow: visualDesignSystem.shadows.sm
          }
        }
      },
      
      // Outline buttons
      outline: {
        primary: {
          backgroundColor: 'transparent',
          color: visualDesignSystem.colorSystem.primary[500],
          border: `2px solid ${visualDesignSystem.colorSystem.primary[500]}`,
          '&:hover': {
            backgroundColor: `rgba(${parseInt(visualDesignSystem.colorSystem.primary[500].slice(1, 3), 16)}, ${parseInt(visualDesignSystem.colorSystem.primary[500].slice(3, 5), 16)}, ${parseInt(visualDesignSystem.colorSystem.primary[500].slice(5, 7), 16)}, 0.1)`,
            transform: 'translateY(-2px)',
            boxShadow: visualDesignSystem.shadows.sm
          },
          '&:active': {
            backgroundColor: `rgba(${parseInt(visualDesignSystem.colorSystem.primary[500].slice(1, 3), 16)}, ${parseInt(visualDesignSystem.colorSystem.primary[500].slice(3, 5), 16)}, ${parseInt(visualDesignSystem.colorSystem.primary[500].slice(5, 7), 16)}, 0.2)`,
            transform: 'translateY(1px)'
          }
        },
        secondary: {
          backgroundColor: 'transparent',
          color: visualDesignSystem.colorSystem.secondary[500],
          border: `2px solid ${visualDesignSystem.colorSystem.secondary[500]}`,
          '&:hover': {
            backgroundColor: `rgba(${parseInt(visualDesignSystem.colorSystem.secondary[500].slice(1, 3), 16)}, ${parseInt(visualDesignSystem.colorSystem.secondary[500].slice(3, 5), 16)}, ${parseInt(visualDesignSystem.colorSystem.secondary[500].slice(5, 7), 16)}, 0.1)`,
            transform: 'translateY(-2px)',
            boxShadow: visualDesignSystem.shadows.sm
          },
          '&:active': {
            backgroundColor: `rgba(${parseInt(visualDesignSystem.colorSystem.secondary[500].slice(1, 3), 16)}, ${parseInt(visualDesignSystem.colorSystem.secondary[500].slice(3, 5), 16)}, ${parseInt(visualDesignSystem.colorSystem.secondary[500].slice(5, 7), 16)}, 0.2)`,
            transform: 'translateY(1px)'
          }
        }
      },
      
      // Ghost buttons
      ghost: {
        primary: {
          backgroundColor: 'transparent',
          color: visualDesignSystem.colorSystem.primary[500],
          border: 'none',
          '&:hover': {
            backgroundColor: `rgba(${parseInt(visualDesignSystem.colorSystem.primary[500].slice(1, 3), 16)}, ${parseInt(visualDesignSystem.colorSystem.primary[500].slice(3, 5), 16)}, ${parseInt(visualDesignSystem.colorSystem.primary[500].slice(5, 7), 16)}, 0.1)`
          },
          '&:active': {
            backgroundColor: `rgba(${parseInt(visualDesignSystem.colorSystem.primary[500].slice(1, 3), 16)}, ${parseInt(visualDesignSystem.colorSystem.primary[500].slice(3, 5), 16)}, ${parseInt(visualDesignSystem.colorSystem.primary[500].slice(5, 7), 16)}, 0.2)`
          }
        },
        secondary: {
          backgroundColor: 'transparent',
          color: visualDesignSystem.colorSystem.secondary[500],
          border: 'none',
          '&:hover': {
            backgroundColor: `rgba(${parseInt(visualDesignSystem.colorSystem.secondary[500].slice(1, 3), 16)}, ${parseInt(visualDesignSystem.colorSystem.secondary[500].slice(3, 5), 16)}, ${parseInt(visualDesignSystem.colorSystem.secondary[500].slice(5, 7), 16)}, 0.1)`
          },
          '&:active': {
            backgroundColor: `rgba(${parseInt(visualDesignSystem.colorSystem.secondary[500].slice(1, 3), 16)}, ${parseInt(visualDesignSystem.colorSystem.secondary[500].slice(3, 5), 16)}, ${parseInt(visualDesignSystem.colorSystem.secondary[500].slice(5, 7), 16)}, 0.2)`
          }
        }
      },
      
      // Gradient buttons
      gradient: {
        primary: {
          background: visualDesignSystem.colorSystem.gradients.primary,
          color: '#FFFFFF',
          border: 'none',
          '&:hover': {
            opacity: 0.9,
            transform: 'translateY(-2px)',
            boxShadow: visualDesignSystem.shadows.md
          },
          '&:active': {
            opacity: 1,
            transform: 'translateY(1px)',
            boxShadow: visualDesignSystem.shadows.sm
          }
        },
        secondary: {
          background: visualDesignSystem.colorSystem.gradients.secondary,
          color: '#FFFFFF',
          border: 'none',
          '&:hover': {
            opacity: 0.9,
            transform: 'translateY(-2px)',
            boxShadow: visualDesignSystem.shadows.md
          },
          '&:active': {
            opacity: 1,
            transform: 'translateY(1px)',
            boxShadow: visualDesignSystem.shadows.sm
          }
        }
      },
      
      // Glass buttons
      glass: {
        light: {
          ...visualEffects.glassmorphism.createGlassEffect(0.1, 10),
          color: visualDesignSystem.colorSystem.darkMode.text.primary,
          border: '1px solid rgba(255, 255, 255, 0.18)',
          '&:hover': {
            ...visualEffects.glassmorphism.createGlassEffect(0.15, 12),
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.4)'
          },
          '&:active': {
            transform: 'translateY(1px)',
            boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.3)'
          }
        },
        colored: {
          backgroundColor: 'rgba(0, 102, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: visualDesignSystem.colorSystem.darkMode.text.primary,
          borderRadius: visualDesignSystem.borderRadius.lg,
          border: '1px solid rgba(0, 102, 255, 0.3)',
          '&:hover': {
            backgroundColor: 'rgba(0, 102, 255, 0.25)',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 30px 0 rgba(0, 102, 255, 0.3)'
          },
          '&:active': {
            transform: 'translateY(1px)',
            boxShadow: '0 5px 15px 0 rgba(0, 102, 255, 0.2)'
          }
        }
      },
      
      // Neomorphic buttons
      neomorphic: {
        light: {
          ...visualEffects.neomorphism.neomorphButton.flat,
          color: visualDesignSystem.colorSystem.darkMode.text.primary,
          '&:active': {
            ...visualEffects.neomorphism.neomorphButton.pressed
          }
        },
        colored: {
          ...visualEffects.neomorphism.neomorphButton.flat,
          color: visualDesignSystem.colorSystem.primary[500],
          '&:active': {
            ...visualEffects.neomorphism.neomorphButton.pressed
          }
        }
      }
    },
    
    // Button with icon
    withIcon: {
      iconLeft: {
        '& svg': {
          marginRight: visualDesignSystem.spacing[2]
        }
      },
      iconRight: {
        '& svg': {
          marginLeft: visualDesignSystem.spacing[2]
        }
      },
      iconOnly: {
        padding: visualDesignSystem.spacing[2],
        borderRadius: visualDesignSystem.borderRadius.full
      }
    }
  },
  
  // Card styles
  cards: {
    // Base card styles
    base: {
      borderRadius: visualDesignSystem.borderRadius.xl,
      overflow: 'hidden',
      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
    },
    
    // Card variants
    variants: {
      // Solid cards
      solid: {
        primary: {
          backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
          color: visualDesignSystem.colorSystem.darkMode.text.primary,
          boxShadow: visualDesignSystem.shadows.md
        },
        secondary: {
          backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.secondary,
          color: visualDesignSystem.colorSystem.darkMode.text.primary,
          boxShadow: visualDesignSystem.shadows.md
        },
        elevated: {
          backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
          color: visualDesignSystem.colorSystem.darkMode.text.primary,
          boxShadow: visualDesignSystem.shadows.xl
        }
      },
      
      // Glass cards
      glass: {
        light: visualEffects.glassmorphism.glassCard.light,
        medium: visualEffects.glassmorphism.glassCard.medium,
        heavy: visualEffects.glassmorphism.glassCard.heavy,
        colored: visualEffects.glassmorphism.glassCard.colored
      },
      
      // Neomorphic cards
      neomorphic: {
        primary: visualEffects.neomorphism.neomorphCard
      },
      
      // Gradient border cards
      gradientBorder: {
        primary: {
          backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
          color: visualDesignSystem.colorSystem.darkMode.text.primary,
          boxShadow: visualDesignSystem.shadows.md,
          ...visualEffects.gradients.gradientBorder.createBorder(2, visualDesignSystem.colorSystem.gradients.primary)
        },
        secondary: {
          backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
          color: visualDesignSystem.colorSystem.darkMode.text.primary,
          boxShadow: visualDesignSystem.shadows.md,
          ...visualEffects.gradients.gradientBorder.createBorder(2, visualDesignSystem.colorSystem.gradients.secondary)
        }
      },
      
      // Glow cards
      glow: {
        primary: {
          backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
          color: visualDesignSystem.colorSystem.darkMode.text.primary,
          boxShadow: visualDesignSystem.shadows.glow.primary
        },
        secondary: {
          backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
          color: visualDesignSystem.colorSystem.darkMode.text.primary,
          boxShadow: visualDesignSystem.shadows.glow.secondary
        }
      }
    },
    
    // Card sizes
    sizes: {
      sm: {
        padding: visualDesignSystem.spacing[4]
      },
      md: {
        padding: visualDesignSystem.spacing[6]
      },
      lg: {
        padding: visualDesignSystem.spacing[8]
      }
    },
    
    // Card interactions
    interactions: {
      hover: {
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: visualDesignSystem.shadows.xl
        }
      },
      clickable: {
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: visualDesignSystem.shadows.xl
        },
        '&:active': {
          transform: 'translateY(-2px)',
          boxShadow: visualDesignSystem.shadows.lg
        }
      }
    }
  },
  
  // Input styles
  inputs: {
    // Base input styles
    base: {
      width: '100%',
      fontFamily: visualDesignSystem.typography.fontFamily.body,
      fontSize: visualDesignSystem.typography.fontSize.base,
      lineHeight: visualDesignSystem.typography.lineHeight.normal,
      color: visualDesignSystem.colorSystem.darkMode.text.primary,
      backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
      borderRadius: visualDesignSystem.borderRadius.lg,
      border: `1px solid ${visualDesignSystem.colorSystem.darkMode.border.default}`,
      transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      '&:focus': {
        outline: 'none',
        borderColor: visualDesignSystem.colorSystem.primary[500],
        boxShadow: `0 0 0 2px ${visualDesignSystem.colorSystem.primary[500]}30`
      },
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.secondary
      },
      '&::placeholder': {
        color: visualDesignSystem.colorSystem.darkMode.text.tertiary
      }
    },
    
    // Input sizes
    sizes: {
      sm: {
        height: visualDesignSystem.spacing[8],
        padding: `0 ${visualDesignSystem.spacing[3]}`,
        fontSize: visualDesignSystem.typography.fontSize.sm
      },
      md: {
        height: visualDesignSystem.spacing[10],
        padding: `0 ${visualDesignSystem.spacing[4]}`,
        fontSize: visualDesignSystem.typography.fontSize.base
      },
      lg: {
        height: visualDesignSystem.spacing[12],
        padding: `0 ${visualDesignSystem.spacing[5]}`,
        fontSize: visualDesignSystem.typography.fontSize.lg
      }
    },
    
    // Input variants
    variants: {
      // Outline inputs
      outline: {
        default: {
          backgroundColor: 'transparent',
          border: `1px solid ${visualDesignSystem.colorSystem.darkMode.border.default}`
        },
        primary: {
          backgroundColor: 'transparent',
          border: `1px solid ${visualDesignSystem.colorSystem.primary[500]}`
        }
      },
      
      // Filled inputs
      filled: {
        default: {
          backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.secondary,
          border: 'none'
        }
      },
      
      // Glass inputs
      glass: {
        default: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }
      },
      
      // Neomorphic inputs
      neomorphic: {
        default: visualEffects.neomorphism.neomorphInput
      }
    },
    
    // Input states
    states: {
      error: {
        borderColor: visualDesignSystem.colorSystem.error.main,
        '&:focus': {
          boxShadow: `0 0 0 2px ${visualDesignSystem.colorSystem.error.main}30`
        }
      },
      success: {
        borderColor: visualDesignSystem.colorSystem.success.main,
        '&:focus': {
          boxShadow: `0 0 0 2px ${visualDesignSystem.colorSystem.success.main}30`
        }
      }
    },
    
    // Input with icon
    withIcon: {
      iconLeft: {
        paddingLeft: visualDesignSystem.spacing[10],
        position: 'relative',
        '& svg': {
          position: 'absolute',
          left: visualDesignSystem.spacing[4],
          top: '50%',
          transform: 'translateY(-50%)',
          color: visualDesignSystem.colorSystem.darkMode.text.tertiary
        }
      },
      iconRight: {
        paddingRight: visualDesignSystem.spacing[10],
        position: 'relative',
        '& svg': {
          position: 'absolute',
          right: visualDesignSystem.spacing[4],
          top: '50%',
          transform: 'translateY(-50%)',
          color: visualDesignSystem.colorSystem.darkMode.text.tertiary
        }
      }
    }
  },
  
  // Badge styles
  badges: {
    // Base badge styles
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: visualDesignSystem.typography.fontFamily.body,
      fontWeight: visualDesignSystem.typography.fontWeight.medium,
      fontSize: visualDesignSystem.typography.fontSize.xs,
      lineHeight: 1,
      borderRadius: visualDesignSystem.borderRadius.full,
      padding: `${visualDesignSystem.spacing[1]} ${visualDesignSystem.spacing[2]}`
    },
    
    // Badge variants
    variants: {
      // Solid badges
      solid: {
        primary: {
          backgroundColor: visualDesignSystem.colorSystem.primary[500],
          color: '#FFFFFF'
        },
        secondary: {
          backgroundColor: visualDesignSystem.colorSystem.secondary[500],
          color: '#FFFFFF'
        },
        success: {
          backgroundColor: visualDesignSystem.colorSystem.success.main,
          color: '#FFFFFF'
        },
        warning: {
          backgroundColor: visualDesignSystem.colorSystem.warning.main,
          color: '#FFFFFF'
        },
        error: {
          backgroundColor: visualDesignSystem.colorSystem.error.main,
          color: '#FFFFFF'
        },
        dark: {
          backgroundColor: visualDesignSystem.colorSystem.neutral[800],
          color: '#FFFFFF'
        }
      },
      
      // Outline badges
      outline: {
        primary: {
          backgroundColor: 'transparent',
          color: visualDesignSystem.colorSystem.primary[500],
          border: `1px solid ${visualDesignSystem.colorSystem.primary[500]}`
        },
        secondary: {
          backgroundColor: 'transparent',
          color: visualDesignSystem.colorSystem.secondary[500],
          border: `1px solid ${visualDesignSystem.colorSystem.secondary[500]}`
        }
      },
      
      // Subtle badges
      subtle: {
        primary: {
          backgroundColor: `${visualDesignSystem.colorSystem.primary[500]}20`,
          color: visualDesignSystem.colorSystem.primary[500]
        },
        secondary: {
          backgroundColor: `${visualDesignSystem.colorSystem.secondary[500]}20`,
          color: visualDesignSystem.colorSystem.secondary[500]
        },
        success: {
          backgroundColor: `${visualDesignSystem.colorSystem.success.main}20`,
          color: visualDesignSystem.colorSystem.success.main
        },
        warning: {
          backgroundColor: `${visualDesignSystem.colorSystem.warning.main}20`,
          color: visualDesignSystem.colorSystem.warning.main
        },
        error: {
          backgroundColor: `${visualDesignSystem.colorSystem.error.main}20`,
          color: visualDesignSystem.colorSystem.error.main
        }
      },
      
      // Gradient badges
      gradient: {
        primary: {
          background: visualDesignSystem.colorSystem.gradients.primary,
          color: '#FFFFFF'
        },
        secondary: {
          background: visualDesignSystem.colorSystem.gradients.secondary,
          color: '#FFFFFF'
        }
      },
      
      // Glass badges
      glass: {
        default: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: visualDesignSystem.colorSystem.darkMode.text.primary,
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }
      }
    },
    
    // Badge sizes
    sizes: {
      sm: {
        fontSize: '0.65rem',
        padding: `${visualDesignSystem.spacing[0.5]} ${visualDesignSystem.spacing[1.5]}`
      },
      md: {
        fontSize: visualDesignSystem.typography.fontSize.xs,
        padding: `${visualDesignSystem.spacing[1]} ${visualDesignSystem.spacing[2]}`
      },
      lg: {
        fontSize: visualDesignSystem.typography.fontSize.sm,
        padding: `${visualDesignSystem.spacing[1.5]} ${visualDesignSystem.spacing[3]}`
      }
    },
    
    // Badge with icon
    withIcon: {
      iconLeft: {
        '& svg': {
          marginRight: visualDesignSystem.spacing[1],
          width: '0.875em',
          height: '0.875em'
        }
      },
      iconRight: {
        '& svg': {
          marginLeft: visualDesignSystem.spacing[1],
          width: '0.875em',
          height: '0.875em'
        }
      }
    },
    
    // Animated badges
    animated: {
      pulse: {
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      bounce: {
        animation: 'bounce 1s ease infinite'
      }
    }
  },
  
  // Toggle styles
  toggles: {
    // Switch toggle
    switch: {
      base: {
        position: 'relative',
        display: 'inline-block',
        width: '44px',
        height: '24px',
        '& input': {
          opacity: 0,
          width: 0,
          height: 0
        }
      },
      track: {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.secondary,
        transition: '0.4s',
        borderRadius: '34px',
        '&:before': {
          position: 'absolute',
          content: '""',
          height: '20px',
          width: '20px',
          left: '2px',
          bottom: '2px',
          backgroundColor: visualDesignSystem.colorSystem.darkMode.text.primary,
          transition: '0.4s',
          borderRadius: '50%'
        }
      },
      checked: {
        backgroundColor: visualDesignSystem.colorSystem.primary[500],
        '&:before': {
          transform: 'translateX(20px)'
        }
      },
      disabled: {
        opacity: 0.6,
        cursor: 'not-allowed'
      }
    },
    
    // Checkbox toggle
    checkbox: {
      base: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        '& input': {
          position: 'absolute',
          opacity: 0,
          width: 0,
          height: 0
        }
      },
      box: {
        position: 'relative',
        width: '20px',
        height: '20px',
        backgroundColor: 'transparent',
        border: `2px solid ${visualDesignSystem.colorSystem.darkMode.border.default}`,
        borderRadius: visualDesignSystem.borderRadius.md,
        transition: 'all 0.2s ease',
        '&:after': {
          content: '""',
          position: 'absolute',
          display: 'none',
          left: '6px',
          top: '2px',
          width: '5px',
          height: '10px',
          border: `solid ${visualDesignSystem.colorSystem.darkMode.text.primary}`,
          borderWidth: '0 2px 2px 0',
          transform: 'rotate(45deg)'
        }
      },
      checked: {
        backgroundColor: visualDesignSystem.colorSystem.primary[500],
        borderColor: visualDesignSystem.colorSystem.primary[500],
        '&:after': {
          display: 'block'
        }
      },
      disabled: {
        opacity: 0.6,
        cursor: 'not-allowed'
      }
    },
    
    // Radio toggle
    radio: {
      base: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        '& input': {
          position: 'absolute',
          opacity: 0,
          width: 0,
          height: 0
        }
      },
      circle: {
        position: 'relative',
        width: '20px',
        height: '20px',
        backgroundColor: 'transparent',
        border: `2px solid ${visualDesignSystem.colorSystem.darkMode.border.default}`,
        borderRadius: '50%',
        transition: 'all 0.2s ease',
        '&:after': {
          content: '""',
          position: 'absolute',
          display: 'none',
          top: '4px',
          left: '4px',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: visualDesignSystem.colorSystem.darkMode.text.primary
        }
      },
      checked: {
        backgroundColor: visualDesignSystem.colorSystem.primary[500],
        borderColor: visualDesignSystem.colorSystem.primary[500],
        '&:after': {
          display: 'block'
        }
      },
      disabled: {
        opacity: 0.6,
        cursor: 'not-allowed'
      }
    }
  },
  
  // Avatar styles
  avatars: {
    // Base avatar styles
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      overflow: 'hidden',
      backgroundColor: visualDesignSystem.colorSystem.primary[500]
    },
    
    // Avatar sizes
    sizes: {
      xs: {
        width: visualDesignSystem.spacing[6],
        height: visualDesignSystem.spacing[6],
        fontSize: visualDesignSystem.typography.fontSize.xs
      },
      sm: {
        width: visualDesignSystem.spacing[8],
        height: visualDesignSystem.spacing[8],
        fontSize: visualDesignSystem.typography.fontSize.sm
      },
      md: {
        width: visualDesignSystem.spacing[10],
        height: visualDesignSystem.spacing[10],
        fontSize: visualDesignSystem.typography.fontSize.base
      },
      lg: {
        width: visualDesignSystem.spacing[12],
        height: visualDesignSystem.spacing[12],
        fontSize: visualDesignSystem.typography.fontSize.lg
      },
      xl: {
        width: visualDesignSystem.spacing[16],
        height: visualDesignSystem.spacing[16],
        fontSize: visualDesignSystem.typography.fontSize.xl
      }
    },
    
    // Avatar variants
    variants: {
      // Image avatar
      image: {
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }
      },
      
      // Initial avatar
      initial: {
        color: '#FFFFFF',
        fontWeight: visualDesignSystem.typography.fontWeight.medium
      },
      
      // Icon avatar
      icon: {
        '& svg': {
          width: '60%',
          height: '60%',
          color: '#FFFFFF'
        }
      }
    },
    
    // Avatar with border
    withBorder: {
      border: `2px solid ${visualDesignSystem.colorSystem.darkMode.surface.primary}`
    },
    
    // Avatar with status
    withStatus: {
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: '25%',
        height: '25%',
        borderRadius: '50%',
        border: `2px solid ${visualDesignSystem.colorSystem.darkMode.surface.primary}`
      },
      '&.status-online::after': {
        backgroundColor: visualDesignSystem.colorSystem.success.main
      },
      '&.status-away::after': {
        backgroundColor: visualDesignSystem.colorSystem.warning.main
      },
      '&.status-busy::after': {
        backgroundColor: visualDesignSystem.colorSystem.error.main
      },
      '&.status-offline::after': {
        backgroundColor: visualDesignSystem.colorSystem.neutral[400]
      }
    },
    
    // Avatar group
    group: {
      display: 'flex',
      '& > *': {
        marginRight: '-8px',
        border: `2px solid ${visualDesignSystem.colorSystem.darkMode.surface.primary}`
      },
      '& > *:last-child': {
        marginRight: 0
      }
    }
  },
  
  // Progress indicators
  progress: {
    // Linear progress
    linear: {
      base: {
        width: '100%',
        height: '8px',
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.secondary,
        borderRadius: visualDesignSystem.borderRadius.full,
        overflow: 'hidden'
      },
      bar: {
        height: '100%',
        borderRadius: visualDesignSystem.borderRadius.full,
        transition: 'width 0.3s ease'
      },
      variants: {
        primary: {
          backgroundColor: visualDesignSystem.colorSystem.primary[500]
        },
        secondary: {
          backgroundColor: visualDesignSystem.colorSystem.secondary[500]
        },
        success: {
          backgroundColor: visualDesignSystem.colorSystem.success.main
        },
        warning: {
          backgroundColor: visualDesignSystem.colorSystem.warning.main
        },
        error: {
          backgroundColor: visualDesignSystem.colorSystem.error.main
        },
        gradient: {
          background: visualDesignSystem.colorSystem.gradients.primary
        }
      },
      sizes: {
        xs: { height: '4px' },
        sm: { height: '6px' },
        md: { height: '8px' },
        lg: { height: '10px' },
        xl: { height: '12px' }
      },
      animated: {
        indeterminate: {
          '& .progress-bar': {
            width: '50%',
            animation: 'indeterminate 1.5s infinite linear',
            transformOrigin: '0% 50%'
          },
          '@keyframes indeterminate': {
            '0%': {
              transform: 'translateX(-100%)'
            },
            '100%': {
              transform: 'translateX(200%)'
            }
          }
        }
      }
    },
    
    // Circular progress
    circular: {
      base: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      svg: {
        transform: 'rotate(-90deg)'
      },
      track: {
        fill: 'transparent',
        stroke: visualDesignSystem.colorSystem.darkMode.surface.secondary,
        strokeWidth: '4'
      },
      indicator: {
        fill: 'transparent',
        strokeLinecap: 'round',
        transition: 'stroke-dashoffset 0.3s ease'
      },
      variants: {
        primary: {
          stroke: visualDesignSystem.colorSystem.primary[500]
        },
        secondary: {
          stroke: visualDesignSystem.colorSystem.secondary[500]
        },
        success: {
          stroke: visualDesignSystem.colorSystem.success.main
        },
        warning: {
          stroke: visualDesignSystem.colorSystem.warning.main
        },
        error: {
          stroke: visualDesignSystem.colorSystem.error.main
        }
      },
      sizes: {
        sm: { width: '24px', height: '24px', strokeWidth: '3' },
        md: { width: '36px', height: '36px', strokeWidth: '4' },
        lg: { width: '48px', height: '48px', strokeWidth: '5' },
        xl: { width: '64px', height: '64px', strokeWidth: '6' }
      },
      animated: {
        indeterminate: {
          animation: 'spin 1.5s linear infinite'
        }
      }
    }
  },
  
  // Tooltip styles
  tooltips: {
    base: {
      position: 'relative',
      display: 'inline-block'
    },
    content: {
      position: 'absolute',
      zIndex: visualDesignSystem.zIndex[50],
      padding: `${visualDesignSystem.spacing[2]} ${visualDesignSystem.spacing[3]}`,
      fontSize: visualDesignSystem.typography.fontSize.sm,
      fontWeight: visualDesignSystem.typography.fontWeight.medium,
      borderRadius: visualDesignSystem.borderRadius.md,
      pointerEvents: 'none',
      opacity: 0,
      transition: 'opacity 0.2s ease, transform 0.2s ease',
      whiteSpace: 'nowrap'
    },
    variants: {
      dark: {
        backgroundColor: visualDesignSystem.colorSystem.neutral[900],
        color: '#FFFFFF'
      },
      light: {
        backgroundColor: '#FFFFFF',
        color: visualDesignSystem.colorSystem.neutral[900]
      },
      primary: {
        backgroundColor: visualDesignSystem.colorSystem.primary[500],
        color: '#FFFFFF'
      },
      glass: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        color: '#FFFFFF',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }
    },
    positions: {
      top: {
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-5px)',
        marginBottom: visualDesignSystem.spacing[2],
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderWidth: '5px',
          borderStyle: 'solid',
          borderColor: 'currentColor transparent transparent transparent'
        }
      },
      bottom: {
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%) translateY(5px)',
        marginTop: visualDesignSystem.spacing[2],
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderWidth: '5px',
          borderStyle: 'solid',
          borderColor: 'transparent transparent currentColor transparent'
        }
      },
      left: {
        right: '100%',
        top: '50%',
        transform: 'translateY(-50%) translateX(-5px)',
        marginRight: visualDesignSystem.spacing[2],
        '&::after': {
          content: '""',
          position: 'absolute',
          left: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          borderWidth: '5px',
          borderStyle: 'solid',
          borderColor: 'transparent transparent transparent currentColor'
        }
      },
      right: {
        left: '100%',
        top: '50%',
        transform: 'translateY(-50%) translateX(5px)',
        marginLeft: visualDesignSystem.spacing[2],
        '&::after': {
          content: '""',
          position: 'absolute',
          right: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          borderWidth: '5px',
          borderStyle: 'solid',
          borderColor: 'transparent currentColor transparent transparent'
        }
      }
    },
    show: {
      opacity: 1,
      transform: 'translateX(-50%) translateY(0)'
    }
  },
  
  // Modal styles
  modals: {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(5px)',
      zIndex: visualDesignSystem.zIndex[40],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      '&.show': {
        opacity: 1
      }
    },
    container: {
      position: 'relative',
      width: '90%',
      maxWidth: '500px',
      maxHeight: '90vh',
      overflow: 'auto',
      zIndex: visualDesignSystem.zIndex[50],
      opacity: 0,
      transform: 'scale(0.9)',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      '&.show': {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    variants: {
      default: {
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
        color: visualDesignSystem.colorSystem.darkMode.text.primary,
        borderRadius: visualDesignSystem.borderRadius['2xl'],
        boxShadow: visualDesignSystem.shadows['2xl']
      },
      glass: visualEffects.glassmorphism.glassModal,
      neomorphic: {
        ...visualEffects.neomorphism.neomorphCard,
        borderRadius: visualDesignSystem.borderRadius['2xl']
      }
    },
    header: {
      padding: `${visualDesignSystem.spacing[4]} ${visualDesignSystem.spacing[6]}`,
      borderBottom: `1px solid ${visualDesignSystem.colorSystem.darkMode.border.subtle}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    body: {
      padding: visualDesignSystem.spacing[6]
    },
    footer: {
      padding: `${visualDesignSystem.spacing[4]} ${visualDesignSystem.spacing[6]}`,
      borderTop: `1px solid ${visualDesignSystem.colorSystem.darkMode.border.subtle}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: visualDesignSystem.spacing[3]
    },
    closeButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: visualDesignSystem.colorSystem.darkMode.text.tertiary,
      cursor: 'pointer',
      padding: visualDesignSystem.spacing[1],
      borderRadius: visualDesignSystem.borderRadius.full,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'color 0.2s ease, background-color 0.2s ease',
      '&:hover': {
        color: visualDesignSystem.colorSystem.darkMode.text.primary,
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.secondary
      }
    }
  },
  
  // Navbar styles
  navbar: {
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `${visualDesignSystem.spacing[4]} ${visualDesignSystem.spacing[6]}`,
      zIndex: visualDesignSystem.zIndex[30]
    },
    variants: {
      solid: {
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
        boxShadow: visualDesignSystem.shadows.md
      },
      glass: visualEffects.glassmorphism.glassNavbar,
      gradient: {
        background: visualDesignSystem.colorSystem.gradients.dark
      }
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: visualDesignSystem.spacing[3],
      color: visualDesignSystem.colorSystem.darkMode.text.primary,
      fontWeight: visualDesignSystem.typography.fontWeight.bold,
      fontSize: visualDesignSystem.typography.fontSize.xl
    },
    links: {
      display: 'flex',
      alignItems: 'center',
      gap: visualDesignSystem.spacing[6]
    },
    link: {
      color: visualDesignSystem.colorSystem.darkMode.text.secondary,
      fontWeight: visualDesignSystem.typography.fontWeight.medium,
      transition: 'color 0.2s ease',
      position: 'relative',
      '&:hover': {
        color: visualDesignSystem.colorSystem.darkMode.text.primary
      },
      '&.active': {
        color: visualDesignSystem.colorSystem.primary[500],
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-5px',
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: visualDesignSystem.colorSystem.primary[500],
          borderRadius: visualDesignSystem.borderRadius.full
        }
      }
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      gap: visualDesignSystem.spacing[3]
    },
    mobileMenu: {
      display: 'none',
      '@media (max-width: 768px)': {
        display: 'block'
      }
    },
    desktopMenu: {
      display: 'flex',
      '@media (max-width: 768px)': {
        display: 'none'
      }
    }
  },
  
  // Sidebar styles
  sidebar: {
    container: {
      height: '100vh',
      width: '280px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: visualDesignSystem.zIndex[20],
      transition: 'transform 0.3s ease',
      '@media (max-width: 768px)': {
        position: 'fixed',
        transform: 'translateX(-100%)',
        '&.open': {
          transform: 'translateX(0)'
        }
      }
    },
    variants: {
      solid: {
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
        boxShadow: visualDesignSystem.shadows.lg
      },
      glass: {
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)'
      },
      gradient: {
        background: visualDesignSystem.colorSystem.gradients.dark
      }
    },
    header: {
      padding: visualDesignSystem.spacing[6],
      borderBottom: `1px solid ${visualDesignSystem.colorSystem.darkMode.border.subtle}`
    },
    content: {
      flex: 1,
      overflowY: 'auto',
      padding: visualDesignSystem.spacing[4]
    },
    footer: {
      padding: visualDesignSystem.spacing[6],
      borderTop: `1px solid ${visualDesignSystem.colorSystem.darkMode.border.subtle}`
    },
    nav: {
      display: 'flex',
      flexDirection: 'column',
      gap: visualDesignSystem.spacing[2]
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: visualDesignSystem.spacing[3],
      padding: `${visualDesignSystem.spacing[2]} ${visualDesignSystem.spacing[3]}`,
      borderRadius: visualDesignSystem.borderRadius.lg,
      color: visualDesignSystem.colorSystem.darkMode.text.secondary,
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.secondary,
        color: visualDesignSystem.colorSystem.darkMode.text.primary
      },
      '&.active': {
        backgroundColor: `${visualDesignSystem.colorSystem.primary[500]}20`,
        color: visualDesignSystem.colorSystem.primary[500]
      }
    },
    navIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: visualDesignSystem.spacing[6],
      height: visualDesignSystem.spacing[6]
    },
    navText: {
      flex: 1,
      fontWeight: visualDesignSystem.typography.fontWeight.medium
    },
    navBadge: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    section: {
      marginBottom: visualDesignSystem.spacing[6]
    },
    sectionTitle: {
      fontSize: visualDesignSystem.typography.fontSize.xs,
      fontWeight: visualDesignSystem.typography.fontWeight.semibold,
      textTransform: 'uppercase',
      letterSpacing: visualDesignSystem.typography.letterSpacing.wider,
      color: visualDesignSystem.colorSystem.darkMode.text.tertiary,
      marginBottom: visualDesignSystem.spacing[3],
      paddingLeft: visualDesignSystem.spacing[3]
    }
  },
  
  // Tab styles
  tabs: {
    container: {
      width: '100%'
    },
    list: {
      display: 'flex',
      borderBottom: `1px solid ${visualDesignSystem.colorSystem.darkMode.border.subtle}`
    },
    tab: {
      padding: `${visualDesignSystem.spacing[3]} ${visualDesignSystem.spacing[4]}`,
      fontWeight: visualDesignSystem.typography.fontWeight.medium,
      color: visualDesignSystem.colorSystem.darkMode.text.secondary,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      position: 'relative',
      '&:hover': {
        color: visualDesignSystem.colorSystem.darkMode.text.primary
      },
      '&.active': {
        color: visualDesignSystem.colorSystem.primary[500],
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-1px',
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: visualDesignSystem.colorSystem.primary[500],
          borderRadius: `${visualDesignSystem.borderRadius.full} ${visualDesignSystem.borderRadius.full} 0 0`
        }
      }
    },
    content: {
      padding: visualDesignSystem.spacing[6]
    },
    variants: {
      default: {},
      pills: {
        list: {
          gap: visualDesignSystem.spacing[2],
          borderBottom: 'none',
          padding: visualDesignSystem.spacing[1]
        },
        tab: {
          borderRadius: visualDesignSystem.borderRadius.full,
          '&.active': {
            backgroundColor: visualDesignSystem.colorSystem.primary[500],
            color: '#FFFFFF',
            '&::after': {
              display: 'none'
            }
          }
        }
      },
      underline: {
        tab: {
          '&.active::after': {
            height: '3px'
          }
        }
      },
      glass: {
        list: {
          backgroundColor: 'rgba(15, 23, 42, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: visualDesignSystem.borderRadius.lg,
          padding: visualDesignSystem.spacing[1],
          gap: visualDesignSystem.spacing[1],
          border: '1px solid rgba(255, 255, 255, 0.1)'
        },
        tab: {
          borderRadius: visualDesignSystem.borderRadius.md,
          '&.active': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&::after': {
              display: 'none'
            }
          }
        }
      }
    }
  },
  
  // Accordion styles
  accordions: {
    container: {
      width: '100%',
      borderRadius: visualDesignSystem.borderRadius.lg,
      overflow: 'hidden'
    },
    item: {
      borderBottom: `1px solid ${visualDesignSystem.colorSystem.darkMode.border.subtle}`,
      '&:last-child': {
        borderBottom: 'none'
      }
    },
    header: {
      padding: visualDesignSystem.spacing[4],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      fontWeight: visualDesignSystem.typography.fontWeight.medium,
      transition: 'background-color 0.2s ease'
    },
    icon: {
      transition: 'transform 0.3s ease',
      '&.open': {
        transform: 'rotate(180deg)'
      }
    },
    content: {
      padding: `0 ${visualDesignSystem.spacing[4]} ${visualDesignSystem.spacing[4]} ${visualDesignSystem.spacing[4]}`,
      maxHeight: 0,
      overflow: 'hidden',
      transition: 'max-height 0.3s ease, opacity 0.3s ease',
      opacity: 0,
      '&.open': {
        maxHeight: '500px',
        opacity: 1
      }
    },
    variants: {
      default: {
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
        '& .accordion-header:hover': {
          backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.secondary
        }
      },
      glass: {
        backgroundColor: 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        '& .accordion-header:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }
      },
      bordered: {
        backgroundColor: 'transparent',
        border: `1px solid ${visualDesignSystem.colorSystem.darkMode.border.default}`,
        '& .accordion-item': {
          borderBottom: `1px solid ${visualDesignSystem.colorSystem.darkMode.border.default}`
        },
        '& .accordion-header:hover': {
          backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.secondary
        }
      }
    }
  },
  
  // Notification styles
  notifications: {
    container: {
      position: 'fixed',
      zIndex: visualDesignSystem.zIndex[50],
      display: 'flex',
      flexDirection: 'column',
      gap: visualDesignSystem.spacing[3],
      width: '100%',
      maxWidth: '400px',
      padding: visualDesignSystem.spacing[4]
    },
    positions: {
      topRight: {
        top: 0,
        right: 0
      },
      topLeft: {
        top: 0,
        left: 0
      },
      bottomRight: {
        bottom: 0,
        right: 0
      },
      bottomLeft: {
        bottom: 0,
        left: 0
      }
    },
    notification: {
      borderRadius: visualDesignSystem.borderRadius.lg,
      padding: visualDesignSystem.spacing[4],
      display: 'flex',
      alignItems: 'flex-start',
      gap: visualDesignSystem.spacing[3],
      width: '100%',
      boxShadow: visualDesignSystem.shadows.lg,
      animation: 'slideIn 0.3s ease forwards',
      '@keyframes slideIn': {
        from: {
          transform: 'translateX(100%)',
          opacity: 0
        },
        to: {
          transform: 'translateX(0)',
          opacity: 1
        }
      }
    },
    variants: {
      default: {
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.primary,
        color: visualDesignSystem.colorSystem.darkMode.text.primary
      },
      success: {
        backgroundColor: `${visualDesignSystem.colorSystem.success.main}20`,
        borderLeft: `4px solid ${visualDesignSystem.colorSystem.success.main}`
      },
      warning: {
        backgroundColor: `${visualDesignSystem.colorSystem.warning.main}20`,
        borderLeft: `4px solid ${visualDesignSystem.colorSystem.warning.main}`
      },
      error: {
        backgroundColor: `${visualDesignSystem.colorSystem.error.main}20`,
        borderLeft: `4px solid ${visualDesignSystem.colorSystem.error.main}`
      },
      info: {
        backgroundColor: `${visualDesignSystem.colorSystem.primary[500]}20`,
        borderLeft: `4px solid ${visualDesignSystem.colorSystem.primary[500]}`
      },
      glass: {
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    content: {
      flex: 1
    },
    title: {
      fontWeight: visualDesignSystem.typography.fontWeight.semibold,
      marginBottom: visualDesignSystem.spacing[1]
    },
    message: {
      fontSize: visualDesignSystem.typography.fontSize.sm,
      color: visualDesignSystem.colorSystem.darkMode.text.secondary
    },
    closeButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: visualDesignSystem.colorSystem.darkMode.text.tertiary,
      cursor: 'pointer',
      padding: visualDesignSystem.spacing[1],
      borderRadius: visualDesignSystem.borderRadius.full,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'color 0.2s ease, background-color 0.2s ease',
      '&:hover': {
        color: visualDesignSystem.colorSystem.darkMode.text.primary,
        backgroundColor: visualDesignSystem.colorSystem.darkMode.surface.secondary
      }
    }
  }
};

// Export modules
export {
  visualDesignSystem,
  visualEffects,
  animations,
  uiComponents
};
