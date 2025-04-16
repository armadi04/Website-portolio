import { motion } from "framer-motion";
import { Suspense } from "react";
import DirectionAwareHover from "./DirectionAwareHover";

const AboutMeImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="w-full max-w-[450px] mx-auto flex items-center justify-center relative overflow-hidden rounded-2xl"
    >
      {/* Wrapper untuk memberi ruang hover */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
        <DirectionAwareHover
          imageUrl="../../public/images/pantai1.jpg"
          className="w-full h-auto rounded-2xl"
          imageClassName="object-cover object-bottom rounded-2xl filter brightness-80 contrast-105"
          childrenClassName="bottom-0 left-0 right-0"
        >
          <Suspense
            fallback={
              <div className="w-full h-full rounded-lg bg-foreground/10 animate-pulse"></div>
            }
          >
            <div className="p-5 sm:p-8">
              <h2 className="text-6xl sm:text-2xl font-bold mb-1 sm:mb-2 text-white">
                Frontend Web Developer
              </h2>
              <p className="text-4xl sm:text-base text-white/70">
                4+ months of experience
              </p>

              <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <p className="text-4xl sm:text-sm text-white/60">
                    Specialization
                  </p>
                  <p className="text-2xl sm:text-base font-medium text-white">
                    Web Pages
                  </p>
                </div>
                <div>
                  <p className="text-4xl sm:text-sm text-white/60">Based in</p>
                  <p className="text-2xl sm:text-base font-medium text-white">
                    Semarang, ID
                  </p>
                </div>
              </div>
            </div>
          </Suspense>
        </DirectionAwareHover>
      </div>

      {/* Background Shape (tidak mengganggu overflow hover) */}
      <div className="h-[500px] w-[250px] absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </motion.div>
  );
};

export default AboutMeImage;
