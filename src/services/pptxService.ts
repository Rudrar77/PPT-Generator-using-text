import PptxGenJS from 'pptxgenjs';
import { Slide, Theme } from '@/types/presentation';

export const generatePowerPoint = async (slides: Slide[], theme: Theme, title: string = 'Presentation') => {
  const pptx = new PptxGenJS();

  pptx.author = 'AI Presentation Generator';
  pptx.company = 'Lovable';
  pptx.title = title;
  pptx.subject = 'Generated Presentation';

  pptx.defineLayout({ name: 'LAYOUT_16x9', width: 10, height: 5.625 });
  pptx.layout = 'LAYOUT_16x9';

  for (const slide of slides) {
    const pptSlide = pptx.addSlide();
    pptSlide.background = { color: theme.colors.background };

    // Title
    pptSlide.addText(slide.title, {
      x: 0.5,
      y: 0.91,
      w: 9,
      h: 0.8,
      fontSize: 32,
      color: theme.colors.primary,
      bold: true,
      align: 'left',
      valign: 'top'
    });

    const hasChart = slide.chart && slide.chart.data.length > 0;
    const hasImage = slide.image?.url;
    const hasContent = slide.content.length > 0;

    const dynamicPos = getDynamicContentPosition(slide.content.length);

    if (hasChart && hasContent) {
      await addChartToSlide(pptSlide, slide.chart, theme, { x: 5, y: 1.6, w: 4.5, h: 3.6 });
      addContentToSlide(pptSlide, slide.content, theme, { x: 0.5, ...dynamicPos, w: 4.2 });
    } else if (hasImage && hasContent) {
      try {
        await addImageToSlide(pptSlide, slide.image.url, { x: 5, y: 1.6, w: 4.5, h: 3.6 });
      } catch (error) {
        console.error('Error adding image to slide:', error);
      }
      addContentToSlide(pptSlide, slide.content, theme, { x: 0.5, ...dynamicPos, w: 4.2 });
    } else if (hasChart && !hasContent) {
      await addChartToSlide(pptSlide, slide.chart, theme, { x: 1, y: 1.6, w: 8, h: 3.6 });
    } else if (hasImage && !hasContent) {
      try {
        await addImageToSlide(pptSlide, slide.image.url, { x: 1, y: 1.6, w: 8, h: 3.6 });
      } catch (error) {
        console.error('Error adding image to slide:', error);
      }
    } else if (hasContent && !hasChart && !hasImage) {
      const midPoint = Math.ceil(slide.content.length / 2);
      const firstColumn = slide.content.slice(0, midPoint);
      const secondColumn = slide.content.slice(midPoint);

      if (slide.content.length > 6) {
        const dynamicLeft = getDynamicContentPosition(firstColumn.length);
        const dynamicRight = getDynamicContentPosition(secondColumn.length);
        addContentToSlide(pptSlide, firstColumn, theme, { x: 0.5, ...dynamicLeft, w: 4.2 });
        addContentToSlide(pptSlide, secondColumn, theme, { x: 5, ...dynamicRight, w: 4.2 });
      } else {
        addContentToSlide(pptSlide, slide.content, theme, { x: 0.5, ...dynamicPos, w: 9 }, true);
      }
    }
  }

  const fileName = `${title.replace(/[^a-z0-9]/gi, '_')}_presentation.pptx`;
  await pptx.writeFile({ fileName });
};

const addContentToSlide = (
  slide: any,
  content: string[],
  theme: Theme,
  position: { x: number, y: number, w: number, h: number },
  isFullWidth: boolean = false
) => {
  if (content.length === 0) return;

  const fontSize = isFullWidth ? 14 : 12;

  const textObjects = content.map(item => ([
    {
      text: '• ',
      options: {
        fontSize,
        color: theme.colors.primary,
        bold: true,
      }
    },
    {
      text: item + '\n',
      options: {
        fontSize,
        color: theme.colors.text.primary,
      }
    }
  ])).flat();

  slide.addText(textObjects, {
    ...position,
    valign: 'middle',
    align: 'left',
    wrap: true,
    lineSpacing: fontSize * 2
  });
};

const getDynamicContentPosition = (itemCount: number): { y: number, h: number } => {
  if (itemCount <= 2) return { y: 1.6, h: 1.2 };
  if (itemCount <= 4) return { y: 1.8, h: 1.8 };
  if (itemCount <= 6) return { y: 2.0, h: 2.0 };
  if (itemCount <= 8) return { y: 2.2, h: 2.4 };
  return { y: 2.4, h: 2.8 }; // fallback
};

const addChartToSlide = async (
  slide: any,
  chart: NonNullable<Slide['chart']>,
  theme: Theme,
  position: { x: number, y: number, w: number, h: number }
) => {
  const chartData = chart.data.map(item => ({
    name: item.name,
    labels: [item.name],
    values: [item.value]
  }));

  const chartOptions = {
    ...position,
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
        barDir: 'col',
        barGrouping: 'clustered',
        catAxisLabelColor: theme.colors.text.secondary,
        valAxisLabelColor: theme.colors.text.secondary,
        chartColors
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
        chartColors
      });
      break;
  }
};

const addImageToSlide = async (
  slide: any,
  imageUrl: string,
  position: { x: number, y: number, w: number, h: number }
) => {
  try {
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
