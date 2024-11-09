import React from "react";

const Partners = () => {
  const images = [
    "/bp1.png",
    "/bp2.png",
    "/bp3.png",
    "/bp4.png",
    "/bp5.png",
    "/bp6.png",
    "/bp7.png",
    "/bp8.png",
  ];

  return (
    <div>
      <h4
        className="text-4xl font-bold mb-10 text-center"
        style={{ color: "rgba(58, 53, 65, 0.87)" }}
      >
        Partners
      </h4>
      <div className="overflow-hidden mx-auto w-full max-w-5xl">
        <div className="flex animate-loop-scroll">
          <div aria-hidden="true" className="flex space-x-8">
            {images.map((src, index) => (
              <img
                key={index}
                loading="lazy"
                src={src}
                className="w-24 h-auto max-w-none" // Adjust width to make images smaller
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
          <div aria-hidden="true" className="flex space-x-8">
            {images.map((src, index) => (
              <img
                key={index}
                loading="lazy"
                src={src}
                className="w-24 h-auto max-w-none"
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
