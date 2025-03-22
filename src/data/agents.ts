
import { Agent, AgentCategory } from "../types/agent";

export const agentCategories: { id: AgentCategory; name: string; icon: string; count: number }[] = [
  { id: 'All', name: 'All Agents', icon: '🔍', count: 120 },
  { id: 'Assistant', name: 'Virtual Assistants', icon: '🤖', count: 28 },
  { id: 'Chatbot', name: 'Chatbots', icon: '💬', count: 34 },
  { id: 'Trading', name: 'Trading & Investment', icon: '📈', count: 15 },
  { id: 'Automation', name: 'Business Automation', icon: '⚙️', count: 22 },
  { id: 'Healthcare', name: 'Healthcare & Medical', icon: '🏥', count: 18 },
  { id: 'Content', name: 'Content Generators', icon: '✍️', count: 26 },
  { id: 'Security', name: 'Cybersecurity', icon: '🔒', count: 12 },
  { id: 'Education', name: 'Education & Learning', icon: '🎓', count: 17 },
  { id: 'Analytics', name: 'Data Analytics', icon: '📊', count: 19 }
];

export const agents: Agent[] = [
  {
    id: '1',
    name: 'AskAI Assistant Pro',
    description: 'A sophisticated AI assistant that can help with a wide range of tasks, from answering questions to managing schedules and automating workflows. Built with the latest natural language processing technology, AskAI Assistant Pro understands context, remembers past interactions, and learns from user preferences to provide increasingly personalized assistance over time.',
    shortDescription: 'Your personal AI assistant for work and life',
    category: 'Assistant',
    pricing: {
      model: 'Subscription',
      amount: 9.99,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.8,
    reviewCount: 2345,
    developer: 'AskAI Technologies',
    tags: ['personal assistant', 'productivity', 'workflow', 'scheduling'],
    imageUrl: '/placeholder.svg',
    featured: true,
    popular: true
  },
  {
    id: '2',
    name: 'TradeGenius',
    description: 'TradeGenius is an advanced AI trading bot that analyzes market trends, executes trades, and manages investment portfolios with minimal human intervention. Using sophisticated algorithms and machine learning, it constantly adapts its strategies based on market conditions to maximize returns while managing risk.',
    shortDescription: 'AI-powered trading bot for smart investments',
    category: 'Trading',
    pricing: {
      model: 'Freemium',
      amount: 19.99,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.5,
    reviewCount: 1289,
    developer: 'FinTech Innovations',
    tags: ['trading', 'finance', 'investments', 'stocks'],
    imageUrl: '/placeholder.svg',
    popular: true
  },
  {
    id: '3',
    name: 'ContentCraft AI',
    description: 'Generate high-quality, SEO-optimized content for blogs, social media, and marketing materials with ContentCraft AI. This powerful content generator uses advanced natural language processing to create engaging, original text that resonates with your target audience, saving you hours of writing time.',
    shortDescription: 'Generate engaging content for all platforms',
    category: 'Content',
    pricing: {
      model: 'Pay-per-use',
      amount: 0.02,
      currency: 'USD',
      period: 'word'
    },
    rating: 4.7,
    reviewCount: 1876,
    developer: 'Digital Content Solutions',
    tags: ['content', 'writing', 'SEO', 'marketing'],
    imageUrl: '/placeholder.svg',
    featured: true
  },
  {
    id: '4',
    name: 'MedAssist AI',
    description: 'MedAssist AI helps healthcare providers analyze medical records, identify potential diagnoses, and recommend treatment plans based on the latest medical research. It streamlines patient care by processing vast amounts of medical data quickly and accurately, allowing doctors to make more informed decisions.',
    shortDescription: 'AI diagnostics assistant for healthcare professionals',
    category: 'Healthcare',
    pricing: {
      model: 'Subscription',
      amount: 199.99,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.9,
    reviewCount: 942,
    developer: 'HealthTech Innovations',
    tags: ['healthcare', 'diagnostics', 'medical', 'patient care'],
    imageUrl: '/placeholder.svg',
    new: true
  },
  {
    id: '5',
    name: 'CyberSentinel',
    description: 'CyberSentinel provides real-time threat detection and protection for your digital assets. Using advanced AI algorithms, it identifies potential security breaches, unusual network activity, and vulnerability points in your systems, then automatically implements countermeasures to keep your data safe.',
    shortDescription: 'AI-powered cybersecurity protection',
    category: 'Security',
    pricing: {
      model: 'Subscription',
      amount: 49.99,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.6,
    reviewCount: 1047,
    developer: 'CyberDefense Systems',
    tags: ['security', 'cybersecurity', 'protection', 'threat detection'],
    imageUrl: '/placeholder.svg'
  },
  {
    id: '6',
    name: 'EduMentor AI',
    description: 'EduMentor AI creates personalized learning experiences for students of all ages, adapting to individual learning styles, pace, and preferences. It provides interactive lessons, exercises, and quizzes, then analyzes performance data to focus on areas that need improvement, making education more effective and engaging.',
    shortDescription: 'Personalized AI tutor for continuous learning',
    category: 'Education',
    pricing: {
      model: 'Freemium',
      amount: 12.99,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.7,
    reviewCount: 1532,
    developer: 'EdTech Solutions',
    tags: ['education', 'learning', 'tutoring', 'personal development'],
    imageUrl: '/placeholder.svg',
    popular: true
  },
  {
    id: '7',
    name: 'BusinessBot',
    description: 'BusinessBot automates routine business tasks like scheduling, customer inquiries, invoice processing, and data entry. This versatile automation agent integrates with your existing software systems to streamline workflows, reduce manual errors, and free up your team to focus on higher-value tasks.',
    shortDescription: 'Business process automation for efficiency',
    category: 'Automation',
    pricing: {
      model: 'Subscription',
      amount: 29.99,
      currency: 'USD',
      period: 'month'
    },
    rating: 4.4,
    reviewCount: 876,
    developer: 'Automation Enterprises',
    tags: ['business', 'automation', 'workflow', 'productivity'],
    imageUrl: '/placeholder.svg'
  },
  {
    id: '8',
    name: 'DataInsight Pro',
    description: 'Transform raw data into actionable insights with DataInsight Pro. This advanced analytics agent processes large datasets, identifies patterns and trends, and presents findings through intuitive visualizations and reports, helping businesses make data-driven decisions quickly and confidently.',
    shortDescription: 'Turn data into actionable business insights',
    category: 'Analytics',
    pricing: {
      model: 'Pay-per-use',
      amount: 0.05,
      currency: 'USD',
      period: 'MB'
    },
    rating: 4.8,
    reviewCount: 754,
    developer: 'Data Analytics Solutions',
    tags: ['analytics', 'data science', 'business intelligence', 'reporting'],
    imageUrl: '/placeholder.svg',
    featured: true
  }
];

export const getFeaturedAgents = (): Agent[] => {
  return agents.filter(agent => agent.featured);
};

export const getPopularAgents = (): Agent[] => {
  return agents.filter(agent => agent.popular).slice(0, 4);
};

export const getAgentsByCategory = (category: AgentCategory): Agent[] => {
  if (category === 'All') return agents;
  return agents.filter(agent => agent.category === category);
};

export const getAgentById = (id: string): Agent | undefined => {
  return agents.find(agent => agent.id === id);
};

export const searchAgents = (query: string): Agent[] => {
  const lowerCaseQuery = query.toLowerCase();
  return agents.filter(
    agent => 
      agent.name.toLowerCase().includes(lowerCaseQuery) ||
      agent.description.toLowerCase().includes(lowerCaseQuery) ||
      agent.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
  );
};
