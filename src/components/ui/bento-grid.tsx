import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { IconArrowWaveRightUp } from "@tabler/icons-react";

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string | React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-h-full h-[fit-content] overflow-hidden rounded-xl group p-3 bg-neutral-300 dark:bg-neutral-600 dark:border-white/[0.2] border border-transparent flex flex-col",
        className
      )}
    >
      {/** Service Icon Area */}
      <div className="flex flex-1 w-full h-full min-h-[4rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 mb-2 justify-center p-2">
        {/* Check if header is a function and call it if so */}
        {header}
      </div>

      {/** Header */}
      <div className="flex flex-col flex-1">
        <div className="group-hover:translate-x-2 transition duration-200 text-xs font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-1">
          {title}
        </div>
        <div className="group-hover:translate-x-2 transition duration-200 text-xs font-sans font-normal text-neutral-600 dark:text-neutral-300 overflow-hidden">
          {description}
        </div>
      </div>

      {icon && (
        <div className="flex justify-end mt-auto">
          <div className="group-hover:translate-x-2 transition duration-200">
            {icon}
          </div>
        </div>
      )}
    </div>
  );
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-full grid md:auto-rows-[10rem] grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 max-w-4xl mx-auto",
        className
      )}
    >
      {React.Children.map(children, (child, index) => (
        <div
          className={`grid-item-${index + 2} ${
            index == 3 || index == 6 ? "md:col-span-2" : "md:col-span-1"
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export const BentoGridUniformHover = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-min grid md:auto-rows-min grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto hover:cursor-pointer",
        className
      )}
    >
      {React.Children.map(children, (child, index) => (
        <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
          {child}
        </div>
      ))}
    </div>
  );
};

// Assuming you have a CSS or a JS library to handle masonry layout, here is a simplified example:
export const BentoGridMasonry = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("masonry-grid max-w-6xl mx-auto", className)}>
      {React.Children.map(children, (child) => (
        <div className="masonry-grid-item">{child}</div>
      ))}
    </div>
  );
};

export const BentoGridAdaptive = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-7xl mx-auto",
        className
      )}
    >
      {React.Children.map(children, (child, index) => (
        <div className="transition-shadow duration-300 ease-in-out transform hover:shadow-lg">
          {child}
        </div>
      ))}
    </div>
  );
};

// Note: Implementing a true masonry layout requires additional CSS or JavaScript (like Masonry.js or CSS columns). This is a conceptual example.
