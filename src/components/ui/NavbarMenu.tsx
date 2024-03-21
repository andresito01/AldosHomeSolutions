"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { FaBars } from "react-icons/fa"; // Importing the menu icon
import { IoIosClose } from "react-icons/io"; // Importing close menu icon
import { useAnimate, stagger, motion } from "framer-motion";
import { NAV_LINKS } from "../../../constants";

interface NavLink {
  id: string;
  label: string;
}

const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function useMenuAnimation(isMobileView: boolean, isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isMobileView) {
      // Check if the view is in mobile mode

      // Define menu animations based on whether the menu is open or closed
      const menuAnimations = isOpen
        ? [
            // Animation for opening the menu
            [
              "nav",
              { transform: "translateX(0%)" },
              { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }, // Animation easing and duration
            ],
            [
              "li",
              { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
              { delay: stagger(0.05), at: "-0.1" }, // Staggered animation delay for list items
            ],
          ]
        : // Only apply animation for closing menu if it is currently open
          [
            // Animation for closing the menu
            [
              "li",
              { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
              { delay: stagger(0.05, { from: "last" }), at: "<" }, // Staggered animation delay for list items
            ],
            ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }], // Move nav off-screen
          ]; // No animations when closing menu if it's already closed
      // Animate menu elements along with the menu toggle button
      if (isOpen) {
        console.log("Animating menu elements for menu opening.");
      } else {
        console.log("Animating menu elements for menu closing.");
      }
      animate([
        [
          "path.top",
          { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
          { at: "<" }, // Update path shape for top bar depending on menu state
        ],
        ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }], // Toggle middle bar opacity
        [
          "path.bottom",
          { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
          { at: "<" }, // Update path shape for bottom bar depending on menu state
        ],
        ...menuAnimations, // Include menu animations
      ]);
    }
  }, [isMobileView, isOpen]); // Re-run the effect when isMobileView or isOpen changes

  return scope; // Return the animated scope
}

export function Navbar({ className }: { className?: string }) {
  const [showLinks, setShowLinks] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isMobileView, isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
        setShowLinks(false);
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex w-full items-center justify-between dark:bg-black bg-white ${className}`}
      ref={scope}
    >
      <div className="h-full flex items-center pl-4 pr-8">
        <div className="py-4">
          <Image
            src={"/CompanyLogo.png"}
            alt="HomeLogo"
            height={0}
            width={200}
          />
        </div>
      </div>

      {/* Menu button for smaller screens */}
      {isMobileView && (
        <button
          className="absolute top-28 right-4 p-2 block md:hidden text-3xl text-black dark:text-white hover:opacity-90 hover:bg-amber-600/50"
          onClick={toggleLinks}
        >
          <FaBars />
        </button>
      )}

      {/* Overlay for the navigation drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-20"
          onClick={toggleLinks}
        />
      )}

      {/* Navigation links */}
      {isMobileView ? ( // Only apply animation in mobile mode
        <motion.div
          className={`md:flex ${
            isOpen
              ? "fixed z-30 top-0 bottom-0 right-0 flex flex-col w-1/3 bg-gradient-to-r from-amber-300 to-amber-600"
              : "h-0 w-0"
          }`}
          animate={{ x: isOpen ? 0 : 200 }} // Animate in or out based on isOpen state
          transition={{ ease: "easeOut", duration: 0.6 }} // Animation easing and duration
        >
          {isOpen && (
            <button
              className="flex justify-start relative block text-black dark:text-white hover:opacity-90 hover:bg-amber-600/50 p-4 "
              onClick={toggleLinks}
            >
              <IoIosClose className="text-4xl" />
            </button>
          )}
          {isOpen && (
            <nav>
              <ul>
                {NAV_LINKS.map(({ id, label }: NavLink) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="lg:text-xl md:text-4sm text-black dark:text-white hover:opacity-90 hover:bg-amber-600/50 p-6 flex flex-1 justify-start relative block"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </motion.div>
      ) : (
        <nav className="absolute top-32 left-1/3 pl-24 space-x-4">
          {NAV_LINKS.map(({ id, label }: NavLink) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="lg:text-xl md:text-md text-black dark:text-white hover:opacity-90 hover:bg-neutral-200/50 dark:hover:bg-stone-300/50 px py-4"
            >
              {label}
            </button>
          ))}
        </nav>
      )}

      {/* ModeToggle */}
      <div className="absolute top-0 right-0 p-4">
        <ModeToggle />
      </div>
    </div>
  );
}
