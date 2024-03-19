"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoIosCall } from "react-icons/io";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
// components
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { EmailForm } from "@/components/EmailForm";
import CommentSection from "@/components/CommentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
// Constants imports
import { CUSTOMER_REVIEWS } from "../../constants";
import { ServiceTabs } from "@/components/ServiceTabs";
import { Meteors } from "@/components/ui/meteors";
import {
  TypewriterEffectSmooth,
  TypewriterEffect,
} from "@/components/ui/typewriter-effect";
import { AnimatedSection } from "@/components/ui/sections";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import {
  BeforeAndAfterParallaxItem,
  GridParallaxItem,
} from "@/components/ui/parallax-scroll-item";
import AnimatedHorizontalScroll from "@/components/ui/animated-horizontal-scroll";

export default function Home() {
  // Access the theme using the useTheme hook
  const { resolvedTheme } = useTheme();

  // const ref = React.useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });

  // const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  // const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  // const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  // const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  // const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const serviceSectionTitle = [
    {
      text: "Explore",
    },
    {
      text: "Our",
    },
    {
      text: "Comprehensive",
    },
    {
      text: "Services",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: ".",
    },
  ];

  const commentsSectionTitle = [
    {
      text: "Leave",
    },
    {
      text: "a",
    },
    {
      text: "comment",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: ".",
    },
    {
      text: "Read",
    },
    {
      text: "a",
    },
    {
      text: "comment",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: ".",
    },
  ];

  return (
    <div className="flex-1 w-screen">
      {/* About Section with a background image */}
      <section
        className="mx-auto my-9 px-14 pt-10 pb-20 gap-56 grid justify-items-center relative"
        style={{
          backgroundImage: "url('/HeroSectionBackground.webp')", // Specify the path to your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Semi-transparent overlay */}
        <div
          className="absolute inset-0 bg-black opacity-20"
          style={{ mixBlendMode: "multiply" }}
        ></div>

        <AnimatedWrapper
          direction="left"
          delay={0.25}
          offset={100}
          animationDuration={1}
        >
          <p className="z-10 font-bold font-inter tracking-wider text-3xl md:text-4xl lg:text-5xl text-white dark:text-white py-5 px-8 bg-black/60 rounded-2xl text-left">
            {`Your trusted partner for all your home repair, maintenance, and remodeling needs!`}
          </p>
        </AnimatedWrapper>

        <div className="sm:pl-32 space-y-10 w-full">
          <AnimatedWrapper
            direction="left"
            delay={0.25}
            offset={150}
            animationDuration={1}
          >
            <button className="rounded-full gap-4 p-4 text-white flex items-center space-x-1 text-xs font-bold bg-black/60 hover:scale-105 transition-transform">
              <span className="z-10 rounded-full text-[0.6rem] p-1 text-white dark:text-white">
                <EnvelopeClosedIcon className="size-8" />
              </span>
              <span className="z-10 p-1 text-md md:text-2md lg:text-xl text-white dark:text-white">
                Email @aldo5972@aol.com{" "}
              </span>
            </button>
          </AnimatedWrapper>
          <AnimatedWrapper
            direction="left"
            delay={0.5}
            offset={150}
            animationDuration={1}
          >
            <button className="rounded-full gap-4 p-4 text-white flex items-center space-x-1 text-xs font-bold bg-black/60 hover:scale-105 transition-transform">
              <span className="z-10 rounded-full text-[0.6rem] p-1 text-white dark:text-white">
                <IoIosCall className="size-8" />
              </span>
              <span className="z-10 p-1 text-md md:text-2md lg:text-xl text-white dark:text-white">
                Call ( 925 ) - 917 - 1063
              </span>
            </button>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex mx-auto mx-30 my-9 px-14 py-20">
        <div className="flex-1 w-full relative items-center justify-center">
          <div>
            <TypewriterEffectSmooth words={serviceSectionTitle} />
          </div>
          <div className="h-[80rem] md:h-[65rem]">
            <ServiceTabs />
          </div>
        </div>
        {/* Add content for the Services section here */}
      </section>

      {/* Portfolio Section with a solid background color */}
      <section className="flex flex-col mx-auto my-9 px-14 py-20 gap-8 bg-gradient-to-br from-neutral-100 to-neutral-200/20 dark:from-neutral-700 dark:to-neutral-900/20">
        <AnimatedWrapper
          direction="left"
          delay={0.25}
          offset={100}
          animationDuration={1}
        >
          <h1 className="font-bold font-inter text-opacity-90 tracking-wider text-3xl md:text-5xl lg:text-6xl text-black dark:text-white">
            Visuals Of My <span className="text-blue-500">Work</span>.
          </h1>
        </AnimatedWrapper>

        <AnimatedHorizontalScroll />

        <div className="self-end border-l-2 rounded-xl bg-black/50 dark:bg-white/50 w-9/12">
          <ParallaxScroll
            parallaxItems={[
              <BeforeAndAfterParallaxItem
                key={1}
                beforeHeading="Before"
                afterHeading="After"
                beforeImageSrc="/Job-1/FlooringandPaintingJob5.jpeg"
                afterImageSrc="/Job-1/FlooringandPaintingJob9.jpeg"
              />,
              <BeforeAndAfterParallaxItem
                key={2}
                beforeHeading="Before"
                afterHeading="After"
                beforeImageSrc="/Job-1/FlooringandPaintingJob4.jpeg"
                afterImageSrc="/Job-1/FlooringandPaintingJob8.jpeg"
              />,
              <GridParallaxItem
                key={3}
                description="Kitchen and Bathroom Remodeling Job"
                images={[
                  {
                    key: 1,
                    src: "/Job-2/KitchenAndBathroomRemodelJob1.jpeg",
                  },
                  {
                    key: 2,
                    src: "/Job-2/KitchenAndBathroomRemodelJob2.jpeg",
                  },
                  {
                    key: 3,
                    src: "/Job-2/KitchenAndBathroomRemodelJob3.jpeg",
                  },
                ]}
              />,
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="container mx-auto px-4 py-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
        <div className="">
          <div className=" w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Meteors because they&apos;re cool
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                I don&apos;t know what to write so I&apos;ll just paste
                something cool here. One more sentence because lorem ipsum is
                just unacceptable. Won&apos;t ChatGPT the shit out of this.
              </p>

              <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                Explore
              </button>
              {resolvedTheme === "dark" && <Meteors number={20} />}
            </div>
          </div>
        </div>
        
      </section> */}

      {/* Contact Section */}
      <section
        className="mx-auto my-9 px-14 py-20 grid justify-items-center relative"
        style={{
          backgroundImage: "url('/EmailFormSectionBackground.avif')", // Specify the path to your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Semi-transparent overlay */}
        <div
          className="absolute inset-0 bg-black opacity-30"
          style={{ mixBlendMode: "multiply" }}
        ></div>

        <div className="z-10 w-9/12">
          <EmailForm />
        </div>
        {/* Add content for the Portfolio section here */}
      </section>

      {/* Comment Section */}
      <section className="flex mx-auto my-9 px-14 py-20">
        <div className="flex-1 w-full relative items-center justify-center">
          <div>
            <TypewriterEffect words={commentsSectionTitle} />
          </div>

          {/** Comment Section */}
          <div>
            <CommentSection />
          </div>
        </div>
        {/* Add content for the Services section here */}
      </section>

      {/* FAQ Section */}
      <section className="mx-auto my-9 px-14 py-20 bg-neutral-100 dark:bg-neutral-600 rounded-t-3xl border-2 hover:border-slate-400">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          FAQ
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What services does Aldos Home Solutions provide?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How can I request a quote for a project?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What areas do you serve?</AccordionTrigger>
            <AccordionContent>
              Yes. Its animated by default, but you can disable prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Its animated by default, but you can disable prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Do you offer any warranties or guarantees on your work?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Its animated by default, but you can disable prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              How long does it typically take to complete a project?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Its animated by default, but you can disable prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Add content for the Portfolio section here */}
      </section>
    </div>
  );
}
