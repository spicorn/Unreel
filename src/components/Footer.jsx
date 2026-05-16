import { Podcast } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl">UN</span>
              <div className="w-0.5 h-6 bg-[#FF0000]"></div>
              <span className="font-bold text-xl">REEL</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Unreal stories with real impact
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF0000] transition-colors"
              >
                <Podcast className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF0000] transition-colors"
              >
                <Podcast className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF0000] transition-colors"
              >
                <Podcast className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF0000] transition-colors"
              >
                <Podcast className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-[#FF0000] transition-colors"
                >
                  Brand Identity
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#FF0000] transition-colors"
                >
                  Photography
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#FF0000] transition-colors"
                >
                  Videography
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#FF0000] transition-colors"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#FF0000] transition-colors"
                >
                  SEO & Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#FF0000] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-[#FF0000] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF0000] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF0000] transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#FF0000] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get marketing tips and creative insights delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
              />
              <button className="bg-[#FF0000] px-4 py-2 rounded-lg hover:bg-[#cc0000] transition-colors text-sm font-medium">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>© {currentYear} UNREEL MEDIA. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FF0000] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#FF0000] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#FF0000] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
