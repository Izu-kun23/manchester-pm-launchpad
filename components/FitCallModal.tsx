import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FitCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FitCallModal = ({ isOpen, onClose }: FitCallModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] h-[85vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle>Book Your 10-Minute Fit Call</DialogTitle>
          <DialogDescription>
            Choose a time that works best for you
          </DialogDescription>
        </DialogHeader>
        <div className="relative flex-1 px-6 pb-6">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                <p className="text-sm text-gray-600">Loading calendar...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://calendly.com/captainjon/projectcareer-cohort"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book Fit Call"
            className="rounded-lg"
            onLoad={() => setIsLoading(false)}
            style={{ minHeight: '500px' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};