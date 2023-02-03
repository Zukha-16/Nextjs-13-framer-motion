"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justce items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Metaversus
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>MA</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}>Ness</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -t-[30px] -mt-[20px]" />
          <Image
            width={1250}
            height={900}
            src={"/cover.png"}
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative "
          />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <Image
                width={155}
                height={155}
                src={"/stamp.png"}
                alt="stamp"
                className="w-[155px] h-[100px] sm:w-[155px] sm:h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
