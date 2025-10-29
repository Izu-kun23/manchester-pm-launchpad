'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, ArrowRight, Clipboard, Target, Users, Lightbulb, Calendar, CheckCircle } from 'lucide-react';
import { QuizAnswer, QuizQuestion, LeadData, QuizResult, QuizScores } from '@/types/quiz';
import { useToast } from '@/hooks/use-toast';

interface ProjectManagementQuizProps {
  onFitCallClick: () => void;
  onOpenDayClick: () => void;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    text: "When you're in a group project, what role do you naturally take?",
    answers: [
      { id: 'a1', text: 'The one keeping everyone on track', score: { leadership: 3, organization: 3, motivation: 2 } },
      { id: 'a2', text: 'The one bringing ideas', score: { leadership: 2, organization: 1, motivation: 3 } },
      { id: 'a3', text: 'The one doing most of the work quietly', score: { leadership: 1, organization: 2, motivation: 2 } },
      { id: 'a4', text: 'I usually just follow others', score: { leadership: 0, organization: 1, motivation: 1 } }
    ]
  },
  {
    id: 'q2',
    text: 'How do you feel about deadlines?',
    answers: [
      { id: 'b1', text: 'I like the pressure — it keeps me sharp', score: { leadership: 2, organization: 2, motivation: 3 } },
      { id: 'b2', text: 'I prefer to plan early and stay calm', score: { leadership: 2, organization: 3, motivation: 2 } },
      { id: 'b3', text: 'I tend to rush last minute', score: { leadership: 1, organization: 1, motivation: 2 } },
      { id: 'b4', text: 'I struggle to stay consistent', score: { leadership: 0, organization: 0, motivation: 1 } }
    ]
  },
  {
    id: 'q3',
    text: "When a problem appears, what's your first instinct?",
    answers: [
      { id: 'c1', text: 'Organize a plan and assign tasks', score: { leadership: 3, organization: 3, motivation: 3 } },
      { id: 'c2', text: 'Talk it through with everyone', score: { leadership: 2, organization: 1, motivation: 2 } },
      { id: 'c3', text: 'Wait for someone else to lead', score: { leadership: 0, organization: 1, motivation: 1 } },
      { id: 'c4', text: 'Ignore it until it becomes urgent', score: { leadership: 0, organization: 0, motivation: 0 } }
    ]
  },
  {
    id: 'q4',
    text: 'Which best describes you right now?',
    answers: [
      { id: 'd1', text: "I'm a Support Worker looking to move up", score: { leadership: 2, organization: 2, motivation: 3 } },
      { id: 'd2', text: "I'm a Graduate or Student exploring options", score: { leadership: 1, organization: 1, motivation: 2 } },
      { id: 'd3', text: "I'm already in admin but want to grow into coordination", score: { leadership: 2, organization: 3, motivation: 3 } },
      { id: 'd4', text: "I'm switching careers completely", score: { leadership: 1, organization: 1, motivation: 2 } }
    ]
  },
  {
    id: 'q5',
    text: 'What motivates you the most right now?',
    answers: [
      { id: 'e1', text: 'Career stability and better income', score: { leadership: 2, organization: 2, motivation: 3 } },
      { id: 'e2', text: 'Growth and new skills', score: { leadership: 2, organization: 2, motivation: 3 } },
      { id: 'e3', text: 'Working with teams and structure', score: { leadership: 3, organization: 3, motivation: 2 } },
      { id: 'e4', text: "I'm still figuring it out", score: { leadership: 1, organization: 1, motivation: 1 } }
    ]
  },
  {
    id: 'q6',
    text: 'If you could join a live 4-week project and build a job-ready portfolio, when would you start?',
    answers: [
      { id: 'f1', text: 'Right away — this month', score: { leadership: 3, organization: 2, motivation: 3 } },
      { id: 'f2', text: 'Next few months', score: { leadership: 2, organization: 2, motivation: 2 } },
      { id: 'f3', text: 'Sometime next year', score: { leadership: 1, organization: 1, motivation: 1 } },
      { id: 'f4', text: 'Not sure yet', score: { leadership: 0, organization: 1, motivation: 0 } }
    ]
  }
];

const getQuizResult = (scores: QuizScores): QuizResult => {
  const totalScore = scores.leadership + scores.organization + scores.motivation;
  const avgScore = totalScore / 3;

  if (avgScore >= 2.5) {
    return {
      type: 'A',
      headline: "You're Built for Project Management",
      subtext: "You already think like a Project Manager.",
      cta: "Book a Fit Call →",
      ctaLink: "fit-call",
      description: "You naturally plan, organize, and take charge. With real-world experience, you could be job-ready in weeks.",
      features: [
        "Real-world projects",
        "One-to-one mentoring", 
        "Job support after completion"
      ]
    };
  } else if (avgScore >= 1.5) {
    return {
      type: 'B',
      headline: "You've Got the Potential — You Just Need Structure",
      subtext: "You've got the instincts, you just need direction.",
      cta: "Join the November Cohort →",
      ctaLink: "fit-call",
      description: "Our 4-Week Bootcamp gives you the roadmap, templates, and mentorship to make the move confidently.",
      features: [
        "4-week live training",
        "Portfolio projects",
        "Interview prep"
      ]
    };
  } else {
    return {
      type: 'C',
      headline: "You're Curious — Let's Show You What's Possible",
      subtext: "You're at the discovery stage — and that's a good place to start.",
      cta: "Reserve Open Day Seat →",
      ctaLink: "open-day",
      description: "Come to our Open Day and see real project portfolios from past learners.",
      features: [
        "See real portfolios",
        "Meet past learners",
        "Ask questions"
      ]
    };
  }
};

export const ProjectManagementQuiz = ({ onFitCallClick, onOpenDayClick }: ProjectManagementQuizProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [leadData, setLeadData] = useState<LeadData>({
    firstName: '',
    email: '',
    whatsapp: '',
    background: 'graduate'
  });
  const [isComplete, setIsComplete] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const totalSteps = quizQuestions.length + 2; // +2 for welcome and lead capture

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  const handleNext = () => {
    if (currentStep < quizQuestions.length) {
      setCurrentStep(prev => prev + 1);
    } else if (currentStep === quizQuestions.length) {
      // Lead capture step
      setCurrentStep(prev => prev + 1);
    } else {
      // Save data and show results
      saveQuizData();
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateScores = (): QuizScores => {
    let leadership = 0;
    let organization = 0;
    let motivation = 0;

    quizQuestions.forEach(question => {
      const answerId = answers[question.id];
      if (answerId) {
        const answer = question.answers.find(a => a.id === answerId);
        if (answer) {
          leadership += answer.score.leadership;
          organization += answer.score.organization;
          motivation += answer.score.motivation;
        }
      }
    });

    return { leadership, organization, motivation };
  };

  const handleLeadDataChange = (field: keyof LeadData, value: string) => {
    setLeadData(prev => ({ ...prev, [field]: value }));
  };

  const saveQuizData = async () => {
    console.log('Starting to save quiz data...', { leadData, answers });
    setIsSaving(true);
    try {
      const scores = calculateScores();
      const result = getQuizResult(scores);
      
      console.log('Calculated scores and result:', { scores, result });
      
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: leadData.firstName,
          email: leadData.email,
          whatsapp: leadData.whatsapp,
          background: leadData.background,
          answers: answers,
          scores: scores,
          resultType: result.type,
        }),
      });

      console.log('API response:', response.status, response.statusText);

      if (response.ok) {
        const data = await response.json();
        console.log('Quiz data saved successfully:', data);
        
        // Show success toast
        toast({
          title: "Quiz Submitted Successfully! 🎉",
          description: "Your results have been saved. Check your email for next steps.",
          duration: 5000,
        });
      } else {
        const errorData = await response.text();
        console.error('Failed to save quiz data:', errorData);
        
        // Show error toast
        toast({
          title: "Submission Failed",
          description: "There was an error saving your quiz. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Error saving quiz data:', error);
      
      // Show error toast for network/other errors
      toast({
        title: "Submission Failed",
        description: "There was an error saving your quiz. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleCtaClick = (ctaLink: string) => {
    if (ctaLink === 'fit-call') {
      onFitCallClick();
    } else if (ctaLink === 'open-day') {
      onOpenDayClick();
    }
  };

  const isCurrentStepComplete = () => {
    if (currentStep === 0) return true; // Welcome step
    if (currentStep <= quizQuestions.length) {
      return answers[quizQuestions[currentStep - 1].id] !== undefined;
    }
    if (currentStep === quizQuestions.length + 1) {
      return leadData.firstName && leadData.email && leadData.whatsapp;
    }
    return false;
  };

  if (isComplete) {
    const scores = calculateScores();
    const result = getQuizResult(scores);

    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="p-8 text-center bg-white border-2 border-orange-500">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 rounded-full text-sm font-bold text-white mb-4">
              <Target className="w-4 h-4" />
              QUIZ RESULTS
            </div>
            <h2 className="text-3xl font-bold text-black mb-2">{result.headline}</h2>
            <p className="text-lg text-gray-600 mb-4">{result.subtext}</p>
            <p className="text-black mb-6">{result.description}</p>
          </div>

          <div className="mb-6">
            <p className="text-sm text-black mb-3 font-medium">What you'll get:</p>
            <div className="grid grid-cols-1 gap-2">
              {result.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-black">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full text-xs font-medium text-orange-600">
              <Calendar className="w-3 h-3" />
              Starts 15 Nov — 20 seats only
            </div>
          </div>

          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full"
            onClick={() => handleCtaClick(result.ctaLink)}
          >
            {result.cta}
          </Button>
        </Card>
      </div>
    );
  }

  if (currentStep === 0) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="p-8 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 rounded-full text-sm font-bold text-white mb-4">
              <Clipboard className="w-4 h-4" />
              PROJECT MANAGEMENT QUIZ
            </div>
            <h2 className="text-3xl font-bold mb-4">Let's find out if Project Management is your next big move.</h2>
            <p className="text-lg text-gray-600 mb-6">
              This 2-minute quiz will show how close you already are to project management — and what your next step should be.
            </p>
          </div>

          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
            onClick={handleNext}
          >
            Start Quiz
          </Button>
        </Card>
      </div>
    );
  }

  if (currentStep === quizQuestions.length + 1) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Almost there!</h2>
            <p className="text-gray-600">Tell us a bit about yourself to see your personalized results.</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={leadData.firstName}
                onChange={(e) => handleLeadDataChange('firstName', e.target.value)}
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={leadData.email}
                onChange={(e) => handleLeadDataChange('email', e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label htmlFor="whatsapp">WhatsApp Number *</Label>
              <Input
                id="whatsapp"
                value={leadData.whatsapp}
                onChange={(e) => handleLeadDataChange('whatsapp', e.target.value)}
                placeholder="Enter your WhatsApp number"
              />
            </div>

            <div>
              <Label htmlFor="background">Which best describes you? *</Label>
              <Select value={leadData.background} onValueChange={(value) => handleLeadDataChange('background', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your background" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="support-worker">Support Worker</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="career-switcher">Career Switcher</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button variant="outline" onClick={handlePrevious} className="flex-1">
              Previous
            </Button>
            <Button 
              onClick={handleNext}
              disabled={!isCurrentStepComplete() || isSaving}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
            >
              {isSaving ? 'Saving...' : 'See My Results'}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentStep - 1];
  const selectedAnswer = answers[currentQuestion.id];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-500">
              Question {currentStep} of {quizQuestions.length}
            </div>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-6">{currentQuestion.text}</h2>
        </div>

        <div className="space-y-3 mb-6">
          {currentQuestion.answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => handleAnswerSelect(currentQuestion.id, answer.id)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                selectedAnswer === answer.id
                  ? 'border-orange-500 bg-orange-50 text-orange-700'
                  : 'border-gray-200 hover:border-orange-300 hover:bg-orange-25'
              }`}
            >
              {answer.text}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex-1"
          >
            Previous
          </Button>
          <Button 
            onClick={handleNext}
            disabled={!isCurrentStepComplete()}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
          >
            {currentStep === quizQuestions.length ? 'Continue' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
