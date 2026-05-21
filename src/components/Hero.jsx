import { ArrowRight, Play } from "lucide-react";
import { LightRays } from "../layout/Lightrays";
import Antigravity from "../layout/Antigravity";
import { Button } from "../layout/MovingBorder";
import ShinyText from "../layout/ShinyText";
import { motion } from "motion/react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-linear-to-br from-white via-gray-50 to-white"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="rgba(255, 0, 0, 1)"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 bg-[#FF0000]/10 rounded-full"
              variants={itemVariants}
            >
              <span className="text-[#FF0000] text-xs md:text-sm font-medium">
                Creative Marketing Agency
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              Unreal stories with{" "}
              <span className="text-[#FF0000]">real impact</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-600 max-w-xl"
              variants={itemVariants}
            >
              We deliver end-to-end marketing campaigns, stunning content, and
              websites that convert. A single supplier that covers creative,
              technical, and strategic marketing.
            </motion.p>

            <motion.div className="flex  gap-4" variants={itemVariants}>
              <a href="">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-transparent text-black dark:text-black border-neutral-200 flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Start Your Project
                  </Button>
                </motion.div>
              </a>

              <a href="">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-transparent text-black dark:text-black border-neutral-200 flex items-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Watch Showreel
                  </Button>
                </motion.div>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-black/10"
              variants={containerVariants}
            >
              <motion.div variants={statVariants}>
                <div className="text-2xl md:text-3xl font-bold text-[#FF0000]">
                  500+
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  Projects Delivered
                </div>
              </motion.div>
              <motion.div variants={statVariants}>
                <div className="text-2xl md:text-3xl font-bold text-[#FF0000]">
                  100+
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  Happy Clients
                </div>
              </motion.div>
              <motion.div variants={statVariants}>
                <div className="text-2xl md:text-3xl font-bold text-[#FF0000]">
                  2+
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  Years Experience
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
          >
            <div className="relative h-80 md:h-96 lg:h-125 w-full overflow-hidden aspect-square rounded-2xl p-6 md:p-8 flex items-center justify-center">
              <div className="relative z-10 text-center space-y-3 md:space-y-4">
                <motion.div
                  className="flex items-center justify-center gap-2 mb-6 md:mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white font-bold text-2xl md:text-4xl">
                    <ShinyText
                      text="UN"
                      speed={2}
                      delay={0}
                      color="#ffffff"
                      shineColor="#ff0000"
                      spread={120}
                      direction="left"
                      yoyo={false}
                      pauseOnHover={false}
                      disabled={false}
                    />
                  </span>
                  <div className="w-1 h-8 md:h-12 bg-[#FF0000]"></div>
                  <span className="text-white font-bold text-2xl md:text-4xl">
                    <ShinyText
                      text="REEL"
                      speed={2}
                      delay={0}
                      color="#ffffff"
                      shineColor="#ff0000"
                      spread={120}
                      direction="left"
                      yoyo={false}
                      pauseOnHover={false}
                      disabled={false}
                    />
                  </span>
                </motion.div>
                <motion.div
                  className="grid grid-cols-2 gap-2 md:gap-4 text-black"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                  viewport={{}}
                >
                  {[
                    "Videography",
                    "Photography",
                    "Marketing",
                    "Consultancy",
                  ].map((service, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg hover:bg-white/20 transition-colors"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-xs uppercase tracking-wide mb-1 md:mb-2">
                        <ShinyText
                          text={service}
                          speed={2}
                          delay={0}
                          color="#000000"
                          shineColor="#ffffff"
                          spread={120}
                          direction="left"
                          yoyo={false}
                          pauseOnHover={false}
                          disabled={false}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <LightRays />
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF0000]/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-black/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
