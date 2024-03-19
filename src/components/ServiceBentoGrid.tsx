import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import {
  BentoGrid,
  BentoGridMasonry,
  BentoGridAdaptive,
  BentoGridUniformHover,
  BentoGridItem,
} from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  TablerIconsProps,
} from "@tabler/icons-react";
import Image from "next/image";

export function ServiceBentoGrid({
  items,
}: {
  items: {
    title: string;
    description: string;
    header: string;
    icon: (props: TablerIconsProps) => JSX.Element;
    iconProps: {};
  }[];
}) {
  return (
    <BentoGridUniformHover className="h-auto mx-auto min-h-[600px]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            <Image
              alt="Service Icon"
              src={item.header}
              objectFit="cover"
              width={120}
              height={100}
            />
          }
          icon={<item.icon className="h-3 w-3 text-neutral-500" />} // Adjusted icon size
          className={i % 2 == 0 ? "md:col-span-3" : "md:col-span-1"}
        />
      ))}
    </BentoGridUniformHover>
  );
}
