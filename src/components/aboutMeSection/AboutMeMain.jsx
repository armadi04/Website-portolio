import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const AboutMeMain = () => {
  return (
    <section
      id="about"
      className="flex md:flex-row sm:flex-col gap-10 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-start mb-24 sm:flex sm:items-center sm:justify-center sm:text-center"
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="md:w-1/2 sm:mx-1"
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="md:w-1/2 flex justify-end"
      >
        <AboutMeImage />
      </motion.div>
    </section>
  );
};

export default AboutMeMain;
