import Image from "next/image";

interface BeforeAndAfterParallaxItemProps {
  beforeHeading: string;
  afterHeading: string;
  beforeImageSrc: string;
  afterImageSrc: string;
}

export const BeforeAndAfterParallaxItem = ({
  beforeHeading,
  afterHeading,
  beforeImageSrc,
  afterImageSrc,
}: BeforeAndAfterParallaxItemProps) => {
  return (
    <div className="relative flex flex-row justify-center items-center my-8 p-4 gap-4 bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-600 dark:to-neutral-500  rounded-xl border-2 hover:scale-105 transition-transform">
      {/* Before Content */}
      <div className="md:w-1/2 flex flex-col items-center">
        <h2 className="text-center text-sm md:text-base lg:text-lg font-medium text-black dark:text-white mb">
          {beforeHeading}
        </h2>
        <div className="border border-neutral-300 dark:border-neutral-700 rounded-lg overflow-hidden hover:scale-105 transition-transform">
          <Image
            src={beforeImageSrc}
            alt="Before"
            objectFit="contain"
            width={250} // Increase image width
            height={300} // Increase image height
          />
        </div>
      </div>
      {/* After Content */}
      <div className="md:w-1/2 flex flex-col items-center mt-4 md:mt-0">
        <h2 className="text-center text-sm md:text-base lg:text-lg font-medium text-black dark:text-white mb">
          {afterHeading}
        </h2>
        <div className="border border-neutral-300 dark:border-neutral-700 rounded-lg overflow-hidden hover:scale-105 transition-transform">
          <Image
            src={afterImageSrc}
            alt="After"
            objectFit="contain"
            width={250} // Increase image width
            height={300} // Increase image height
          />
        </div>
      </div>
    </div>
  );
};

interface GridParallaxItemProps {
  description: string;
  images: { key: number; src: string }[];
}

export const GridParallaxItem = ({
  description,
  images,
}: GridParallaxItemProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center my-8 p-4 gap-4 bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-600 dark:to-neutral-500 rounded-xl border-2 hover:scale-105 transition-transform">
      {/* Job Description */}
      <p className="text-center text-sm md:text-base lg:text-lg font-medium text-black dark:text-white mb">
        {description}
      </p>

      {/* Images Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="border border-neutral-300 dark:border-neutral-700 rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <Image
              src={image.src}
              alt={"Job Visual"}
              layout="responsive"
              width={250}
              height={300}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
