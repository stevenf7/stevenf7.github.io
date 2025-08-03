import React, { useEffect, useState } from "react"
import Fade from "react-reveal/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import { Typewriter } from "react-simple-typewriter"
import imgUrl from "../images/headerphoto.jpg"

const Header = () => {
  const { language } = useLanguage();
  // Track orientation for responsive adjustments, initialize with a default value
  const [isLandscape, setIsLandscape] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // This code only runs in the browser after component mounts
    // Check if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      // Detect iOS
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      setIsIOS(iOS);
      
      // Detect if desktop
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
      setIsDesktop(!isMobile);
      
      // Set initial value
      setIsLandscape(window.innerWidth > window.innerHeight);
      
      const handleResize = () => {
        setIsLandscape(window.innerWidth > window.innerHeight);
        setIsDesktop(window.innerWidth >= 1024); // Consider devices with width >= 1024px as desktop
      };

      window.addEventListener("resize", handleResize);
      // Initial check
      handleResize();
      
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // For iOS devices, use an img tag approach
  if (isIOS) {
    return (
      <div className="section" id="home">
        <div className="container">
          <div className="header-wrapper ios-device">
            {/* Background image for iOS */}
            <div 
              className="ios-background" 
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(${imgUrl})`,
              }}
            />
            
            <div className="content-wrapper">
              <Fade bottom>
                <h2>
                  {getText({ en: "Hi, I am", zh: "你好,我是" }, language)} {getText(data.name, language)}{" "}
                </h2>
              </Fade>

              <Fade bottom>
                <div className="heading-wrapper">
                  <h1>
                    {getText({ en: "I am a", zh: "我是一名" }, language)}{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      <Typewriter
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1200}
                        words={language === 'zh' ? 
                          ["机器人工程师", "飞行员", "程序猿", "学生", "单簧管演奏者", "固件开发工程师"] :
                          ["Robotics Engineer", "Pilot", "Code Monkey", "Accordionist", "Simulation Developer", "Student", "Clarinetist", "Firmware Developer"]
                        }
                      />
                    </span>
                  </h1>
                </div>
              </Fade>

              <Fade bottom>
                <p>{getText(data.headerParagraph, language)}</p>
              </Fade>

              <Fade bottom>
                <a
                  href={`https://www.linkedin.com/in/stevenfeng7/`}
                  className="primary-btn"
                >
                  {getText({ en: "CONNECT WITH ME!", zh: "与我联系！" }, language)}
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // For non-iOS devices, use the original implementation
  return (
    <div className="section" id="home">
      <div className="container">
        <div 
          className={`header-wrapper ${isLandscape ? 'landscape' : 'portrait'} ${isDesktop ? 'desktop' : 'mobile'}`}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
              imgUrl +
              ")",
          }}
        >
          <Fade bottom>
            <h2>
              {getText({ en: "Hi, I am", zh: "你好,我是" }, language)} {getText(data.name, language)}{" "}
            </h2>
          </Fade>

          <Fade bottom>
            <div className="heading-wrapper">
              <h1>
                {getText({ en: "I am a", zh: "我是一名" }, language)}{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1200}
                    words={language === 'zh' ? 
                      ["机器人工程师", "飞行员", "程序猿", "学生", "单簧管演奏者", "固件开发工程师"] :
                      ["Robotics Engineer", "Pilot", "Code Monkey", "Accordionist", "Simulation Developer", "Student", "Clarinetist", "Firmware Developer"]
                    }
                  />
                </span>
              </h1>
            </div>
          </Fade>

          <Fade bottom>
            <p>{getText(data.headerParagraph, language)}</p>
          </Fade>

          <Fade bottom>
            <a
              href={`https://www.linkedin.com/in/stevenfeng7/`}
              className="primary-btn"
            >
              {getText({ en: "CONNECT WITH ME!", zh: "与我联系！" }, language)}
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Header
