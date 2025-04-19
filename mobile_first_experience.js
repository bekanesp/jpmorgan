// Mobile-First and Multi-Device Experience for JP Morgan Interview Prep Tool
// Optimized for Gen Z users across all devices

// Responsive Design System
const responsiveDesign = {
  // Breakpoints for responsive design
  breakpoints: {
    xs: '320px',   // Extra small devices (phones)
    sm: '576px',   // Small devices (large phones, portrait tablets)
    md: '768px',   // Medium devices (tablets)
    lg: '992px',   // Large devices (desktops)
    xl: '1200px',  // Extra large devices (large desktops)
    xxl: '1400px'  // Extra extra large devices
  },
  
  // Media queries for easy use
  mediaQueries: {
    xs: '@media (min-width: 320px)',
    sm: '@media (min-width: 576px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 992px)',
    xl: '@media (min-width: 1200px)',
    xxl: '@media (min-width: 1400px)',
    
    // Max-width queries for mobile-first approach
    maxXs: '@media (max-width: 575.98px)',
    maxSm: '@media (max-width: 767.98px)',
    maxMd: '@media (max-width: 991.98px)',
    maxLg: '@media (max-width: 1199.98px)',
    maxXl: '@media (max-width: 1399.98px)',
    
    // Device-specific queries
    mobile: '@media (max-width: 767.98px)',
    tablet: '@media (min-width: 768px) and (max-width: 991.98px)',
    desktop: '@media (min-width: 992px)',
    
    // Orientation queries
    portrait: '@media (orientation: portrait)',
    landscape: '@media (orientation: landscape)',
    
    // Touch capability
    touch: '@media (hover: none) and (pointer: coarse)',
    mouse: '@media (hover: hover) and (pointer: fine)',
    
    // Dark mode preference
    darkMode: '@media (prefers-color-scheme: dark)',
    lightMode: '@media (prefers-color-scheme: light)',
    
    // Reduced motion preference
    reducedMotion: '@media (prefers-reduced-motion: reduce)'
  },
  
  // Container widths
  containers: {
    xs: '100%',
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
    xxl: '1320px',
    
    // Fluid containers
    fluid: '100%',
    
    // Container with responsive padding
    responsive: {
      width: '100%',
      paddingLeft: 'clamp(1rem, 5vw, 2rem)',
      paddingRight: 'clamp(1rem, 5vw, 2rem)'
    }
  },
  
  // Grid system
  grid: {
    // Grid container
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: '1rem'
    },
    
    // Responsive grid container
    responsiveContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem',
      
      '@media (min-width: 576px)': {
        gridTemplateColumns: 'repeat(8, 1fr)'
      },
      
      '@media (min-width: 992px)': {
        gridTemplateColumns: 'repeat(12, 1fr)'
      }
    },
    
    // Auto-fit grid for card layouts
    autoFitGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem'
    },
    
    // Auto-fill grid for gallery layouts
    autoFillGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem'
    }
  },
  
  // Flexbox layouts
  flex: {
    // Basic row
    row: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    
    // Basic column
    column: {
      display: 'flex',
      flexDirection: 'column'
    },
    
    // Centered content
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    // Space between items
    spaceBetween: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    
    // Responsive direction change
    responsiveDirection: {
      display: 'flex',
      flexDirection: 'column',
      
      '@media (min-width: 768px)': {
        flexDirection: 'row'
      }
    }
  },
  
  // Spacing utilities
  spacing: {
    // Responsive margin
    margin: {
      xs: 'clamp(0.5rem, 2vw, 1rem)',
      sm: 'clamp(0.75rem, 3vw, 1.5rem)',
      md: 'clamp(1rem, 4vw, 2rem)',
      lg: 'clamp(1.5rem, 5vw, 3rem)',
      xl: 'clamp(2rem, 6vw, 4rem)'
    },
    
    // Responsive padding
    padding: {
      xs: 'clamp(0.5rem, 2vw, 1rem)',
      sm: 'clamp(0.75rem, 3vw, 1.5rem)',
      md: 'clamp(1rem, 4vw, 2rem)',
      lg: 'clamp(1.5rem, 5vw, 3rem)',
      xl: 'clamp(2rem, 6vw, 4rem)'
    },
    
    // Responsive gap
    gap: {
      xs: 'clamp(0.25rem, 1vw, 0.5rem)',
      sm: 'clamp(0.5rem, 2vw, 1rem)',
      md: 'clamp(0.75rem, 3vw, 1.5rem)',
      lg: 'clamp(1rem, 4vw, 2rem)',
      xl: 'clamp(1.5rem, 5vw, 3rem)'
    }
  },
  
  // Responsive typography
  typography: {
    // Responsive font sizes
    fontSize: {
      xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',     // 12-14px
      sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',       // 14-16px
      base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',       // 16-18px
      lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',      // 18-20px
      xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',       // 20-24px
      '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',      // 24-30px
      '3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)', // 30-36px
      '4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',      // 36-48px
      '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)'           // 48-64px
    },
    
    // Responsive line heights
    lineHeight: {
      tight: 'clamp(1.25, 1.2 + 0.25vw, 1.375)',
      normal: 'clamp(1.5, 1.45 + 0.25vw, 1.625)',
      relaxed: 'clamp(1.625, 1.6 + 0.25vw, 1.75)',
      loose: 'clamp(1.75, 1.7 + 0.25vw, 2)'
    },
    
    // Responsive text styles
    textStyles: {
      // Heading styles
      h1: {
        fontSize: 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.025em',
        
        '@media (max-width: 576px)': {
          fontSize: 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)',
          lineHeight: 1.3
        }
      },
      h2: {
        fontSize: 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)',
        fontWeight: 700,
        lineHeight: 1.3,
        letterSpacing: '-0.025em',
        
        '@media (max-width: 576px)': {
          fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
          lineHeight: 1.4
        }
      },
      h3: {
        fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '-0.015em',
        
        '@media (max-width: 576px)': {
          fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
          lineHeight: 1.4
        }
      },
      h4: {
        fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '-0.015em',
        
        '@media (max-width: 576px)': {
          fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
          lineHeight: 1.5
        }
      },
      
      // Body text styles
      body: {
        fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        fontWeight: 400,
        lineHeight: 1.5,
        
        '@media (max-width: 576px)': {
          fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
          lineHeight: 1.6
        }
      },
      bodySmall: {
        fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        fontWeight: 400,
        lineHeight: 1.6
      }
    }
  }
};

// Mobile-First Components
const mobileFirstComponents = {
  // Mobile navigation
  mobileNavigation: {
    // Bottom navigation bar
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '60px',
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      zIndex: 40,
      
      '@media (min-width: 992px)': {
        display: 'none'
      },
      
      // Navigation item
      item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        color: 'rgba(255, 255, 255, 0.6)',
        transition: 'color 0.2s ease',
        padding: '8px 0',
        
        '&:hover, &.active': {
          color: 'rgba(255, 255, 255, 1)'
        },
        
        // Icon
        icon: {
          fontSize: '1.25rem',
          marginBottom: '4px'
        },
        
        // Label
        label: {
          fontSize: '0.75rem',
          fontWeight: 500
        }
      }
    },
    
    // Hamburger menu
    hamburgerMenu: {
      // Trigger button
      trigger: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        
        '@media (min-width: 992px)': {
          display: 'none'
        },
        
        // Icon bars
        icon: {
          position: 'relative',
          width: '24px',
          height: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          transition: 'all 0.3s ease',
          
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '24px',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            transition: 'all 0.3s ease'
          },
          
          '&::before': {
            transform: 'translateY(-8px)'
          },
          
          '&::after': {
            transform: 'translateY(8px)'
          },
          
          // Open state
          '&.open': {
            backgroundColor: 'transparent',
            
            '&::before': {
              transform: 'rotate(45deg)'
            },
            
            '&::after': {
              transform: 'rotate(-45deg)'
            }
          }
        }
      },
      
      // Drawer
      drawer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(15, 23, 42, 0.98)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 50,
        transform: 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        
        // Open state
        '&.open': {
          transform: 'translateX(0)'
        },
        
        // Header
        header: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        },
        
        // Close button
        closeButton: {
          backgroundColor: 'transparent',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        
        // Content
        content: {
          flex: 1,
          overflowY: 'auto',
          padding: '1rem'
        },
        
        // Navigation list
        navList: {
          listStyle: 'none',
          padding: 0,
          margin: 0,
          
          // Navigation item
          item: {
            marginBottom: '1rem',
            
            // Link
            link: {
              display: 'flex',
              alignItems: 'center',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500,
              transition: 'background-color 0.2s ease',
              
              '&:hover, &.active': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              },
              
              // Icon
              icon: {
                marginRight: '0.75rem',
                fontSize: '1.25rem'
              }
            }
          }
        },
        
        // Footer
        footer: {
          padding: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.6)'
        }
      }
    },
    
    // Swipe navigation
    swipeNavigation: {
      // Container
      container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        touchAction: 'pan-y'
      },
      
      // Content
      content: {
        display: 'flex',
        transition: 'transform 0.3s ease',
        height: '100%',
        
        // Page
        page: {
          flex: '0 0 100%',
          width: '100%',
          height: '100%',
          overflow: 'auto'
        }
      },
      
      // Indicators
      indicators: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        
        // Dot
        dot: {
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          margin: '0 4px',
          transition: 'all 0.3s ease',
          
          '&.active': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            transform: 'scale(1.25)'
          }
        }
      }
    }
  },
  
  // Mobile-optimized cards
  mobileCards: {
    // Swipeable card
    swipeableCard: {
      position: 'relative',
      width: '100%',
      borderRadius: '1rem',
      overflow: 'hidden',
      backgroundColor: 'rgba(31, 41, 55, 0.8)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      touchAction: 'pan-y',
      
      // Content
      content: {
        padding: '1.5rem'
      },
      
      // Actions
      actions: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        // Left action
        left: {
          left: '-100px',
          backgroundColor: 'rgba(239, 68, 68, 0.9)',
          color: 'white'
        },
        
        // Right action
        right: {
          right: '-100px',
          backgroundColor: 'rgba(16, 185, 129, 0.9)',
          color: 'white'
        }
      }
    },
    
    // Stacked card
    stackedCard: {
      position: 'relative',
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
      perspective: '1000px',
      
      // Card
      card: {
        position: 'absolute',
        width: '100%',
        borderRadius: '1rem',
        backgroundColor: 'rgba(31, 41, 55, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        padding: '1.5rem',
        transition: 'all 0.3s ease',
        
        // Content
        content: {
          opacity: 0,
          transition: 'opacity 0.3s ease',
          
          '&.active': {
            opacity: 1
          }
        }
      }
    },
    
    // Compact card
    compactCard: {
      width: '100%',
      borderRadius: '0.75rem',
      backgroundColor: 'rgba(31, 41, 55, 0.8)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      
      // Header
      header: {
        padding: '0.75rem 1rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      
      // Content
      content: {
        padding: '1rem'
      },
      
      // Footer
      footer: {
        padding: '0.75rem 1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      
      // Expandable
      expandable: {
        // Trigger
        trigger: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '0.75rem 1rem',
          backgroundColor: 'transparent',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.9)',
          textAlign: 'left',
          cursor: 'pointer'
        },
        
        // Content
        content: {
          maxHeight: 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          
          '&.expanded': {
            maxHeight: '500px'
          }
        }
      }
    }
  },
  
  // Mobile-optimized inputs
  mobileInputs: {
    // Touch-friendly input
    touchInput: {
      width: '100%',
      height: '48px',
      padding: '0 1rem',
      fontSize: '1rem',
      borderRadius: '0.75rem',
      backgroundColor: 'rgba(31, 41, 55, 0.8)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'rgba(255, 255, 255, 0.9)',
      
      '&:focus': {
        outline: 'none',
        borderColor: 'rgba(0, 102, 255, 0.5)',
        boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.25)'
      },
      
      // With icon
      withIcon: {
        paddingLeft: '3rem',
        
        // Icon
        icon: {
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '1.25rem'
        }
      }
    },
    
    // Segmented control
    segmentedControl: {
      display: 'flex',
      width: '100%',
      backgroundColor: 'rgba(31, 41, 55, 0.8)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '0.75rem',
      padding: '0.25rem',
      
      // Segment
      segment: {
        flex: 1,
        padding: '0.75rem 0',
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '0.5rem',
        transition: 'all 0.2s ease',
        
        '&.active': {
          backgroundColor: 'rgba(0, 102, 255, 0.2)',
          color: 'rgba(255, 255, 255, 0.9)'
        }
      }
    },
    
    // Range slider
    rangeSlider: {
      width: '100%',
      height: '48px',
      position: 'relative',
      
      // Track
      track: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '100%',
        height: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '2px'
      },
      
      // Fill
      fill: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        height: '4px',
        backgroundColor: 'rgba(0, 102, 255, 0.9)',
        borderRadius: '2px',
        left: 0
      },
      
      // Thumb
      thumb: {
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '24px',
        height: '24px',
        backgroundColor: 'rgba(0, 102, 255, 0.9)',
        borderRadius: '50%',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer'
      },
      
      // Input
      input: {
        width: '100%',
        height: '100%',
        opacity: 0,
        cursor: 'pointer'
      }
    },
    
    // Search bar
    searchBar: {
      position: 'relative',
      width: '100%',
      
      // Input
      input: {
        width: '100%',
        height: '48px',
        padding: '0 3rem 0 1rem',
        fontSize: '1rem',
        borderRadius: '0.75rem',
        backgroundColor: 'rgba(31, 41, 55, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'rgba(255, 255, 255, 0.9)',
        
        '&:focus': {
          outline: 'none',
          borderColor: 'rgba(0, 102, 255, 0.5)',
          boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.25)'
        }
      },
      
      // Search icon
      searchIcon: {
        position: 'absolute',
        right: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '1.25rem'
      },
      
      // Clear button
      clearButton: {
        position: 'absolute',
        right: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '1.25rem',
        cursor: 'pointer',
        display: 'none',
        
        '&.visible': {
          display: 'block'
        }
      }
    }
  },
  
  // Mobile-optimized buttons
  mobileButtons: {
    // Floating action button
    fab: {
      position: 'fixed',
      bottom: '80px',
      right: '1.5rem',
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 102, 255, 0.9)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
      cursor: 'pointer',
      zIndex: 30,
      transition: 'all 0.2s ease',
      
      '&:active': {
        transform: 'scale(0.95)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
      },
      
      // Icon
      icon: {
        fontSize: '1.5rem'
      },
      
      // Speed dial
      speedDial: {
        position: 'absolute',
        bottom: '100%',
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.75rem',
        marginBottom: '1rem',
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.2s ease',
        
        '&.open': {
          opacity: 1,
          pointerEvents: 'auto'
        },
        
        // Action
        action: {
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          
          // Label
          label: {
            backgroundColor: 'rgba(31, 41, 55, 0.9)',
            color: 'white',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          },
          
          // Button
          button: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(31, 41, 55, 0.9)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer'
          }
        }
      }
    },
    
    // Touch button
    touchButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '48px',
      padding: '0 1.5rem',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      fontWeight: 500,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      
      // Primary
      primary: {
        backgroundColor: 'rgba(0, 102, 255, 0.9)',
        color: 'white',
        
        '&:active': {
          backgroundColor: 'rgba(0, 102, 255, 0.8)',
          transform: 'scale(0.98)'
        }
      },
      
      // Secondary
      secondary: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        
        '&:active': {
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          transform: 'scale(0.98)'
        }
      },
      
      // With icon
      withIcon: {
        gap: '0.5rem',
        
        // Icon
        icon: {
          fontSize: '1.25rem'
        }
      },
      
      // Block
      block: {
        width: '100%'
      }
    },
    
    // Icon button
    iconButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      
      '&:active': {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        transform: 'scale(0.95)'
      },
      
      // Icon
      icon: {
        fontSize: '1.5rem'
      },
      
      // Sizes
      sizes: {
        sm: {
          width: '36px',
          height: '36px',
          
          '& .icon': {
            fontSize: '1.25rem'
          }
        },
        md: {
          width: '48px',
          height: '48px',
          
          '& .icon': {
            fontSize: '1.5rem'
          }
        },
        lg: {
          width: '56px',
          height: '56px',
          
          '& .icon': {
            fontSize: '1.75rem'
          }
        }
      }
    }
  },
  
  // Mobile-optimized lists
  mobileLists: {
    // Swipeable list
    swipeableList: {
      // Item
      item: {
        position: 'relative',
        width: '100%',
        backgroundColor: 'rgba(31, 41, 55, 0.8)',
        overflow: 'hidden',
        touchAction: 'pan-y',
        
        // Content
        content: {
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          transition: 'transform 0.3s ease',
          
          // Avatar
          avatar: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }
          },
          
          // Text
          text: {
            flex: 1,
            
            // Title
            title: {
              fontSize: '1rem',
              fontWeight: 500,
              marginBottom: '0.25rem',
              color: 'rgba(255, 255, 255, 0.9)'
            },
            
            // Subtitle
            subtitle: {
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.6)'
            }
          }
        },
        
        // Actions
        actions: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
          // Left action
          left: {
            left: '-80px',
            backgroundColor: 'rgba(239, 68, 68, 0.9)',
            color: 'white'
          },
          
          // Right action
          right: {
            right: '-80px',
            backgroundColor: 'rgba(16, 185, 129, 0.9)',
            color: 'white'
          }
        },
        
        // Divider
        divider: {
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
      }
    },
    
    // Infinite scroll list
    infiniteScrollList: {
      // Container
      container: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        paddingBottom: '80px'
      },
      
      // Item
      item: {
        padding: '1rem',
        backgroundColor: 'rgba(31, 41, 55, 0.8)',
        marginBottom: '0.5rem',
        borderRadius: '0.75rem',
        
        // Animation
        animation: 'fadeIn 0.3s ease forwards',
        '@keyframes fadeIn': {
          from: {
            opacity: 0,
            transform: 'translateY(10px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      },
      
      // Loading
      loading: {
        padding: '1rem',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.6)'
      }
    },
    
    // Pull to refresh
    pullToRefresh: {
      // Container
      container: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        position: 'relative'
      },
      
      // Indicator
      indicator: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255, 255, 255, 0.9)',
        transform: 'translateY(-100%)',
        transition: 'transform 0.3s ease',
        
        // Icon
        icon: {
          fontSize: '1.5rem',
          marginRight: '0.5rem',
          animation: 'spin 1s linear infinite',
          '@keyframes spin': {
            from: {
              transform: 'rotate(0deg)'
            },
            to: {
              transform: 'rotate(360deg)'
            }
          }
        },
        
        // Text
        text: {
          fontSize: '0.875rem',
          fontWeight: 500
        }
      }
    }
  },
  
  // Mobile-optimized modals
  mobileModals: {
    // Bottom sheet
    bottomSheet: {
      // Overlay
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        zIndex: 50,
        opacity: 0,
        transition: 'opacity 0.3s ease',
        
        '&.open': {
          opacity: 1
        }
      },
      
      // Container
      container: {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(31, 41, 55, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
        zIndex: 51,
        transform: 'translateY(100%)',
        transition: 'transform 0.3s ease',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        
        '&.open': {
          transform: 'translateY(0)'
        }
      },
      
      // Handle
      handle: {
        width: '40px',
        height: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '2px',
        margin: '0.75rem auto'
      },
      
      // Header
      header: {
        padding: '0 1.5rem 0.75rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        
        // Title
        title: {
          fontSize: '1.125rem',
          fontWeight: 600,
          color: 'rgba(255, 255, 255, 0.9)',
          textAlign: 'center'
        }
      },
      
      // Content
      content: {
        padding: '1.5rem',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        flex: 1
      },
      
      // Footer
      footer: {
        padding: '1rem 1.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        gap: '1rem'
      }
    },
    
    // Action sheet
    actionSheet: {
      // Overlay
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        zIndex: 50,
        opacity: 0,
        transition: 'opacity 0.3s ease',
        
        '&.open': {
          opacity: 1
        }
      },
      
      // Container
      container: {
        position: 'fixed',
        left: '1rem',
        right: '1rem',
        bottom: '1rem',
        zIndex: 51,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        transform: 'translateY(100%)',
        transition: 'transform 0.3s ease',
        
        '&.open': {
          transform: 'translateY(0)'
        }
      },
      
      // Action group
      actionGroup: {
        backgroundColor: 'rgba(31, 41, 55, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        overflow: 'hidden',
        
        // Action
        action: {
          width: '100%',
          padding: '1rem',
          textAlign: 'center',
          fontSize: '1rem',
          fontWeight: 500,
          backgroundColor: 'transparent',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.9)',
          cursor: 'pointer',
          
          '&:active': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          },
          
          // Destructive
          '&.destructive': {
            color: 'rgba(239, 68, 68, 0.9)'
          },
          
          // Divider
          '&:not(:last-child)': {
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }
        }
      },
      
      // Cancel button
      cancelButton: {
        width: '100%',
        padding: '1rem',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 600,
        backgroundColor: 'rgba(31, 41, 55, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        border: 'none',
        color: 'rgba(0, 102, 255, 0.9)',
        cursor: 'pointer',
        
        '&:active': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
      }
    },
    
    // Toast notification
    toast: {
      // Container
      container: {
        position: 'fixed',
        bottom: '80px',
        left: '1rem',
        right: '1rem',
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        pointerEvents: 'none'
      },
      
      // Toast
      toast: {
        backgroundColor: 'rgba(31, 41, 55, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '0.75rem',
        padding: '1rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        animation: 'slideUp 0.3s ease forwards, fadeOut 0.3s ease 2.7s forwards',
        
        '@keyframes slideUp': {
          from: {
            transform: 'translateY(100%)',
            opacity: 0
          },
          to: {
            transform: 'translateY(0)',
            opacity: 1
          }
        },
        
        '@keyframes fadeOut': {
          from: {
            opacity: 1
          },
          to: {
            opacity: 0
          }
        },
        
        // Icon
        icon: {
          fontSize: '1.25rem',
          flexShrink: 0
        },
        
        // Content
        content: {
          flex: 1,
          
          // Title
          title: {
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '0.25rem'
          },
          
          // Message
          message: {
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.7)'
          }
        },
        
        // Variants
        variants: {
          success: {
            borderLeft: '4px solid rgba(16, 185, 129, 0.9)',
            
            '& .icon': {
              color: 'rgba(16, 185, 129, 0.9)'
            }
          },
          error: {
            borderLeft: '4px solid rgba(239, 68, 68, 0.9)',
            
            '& .icon': {
              color: 'rgba(239, 68, 68, 0.9)'
            }
          },
          warning: {
            borderLeft: '4px solid rgba(245, 158, 11, 0.9)',
            
            '& .icon': {
              color: 'rgba(245, 158, 11, 0.9)'
            }
          },
          info: {
            borderLeft: '4px solid rgba(0, 102, 255, 0.9)',
            
            '& .icon': {
              color: 'rgba(0, 102, 255, 0.9)'
            }
          }
        }
      }
    }
  },
  
  // Mobile-optimized forms
  mobileForms: {
    // Form group
    formGroup: {
      marginBottom: '1.5rem',
      
      // Label
      label: {
        display: 'block',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: '0.5rem'
      },
      
      // Input
      input: {
        width: '100%',
        height: '48px',
        padding: '0 1rem',
        fontSize: '1rem',
        borderRadius: '0.75rem',
        backgroundColor: 'rgba(31, 41, 55, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'rgba(255, 255, 255, 0.9)',
        
        '&:focus': {
          outline: 'none',
          borderColor: 'rgba(0, 102, 255, 0.5)',
          boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.25)'
        }
      },
      
      // Textarea
      textarea: {
        width: '100%',
        minHeight: '100px',
        padding: '1rem',
        fontSize: '1rem',
        borderRadius: '0.75rem',
        backgroundColor: 'rgba(31, 41, 55, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'rgba(255, 255, 255, 0.9)',
        resize: 'vertical',
        
        '&:focus': {
          outline: 'none',
          borderColor: 'rgba(0, 102, 255, 0.5)',
          boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.25)'
        }
      },
      
      // Helper text
      helperText: {
        fontSize: '0.75rem',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '0.5rem'
      },
      
      // Error
      error: {
        fontSize: '0.75rem',
        color: 'rgba(239, 68, 68, 0.9)',
        marginTop: '0.5rem'
      }
    },
    
    // Checkbox
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      
      // Input
      input: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      },
      
      // Custom checkbox
      customCheckbox: {
        width: '24px',
        height: '24px',
        borderRadius: '6px',
        backgroundColor: 'rgba(31, 41, 55, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '0.75rem',
        flexShrink: 0,
        
        // Checked
        '&.checked': {
          backgroundColor: 'rgba(0, 102, 255, 0.9)',
          borderColor: 'rgba(0, 102, 255, 0.9)'
        },
        
        // Icon
        icon: {
          color: 'white',
          fontSize: '1rem',
          opacity: 0,
          transition: 'opacity 0.2s ease',
          
          '&.checked': {
            opacity: 1
          }
        }
      },
      
      // Label
      label: {
        fontSize: '0.875rem',
        color: 'rgba(255, 255, 255, 0.9)'
      }
    },
    
    // Radio
    radio: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      
      // Input
      input: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      },
      
      // Custom radio
      customRadio: {
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: 'rgba(31, 41, 55, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '0.75rem',
        flexShrink: 0,
        
        // Inner circle
        innerCircle: {
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 102, 255, 0.9)',
          opacity: 0,
          transition: 'opacity 0.2s ease',
          
          '&.checked': {
            opacity: 1
          }
        },
        
        // Checked
        '&.checked': {
          borderColor: 'rgba(0, 102, 255, 0.9)'
        }
      },
      
      // Label
      label: {
        fontSize: '0.875rem',
        color: 'rgba(255, 255, 255, 0.9)'
      }
    },
    
    // Toggle
    toggle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1rem',
      
      // Label
      label: {
        fontSize: '0.875rem',
        color: 'rgba(255, 255, 255, 0.9)'
      },
      
      // Input
      input: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      },
      
      // Track
      track: {
        position: 'relative',
        width: '52px',
        height: '32px',
        borderRadius: '16px',
        backgroundColor: 'rgba(31, 41, 55, 0.8)',
        transition: 'background-color 0.2s ease',
        
        // Checked
        '&.checked': {
          backgroundColor: 'rgba(0, 102, 255, 0.9)'
        }
      },
      
      // Thumb
      thumb: {
        position: 'absolute',
        top: '4px',
        left: '4px',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease',
        
        // Checked
        '&.checked': {
          transform: 'translateX(20px)'
        }
      }
    }
  },
  
  // Mobile-optimized charts
  mobileCharts: {
    // Responsive chart container
    container: {
      width: '100%',
      height: '300px',
      position: 'relative',
      
      '@media (min-width: 768px)': {
        height: '400px'
      }
    },
    
    // Touch-friendly tooltip
    tooltip: {
      backgroundColor: 'rgba(31, 41, 55, 0.95)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '0.75rem',
      padding: '0.75rem 1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      fontSize: '0.875rem',
      color: 'rgba(255, 255, 255, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      
      // Title
      title: {
        fontWeight: 600,
        marginBottom: '0.5rem'
      },
      
      // Item
      item: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.25rem',
        
        // Color
        color: {
          width: '12px',
          height: '12px',
          borderRadius: '2px'
        },
        
        // Label
        label: {
          color: 'rgba(255, 255, 255, 0.7)'
        },
        
        // Value
        value: {
          fontWeight: 500,
          marginLeft: 'auto'
        }
      }
    },
    
    // Touch-friendly legend
    legend: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginTop: '1rem',
      
      // Item
      item: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        
        // Color
        color: {
          width: '12px',
          height: '12px',
          borderRadius: '2px'
        },
        
        // Label
        label: {
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.9)'
        }
      }
    },
    
    // Responsive chart options
    responsiveOptions: {
      maintainAspectRatio: false,
      responsive: true,
      interaction: {
        mode: 'nearest',
        intersect: false
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false,
          external: true
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 6
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 6
          }
        }
      }
    }
  },
  
  // Mobile-optimized loaders
  mobileLoaders: {
    // Skeleton loader
    skeleton: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '0.5rem',
      animation: 'pulse 1.5s ease-in-out infinite',
      
      '@keyframes pulse': {
        '0%, 100%': {
          opacity: 0.5
        },
        '50%': {
          opacity: 0.3
        }
      },
      
      // Text
      text: {
        height: '1rem',
        marginBottom: '0.5rem',
        width: '100%'
      },
      
      // Circle
      circle: {
        width: '48px',
        height: '48px',
        borderRadius: '50%'
      },
      
      // Rectangle
      rectangle: {
        height: '100px',
        width: '100%',
        marginBottom: '0.5rem'
      },
      
      // Card
      card: {
        height: '120px',
        width: '100%',
        marginBottom: '1rem'
      }
    },
    
    // Spinner
    spinner: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: '3px solid rgba(255, 255, 255, 0.1)',
      borderTopColor: 'rgba(0, 102, 255, 0.9)',
      animation: 'spin 1s linear infinite',
      
      '@keyframes spin': {
        from: {
          transform: 'rotate(0deg)'
        },
        to: {
          transform: 'rotate(360deg)'
        }
      }
    },
    
    // Progress bar
    progressBar: {
      width: '100%',
      height: '4px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '2px',
      overflow: 'hidden',
      
      // Fill
      fill: {
        height: '100%',
        backgroundColor: 'rgba(0, 102, 255, 0.9)',
        borderRadius: '2px',
        transition: 'width 0.3s ease'
      },
      
      // Indeterminate
      indeterminate: {
        height: '100%',
        width: '30%',
        backgroundColor: 'rgba(0, 102, 255, 0.9)',
        borderRadius: '2px',
        animation: 'indeterminate 1.5s infinite linear',
        
        '@keyframes indeterminate': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(400%)'
          }
        }
      }
    },
    
    // Splash screen
    splashScreen: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      
      // Logo
      logo: {
        width: '80px',
        height: '80px',
        marginBottom: '2rem',
        animation: 'pulse 2s ease-in-out infinite'
      },
      
      // Progress
      progress: {
        width: '200px',
        height: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '2px',
        overflow: 'hidden',
        
        // Fill
        fill: {
          height: '100%',
          backgroundColor: 'rgba(0, 102, 255, 0.9)',
          borderRadius: '2px',
          transition: 'width 0.3s ease'
        }
      },
      
      // Text
      text: {
        marginTop: '1rem',
        fontSize: '0.875rem',
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center'
      }
    }
  }
};

// Touch Interaction Optimizations
const touchInteractions = {
  // Touch feedback
  touchFeedback: {
    // Active state
    active: {
      opacity: 0.8,
      transform: 'scale(0.98)'
    },
    
    // Ripple effect
    ripple: {
      position: 'relative',
      overflow: 'hidden',
      
      // Ripple element
      element: {
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        transform: 'scale(0)',
        animation: 'ripple 0.6s linear',
        
        '@keyframes ripple': {
          to: {
            transform: 'scale(4)',
            opacity: 0
          }
        }
      }
    },
    
    // Highlight
    highlight: {
      position: 'relative',
      
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        transition: 'background-color 0.2s ease'
      },
      
      '&:active::after': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      }
    }
  },
  
  // Gesture handlers
  gestureHandlers: {
    // Swipe
    swipe: {
      // Detect swipe direction
      detectDirection: `
        function detectSwipeDirection(startX, startY, endX, endY) {
          const deltaX = endX - startX;
          const deltaY = endY - startY;
          
          // Minimum distance for a swipe
          const minDistance = 50;
          
          if (Math.abs(deltaX) < minDistance && Math.abs(deltaY) < minDistance) {
            return null; // Not a swipe
          }
          
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            return deltaX > 0 ? 'right' : 'left';
          } else {
            return deltaY > 0 ? 'down' : 'up';
          }
        }
      `,
      
      // Handle swipe
      handleSwipe: `
        function handleSwipe(element, callbacks) {
          let startX, startY, startTime;
          
          element.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startTime = Date.now();
          }, { passive: true });
          
          element.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const endTime = Date.now();
            
            // Maximum time for a swipe
            const maxTime = 300;
            
            if (endTime - startTime > maxTime) {
              return; // Too slow, not a swipe
            }
            
            const direction = detectSwipeDirection(startX, startY, endX, endY);
            
            if (direction && callbacks[direction]) {
              callbacks[direction]();
            }
            
            startX = startY = null;
          }, { passive: true });
        }
      `
    },
    
    // Pinch zoom
    pinchZoom: {
      // Handle pinch zoom
      handlePinchZoom: `
        function handlePinchZoom(element, callbacks) {
          let initialDistance = 0;
          let currentScale = 1;
          
          element.addEventListener('touchstart', (e) => {
            if (e.touches.length !== 2) return;
            
            initialDistance = getDistance(
              e.touches[0].clientX,
              e.touches[0].clientY,
              e.touches[1].clientX,
              e.touches[1].clientY
            );
          }, { passive: true });
          
          element.addEventListener('touchmove', (e) => {
            if (e.touches.length !== 2 || initialDistance === 0) return;
            
            const currentDistance = getDistance(
              e.touches[0].clientX,
              e.touches[0].clientY,
              e.touches[1].clientX,
              e.touches[1].clientY
            );
            
            const scale = currentDistance / initialDistance;
            
            if (callbacks.onPinch) {
              callbacks.onPinch(scale, currentScale);
            }
            
            currentScale = scale;
          }, { passive: true });
          
          element.addEventListener('touchend', (e) => {
            if (initialDistance === 0) return;
            
            if (callbacks.onPinchEnd) {
              callbacks.onPinchEnd(currentScale);
            }
            
            initialDistance = 0;
            currentScale = 1;
          }, { passive: true });
          
          function getDistance(x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          }
        }
      `
    },
    
    // Long press
    longPress: {
      // Handle long press
      handleLongPress: `
        function handleLongPress(element, callback, duration = 500) {
          let timer;
          let isLongPress = false;
          
          element.addEventListener('touchstart', (e) => {
            isLongPress = false;
            timer = setTimeout(() => {
              isLongPress = true;
              callback(e);
            }, duration);
          }, { passive: true });
          
          element.addEventListener('touchend', () => {
            clearTimeout(timer);
          }, { passive: true });
          
          element.addEventListener('touchmove', () => {
            clearTimeout(timer);
          }, { passive: true });
        }
      `
    },
    
    // Double tap
    doubleTap: {
      // Handle double tap
      handleDoubleTap: `
        function handleDoubleTap(element, callback, maxDelay = 300) {
          let lastTap = 0;
          
          element.addEventListener('touchend', (e) => {
            const currentTime = Date.now();
            const tapLength = currentTime - lastTap;
            
            if (tapLength < maxDelay && tapLength > 0) {
              callback(e);
              e.preventDefault();
            }
            
            lastTap = currentTime;
          });
        }
      `
    }
  },
  
  // Accessibility enhancements
  accessibilityEnhancements: {
    // Touch target size
    touchTargetSize: {
      minWidth: '44px',
      minHeight: '44px',
      padding: '12px'
    },
    
    // Focus states
    focusStates: {
      outline: 'none',
      boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.5)'
    },
    
    // Reduced motion
    reducedMotion: {
      '@media (prefers-reduced-motion: reduce)': {
        '*': {
          animationDuration: '0.001ms !important',
          transitionDuration: '0.001ms !important'
        }
      }
    }
  }
};

// Device-Specific Optimizations
const deviceOptimizations = {
  // iOS specific styles
  iOS: {
    // Safe area insets
    safeArea: {
      paddingTop: 'env(safe-area-inset-top)',
      paddingRight: 'env(safe-area-inset-right)',
      paddingBottom: 'env(safe-area-inset-bottom)',
      paddingLeft: 'env(safe-area-inset-left)'
    },
    
    // Momentum scrolling
    momentumScrolling: {
      WebkitOverflowScrolling: 'touch'
    },
    
    // Disable tap highlight
    disableTapHighlight: {
      WebkitTapHighlightColor: 'transparent'
    },
    
    // Fix for position: fixed elements
    fixedPositionFix: {
      transform: 'translateZ(0)'
    },
    
    // Fix for 100vh issue
    viewportHeightFix: {
      height: '100vh',
      height: 'calc(var(--vh, 1vh) * 100)'
    }
  },
  
  // Android specific styles
  android: {
    // Fix for input zoom
    inputZoomFix: {
      fontSize: '16px'
    },
    
    // Fix for overflow scrolling
    overflowScrollingFix: {
      overflowScrolling: 'touch'
    },
    
    // Fix for position: fixed elements
    fixedPositionFix: {
      transform: 'translateZ(0)'
    }
  },
  
  // Desktop hover states
  desktop: {
    // Hover states
    hoverStates: {
      '@media (hover: hover)': {
        // Button hover
        '.button:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        },
        
        // Card hover
        '.card:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        },
        
        // Link hover
        '.link:hover': {
          textDecoration: 'underline'
        }
      }
    }
  }
};

// Performance Optimizations
const performanceOptimizations = {
  // Lazy loading
  lazyLoading: {
    // Image lazy loading
    imageLazyLoading: {
      loading: 'lazy',
      decoding: 'async'
    },
    
    // Component lazy loading
    componentLazyLoading: `
      function lazyLoadComponent(component, options = {}) {
        const { threshold = 0.5, rootMargin = '0px' } = options;
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Load the component
              const element = entry.target;
              const componentId = element.dataset.component;
              
              if (componentId && window.components && window.components[componentId]) {
                window.components[componentId](element);
              }
              
              // Unobserve after loading
              observer.unobserve(element);
            }
          });
        }, { threshold, rootMargin });
        
        // Observe the component container
        observer.observe(component);
      }
    `
  },
  
  // Virtualized lists
  virtualizedLists: {
    // Virtual list implementation
    virtualList: `
      class VirtualList {
        constructor(container, options) {
          this.container = container;
          this.options = Object.assign({
            itemHeight: 50,
            amount: 10,
            buffer: 5,
            renderItem: () => {}
          }, options);
          
          this.totalItems = 0;
          this.startIndex = 0;
          this.endIndex = 0;
          this.scrollTop = 0;
          
          this.init();
        }
        
        init() {
          this.container.style.position = 'relative';
          this.container.style.overflow = 'auto';
          this.container.style.WebkitOverflowScrolling = 'touch';
          
          this.listHeight = this.container.clientHeight;
          this.visibleItems = Math.ceil(this.listHeight / this.options.itemHeight) + this.options.buffer;
          
          this.container.addEventListener('scroll', this.handleScroll.bind(this));
          
          this.placeholder = document.createElement('div');
          this.container.appendChild(this.placeholder);
          
          this.itemsContainer = document.createElement('div');
          this.itemsContainer.style.position = 'absolute';
          this.itemsContainer.style.top = '0';
          this.itemsContainer.style.left = '0';
          this.itemsContainer.style.width = '100%';
          this.container.appendChild(this.itemsContainer);
        }
        
        setItems(totalItems) {
          this.totalItems = totalItems;
          this.placeholder.style.height = \`\${totalItems * this.options.itemHeight}px\`;
          this.render();
        }
        
        handleScroll() {
          const scrollTop = this.container.scrollTop;
          
          if (Math.abs(scrollTop - this.scrollTop) > this.options.itemHeight / 2) {
            this.scrollTop = scrollTop;
            this.render();
          }
        }
        
        render() {
          const startIndex = Math.floor(this.scrollTop / this.options.itemHeight) - this.options.buffer;
          const endIndex = startIndex + this.visibleItems;
          
          const validStartIndex = Math.max(0, startIndex);
          const validEndIndex = Math.min(this.totalItems - 1, endIndex);
          
          if (validStartIndex !== this.startIndex || validEndIndex !== this.endIndex) {
            this.startIndex = validStartIndex;
            this.endIndex = validEndIndex;
            
            this.itemsContainer.innerHTML = '';
            this.itemsContainer.style.top = \`\${validStartIndex * this.options.itemHeight}px\`;
            
            for (let i = validStartIndex; i <= validEndIndex; i++) {
              const item = this.options.renderItem(i);
              if (item) {
                item.style.height = \`\${this.options.itemHeight}px\`;
                this.itemsContainer.appendChild(item);
              }
            }
          }
        }
      }
    `
  },
  
  // Debounce and throttle
  debounceThrottle: {
    // Debounce function
    debounce: `
      function debounce(func, wait) {
        let timeout;
        
        return function executedFunction(...args) {
          const later = () => {
            clearTimeout(timeout);
            func(...args);
          };
          
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
      }
    `,
    
    // Throttle function
    throttle: `
      function throttle(func, limit) {
        let inThrottle;
        
        return function executedFunction(...args) {
          if (!inThrottle) {
            func(...args);
            inThrottle = true;
            
            setTimeout(() => {
              inThrottle = false;
            }, limit);
          }
        };
      }
    `
  },
  
  // Efficient rendering
  efficientRendering: {
    // Request animation frame
    requestAnimationFrame: `
      function animateElement(element, properties, duration, easing = 'ease') {
        const startTime = performance.now();
        const initialValues = {};
        const targetValues = {};
        
        // Get initial values and parse target values
        for (const prop in properties) {
          const computedStyle = window.getComputedStyle(element);
          initialValues[prop] = parseFloat(computedStyle[prop]) || 0;
          targetValues[prop] = parseFloat(properties[prop]);
        }
        
        function animate(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          // Apply easing
          let easedProgress;
          switch (easing) {
            case 'linear':
              easedProgress = progress;
              break;
            case 'ease-in':
              easedProgress = progress * progress;
              break;
            case 'ease-out':
              easedProgress = progress * (2 - progress);
              break;
            case 'ease-in-out':
              easedProgress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
              break;
            default: // 'ease'
              easedProgress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
          }
          
          // Update properties
          for (const prop in properties) {
            const initialValue = initialValues[prop];
            const targetValue = targetValues[prop];
            const currentValue = initialValue + (targetValue - initialValue) * easedProgress;
            
            element.style[prop] = \`\${currentValue}px\`;
          }
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        }
        
        requestAnimationFrame(animate);
      }
    `,
    
    // Batch DOM updates
    batchDOMUpdates: `
      const batchDOM = {
        updates: [],
        scheduled: false,
        
        schedule(callback) {
          this.updates.push(callback);
          
          if (!this.scheduled) {
            this.scheduled = true;
            
            requestAnimationFrame(() => {
              const updates = this.updates;
              this.updates = [];
              this.scheduled = false;
              
              updates.forEach(update => update());
            });
          }
        }
      };
    `
  }
};

// Responsive Layout Patterns
const responsiveLayoutPatterns = {
  // Mobile-first grid
  mobileFirstGrid: {
    // Container
    container: {
      width: '100%',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      
      '@media (min-width: 576px)': {
        maxWidth: '540px'
      },
      
      '@media (min-width: 768px)': {
        maxWidth: '720px'
      },
      
      '@media (min-width: 992px)': {
        maxWidth: '960px'
      },
      
      '@media (min-width: 1200px)': {
        maxWidth: '1140px'
      }
    },
    
    // Row
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: '-0.5rem',
      marginRight: '-0.5rem'
    },
    
    // Column
    column: {
      position: 'relative',
      width: '100%',
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      
      // Column sizes
      sizes: {
        '1': { flex: '0 0 8.333333%', maxWidth: '8.333333%' },
        '2': { flex: '0 0 16.666667%', maxWidth: '16.666667%' },
        '3': { flex: '0 0 25%', maxWidth: '25%' },
        '4': { flex: '0 0 33.333333%', maxWidth: '33.333333%' },
        '5': { flex: '0 0 41.666667%', maxWidth: '41.666667%' },
        '6': { flex: '0 0 50%', maxWidth: '50%' },
        '7': { flex: '0 0 58.333333%', maxWidth: '58.333333%' },
        '8': { flex: '0 0 66.666667%', maxWidth: '66.666667%' },
        '9': { flex: '0 0 75%', maxWidth: '75%' },
        '10': { flex: '0 0 83.333333%', maxWidth: '83.333333%' },
        '11': { flex: '0 0 91.666667%', maxWidth: '91.666667%' },
        '12': { flex: '0 0 100%', maxWidth: '100%' }
      }
    }
  },
  
  // Responsive layouts
  responsiveLayouts: {
    // Stack to horizontal
    stackToHorizontal: {
      display: 'flex',
      flexDirection: 'column',
      
      '@media (min-width: 768px)': {
        flexDirection: 'row'
      }
    },
    
    // Sidebar layout
    sidebarLayout: {
      display: 'flex',
      flexDirection: 'column',
      
      '@media (min-width: 992px)': {
        flexDirection: 'row'
      },
      
      // Sidebar
      sidebar: {
        width: '100%',
        
        '@media (min-width: 992px)': {
          width: '300px',
          flexShrink: 0
        }
      },
      
      // Content
      content: {
        width: '100%',
        
        '@media (min-width: 992px)': {
          flex: 1
        }
      }
    },
    
    // Card grid
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '1rem',
      
      '@media (min-width: 576px)': {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      
      '@media (min-width: 992px)': {
        gridTemplateColumns: 'repeat(3, 1fr)'
      },
      
      '@media (min-width: 1200px)': {
        gridTemplateColumns: 'repeat(4, 1fr)'
      }
    },
    
    // Holy grail layout
    holyGrailLayout: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      
      // Header
      header: {
        flexShrink: 0
      },
      
      // Main
      main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        
        '@media (min-width: 992px)': {
          flexDirection: 'row'
        },
        
        // Left sidebar
        leftSidebar: {
          width: '100%',
          
          '@media (min-width: 992px)': {
            width: '250px',
            order: -1
          }
        },
        
        // Content
        content: {
          width: '100%',
          
          '@media (min-width: 992px)': {
            flex: 1
          }
        },
        
        // Right sidebar
        rightSidebar: {
          width: '100%',
          
          '@media (min-width: 992px)': {
            width: '250px'
          }
        }
      },
      
      // Footer
      footer: {
        flexShrink: 0
      }
    }
  },
  
  // Responsive navigation patterns
  responsiveNavigation: {
    // Horizontal to hamburger
    horizontalToHamburger: {
      // Desktop navigation
      desktopNav: {
        display: 'none',
        
        '@media (min-width: 992px)': {
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem'
        },
        
        // Link
        link: {
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: 500,
          transition: 'color 0.2s ease',
          
          '&:hover': {
            color: 'rgba(0, 102, 255, 0.9)'
          },
          
          '&.active': {
            color: 'rgba(0, 102, 255, 0.9)'
          }
        }
      },
      
      // Mobile navigation
      mobileNav: {
        display: 'block',
        
        '@media (min-width: 992px)': {
          display: 'none'
        }
      }
    },
    
    // Bottom navigation
    bottomNavigation: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '0.5rem 0',
      zIndex: 40,
      
      '@media (min-width: 992px)': {
        display: 'none'
      },
      
      // Item
      item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0.5rem',
        color: 'rgba(255, 255, 255, 0.6)',
        
        '&.active': {
          color: 'rgba(0, 102, 255, 0.9)'
        },
        
        // Icon
        icon: {
          fontSize: '1.5rem',
          marginBottom: '0.25rem'
        },
        
        // Label
        label: {
          fontSize: '0.75rem',
          fontWeight: 500
        }
      }
    },
    
    // Collapsible sidebar
    collapsibleSidebar: {
      // Sidebar
      sidebar: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '280px',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transform: 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        zIndex: 50,
        
        '&.open': {
          transform: 'translateX(0)'
        },
        
        '@media (min-width: 992px)': {
          transform: 'translateX(0)'
        }
      },
      
      // Content
      content: {
        marginLeft: 0,
        transition: 'margin-left 0.3s ease',
        
        '@media (min-width: 992px)': {
          marginLeft: '280px'
        }
      },
      
      // Toggle button
      toggleButton: {
        display: 'block',
        
        '@media (min-width: 992px)': {
          display: 'none'
        }
      }
    }
  },
  
  // Responsive typography
  responsiveTypography: {
    // Fluid typography
    fluidTypography: {
      // Heading 1
      h1: {
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        lineHeight: 1.2
      },
      
      // Heading 2
      h2: {
        fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
        lineHeight: 1.3
      },
      
      // Heading 3
      h3: {
        fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
        lineHeight: 1.4
      },
      
      // Heading 4
      h4: {
        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
        lineHeight: 1.4
      },
      
      // Body
      body: {
        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
        lineHeight: 1.5
      },
      
      // Small
      small: {
        fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
        lineHeight: 1.5
      }
    },
    
    // Responsive line height
    responsiveLineHeight: {
      // Tight
      tight: {
        lineHeight: 'clamp(1.2, 1.2 + 0.2vw, 1.3)'
      },
      
      // Normal
      normal: {
        lineHeight: 'clamp(1.4, 1.4 + 0.2vw, 1.5)'
      },
      
      // Relaxed
      relaxed: {
        lineHeight: 'clamp(1.6, 1.6 + 0.2vw, 1.7)'
      }
    },
    
    // Responsive text alignment
    responsiveTextAlignment: {
      // Center on mobile, left on desktop
      centerToLeft: {
        textAlign: 'center',
        
        '@media (min-width: 768px)': {
          textAlign: 'left'
        }
      },
      
      // Left on mobile, center on desktop
      leftToCenter: {
        textAlign: 'left',
        
        '@media (min-width: 768px)': {
          textAlign: 'center'
        }
      }
    }
  }
};

// Export modules
export {
  responsiveDesign,
  mobileFirstComponents,
  touchInteractions,
  deviceOptimizations,
  performanceOptimizations,
  responsiveLayoutPatterns
};
