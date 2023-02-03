"use client";
import { motion } from "framer-motion";
import styles from "@/styles";
import { TitleText, TypingText } from "@/components";
import { staggerContainer, fadeIn } from "@/utils/motion";
import Image from "next/image";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friend around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image
            width={1920}
            height={1080}
            src={"/map.png"}
            alt="map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              width={58}
              height={58}
              src={"/people-01.png"}
              alt="people-01"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              width={58}
              height={58}
              src={"/people-02.png"}
              alt="people-02"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/2 right-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              width={58}
              height={58}
              src={"/people-03.png"}
              alt="people-03"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
