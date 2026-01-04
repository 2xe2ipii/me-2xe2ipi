export type ProjectType = 'flagship' | 'system' | 'product' | 'win' | 'list';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  type: ProjectType;
  link?: string;
  gridArea: 'hero' | 'main' | 'tall' | 'wide' | 'normal'; // Controls Bento size
}

export const projects: Project[] = [
  {
    id: 'two-letters',
    title: 'Two Letters One Word',
    subtitle: 'Real-Time Multiplayer Engine',
    description: 'Developed a concurrent matchmaking system using WebSockets. Handles race conditions and state synchronization for competitive play.',
    stack: ['React', 'WebSockets', 'Node.js', 'Queue Theory'],
    type: 'flagship',
    gridArea: 'main',
  },
  {
    id: 'grammar-heroes',
    title: 'Grammar Heroes',
    subtitle: 'Thesis: NLP Pipeline',
    description: 'Fine-tuned T5-Base Transformer model for grammar correction. Integrated ERRANT for automated feedback generation.',
    stack: ['Python', 'PyTorch', 'FastAPI', 'Unity'],
    type: 'system',
    gridArea: 'tall',
  },
  {
    id: 'free-ka-ba',
    title: 'Free Ka Ba?',
    subtitle: 'Social Availability Planner',
    description: 'Solved scheduling conflicts with a custom heatmap availability engine. Optimized NoSQL hierarchy for fast reads.',
    stack: ['React TS', 'Firebase', 'Algorithms'],
    type: 'product',
    gridArea: 'wide',
  },
  {
    id: 'comp-prog',
    title: 'Competitive Programming',
    subtitle: 'The Algorithms',
    description: 'Data Structures & Algorithms specialist. 1st Runner Up Databiz Regional, 3rd Runner Up CodeChum Nationals.',
    stack: ['C++', 'LeetCode', 'Dynamic Prog'],
    type: 'win',
    gridArea: 'normal',
  },
  {
    id: '5n10',
    title: '5n10',
    subtitle: 'Canvas Editor',
    description: 'Browser-based floral arrangement tool using the HTML5 Canvas API.',
    stack: ['React', 'Canvas API'],
    type: 'product',
    gridArea: 'normal',
  },
];