"use client";
import Image from "next/image";
import styles from "@/styles";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { NewFeatures, TitleText, TypingText } from "@/components";
import { newFeatures } from "@/constants";

const WhatsNew = () => {
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
          variants={fadeIn("right", "tween", 0.5, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| What's New?" textStyles="text-center" />
          <TitleText
            title={<>What's new about Metaversus</>}
            textStyles="text-center"
          />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => {
              return <NewFeatures key={feature.title} {...feature} />;
            })}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            width={750}
            height={750}
            src="/whats-new.png"
            alt="whats-new"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
