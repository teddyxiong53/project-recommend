import { FilterOptions } from '../types';
import { X } from 'lucide-react';

interface FilterPanelProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  availableCategories: string[];
  availableTags: string[];
  availableDifficulties: string[];
}

export function FilterPanel({
  filters,
  onFilterChange,
  availableCategories,
  availableTags,
  availableDifficulties,
}: FilterPanelProps) {
  const toggleFilter = (
    type: keyof FilterOptions,
    value: string
  ) => {
    const currentValues = filters[type];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];

    onFilterChange({
      ...filters,
      [type]: newValues,
    });
  };

  const clearFilters = () => {
    onFilterChange({
      difficulty: [],
      category: [],
      tags: [],
    });
  };

  const hasActiveFilters =
    filters.difficulty.length > 0 ||
    filters.category.length > 0 ||
    filters.tags.length > 0;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X className="w-4 h-4" />
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Difficulty</h3>
          <div className="flex flex-wrap gap-2">
            {availableDifficulties.map(difficulty => (
              <button
                key={difficulty}
                onClick={() => toggleFilter('difficulty', difficulty)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filters.difficulty.includes(difficulty)
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
          <div className="flex flex-wrap gap-2">
            {availableCategories.map(category => (
              <button
                key={category}
                onClick={() => toggleFilter('category', category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filters.category.includes(category)
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleFilter('tags', tag)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  filters.tags.includes(tag)
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
