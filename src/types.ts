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
    lenguaje: string;
    plataforma: string;
    despliegue: string;
    respuesta: string;
    precision: string;
  };
  src1: string;
  src2: string;
}

export interface ChatbotVoz{
  id: number;
  name: string;
  description: string;
  capabilities: string[];
  icon: ReactNode;
  image: string;
  features?: string[];
  useCases?: string[];
  technicalSpecs?: {
    lenguaje: string;
    plataforma: string;
    despliegue: string;
    respuesta: string;
    precision: string;
  };
  agentId: string;
}