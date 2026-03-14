export interface Project {
  id: number;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  tags: string[];
  estimatedTime: string;
  learningOutcomes: string[];
  url?: string;
}

export interface FilterOptions {
  difficulty: string[];
  category: string[];
  tags: string[];
}
