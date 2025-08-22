interface ImageGridProps {
  images: string[];
}

export const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
      {images.map((src, index) => {
        const spanClasses =
          index === 0
            ? "col-span-2 md:col-span-4 row-span-2"
            : "col-span-2 md:col-span-2 row-span-2";

        return (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden ${spanClasses}`}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};
