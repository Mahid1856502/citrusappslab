"use client";
import React, { useState, useEffect } from "react";

// Define the props for the Typewriter component
interface TypewriterProps {
  textArray: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  textArray,
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1500,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentText = textArray[index % textArray.length];

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    index,
    textArray,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  return (
    <div className="typewriter text-white text-2xl md:text-6xl font-bold leading-normal mb-3">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </div>
  );
};

export default Typewriter;
