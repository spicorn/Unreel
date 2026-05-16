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

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 bg-[#FF0000]/10 rounded-full mb-4">
            <span className="text-[#FF0000] text-sm font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Affordable Monthly Retainers
          </h2>
          <p className="text-lg text-gray-600">
            Predictable pricing, exceptional value. Choose between our media
            packages or website development packages.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl p-1.5 shadow-sm border border-black/10">
            <button
              onClick={() => setActiveTab("media")}
              className={`relative px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "media"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {activeTab === "media" && (
                <div className="absolute inset-0 bg-[#FF0000] rounded-lg"></div>
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Media Packages
              </span>
            </button>
            <button
              onClick={() => setActiveTab("website")}
              className={`relative px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "website"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {activeTab === "website" && (
                <div className="absolute inset-0 bg-[#FF0000] rounded-lg"></div>
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Website Packages
              </span>
            </button>
          </div>
        </div>

        {/* Media Packages */}
        {activeTab === "media" && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {mediaPricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    tier.popular
                      ? "bg-black text-white shadow-2xl scale-105 ring-4 ring-[#FF0000]/20"
                      : "bg-white border border-black/10 hover:shadow-xl"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF0000] text-white px-6 py-1.5 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span
                        className={`ml-2 ${
                          tier.popular ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        /month
                      </span>
                    </div>
                    <p
                      className={
                        tier.popular ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 mt-0.5 shrink-0 ${
                            tier.popular ? "text-[#FF0000]" : "text-[#FF0000]"
                          }`}
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-all ${
                      tier.popular
                        ? "bg-[#FF0000] text-white hover:bg-[#cc0000]"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            {/* Media Add-ons */}
            <div className="bg-white rounded-2xl p-8 border border-black/10">
              <h3 className="text-xl font-bold mb-4">Popular Add-Ons</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="font-semibold text-[#FF0000] mb-1">
                    Full Website Build
                  </div>
                  <div className="text-sm text-gray-600">Custom quote</div>
                </div>
                <div>
                  <div className="font-semibold text-[#FF0000] mb-1">
                    Advanced SEO Campaign
                  </div>
                  <div className="text-sm text-gray-600">From $200/mo</div>
                </div>
                <div>
                  <div className="font-semibold text-[#FF0000] mb-1">
                    Paid Ads Management
                  </div>
                  <div className="text-sm text-gray-600">From $300/mo</div>
                </div>
                <div>
                  <div className="font-semibold text-[#FF0000] mb-1">
                    Event Production
                  </div>
                  <div className="text-sm text-gray-600">Custom quote</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Website Packages */}
        {activeTab === "website" && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {websitePricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    tier.popular
                      ? "bg-black text-white shadow-2xl scale-105 ring-4 ring-[#FF0000]/20"
                      : "bg-white border border-black/10 hover:shadow-xl"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF0000] text-white px-6 py-1.5 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                      tier.popular ? "bg-[#FF0000]" : "bg-[#FF0000]/10"
                    }`}
                  >
                    <tier.icon
                      className={`w-7 h-7 ${
                        tier.popular ? "text-white" : "text-[#FF0000]"
                      }`}
                    />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="flex items-baseline mb-2">
                      <span
                        className={`text-sm mr-2 ${
                          tier.popular ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        {tier.priceLabel}
                      </span>
                      <span className="text-4xl font-bold">{tier.price}</span>
                    </div>
                    <p
                      className={
                        tier.popular ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
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
                        <span className="text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-all ${
                      tier.popular
                        ? "bg-[#FF0000] text-white hover:bg-[#cc0000]"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            {/* Website Benefits */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border border-black/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#FF0000]/10 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-[#FF0000]" />
                  </div>
                  <h3 className="text-xl font-bold">What You Gain</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-[#FF0000] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium">Get found on Google</div>
                      <div className="text-sm text-gray-600">
                        by your customers
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-[#FF0000] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium">Turn visitors into</div>
                      <div className="text-sm text-gray-600">
                        paying clients
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF0000] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium">Fast, Secure &</div>
                      <div className="text-sm text-gray-600">
                        Reliable Performance
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#FF0000] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium">
                        Receive Orders & Inquiries
                      </div>
                      <div className="text-sm text-gray-600">
                        directly to your WhatsApp
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-linear-to-br from-black to-gray-800 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Additional Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF0000] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium mb-1">
                        Flexible Payment Plans
                      </div>
                      <div className="text-sm text-gray-300">
                        No large upfront costs
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF0000] mt-0.5         shrink-0" />
                    <div>
                      <div className="font-medium mb-1">
                        Custom Website Preview
                      </div>
                      <div className="text-sm text-gray-300">
                        After initial payment
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF0000] mt-0.5         shrink-0" />
                    <div>
                      <div className="font-medium mb-1">
                        24/7 Online Presence
                      </div>
                      <div className="text-sm text-gray-300">
                        Your business never sleeps
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
