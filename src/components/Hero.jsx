import { ArrowRight, Play } from "lucide-react";
import { LightRays } from "../layout/Lightrays";
import Antigravity from "../layout/Antigravity";
import { Button } from "../layout/MovingBorder";
import ShinyText from "../layout/ShinyText";

export function Hero() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-[#FF0000]/10 rounded-full">
              <span className="text-[#FF0000] text-sm font-medium">
                Creative Marketing Agency
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Unreal stories with{" "}
              <span className="text-[#FF0000]">real impact</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              We deliver end-to-end marketing campaigns, stunning content, and
              websites that convert. A single supplier that covers creative,
              technical, and strategic marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-transparent text-black dark:text-black border-neutral-200 flex items-center gap-2"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Start Your Project
                </Button>
              </a>

              <a href="">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-transparent text-black dark:text-black border-neutral-200 flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Showreel
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-black/10">
              <div>
                <div className="text-3xl font-bold text-[#FF0000]">500+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF0000]">100+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF0000]">2+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative h-125 w-full overflow-hidden aspect-square rounded-2xl  p-8 flex items-center justify-center">
              <div className="relative z-10 text-center space-y-4">
                <div className="flex items-center justify-center gap-2 mb-8">
                  <span className="text-white font-bold text-4xl">
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
                  <div className="w-1 h-12 bg-[#FF0000]"></div>
                  <span className="text-white font-bold text-4xl">
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
                </div>
                <div className="grid grid-cols-2 gap-4 text-black">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-xs uppercase tracking-wide mb-2">
                      <ShinyText
                        text="Videography"
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
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-xs uppercase tracking-wide mb-2">
                      <ShinyText
                        text=" Photography"
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
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-xs uppercase tracking-wide mb-2">
                      <ShinyText
                        text=" Marketing"
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
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-xs uppercase tracking-wide mb-2">
                      <ShinyText
                        text=" Consultancy"
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
                  </div>
                </div>
              </div>
              <LightRays />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF0000]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
