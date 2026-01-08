// src/data/projects.ts

// ... imports and helper code (keep existing)
// HELPER: Auto-import images from src/assets
const twoLettersImages = Object.values(
  import.meta.glob('../assets/two-letters-one-word/*.png', { 
    eager: true, 
    query: '?url', 
    import: 'default' 
  })
) as string[];

export type ProjectCategory = 'project' | 'win' | 'leadership';
export type GridArea = 'hero' | 'flagship' | 'tall' | 'wide' | 'normal' | 'list';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  link?: string;
  gridArea: GridArea;
  liveUrl?: string; 
  gallery?: string[];
}

export const projects: Project[] = [
  // 1. The Flagship (Center Big)
  {
    id: 'two-letters',
    title: 'Two Letters One Word',
    subtitle: 'Real-Time Multiplayer Engine',
    description: 'A competitive word game featuring matchmaking queues. Built with WebSockets for sub-millisecond state synchronization between clients. I had to architect a custom Redis locking mechanism to prevent race conditions.',
    stack: ['React', 'WebSockets', 'Node.js', 'Redis'],
    category: 'project',
    gridArea: 'flagship',
    liveUrl: 'https://two-letters-one-word.vercel.app',
    gallery: twoLettersImages,
  },
  // 2. The Thesis (Tall Right)
  {
    id: 'grammar-heroes',
    title: 'Grammar Heroes',
    subtitle: 'Thesis: NLP Pipeline',
    description: 'We need more than a simple grammar checker. We needed context awareness. I fine-tuned a T5-Base Transformer model specifically on grammatical error correction datasets. The hardest part wasn\'t the training—it was wrapping that heavy Python model in a high-performance API.',
    stack: ['Python', 'PyTorch', 'FastAPI', 'Unity'],
    category: 'project',
    gridArea: 'tall',
  },
  // 3. LEADERSHIP (Moved UP - Was Index 6)
  {
    id: 'jpcs',
    title: 'JPCS Officer',
    subtitle: '4th Year Representative',
    description: 'Leadership in tech isn\'t simply about organizing competitions and events, it\'s about technical mentorship. As the 4th Year Rep, I enjoy collaborating and helping my juniors with their projects, whether personal or for the organization. I also co-spearheaded the organization of our annual coding competition: CODEX.',
    stack: ['Leadership', 'Mentoring', 'Collaboration'],
    category: 'leadership',
    gridArea: 'wide',
  },
  // 4. The Wins (Standard)
  {
    id: 'comp-prog',
    title: 'Competitive Programming',
    subtitle: 'Representative @ DLSL',
    description: 'It’s not simply about the syntax, it’s about pattern recognition under pressure. I consistently place in regionals by focusing on Dynamic Programming and Graph Theory. Notable wins include 1st Runner Up at the Databiz Regional and 3rd Runner Up in CodeChum Nationals.',
    stack: ['C++', 'Python', 'LeetCode', 'Dynamic Prog'],
    category: 'win',
    gridArea: 'wide',
  },
  // 5. THE PRODUCT (Moved DOWN - Was Index 2)
  {
    id: 'free-ka-ba',
    title: 'Free Ka Ba?',
    subtitle: 'Social Availability Planner',
    description: 'We couldn\'t find time. I solved our scheduling conflicts with a custom heatmap availability engine. Optimized NoSQL hierarchy for fast reads.',
    stack: ['React TS', 'Firebase', 'Algorithms'],
    category: 'project', // Changed to 'project' to keep standard color if needed, or 'win'
    gridArea: 'wide',
  },
  // 6. FinTech Win (Standard)
  {
    id: 'vela',
    title: 'Vela',
    subtitle: 'Hackathon Winner',
    description: 'Finance manager with OCR receipt scanning. Uses ML to parse items and categorize spending automatically.',
    stack: ['React Native', 'OCR', 'Machine Learning'],
    category: 'win',
    gridArea: 'normal',
  },
  // 7. Creative Tech (Standard)
  {
    id: '5n10',
    title: '5n10',
    subtitle: 'Canvas Editor',
    description: 'Browser-based floral arrangement tool. Built a custom drag-and-drop engine using HTML5 Canvas.',
    stack: ['React', 'Canvas API'],
    category: 'project',
    gridArea: 'normal',
  },
  // 8. Rapid Fire List
  {
    id: 'talas',
    title: 'Talas',
    subtitle: 'AI Exam Generator',
    description: 'Generates reviewers from PDF uploads using Gemini API.',
    stack: ['Gemini API', 'React'],
    category: 'project',
    gridArea: 'normal',
  },
  {
    id: 'tala-makiling',
    title: 'Tala Makiling',
    subtitle: 'Event Gamification',
    description: 'Official booth game for E-Week. Won "Most Played Game".',
    stack: ['React', 'Backend'],
    category: 'win',
    gridArea: 'normal',
  },
  {
    id: 'cinetify',
    title: 'Cinetify',
    subtitle: 'Spotify x TMDB',
    description: 'Recommendation engine finding movies based on music taste.',
    stack: ['Spotify API', 'TMDB API'],
    category: 'project',
    gridArea: 'normal',
  },
  {
    id: 'blind-rank',
    title: 'Blind Rank',
    subtitle: 'Viral Game Clone',
    description: 'A logic game based on uncertainty and ranking trends.',
    stack: ['React', 'Logic'],
    category: 'project',
    gridArea: 'normal',
  },
  {
    id: 'who-sent-what',
    title: 'Who Sent What',
    subtitle: 'Chat Analytics Game',
    description: 'Gamified group chat history using text analysis.',
    stack: ['Data Parsing', 'React'],
    category: 'project',
    gridArea: 'normal',
  }
];