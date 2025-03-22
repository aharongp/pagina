import { ReactNode } from 'react';

export interface ChatbotTexto {
  id: number;
  name: string;
  description: string;
  capabilities: string[];
  icon: ReactNode;
  image: string;
  features?: string[];
  useCases?: string[];
  technicalSpecs?: {
    language: string;
    framework: string;
    deployment: string;
    responseTime: string;
    accuracy: string;
  };
}