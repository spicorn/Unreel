import { useState } from "react";
import {
  Play,
  ExternalLink,
  Camera,
  Video as VideoIcon,
  Globe,
  Palette,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="portfolio" className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "-100px" }}
        >
          <motion.div className="inline-block px-4 py-1.5 bg-[#FF0000]/10 rounded-full mb-4" whileHover={{ scale: 1.05 }}>
            <span className="text-[#FF0000] text-xs md:text-sm font-medium">Our Work</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{}}
          >
            Portfolio Showcase
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{}}
          >
            Explore our latest projects and see the quality we deliver for our
            clients across all services.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{}}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium transition-all text-sm md:text-base ${
                activeCategory === category.id
                  ? "bg-[#FF0000] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-black/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                  />

                  {/* Play/View Icon Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.category === "video" ? (
                      <motion.div
                        className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play
                          className="w-8 h-8 text-white ml-1"
                          fill="white"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-8 h-8 text-white" />
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full"
                    whileHover={{ backgroundColor: "rgba(255, 0, 0, 0.8)" }}
                  >
                    <span className="text-white text-xs font-medium flex items-center gap-1.5">
                      <item.icon className="w-3.5 h-3.5" />
                      {item.type}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#FF0000] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Border Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF0000]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More CTA */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{}}
        >
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Want to see more of our work and client success stories?
          </p>
          <motion.button
            className="bg-black text-white px-6 md:px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Portfolio →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
