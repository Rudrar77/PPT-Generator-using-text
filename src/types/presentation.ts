
export interface Theme {
  id: string;
  name: string;
  category: 'business' | 'creative' | 'industry' | 'specialty';
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    surfaceAlt: string;
    text: {
      primary: string;
      secondary: string;
      muted: string;
      inverse: string;
    };
    status: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
  };
  typography: {
    fontFamily: {
      primary: string;
      heading: string;
    };
    sizes: {
      title: string;
      heading: string;
      body: string;
      caption: string;
    };
  };
  layout: {
    borderRadius: string;
    shadows: {
      card: string;
      elevated: string;
    };
  };
  effects: {
    gradients: {
      primary: string;
      accent: string;
      background: string;
    };
  };
}

export interface Slide {
  id: string;
  type: 'title' | 'content' | 'chart' | 'image' | 'mixed';
  title: string;
  content: string[];
  chart?: {
    type: 'bar' | 'line' | 'pie';
    data: { name: string; value: number }[];
    labels?: string[];
  };
  image?: {
    url: string;
    alt: string;
    keyword: string;
  };
}

export interface Presentation {
  id: string;
  title: string;
  slides: Slide[];
  theme: Theme;
  createdAt: Date;
  updatedAt: Date;
}

export interface AIAnalysis {
  topics: string[];
  dataPoints: Array<{ labels: string[]; values: number[] }>;
  structure: string[];
  tone: 'professional' | 'casual' | 'academic' | 'creative';
  audience: string;
  suggestions: {
    titleSuggestions: string[];
    contentImprovements: string[];
    visualSuggestions: string[];
  };
}
