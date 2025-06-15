
import { Theme } from '@/types/presentation';

export const PROFESSIONAL_THEMES: Theme[] = [
  // Business & Corporate (10 themes)
  {
    id: 'executive-blue',
    name: 'Executive Blue',
    category: 'business',
    colors: {
      primary: '#1e40af',
      secondary: '#fbbf24',
      background: '#f8fafc',
      surface: '#ffffff',
      surfaceAlt: '#f1f5f9',
      text: {
        primary: '#0f172a',
        secondary: '#475569',
        muted: '#94a3b8',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'Inter, system-ui, sans-serif',
        heading: 'Inter, system-ui, sans-serif'
      },
      sizes: {
        title: '2.5rem',
        heading: '1.875rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.75rem',
      shadows: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        accent: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }
    }
  },
  {
    id: 'corporate-slate',
    name: 'Corporate Slate',
    category: 'business',
    colors: {
      primary: '#334155',
      secondary: '#3b82f6',
      background: '#f1f5f9',
      surface: '#ffffff',
      surfaceAlt: '#e2e8f0',
      text: {
        primary: '#0f172a',
        secondary: '#475569',
        muted: '#94a3b8',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'System UI, sans-serif',
        heading: 'System UI, sans-serif'
      },
      sizes: {
        title: '2.5rem',
        heading: '1.875rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.5rem',
      shadows: {
        card: '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        elevated: '0 8px 12px -2px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #334155 0%, #475569 100%)',
        accent: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        background: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)'
      }
    }
  },
  {
    id: 'professional-green',
    name: 'Professional Green',
    category: 'business',
    colors: {
      primary: '#059669',
      secondary: '#f59e0b',
      background: '#f0fdf4',
      surface: '#ffffff',
      surfaceAlt: '#dcfce7',
      text: {
        primary: '#064e3b',
        secondary: '#047857',
        muted: '#6b7280',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'Inter, sans-serif',
        heading: 'Inter, sans-serif'
      },
      sizes: {
        title: '2.5rem',
        heading: '1.875rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.75rem',
      shadows: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
        accent: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'
      }
    }
  },
  {
    id: 'financial-gold',
    name: 'Financial Gold',
    category: 'business',
    colors: {
      primary: '#92400e',
      secondary: '#1e40af',
      background: '#fffbeb',
      surface: '#ffffff',
      surfaceAlt: '#fef3c7',
      text: {
        primary: '#451a03',
        secondary: '#92400e',
        muted: '#6b7280',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'Georgia, serif',
        heading: 'Georgia, serif'
      },
      sizes: {
        title: '2.5rem',
        heading: '1.875rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.5rem',
      shadows: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #92400e 0%, #d97706 100%)',
        accent: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)'
      }
    }
  },
  {
    id: 'tech-corporate',
    name: 'Tech Corporate',
    category: 'business',
    colors: {
      primary: '#6366f1',
      secondary: '#06b6d4',
      background: '#fafafa',
      surface: '#ffffff',
      surfaceAlt: '#f4f4f5',
      text: {
        primary: '#18181b',
        secondary: '#52525b',
        muted: '#a1a1aa',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'SF Pro Display, sans-serif',
        heading: 'SF Pro Display, sans-serif'
      },
      sizes: {
        title: '2.5rem',
        heading: '1.875rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '1rem',
      shadows: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        accent: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
        background: 'linear-gradient(135deg, #fafafa 0%, #f4f4f5 100%)'
      }
    }
  },

  // Creative & Modern (10 themes)
  {
    id: 'gradient-sunset',
    name: 'Gradient Sunset',
    category: 'creative',
    colors: {
      primary: '#ea580c',
      secondary: '#ec4899',
      background: '#fff7ed',
      surface: '#ffffff',
      surfaceAlt: '#fed7aa',
      text: {
        primary: '#431407',
        secondary: '#ea580c',
        muted: '#78716c',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'Poppins, sans-serif',
        heading: 'Poppins, sans-serif'
      },
      sizes: {
        title: '3rem',
        heading: '2rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '1.5rem',
      shadows: {
        card: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
        elevated: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
        accent: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
        background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)'
      }
    }
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    category: 'creative',
    colors: {
      primary: '#0891b2',
      secondary: '#10b981',
      background: '#f0fdfa',
      surface: '#ffffff',
      surfaceAlt: '#ccfbf1',
      text: {
        primary: '#042f2e',
        secondary: '#0f766e',
        muted: '#6b7280',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'Nunito, sans-serif',
        heading: 'Nunito, sans-serif'
      },
      sizes: {
        title: '2.75rem',
        heading: '1.875rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '1rem',
      shadows: {
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        elevated: '0 15px 30px -5px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
        accent: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)'
      }
    }
  },
  {
    id: 'neon-cyber',
    name: 'Neon Cyber',
    category: 'creative',
    colors: {
      primary: '#8b5cf6',
      secondary: '#06b6d4',
      background: '#0f0f23',
      surface: '#1a1a2e',
      surfaceAlt: '#16213e',
      text: {
        primary: '#ffffff',
        secondary: '#c084fc',
        muted: '#9ca3af',
        inverse: '#000000'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'JetBrains Mono, monospace',
        heading: 'JetBrains Mono, monospace'
      },
      sizes: {
        title: '2.5rem',
        heading: '1.75rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.5rem',
      shadows: {
        card: '0 0 20px rgba(139, 92, 246, 0.3)',
        elevated: '0 0 40px rgba(139, 92, 246, 0.4)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
        accent: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)'
      }
    }
  },
  {
    id: 'artistic-bold',
    name: 'Artistic Bold',
    category: 'creative',
    colors: {
      primary: '#dc2626',
      secondary: '#7c3aed',
      background: '#fef2f2',
      surface: '#ffffff',
      surfaceAlt: '#fecaca',
      text: {
        primary: '#450a0a',
        secondary: '#dc2626',
        muted: '#6b7280',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'Montserrat, sans-serif',
        heading: 'Montserrat, sans-serif'
      },
      sizes: {
        title: '3rem',
        heading: '2rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.75rem',
      shadows: {
        card: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
        elevated: '0 20px 40px -10px rgba(0, 0, 0, 0.2)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        accent: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
        background: 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)'
      }
    }
  },
  {
    id: 'design-studio',
    name: 'Design Studio',
    category: 'creative',
    colors: {
      primary: '#1f2937',
      secondary: '#f59e0b',
      background: '#ffffff',
      surface: '#f9fafb',
      surfaceAlt: '#f3f4f6',
      text: {
        primary: '#111827',
        secondary: '#374151',
        muted: '#6b7280',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'Helvetica Neue, sans-serif',
        heading: 'Helvetica Neue, sans-serif'
      },
      sizes: {
        title: '3.5rem',
        heading: '2.25rem',
        body: '1.125rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0rem',
      shadows: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        elevated: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
        accent: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)'
      }
    }
  },

  // Industry Specific (10 themes)
  {
    id: 'medical-clean',
    name: 'Medical Clean',
    category: 'industry',
    colors: {
      primary: '#0369a1',
      secondary: '#059669',
      background: '#f0f9ff',
      surface: '#ffffff',
      surfaceAlt: '#e0f2fe',
      text: {
        primary: '#0c4a6e',
        secondary: '#0369a1',
        muted: '#64748b',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'Source Sans Pro, sans-serif',
        heading: 'Source Sans Pro, sans-serif'
      },
      sizes: {
        title: '2.25rem',
        heading: '1.75rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.5rem',
      shadows: {
        card: '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        elevated: '0 8px 12px -2px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #0369a1 0%, #0284c7 100%)',
        accent: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
      }
    }
  },
  {
    id: 'education-bright',
    name: 'Education Bright',
    category: 'industry',
    colors: {
      primary: '#7c3aed',
      secondary: '#f59e0b',
      background: '#faf5ff',
      surface: '#ffffff',
      surfaceAlt: '#f3e8ff',
      text: {
        primary: '#581c87',
        secondary: '#7c3aed',
        muted: '#6b7280',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'Open Sans, sans-serif',
        heading: 'Open Sans, sans-serif'
      },
      sizes: {
        title: '2.5rem',
        heading: '1.875rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '1rem',
      shadows: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
        accent: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)'
      }
    }
  },

  // Specialty Themes (10+ themes)
  {
    id: 'dark-mode-pro',
    name: 'Dark Mode Pro',
    category: 'specialty',
    colors: {
      primary: '#3b82f6',
      secondary: '#10b981',
      background: '#0f172a',
      surface: '#1e293b',
      surfaceAlt: '#334155',
      text: {
        primary: '#f8fafc',
        secondary: '#cbd5e1',
        muted: '#94a3b8',
        inverse: '#0f172a'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'Inter, sans-serif',
        heading: 'Inter, sans-serif'
      },
      sizes: {
        title: '2.5rem',
        heading: '1.875rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.75rem',
      shadows: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.4)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        accent: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
      }
    }
  },
  {
    id: 'minimalist-zen',
    name: 'Minimalist Zen',
    category: 'specialty',
    colors: {
      primary: '#374151',
      secondary: '#6b7280',
      background: '#ffffff',
      surface: '#ffffff',
      surfaceAlt: '#f9fafb',
      text: {
        primary: '#111827',
        secondary: '#374151',
        muted: '#9ca3af',
        inverse: '#ffffff'
      },
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    typography: {
      fontFamily: {
        primary: 'SF Pro Text, sans-serif',
        heading: 'SF Pro Text, sans-serif'
      },
      sizes: {
        title: '2rem',
        heading: '1.5rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0rem',
      shadows: {
        card: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        elevated: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
        accent: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)',
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)'
      }
    }
  }
];

export const getThemesByCategory = (category: string) => {
  return PROFESSIONAL_THEMES.filter(theme => theme.category === category);
};

export const getThemeById = (id: string) => {
  return PROFESSIONAL_THEMES.find(theme => theme.id === id) || PROFESSIONAL_THEMES[0];
};
