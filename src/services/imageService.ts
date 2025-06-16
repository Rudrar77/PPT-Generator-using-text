
const PEXELS_API_KEY = "YOUR_API_KEY";

export interface PexelsImage {
  id: number;
  url: string;
  alt: string;
  photographer: string;
}

export const searchImages = async (query: string, perPage: number = 5): Promise<PexelsImage[]> => {
  try {
    console.log(`Searching images for: ${query}`);
    
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`,
      {
        headers: {
          'Authorization': PEXELS_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }

    const data = await response.json();
    
    return data.photos?.map((photo: any) => ({
      id: photo.id,
      url: photo.src.large,
      alt: photo.alt || `Image related to ${query}`,
      photographer: photo.photographer
    })) || [];
  } catch (error) {
    console.error('Error fetching images:', error);
    
    // Return fallback placeholder images
    return [
      {
        id: 1,
        url: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop`,
        alt: `Placeholder image for ${query}`,
        photographer: 'Unsplash'
      }
    ];
  }
};

export const getImageForKeyword = async (keyword: string): Promise<PexelsImage | null> => {
  const images = await searchImages(keyword, 1);
  return images.length > 0 ? images[0] : null;
};

// Enhanced keyword extraction for better image search
export const extractImageKeywords = (text: string): string[] => {
  const keywords: string[] = [];
  
  // Look for explicit image keywords
  const imageMatches = text.match(/image:\s*([^\n]+)/g);
  if (imageMatches) {
    imageMatches.forEach(match => {
      const keyword = match.replace(/image:\s*/, '').trim();
      keywords.push(keyword);
    });
  }
  
  // Extract contextual keywords
  const contextKeywords = [
    'business', 'technology', 'data', 'growth', 'success', 'team',
    'analytics', 'strategy', 'innovation', 'digital', 'marketing',
    'finance', 'education', 'healthcare', 'science', 'research'
  ];
  
  const textLower = text.toLowerCase();
  contextKeywords.forEach(keyword => {
    if (textLower.includes(keyword)) {
      keywords.push(keyword);
    }
  });
  
  return keywords.length > 0 ? keywords : ['business presentation'];
};
