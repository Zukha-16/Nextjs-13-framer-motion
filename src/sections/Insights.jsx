"use client";
import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { TitleText, TypingText, InsightCard } from "@/components";
import { insights } from "@/constants";

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insights" textStyles="text-center" />
        <TitleText
          title={<>Insights about Metaversus</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => {
            return (
              <InsightCard key={insight.title} {...insight} index={index + 1} />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
