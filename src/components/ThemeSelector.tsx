
import { useState } from 'react';
import { Theme } from '@/types/presentation';
import { PROFESSIONAL_THEMES, getThemesByCategory } from '@/data/themes';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Star, Shuffle } from 'lucide-react';

interface ThemeSelectorProps {
  selectedTheme: Theme;
  onThemeSelect: (theme: Theme) => void;
  onClose: () => void;
}

export const ThemeSelector = ({ selectedTheme, onThemeSelect, onClose }: ThemeSelectorProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All Themes', count: PROFESSIONAL_THEMES.length },
    { id: 'business', name: 'Business', count: getThemesByCategory('business').length },
    { id: 'creative', name: 'Creative', count: getThemesByCategory('creative').length },
    { id: 'industry', name: 'Industry', count: getThemesByCategory('industry').length },
    { id: 'specialty', name: 'Specialty', count: getThemesByCategory('specialty').length }
  ];

  const filteredThemes = PROFESSIONAL_THEMES.filter(theme => {
    const matchesSearch = theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         theme.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || theme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (themeId: string) => {
    setFavorites(prev => 
      prev.includes(themeId) 
        ? prev.filter(id => id !== themeId)
        : [...prev, themeId]
    );
  };

  const selectRandomTheme = () => {
    const randomTheme = filteredThemes[Math.floor(Math.random() * filteredThemes.length)];
    onThemeSelect(randomTheme);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Choose Your Theme</h2>
            <div className="flex gap-2">
              <Button onClick={selectRandomTheme} variant="outline" size="sm">
                <Shuffle className="w-4 h-4 mr-2" />
                Surprise Me
              </Button>
              <Button onClick={onClose} variant="outline" size="sm">
                Done
              </Button>
            </div>
          </div>
          
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search themes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Badge
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        {/* Theme Grid */}
        <ScrollArea className="flex-1 p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredThemes.map(theme => (
              <ThemePreview
                key={theme.id}
                theme={theme}
                isSelected={selectedTheme.id === theme.id}
                isFavorite={favorites.includes(theme.id)}
                onSelect={() => onThemeSelect(theme)}
                onToggleFavorite={() => toggleFavorite(theme.id)}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

interface ThemePreviewProps {
  theme: Theme;
  isSelected: boolean;
  isFavorite: boolean;
  onSelect: () => void;
  onToggleFavorite: () => void;
}

const ThemePreview = ({ theme, isSelected, isFavorite, onSelect, onToggleFavorite }: ThemePreviewProps) => {
  return (
    <div
      className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-200 ${
        isSelected ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-102'
      }`}
      onClick={onSelect}
    >
      {/* Theme Preview */}
      <div
        className="h-32 p-3 relative"
        style={{
          background: theme.effects.gradients.background,
          color: theme.colors.text.primary
        }}
      >
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Star 
            className={`w-3 h-3 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} 
          />
        </button>

        {/* Theme Preview Content */}
        <div className="h-full flex flex-col">
          <div
            className="text-xs font-semibold mb-1 truncate"
            style={{ 
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.heading
            }}
          >
            Slide Title
          </div>
          <div className="flex-1 space-y-1">
            <div
              className="h-1 rounded"
              style={{ backgroundColor: theme.colors.primary, width: '80%' }}
            />
            <div
              className="h-1 rounded"
              style={{ backgroundColor: theme.colors.secondary, width: '60%' }}
            />
            <div
              className="h-1 rounded"
              style={{ backgroundColor: theme.colors.text.muted, width: '70%' }}
            />
          </div>
          
          {/* Color Palette */}
          <div className="flex gap-1 mt-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: theme.colors.primary }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: theme.colors.secondary }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: theme.colors.surface }}
            />
          </div>
        </div>
      </div>

      {/* Theme Info */}
      <div className="p-3 bg-white border-t">
        <div className="font-medium text-sm text-gray-900 truncate">
          {theme.name}
        </div>
        <div className="text-xs text-gray-500 capitalize">
          {theme.category}
        </div>
      </div>
    </div>
  );
};
