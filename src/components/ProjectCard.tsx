import { Project } from '../types';
import { Clock, TrendingUp } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-700 border-green-200',
    Intermediate: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    Advanced: 'bg-red-100 text-red-700 border-red-200',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          {project.name}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium border ${
            difficultyColors[project.difficulty]
          }`}
        >
          {project.difficulty}
        </span>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{project.estimatedTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          <span>{project.category}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-4">
        <p className="text-xs font-medium text-gray-700 mb-2">Learning Outcomes:</p>
        <ul className="space-y-1">
          {project.learningOutcomes.map((outcome, index) => (
            <li key={index} className="text-xs text-gray-600 flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
