import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const GitStarCard = ({
  id,
  imgUrl,
  title,
  description,
  iconUrl,
  index,
  active,
  handleClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active ? "lg:flex-[2.5] flex-[7]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[140px] h-[300px] sm:h-[400px] lg:h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer group mx-2`}
      onClick={() => handleClick(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      aria-expanded={active}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick(id);
        }
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 rounded-[16px] overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            isHovered || active ? "opacity-50" : "opacity-30"
          }`}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        {active ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-t from-black/80 to-black/20 rounded-b-[16px] p-4"
          >
            <div
              className={`${styles.flexCenter} w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-[12px] glassmorphism mb-3 transition-transform duration-300 hover:scale-110`}
            >
              <img
                src={iconUrl}
                alt={`${title} icon`}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h2 className="font-semibold text-[18px] sm:text-[24px] text-white drop-shadow-lg">
                {title}
              </h2>
              <p className="font-normal text-[12px] sm:text-[14px] leading-relaxed text-gray-100 uppercase max-w-[90%] drop-shadow-lg">
                {description} {/* Description fully visible */}
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <h3 className="font-semibold text-[16px] sm:text-[20px] text-white z-10 lg:rotate-[-90deg] lg:origin-[0,0] drop-shadow-lg transition-all duration-300 group-hover:scale-110 px-4">
              {title}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GitStarCard;
