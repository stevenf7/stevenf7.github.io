import React, { useEffect, useState, useRef, useCallback } from 'react';
import '../styles/backgroundIcons.scss';

// Import all background icons
import robot from '../images/backgroundIcons/robot.svg';
import aerial from '../images/backgroundIcons/aerial.svg';
import hand1 from '../images/backgroundIcons/hand1.svg';
import hand2 from '../images/backgroundIcons/hand2.svg';
import hand3 from '../images/backgroundIcons/hand3.svg';
import pet from '../images/backgroundIcons/pet.svg';
import computer from '../images/backgroundIcons/computer.svg';
import rover1 from '../images/backgroundIcons/rover1.svg';
import rover2 from '../images/backgroundIcons/rover2.svg';
import arms from '../images/backgroundIcons/arms.svg';
import robot2 from '../images/backgroundIcons/robot2.svg';
import arm from '../images/backgroundIcons/arm.svg';
// Import newly added icons
import industry from '../images/backgroundIcons/industry.svg';
import aiResearch from '../images/backgroundIcons/ai-research.svg';
import aiSophia from '../images/backgroundIcons/ai-sophia.svg';
import ai from '../images/backgroundIcons/ai.svg';
import robotAlien from '../images/backgroundIcons/robot-alien.svg';
import aerialImaging from '../images/backgroundIcons/aerial-imaging.svg';
import artificialIntelligence from '../images/backgroundIcons/artificial-intelligence.svg';
import robot3 from '../images/backgroundIcons/robot3.svg';
import petRobot from '../images/backgroundIcons/pet-robot.svg';
import robot4 from '../images/backgroundIcons/robot4.png';
import robot5 from '../images/backgroundIcons/robot5.png';
import robotAssistant from '../images/backgroundIcons/robot-assistant.png';
import dummy from '../images/backgroundIcons/dummy.svg';
import robot6 from '../images/backgroundIcons/robot6.svg';

const BackgroundIcons = () => {
  const [icons, setIcons] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const resizeTimeout = useRef(null);
  const generatedGrid = useRef(false);

  
  // All available icons
  const allIcons = [
    robot, aerial, hand1, hand2, hand3, pet, computer, rover1, rover2, arms, robot2, arm,
    // Add newly imported icons
    industry, aiResearch, aiSophia, ai, robotAlien, aerialImaging, artificialIntelligence, 
    robot3, petRobot, robot4, robot5, robotAssistant, dummy, robot6
  ];

  // Helper function to compute header height
  const getHeaderHeight = useCallback(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return 0;
    
    // Debug option - set to true to see the detected header area
    const DEBUG_HEADER_DETECTION = false;
    
    // Try to find the Navbar specific elements first based on your site structure
    const navbarSelectors = [
      '.section',
      '.navbar-wrapper',
      '.links-wrapper',
      'button[type="button"]' // Check for buttons in your navbar
    ];
    
    // Add fallback generic header selectors
    const headerSelectors = [
      'header', 
      '.header', 
      '#header', 
      'nav', 
      '.nav', 
      '#nav',
      '.navbar',
      '#navbar'
    ];
    
    let headerElement = null;
    
    // Function to get the parent section or container
    const getHeaderContainer = (element) => {
      if (!element) return null;
      
      // Try to find a parent section or container
      const section = element.closest('.section');
      const container = element.closest('.container');
      const navWrapper = element.closest('.navbar-wrapper');
      
      return section || container || navWrapper || element;
    };
    
    // Try each navbar-specific selector first
    for (const selector of navbarSelectors) {
      try {
        const element = document.querySelector(selector);
        if (element) {
          headerElement = getHeaderContainer(element);
          break;
        }
      } catch (e) {
        // Some complex selectors might not be supported in all browsers
        continue;
      }
    }
    
    // Fall back to generic selectors if needed
    if (!headerElement) {
      for (const selector of headerSelectors) {
        const element = document.querySelector(selector);
        if (element) {
          headerElement = getHeaderContainer(element);
          break;
        }
      }
    }
    
    // If we found a header element, measure its height and add some padding
    if (headerElement) {
      const headerRect = headerElement.getBoundingClientRect();
      // Add padding to ensure we're below the header
      const headerHeight = headerRect.height + 20;
      
      // Debug visualization
      if (DEBUG_HEADER_DETECTION) {
        const debugElement = document.createElement('div');
        debugElement.style.position = 'fixed';
        debugElement.style.top = '0';
        debugElement.style.left = '0';
        debugElement.style.width = '100%';
        debugElement.style.height = `${headerHeight}px`;
        debugElement.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        debugElement.style.zIndex = '9999';
        debugElement.style.pointerEvents = 'none';
        document.body.appendChild(debugElement);
        
        // Remove after 3 seconds
        setTimeout(() => {
          document.body.removeChild(debugElement);
        }, 3000);
      }
      
      return headerHeight;
    }
    
    // Get the current path to consider special cases
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    
    // Different default for different pages
    let defaultHeight = 80; // Minimum default
    
    // Use a percentage of viewport height, but with minimums
    const viewportBasedHeight = window.innerHeight * 0.15; // 15% of viewport height
    defaultHeight = Math.max(viewportBasedHeight, defaultHeight);
    
    // For resume page, use a smaller header area
    if (currentPath.includes('resume')) {
      defaultHeight = Math.min(defaultHeight, 60);
    }
    
    return defaultHeight;
  }, []);
  
  // Generate the grid based on current dimensions and path
  const generateGrid = useCallback(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    const grid = [];
    
    // Get current dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Get current path
    const path = window.location.pathname;
    
    // Check if we're on a mobile device
    const isMobileView = width <= 768;
    setIsMobile(isMobileView);
    
    // If on a very small screen, don't show icons at all
    if (width <= 480) {
      setIcons([]);
      return;
    }
    
    // Set spacing based on screen size and path
    let horizontalSpacing = 400; // Default spacing
    let verticalSpacing = 80;    // Default spacing
    
    // Increase spacing on resume page
    if (path.includes('resume')) {
      verticalSpacing = 300;
    }
    
    // Adjust spacing for mobile
    if (isMobileView) {
      horizontalSpacing = path.includes('resume') ? 350 : 200;
      verticalSpacing = path.includes('resume') ? 200 : 60;
    }
    
    // Calculate number of columns and rows
    const numCols = Math.ceil(width / horizontalSpacing); 
    const numRows = Math.ceil(height / verticalSpacing);
    
    // Dynamically compute header height
    const headerHeight = getHeaderHeight();
    const headerHeightPercent = (headerHeight / height) * 100;
    
    // Generate grid of icons
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        // Calculate position
        const x = (col * horizontalSpacing / width) * 100;
        const y = headerHeightPercent + ((row * verticalSpacing / height) * 100);
        
        // Skip if in header area
        if (y < headerHeightPercent) continue;
        
        // Set properties
        const initialRotation = Math.random() * 360;
        const opacity = 0.3;
        const iconIndex = Math.floor(Math.random() * allIcons.length);
        
        // Add icon to grid
        grid.push({
          id: `${row}-${col}`,
          src: allIcons[iconIndex],
          x,
          y,
          initialRotation,
          opacity
        });
      }
    }
    
    // Add extra icons on right edge
    const rightEdgeIcons = isMobileView ? 1 : 3;
    for (let i = 0; i < rightEdgeIcons; i++) {
      const row = Math.floor(Math.random() * numRows);
      const y = headerHeightPercent + ((row * verticalSpacing / height) * 100);
      
      if (y < headerHeightPercent) continue;
      
      const x = 100 + (Math.random() * 5);
      const initialRotation = Math.random() * 360;
      const opacity = 0.3;
      const iconIndex = Math.floor(Math.random() * allIcons.length);
      
      grid.push({
        id: `right-${i}`,
        src: allIcons[iconIndex],
        x,
        y,
        initialRotation,
        opacity
      });
    }
    
    // Update icons state
    setIcons(grid);
    
    // Mark that we've generated the grid
    generatedGrid.current = true;
    
    // Reset the flag
    if (typeof window !== 'undefined') {
      window.shouldRegenerateBackgroundGrid = false;
    }
  }, [allIcons, getHeaderHeight]);

  // Check if we need to regenerate the grid
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Helper function to check if we need to regenerate
    const checkRegeneration = () => {
      if (window.shouldRegenerateBackgroundGrid === true) {
        generateGrid();
      }
    };
    
    // Initial generation
    checkRegeneration();
    
    // Set up interval to check if we need to regenerate - use a longer interval to reduce CPU usage
    const intervalId = setInterval(checkRegeneration, 2000);
    
    // Also check on visibility change (when tab becomes active)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkRegeneration();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Handle window resize
    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      
      resizeTimeout.current = setTimeout(() => {
        // Force regeneration on resize
        if (typeof window !== 'undefined') {
          window.shouldRegenerateBackgroundGrid = true;
        }
      }, 500);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
    };
  }, [generateGrid]);

  // Don't render on very small screens
  if (isMobile && typeof window !== 'undefined' && window.innerWidth <= 480) {
    return null;
  }

  return (
    <div className="background-wallpaper">
      {icons.map(icon => (
        <img
          key={icon.id}
          src={icon.src}
          alt="Background Icon"
          className="wallpaper-icon"
          style={{
            position: 'absolute',
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: `rotate(${icon.initialRotation}deg)`,
            opacity: icon.opacity
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundIcons; 