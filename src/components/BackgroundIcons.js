import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  const initialized = useRef(false);

  // All available icons
  const allIcons = [
    robot, aerial, hand1, hand2, hand3, pet, computer, rover1, rover2, arms, robot2, arm
  ];

  // Create a grid of icons based on window size
  const createIconGrid = useCallback(() => {
    const grid = [];
    
    // Get window dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Calculate number of rows and columns based on window size
    // Significantly more horizontal spacing (one per ~600px width), significantly less vertical spacing (one per ~100px height)
    const numCols = Math.floor(width / 600) + 1; 
    const numRows = Math.floor(height / 100) + 1;
    
    // Navbar height in pixels (adjust as needed)
    const navbarHeight = 80;
    // Convert navbar height to percentage of viewport height
    const navbarHeightPercent = (navbarHeight / height) * 100;
    
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        // Calculate position with even spacing
        const x = (col * (100 / (numCols - 1 || 1))); // Even horizontal spacing
        
        // Calculate y position, ensuring it's below the navbar
        // Add navbarHeightPercent to ensure icons start below the navbar
        const y = navbarHeightPercent + ((row * (100 - navbarHeightPercent) / (numRows - 1 || 1))); // Even vertical spacing
        
        // Skip if the icon would be in the navbar area
        if (y < navbarHeightPercent) continue;
        
        // Random rotation between -15 and 15 degrees
        const rotation = Math.random() * 30 - 15;
        
        // Random scale between 0.8 and 1.2
        const scale = 0.8 + Math.random() * 0.4;
        
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
          scale,
          opacity
        });
      }
    }
    
    return grid;
  }, [allIcons]);

  // Initialize icons only once
  useEffect(() => {
    if (!initialized.current) {
      setIcons(createIconGrid());
      initialized.current = true;
    }
  }, [createIconGrid]);

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
            transform: `rotate(${icon.rotation}deg) scale(${icon.scale})`,
            opacity: icon.opacity
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundIcons; 