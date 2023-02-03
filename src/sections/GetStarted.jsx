"use client";
import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { StartSteps, TitleText, TypingText } from "@/components";
import { startingFeatures } from "@/constants";
import Image from "next/image";

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            width={750}
            height={750}
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.5, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaversus Works" textStyles="text-center" />
          <TitleText
            title={<>Get started with Metaversus</>}
            textStyles="text-center"
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => {
              return (
                <StartSteps key={feature} number={index + 1} text={feature} />
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
