import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "फोन नंबर",
    value: "+91 96734 87456",
    action: "tel:+919673487456",
  },
  {
    icon: Mail,
    label: "व्हॉट्सअॅप",
    value: "+91 96734 87456",
    action: "https://wa.me/919673487456",
  },
  {
    icon: MapPin,
    label: "कार्यालय पत्ता",
    value: "सलगरा (दिवटी), पंचायत समिती गण",
    action: null,
  },
  {
    icon: Clock,
    label: "मतदान दिनांक",
    value: "गुरुवार, दि. ०५/०२/२०२५ - सकाळी ७:३० ते सायं. ५:३०",
    action: null,
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("आपला संदेश यशस्वीरित्या पाठवला गेला!");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            संपर्क आणि समर्थन
          </span>
          <h2 className="section-heading">आमच्याशी संपर्क साधा</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            आपल्या सूचना, समस्या किंवा पाठिंबा नोंदवण्यासाठी आमच्याशी संपर्क करा
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-none shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">संपर्क माहिती</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.action || "#"}
                      className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
                        info.action ? "hover:bg-primary/5 cursor-pointer" : ""
                      }`}
                    >
                      <div className="w-12 h-12 bg-gradient-saffron rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="border-none shadow-card bg-secondary text-secondary-foreground overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary-foreground/10 rounded-full flex items-center justify-center text-3xl">
                    💬
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">व्हॉट्सअॅपवर संपर्क करा</h3>
                    <p className="text-sm opacity-80">त्वरित प्रतिसादासाठी</p>
                  </div>
                </div>
                <Button 
                  className="w-full mt-4 bg-secondary-foreground/20 hover:bg-secondary-foreground/30 text-secondary-foreground"
                  onClick={() => window.open("https://wa.me/919673487456", "_blank")}
                >
                  व्हॉट्सअॅपवर मेसेज करा
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-card">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">संदेश पाठवा</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    आपले नाव *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="आपले पूर्ण नाव लिहा"
                    className="bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    फोन नंबर *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="आपला मोबाइल नंबर"
                    className="bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    आपला संदेश *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="आपली सूचना, समस्या किंवा संदेश लिहा..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-saffron hover:opacity-90 shadow-button"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  संदेश पाठवा
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
