import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../styles";
import { productsDetail } from "../constants";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "./CustomTexts";
import GitStarCard from "./GitStarCard";

const Products = () => {
  const [active, setActive] = useState("p2");
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 4;

  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex + itemsPerView < productsDetail.length;

  const handlePrevious = () => {
    if (canScrollLeft) {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleNext = () => {
    if (canScrollRight) {
      setStartIndex((prev) =>
        Math.min(prev + 1, productsDetail.length - itemsPerView)
      );
    }
  };

  return (
    <section className={`${styles.paddings} relative`} id="products">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title={
            <>
              Revolutionize Healthcare
              <br className="md:block hidden" /> with GitStar Products
            </>
          }
          textStyles="text-center"
        />
        <TypingText
          title=" Each GitStar product is crafted with a comprehensive understanding of healthcare needs to enhance operational efficiency."
          textStyles="text-center"
        />

        <div className="relative mt-[50px]">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className={`absolute left-[-40px] top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#FF7900] backdrop-blur-sm transition-all ${
              !canScrollLeft
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#FF7900]/80"
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-[-40px] top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#FF7900] backdrop-blur-sm transition-all ${
              !canScrollRight
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#FF7900]/80"
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-all duration-500 ease-out"
              animate={{
                x: `${-startIndex * (100 / itemsPerView)}%`,
              }}
              transition={{ type: "tween", ease: "easeInOut" }}
            >
              {productsDetail.map((product, index) => (
                <div
                  key={product.id}
                  className="flex-none w-full sm:w-1/2 lg:w-1/4 px-2"
                >
                  <GitStarCard
                    {...product}
                    index={index}
                    active={active === product.id}
                    handleClick={setActive}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({
              length: Math.ceil(productsDetail.length / itemsPerView),
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx * itemsPerView)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(startIndex / itemsPerView) === idx
                    ? "bg-[#FF7900] w-4"
                    : "bg-[#FF7900]/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Products;
