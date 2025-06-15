
import { Slide } from '@/types/presentation';
import { extractImageKeywords } from '@/services/imageService';

export const parseSlideContent = (text: string): Slide[] => {
  const slides: Slide[] = [];
  const lines = text.split('\n').filter(line => line.trim());
  
  let currentSlide: Partial<Slide> | null = null;
  let slideCounter = 0;
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    // Check for slide title (starts with #)
    if (trimmed.startsWith('#')) {
      // Save previous slide if exists
      if (currentSlide) {
        slides.push(finalizeSlide(currentSlide, slideCounter));
        slideCounter++;
      }
      
      // Start new slide
      currentSlide = {
        title: trimmed.replace(/^#+\s*/, ''),
        content: [],
        type: 'content'
      };
    }
    // Check for chart data
    else if (trimmed.startsWith('chart:')) {
      if (currentSlide) {
        const chartData = parseChartData(trimmed);
        if (chartData) {
          currentSlide.chart = chartData;
          currentSlide.type = currentSlide.chart ? 'chart' : 'content';
        }
      }
    }
    // Check for image keyword
    else if (trimmed.startsWith('image:')) {
      if (currentSlide) {
        const imageKeyword = trimmed.replace(/^image:\s*/, '').trim();
        currentSlide.image = {
          url: '', // Will be populated by image service
          alt: `Image for ${imageKeyword}`,
          keyword: imageKeyword
        };
        currentSlide.type = currentSlide.chart ? 'mixed' : 'image';
      }
    }
    // Regular content (bullet points)
    else if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
      if (currentSlide) {
        currentSlide.content = currentSlide.content || [];
        currentSlide.content.push(trimmed.replace(/^[-•]\s*/, ''));
      }
    }
    // Regular paragraph text
    else if (trimmed.length > 0) {
      if (!currentSlide) {
        // Create a slide if we have content but no title
        currentSlide = {
          title: 'Introduction',
          content: [],
          type: 'content'
        };
      }
      if (currentSlide) {
        currentSlide.content = currentSlide.content || [];
        currentSlide.content.push(trimmed);
      }
    }
  }
  
  // Don't forget the last slide
  if (currentSlide) {
    slides.push(finalizeSlide(currentSlide, slideCounter));
  }
  
  // If no slides were created, create a default slide
  if (slides.length === 0) {
    slides.push({
      id: '1',
      title: 'Welcome',
      content: ['Your presentation content will appear here'],
      type: 'title'
    });
  }
  
  // Make the first slide a title slide if it doesn't have much content
  if (slides.length > 0 && slides[0].content.length <= 1) {
    slides[0].type = 'title';
  }
  
  return slides;
};

const parseChartData = (chartLine: string): Slide['chart'] | null => {
  try {
    // Expected format: "chart: type;labels;values"
    const match = chartLine.match(/chart:\s*(\w+);([^;]+);([^;\n]+)/);
    
    if (!match) return null;
    
    const [, type, labelsStr, valuesStr] = match;
    const labels = labelsStr.split(',').map(s => s.trim());
    const values = valuesStr.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
    
    if (labels.length !== values.length || values.length === 0) {
      return null;
    }
    
    const data = labels.map((label, index) => ({
      name: label,
      value: values[index]
    }));
    
    return {
      type: type as 'bar' | 'line' | 'pie',
      data,
      labels
    };
  } catch (error) {
    console.error('Error parsing chart data:', error);
    return null;
  }
};

const finalizeSlide = (slide: Partial<Slide>, index: number): Slide => {
  return {
    id: `slide-${index + 1}`,
    title: slide.title || `Slide ${index + 1}`,
    content: slide.content || [],
    type: slide.type || 'content',
    chart: slide.chart,
    image: slide.image
  };
};

// Enhanced slide content suggestions
export const generateSlideContent = (topic: string): string => {
  const templates = {
    business: `# ${topic}
# Executive Summary
- Key performance indicators exceeded expectations
- Strategic initiatives delivered measurable results
- Market position strengthened significantly
chart: bar;Q1,Q2,Q3,Q4;85,92,98,105

# Market Analysis
- Competitive landscape assessment completed
- Customer satisfaction metrics improved
- Growth opportunities identified and prioritized
image: business analytics`,

    technology: `# ${topic}
# Technical Overview
- Architecture design principles implemented
- Performance metrics significantly improved
- Security protocols enhanced and validated
chart: line;Jan,Feb,Mar,Apr,May;45,52,61,58,67

# Implementation Strategy
- Development roadmap established
- Resource allocation optimized
- Timeline milestones clearly defined
image: technology innovation`,

    education: `# ${topic}
# Learning Objectives
- Students will understand core concepts
- Practical applications will be demonstrated
- Assessment criteria clearly established
chart: pie;Excellent,Good,Average;45,35,20

# Course Content
- Interactive learning modules developed
- Real-world case studies included
- Collaborative projects encouraged
image: students learning`
  };

  // Detect content type and return appropriate template
  const topicLower = topic.toLowerCase();
  if (topicLower.includes('business') || topicLower.includes('sales') || topicLower.includes('revenue')) {
    return templates.business;
  } else if (topicLower.includes('tech') || topicLower.includes('software') || topicLower.includes('digital')) {
    return templates.technology;
  } else if (topicLower.includes('education') || topicLower.includes('learning') || topicLower.includes('course')) {
    return templates.education;
  }

  return templates.business; // Default template
};
