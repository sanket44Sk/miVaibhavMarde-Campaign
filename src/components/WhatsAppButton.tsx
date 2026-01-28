import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/919673487456?text=नमस्कार, मला वैभव शिवाजी मर्डे यांच्याशी संपर्क साधायचा आहे.", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-transform duration-300 group"
      aria-label="WhatsApp वर संपर्क करा"
    >
      <MessageCircle className="w-7 h-7 text-secondary-foreground" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-card text-foreground text-sm font-medium rounded-lg shadow-card whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        व्हॉट्सॲप वर संपर्क करा
      </span>
      
      {/* Ping Animation */}
      <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-30" />
    </button>
  );
};

export default WhatsAppButton;
