
import PptxGenJS from 'pptxgenjs';
import { Slide, Theme } from '@/types/presentation';

export const generatePowerPoint = async (slides: Slide[], theme: Theme, title: string = 'Presentation') => {
  const pptx = new PptxGenJS();
  
  // Set presentation properties
  pptx.author = 'AI Presentation Generator';
  pptx.company = 'Lovable';
  pptx.title = title;
  pptx.subject = 'Generated Presentation';
  
  // Set slide size (16:9)
  pptx.defineLayout({ name: 'LAYOUT_16x9', width: 10, height: 5.625 });
  pptx.layout = 'LAYOUT_16x9';

  for (const slide of slides) {
    const pptSlide = pptx.addSlide();
    
    // Set slide background to match live preview
    pptSlide.background = { color: theme.colors.background };
    
    // Add slide title with exact styling from live preview
    pptSlide.addText(slide.title, {
      x: 0.5,
      y: 0.2,
      w: 9,
      h: 0.8,
      fontSize: 32,
      fontFace: 'Arial', // Use consistent font
      color: theme.colors.primary,
      bold: true,
      align: 'left',
      valign: 'top'
    });

    // Optimize layout based on content availability
    const hasChart = slide.chart && slide.chart.data.length > 0;
    const hasImage = slide.image?.url;
    const hasContent = slide.content.length > 0;

    if (hasChart && hasContent) {
      // Chart + Content layout - optimize spacing
      await addChartToSlide(pptSlide, slide.chart, theme, { x: 5, y: 1.2, w: 4.5, h: 3.8 });
      addContentToSlide(pptSlide, slide.content, theme, { x: 0.5, y: 1.2, w: 4.2, h: 3.8 });
    } else if (hasImage && hasContent) {
      // Image + Content layout - optimize spacing
      try {
        await addImageToSlide(pptSlide, slide.image.url, { x: 5, y: 1.2, w: 4.5, h: 3.8 });
      } catch (error) {
        console.error('Error adding image to slide:', error);
      }
      addContentToSlide(pptSlide, slide.content, theme, { x: 0.5, y: 1.2, w: 4.2, h: 3.8 });
    } else if (hasChart && !hasContent) {
      // Chart only - center and make larger
      await addChartToSlide(pptSlide, slide.chart, theme, { x: 1, y: 1.2, w: 8, h: 3.8 });
    } else if (hasImage && !hasContent) {
      // Image only - center and make larger
      try {
        await addImageToSlide(pptSlide, slide.image.url, { x: 1, y: 1.2, w: 8, h: 3.8 });
      } catch (error) {
        console.error('Error adding image to slide:', error);
      }
    } else if (hasContent && !hasChart && !hasImage) {
      // Content only - use two columns to fill space better
      const midPoint = Math.ceil(slide.content.length / 2);
      const firstColumn = slide.content.slice(0, midPoint);
      const secondColumn = slide.content.slice(midPoint);
      
      if (slide.content.length > 6) {
        // Use two columns for better space utilization
        addContentToSlide(pptSlide, firstColumn, theme, { x: 0.5, y: 1.2, w: 4.2, h: 3.8 });
        addContentToSlide(pptSlide, secondColumn, theme, { x: 5, y: 1.2, w: 4.2, h: 3.8 });
      } else {
        // Single column with larger text for fewer items
        addContentToSlide(pptSlide, slide.content, theme, { x: 0.5, y: 1.2, w: 9, h: 3.8 }, true);
      }
    }
  }

  // Generate and download the PowerPoint file
  const fileName = `${title.replace(/[^a-z0-9]/gi, '_')}_presentation.pptx`;
  await pptx.writeFile({ fileName });
};

const addContentToSlide = (slide: any, content: string[], theme: Theme, position: { x: number, y: number, w: number, h: number }, isFullWidth: boolean = false) => {
  if (content.length === 0) return;
  
  // Calculate optimal spacing to match live preview
  const baseLineHeight = isFullWidth ? 0.6 : 0.45;
  const fontSize = isFullWidth ? 18 : 16;
  const bulletIndent = 0.2;
  
  // Ensure proper spacing without overlap
  const totalContentHeight = content.length * baseLineHeight;
  const adjustedLineHeight = totalContentHeight > position.h ? (position.h - 0.2) / content.length : baseLineHeight;
  
  // Add each bullet point with exact live preview styling
  content.forEach((item, index) => {
    const yPosition = position.y + (index * adjustedLineHeight);
    
    // Add bullet point
    slide.addText('•', {
      x: position.x,
      y: yPosition,
      w: bulletIndent,
      h: adjustedLineHeight,
      fontSize: fontSize,
      fontFace: 'Arial',
      color: theme.colors.primary, // Use primary color for bullets like live preview
      align: 'left',
      valign: 'top',
      bold: true
    });
    
    // Add content text
    slide.addText(item, {
      x: position.x + bulletIndent,
      y: yPosition,
      w: position.w - bulletIndent,
      h: adjustedLineHeight,
      fontSize: fontSize,
      fontFace: 'Arial',
      color: theme.colors.text.primary,
      align: 'left',
      valign: 'top',
      wrap: true,
      margin: [0.05, 0.05, 0.05, 0.05]
    });
  });
};

const addChartToSlide = async (slide: any, chart: NonNullable<Slide['chart']>, theme: Theme, position: { x: number, y: number, w: number, h: number }) => {
  const chartData = chart.data.map(item => ({
    name: item.name,
    labels: [item.name],
    values: [item.value]
  }));

  const chartOptions = {
    x: position.x,
    y: position.y,
    w: position.w,
    h: position.h,
    showTitle: false,
    showLegend: true,
    legendPos: 'b' as const,
    showValue: true,
    dataLabelColor: theme.colors.text.primary,
    dataLabelFontSize: 12,
    border: { pt: 1, color: theme.colors.primary }
  };

  const chartColors = [
    theme.colors.primary, 
    theme.colors.secondary, 
    theme.colors.status.success, 
    theme.colors.status.warning,
    theme.colors.status.error,
    theme.colors.status.info
  ];

  switch (chart.type) {
    case 'bar':
      slide.addChart('bar', chartData, {
        ...chartOptions,
        barDir: 'col' as const,
        barGrouping: 'clustered' as const,
        catAxisLabelColor: theme.colors.text.secondary,
        valAxisLabelColor: theme.colors.text.secondary,
        chartColors: chartColors
      });
      break;
    
    case 'line':
      slide.addChart('line', chartData, {
        ...chartOptions,
        lineSmooth: true,
        chartColors: [theme.colors.primary]
      });
      break;
    
    case 'pie':
      slide.addChart('pie', chartData, {
        ...chartOptions,
        chartColors: chartColors
      });
      break;
  }
};

const addImageToSlide = async (slide: any, imageUrl: string, position: { x: number, y: number, w: number, h: number }) => {
  try {
    // Convert image URL to base64 for embedding
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          slide.addImage({
            data: reader.result,
            x: position.x,
            y: position.y,
            w: position.w,
            h: position.h,
            sizing: { type: 'cover', w: position.w, h: position.h },
            rounding: true
          });
          resolve(true);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error processing image:', error);
    throw error;
  }
};
