"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  id: number;
  content?: JSX.Element | React.ReactNode | string;
  className?: string;
  thumbnail?: string;
  type?: "standard" | "beforeAfter";
  beforeImageSrc?: string;
  afterImageSrc?: string;
  description?: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
      {cards.map((card, i) => (
        <div key={card.id + i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer ..."
                : "bg-white rounded-xl ..."
            )}
            layout
          >
            {/* Conditional rendering based on card type */}
            {card.type === "beforeAfter" ? (
              // Render BeforeAndAfter content
              <BeforeAndAfterContent card={card} />
            ) : (
              // Render standard card content
              <StandardCardContent card={card} />
            )}
            {selected?.id === card.id && <SelectedCard selected={selected} />}
          </motion.div>
        </div>
      ))}

      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    card.thumbnail && (
      <Image
        src={card.thumbnail}
        height="500"
        width="500"
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
          loaded ? "blur-none" : "blur-md"
        )}
        alt="thumbnail"
      />
    )
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

const BeforeAndAfterContent = ({ card }: { card: Card }) => {
  // Adapt the design as needed from your original ParallaxItems
  return (
    card.beforeImageSrc &&
    card.afterImageSrc && (
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Image
          src={card.beforeImageSrc}
          alt="Before"
          width={250}
          height={300}
          objectFit="contain"
        />
        <Image
          src={card.afterImageSrc}
          alt="After"
          width={250}
          height={300}
          objectFit="contain"
        />
        {card.description && <p>{card.description}</p>}
      </div>
    )
  );
};

const StandardCardContent = ({ card }: { card: Card }) => {
  // Render standard card image or content
  return (
    <div>
      {card.thumbnail && (
        <Image
          src={card.thumbnail}
          alt="Thumbnail"
          width={500}
          height={500}
          objectFit="cover"
        />
      )}
      {card.content}
    </div>
  );
};
