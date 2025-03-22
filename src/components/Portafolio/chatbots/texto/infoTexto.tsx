import { Brain, Sparkles, Zap } from 'lucide-react';
import { ChatbotTexto } from '../../../../types';

export const chatbotTexto: ChatbotTexto[] = [
  {
    id: 1,
    name: "AssistAI",
    description: "A versatile AI assistant capable of handling complex conversations and tasks with natural language understanding.",
    capabilities: ["Natural Language Processing", "Task Automation", "Knowledge Base Integration"],
    icon: <Brain className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1677442136019-21c1f4b1ec0f?w=800&auto=format&fit=crop&q=60",
    features: [
      "Advanced context understanding",
      "Multi-turn conversation handling",
      "Personalized responses",
      "Real-time learning capabilities",
      "Multi-language support"
    ],
    useCases: [
      "Customer Support",
      "Personal Assistant",
      "Data Analysis",
      "Content Generation",
      "Process Automation"
    ],
    technicalSpecs: {
      language: "Python",
      framework: "TensorFlow",
      deployment: "Cloud-native",
      responseTime: "<100ms",
      accuracy: "98%"
    }
  },
  {
    id: 2,
    name: "SmartBot",
    description: "Intelligent chatbot designed for customer service with advanced problem-solving capabilities.",
    capabilities: ["24/7 Support", "Multi-language", "Custom Workflows"],
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1676320181466-7a5a7bb9b6fb?w=800&auto=format&fit=crop&q=60",
    features: [
      "Automated ticket routing",
      "Sentiment analysis",
      "Custom workflow integration",
      "Knowledge base management",
      "Analytics dashboard"
    ],
    useCases: [
      "Help Desk",
      "Sales Support",
      "Order Management",
      "FAQ Handling",
      "Lead Generation"
    ],
    technicalSpecs: {
      language: "Node.js",
      framework: "Express",
      deployment: "Kubernetes",
      responseTime: "<150ms",
      accuracy: "95%"
    }
  },
  {
    id: 3,
    name: "DataBot",
    description: "Specialized in data analysis and visualization, helping users understand complex datasets.",
    capabilities: ["Data Analysis", "Chart Generation", "Predictive Analytics"],
    icon: <Zap className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1677442136473-07c73b5a3745?w=800&auto=format&fit=crop&q=60",
    features: [
      "Real-time data processing",
      "Interactive visualizations",
      "Predictive modeling",
      "Automated reporting",
      "Data cleaning capabilities"
    ],
    useCases: [
      "Business Intelligence",
      "Market Analysis",
      "Financial Forecasting",
      "Performance Monitoring",
      "Trend Analysis"
    ],
    technicalSpecs: {
      language: "Python",
      framework: "FastAPI",
      deployment: "Docker",
      responseTime: "<200ms",
      accuracy: "99%"
    }
  }
];