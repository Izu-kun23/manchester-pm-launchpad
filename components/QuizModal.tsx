'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ProjectManagementQuiz } from './ProjectManagementQuiz';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFitCallClick: () => void;
  onOpenDayClick: () => void;
}

export const QuizModal = ({ isOpen, onClose, onFitCallClick, onOpenDayClick }: QuizModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white p-0">
        <DialogTitle className="sr-only">Is Project Management For Me? - Quiz</DialogTitle>
        <ProjectManagementQuiz 
          onFitCallClick={onFitCallClick}
          onOpenDayClick={onOpenDayClick}
        />
      </DialogContent>
    </Dialog>
  );
};