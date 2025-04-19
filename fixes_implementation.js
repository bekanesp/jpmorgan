// JP Morgan Interview Preparation Tool - Fix Implementation

// Critical Issue Fix: Voice Playback Failure on iOS Devices
const fixiOSAudioPlayback = () => {
  // Detect iOS devices
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  if (isIOS) {
    // Use native iOS audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Implement iOS-specific audio buffer handling
    const loadAudio = async (audioUrl) => {
      const response = await fetch(audioUrl);
      const arrayBuffer = await response.arrayBuffer();
      return await audioContext.decodeAudioData(arrayBuffer);
    };
    
    // Replace existing playback function
    window.playRecordedAudio = async (audioUrl) => {
      try {
        const audioBuffer = await loadAudio(audioUrl);
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start(0);
        return source; // Return for stopping if needed
      } catch (error) {
        console.error('iOS audio playback error:', error);
        // Fallback to HTML5 Audio with error handling
        const fallbackAudio = new Audio(audioUrl);
        fallbackAudio.onerror = (e) => {
          alert('Unable to play audio. Please try downloading the recording instead.');
          // Offer download option
          offerAudioDownload(audioUrl);
        };
        return fallbackAudio.play();
      }
    };
  }
};

// Add download option as fallback
const offerAudioDownload = (audioUrl) => {
  const downloadLink = document.createElement('a');
  downloadLink.href = audioUrl;
  downloadLink.download = 'interview_response.mp3';
  downloadLink.textContent = 'Download Recording';
  downloadLink.className = 'audio-download-link';
  
  // Add to UI
  const audioContainer = document.querySelector('.audio-playback-container');
  audioContainer.appendChild(downloadLink);
};

// High Priority Fix: Market Data Loading Performance on Mobile
const optimizeMarketDataLoading = () => {
  // Implement data caching
  const marketDataCache = new Map();
  const CACHE_EXPIRY = 15 * 60 * 1000; // 15 minutes
  
  // Progressive loading function
  const loadMarketDataProgressively = async (dataType) => {
    // Check cache first
    const cacheKey = `market_data_${dataType}`;
    const cachedData = marketDataCache.get(cacheKey);
    
    if (cachedData && (Date.now() - cachedData.timestamp < CACHE_EXPIRY)) {
      return cachedData.data;
    }
    
    // Show loading indicator immediately
    showLoadingIndicator(dataType);
    
    // Load essential data first
    const essentialData = await fetchEssentialMarketData(dataType);
    
    // Update UI with essential data
    updateMarketDataUI(dataType, essentialData);
    
    // Then load full data in background
    fetchFullMarketData(dataType).then(fullData => {
      // Update cache
      marketDataCache.set(cacheKey, {
        data: fullData,
        timestamp: Date.now()
      });
      
      // Update UI with complete data
      updateMarketDataUI(dataType, fullData, true);
      hideLoadingIndicator(dataType);
    });
    
    return essentialData;
  };
  
  // Preload common market data on app initialization
  const preloadCommonMarketData = () => {
    // Detect when user is on WiFi for optimal preloading
    if (navigator.connection && 
        (navigator.connection.type === 'wifi' || navigator.connection.effectiveType === '4g')) {
      // Preload most commonly accessed market data
      setTimeout(() => {
        fetchEssentialMarketData('major_indices');
        fetchEssentialMarketData('forex_majors');
        fetchEssentialMarketData('treasury_yields');
      }, 3000); // Delay to prioritize initial app loading
    }
  };
  
  // Initialize
  preloadCommonMarketData();
  
  // Replace existing market data loading functions
  window.loadMarketData = loadMarketDataProgressively;
};

// High Priority Fix: Customizable Study Plan Discoverability
const improveStudyPlanDiscoverability = () => {
  // Add onboarding highlight
  const addStudyPlanOnboarding = () => {
    // Check if user has seen onboarding
    if (!localStorage.getItem('study_plan_onboarding_shown')) {
      // Create spotlight effect on study plan button
      const spotlight = document.createElement('div');
      spotlight.className = 'feature-spotlight';
      
      const studyPlanButton = document.querySelector('.study-plan-button');
      if (studyPlanButton) {
        // Position spotlight
        positionSpotlight(spotlight, studyPlanButton);
        
        // Add tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'feature-tooltip';
        tooltip.innerHTML = `
          <h3>Customize Your Study Plan</h3>
          <p>Create a personalized study plan based on your interview date and focus areas.</p>
          <button class="tooltip-button">Try it now</button>
          <button class="tooltip-dismiss">Dismiss</button>
        `;
        
        document.body.appendChild(spotlight);
        document.body.appendChild(tooltip);
        
        // Position tooltip
        positionTooltip(tooltip, studyPlanButton);
        
        // Add event listeners
        tooltip.querySelector('.tooltip-button').addEventListener('click', () => {
          openStudyPlanCustomization();
          removeSpotlight();
        });
        
        tooltip.querySelector('.tooltip-dismiss').addEventListener('click', removeSpotlight);
        
        // Mark as shown
        localStorage.setItem('study_plan_onboarding_shown', 'true');
      }
    }
  };
  
  // Add persistent entry point in dashboard
  const addPersistentEntryPoint = () => {
    const dashboard = document.querySelector('.dashboard-main-content');
    if (dashboard) {
      const studyPlanCard = document.createElement('div');
      studyPlanCard.className = 'dashboard-card study-plan-card';
      studyPlanCard.innerHTML = `
        <div class="card-icon">
          <i class="fas fa-calendar-alt"></i>
        </div>
        <div class="card-content">
          <h3>Your Study Plan</h3>
          <p>Customize your preparation schedule based on your interview date.</p>
          <button class="primary-button">Customize Plan</button>
        </div>
      `;
      
      // Insert as second item for prominence
      const firstCard = dashboard.querySelector('.dashboard-card');
      if (firstCard) {
        dashboard.insertBefore(studyPlanCard, firstCard.nextSibling);
      } else {
        dashboard.appendChild(studyPlanCard);
      }
      
      // Add event listener
      studyPlanCard.querySelector('button').addEventListener('click', openStudyPlanCustomization);
    }
  };
  
  // Add to bottom navigation
  const addToBottomNav = () => {
    const bottomNav = document.querySelector('.bottom-navigation');
    if (bottomNav) {
      // Check if we need to replace an item or add new
      const navItems = bottomNav.querySelectorAll('.nav-item');
      
      if (navItems.length >= 5) {
        // Replace least used item (based on analytics)
        const leastUsedItem = bottomNav.querySelector('.nav-item[data-feature="flashcards"]');
        if (leastUsedItem) {
          leastUsedItem.innerHTML = `
            <i class="fas fa-calendar-alt"></i>
            <span>Study Plan</span>
          `;
          leastUsedItem.setAttribute('data-feature', 'study-plan');
          leastUsedItem.addEventListener('click', openStudyPlanCustomization);
        }
      } else {
        // Add new item
        const newItem = document.createElement('div');
        newItem.className = 'nav-item';
        newItem.setAttribute('data-feature', 'study-plan');
        newItem.innerHTML = `
          <i class="fas fa-calendar-alt"></i>
          <span>Study Plan</span>
        `;
        newItem.addEventListener('click', openStudyPlanCustomization);
        bottomNav.appendChild(newItem);
      }
    }
  };
  
  // Initialize improvements
  setTimeout(() => {
    addStudyPlanOnboarding();
    addPersistentEntryPoint();
    addToBottomNav();
  }, 1000); // Slight delay to ensure DOM is ready
};

// Medium Priority Fix: Achievement Notification Frequency
const optimizeAchievementNotifications = () => {
  // Add user preferences for notification frequency
  const addNotificationPreferences = () => {
    const settingsSection = document.querySelector('.settings-notifications');
    if (settingsSection) {
      const achievementPrefs = document.createElement('div');
      achievementPrefs.className = 'settings-group';
      achievementPrefs.innerHTML = `
        <h3>Achievement Notifications</h3>
        <div class="setting-option">
          <label for="achievement-frequency">Notification Frequency</label>
          <select id="achievement-frequency">
            <option value="all">Show All Achievements</option>
            <option value="important" selected>Important Achievements Only</option>
            <option value="batched">Batch Notifications (Show once per session)</option>
            <option value="disabled">Disable Achievement Notifications</option>
          </select>
        </div>
        <div class="setting-option">
          <label for="achievement-sound">Notification Sound</label>
          <select id="achievement-sound">
            <option value="enabled" selected>Enabled</option>
            <option value="disabled">Disabled</option>
          </select>
        </div>
      `;
      
      settingsSection.appendChild(achievementPrefs);
      
      // Save preferences when changed
      document.getElementById('achievement-frequency').addEventListener('change', (e) => {
        localStorage.setItem('achievement_notification_frequency', e.target.value);
      });
      
      document.getElementById('achievement-sound').addEventListener('change', (e) => {
        localStorage.setItem('achievement_notification_sound', e.target.value);
      });
      
      // Load saved preferences
      const savedFrequency = localStorage.getItem('achievement_notification_frequency');
      if (savedFrequency) {
        document.getElementById('achievement-frequency').value = savedFrequency;
      }
      
      const savedSound = localStorage.getItem('achievement_notification_sound');
      if (savedSound) {
        document.getElementById('achievement-sound').value = savedSound;
      }
    }
  };
  
  // Implement batched notifications
  const implementBatchedNotifications = () => {
    // Create storage for batched achievements
    window.batchedAchievements = [];
    
    // Override achievement notification function
    const originalShowAchievement = window.showAchievementNotification;
    
    window.showAchievementNotification = (achievement) => {
      const frequency = localStorage.getItem('achievement_notification_frequency') || 'important';
      
      if (frequency === 'disabled') {
        // Just silently record the achievement
        return;
      }
      
      if (frequency === 'important' && !achievement.isImportant) {
        // Silently record non-important achievements
        return;
      }
      
      if (frequency === 'batched') {
        // Add to batch instead of showing immediately
        window.batchedAchievements.push(achievement);
        return;
      }
      
      // For 'all' setting or important achievements with 'important' setting
      originalShowAchievement(achievement);
    };
    
    // Show batched notifications when appropriate
    const showBatchedNotifications = () => {
      const frequency = localStorage.getItem('achievement_notification_frequency');
      
      if (frequency === 'batched' && window.batchedAchievements.length > 0) {
        // Create summary notification
        const notification = document.createElement('div');
        notification.className = 'achievement-notification batch-notification';
        
        const achievementCount = window.batchedAchievements.length;
        const importantCount = window.batchedAchievements.filter(a => a.isImportant).length;
        
        notification.innerHTML = `
          <div class="notification-icon">
            <i class="fas fa-trophy"></i>
          </div>
          <div class="notification-content">
            <h3>Session Achievements</h3>
            <p>You've earned ${achievementCount} new achievements${importantCount > 0 ? `, including ${importantCount} important ones` : ''}!</p>
            <button class="view-achievements">View All</button>
          </div>
          <button class="notification-close">×</button>
        `;
        
        document.body.appendChild(notification);
        
        // Add event listeners
        notification.querySelector('.view-achievements').addEventListener('click', () => {
          openAchievementsPanel();
          notification.remove();
        });
        
        notification.querySelector('.notification-close').addEventListener('click', () => {
          notification.remove();
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
          notification.classList.add('fade-out');
          setTimeout(() => notification.remove(), 500);
        }, 5000);
        
        // Clear batched achievements
        window.batchedAchievements = [];
      }
    };
    
    // Show batched notifications on certain events
    window.addEventListener('beforeunload', showBatchedNotifications);
    
    // Also show periodically if user has long session
    setInterval(showBatchedNotifications, 30 * 60 * 1000); // Every 30 minutes
    
    // Show when user completes major activities
    const activityCompletionEvents = [
      'mockInterviewCompleted',
      'studySessionCompleted',
      'quizCompleted'
    ];
    
    activityCompletionEvents.forEach(event => {
      document.addEventListener(event, showBatchedNotifications);
    });
  };
  
  // Initialize
  addNotificationPreferences();
  implementBatchedNotifications();
};

// Medium Priority Fix: Text Contrast in Dark Mode
const fixDarkModeContrast = () => {
  // Update CSS variables with improved contrast
  const updateContrastRatios = () => {
    const darkModeStyles = document.createElement('style');
    darkModeStyles.textContent = `
      [data-theme="dark"] {
        /* Increase text contrast */
        --text-primary: rgba(255, 255, 255, 0.95);
        --text-secondary: rgba(255, 255, 255, 0.85);
        --text-tertiary: rgba(255, 255, 255, 0.75);
        
        /* Improve background contrast */
        --bg-card: rgba(26, 32, 44, 0.95);
        --bg-input: rgba(45, 55, 72, 0.9);
        
        /* Enhance border visibility */
        --border-subtle: rgba(255, 255, 255, 0.15);
        
        /* Improve button contrast */
        --button-secondary-bg: rgba(45, 55, 72, 0.95);
        --button-secondary-text: rgba(255, 255, 255, 0.95);
      }
      
      /* Fix specific problem areas */
      [data-theme="dark"] .chart-legend-item {
        color: rgba(255, 255, 255, 0.9);
      }
      
      [data-theme="dark"] .analytics-card-value {
        color: rgba(255, 255, 255, 0.95);
      }
      
      [data-theme="dark"] .input-label {
        color: rgba(255, 255, 255, 0.9);
      }
      
      [data-theme="dark"] .tab-button:not(.active) {
        color: rgba(255, 255, 255, 0.8);
      }
      
      [data-theme="dark"] .market-data-value {
        color: rgba(255, 255, 255, 0.95);
      }
      
      [data-theme="dark"] .market-data-label {
        color: rgba(255, 255, 255, 0.85);
      }
    `;
    
    document.head.appendChild(darkModeStyles);
  };
  
  // Initialize
  updateContrastRatios();
};

// Medium Priority Fix: Modal Dismissal on Small Screens
const improveModalDismissal = () => {
  // Enhance all modals with improved dismissal
  const enhanceModals = () => {
    // Find all modals
    const modals = document.querySelectorAll('.modal-container');
    
    modals.forEach(modal => {
      // Add swipe-to-dismiss
      enableSwipeToDismiss(modal);
      
      // Enlarge close button
      const closeButton = modal.querySelector('.modal-close');
      if (closeButton) {
        closeButton.style.width = '44px';
        closeButton.style.height = '44px';
        closeButton.style.fontSize = '24px';
        closeButton.style.display = 'flex';
        closeButton.style.alignItems = 'center';
        closeButton.style.justifyContent = 'center';
      }
      
      // Add tap outside to dismiss
      enableTapOutsideToDismiss(modal);
      
      // Add back button support
      enableBackButtonDismissal(modal);
    });
  };
  
  // Enable swipe down to dismiss
  const enableSwipeToDismiss = (modal) => {
    let startY = 0;
    let currentY = 0;
    const modalContent = modal.querySelector('.modal-content');
    
    if (!modalContent) return;
    
    modalContent.addEventListener('touchstart', (e) => {
      // Only enable swipe dismiss on modal header or if content is scrolled to top
      const isAtScrollTop = modalContent.scrollTop === 0;
      const isHeader = e.target.closest('.modal-header') !== null;
      
      if (isAtScrollTop || isHeader) {
        startY = e.touches[0].clientY;
        modalContent.style.transition = 'none';
      }
    }, { passive: true });
    
    modalContent.addEventListener('touchmove', (e) => {
      if (startY === 0) return;
      
      currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;
      
      // Only allow swiping down, not up
      if (deltaY > 0) {
        modalContent.style.transform = `translateY(${deltaY}px)`;
        
        // Add opacity effect
        const opacity = 1 - Math.min(deltaY / 300, 0.6);
        modalContent.style.opacity = opacity;
      }
    }, { passive: true });
    
    modalContent.addEventListener('touchend', () => {
      if (startY === 0) return;
      
      const deltaY = currentY - startY;
      
      // Reset transition
      modalContent.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      
      // If swiped down enough, dismiss modal
      if (deltaY > 100) {
        modalContent.style.transform = `translateY(100%)`;
        modalContent.style.opacity = 0;
        
        setTimeout(() => {
          closeModal(modal);
        }, 300);
      } else {
        // Reset position
        modalContent.style.transform = '';
        modalContent.style.opacity = '';
      }
      
      startY = 0;
      currentY = 0;
    }, { passive: true });
  };
  
  // Enable tap outside to dismiss
  const enableTapOutsideToDismiss = (modal) => {
    modal.addEventListener('click', (e) => {
      // Check if click is directly on the modal container (outside content)
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  };
  
  // Enable back button to dismiss
  const enableBackButtonDismissal = (modal) => {
    // When modal opens
    const modalOpenHandler = () => {
      // Store current state
      const currentState = history.state;
      
      // Push new state
      history.pushState({ modalOpen: true }, '');
      
      // Handle back button
      const popstateHandler = (e) => {
        closeModal(modal);
        window.removeEventListener('popstate', popstateHandler);
      };
      
      window.addEventListener('popstate', popstateHandler);
    };
    
    // Add event listener for modal opening
    modal.addEventListener('modalopen', modalOpenHandler);
  };
  
  // Helper to close modal
  const closeModal = (modal) => {
    // Check if modal has custom close method
    if (typeof window.closeModal === 'function') {
      window.closeModal(modal.id);
    } else {
      // Fallback to adding closed class and removing from DOM
      modal.classList.add('closed');
      setTimeout(() => {
        modal.style.display = 'none';
        modal.dispatchEvent(new CustomEvent('modalclose'));
      }, 300);
    }
  };
  
  // Initialize for existing modals
  enhanceModals();
  
  // Observer for dynamically added modals
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1 && node.classList.contains('modal-container')) {
          enhanceModals();
        }
      });
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
};

// Initialize all fixes
document.addEventListener('DOMContentLoaded', () => {
  console.log('Applying JP Morgan interview tool fixes based on user testing...');
  
  // Critical fixes
  fixiOSAudioPlayback();
  
  // High priority fixes
  optimizeMarketDataLoading();
  improveStudyPlanDiscoverability();
  
  // Medium priority fixes
  optimizeAchievementNotifications();
  fixDarkModeContrast();
  improveModalDismissal();
  
  console.log('All fixes applied successfully!');
});
