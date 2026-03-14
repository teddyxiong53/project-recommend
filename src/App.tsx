import { useState, useMemo } from 'react';
import { FilterPanel } from './components/FilterPanel';
import { ProjectCard } from './components/ProjectCard';
import { projects, categories, difficulties, allTags } from './data/projects';
import { FilterOptions, Project } from './types';
import { Sparkles, RefreshCw } from 'lucide-react';

function App() {
  const [filters, setFilters] = useState<FilterOptions>({
    difficulty: [],
    category: [],
    tags: [],
  });
  const [recommendedProjects, setRecommendedProjects] = useState<Project[]>([]);
  const [showRecommended, setShowRecommended] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      if (filters.difficulty.length > 0 && !filters.difficulty.includes(project.difficulty)) {
        return false;
      }
      if (filters.category.length > 0 && !filters.category.includes(project.category)) {
        return false;
      }
      if (filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some(tag => project.tags.includes(tag));
        if (!hasMatchingTag) return false;
      }
      return true;
    });
  }, [filters]);

  const getRandomProjects = () => {
    const available = filteredProjects.length > 0 ? filteredProjects : projects;
    const shuffled = [...available].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(10, shuffled.length));
    setRecommendedProjects(selected);
    setShowRecommended(true);
  };

  const displayProjects = showRecommended ? recommendedProjects : filteredProjects;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Project Recommender
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your next coding project with smart recommendations based on your preferences
          </p>
        </header>

        <FilterPanel
          filters={filters}
          onFilterChange={setFilters}
          availableCategories={categories}
          availableTags={allTags}
          availableDifficulties={difficulties}
        />

        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            {showRecommended ? (
              <span>
                Showing <span className="font-semibold">{displayProjects.length}</span> recommended projects
              </span>
            ) : (
              <span>
                Found <span className="font-semibold">{displayProjects.length}</span> projects
              </span>
            )}
          </div>
          <div className="flex gap-3">
            {showRecommended && (
              <button
                onClick={() => setShowRecommended(false)}
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Show All
              </button>
            )}
            <button
              onClick={getRandomProjects}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg transition-all"
            >
              {showRecommended ? (
                <>
                  <RefreshCw className="w-5 h-5" />
                  Refresh Recommendations
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Get 10 Recommendations
                </>
              )}
            </button>
          </div>
        </div>

        {displayProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects match your filters. Try adjusting your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
