"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex flex-col items-center justify-center relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Metaverse
          </motion.h1>
          <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center">
            <h1 className={styles.heroHeading}>Ma</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}>Ness</h1>
          </motion.div>
        </div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="relative w-full md:-mt-[20px] -mt-[12px]">
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px]" />
          <Image
            src="/cover.png"
            alt="cover"
            width={0}
            height={0}
            className="w-full h-[350px] sm:h-[500px] object-cover rounded-tl-[140px] z-10 relative"
            sizes="100vw"
          />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] relative pr-[40px] z-10">
              <Image
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
                width={100}
                height={100}
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
