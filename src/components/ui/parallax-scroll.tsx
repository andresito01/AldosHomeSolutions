import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  parallaxItems,
  className,
}: {
  parallaxItems: React.ReactNode[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const half = Math.ceil(parallaxItems.length / 2);

  const firstPart = parallaxItems.slice(0, half);
  const secondPart = parallaxItems.slice(half);

  return (
    <div
      className={cn("h-[35rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 max-w-6/12 mx-auto gap-10 py-35 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              {el}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              {el}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
