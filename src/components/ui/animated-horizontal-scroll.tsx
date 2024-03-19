import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function AnimatedHorizontalScroll({ items }: any) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", right: "0px", bottom: "104%" }}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={{
            transform: "rotate(-90deg)",
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            style={{
              strokeDashoffset: 0,
              strokeWidth: "15%",
              fill: "none",
              stroke: "#C0C0C0",
            }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            style={{
              strokeDashoffset: 0,
              strokeWidth: "15%",
              stroke: "#87CEEB",
              pathLength: scrollXProgress,
            }}
          />
        </svg>
      </div>
      <ul
        ref={ref}
        style={{
          display: "flex",
          listStyle: "none",
          overflowX: "scroll",
        }}
      >
        {items.map((item: any, index: number) => (
          <li key={index} style={{ flex: "0 0 auto", margin: "0 20px 20px 0" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
