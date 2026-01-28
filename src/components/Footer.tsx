import { Facebook, Instagram, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/mivaibhavmarde?igsh=MXJ0dG5tNThqN2w0bw==", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/vaibhav_marde", label: "X (Twitter)" },
];

const quickLinks = [
  { href: "#home", label: "मुख्य पृष्ठ" },
  { href: "#about", label: "माझ्याबद्दल" },
  { href: "#vision", label: "दृष्टिकोन" },
  { href: "#contact", label: "संपर्क" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">🪷</span>
              </div>
              <div>
                <p className="font-bold text-lg">वैभव शिवाजी मर्डे</p>
                <p className="text-sm opacity-70">पंचायत समिती उमेदवार</p>
              </div>
            </div>
            <p className="text-sm opacity-70 max-w-xs">
              सलगरा (दिवटी) पंचायत समिती गणाच्या विकासासाठी समर्पित. 
              एकत्र मिळून समृद्ध भविष्याचे निर्माण करू या!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">द्रुत दुवे</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">सोशल मीडिया</h4>
            <p className="text-sm opacity-70 mb-4">
              अद्यतनांसाठी आम्हाला फॉलो करा
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-70">
              © २०२६ Sanket Konale +91-9604802604 .
              {/* वैभव शिवाजी मर्डे. सर्व हक्क राखीव */}
            </p>
            <p className="text-sm opacity-70 flex items-center gap-2">
              <span className="text-primary">🪷</span>
              भारतीय जनता पक्ष
              <span className="text-primary">🪷</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
