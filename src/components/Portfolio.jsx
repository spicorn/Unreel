import { useState } from "react";
import {
  Play,
  ExternalLink,
  Camera,
  Video as VideoIcon,
  Globe,
  Palette,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SPUR from "../assets/SPUR.mp4";
import Vickers from "../assets/Vickers.mp4";
import scents from "../assets/scents.mp4";
import golf from "../assets/golf.mp4";
import golfday from "../assets/golfday.jpg";
import spurday from "../assets/spurday.jpg";

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
    title: "SPUR Greenfield Harare",
    category: "video",
    type: "Videography",
    image: spurday,
    description:
      "Full event documentation with highlight reels and testimonials",
    icon: VideoIcon,
    videoUrl: SPUR,
  },
  {
    id: 3,
    title: "Chema",
    category: "websites",
    type: "Web Development",
    image:
      "https://ik.imagekit.io/qvdv4r3lk/Screenshot%202026-02-20%20103549.png?updatedAt=1771576794569",
    description: "Corporate website for a modern construction company",
    icon: Globe,
    link: "https://chema.muzukuru.com",
  },
  {
    id: 4,
    title: "First Mutual",
    category: "websites",
    type: "Website",
    image:
      "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    description: "Financial services website with a clean user experience",
    icon: Globe,
    link: "https://first-mutual.muzukuru.com/",
  },
  {
    id: 5,
    title: "Vakani Bricks",
    category: "websites",
    type: "Website",
    image:
      "https://ik.imagekit.io/qvdv4r3lk/vakani.png?updatedAt=1715932037555",
    description: "Promotional landing page for a brick manufacturing brand",
    icon: Globe,
    link: "https://spicorn.github.io/Vakani/",
  },
  {
    id: 6,
    title: "Associated Foods Zimbabwe",
    category: "websites",
    type: "Website",
    image: "https://ik.imagekit.io/qvdv4r3lk/afz.png?updatedAt=1715932037352",
    description:
      "Food distribution website featuring product catalog and contact information",
    icon: Globe,
    link: "https://spicorn.github.io/Associated-Foods-ZImbabwe/",
  },
  {
    id: 7,
    title: "Tob Energy",
    category: "websites",
    type: "Website",
    image: "https://ik.imagekit.io/qvdv4r3lk/tob.png",
    description:
      "Energy company website with service highlights and market presence",
    icon: Globe,
    link: "https://www.tobenergy.co.zw/",
  },
  {
    id: 8,
    title: "Instant Homes",
    category: "websites",
    type: "Website",
    image: "https://ik.imagekit.io/wuvzopkfi/homes.png?updatedAt=1751534434332",
    description:
      "Real estate site showcasing property projects and modern home designs",
    icon: Globe,
    link: "https://spicorn.github.io/instanthomes/",
  },
  {
    id: 9,
    title: "Product Photography Series",
    category: "photography",
    type: "Photography",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: "Professional product shots for luxury brand catalog",
    icon: Camera,
  },
  {
    id: 10,
    title: "Mr and Mrs Vickers",
    category: "video",
    type: "Video Content",
    image:
      "https://images.unsplash.com/photo-1625690303837-654c9666d2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description:
      "30-day content series with short-form videos and drone footage",
    icon: VideoIcon,
    videoUrl: Vickers,
  },
  {
    id: 11,
    title: "Real Estate Portfolio",
    category: "photography",
    type: "Photography + Drone",
    image:
      "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: "Aerial and ground photography for luxury property listings",
    icon: Camera,
  },

  {
    id: 12,
    title: "Fitness Brand Campaign",
    category: "branding",
    type: "Brand + Content",
    image:
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: "Complete rebrand with photo and video content production",
    icon: Palette,
  },
  {
    id: 13,
    title: "Heavenly Scents",
    category: "video",
    type: "Video Content",
    image:
      "https://images.unsplash.com/photo-1625690303837-654c9666d2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description:
      "30-day content series with short-form videos and drone footage",
    icon: VideoIcon,
    videoUrl: scents,
  },
  {
    id: 14,
    title: "Golf Day",
    category: "video",
    type: "Video Content",
    image: golfday,
    description:
      "30-day content series with short-form videos and drone footage",
    icon: VideoIcon,
    videoUrl: golf,
  },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "video", label: "Video" },
  { id: "photography", label: "Photography" },
  { id: "websites", label: "Websites" },
  // { id: "branding", label: "Branding" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(null);

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
          <motion.div
            className="inline-block px-4 py-1.5 bg-[#FF0000]/10 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#FF0000] text-xs md:text-sm font-medium">
              Our Work
            </span>
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
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Image/Cover */}
                <div
                  className="relative h-48 md:h-64 overflow-hidden"
                  style={
                    item.category === "video"
                      ? {
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : {}
                  }
                >
                  {item.category !== "video" && (
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                  )}
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
                      <motion.button
                        onClick={() => setSelectedVideo(item)}
                        className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#FF0000]/90 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        type="button"
                      >
                        <Play
                          className="w-8 h-8 text-white ml-1"
                          fill="white"
                        />
                      </motion.button>
                    ) : item.link ? (
                      <motion.a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center hover:bg-[#FF0000]/90 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-8 h-8 text-white" />
                      </motion.a>
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

        {/* View More CTA
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
        </motion.div> */}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#FF0000] transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
