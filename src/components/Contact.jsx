import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your interest! We'll get back to you within 24 hours.",
    );
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#FF0000]/10 rounded-full mb-4">
            <span className="text-[#FF0000] text-sm font-medium">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Create Something Unreal?
          </h2>
          <p className="text-lg text-gray-600">
            Let's discuss how we can help grow your brand. Start with a free
            consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                  placeholder="Dancel Mautsa"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                  placeholder="unreel@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent resize-none"
                  placeholder="I'm interested in..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF0000] text-white px-8 py-4 rounded-lg hover:bg-[#cc0000] transition-all flex items-center justify-center gap-2 font-medium"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-gray-600 mb-8">
                Whether you need a full marketing overhaul or just want to
                explore what's possible, we're here to help. Reach out and let's
                create something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF0000]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#FF0000]" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email Us</div>
                  <a
                    href="mailto:hello@unreelmedia.com"
                    className="text-gray-600 hover:text-[#FF0000]"
                  >
                    hello@unreelmedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF0000]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#FF0000]" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Call Us</div>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-[#FF0000]"
                  >
                    +263 71 753 1571
                  </a>
                  <br></br>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-[#FF0000]"
                  >
                    +263 78 782 8366
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF0000]/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#FF0000]" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Visit Us</div>
                  <div className="text-gray-600">
                    123 Creative Street<br />
                    Marketing District, MD 12345
                  </div>
                </div>
              </div> */}
            </div>

            {/* CTA Box */}
            <div className="bg-black text-white rounded-2xl p-8 mt-8">
              <h4 className="text-xl font-bold mb-3">Try Before You Commit</h4>
              <p className="text-gray-300 mb-6">
                Not ready for a retainer? Start with our discounted one-month
                trial offer and experience the UNREEL difference.
              </p>
              <button className="bg-[#FF0000] text-white px-6 py-3 rounded-lg hover:bg-[#cc0000] transition-all font-medium">
                Learn About Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
