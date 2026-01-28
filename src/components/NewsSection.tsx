import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    date: "२५ जानेवारी २०२६",
    title: "सलगरा येथे जाहीर सभा",
    description: "येत्या रविवारी सायंकाळी ५ वाजता सलगरा ग्रामपंचायत मैदानावर जाहीर सभा आयोजित करण्यात आली आहे.",
    type: "कार्यक्रम",
    location: "सलगरा ग्रामपंचायत मैदान",
    time: "सायंकाळी ५:००",
  },
  {
    date: "२३ जानेवारी २०२६",
    title: "दिवटी गावी घरोघरी भेट",
    description: "उमेदवारांनी दिवटी गावातील प्रत्येक घरी भेट देऊन ग्रामस्थांच्या समस्या जाणून घेतल्या.",
    type: "बातमी",
    location: "दिवटी",
    time: "",
  },
  {
    date: "२० जानेवारी २०२६",
    title: "युवक मेळावा यशस्वी",
    description: "परिसरातील शेकडो युवक-युवतींनी मेळाव्यात सहभाग घेतला. रोजगार आणि शिक्षण या विषयांवर चर्चा झाली.",
    type: "बातमी",
    location: "सलगरा",
    time: "",
  },
];

const upcomingEvents = [
  {
    date: "२८ जाने",
    title: "महिला सक्षमीकरण कार्यशाळा",
    time: "सकाळी १०:००",
  },
  {
    date: "३० जाने",
    title: "शेतकरी संवाद सभा",
    time: "दुपारी ३:००",
  },
  {
    date: "१ फेब्रु",
    title: "वृद्धांसाठी आरोग्य शिबीर",
    time: "सकाळी ९:००",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            बातम्या आणि अद्यतने
          </span>
          <h2 className="section-heading">अभियान अद्यतने</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            दैनंदिन अभियान कार्यक्रम आणि महत्त्वाच्या घोषणा
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News */}
          <div className="lg:col-span-2 space-y-6">
            {newsItems.map((news, index) => (
              <Card 
                key={index} 
                className="border-none shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-saffron rounded-xl flex flex-col items-center justify-center text-primary-foreground">
                      <Calendar className="w-5 h-5 mb-1" />
                      <span className="text-xs font-medium">{news.date.split(" ")[0]}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          variant={news.type === "कार्यक्रम" ? "default" : "secondary"}
                          className={news.type === "कार्यक्रम" ? "bg-gradient-saffron" : ""}
                        >
                          {news.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{news.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-3">{news.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        {news.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {news.location}
                          </span>
                        )}
                        {news.time && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {news.time}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button 
              variant="outline" 
              className="w-full border-primary text-primary hover:bg-primary/10"
            >
              सर्व बातम्या पहा
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="space-y-6">
            <Card className="border-none shadow-card bg-gradient-saffron text-primary-foreground overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">आगामी कार्यक्रम</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-primary-foreground/10 rounded-lg backdrop-blur-sm"
                    >
                      <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex flex-col items-center justify-center text-xs font-bold">
                        {event.date.split(" ").map((part, i) => (
                          <span key={i}>{part}</span>
                        ))}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{event.title}</p>
                        <p className="text-xs opacity-80">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Announcement */}
            <Card className="border-none shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  📢 महत्त्वाची सूचना
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  मतदार यादीत आपले नाव असल्याची खात्री करा. मतदार नोंदणीसाठी संपर्क करा.
                </p>
                <Button 
                  size="sm"
                  className="w-full bg-gradient-saffron hover:opacity-90"
                >
                  अधिक माहिती
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
