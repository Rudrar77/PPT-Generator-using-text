import { useState, useEffect } from 'react';
import { Slide, Theme, Presentation } from '@/types/presentation';
import { PROFESSIONAL_THEMES } from '@/data/themes';
import { parseSlideContent, generateSlideContent } from '@/utils/slideParser';
import { analyzeContent } from '@/services/aiService';
import { searchImages, getImageForKeyword, extractImageKeywords } from '@/services/imageService';
import { generatePowerPoint } from '@/services/pptxService';
import { ThemeSelector } from './ThemeSelector';
import { SlideViewer } from './SlideViewer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Sparkles, 
  Eye, 
  Palette, 
  Download, 
  Share, 
  Maximize, 
  FileText,
  BarChart3,
  Image as ImageIcon,
  Loader2,
  Lightbulb
} from 'lucide-react';
import { toast } from 'sonner';

export const PresentationBuilder = () => {
  const [inputText, setInputText] = useState('');
  const [slides, setSlides] = useState<Slide[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<Theme>(PROFESSIONAL_THEMES[0]);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [showFullscreenViewer, setShowFullscreenViewer] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('input');

  const sampleContent = `# Quarterly Business Review
# Executive Summary
- Revenue performance exceeded targets by 15%
- Market expansion into 3 new regions completed
- Customer satisfaction scores improved significantly
chart: bar;Q1,Q2,Q3,Q4;120,135,142,158

# Market Analysis
- Competitive landscape assessment completed
- Customer behavior trends analyzed thoroughly
- Growth opportunities identified and prioritized
image: business analytics dashboard

# Key Achievements
- Successfully launched 5 new product features
- Reduced operational costs by 12% year-over-year
- Increased team productivity through automation
chart: pie;Sales,Marketing,Operations;45,30,25

# Next Quarter Goals
- Expand into 2 additional international markets
- Launch customer loyalty program initiative
- Implement advanced analytics platform
image: team collaboration`;

  useEffect(() => {
    if (inputText.trim()) {
      handleGeneratePresentation();
    }
  }, [selectedTheme]);

  const handleEnhanceWithAI = async () => {
    if (!inputText.trim()) {
      toast.error('Please enter some content first');
      return;
    }

    setIsProcessing(true);
    try {
      const analysis = await analyzeContent(inputText);
      setAiSuggestions(analysis);
      
      // Generate enhanced content based on AI analysis
      const enhancedContent = generateEnhancedContent(inputText, analysis);
      setInputText(enhancedContent);
      
      toast.success('Content enhanced with AI!');
    } catch (error) {
      toast.error('Failed to enhance content');
      console.error('AI enhancement error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const generateEnhancedContent = (originalText: string, analysis: any): string => {
    // This would integrate with a real AI service in production
    // For now, we'll enhance the structure and add suggestions
    let enhanced = originalText;
    
    // Add chart suggestions if numerical data is detected
    if (analysis.dataPoints.length > 0) {
      const chartSuggestion = `\nchart: bar;${analysis.dataPoints[0].labels.join(',')};${analysis.dataPoints[0].values.join(',')}`;
      enhanced += chartSuggestion;
    }
    
    // Add image suggestions based on topics
    if (analysis.topics.length > 0) {
      const imageSuggestion = `\nimage: ${analysis.topics[0]} visualization`;
      enhanced += imageSuggestion;
    }
    
    return enhanced;
  };

  const handleGeneratePresentation = async () => {
    if (!inputText.trim()) {
      setSlides([]);
      return;
    }

    setIsProcessing(true);
    try {
      const parsedSlides = parseSlideContent(inputText);
      
      // Fetch images for slides that need them
      const slidesWithImages = await Promise.all(
        parsedSlides.map(async (slide) => {
          if (slide.image && slide.image.keyword) {
            try {
              const image = await getImageForKeyword(slide.image.keyword);
              if (image) {
                return {
                  ...slide,
                  image: {
                    ...slide.image,
                    url: image.url,
                    alt: image.alt
                  }
                };
              }
            } catch (error) {
              console.error('Error fetching image:', error);
            }
          }
          return slide;
        })
      );

      setSlides(slidesWithImages);
      setActiveTab('preview');
      toast.success(`Generated ${slidesWithImages.length} slides!`);
    } catch (error) {
      toast.error('Failed to generate presentation');
      console.error('Generation error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleUseSample = () => {
    setInputText(sampleContent);
    toast.success('Sample content loaded!');
  };

  const handleExportPDF = async () => {
    if (slides.length === 0) {
      toast.error('No slides to export');
      return;
    }

    setIsExporting(true);
    try {
      const presentationTitle = slides[0]?.title || 'Presentation';
      await generatePowerPoint(slides, selectedTheme, presentationTitle);
      toast.success('PowerPoint presentation downloaded successfully!');
    } catch (error) {
      console.error('Export error:', error);
      toast.error('Failed to export presentation');
    } finally {
      setIsExporting(false);
    }
  };

  const handleShare = () => {
    toast.info('Share feature coming soon!');
  };

  const slideStats = {
    total: slides.length,
    withCharts: slides.filter(s => s.chart).length,
    withImages: slides.filter(s => s.image?.url).length,
    textOnly: slides.filter(s => !s.chart && !s.image?.url).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AI Presentation Generator</h1>
                <p className="text-sm text-gray-600">Transform text into beautiful presentations</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button onClick={() => setShowThemeSelector(true)} variant="outline" size="sm">
                <Palette className="w-4 h-4 mr-2" />
                Themes
              </Button>
              {slides.length > 0 && (
                <>
                  <Button onClick={() => setShowFullscreenViewer(true)} variant="outline" size="sm">
                    <Maximize className="w-4 h-4 mr-2" />
                    Present
                  </Button>
                  <Button 
                    onClick={handleExportPDF} 
                    variant="outline" 
                    size="sm"
                    disabled={isExporting}
                  >
                    {isExporting ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Download className="w-4 h-4 mr-2" />
                    )}
                    {isExporting ? 'Exporting...' : 'Download PPT'}
                  </Button>
                  <Button onClick={handleShare} variant="outline" size="sm">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Panel - Input & Controls */}
          <div className="lg:col-span-5 space-y-6">
            {/* AI Enhancement Card */}
            <Card className="border-2 border-dashed border-blue-300 bg-blue-50/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Sparkles className="w-5 h-5" />
                  AI-Powered Enhancement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-blue-600">
                  Paste any text, notes, or data - AI will transform it into a beautiful presentation
                </p>
                <div className="flex gap-2">
                  <Button 
                    onClick={handleEnhanceWithAI} 
                    disabled={isProcessing || !inputText.trim()}
                    className="flex-1"
                  >
                    {isProcessing ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4 mr-2" />
                    )}
                    Enhance with AI
                  </Button>
                  <Button onClick={handleUseSample} variant="outline">
                    Use Sample
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Input Area */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Content Input
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste your content here... 

Examples:
# Slide Title
- Bullet point content
- Multiple points supported
chart: bar;Q1,Q2,Q3,Q4;10,20,30,40
image: business meeting

AI will automatically structure and enhance your content!"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[300px] resize-none"
                />
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {inputText.length} characters
                  </div>
                  <Button 
                    onClick={handleGeneratePresentation}
                    disabled={isProcessing || !inputText.trim()}
                  >
                    {isProcessing ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Eye className="w-4 h-4 mr-2" />
                    )}
                    Generate Slides
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            {aiSuggestions && (
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-amber-700 text-lg">
                    <Lightbulb className="w-5 h-5" />
                    AI Suggestions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">Detected Topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {aiSuggestions.topics.map((topic: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-amber-700 border-amber-300">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">Content Improvements:</h4>
                    <ul className="space-y-1">
                      {aiSuggestions.suggestions.contentImprovements.map((suggestion: string, index: number) => (
                        <li key={index} className="text-sm text-amber-700 flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Stats */}
            {slides.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Presentation Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">Total Slides: {slideStats.total}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">With Charts: {slideStats.withCharts}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">With Images: {slideStats.withImages}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-400 rounded" />
                      <span className="text-sm">Text Only: {slideStats.textOnly}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:col-span-7">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Live Preview
                  </CardTitle>
                  <Badge 
                    variant="outline" 
                    className="text-xs"
                    style={{ 
                      color: selectedTheme.colors.primary,
                      borderColor: selectedTheme.colors.primary 
                    }}
                  >
                    {selectedTheme.name}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="h-[600px] p-0">
                {slides.length > 0 ? (
                  <SlideViewer 
                    slides={slides} 
                    theme={selectedTheme}
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500 bg-gray-50 rounded-b-lg">
                    <div className="text-center">
                      <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium mb-2">Ready to Create Amazing Presentations</p>
                      <p className="text-sm">Enter your content or use the sample to get started</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Theme Selector Modal */}
      {showThemeSelector && (
        <ThemeSelector
          selectedTheme={selectedTheme}
          onThemeSelect={setSelectedTheme}
          onClose={() => setShowThemeSelector(false)}
        />
      )}

      {/* Fullscreen Viewer */}
      {showFullscreenViewer && slides.length > 0 && (
        <SlideViewer
          slides={slides}
          theme={selectedTheme}
          isFullscreen={true}
          onClose={() => setShowFullscreenViewer(false)}
        />
      )}
    </div>
  );
};
