import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useLanguage } from "../../contexts/LanguageContext";
import data, { getText } from "../../data";

const HeroTypewriter = () => {
  const { language } = useLanguage();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const specialtyWords = getText(data.heroSpecialties, language);
  const primarySpecialty = Array.isArray(specialtyWords)
    ? specialtyWords[0]
    : specialtyWords;

  if (!hasMounted || !Array.isArray(specialtyWords)) {
    return primarySpecialty;
  }

  return (
    <Typewriter
      key={language}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1200}
      words={specialtyWords}
    />
  );
};

export default HeroTypewriter;
