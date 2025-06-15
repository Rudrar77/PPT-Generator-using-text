
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
  },

  // NEW 20 THEMES START HERE
  
  // Additional Business Themes (5)
  {
    id: 'consulting-gray',
    name: 'Consulting Gray',
    category: 'business',
    colors: {
      primary: '#4b5563',
      secondary: '#f59e0b',
      background: '#f9fafb',
      surface: '#ffffff',
      surfaceAlt: '#f3f4f6',
      text: {
        primary: '#111827',
        secondary: '#4b5563',
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
        primary: 'Arial, sans-serif',
        heading: 'Arial, sans-serif'
      },
      sizes: {
        title: '2.25rem',
        heading: '1.75rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.25rem',
      shadows: {
        card: '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        elevated: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #4b5563 0%, #6b7280 100%)',
        accent: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)'
      }
    }
  },
  {
    id: 'banking-blue',
    name: 'Banking Blue',
    category: 'business',
    colors: {
      primary: '#1e3a8a',
      secondary: '#dc2626',
      background: '#eff6ff',
      surface: '#ffffff',
      surfaceAlt: '#dbeafe',
      text: {
        primary: '#1e3a8a',
        secondary: '#1e40af',
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
        primary: 'Times New Roman, serif',
        heading: 'Times New Roman, serif'
      },
      sizes: {
        title: '2.5rem',
        heading: '1.875rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.25rem',
      shadows: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
        accent: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)'
      }
    }
  },
  {
    id: 'corporate-red',
    name: 'Corporate Red',
    category: 'business',
    colors: {
      primary: '#b91c1c',
      secondary: '#374151',
      background: '#fef2f2',
      surface: '#ffffff',
      surfaceAlt: '#fecaca',
      text: {
        primary: '#7f1d1d',
        secondary: '#b91c1c',
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
        primary: 'Roboto, sans-serif',
        heading: 'Roboto, sans-serif'
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
        primary: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
        accent: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
        background: 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)'
      }
    }
  },
  {
    id: 'enterprise-purple',
    name: 'Enterprise Purple',
    category: 'business',
    colors: {
      primary: '#581c87',
      secondary: '#059669',
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
        primary: 'Segoe UI, sans-serif',
        heading: 'Segoe UI, sans-serif'
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
        primary: 'linear-gradient(135deg, #581c87 0%, #7c3aed 100%)',
        accent: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
        background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)'
      }
    }
  },
  {
    id: 'business-minimal',
    name: 'Business Minimal',
    category: 'business',
    colors: {
      primary: '#000000',
      secondary: '#3b82f6',
      background: '#ffffff',
      surface: '#ffffff',
      surfaceAlt: '#f8fafc',
      text: {
        primary: '#000000',
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
        primary: 'Helvetica, sans-serif',
        heading: 'Helvetica, sans-serif'
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
        elevated: '0 2px 4px -1px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #000000 0%, #374151 100%)',
        accent: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
      }
    }
  },

  // Additional Creative Themes (5)
  {
    id: 'colorful-pop',
    name: 'Colorful Pop',
    category: 'creative',
    colors: {
      primary: '#f59e0b',
      secondary: '#ec4899',
      background: '#fefce8',
      surface: '#ffffff',
      surfaceAlt: '#fef3c7',
      text: {
        primary: '#92400e',
        secondary: '#d97706',
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
        primary: 'Comic Sans MS, cursive',
        heading: 'Comic Sans MS, cursive'
      },
      sizes: {
        title: '3rem',
        heading: '2rem',
        body: '1.125rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '2rem',
      shadows: {
        card: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        elevated: '0 20px 40px -10px rgba(0, 0, 0, 0.15)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
        accent: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
        background: 'linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)'
      }
    }
  },
  {
    id: 'abstract-geo',
    name: 'Abstract Geo',
    category: 'creative',
    colors: {
      primary: '#0f766e',
      secondary: '#c2410c',
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
        primary: 'Futura, sans-serif',
        heading: 'Futura, sans-serif'
      },
      sizes: {
        title: '2.75rem',
        heading: '2rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0rem',
      shadows: {
        card: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
        elevated: '0 15px 35px -5px rgba(0, 0, 0, 0.15)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
        accent: 'linear-gradient(135deg, #c2410c 0%, #ea580c 100%)',
        background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)'
      }
    }
  },
  {
    id: 'creative-dark',
    name: 'Creative Dark',
    category: 'creative',
    colors: {
      primary: '#22d3ee',
      secondary: '#fb7185',
      background: '#111827',
      surface: '#1f2937',
      surfaceAlt: '#374151',
      text: {
        primary: '#f9fafb',
        secondary: '#e5e7eb',
        muted: '#9ca3af',
        inverse: '#111827'
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
        primary: 'Space Grotesk, sans-serif',
        heading: 'Space Grotesk, sans-serif'
      },
      sizes: {
        title: '2.75rem',
        heading: '2rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '1rem',
      shadows: {
        card: '0 8px 25px -5px rgba(0, 0, 0, 0.3)',
        elevated: '0 20px 40px -10px rgba(0, 0, 0, 0.4)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
        accent: 'linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)',
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
      }
    }
  },
  {
    id: 'rainbow-gradient',
    name: 'Rainbow Gradient',
    category: 'creative',
    colors: {
      primary: '#8b5cf6',
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
        primary: 'Raleway, sans-serif',
        heading: 'Raleway, sans-serif'
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
        card: '0 10px 30px -5px rgba(139, 92, 246, 0.2)',
        elevated: '0 25px 50px -10px rgba(139, 92, 246, 0.3)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%)',
        accent: 'linear-gradient(135deg, #f59e0b 0%, #10b981 50%, #3b82f6 100%)',
        background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)'
      }
    }
  },
  {
    id: 'modern-art',
    name: 'Modern Art',
    category: 'creative',
    colors: {
      primary: '#dc2626',
      secondary: '#1d4ed8',
      background: '#fffbeb',
      surface: '#ffffff',
      surfaceAlt: '#fef3c7',
      text: {
        primary: '#7f1d1d',
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
        primary: 'Avant Garde, sans-serif',
        heading: 'Avant Garde, sans-serif'
      },
      sizes: {
        title: '3.5rem',
        heading: '2.25rem',
        body: '1.125rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.25rem',
      shadows: {
        card: '0 15px 35px -5px rgba(0, 0, 0, 0.15)',
        elevated: '0 25px 50px -10px rgba(0, 0, 0, 0.2)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        accent: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
        background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)'
      }
    }
  },

  // Additional Industry Themes (5)
  {
    id: 'real-estate-luxury',
    name: 'Real Estate Luxury',
    category: 'industry',
    colors: {
      primary: '#8b5a3c',
      secondary: '#d97706',
      background: '#fef7ed',
      surface: '#ffffff',
      surfaceAlt: '#fed7aa',
      text: {
        primary: '#451a03',
        secondary: '#8b5a3c',
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
        primary: 'Playfair Display, serif',
        heading: 'Playfair Display, serif'
      },
      sizes: {
        title: '2.75rem',
        heading: '2rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.5rem',
      shadows: {
        card: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
        elevated: '0 15px 35px -5px rgba(0, 0, 0, 0.15)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #8b5a3c 0%, #a16207 100%)',
        accent: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
        background: 'linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%)'
      }
    }
  },
  {
    id: 'restaurant-warm',
    name: 'Restaurant Warm',
    category: 'industry',
    colors: {
      primary: '#dc2626',
      secondary: '#f59e0b',
      background: '#fff7ed',
      surface: '#ffffff',
      surfaceAlt: '#fed7aa',
      text: {
        primary: '#7f1d1d',
        secondary: '#dc2626',
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
        primary: 'Dancing Script, cursive',
        heading: 'Dancing Script, cursive'
      },
      sizes: {
        title: '3rem',
        heading: '2.25rem',
        body: '1.125rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '1rem',
      shadows: {
        card: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
        elevated: '0 15px 35px -5px rgba(0, 0, 0, 0.15)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
        accent: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
        background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)'
      }
    }
  },
  {
    id: 'fitness-energy',
    name: 'Fitness Energy',
    category: 'industry',
    colors: {
      primary: '#ea580c',
      secondary: '#059669',
      background: '#fff7ed',
      surface: '#ffffff',
      surfaceAlt: '#fed7aa',
      text: {
        primary: '#7c2d12',
        secondary: '#ea580c',
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
        primary: 'Impact, sans-serif',
        heading: 'Impact, sans-serif'
      },
      sizes: {
        title: '3rem',
        heading: '2.25rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.75rem',
      shadows: {
        card: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
        elevated: '0 15px 35px -5px rgba(0, 0, 0, 0.15)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
        accent: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
        background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)'
      }
    }
  },
  {
    id: 'legal-professional',
    name: 'Legal Professional',
    category: 'industry',
    colors: {
      primary: '#1e40af',
      secondary: '#92400e',
      background: '#eff6ff',
      surface: '#ffffff',
      surfaceAlt: '#dbeafe',
      text: {
        primary: '#1e3a8a',
        secondary: '#1e40af',
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
        primary: 'Garamond, serif',
        heading: 'Garamond, serif'
      },
      sizes: {
        title: '2.5rem',
        heading: '1.875rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.25rem',
      shadows: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        accent: 'linear-gradient(135deg, #92400e 0%, #d97706 100%)',
        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)'
      }
    }
  },
  {
    id: 'startup-dynamic',
    name: 'Startup Dynamic',
    category: 'industry',
    colors: {
      primary: '#8b5cf6',
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
        title: '2.75rem',
        heading: '2rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '1rem',
      shadows: {
        card: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
        elevated: '0 15px 35px -5px rgba(0, 0, 0, 0.15)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
        accent: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
        background: 'linear-gradient(135deg, #fafafa 0%, #f4f4f5 100%)'
      }
    }
  },

  // Additional Specialty Themes (5)
  {
    id: 'retro-vintage',
    name: 'Retro Vintage',
    category: 'specialty',
    colors: {
      primary: '#b45309',
      secondary: '#dc2626',
      background: '#fef7ed',
      surface: '#ffffff',
      surfaceAlt: '#fed7aa',
      text: {
        primary: '#92400e',
        secondary: '#b45309',
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
        primary: 'Courier New, monospace',
        heading: 'Courier New, monospace'
      },
      sizes: {
        title: '2.5rem',
        heading: '1.875rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.25rem',
      shadows: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
        elevated: '0 8px 12px -2px rgba(0, 0, 0, 0.25)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #b45309 0%, #d97706 100%)',
        accent: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
        background: 'linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%)'
      }
    }
  },
  {
    id: 'nature-organic',
    name: 'Nature Organic',
    category: 'specialty',
    colors: {
      primary: '#166534',
      secondary: '#a16207',
      background: '#f0fdf4',
      surface: '#ffffff',
      surfaceAlt: '#dcfce7',
      text: {
        primary: '#14532d',
        secondary: '#166534',
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
        primary: 'Merriweather, serif',
        heading: 'Merriweather, serif'
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
        primary: 'linear-gradient(135deg, #166534 0%, #15803d 100%)',
        accent: 'linear-gradient(135deg, #a16207 0%, #ca8a04 100%)',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'
      }
    }
  },
  {
    id: 'space-cosmic',
    name: 'Space Cosmic',
    category: 'specialty',
    colors: {
      primary: '#6366f1',
      secondary: '#ec4899',
      background: '#0f0f23',
      surface: '#1a1a2e',
      surfaceAlt: '#16213e',
      text: {
        primary: '#ffffff',
        secondary: '#c7d2fe',
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
        primary: 'Orbitron, monospace',
        heading: 'Orbitron, monospace'
      },
      sizes: {
        title: '2.75rem',
        heading: '2rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '1rem',
      shadows: {
        card: '0 0 25px rgba(99, 102, 241, 0.3)',
        elevated: '0 0 50px rgba(99, 102, 241, 0.4)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        accent: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)'
      }
    }
  },
  {
    id: 'luxury-black',
    name: 'Luxury Black',
    category: 'specialty',
    colors: {
      primary: '#000000',
      secondary: '#fbbf24',
      background: '#111827',
      surface: '#1f2937',
      surfaceAlt: '#374151',
      text: {
        primary: '#ffffff',
        secondary: '#f9fafb',
        muted: '#d1d5db',
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
        primary: 'Didot, serif',
        heading: 'Didot, serif'
      },
      sizes: {
        title: '3rem',
        heading: '2.25rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '0.5rem',
      shadows: {
        card: '0 8px 25px -5px rgba(0, 0, 0, 0.5)',
        elevated: '0 15px 35px -5px rgba(0, 0, 0, 0.6)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #000000 0%, #374151 100%)',
        accent: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
      }
    }
  },
  {
    id: 'pastel-dreams',
    name: 'Pastel Dreams',
    category: 'specialty',
    colors: {
      primary: '#a78bfa',
      secondary: '#fb7185',
      background: '#fdf4ff',
      surface: '#ffffff',
      surfaceAlt: '#fae8ff',
      text: {
        primary: '#581c87',
        secondary: '#7c3aed',
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
        primary: 'Quicksand, sans-serif',
        heading: 'Quicksand, sans-serif'
      },
      sizes: {
        title: '2.5rem',
        heading: '1.875rem',
        body: '1rem',
        caption: '0.875rem'
      }
    },
    layout: {
      borderRadius: '1.5rem',
      shadows: {
        card: '0 8px 25px -5px rgba(167, 139, 250, 0.2)',
        elevated: '0 15px 35px -5px rgba(167, 139, 250, 0.25)'
      }
    },
    effects: {
      gradients: {
        primary: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)',
        accent: 'linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)',
        background: 'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)'
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
