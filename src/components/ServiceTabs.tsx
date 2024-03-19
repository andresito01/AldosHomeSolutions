"use client";
import React from "react";
//import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { SERVICES } from "../../constants";
import { ServiceBentoGrid } from "./ServiceBentoGrid";

export function ServiceTabs() {
  // Services
  // Initialize tabs array dynamically with each service from SERVICES
  // const tabs = SERVICES.map((service, index) => ({
  //   title: service.name,
  //   value: service.name.toLowerCase().replace(/\s/g, "-"),
  //   content: (
  //     <div
  //       key={index}
  //       className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-amber-100 to-amber-950"
  //     >
  //       <p>{service.name}</p>
  //       <ul>
  //         {service.descriptions.map((description, idx) => (
  //           <li key={idx}>-{description}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   ),
  // }));

  // Initialize tabs array directly with provided data
  const tabs = [
    {
      title: "Home Repairs and Installations",
      value: "home-repairs-and-installations",
      content: (
        <div
          className="flex w-full relative h-auto rounded-2xl p-10 text-sm md:text-xl font-bold text-white"
          style={{
            background:
              "linear-gradient(to bottom left, #392613 50%, #604020 50%)",
          }}
        >
          <div className="flex-1">
            <ServiceBentoGrid items={SERVICES[0].jobs} />
          </div>
        </div>
      ),
    },
    {
      title: "Electrical Services",
      value: "electrical-services",
      content: (
        <div
          className="flex w-full relative h-auto rounded-2xl p-10 text-sm md:text-xl font-bold text-white"
          style={{
            background:
              "linear-gradient(to bottom left, #604020 50%, #86592d 50%)",
          }}
        >
          <div className="flex-1">
            <ServiceBentoGrid items={SERVICES[1].jobs} />
          </div>
        </div>
      ),
    },
    {
      title: "Plumbing Solutions",
      value: "plumbing-solutions",
      content: (
        <div
          className="flex w-full relative h-auto rounded-2xl p-10 text-sm md:text-xl font-bold text-white"
          style={{
            background:
              "linear-gradient(to bottom left, #86592d 50%, #ac7339 50%)",
          }}
        >
          <div className="flex-1">
            <ServiceBentoGrid items={SERVICES[2].jobs} />
          </div>
        </div>
      ),
    },
    {
      title: "Appliance Repair and Installation",
      value: "appliance-repair-and-installation",
      content: (
        <div
          className="flex w-full relative h-auto rounded-2xl p-10 text-sm md:text-xl font-bold text-white"
          style={{
            background:
              "linear-gradient(to bottom left, #ac7339 50%, #c68c53 50%)",
          }}
        >
          <div className="flex-1">
            <ServiceBentoGrid items={SERVICES[3].jobs} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-full w-full flex flex-col mx-auto">
      {/* Ensure Tabs component takes up available space. Adjust Tabs component if necessary */}
      <Tabs tabs={tabs} />
    </div>
  );
}
