import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    window.open("https://wa.me/447123456789?text=Hi! I'm interested in the PM Bootcamp", "_blank");
  };

  return (
    <Button
      size="lg"
      onClick={handleWhatsAppClick}
      className="fixed bottom-24 right-6 z-50 rounded-full w-16 h-16 p-0 shadow-xl hover:shadow-2xl transition-all"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
};