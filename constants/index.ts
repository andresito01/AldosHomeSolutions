import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

// NAVIGATION
export const NAV_LINKS = [
  { id: "HeroSection", label: "Home" },
  { id: "ServicesSection", label: "Services" },
  { id: "PortfolioSection", label: "Portfolio" },
  { id: "ContactSection", label: "Contact" },
  // Add more sections as needed
];
// export const NAV_LINKS = [
//   { href: "/", key: "home", label: "Home" },
//   { href: "/", key: "portfolio", label: "Portfolio" },
//   { href: "/", key: "services", label: "Services" },
//   { href: "/", key: "pricing", label: "Pricing" },
//   { href: "/", key: "contact", label: "Contact" },
// ];

export const SERVICES = [
  {
    name: "Home Repairs and Installations",
    jobs: [
      {
        title: "Picture and shelf hanging",
        description: "Hang pictures and shelves securely.",
        header:
          "/ServiceIcons/HomeRepairAndInstallationIcons/PictureAndShelfHanging.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Curtain and blind installation",
        description: "Install curtains and blinds with precision.",
        header:
          "/ServiceIcons/HomeRepairAndInstallationIcons/CurtainAndBlindInstallation.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Doors and Window installations",
        description: "Replace doors and windows.",
        header:
          "/ServiceIcons/HomeRepairAndInstallationIcons/DoorInstallation.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Furniture assembly",
        description: "Assemble furniture quickly and efficiently.",
        header:
          "/ServiceIcons/HomeRepairAndInstallationIcons/FurnitureAssembly.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Drywall patching",
        description: "Patch drywall to perfection for a seamless finish.",
        header:
          "/ServiceIcons/HomeRepairAndInstallationIcons/DryWallPatching.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Painting and touch-ups",
        description: "Paint walls and do touch-ups for a fresh look.",
        header:
          "/ServiceIcons/HomeRepairAndInstallationIcons/HousePainting.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
    ],
  },
  {
    name: "Electrical Services",
    jobs: [
      {
        title: "Light fixture installation and repair",
        description: "Install and repair light fixtures safely.",
        header:
          "/ServiceIcons/ElectricalServiceIcons/LightFixtureInstallation.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Outlet and switch replacement",
        description: "Replace faulty outlets and switches.",
        header:
          "/ServiceIcons/ElectricalServiceIcons/OutletAndSwitchReplacement.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Bath fan installation",
        description: "Install bath fans to improve ventilation.",
        header: "/ServiceIcons/ElectricalServiceIcons/BathFanInstallation.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Air conditioner servicing",
        description: "Service air conditioners for optimal performance.",
        header:
          "/ServiceIcons/ElectricalServiceIcons/AirConditioningRepair.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Light bulb and fluorescent replacement",
        description: "Replace light bulbs and fluorescent tubes.",
        header:
          "/ServiceIcons/ElectricalServiceIcons/LightBulbReplacement.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "General electrical troubleshooting",
        description: "Diagnose and fix electrical issues efficiently.",
        header:
          "/ServiceIcons/ElectricalServiceIcons/GeneralElectricTroubleshooting.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
    ],
  },
  {
    name: "Plumbing Solutions",
    jobs: [
      {
        title: "Faucet repair and installation",
        description: "Repair and install faucets for kitchens and bathrooms.",
        header: "/ServiceIcons/PlumbingSolutionIcons/FaucetRepair.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Toilet troubleshooting and repair",
        description: "Troubleshoot and repair toilet problems.",
        header: "/ServiceIcons/PlumbingSolutionIcons/ToiletRepair.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Garbage disposal installation and repair",
        description: "Install and repair garbage disposals.",
        header: "/ServiceIcons/PlumbingSolutionIcons/GarbageDisposal.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Drain unclogging",
        description: "Unclog drains quickly and effectively.",
        header: "/ServiceIcons/PlumbingSolutionIcons/DrainUnclogging.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Shower fixture repair and replacement",
        description: "Repair and replace shower fixtures.",
        header: "/ServiceIcons/PlumbingSolutionIcons/ShowerFixture.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Leak detection and repair",
        description: "Detect and repair leaks in plumbing systems.",
        header: "/ServiceIcons/PlumbingSolutionIcons/LeakRepair.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
    ],
  },
  {
    name: "Appliance Repair and Installation",
    jobs: [
      {
        title: "Refrigerator repair and installation",
        description: "Repair and install refrigerators.",
        header:
          "/ServiceIcons/HomeRepairAndInstallationIcons/FridgeRepair.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Microwave repair and installation",
        description: "Repair and install microwaves.",
        header:
          "/ServiceIcons/HomeRepairAndInstallationIcons/MicrowaveRepair.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Oven repair and installation",
        description: "Repair and install ovens.",
        header: "/ServiceIcons/HomeRepairAndInstallationIcons/OvenRepair.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Stove repair and installation",
        description: "Repair and install stoves.",
        header: "/ServiceIcons/HomeRepairAndInstallationIcons/StoveRepair.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Dishwasher repair and installation",
        description: "Repair and install dishwashers.",
        header:
          "/ServiceIcons/HomeRepairAndInstallationIcons/DishwasherRepair.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Water heater repair (installation not provided)",
        description: "Repair water heaters.",
        header:
          "/ServiceIcons/HomeRepairAndInstallationIcons/WaterHeaterRepair.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
      {
        title: "Window AC unit repair and installation",
        description: "Repair and install window AC units.",
        header: "/ServiceIcons/HomeRepairAndInstallationIcons/ACRepair.webp",
        icon: IconArrowWaveRightUp,
        iconProps: {},
      },
    ],
  },
];

// CUSTOMER REVIEWS
export const CUSTOMER_REVIEWS = [
  {
    name: "John",
    comment: "Really happy with the new paint job on my house!",
    rating: "5",
  },
  {
    name: "Mary",
    comment: "Really happy with the new paint job on my house!",
    rating: "5",
  },
  {
    name: "Sergio",
    comment: "Really happy with the new paint job on my house!",
    rating: "5",
  },
  {
    name: "Rachel",
    comment: "Really happy with the new paint job on my house!",
    rating: "5",
  },
  {
    name: "Jose",
    comment: "Really happy with the new paint job on my house!",
    rating: "5",
  },
];
