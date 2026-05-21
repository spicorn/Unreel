import { useState } from "react";
import {
  Check,
  Globe,
  Camera,
  Code,
  ShoppingCart,
  Search,
  Mail,
  Smartphone,
  MapPin,
  BarChart,
  Palette,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const mediaPricingTiers = [
  {
    name: "Starter",
    price: "$150",
    description: "Perfect for startups testing the waters",
    features: [
      "5-8 social assets per month",
      "2-4 short videos (15-60s)",
      "10 professionally edited photos",
      "Basic SEO health checks",
      "Monthly performance report",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$375",
    description: "Most popular for growing businesses",
    features: [
      "15 social media assets",
      "8 short-form videos",
      "Monthly drone shoot & highlight reel",
      "20 edited photos",
      "Website tweaks & on-page SEO",
      "Bi-weekly reporting with insights",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$600+",
    description: "Full-service solution for established brands",
    features: [
      "Full content calendar planning",
      "Weekly video production",
      "Dedicated landing pages",
      "Ongoing SEO optimization",
      "Paid ads strategy & setup",
      "Advanced analytics & KPI tracking",
      "Dedicated account manager",
      "Priority 24/7 support",
    ],
    popular: false,
  },
];

const websitePricingTiers = [
  {
    name: "Basic Package",
    price: "$250",
    priceLabel: "FROM",
    description: "Perfect for small businesses and startups",
    icon: Globe,
    features: [
      { text: "Free Domain (.co.zw)", icon: Globe },
      { text: "Professional E-mail", icon: Mail },
      { text: "Up to 5 Pages", icon: Code },
      { text: "Mobile Responsive", icon: Smartphone },
      { text: "Basic SEO", icon: Search },
      { text: "Social Media Links", icon: Palette },
      { text: "Contact Form", icon: Mail },
    ],
    popular: false,
  },
  {
    name: "Premium Package",
    price: "$500",
    priceLabel: "FROM",
    description: "Ideal for growing businesses",
    icon: BarChart,
    features: [
      { text: "Free Domain (.co.zw)", icon: Globe },
      { text: "Professional E-mail", icon: Mail },
      { text: "Up to 20 Pages", icon: Code },
      { text: "Mobile Responsive", icon: Smartphone },
      { text: "Advanced SEO", icon: Search },
      { text: "Google Maps", icon: MapPin },
      { text: "Google Analytics", icon: BarChart },
      { text: "Advanced UI/UX", icon: Palette },
      { text: "Social Media Links", icon: Palette },
      { text: "Contact Form", icon: Mail },
    ],
    popular: true,
  },
  {
    name: "E-Commerce Package",
    price: "$700",
    priceLabel: "FROM",
    description: "Complete online store solution",
    icon: ShoppingCart,
    features: [
      { text: "Free Domain (.co.zw)", icon: Globe },
      { text: "Professional E-mail", icon: Mail },
      { text: "Unlimited Pages", icon: Code },
      { text: "Mobile Responsive", icon: Smartphone },
      { text: "Online Shop Setup", icon: ShoppingCart },
      { text: "Shopping Cart", icon: ShoppingCart },
      { text: "Payment Integration", icon: ShoppingCart },
      { text: "Advanced SEO", icon: Search },
      { text: "Google Maps", icon: MapPin },
      { text: "Google Analytics", icon: BarChart },
    ],
    popular: false,
  },
];

export function Pricing() {
  const [activeTab, setActiveTab] = useState("media");

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="pricing" className="py-12 md:py-24 bg-gray-50">
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
            <span className="text-[#FF0000] text-xs md:text-sm font-medium">Pricing</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{}}
          >
            Affordable Monthly Retainers
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{}}
          >
            Predictable pricing, exceptional value. Choose between our media
            packages or website development packages.
          </motion.p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          className="flex justify-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{}}
        >
          <div className="inline-flex bg-white rounded-xl p-1.5 shadow-sm border border-black/10">
            <motion.button
              onClick={() => setActiveTab("media")}
              className={`relative px-6 md:px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "media"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === "media" && (
                <motion.div
                  className="absolute inset-0 bg-[#FF0000] rounded-lg"
                  layoutId="tab-bg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                <Camera className="w-5 h-5" />
                Media
              </span>
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("website")}
              className={`relative px-6 md:px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "website"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === "website" && (
                <motion.div
                  className="absolute inset-0 bg-[#FF0000] rounded-lg"
                  layoutId="tab-bg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                <Globe className="w-5 h-5" />
                Website
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Media Packages */}
        <AnimatePresence mode="wait">
          {activeTab === "media" && (
            <motion.div
              key="media"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {mediaPricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                      tier.popular
                        ? "bg-black text-white shadow-2xl ring-4 ring-[#FF0000]/20"
                        : "bg-white border border-black/10 hover:shadow-xl"
                    }`}
                    variants={itemVariants}
                    whileHover={{ y: tier.popular ? -12 : -8, scale: 1.02 }}
                  >
                    {tier.popular && (
                      <motion.div
                        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF0000] text-white px-6 py-1.5 rounded-full text-sm font-medium shadow-lg"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Most Popular
                      </motion.div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="flex items-baseline mb-2">
                        <span className="text-3xl md:text-4xl font-bold">{tier.price}</span>
                        <span
                          className={`ml-2 text-sm md:text-base ${
                            tier.popular ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          /month
                        </span>
                      </div>
                      <p
                        className={`text-sm ${
                          tier.popular ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {tier.description}
                      </p>
                    </div>

                    <motion.ul
                      className="space-y-3 mb-8"
                      variants={containerVariants}
                    >
                      {tier.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start gap-3"
                          variants={itemVariants}
                        >
                          <Check
                            className={`w-5 h-5 mt-0.5 shrink-0 ${
                              tier.popular ? "text-[#FF0000]" : "text-[#FF0000]"
                            }`}
                          />
                          <span className="text-xs md:text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.button
                      className={`w-full py-3 rounded-lg font-medium transition-all ${
                        tier.popular
                          ? "bg-[#FF0000] text-white hover:bg-[#cc0000]"
                          : "bg-black text-white hover:bg-gray-800"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Media Add-ons */}
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 border border-black/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-bold mb-4">Popular Add-Ons</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Full Website Build", price: "Custom quote" },
                    { title: "Advanced SEO Campaign", price: "From $200/mo" },
                    { title: "Paid Ads Management", price: "From $300/mo" },
                    { title: "Event Production", price: "Custom quote" },
                  ].map((addon, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5, backgroundColor: "#f9fafb" }}
                      className="p-4 rounded-lg transition-colors"
                    >
                      <div className="font-semibold text-[#FF0000] mb-1">
                        {addon.title}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        {addon.price}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Website Packages */}
        <AnimatePresence mode="wait">
          {activeTab === "website" && (
            <motion.div
              key="website"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {websitePricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                      tier.popular
                        ? "bg-black text-white shadow-2xl ring-4 ring-[#FF0000]/20"
                        : "bg-white border border-black/10 hover:shadow-xl"
                    }`}
                    variants={itemVariants}
                    whileHover={{ y: tier.popular ? -12 : -8, scale: 1.02 }}
                  >
                    {tier.popular && (
                      <motion.div
                        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF0000] text-white px-6 py-1.5 rounded-full text-sm font-medium shadow-lg"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Most Popular
                      </motion.div>
                    )}

                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                        tier.popular ? "bg-[#FF0000]" : "bg-[#FF0000]/10"
                      }`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <tier.icon
                        className={`w-7 h-7 ${
                          tier.popular ? "text-white" : "text-[#FF0000]"
                        }`}
                      />
                    </motion.div>

                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="flex items-baseline mb-2">
                        <span className={`text-sm mr-2 ${
                          tier.popular ? "text-gray-300" : "text-gray-500"
                        }`}>
                          {tier.priceLabel}
                        </span>
                        <span className="text-3xl md:text-4xl font-bold">{tier.price}</span>
                      </div>
                      <p
                        className={`text-sm ${
                          tier.popular ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {tier.description}
                      </p>
                    </div>

                    <motion.ul
                      className="space-y-3 mb-8"
                      variants={containerVariants}
                    >
                      {tier.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start gap-3"
                          variants={itemVariants}
                        >
                          <div
                            className={`w-5 h-5 mt-0.5 rounded flex items-center justify-center shrink-0 ${
                              tier.popular ? "bg-[#FF0000]/20" : "bg-[#FF0000]/10"
                            }`}
                          >
                            <feature.icon
                              className={`w-3 h-3 ${
                                tier.popular ? "text-[#FF0000]" : "text-[#FF0000]"
                              }`}
                            />
                          </div>
                          <span className="text-xs md:text-sm">{feature.text}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.button
                      className={`w-full py-3 rounded-lg font-medium transition-all ${
                        tier.popular
                          ? "bg-[#FF0000] text-white hover:bg-[#cc0000]"
                          : "bg-black text-white hover:bg-gray-800"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Website Benefits */}
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="bg-white rounded-2xl p-6 md:p-8 border border-black/10"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-12 h-12 bg-[#FF0000]/10 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Code className="w-6 h-6 text-[#FF0000]" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold">What You Gain</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { icon: Search, title: "Get found on Google", subtitle: "by your customers" },
                      { icon: Camera, title: "Turn visitors into", subtitle: "paying clients" },
                      { icon: Check, title: "Fast, Secure &", subtitle: "Reliable Performance" },
                      { icon: Mail, title: "Receive Orders & Inquiries", subtitle: "directly to your WhatsApp" },
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        whileHover={{ x: 5 }}
                      >
                        <item.icon className="w-5 h-5 text-[#FF0000] mt-0.5 shrink-0" />
                        <div>
                          <div className="font-medium text-sm md:text-base">{item.title}</div>
                          <div className="text-xs md:text-sm text-gray-600">
                            {item.subtitle}
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-linear-to-br from-black to-gray-800 text-white rounded-2xl p-6 md:p-8"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-4">Additional Benefits</h3>
                  <ul className="space-y-4">
                    {[
                      { title: "Flexible Payment Plans", subtitle: "No large upfront costs" },
                      { title: "Custom Website Preview", subtitle: "After initial payment" },
                      { title: "24/7 Online Presence", subtitle: "Your business never sleeps" },
                    ].map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        whileHover={{ x: 5 }}
                      >
                        <Check className="w-5 h-5 text-[#FF0000] mt-0.5 shrink-0" />
                        <div>
                          <div className="font-medium text-sm md:text-base mb-1">{benefit.title}</div>
                          <div className="text-xs md:text-sm text-gray-300">
                            {benefit.subtitle}
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
