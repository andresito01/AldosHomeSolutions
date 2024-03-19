"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content: JSX.Element;
};

interface TabsProps {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState<Tab>(tabs[0]);
  const [displayedContent, setDisplayedContent] = useState(tabs[0].content);

  // Update displayed content after animation completes to prevent layout shift
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayedContent(active.content);
    }, 500); // Adjust delay based on animation duration

    return () => clearTimeout(timeoutId);
  }, [active.content]);

  const handleTabChange = (tab: React.SetStateAction<Tab>) => {
    setActive(tab);
    // Optionally, initiate any animation reset/logic here
  };

  // Animation for the tab click
  const tabVariants = {
    whileTap: { scale: 0.95 },
  };

  // Animation for the active tab
  const activeTabVariants = {
    initial: { scale: 1 },
    animate: { scale: 1.05 },
    transition: { type: "spring", stiffness: 300 },
  };

  const backgroundVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Content transition animationsss
  const contentVariants = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      opacity: 1,
      scale: [1, 0.9, 0.9, 1], // Keyframes: Scale down, pause, scale up
      transition: {
        scale: {
          duration: 3, // Adjusted total duration to speed up the animation
          times: [0, 0, (0.1 + 1) / 3, 1], // Adjusted times for a shorter pause and quicker scale up
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.3,
        },
      },
    },
    exit: {
      opacity: 1,
      scale: 1,
      transition: {
        scale: {
          duration: 1, // Keeping the exit scale down duration
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.3,
        },
      },
    },
  };

  return (
    <div className={cn("flex flex-col md:flex-row p-4", containerClassName)}>
      {/* Tab Titles Column */}
      <div className="flex flex-col mr-4 justify-start">
        {tabs.map((tab, idx) => (
          <motion.button
            key={tab.title}
            onClick={() => handleTabChange(tab)}
            variants={tabVariants}
            whileTap="whileTap"
            className={cn(
              "px-4 py-2 mb-4 mr-4",
              tabClassName,
              "bg-gray-200 text-black rounded-full"
            )}
            // Apply active tab animation
            animate={
              active.value === tab.value
                ? activeTabVariants.animate
                : activeTabVariants.initial
            }
            initial={activeTabVariants.initial}
            transition={activeTabVariants.transition}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              variants={backgroundVariants}
              initial="hidden"
              animate={active.value === tab.value ? "visible" : "hidden"}
            />
            <span
              className={cn("relative z-10", tabClassName, {
                [activeTabClassName || "text-white"]:
                  active.value === tab.value,
              })}
            >
              {tab.title}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <div className={cn("flex-1 p-4 rounded-lg relative", contentClassName)}>
        <AnimatePresence mode="wait">
          <motion.div key={active.value} className="absolute w-full h-full">
            {displayedContent}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
