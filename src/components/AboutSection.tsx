import { GraduationCap, Heart, Users, Award, Leaf, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const qualities = [
  {
    icon: GraduationCap,
    title: "शिक्षण आणि पात्रता",
    description: "उच्च शिक्षित आणि सामाजिक कार्यात अनुभवी व्यक्तिमत्व",
  },
  {
    icon: Heart,
    title: "सेवा भावना",
    description: "गरीब आणि वंचित घटकांसाठी निस्वार्थ सेवा",
  },
  {
    icon: Users,
    title: "लोकसंपर्क",
    description: "गावातील प्रत्येक कुटुंबाशी जिव्हाळ्याचे नाते",
  },
  {
    icon: Award,
    title: "कार्यकुशलता",
    description: "समस्यांवर त्वरित आणि प्रभावी उपाय शोधण्याची क्षमता",
  },
  {
    icon: Leaf,
    title: "पर्यावरण जागृती",
    description: "हरित विकास आणि शाश्वत प्रगतीसाठी वचनबद्ध",
  },
  {
    icon: HandHeart,
    title: "सामाजिक बांधिलकी",
    description: "समाजातील सर्व घटकांच्या कल्याणासाठी कटिबद्ध",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            माझ्याबद्दल
          </span>
          <h2 className="section-heading">उमेदवाराची ओळख</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            सलगरा (दिवटी) पंचायत समिती गणाचे विकास आणि प्रगतीसाठी समर्पित उमेदवार
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-gradient-saffron rounded-full flex items-center justify-center text-primary-foreground">
                🪷
              </span>
              पार्श्वभूमी आणि अनुभव
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">वैभव शिवाजी मर्डे</strong> हे सलगरा (दिवटी) परिसरातील एक प्रतिष्ठित आणि लोकप्रिय व्यक्तिमत्व आहेत. गेल्या अनेक वर्षांपासून ते सामाजिक कार्यात सक्रिय असून गावाच्या विकासासाठी अथक परिश्रम घेत आहेत.
              </p>
              
              <p>
                शिक्षण क्षेत्रात त्यांनी उल्लेखनीय कामगिरी केली असून, तरुणांना रोजगाराच्या संधी उपलब्ध करून देण्यासाठी विविध उपक्रम राबवले आहेत.
              </p>
              
              <p>
                शेतकरी, महिला, वयोवृद्ध आणि युवकांच्या समस्या समजून घेऊन त्यांच्या निराकरणासाठी ते सतत प्रयत्नशील राहतात.
              </p>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-3">सामाजिक कार्य:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    गरजू विद्यार्थ्यांना शैक्षणिक मदत
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    महिला सक्षमीकरण कार्यक्रम
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    आरोग्य शिबिरांचे आयोजन
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    स्वच्छता अभियान
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Qualities Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {qualities.map((quality, index) => (
              <Card 
                key={index} 
                className="border-none shadow-card hover:shadow-elevated transition-shadow duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-saffron rounded-xl flex items-center justify-center mb-4">
                    <quality.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{quality.title}</h4>
                  <p className="text-sm text-muted-foreground">{quality.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
