"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn } from "@/utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "blg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-75 ease-out-flex cursor-pointer`}
      initial="hidden"
      whileInView={"show"}
      onClick={() => handleClick(id)}
    >
      <Image
        width={1250}
        height={900}
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-28 lg:rotate-[-90deg] lg:origin-[0, 0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[25px]">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <Image
              width={200}
              height={200}
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h1/2 object-contain"
            />
          </div>
          <p className="font-normal text-white uppercase text-[16px] leading-[20px]">
            Enter the Metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
