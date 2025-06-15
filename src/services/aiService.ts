
import { AIAnalysis } from '@/types/presentation';

export const analyzeContent = async (rawText: string): Promise<AIAnalysis> => {
  // Simulate AI analysis - in a real app, this would call an AI service
  console.log('Analyzing content with AI:', rawText);
  
  // Extract topics from text
  const topics = extractTopics(rawText);
  
  // Find numerical data for charts
  const dataPoints = extractDataPoints(rawText);
  
  // Suggest slide structure
  const structure = suggestSlideStructure(rawText);
  
  // Determine tone and audience
  const tone = detectTone(rawText);
  const audience = inferAudience(rawText);
  
  // Generate suggestions
  const suggestions = generateSuggestions(rawText, topics);
  
  return {
    topics,
    dataPoints,
    structure,
    tone,
    audience,
    suggestions
  };
};

const extractTopics = (text: string): string[] => {
  const words = text.toLowerCase().split(/\s+/);
  const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'been', 'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should'];
  
  const significantWords = words
    .filter(word => word.length > 3 && !commonWords.includes(word))
    .reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  
  return Object.entries(significantWords)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([word]) => word);
};

const extractDataPoints = (text: string): Array<{ labels: string[]; values: number[] }> => {
  const dataPoints: Array<{ labels: string[]; values: number[] }> = [];
  
  // Look for chart data patterns like "chart: bar;Label1,Label2;10,20"
  const chartMatches = text.match(/chart:\s*(\w+);([^;]+);([^;\n]+)/g);
  
  if (chartMatches) {
    chartMatches.forEach(match => {
      const parts = match.split(';');
      if (parts.length >= 3) {
        const labels = parts[1].split(',').map(s => s.trim());
        const values = parts[2].split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
        
        if (labels.length === values.length) {
          dataPoints.push({ labels, values });
        }
      }
    });
  }
  
  // Also look for standalone numerical data
  const numbers = text.match(/\d+(?:\.\d+)?/g);
  if (numbers && numbers.length >= 2) {
    const values = numbers.slice(0, 6).map(n => parseFloat(n));
    const labels = values.map((_, i) => `Item ${i + 1}`);
    dataPoints.push({ labels, values });
  }
  
  return dataPoints;
};

const suggestSlideStructure = (text: string): string[] => {
  const lines = text.split('\n').filter(line => line.trim());
  const structure: string[] = [];
  
  lines.forEach(line => {
    if (line.startsWith('#')) {
      structure.push(line.replace(/^#+\s*/, ''));
    }
  });
  
  if (structure.length === 0) {
    structure.push('Introduction', 'Main Content', 'Conclusion');
  }
  
  return structure;
};

const detectTone = (text: string): 'professional' | 'casual' | 'academic' | 'creative' => {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('research') || lowerText.includes('study') || lowerText.includes('analysis')) {
    return 'academic';
  }
  if (lowerText.includes('business') || lowerText.includes('revenue') || lowerText.includes('strategy')) {
    return 'professional';
  }
  if (lowerText.includes('creative') || lowerText.includes('design') || lowerText.includes('art')) {
    return 'creative';
  }
  
  return 'casual';
};

const inferAudience = (text: string): string => {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('executive') || lowerText.includes('board')) {
    return 'executives';
  }
  if (lowerText.includes('student') || lowerText.includes('class')) {
    return 'students';
  }
  if (lowerText.includes('team') || lowerText.includes('colleague')) {
    return 'colleagues';
  }
  
  return 'general audience';
};

const generateSuggestions = (text: string, topics: string[]): {
  titleSuggestions: string[];
  contentImprovements: string[];
  visualSuggestions: string[];
} => {
  return {
    titleSuggestions: [
      `Exploring ${topics[0]?.charAt(0).toUpperCase() + topics[0]?.slice(1) || 'Key Topics'}`,
      `Understanding ${topics[1]?.charAt(0).toUpperCase() + topics[1]?.slice(1) || 'Important Concepts'}`,
      `${topics[0]?.charAt(0).toUpperCase() + topics[0]?.slice(1) || 'Main Topic'}: A Comprehensive Overview`
    ],
    contentImprovements: [
      'Add specific examples to support your points',
      'Include quantitative data where possible',
      'Consider adding a call-to-action slide'
    ],
    visualSuggestions: [
      'Add charts to visualize data trends',
      'Include relevant images to enhance engagement',
      'Use consistent color scheme throughout'
    ]
  };
};
