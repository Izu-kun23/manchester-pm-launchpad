'use client';

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Direct to ProjectCareer WhatsApp link
    window.open("https://wa.link/5wfig7", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Hover message */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Message us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
      
      {/* WhatsApp Button */}
      <Button
        size="lg"
        onClick={handleWhatsAppClick}
        className="rounded-full w-16 h-16 p-0 shadow-xl transition-all bg-green-500 hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Button>
    </div>
  );
};