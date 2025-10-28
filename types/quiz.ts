export interface QuizAnswer {
  id: string;
  text: string;
  score: {
    leadership: number;
    organization: number;
    motivation: number;
  };
}

export interface QuizQuestion {
  id: string;
  text: string;
  answers: QuizAnswer[];
}

export interface LeadData {
  firstName: string;
  email: string;
  whatsapp: string;
  background: 'support-worker' | 'graduate' | 'career-switcher' | 'other';
}

export interface QuizResult {
  type: 'A' | 'B' | 'C';
  headline: string;
  subtext: string;
  cta: string;
  ctaLink: string;
  description: string;
  features: string[];
}

export interface QuizScores {
  leadership: number;
  organization: number;
  motivation: number;
}
