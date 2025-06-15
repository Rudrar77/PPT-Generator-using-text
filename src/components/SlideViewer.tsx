
import { useState, useEffect } from 'react';
import { Slide, Theme } from '@/types/presentation';
import { BarChart, LineChart, PieChart, Bar, Line, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronLeft, ChevronRight, Play, Pause, Grid, Maximize, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SlideViewerProps {
  slides: Slide[];
  theme: Theme;
  isFullscreen?: boolean;
  onClose?: () => void;
}

export const SlideViewer = ({ slides, theme, isFullscreen = false, onClose }: SlideViewerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [showOverview, setShowOverview] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && !showOverview) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => prev < slides.length - 1 ? prev + 1 : 0);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length, showOverview]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showOverview) return;
      
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          if (isFullscreen && onClose) {
            onClose();
          }
          break;
        case 'g':
          setShowOverview(!showOverview);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showOverview, isFullscreen, onClose]);

  const nextSlide = () => {
    setCurrentSlide(prev => prev < slides.length - 1 ? prev + 1 : prev);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev > 0 ? prev - 1 : prev);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowOverview(false);
  };

  if (slides.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 text-gray-500">
        <p>No slides to display</p>
      </div>
    );
  }

  const containerClass = isFullscreen 
    ? "fixed inset-0 bg-black z-50 flex flex-col"
    : "relative bg-white rounded-lg border shadow-lg";

  return (
    <div className={containerClass}>
      {/* Controls */}
      <div className={`flex items-center justify-between p-4 ${
        isFullscreen ? 'bg-black/80 text-white' : 'border-b'
      }`}>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            variant={isFullscreen ? "secondary" : "outline"}
            size="sm"
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          
          <Button
            onClick={() => setShowOverview(!showOverview)}
            variant={isFullscreen ? "secondary" : "outline"}
            size="sm"
          >
            <Grid className="w-4 h-4" />
          </Button>

          <span className={`text-sm ${isFullscreen ? 'text-white' : 'text-gray-600'}`}>
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isFullscreen && onClose && (
            <Button onClick={onClose} variant="secondary" size="sm">
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 relative overflow-hidden">
        {showOverview ? (
          <SlideOverview
            slides={slides}
            theme={theme}
            currentSlide={currentSlide}
            onSlideSelect={goToSlide}
            isFullscreen={isFullscreen}
          />
        ) : (
          <>
            {/* Main Slide */}
            <div className={`h-full transition-all duration-300 ${
              isFullscreen ? 'p-8' : 'p-6'
            }`}>
              <SlideContent
                slide={slides[currentSlide]}
                theme={theme}
                isFullscreen={isFullscreen}
              />
            </div>

            {/* Navigation */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                variant="ghost"
                size="sm"
                className={`ml-4 ${isFullscreen ? 'text-white hover:bg-white/20' : ''}`}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                variant="ghost"
                size="sm"
                className={`mr-4 ${isFullscreen ? 'text-white hover:bg-white/20' : ''}`}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Progress Bar */}
      {!showOverview && (
        <div className={`${isFullscreen ? 'bg-black/80' : 'border-t'} p-2`}>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-blue-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

interface SlideContentProps {
  slide: Slide;
  theme: Theme;
  isFullscreen: boolean;
}

const SlideContent = ({ slide, theme, isFullscreen }: SlideContentProps) => {
  const baseSize = isFullscreen ? 'text-lg' : 'text-base';
  const titleSize = isFullscreen ? 'text-4xl' : 'text-2xl';
  const headingSize = isFullscreen ? 'text-2xl' : 'text-xl';

  return (
    <div
      className="h-full flex flex-col"
      style={{
        background: theme.effects.gradients.background,
        color: theme.colors.text.primary,
        fontFamily: theme.typography.fontFamily.primary
      }}
    >
      {/* Slide Title */}
      <div className="mb-6">
        <h1
          className={`font-bold ${titleSize} mb-2`}
          style={{
            color: theme.colors.primary,
            fontFamily: theme.typography.fontFamily.heading
          }}
        >
          {slide.title}
        </h1>
        <Badge variant="outline" className="text-xs">
          {slide.type}
        </Badge>
      </div>

      {/* Content Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Content */}
        {slide.content.length > 0 && (
          <div className="space-y-4">
            {slide.content.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: theme.colors.secondary }}
                />
                <p className={`${baseSize} leading-relaxed`}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Visual Content */}
        <div className="flex flex-col gap-6">
          {/* Chart */}
          {slide.chart && (
            <div className="bg-white/80 p-4 rounded-lg" style={{ borderRadius: theme.layout.borderRadius }}>
              <h3 className={`font-semibold ${headingSize} mb-4`} style={{ color: theme.colors.primary }}>
                Data Visualization
              </h3>
              <div className="h-64">
                <ChartComponent chart={slide.chart} theme={theme} />
              </div>
            </div>
          )}

          {/* Image */}
          {slide.image && slide.image.url && (
            <div className="bg-white/80 p-4 rounded-lg" style={{ borderRadius: theme.layout.borderRadius }}>
              <img
                src={slide.image.url}
                alt={slide.image.alt}
                className="w-full h-48 object-cover rounded"
                style={{ borderRadius: theme.layout.borderRadius }}
              />
              <p className="text-sm text-gray-600 mt-2">{slide.image.alt}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface SlideOverviewProps {
  slides: Slide[];
  theme: Theme;
  currentSlide: number;
  onSlideSelect: (index: number) => void;
  isFullscreen: boolean;
}

const SlideOverview = ({ slides, theme, currentSlide, onSlideSelect, isFullscreen }: SlideOverviewProps) => {
  return (
    <div className={`p-6 h-full overflow-auto ${isFullscreen ? 'bg-black/90' : 'bg-gray-50'}`}>
      <h2 className={`text-xl font-bold mb-6 ${isFullscreen ? 'text-white' : 'text-gray-900'}`}>
        Slide Overview
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => onSlideSelect(index)}
            className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-200 ${
              currentSlide === index
                ? 'border-blue-500 scale-105'
                : isFullscreen 
                  ? 'border-gray-600 hover:border-gray-400 bg-gray-800'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className="aspect-video mb-2 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">
              Slide {index + 1}
            </div>
            <h3 className={`font-medium text-sm truncate ${
              isFullscreen ? 'text-white' : 'text-gray-900'
            }`}>
              {slide.title}
            </h3>
            <p className={`text-xs mt-1 ${
              isFullscreen ? 'text-gray-300' : 'text-gray-500'
            }`}>
              {slide.content.length} points
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ChartComponentProps {
  chart: NonNullable<Slide['chart']>;
  theme: Theme;
}

const ChartComponent = ({ chart, theme }: ChartComponentProps) => {
  const colors = [
    theme.colors.primary,
    theme.colors.secondary,
    theme.colors.status.success,
    theme.colors.status.warning,
    theme.colors.status.error,
    theme.colors.status.info
  ];

  switch (chart.type) {
    case 'bar':
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chart.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill={theme.colors.primary} radius={4} />
          </BarChart>
        </ResponsiveContainer>
      );

    case 'line':
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chart.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={theme.colors.primary} 
              strokeWidth={3}
              dot={{ fill: theme.colors.primary, strokeWidth: 2, r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      );

    case 'pie':
      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chart.data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {chart.data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      );

    default:
      return <div>Unsupported chart type</div>;
  }
};
