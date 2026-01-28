import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import candidatePhoto from "@/assets/candidate-photo.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      

      {/* Content */}
      <div className="section-container relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
              <span className="text-2xl">🪷</span>
              <span className="text-sm font-medium text-primary">भारतीय जनता पक्ष</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              वैभव शिवाजी मर्डे
            </h1>

            <p className="text-xl md:text-2xl font-medium text-primary mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              पंचायत समिती उमेदवार
            </p>

            <p className="text-lg text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              सलगरा (दिवटी) पंचायत समिती गण
            </p>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-card animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-2xl md:text-3xl font-bold text-gradient-saffron mb-3">
                "विकासाची नवी पहाट, सर्वांच्या प्रगतीसाठी!"
              </p>
              <p className="text-muted-foreground">
                आमचा गाव, आमचा विकास - एकत्र मिळून समृद्ध भविष्याचे निर्माण करू या!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Button 
                size="lg" 
                className="bg-gradient-saffron hover:opacity-90 shadow-button text-lg px-8 py-6"
              >
                बदलासाठी मतदान करा 🗳️
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                अधिक जाणून घ्या
              </Button> */}
            </div>
          </div>

          {/* Candidate Photo */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 bg-gradient-saffron rounded-full opacity-20 blur-xl animate-pulse-soft" />
              
              {/* Photo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-elevated">
                <img
                  src={candidatePhoto}
                  alt="वैभव शिवाजी मर्डे"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BJP Lotus Badge */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-saffron rounded-full flex items-center justify-center shadow-button animate-float">
                <span className="text-4xl">🪷</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">अधिक जाणून घ्या</span>
            <ChevronDown size={24} />
          </a>
        </div> */}



{/* Scroll Indicator */}
<div className="flex justify-center mt-6 md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 animate-bounce">
  <a
    href="#about"
    className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
  >
    <span className="text-sm mb-1">अधिक जाणून घ्या</span>
    <ChevronDown size={22} />
  </a>
</div>





      </div>
    </section>
  );
};

export default HeroSection;
