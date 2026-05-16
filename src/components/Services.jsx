import {
  Camera,
  Video,
  Globe,
  TrendingUp,
  Megaphone,
  BarChart3,
  Palette,
  Smartphone,
} from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Logo design, visual systems, and comprehensive brand guidelines that make you stand out.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Professional event coverage, product shots, and staff headshots that capture your essence.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Video,
    title: "Videography",
    description:
      "Short-form social clips, long-form content, testimonials, and compelling brand stories.",
    image:
      "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Smartphone,
    title: "Drone Footage",
    description:
      "Stunning aerial perspectives for venues, real estate, events, and more.",
    image:
      "https://images.unsplash.com/photo-1625690303837-654c9666d2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "Beautiful, conversion-focused websites with seamless user experiences.",
    image:
      "https://images.unsplash.com/photo-1487338875411-8880f74114a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: TrendingUp,
    title: "SEO & Optimization",
    description:
      "On-site optimization and strategies that increase your visibility and rankings.",
    image:
      "https://images.unsplash.com/photo-1487523117656-d5d117ad47c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    description:
      "Strategic posting, engaging captions, and community management that builds relationships.",
    image:
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Detailed monthly performance reports with actionable insights and measurable ROI.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#FF0000]/10 rounded-full mb-4">
            <span className="text-[#FF0000] text-sm font-medium">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            End-to-End Marketing Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From creative conception to technical execution, we deliver
            everything you need to grow your brand and increase conversions.
          </p>
        </div>

        {/* Services Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-black/10 hover:border-[#FF0000] hover:shadow-2xl transition-all duration-500 bg-white"
            >
              {/* Image Background */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-[#FF0000] transition-colors">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF0000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-linear-to-br from-gray-50 to-white rounded-2xl p-12 border border-black/5">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We can tailor our services to your specific needs. From specialized
            campaigns to unique content requirements, we're here to make your
            vision a reality.
          </p>
          <button className="bg-[#FF0000] text-white px-8 py-3 rounded-lg hover:bg-[#cc0000] transition-colors font-medium">
            Discuss Your Project →
          </button>
        </div>
      </div>
    </section>
  );
}
