
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
    
    // Set slide background
    pptSlide.background = { color: theme.colors.background };
    
    // Add slide title
    pptSlide.addText(slide.title, {
      x: 0.5,
      y: 0.3,
      w: 9,
      h: 0.8,
      fontSize: 28,
      fontFace: theme.typography.fontFamily.heading.split(',')[0],
      color: theme.colors.primary,
      bold: true,
      align: 'left'
    });

    // Handle different slide layouts based on content
    if (slide.chart && slide.content.length > 0) {
      // Chart + Content layout
      await addChartToSlide(pptSlide, slide.chart, theme, { x: 5.2, y: 1.5, w: 4.3, h: 3.5 });
      addContentToSlide(pptSlide, slide.content, theme, { x: 0.5, y: 1.5, w: 4.5, h: 3.5 });
    } else if (slide.image?.url && slide.content.length > 0) {
      // Image + Content layout
      try {
        await addImageToSlide(pptSlide, slide.image.url, { x: 5.2, y: 1.5, w: 4.3, h: 3.5 });
      } catch (error) {
        console.error('Error adding image to slide:', error);
      }
      addContentToSlide(pptSlide, slide.content, theme, { x: 0.5, y: 1.5, w: 4.5, h: 3.5 });
    } else if (slide.chart) {
      // Chart only
      await addChartToSlide(pptSlide, slide.chart, theme, { x: 1.5, y: 1.5, w: 7, h: 3.5 });
    } else if (slide.image?.url) {
      // Image only
      try {
        await addImageToSlide(pptSlide, slide.image.url, { x: 1.5, y: 1.5, w: 7, h: 3.5 });
      } catch (error) {
        console.error('Error adding image to slide:', error);
      }
    } else {
      // Content only
      addContentToSlide(pptSlide, slide.content, theme, { x: 0.5, y: 1.5, w: 9, h: 3.5 });
    }
  }

  // Generate and download the PowerPoint file
  const fileName = `${title.replace(/[^a-z0-9]/gi, '_')}_presentation.pptx`;
  await pptx.writeFile({ fileName });
};

const addContentToSlide = (slide: any, content: string[], theme: Theme, position: { x: number, y: number, w: number, h: number }) => {
  const bulletPoints = content.map(item => ({ text: item, options: { bullet: true } }));
  
  slide.addText(bulletPoints, {
    x: position.x,
    y: position.y,
    w: position.w,
    h: position.h,
    fontSize: 16,
    fontFace: theme.typography.fontFamily.primary.split(',')[0],
    color: theme.colors.text.primary,
    lineSpacing: 24,
    align: 'left',
    valign: 'top'
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
    legendPos: 'b',
    showValue: true,
    dataLabelColor: theme.colors.text.primary,
    dataLabelFontSize: 12
  };

  switch (chart.type) {
    case 'bar':
      slide.addChart('bar', chartData, {
        ...chartOptions,
        barDir: 'col',
        barGrouping: 'clustered',
        catAxisLabelColor: theme.colors.text.secondary,
        valAxisLabelColor: theme.colors.text.secondary,
        chartColors: [theme.colors.primary, theme.colors.secondary, theme.colors.status.success, theme.colors.status.warning]
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
        chartColors: [theme.colors.primary, theme.colors.secondary, theme.colors.status.success, theme.colors.status.warning, theme.colors.status.error, theme.colors.status.info]
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
            sizing: { type: 'cover', w: position.w, h: position.h }
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
