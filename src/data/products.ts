import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'ai-sales-prompt-pack',
    name: 'AI Sales Prompt Pack',
    tagline: '55 Battle-Tested Sales Prompts',
    description:
      '55 expertly crafted AI prompts organized across 8 sales stages — from prospect research to closing. Filter by category, save favorites, and build your own custom prompt library.',
    category: 'Sales Intelligence',
    status: 'live',
    icon: 'MessageSquare',
    features: ['55 curated prompts', '8 sales categories', 'Favorites & custom prompts', 'Copy-to-clipboard'],
    link: '/src/assets/AI_Sales_Prompt_Pack_CapitaCoreAI.html',
  },
  {
    id: 'monthly-budget-planner',
    name: 'Monthly Budget Planner',
    tagline: 'Personal Finance Dashboard',
    description:
      'A full-featured personal budget planner with income tracking, category budgets, transaction logging, debt tracker, savings goals, and a yearly trend overview — all in one dashboard.',
    category: 'Personal Finance',
    status: 'live',
    icon: 'PieChart',
    features: ['Budget by category', 'Transaction log', 'Debt tracker', 'Savings goals'],
    link: '/src/assets/Monthly_Budget_Planner_CapitaCoreAI.html',
  },
  {
    id: 'ai-pipeline-tracker',
    name: 'AI Pipeline Tracker',
    tagline: 'Sales Pipeline & CRM Dashboard',
    description:
      'A complete sales pipeline management tool with deal tracking, stage-based forecasting, activity logging, and team performance charts. Built for sales reps and managers who need clarity on their pipeline.',
    category: 'Pipeline Management',
    status: 'live',
    icon: 'TrendingUp',
    features: ['Deal pipeline view', 'Weighted forecasting', 'Activity log', 'Team analytics'],
    link: '/src/assets/AI_Pipeline_Tracker_CapitaCoreAI.html',
  },
];
