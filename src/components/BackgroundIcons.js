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

const BackgroundIcons = () => {
  const [icons, setIcons] = useState([]);
  const gridGenerated = useRef(false);
  const resizeTimeout = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // All available icons
  const allIcons = [
    robot, aerial, hand1, hand2, hand3, pet, computer, rover1, rover2, arms, robot2, arm,
    // Add newly imported icons
    industry, aiResearch, aiSophia, ai, robotAlien, aerialImaging, artificialIntelligence, 
    robot3, petRobot, robot4, robot5, robotAssistant
  ];

  // Function to generate the grid - memoized with useCallback
  const generateGrid = useCallback(() => {
    const grid = [];
    
    // Get window dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Check if we're on a mobile device
    const isMobileView = width <= 768;
    setIsMobile(isMobileView);
    
    // If on a very small screen, don't show icons at all
    if (width <= 480) {
      setIcons([]);
      return;
    }
    
    // Adjust spacing based on screen size
    let horizontalSpacing = 400; // Default spacing
    let verticalSpacing = 80;    // Default spacing
    
    if (isMobileView) {
      horizontalSpacing = 200; // Closer spacing on mobile
      verticalSpacing = 60;    // Closer spacing on mobile
    }
    
    // Calculate number of columns and rows based on fixed spacing
    const numCols = Math.ceil(width / horizontalSpacing); 
    const numRows = Math.ceil(height / verticalSpacing);
    
    // Header height in pixels (adjust as needed)
    const headerHeight = 300;
    // Convert header height to percentage of viewport height
    const headerHeightPercent = (headerHeight / height) * 100;
    
    // Add icons in a grid pattern
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        // Calculate position with fixed pixel spacing
        // Convert to percentage for responsive positioning
        const x = (col * horizontalSpacing / width) * 100;
        const y = headerHeightPercent + ((row * verticalSpacing / height) * 100);
        
        // Skip if the icon would be in the header area
        if (y < headerHeightPercent) continue;
        
        // Random initial rotation offset for each icon
        const initialRotation = Math.random() * 360;
        
        // Fixed opacity of 0.3
        const opacity = 0.3;
        
        // Random icon from the array
        const iconIndex = Math.floor(Math.random() * allIcons.length);
        
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
    
    // Add extra icons on the rightmost side
    const rightEdgeIcons = isMobileView ? 1 : 3; // Fewer extra icons on mobile
    for (let i = 0; i < rightEdgeIcons; i++) {
      const row = Math.floor(Math.random() * numRows);
      const y = headerHeightPercent + ((row * verticalSpacing / height) * 100);
      
      // Skip if the icon would be in the header area
      if (y < headerHeightPercent) continue;
      
      // Position slightly to the right of the rightmost column
      const x = 100 + (Math.random() * 5); // 100% + random offset
      
      // Random initial rotation offset for each icon
      const initialRotation = Math.random() * 360;
      
      // Fixed opacity of 0.3
      const opacity = 0.3;
      
      // Random icon from the array
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
    
    setIcons(grid);
  }, [allIcons]); // Add allIcons as a dependency

  // Generate the grid only once on mount
  useEffect(() => {
    if (!gridGenerated.current) {
      generateGrid();
      gridGenerated.current = true;
    }
    
    // Set up resize listener
    const handleResize = () => {
      // Clear any existing timeout
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      
      // Set a new timeout to update the grid after 500ms of no resize events
      resizeTimeout.current = setTimeout(() => {
        generateGrid();
      }, 500);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
    };
  }, [generateGrid]); // Add generateGrid as a dependency

  // Don't render anything on very small screens
  if (isMobile && window.innerWidth <= 480) {
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