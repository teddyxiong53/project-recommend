import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Weather Dashboard',
    description: 'Build a beautiful weather application that displays current conditions, forecasts, and weather maps using real-time API data.',
    difficulty: 'Beginner',
    category: 'Web Development',
    tags: ['React', 'API', 'TypeScript'],
    estimatedTime: '4-6 hours',
    learningOutcomes: ['API integration', 'State management', 'Responsive design'],
    url: 'https://github.com/topics/weather-app'
  },
  {
    id: 2,
    name: 'Task Management System',
    description: 'Create a full-featured task manager with drag-and-drop, categories, priorities, and local storage persistence.',
    difficulty: 'Intermediate',
    category: 'Web Development',
    tags: ['React', 'TypeScript', 'LocalStorage'],
    estimatedTime: '8-10 hours',
    learningOutcomes: ['Drag & drop', 'Complex state', 'Data persistence'],
    url: 'https://github.com/topics/task-manager'
  },
  {
    id: 3,
    name: 'Markdown Blog Generator',
    description: 'Build a static site generator that converts markdown files into a beautiful blog with syntax highlighting.',
    difficulty: 'Intermediate',
    category: 'Tools',
    tags: ['Node.js', 'Markdown', 'CLI'],
    estimatedTime: '10-12 hours',
    learningOutcomes: ['File system operations', 'Markdown parsing', 'Template engines'],
    url: 'https://github.com/topics/static-site-generator'
  },
  {
    id: 4,
    name: 'Real-time Chat Application',
    description: 'Develop a chat app with WebSocket support, user authentication, message history, and typing indicators.',
    difficulty: 'Advanced',
    category: 'Full Stack',
    tags: ['React', 'WebSocket', 'Node.js'],
    estimatedTime: '20-25 hours',
    learningOutcomes: ['WebSocket protocol', 'Real-time communication', 'Authentication'],
    url: 'https://github.com/topics/websocket'
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'Design and build a stunning personal portfolio with animations, dark mode, and project showcases.',
    difficulty: 'Beginner',
    category: 'Web Development',
    tags: ['HTML', 'CSS', 'JavaScript'],
    estimatedTime: '6-8 hours',
    learningOutcomes: ['CSS animations', 'Responsive design', 'UI/UX principles'],
    url: 'https://github.com/topics/portfolio'
  },
  {
    id: 6,
    name: 'E-commerce Product Page',
    description: 'Create an interactive product page with image gallery, size selection, cart functionality, and smooth animations.',
    difficulty: 'Intermediate',
    category: 'Web Development',
    tags: ['React', 'TypeScript', 'CSS'],
    estimatedTime: '12-15 hours',
    learningOutcomes: ['E-commerce patterns', 'Image optimization', 'Shopping cart logic'],
    url: 'https://github.com/topics/ecommerce'
  },
  {
    id: 7,
    name: 'Code Snippet Manager',
    description: 'Build a tool to save, organize, and search code snippets with syntax highlighting and tags.',
    difficulty: 'Intermediate',
    category: 'Tools',
    tags: ['React', 'IndexedDB', 'Syntax Highlighting'],
    estimatedTime: '10-12 hours',
    learningOutcomes: ['IndexedDB', 'Search algorithms', 'Code highlighting'],
    url: 'https://github.com/topics/code-snippets'
  },
  {
    id: 8,
    name: 'Recipe Finder App',
    description: 'Create an app to search recipes, save favorites, and generate shopping lists based on ingredients.',
    difficulty: 'Beginner',
    category: 'Web Development',
    tags: ['React', 'API', 'LocalStorage'],
    estimatedTime: '6-8 hours',
    learningOutcomes: ['API integration', 'Filtering', 'Local storage'],
    url: 'https://github.com/topics/recipe-app'
  },
  {
    id: 9,
    name: 'Data Visualization Dashboard',
    description: 'Build an interactive dashboard with charts, graphs, and real-time data updates using visualization libraries.',
    difficulty: 'Advanced',
    category: 'Data Science',
    tags: ['React', 'D3.js', 'TypeScript'],
    estimatedTime: '15-20 hours',
    learningOutcomes: ['Data visualization', 'D3.js library', 'Complex calculations'],
    url: 'https://github.com/topics/data-visualization'
  },
  {
    id: 10,
    name: 'Pomodoro Timer',
    description: 'Develop a productivity timer with customizable intervals, statistics tracking, and notification support.',
    difficulty: 'Beginner',
    category: 'Productivity',
    tags: ['React', 'TypeScript', 'Notifications'],
    estimatedTime: '4-5 hours',
    learningOutcomes: ['Timer logic', 'Browser APIs', 'State management'],
    url: 'https://github.com/topics/pomodoro'
  },
  {
    id: 11,
    name: 'URL Shortener Service',
    description: 'Create a URL shortening service with analytics, custom aliases, and QR code generation.',
    difficulty: 'Intermediate',
    category: 'Full Stack',
    tags: ['Node.js', 'Database', 'API'],
    estimatedTime: '12-15 hours',
    learningOutcomes: ['Backend development', 'Database design', 'Analytics'],
    url: 'https://github.com/topics/url-shortener'
  },
  {
    id: 12,
    name: 'Expense Tracker',
    description: 'Build a personal finance app to track income, expenses, budgets with visual reports and export features.',
    difficulty: 'Intermediate',
    category: 'Productivity',
    tags: ['React', 'Charts', 'LocalStorage'],
    estimatedTime: '10-12 hours',
    learningOutcomes: ['Financial calculations', 'Data visualization', 'Export functionality'],
    url: 'https://github.com/topics/expense-tracker'
  },
  {
    id: 13,
    name: 'Music Player',
    description: 'Create a web-based music player with playlist management, visualizations, and audio controls.',
    difficulty: 'Intermediate',
    category: 'Web Development',
    tags: ['React', 'Audio API', 'CSS'],
    estimatedTime: '12-14 hours',
    learningOutcomes: ['Web Audio API', 'Media controls', 'Visualizations'],
    url: 'https://github.com/topics/music-player'
  },
  {
    id: 14,
    name: 'GitHub Profile Analyzer',
    description: 'Develop a tool that analyzes GitHub profiles, showing statistics, language usage, and contribution patterns.',
    difficulty: 'Beginner',
    category: 'Tools',
    tags: ['React', 'GitHub API', 'Charts'],
    estimatedTime: '6-8 hours',
    learningOutcomes: ['GitHub API', 'Data processing', 'API rate limiting'],
    url: 'https://github.com/topics/github-api'
  },
  {
    id: 15,
    name: 'Quiz Application',
    description: 'Build an interactive quiz app with categories, scoring, leaderboard, and shareable results.',
    difficulty: 'Beginner',
    category: 'Education',
    tags: ['React', 'TypeScript', 'LocalStorage'],
    estimatedTime: '5-7 hours',
    learningOutcomes: ['Quiz logic', 'Score calculation', 'State management'],
    url: 'https://github.com/topics/quiz-app'
  },
  {
    id: 16,
    name: 'Image Editor',
    description: 'Create a browser-based image editor with filters, cropping, rotation, and text overlay features.',
    difficulty: 'Advanced',
    category: 'Tools',
    tags: ['Canvas API', 'React', 'Image Processing'],
    estimatedTime: '18-22 hours',
    learningOutcomes: ['Canvas manipulation', 'Image processing', 'File handling'],
    url: 'https://github.com/topics/image-editor'
  },
  {
    id: 17,
    name: 'Habit Tracker',
    description: 'Develop a habit tracking app with streaks, reminders, progress visualization, and motivational features.',
    difficulty: 'Intermediate',
    category: 'Productivity',
    tags: ['React', 'LocalStorage', 'Notifications'],
    estimatedTime: '8-10 hours',
    learningOutcomes: ['Date calculations', 'Streak tracking', 'Data persistence'],
    url: 'https://github.com/topics/habit-tracker'
  },
  {
    id: 18,
    name: 'Password Generator',
    description: 'Build a secure password generator with customizable options, strength meter, and history.',
    difficulty: 'Beginner',
    category: 'Security',
    tags: ['JavaScript', 'Crypto API', 'React'],
    estimatedTime: '3-4 hours',
    learningOutcomes: ['Cryptography basics', 'Random generation', 'Security best practices'],
    url: 'https://github.com/topics/password-generator'
  },
  {
    id: 19,
    name: 'Video Chat Application',
    description: 'Create a peer-to-peer video chat app using WebRTC with screen sharing and recording capabilities.',
    difficulty: 'Advanced',
    category: 'Full Stack',
    tags: ['WebRTC', 'React', 'Node.js'],
    estimatedTime: '25-30 hours',
    learningOutcomes: ['WebRTC protocol', 'Media streams', 'Peer connections'],
    url: 'https://github.com/topics/webrtc'
  },
  {
    id: 20,
    name: 'Note-taking App',
    description: 'Build a rich text editor with markdown support, tags, search, and cloud sync capabilities.',
    difficulty: 'Intermediate',
    category: 'Productivity',
    tags: ['React', 'Rich Text', 'Sync'],
    estimatedTime: '12-15 hours',
    learningOutcomes: ['Rich text editing', 'Markdown parsing', 'Data synchronization'],
    url: 'https://github.com/topics/notes-app'
  },
  {
    id: 21,
    name: 'Drawing Board',
    description: 'Create a collaborative drawing board with multiple tools, colors, layers, and real-time collaboration.',
    difficulty: 'Advanced',
    category: 'Tools',
    tags: ['Canvas API', 'WebSocket', 'React'],
    estimatedTime: '20-24 hours',
    learningOutcomes: ['Canvas drawing', 'Real-time sync', 'Tool implementation'],
    url: 'https://github.com/topics/drawing-app'
  },
  {
    id: 22,
    name: 'Cryptocurrency Tracker',
    description: 'Build a crypto portfolio tracker with real-time prices, charts, and profit/loss calculations.',
    difficulty: 'Intermediate',
    category: 'Finance',
    tags: ['React', 'API', 'Charts'],
    estimatedTime: '10-12 hours',
    learningOutcomes: ['Financial APIs', 'Real-time data', 'Portfolio calculations'],
    url: 'https://github.com/topics/crypto-tracker'
  },
  {
    id: 23,
    name: 'Landing Page Builder',
    description: 'Create a drag-and-drop landing page builder with templates, export functionality, and responsive preview.',
    difficulty: 'Advanced',
    category: 'Tools',
    tags: ['React', 'Drag & Drop', 'Code Generation'],
    estimatedTime: '25-30 hours',
    learningOutcomes: ['Visual builders', 'Code generation', 'Complex state'],
    url: 'https://github.com/topics/page-builder'
  },
  {
    id: 24,
    name: 'Calendar App',
    description: 'Develop a calendar application with event management, reminders, multiple views, and iCal export.',
    difficulty: 'Intermediate',
    category: 'Productivity',
    tags: ['React', 'Date Management', 'TypeScript'],
    estimatedTime: '12-15 hours',
    learningOutcomes: ['Date libraries', 'Calendar logic', 'Event management'],
    url: 'https://github.com/topics/calendar'
  },
  {
    id: 25,
    name: 'RSS Reader',
    description: 'Build a modern RSS feed reader with categorization, offline reading, and sync across devices.',
    difficulty: 'Intermediate',
    category: 'Tools',
    tags: ['React', 'RSS Parsing', 'IndexedDB'],
    estimatedTime: '10-12 hours',
    learningOutcomes: ['RSS/XML parsing', 'Offline storage', 'Feed management'],
    url: 'https://github.com/topics/rss-reader'
  },
  {
    id: 26,
    name: 'Social Media Dashboard',
    description: 'Create a unified dashboard to manage multiple social media accounts with scheduling and analytics.',
    difficulty: 'Advanced',
    category: 'Full Stack',
    tags: ['React', 'OAuth', 'Multiple APIs'],
    estimatedTime: '30-35 hours',
    learningOutcomes: ['OAuth integration', 'Multi-API management', 'Scheduling'],
    url: 'https://github.com/topics/social-media'
  },
  {
    id: 27,
    name: 'Flashcard Learning System',
    description: 'Build a spaced repetition flashcard app with progress tracking, categories, and import/export.',
    difficulty: 'Intermediate',
    category: 'Education',
    tags: ['React', 'Algorithm', 'LocalStorage'],
    estimatedTime: '10-12 hours',
    learningOutcomes: ['Spaced repetition', 'Learning algorithms', 'Progress tracking'],
    url: 'https://github.com/topics/flashcards'
  },
  {
    id: 28,
    name: 'File Converter Tool',
    description: 'Create a browser-based file converter supporting images, documents, and audio formats.',
    difficulty: 'Advanced',
    category: 'Tools',
    tags: ['JavaScript', 'File API', 'Web Workers'],
    estimatedTime: '18-20 hours',
    learningOutcomes: ['File format conversion', 'Web Workers', 'Binary data'],
    url: 'https://github.com/topics/file-converter'
  },
  {
    id: 29,
    name: 'Color Palette Generator',
    description: 'Develop a tool to generate, save, and export color palettes with accessibility checking.',
    difficulty: 'Beginner',
    category: 'Design',
    tags: ['JavaScript', 'CSS', 'Color Theory'],
    estimatedTime: '4-6 hours',
    learningOutcomes: ['Color algorithms', 'Accessibility', 'Design tools'],
    url: 'https://github.com/topics/color-palette'
  },
  {
    id: 30,
    name: 'API Testing Tool',
    description: 'Build a Postman-like tool for testing APIs with request history, collections, and environment variables.',
    difficulty: 'Advanced',
    category: 'Tools',
    tags: ['React', 'HTTP', 'TypeScript'],
    estimatedTime: '20-25 hours',
    learningOutcomes: ['HTTP protocol', 'API testing', 'Request management'],
    url: 'https://github.com/topics/api-testing'
  }
];

export const categories = [...new Set(projects.map(p => p.category))];
export const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
export const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();
