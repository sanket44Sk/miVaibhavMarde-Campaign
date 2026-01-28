import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Image as ImageIcon, Video } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryItems = [
  {
    type: "image",
    src: gallery1,
    title: "अभियान पोस्टर",
    category: "अभियान",
  },
  {
    type: "image",
    src: gallery2,
    title: "निवडणूक प्रचार",
    category: "अभियान",
  },
  {
    type: "image",
    src: gallery3,
    title: "जनतेसाठी समर्पित",
    category: "अभियान",
  },
  {
    type: "image",
    src: gallery4,
    title: "आमची कायम साथ",
    category: "अभियान",
  },
];

const categories = ["सर्व", "अभियान"];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("सर्व");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = selectedCategory === "सर्व"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-hero">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            फोटो गॅलरी
          </span>
          <h2 className="section-heading">कार्यक्रम आणि उपक्रम</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            आमच्या अभियानाची आणि जनसंपर्क कार्यक्रमांची झलक
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-gradient-saffron hover:opacity-90" 
                : "border-primary/30 text-primary hover:bg-primary/10"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item.src)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground font-semibold">{item.title}</p>
                <p className="text-primary-foreground/70 text-sm">{item.category}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-primary/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ImageIcon className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* Video Section Placeholder */}
        <div className="mt-12 bg-card rounded-2xl p-8 text-center shadow-card">
          <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
            <Video className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">व्हिडिओ गॅलरी</h3>
          <p className="text-muted-foreground mb-4">अभियान व्हिडिओ आणि संदेश लवकरच उपलब्ध होतील</p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            सूचना मिळवा
          </Button>
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-foreground/80 rounded-full flex items-center justify-center text-background hover:bg-foreground transition-colors z-10"
            >
              <X size={20} />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
