'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, ArrowRight, Check, Calendar, Users, Target, Lightbulb } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuizAnswers {
  personality: {
    groupRole: string;
    deadlines: string;
    problemSolving: string;
  };
  workHabits: {
    background: string;
    motivation: string;
    timeline: string;
  };
  leadData: {
    firstName: string;
    email: string;
    whatsapp: string;
    backgroundType: string;
  };
}

type QuizStep = 'welcome' | 'personality' | 'workHabits' | 'leadCapture' | 'results';

export const QuizModal = ({ isOpen, onClose }: QuizModalProps) => {
  const [currentStep, setCurrentStep] = useState<QuizStep>('welcome');
  const [answers, setAnswers] = useState<QuizAnswers>({
    personality: { groupRole: '', deadlines: '', problemSolving: '' },
    workHabits: { background: '', motivation: '', timeline: '' },
    leadData: { firstName: '', email: '', whatsapp: '', backgroundType: '' }
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const personalityQuestions = [
    {
      question: "When you're in a group project, what role do you naturally take?",
      options: [
        { value: 'A', text: 'The one keeping everyone on track' },
        { value: 'B', text: 'The one bringing ideas' },
        { value: 'C', text: 'The one doing most of the work quietly' },
        { value: 'D', text: 'I usually just follow others' }
      ],
      key: 'groupRole' as keyof QuizAnswers['personality']
    },
    {
      question: "How do you feel about deadlines?",
      options: [
        { value: 'A', text: 'I like the pressure — it keeps me sharp' },
        { value: 'B', text: 'I prefer to plan early and stay calm' },
        { value: 'C', text: 'I tend to rush last minute' },
        { value: 'D', text: 'I struggle to stay consistent' }
      ],
      key: 'deadlines' as keyof QuizAnswers['personality']
    },
    {
      question: "When a problem appears, what's your first instinct?",
      options: [
        { value: 'A', text: 'Organize a plan and assign tasks' },
        { value: 'B', text: 'Talk it through with everyone' },
        { value: 'C', text: 'Wait for someone else to lead' },
        { value: 'D', text: 'Ignore it until it becomes urgent' }
      ],
      key: 'problemSolving' as keyof QuizAnswers['personality']
    }
  ];

  const workHabitsQuestions = [
    {
      question: "Which best describes you right now?",
      options: [
        { value: 'A', text: "I'm a Support Worker looking to move up" },
        { value: 'B', text: "I'm a Graduate or Student exploring options" },
        { value: 'C', text: "I'm already in admin but want to grow into coordination" },
        { value: 'D', text: "I'm switching careers completely" }
      ],
      key: 'background' as keyof QuizAnswers['workHabits']
    },
    {
      question: "What motivates you the most right now?",
      options: [
        { value: 'A', text: 'Career stability and better income' },
        { value: 'B', text: 'Growth and new skills' },
        { value: 'C', text: 'Working with teams and structure' },
        { value: 'D', text: "I'm still figuring it out" }
      ],
      key: 'motivation' as keyof QuizAnswers['workHabits']
    },
    {
      question: "If you could join a live 4-week project and build a job-ready portfolio, when would you start?",
      options: [
        { value: 'A', text: 'Right away — this month' },
        { value: 'B', text: 'Next few months' },
        { value: 'C', text: 'Sometime next year' },
        { value: 'D', text: 'Not sure yet' }
      ],
      key: 'timeline' as keyof QuizAnswers['workHabits']
    }
  ];

  const handleAnswer = (questionKey: string, answer: string) => {
    if (currentStep === 'personality') {
      setAnswers(prev => ({
        ...prev,
        personality: { ...prev.personality, [questionKey]: answer }
      }));
    } else if (currentStep === 'workHabits') {
      setAnswers(prev => ({
        ...prev,
        workHabits: { ...prev.workHabits, [questionKey]: answer }
      }));
    }
  };

  const nextQuestion = () => {
    if (currentStep === 'personality' && currentQuestion < personalityQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else if (currentStep === 'personality' && currentQuestion === personalityQuestions.length - 1) {
      setCurrentStep('workHabits');
      setCurrentQuestion(0);
    } else if (currentStep === 'workHabits' && currentQuestion < workHabitsQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else if (currentStep === 'workHabits' && currentQuestion === workHabitsQuestions.length - 1) {
      setCurrentStep('leadCapture');
    }
  };

  const calculateResult = () => {
    const { personality, workHabits } = answers;
    
    const personalityScore = Object.values(personality).reduce((score, answer) => {
      const value = answer === 'A' ? 3 : answer === 'B' ? 2 : answer === 'C' ? 1 : 0;
      return score + value;
    }, 0);

    const motivationScore = workHabits.motivation === 'A' ? 3 : 
                          workHabits.motivation === 'B' ? 2 : 
                          workHabits.motivation === 'C' ? 1 : 0;

    if (personalityScore >= 7 && motivationScore >= 2) {
      return 'A';
    } else if (personalityScore >= 4 && motivationScore >= 1) {
      return 'B';
    } else {
      return 'C';
    }
  };

  const getResultContent = (resultType: string) => {
    switch (resultType) {
      case 'A':
        return {
          headline: "You're Built for Project Management",
          subtext: "You already think like a Project Manager. You naturally plan, organize, and take charge. With real-world experience, you could be job-ready in weeks.",
          cta: "Book a Fit Call →",
          ctaLink: "https://calendly.com/captainjon/projectcareer-cohort",
          features: [
            "Real-world projects",
            "One-to-one mentoring", 
            "Job support after completion"
          ],
          icon: Target,
          color: "text-orange-600"
        };
      case 'B':
        return {
          headline: "You've Got the Potential — You Just Need Structure",
          subtext: "You already have the traits of a future PM. All you need is a clear framework and live experience. The November cohort is built exactly for that.",
          cta: "Join the 4-Week Bootcamp →",
          ctaLink: "https://calendly.com/captainjon/projectcareer-cohort",
          features: [
            "4-week live projects",
            "Portfolio building",
            "Interview preparation"
          ],
          icon: Users,
          color: "text-orange-600"
        };
      default:
        return {
          headline: "You're Exploring — And That's Perfect",
          subtext: "Project management could open new doors for you. Come see what it looks like firsthand.",
          cta: "Reserve Open Day Seat →",
          ctaLink: "https://calendly.com/captainjon/projectcareer-cohort",
          features: [
            "See real portfolios",
            "Meet past learners",
            "No commitment required"
          ],
          icon: Lightbulb,
          color: "text-orange-600"
        };
    }
  };

  const handleLeadSubmit = () => {
    console.log('Lead data:', answers.leadData);
    
    // Trigger automation based on result type
    const resultType = calculateResult();
    triggerFollowUp(resultType, answers.leadData);
    
    setCurrentStep('results');
  };

  const triggerFollowUp = (resultType: string, leadData: QuizAnswers['leadData']) => {
    const { firstName, email, whatsapp, backgroundType } = leadData;
    
    switch (resultType) {
      case 'A':
        // Type A: Send WhatsApp message
        sendWhatsAppMessage(firstName, whatsapp);
        break;
      case 'B':
        // Type B: Send email sequence
        sendEmailSequence(firstName, email, backgroundType);
        break;
      case 'C':
        // Type C: Send Open Day invite
        sendOpenDayInvite(firstName, email, backgroundType);
        break;
    }
  };

  const sendWhatsAppMessage = (firstName: string, whatsapp: string) => {
    const message = `Hey ${firstName}, based on your quiz results, you're a strong fit for our Project Management Program. Let's confirm your spot — book your Fit Call here: https://calendly.com/captainjon/projectcareer-cohort`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Also log for backend integration
    console.log('WhatsApp message sent:', {
      to: whatsapp,
      message: message,
      type: 'Type A - Strong Fit'
    });
  };

  const sendEmailSequence = async (firstName: string, email: string, backgroundType: string) => {
    const emailData = {
      to: email,
      firstName: firstName,
      backgroundType: backgroundType,
      type: 'Type B - Bootcamp Invite',
      sequence: '2-email-bootcamp-invite',
      timestamp: new Date().toISOString()
    };
    
    // Log for backend email automation
    console.log('Email sequence triggered:', emailData);
    
    try {
      // Here you would typically send to your email service (Mailchimp, ConvertKit, etc.)
      // Example API call:
      // await fetch('/api/send-email-sequence', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(emailData)
      // });
      
      // For now, we'll show a success message
      alert(`Email sequence started for ${firstName}! Check your inbox for bootcamp details.`);
    } catch (error) {
      console.error('Error sending email sequence:', error);
    }
  };

  const sendOpenDayInvite = async (firstName: string, email: string, backgroundType: string) => {
    const inviteData = {
      to: email,
      firstName: firstName,
      backgroundType: backgroundType,
      type: 'Type C - Open Day Invite',
      sequence: 'open-day-invite-and-reminder',
      timestamp: new Date().toISOString()
    };
    
    // Log for backend email automation
    console.log('Open Day invite triggered:', inviteData);
    
    try {
      // Here you would typically send to your email service
      // Example API call:
      // await fetch('/api/send-open-day-invite', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(inviteData)
      // });
      
      // For now, we'll show a success message
      alert(`Open Day invite sent to ${firstName}! Check your email for event details.`);
    } catch (error) {
      console.error('Error sending open day invite:', error);
    }
  };

  const resetQuiz = () => {
    setCurrentStep('welcome');
    setCurrentQuestion(0);
    setAnswers({
      personality: { groupRole: '', deadlines: '', problemSolving: '' },
      workHabits: { background: '', motivation: '', timeline: '' },
      leadData: { firstName: '', email: '', whatsapp: '', backgroundType: '' }
    });
  };

  const renderWelcomeScreen = () => (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
        <Calendar className="w-8 h-8 text-orange-600" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900">Let's find out if Project Management is your next big move.</h2>
      <p className="text-gray-600 text-lg">This 2-minute quiz will show how close you already are to project management — and what your next step should be.</p>
      <Button onClick={() => setCurrentStep('personality')} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-6 text-lg">
        Start Quiz <ArrowRight className="ml-2" />
      </Button>
    </div>
  );

  const renderQuestionScreen = () => {
    const questions = currentStep === 'personality' ? personalityQuestions : workHabitsQuestions;
    const question = questions[currentQuestion];
    const currentAnswer = currentStep === 'personality' 
      ? answers.personality[question.key as keyof QuizAnswers['personality']]
      : answers.workHabits[question.key as keyof QuizAnswers['workHabits']];

    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="text-sm text-orange-600 font-semibold mb-3 tracking-wide">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="w-full bg-gradient-to-r from-orange-50 to-white rounded-lg p-4 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900">{question.question}</h3>
          </div>
        </div>
        
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(question.key, option.value)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all transform hover:scale-102 ${
                currentAnswer === option.value
                  ? 'border-orange-500 bg-orange-50 text-gray-900 shadow-md'
                  : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all ${
                  currentAnswer === option.value
                    ? 'border-orange-500 bg-orange-500'
                    : 'border-gray-300'
                }`}>
                  {currentAnswer === option.value && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className="font-semibold text-orange-600">{option.value}</span>
                <span className="ml-2 font-medium">{option.text}</span>
              </div>
            </button>
          ))}
        </div>

        <Button 
          onClick={nextQuestion} 
          disabled={!currentAnswer}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-6 text-base disabled:opacity-50"
        >
          {currentStep === 'personality' && currentQuestion === personalityQuestions.length - 1
            ? 'Continue to Next Section'
            : currentStep === 'workHabits' && currentQuestion === workHabitsQuestions.length - 1
            ? 'Continue to Results'
            : 'Next Question'
          } <ArrowRight className="ml-2" />
        </Button>
      </div>
    );
  };

  const renderLeadCapture = () => (
    <div className="space-y-6">
      <div className="text-center bg-gradient-to-r from-orange-50 to-white rounded-lg p-4 border border-orange-100">
        <h3 className="text-2xl font-bold text-gray-900">Almost there!</h3>
        <p className="text-gray-600 mt-2">We need a few details to show you your personalized results.</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="firstName" className="font-semibold text-gray-900">First Name</Label>
          <Input
            id="firstName"
            value={answers.leadData.firstName}
            onChange={(e) => setAnswers(prev => ({
              ...prev,
              leadData: { ...prev.leadData, firstName: e.target.value }
            }))}
            placeholder="Enter your first name"
            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-lg p-3"
          />
        </div>

        <div>
          <Label htmlFor="email" className="font-semibold text-gray-900">Email</Label>
          <Input
            id="email"
            type="email"
            value={answers.leadData.email}
            onChange={(e) => setAnswers(prev => ({
              ...prev,
              leadData: { ...prev.leadData, email: e.target.value }
            }))}
            placeholder="Enter your email"
            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-lg p-3"
          />
        </div>

        <div>
          <Label htmlFor="whatsapp" className="font-semibold text-gray-900">WhatsApp Number</Label>
          <Input
            id="whatsapp"
            value={answers.leadData.whatsapp}
            onChange={(e) => setAnswers(prev => ({
              ...prev,
              leadData: { ...prev.leadData, whatsapp: e.target.value }
            }))}
            placeholder="Enter your WhatsApp number"
            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-lg p-3"
          />
        </div>

        <div>
          <Label htmlFor="background" className="font-semibold text-gray-900">Which best describes you?</Label>
          <Select
            value={answers.leadData.backgroundType}
            onValueChange={(value) => setAnswers(prev => ({
              ...prev,
              leadData: { ...prev.leadData, backgroundType: value }
            }))}
          >
            <SelectTrigger className="border-gray-300 focus:border-orange-500 rounded-lg">
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

      <Button 
        onClick={handleLeadSubmit}
        disabled={!answers.leadData.firstName || !answers.leadData.email || !answers.leadData.whatsapp || !answers.leadData.backgroundType}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-6 text-base disabled:opacity-50"
      >
        Get My Results <ArrowRight className="ml-2" />
      </Button>
    </div>
  );

  const renderResults = () => {
    const resultType = calculateResult();
    const result = getResultContent(resultType);
    const IconComponent = result.icon;

    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
          <IconComponent className="w-8 h-8 text-orange-600" />
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-white rounded-lg p-6 border border-orange-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{result.headline}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{result.subtext}</p>
          
          {/* Automation Status */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-800">
                {resultType === 'A' 
                  ? 'WhatsApp message sent! Check your phone for next steps.'
                  : resultType === 'B'
                  ? 'Email sequence started! Check your inbox for bootcamp details.'
                  : 'Open Day invite sent! Check your email for event details.'
                }
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 space-y-3 border border-orange-100">
          {result.features.map((feature, index) => (
            <div key={index} className="flex items-center text-base text-gray-700">
              <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mr-3 flex-shrink-0">
                <Check className="w-3 h-3 text-orange-600" />
              </div>
              {feature}
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Button 
            onClick={() => window.open(result.ctaLink, '_blank')}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-6 text-base"
          >
            {result.cta}
          </Button>
          
          <div className="text-sm text-gray-700 bg-orange-50 rounded-lg p-4 border border-orange-200 font-semibold">
            🚀 Starts 15 Nov — 20 seats only
          </div>
        </div>

      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogTitle className="sr-only">
          {currentStep === 'welcome' && 'Project Management Quiz - Welcome'}
          {currentStep === 'personality' && 'Project Management Quiz - Personality Assessment'}
          {currentStep === 'workHabits' && 'Project Management Quiz - Work Habits Assessment'}
          {currentStep === 'leadCapture' && 'Project Management Quiz - Contact Information'}
          {currentStep === 'results' && 'Project Management Quiz - Your Results'}
        </DialogTitle>
        
        <div className="relative">
          <div>
            {currentStep === 'welcome' && renderWelcomeScreen()}
            {(currentStep === 'personality' || currentStep === 'workHabits') && renderQuestionScreen()}
            {currentStep === 'leadCapture' && renderLeadCapture()}
            {currentStep === 'results' && renderResults()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};