import { useState } from "react";
import {
  Play,
  ExternalLink,
  Camera,
  Video as VideoIcon,
  Globe,
  Palette,
} from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

const portfolioItems = [
  {
    id: 1,
    title: "Tech Startup Brand Launch",
    category: "branding",
    type: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description:
      "Complete brand identity and marketing campaign for a SaaS company",
    icon: Palette,
  },
  {
    id: 2,
    title: "Corporate Event Coverage",
    category: "video",
    type: "Videography",
    image:
      "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description:
      "Full event documentation with highlight reels and testimonials",
    icon: VideoIcon,
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "websites",
    type: "Web Development",
    image:
      "https://images.unsplash.com/photo-1487338875411-8880f74114a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description:
      "Responsive online store with advanced features and SEO optimization",
    icon: Globe,
  },
  {
    id: 4,
    title: "Product Photography Series",
    category: "photography",
    type: "Photography",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: "Professional product shots for luxury brand catalog",
    icon: Camera,
  },
  {
    id: 5,
    title: "Social Media Campaign",
    category: "video",
    type: "Video Content",
    image:
      "https://images.unsplash.com/photo-1625690303837-654c9666d2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description:
      "30-day content series with short-form videos and drone footage",
    icon: VideoIcon,
  },
  {
    id: 6,
    title: "Real Estate Portfolio",
    category: "photography",
    type: "Photography + Drone",
    image:
      "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: "Aerial and ground photography for luxury property listings",
    icon: Camera,
  },
  {
    id: 7,
    title: "Restaurant Website Redesign",
    category: "websites",
    type: "Web Design",
    image:
      "https://images.unsplash.com/photo-1487523117656-d5d117ad47c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: "Modern website with online ordering and reservation system",
    icon: Globe,
  },
  {
    id: 8,
    title: "Fitness Brand Campaign",
    category: "branding",
    type: "Brand + Content",
    image:
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: "Complete rebrand with photo and video content production",
    icon: Palette,
  },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "video", label: "Video" },
  { id: "photography", label: "Photography" },
  { id: "websites", label: "Websites" },
  { id: "branding", label: "Branding" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 bg-[#FF0000]/10 rounded-full mb-4">
            <span className="text-[#FF0000] text-sm font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-lg text-gray-600">
            Explore our latest projects and see the quality we deliver for our
            clients across all services.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-[#FF0000] text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-black/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Play/View Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category === "video" ? (
                    <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <span className="text-white text-xs font-medium flex items-center gap-1.5">
                    <item.icon className="w-3.5 h-3.5" />
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF0000] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF0000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to see more of our work and client success stories?
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
            View Full Portfolio →
          </button>
        </div>
      </div>
    </section>
  );
}
