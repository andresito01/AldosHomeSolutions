import React, { useRef, CSSProperties, ReactNode } from "react";
import { useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode[]; // Assuming each child is an element in an array
  styles?: CSSProperties;
  background?: {
    image?: string;
    gradient?: string;
    color?: string;
  };
  direction?: "right" | "left";
  overlayOpacity?: number;
  delaySteps?: number; // Delay between each child animation in seconds
}

export function AnimatedSection({
  children,
  styles,
  background,
  direction,
  overlayOpacity,
  delaySteps = 0.5, // Default delay of 0.5 seconds between each child
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Define default styles for the section
  const defaultSectionStyles = {
    boxSizing: "border-box",
    width: "100%",
    height: "101vh",
    overflow: "hidden",
  };

  // Define default styles for the inner wrapper
  const defaultWrapperStyles: CSSProperties = {
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: "0px",
    padding: "50px",
    position: "relative", // Add position relative here
    width: "100%", // Ensure it fills the section
    height: "100%", // Ensure it fills the section
  };

  // Define the overlay style
  const overlayStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity || 0})`,
    zIndex: 1,
  };

  // Merge default styles with custom styles passed via props
  const mergedSectionStyles = { ...defaultSectionStyles, ...styles };

  // Determine background style based on the provided background prop
  let backgroundStyle;
  if (background?.image) {
    backgroundStyle = {
      backgroundImage: `url(${background.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  } else if (background?.gradient) {
    backgroundStyle = {
      background: background.gradient,
    };
  } else if (background?.color) {
    backgroundStyle = {
      background: background.color,
    };
  }

  // Determine the transform direction based on the direction prop
  const transformDirection =
    direction === "right" ? "translateX(100px)" : "translateX(-100px)";

  // Helper function to calculate delay
  const calculateDelay = (index: number) => {
    return isInView ? index * delaySteps : 0;
  };

  return (
    <section ref={ref} style={{ ...mergedSectionStyles, ...backgroundStyle }}>
      <div style={defaultWrapperStyles}>
        <div style={overlayStyle}></div>
        {React.Children.map(children, (child, index) => (
          <div
            style={{
              display: "block",
              transform: isInView ? "none" : transformDirection,
              opacity: isInView ? 1 : 0,
              transition: `transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${calculateDelay(
                index
              )}s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${calculateDelay(
                index
              )}s`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </section>
  );
}
