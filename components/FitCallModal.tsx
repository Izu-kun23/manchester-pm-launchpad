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
          <iframe
            src="https://calendly.com/captainjon/projectcareer-cohort"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book Fit Call"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};