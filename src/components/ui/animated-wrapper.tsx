import React, { useRef } from "react";
import { useInView } from "framer-motion";

// Types for props
interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number; // Delay in seconds
  direction?: "left" | "right" | "up" | "down";
  offset?: number; // Offset for the animation (in pixels)
  animationDuration?: number; // Duration of the animation (in seconds)
  style?: React.CSSProperties; // Additional custom styles
  overlayOpacity?: number; // Optional overlay opacity
}

export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
  direction = "right",
  offset = 100,
  animationDuration = 0.9,
  style,
  overlayOpacity = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Convert direction to transform value
  let transform;
  switch (direction) {
    case "left":
      transform = `translateX(-${offset}px)`;
      break;
    case "right":
      transform = `translateX(${offset}px)`;
      break;
    case "up":
      transform = `translateY(-${offset}px)`;
      break;
    case "down":
      transform = `translateY(${offset}px)`;
      break;
    default:
      transform = "none";
  }

  const animationStyle: React.CSSProperties = {
    display: "block",
    transform: isInView ? "none" : transform,
    opacity: isInView ? 1 : 0,
    transition: `transform ${animationDuration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s, opacity ${animationDuration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
    ...style, // Merge custom styles
  };

  // Optional overlay styles
  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
    zIndex: 1,
  };

  return (
    <div ref={ref} style={{ position: "relative", ...style }}>
      {overlayOpacity > 0 && <div style={overlayStyle}></div>}
      <div style={animationStyle}>{children}</div>
    </div>
  );
};
