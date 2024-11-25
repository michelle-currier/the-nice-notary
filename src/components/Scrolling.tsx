import React from "react";

interface ScrollingTextProps {
  text: string; // The text to scroll
  speed?: number; // Scrolling speed in seconds (default: 10)
}
const ScrollingText: React.FC<ScrollingTextProps> = ({ text, speed = 10 }) => {
  return (
    <div className="scrolling-text-container">
      <div
        className="scrolling-text text-teal-200"
        style={{
          animation: `scroll ${speed}s linear infinite`,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ScrollingText;
