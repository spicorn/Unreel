import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-linear-to-br from-white via-gray-50 to-white"
    >
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
              <button
                onClick={scrollToContact}
                className="group bg-[#FF0000] text-white px-8 py-4 rounded-md hover:bg-[#cc0000] transition-all flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group border-2 border-black px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Showreel
              </button>
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
            <div className="relative aspect-square rounded-2xl bg-linear-to-br from-black to-gray-800 p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#FF0000]/10 rounded-2xl"></div>
              <div className="relative z-10 text-center space-y-4">
                <div className="flex items-center justify-center gap-2 mb-8">
                  <span className="text-white font-bold text-4xl">UN</span>
                  <div className="w-1 h-12 bg-[#FF0000]"></div>
                  <span className="text-white font-bold text-4xl">REEL</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-xs uppercase tracking-wide mb-2">
                      Videography
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-xs uppercase tracking-wide mb-2">
                      Photography
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-xs uppercase tracking-wide mb-2">
                      Marketing
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-xs uppercase tracking-wide mb-2">
                      Consultancy
                    </div>
                  </div>
                </div>
              </div>
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
