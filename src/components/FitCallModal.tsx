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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Book Your 10-Minute Fit Call</DialogTitle>
          <DialogDescription>
            Choose a time that works best for you
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 w-full h-full">
          {/* Replace with your actual Calendly link */}
          <iframe
            src="https://calendly.com/your-link-here"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book Fit Call"
          />
          <div className="text-center p-8 text-muted-foreground">
            <p>Connect your Calendly account or replace this with your booking system.</p>
            <p className="text-sm mt-2">Update the src URL in FitCallModal.tsx</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};