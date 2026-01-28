import { Droplets, Route, Briefcase, Shield, GraduationCap, Stethoscope, Wheat, TreeDeciduous } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const visionPoints = [
  {
    icon: Route,
    title: "उत्तम रस्ते व पायाभूत सुविधा",
    description: "गावातील सर्व रस्त्यांचे डांबरीकरण आणि आधुनिक पायाभूत सुविधांचा विकास",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Droplets,
    title: "स्वच्छ पाणी पुरवठा",
    description: "प्रत्येक घरापर्यंत शुद्ध आणि पुरेसे पाणी पोहोचवण्याची हमी",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Briefcase,
    title: "रोजगार निर्मिती",
    description: "स्थानिक युवकांसाठी रोजगाराच्या संधी आणि कौशल्य विकास प्रशिक्षण",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Shield,
    title: "सुरक्षा आणि संरक्षण",
    description: "गावाच्या सुरक्षिततेसाठी सीसीटीव्ही आणि पथदिवे बसवणे",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: GraduationCap,
    title: "शिक्षणाचा विकास",
    description: "शाळांचे आधुनिकीकरण आणि गुणवत्तापूर्ण शिक्षणाची उपलब्धता",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Stethoscope,
    title: "आरोग्य सेवा",
    description: "प्राथमिक आरोग्य केंद्र सुधारणा आणि विनामूल्य आरोग्य शिबिरे",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Wheat,
    title: "शेतकरी कल्याण",
    description: "शेतकऱ्यांना योग्य भाव, सिंचन सुविधा आणि शासकीय योजनांचा लाभ",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: TreeDeciduous,
    title: "पर्यावरण संवर्धन",
    description: "वृक्षारोपण मोहीम आणि हरित गाव अभियान",
    color: "from-emerald-500 to-emerald-600",
  },
];

const targetGroups = [
  { label: "युवक", emoji: "👨‍🎓", description: "रोजगार, शिक्षण आणि कौशल्य विकास" },
  { label: "शेतकरी", emoji: "👨‍🌾", description: "योग्य भाव, सिंचन सुविधा" },
  { label: "महिला", emoji: "👩", description: "सक्षमीकरण आणि सुरक्षितता" },
  { label: "वयोवृद्ध", emoji: "👴", description: "आरोग्य सेवा आणि पेन्शन" },
];

const VisionSection = () => {
  return (
    <section id="vision" className="py-20 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            दृष्टिकोन आणि घोषणापत्र
          </span>
          <h2 className="section-heading">विकासाची वचने</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            पारदर्शक शासन आणि सर्वसमावेशक विकासासाठी आमची वचनबद्धता
          </p>
        </div>

        {/* Target Groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {targetGroups.map((group, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 text-center shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-4xl mb-3 block">{group.emoji}</span>
              <h4 className="font-bold text-foreground mb-1">{group.label}</h4>
              <p className="text-sm text-muted-foreground">{group.description}</p>
            </div>
          ))}
        </div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionPoints.map((point, index) => (
            <Card
              key={index}
              className="border-none shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className={`h-2 bg-gradient-to-r ${point.color}`} />
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <point.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{point.title}</h4>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Promise Banner */}
        <div className="mt-16 bg-gradient-saffron rounded-2xl p-8 md:p-12 text-center text-primary-foreground shadow-elevated">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🪷 पारदर्शक शासन, सर्वांचा विकास 🪷
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            आम्ही वचन देतो की प्रत्येक निर्णय पारदर्शकपणे घेतला जाईल आणि विकासाचे फायदे सर्व नागरिकांपर्यंत समान रित्या पोहोचतील.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
