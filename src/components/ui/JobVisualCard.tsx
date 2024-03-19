import Image from "next/image";

interface JobVisualCardProps {
  title: string;
  images: {
    src: string;
    description?: string;
  }[];
}

export const JobVisualCard = ({ title, images }: JobVisualCardProps) => {
  return (
    <div className="relative h-full flex flex-col p-4 bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-600 dark:to-neutral-500 rounded-xl border-2 border-black justify-between">
      {/* Card Title */}
      <h2 className="text-left text-sm md:text-base lg:text-lg font-medium text-black dark:text-white mb-4">
        {title}
      </h2>

      {/* Images Row */}
      <div className="flex flex-row justify-start items-center gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            {image.description && (
              <p className="text-center text-xs md:text-sm font-medium text-black dark:text-white mb-2">
                {image.description}
              </p>
            )}
            <div className="border border-neutral-300 dark:border-neutral-700 rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <Image
                src={image.src}
                alt={image.description || "Job Visual"}
                layout="responsive"
                width={250}
                height={300}
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
