"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExploreCard, TitleText, TypingText } from "@/components";
import { staggerContainer } from "@/utils/motion";
import { exploreWorlds } from "@/constants";
import styles from "@/styles";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="#explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Explore Worlds" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" />
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => {
            return (
              <ExploreCard
                key={world.id}
                index={index}
                active={active}
                handleClick={setActive}
                {...world}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
export default Explore;
