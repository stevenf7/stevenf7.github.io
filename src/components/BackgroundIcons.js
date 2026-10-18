import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import "../styles/backgroundIcons.scss";

import robot from "../images/backgroundIcons/robot.svg";
import aerial from "../images/backgroundIcons/aerial.svg";
import hand1 from "../images/backgroundIcons/hand1.svg";
import hand2 from "../images/backgroundIcons/hand2.svg";
import hand3 from "../images/backgroundIcons/hand3.svg";
import pet from "../images/backgroundIcons/pet.svg";
import computer from "../images/backgroundIcons/computer.svg";
import rover1 from "../images/backgroundIcons/rover1.svg";
import rover2 from "../images/backgroundIcons/rover2.svg";
import arms from "../images/backgroundIcons/arms.svg";
import robot2 from "../images/backgroundIcons/robot2.svg";
import arm from "../images/backgroundIcons/arm.svg";
import industry from "../images/backgroundIcons/industry.svg";
import aiResearch from "../images/backgroundIcons/ai-research.svg";
import aiSophia from "../images/backgroundIcons/ai-sophia.svg";
import ai from "../images/backgroundIcons/ai.svg";
import robotAlien from "../images/backgroundIcons/robot-alien.svg";
import aerialImaging from "../images/backgroundIcons/aerial-imaging.svg";
import artificialIntelligence from "../images/backgroundIcons/artificial-intelligence.svg";
import robot3 from "../images/backgroundIcons/robot3.svg";
import petRobot from "../images/backgroundIcons/pet-robot.svg";
import robot4 from "../images/backgroundIcons/robot4.png";
import robot5 from "../images/backgroundIcons/robot5.png";
import robotAssistant from "../images/backgroundIcons/robot-assistant.png";
import dummy from "../images/backgroundIcons/dummy.svg";
import robot6 from "../images/backgroundIcons/robot6.svg";

const BackgroundIcons = () => {
  const [icons, setIcons] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const resizeTimeout = useRef(null);
  const lastViewportKey = useRef("");

  const allIcons = useMemo(
    () => [
      robot,
      aerial,
      hand1,
      hand2,
      hand3,
      pet,
      computer,
      rover1,
      rover2,
      arms,
      robot2,
      arm,
      industry,
      aiResearch,
      aiSophia,
      ai,
      robotAlien,
      aerialImaging,
      artificialIntelligence,
      robot3,
      petRobot,
      robot4,
      robot5,
      robotAssistant,
      dummy,
      robot6,
    ],
    []
  );

  const getHeaderHeight = useCallback(() => {
    if (typeof window === "undefined") return 0;
    const viewportHeight = window.innerHeight;
    const headerHeight = Math.max(80, viewportHeight * 0.15);
    const currentPath = window.location.pathname;
    if (currentPath.includes("resume")) {
      return Math.min(headerHeight, 60);
    }
    return headerHeight;
  }, []);

  const generateGrid = useCallback(() => {
    if (typeof window === "undefined") return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const path = window.location.pathname;
    const mobileView = width <= 768;
    setIsMobile(mobileView);

    if (width <= 480) {
      if (lastViewportKey.current !== "hidden") {
        setIcons([]);
        lastViewportKey.current = "hidden";
      }
      return;
    }

    const viewportKey = `${width}x${height}:${path}`;
    if (viewportKey === lastViewportKey.current) {
      return;
    }
    lastViewportKey.current = viewportKey;

    let horizontalSpacing = 420;
    let verticalSpacing = path.includes("resume") ? 300 : 120;

    if (mobileView) {
      horizontalSpacing = path.includes("resume") ? 350 : 240;
      verticalSpacing = path.includes("resume") ? 220 : 110;
    }

    const numCols = Math.ceil(width / horizontalSpacing);
    const numRows = Math.ceil(height / verticalSpacing);
    const headerHeight = getHeaderHeight();
    const headerHeightPercent = (headerHeight / height) * 100;
    const grid = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const x = ((col * horizontalSpacing) / width) * 100;
        const y = headerHeightPercent + ((row * verticalSpacing) / height) * 100;
        if (y < headerHeightPercent) continue;

        const seed = row * 17 + col * 31;
        const iconIndex = seed % allIcons.length;
        const initialRotation = (seed * 47) % 360;

        grid.push({
          id: `${row}-${col}`,
          src: allIcons[iconIndex],
          x,
          y,
          initialRotation,
          opacity: 0.22,
        });
      }
    }

    setIcons(grid);
  }, [allIcons, getHeaderHeight]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    generateGrid();

    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      resizeTimeout.current = setTimeout(() => {
        generateGrid();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
    };
  }, [generateGrid]);

  if (isMobile && typeof window !== "undefined" && window.innerWidth <= 480) {
    return null;
  }

  return (
    <div className="background-wallpaper" aria-hidden="true">
      {icons.map((icon) => (
        <img
          key={icon.id}
          src={icon.src}
          alt=""
          aria-hidden="true"
          className="wallpaper-icon"
          loading="lazy"
          style={{
            position: "absolute",
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: `rotate(${icon.initialRotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundIcons;
