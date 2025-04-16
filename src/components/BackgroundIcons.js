import React, { useEffect, useState, useRef } from 'react';
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

const BackgroundIcons = () => {
  const [icons, setIcons] = useState([]);
  const gridGenerated = useRef(false);
  const resizeTimeout = useRef(null);
  
  // All available icons
  const allIcons = [
    robot, aerial, hand1, hand2, hand3, pet, computer, rover1, rover2, arms, robot2, arm
  ];

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
  }, []);
  
  // Function to generate the grid
  const generateGrid = () => {
    const grid = [];
    
    // Get window dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Fixed spacing between icons (in pixels)
    const horizontalSpacing = 400; // pixels between icons horizontally
    const verticalSpacing = 80;    // pixels between icons vertically
    
    // Calculate number of columns and rows based on fixed spacing
    const numCols = Math.ceil(width / horizontalSpacing); 
    const numRows = Math.ceil(height / verticalSpacing);
    
    // Header height in pixels (adjust as needed)
    const headerHeight = 80;
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
        
        // Random rotation between -15 and 15 degrees
        const rotation = Math.random() * 30 - 15;
        
        // Fixed opacity of 0.3
        const opacity = 0.3;
        
        // Random icon from the array
        const iconIndex = Math.floor(Math.random() * allIcons.length);
        
        grid.push({
          id: `${row}-${col}`,
          src: allIcons[iconIndex],
          x,
          y,
          rotation,
          opacity
        });
      }
    }
    
    // Add extra icons on the rightmost side
    const rightEdgeIcons = 3; // Number of extra icons on the right edge
    for (let i = 0; i < rightEdgeIcons; i++) {
      const row = Math.floor(Math.random() * numRows);
      const y = headerHeightPercent + ((row * verticalSpacing / height) * 100);
      
      // Skip if the icon would be in the header area
      if (y < headerHeightPercent) continue;
      
      // Position slightly to the right of the rightmost column
      const x = 100 + (Math.random() * 5); // 100% + random offset
      
      // Random rotation between -15 and 15 degrees
      const rotation = Math.random() * 30 - 15;
      
      // Fixed opacity of 0.3
      const opacity = 0.3;
      
      // Random icon from the array
      const iconIndex = Math.floor(Math.random() * allIcons.length);
      
      grid.push({
        id: `right-${i}`,
        src: allIcons[iconIndex],
        x,
        y,
        rotation,
        opacity
      });
    }
    
    setIcons(grid);
  };

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
            transform: `rotate(${icon.rotation}deg)`,
            opacity: icon.opacity
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundIcons; 