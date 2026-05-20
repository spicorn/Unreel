import { Target, Users, Award, Zap } from "lucide-react";
import Cheers from "../assets/Cheers.mp4";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every campaign is designed to deliver measurable ROI and real business impact.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We work as an extension of your team, bringing expertise without the overhead.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "From concept to delivery, we maintain the highest standards in every project.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description:
      "Streamlined workflows and quick turnarounds without compromising quality.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                src={Cheers}
                autoPlay
                muted
                loop
                className="w-full h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Overlay Stats */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs">Projects</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-xs">Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF0000]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-black/10 rounded-full blur-3xl"></div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#FF0000]/10 rounded-full mb-4">
              <span className="text-[#FF0000] text-sm font-medium">
                About Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One Team, Complete Solutions
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                UNREEL MEDIA is your single supplier for creative, technical,
                and strategic marketing. We bring together specialists in
                content creation, web development, and marketing strategy to
                deliver end-to-end campaigns that convert.
              </p>
              <p>
                Our mission is simple: save you time, increase your leads,
                improve brand perception, and provide measurable ROI. We work
                primarily with startups and SMEs who want predictable monthly
                spend and exceptional value.
              </p>
              <p>
                From photography and videography to website design and SEO, we
                handle everything so you can focus on what you do best—running
                your business.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                <span className="text-sm font-medium">
                  Certified Professionals
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                <span className="text-sm font-medium">Insured & Licensed</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                <span className="text-sm font-medium">Transparent Pricing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid with Images */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-1">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-linear-to-br from-gray-50 to-white border border-black/5 hover:border-[#FF0000]/30 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-[#FF0000]/10 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-[#FF0000]" />
              </div>
              <h3 className="font-bold mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        {/* <div className="mt-20 bg-black rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Meet Our Team
            </h3>
            <p className="text-gray-300 mb-8">
              Our diverse team brings together creative minds, technical experts, and strategic thinkers.
              Each member specializes in their craft, ensuring you get the best talent for every aspect of your project.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <div className="text-[#FF0000] font-semibold">Creative Lead</div>
                <div className="text-sm text-gray-400">Content & Production</div>
              </div>
              <div>
                <div className="text-[#FF0000] font-semibold">Web & Tech Lead</div>
                <div className="text-sm text-gray-400">Development & SEO</div>
              </div>
              <div>
                <div className="text-[#FF0000] font-semibold">Marketing Strategist</div>
                <div className="text-sm text-gray-400">Strategy & Analytics</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
