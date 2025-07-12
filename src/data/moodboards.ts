// Types
export interface Moodboard {
  id: number;
  image: string;
  title: string;
  aesthetic: AestheticCategory;
  tags: string[];
  vibeScore: number;
  description?: string;
}

export type AestheticCategory = 
  | 'nature' 
  | 'space' 
  | 'urban' 
  | 'vintage' 
  | 'minimal' 
  | 'artistic' 
  | 'cozy' 
  | 'mystical';

export interface AestheticProfile {
  names: string[];
  descriptions: string[];
  emojis: string[];
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// Constants
export const AESTHETIC_CATEGORIES: AestheticCategory[] = [
  'nature', 'space', 'urban', 'vintage', 'minimal', 'artistic', 'cozy', 'mystical'
];

export const CATEGORY_LABELS: Record<AestheticCategory, string> = {
  nature: 'Nature Aesthetics',
  space: 'Space & Cosmos',
  urban: 'Urban Aesthetics',
  vintage: 'Vintage & Retro',
  minimal: 'Minimal & Clean',
  artistic: 'Artistic & Creative',
  cozy: 'Cozy & Warm',
  mystical: 'Mystical & Ethereal'
};

// Image URLs - Centralized for easier management
const IMAGES = {
  nature: {
    mountain: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
    forest: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80",
    ocean: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80"
  },
  space: {
    nebula: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80",
    stars: "https://images.unsplash.com/photo-1616161560417-66d4db5892ec?auto=format&fit=crop&w=400&q=80",
    aurora: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=400&q=80"
  },
  urban: {
    neon: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80",
    street: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    metro: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80"
  },
  vintage: {
    camera: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=400&q=80",
    vinyl: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=400&q=80",
    car: "https://images.unsplash.com/photo-1520637836862-4d197d17c962?auto=format&fit=crop&w=400&q=80"
  },
  minimal: {
    white: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80",
    geometric: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=400&q=80",
    zen: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=400&q=80"
  },
  artistic: {
    abstract: "https://images.unsplash.com/photo-1594736797933-d0d8023ca667?auto=format&fit=crop&w=400&q=80",
    studio: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80",
    palette: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80"
  },
  cozy: {
    fireplace: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80",
    tea: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=400&q=80",
    reading: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  mystical: {
    crystal: "https://images.unsplash.com/photo-1520637836862-4d197d17c962?auto=format&fit=crop&w=400&q=80",
    fairy: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=400&q=80",
    moonlit: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80"
  }
} as const;

// Helper function to create moodboards
const createMoodboard = (
  id: number, 
  image: string, 
  title: string, 
  aesthetic: AestheticCategory, 
  tags: string[], 
  vibeScore: number,
  description?: string
): Moodboard => ({
  id,
  image,
  title,
  aesthetic,
  tags,
  vibeScore,
  description
});

// Moodboards data
export const moodboards: Moodboard[] = [
  // Nature Aesthetics
  createMoodboard(1, IMAGES.nature.mountain, "Misty Mountain Dreams", "nature", ["nature", "mountains", "mist", "serene"], 5),
  createMoodboard(2, IMAGES.nature.forest, "Enchanted Forest Light", "nature", ["nature", "forest", "magical", "light"], 5),
  createMoodboard(3, IMAGES.nature.ocean, "Ocean Sunset Serenity", "nature", ["nature", "ocean", "sunset", "peaceful"], 4),
  
  // Space & Cosmos
  createMoodboard(4, IMAGES.space.nebula, "Galactic Nebula Dreams", "space", ["space", "galaxy", "cosmic", "infinite"], 5),
  createMoodboard(5, IMAGES.space.stars, "Starry Night Wanderer", "space", ["space", "stars", "night", "dreamy"], 5),
  createMoodboard(6, IMAGES.space.aurora, "Aurora Borealis Magic", "space", ["space", "aurora", "northern", "lights"], 4),
  
  // Urban Aesthetics
  createMoodboard(7, IMAGES.urban.neon, "Neon City Nights", "urban", ["urban", "neon", "city", "night"], 5),
  createMoodboard(8, IMAGES.urban.street, "Street Art Culture", "urban", ["urban", "street", "art", "culture"], 4),
  createMoodboard(9, IMAGES.urban.metro, "Metropolitan Vibes", "urban", ["urban", "metropolitan", "modern", "city"], 4),
  
  // Vintage & Retro
  createMoodboard(10, IMAGES.vintage.camera, "Retro Camera Nostalgia", "vintage", ["vintage", "retro", "camera", "nostalgia"], 5),
  createMoodboard(11, IMAGES.vintage.vinyl, "Vinyl Record Dreams", "vintage", ["vintage", "vinyl", "music", "retro"], 4),
  createMoodboard(12, IMAGES.vintage.car, "Classic Car Elegance", "vintage", ["vintage", "classic", "car", "elegant"], 4),
  
  // Minimal & Clean
  createMoodboard(13, IMAGES.minimal.white, "Pure White Spaces", "minimal", ["minimal", "white", "clean", "simple"], 5),
  createMoodboard(14, IMAGES.minimal.geometric, "Geometric Harmony", "minimal", ["minimal", "geometric", "harmony", "lines"], 4),
  createMoodboard(15, IMAGES.minimal.zen, "Zen Garden Serenity", "minimal", ["minimal", "zen", "garden", "serenity"], 4),
  
  // Artistic & Creative
  createMoodboard(16, IMAGES.artistic.abstract, "Abstract Art Dreams", "artistic", ["artistic", "abstract", "creative", "colorful"], 5),
  createMoodboard(17, IMAGES.artistic.studio, "Studio Light Magic", "artistic", ["artistic", "studio", "light", "creative"], 4),
  createMoodboard(18, IMAGES.artistic.palette, "Color Palette Dreams", "artistic", ["artistic", "color", "palette", "creative"], 4),
  
  // Cozy & Warm
  createMoodboard(19, IMAGES.cozy.fireplace, "Cozy Fireplace Vibes", "cozy", ["cozy", "fireplace", "warm", "comfort"], 5),
  createMoodboard(20, IMAGES.cozy.tea, "Tea Time Serenity", "cozy", ["cozy", "tea", "serenity", "peaceful"], 4),
  createMoodboard(21, IMAGES.cozy.reading, "Reading Nook Dreams", "cozy", ["cozy", "reading", "nook", "comfort"], 4),
  
  // Mystical & Ethereal
  createMoodboard(22, IMAGES.mystical.crystal, "Crystal Cave Wonders", "mystical", ["mystical", "crystal", "cave", "wonder"], 5),
  createMoodboard(23, IMAGES.mystical.fairy, "Fairy Tale Forests", "mystical", ["mystical", "fairy", "tale", "forest"], 4),
  createMoodboard(24, IMAGES.mystical.moonlit, "Moonlit Garden Magic", "mystical", ["mystical", "moonlit", "garden", "magic"], 4)
];

// Aesthetic profiles with enhanced structure
export const aestheticProfiles: Record<AestheticCategory, AestheticProfile> = {
  nature: {
    names: ["Nature Wanderer", "Forest Soul", "Mountain Dreamer", "Ocean Child", "Wild Spirit", "Earth Lover"],
    descriptions: [
      "misty mountain dreams, forest light, nature therapy",
      "enchanted forest vibes, natural beauty, earth connection",
      "ocean sunset serenity, mountain air, wild spirit",
      "nature aesthetics, outdoor adventures, earth magic",
      "forest bathing, mountain climbing, ocean waves",
      "natural beauty, earth connection, outdoor soul"
    ],
    emojis: ["🌲", "🏔️", "🌊", "🌿", "🦋", "🌅"],
    colorScheme: { primary: "green", secondary: "emerald", accent: "teal" }
  },
  space: {
    names: ["Cosmic Wanderer", "Starry Dreamer", "Galaxy Soul", "Space Explorer", "Nebula Child", "Cosmic Mystic"],
    descriptions: [
      "galactic nebula dreams, starry nights, cosmic vibes",
      "aurora borealis magic, space exploration, infinite beauty",
      "cosmic aesthetics, star gazing, universe connection",
      "space dreams, galaxy vibes, cosmic wonder",
      "nebula aesthetics, cosmic beauty, space magic",
      "starry night wanderer, cosmic soul, infinite dreams"
    ],
    emojis: ["🌌", "⭐", "🚀", "🌠", "💫", "🌙"],
    colorScheme: { primary: "purple", secondary: "indigo", accent: "blue" }
  },
  urban: {
    names: ["City Explorer", "Urban Wanderer", "Street Artist", "Metropolitan Soul", "Neon Dreamer", "City Lover"],
    descriptions: [
      "neon city nights, street art culture, urban vibes",
      "metropolitan aesthetics, city exploration, urban magic",
      "street culture, urban art, city dreams",
      "neon dreams, metropolitan vibes, urban soul",
      "city exploration, street art, urban beauty",
      "metropolitan life, urban culture, city magic"
    ],
    emojis: ["🏙️", "🎨", "🚦", "📸", "🎭", "🌃"],
    colorScheme: { primary: "slate", secondary: "gray", accent: "cyan" }
  },
  vintage: {
    names: ["Retro Soul", "Vintage Dreamer", "Classic Lover", "Nostalgic Heart", "Old Soul", "Timeless Beauty"],
    descriptions: [
      "retro camera nostalgia, vinyl record dreams, vintage vibes",
      "classic car elegance, vintage aesthetics, timeless beauty",
      "nostalgic vibes, retro dreams, vintage magic",
      "classic aesthetics, vintage soul, timeless charm",
      "retro culture, vintage beauty, nostalgic dreams",
      "timeless aesthetics, vintage vibes, classic soul"
    ],
    emojis: ["📷", "💿", "🚗", "🎞️", "📻", "🎭"],
    colorScheme: { primary: "amber", secondary: "yellow", accent: "orange" }
  },
  minimal: {
    names: ["Pure Minimalist", "Clean Aesthetic", "Simple Soul", "Zen Master", "Clarity Seeker", "White Space Lover"],
    descriptions: [
      "pure white spaces, geometric harmony, minimal beauty",
      "zen garden serenity, clean aesthetics, simple living",
      "minimalist design, clarity focus, peaceful vibes",
      "simple pleasures, clean lines, zen spaces",
      "minimal lifestyle, geometric beauty, peaceful soul",
      "white space aesthetics, minimal art, serene beauty"
    ],
    emojis: ["⚪", "✨", "🤍", "🕊️", "💫", "☁️"],
    colorScheme: { primary: "gray", secondary: "slate", accent: "zinc" }
  },
  artistic: {
    names: ["Creative Soul", "Art Lover", "Color Dreamer", "Studio Mystic", "Creative Spirit", "Artistic Heart"],
    descriptions: [
      "abstract art dreams, studio light magic, creative vibes",
      "color palette dreams, artistic beauty, creative soul",
      "studio aesthetics, creative magic, artistic dreams",
      "artistic vibes, creative expression, color magic",
      "creative soul, artistic beauty, studio dreams",
      "artistic expression, creative vibes, color soul"
    ],
    emojis: ["🎨", "🎭", "🌈", "🖼️", "🎪", "✨"],
    colorScheme: { primary: "pink", secondary: "rose", accent: "fuchsia" }
  },
  cozy: {
    names: ["Cozy Soul", "Comfort Seeker", "Warm Heart", "Peaceful Dreamer", "Comfort Lover", "Serene Soul"],
    descriptions: [
      "cozy fireplace vibes, tea time serenity, warm comfort",
      "reading nook dreams, cozy aesthetics, peaceful vibes",
      "warm comfort, cozy magic, peaceful soul",
      "comfort seeking, cozy vibes, warm heart",
      "peaceful dreams, cozy aesthetics, serene beauty",
      "warm vibes, cozy soul, comfort magic"
    ],
    emojis: ["🔥", "☕", "📚", "🛋️", "🕯️", "🧸"],
    colorScheme: { primary: "orange", secondary: "amber", accent: "yellow" }
  },
  mystical: {
    names: ["Mystical Soul", "Magic Seeker", "Ethereal Dreamer", "Mystic Heart", "Fairy Tale Lover", "Enchanted Soul"],
    descriptions: [
      "crystal cave wonders, fairy tale forests, mystical vibes",
      "moonlit garden magic, mystical beauty, enchanted dreams",
      "ethereal aesthetics, mystical magic, enchanted soul",
      "fairy tale vibes, mystical dreams, magic beauty",
      "enchanted aesthetics, mystical soul, fairy tale magic",
      "mystical vibes, enchanted dreams, magic soul"
    ],
    emojis: ["🔮", "✨", "🌙", "🦋", "🧚", "💎"],
    colorScheme: { primary: "purple", secondary: "violet", accent: "indigo" }
  }
};

// Utility functions
export const getMoodboardsByCategory = (category: AestheticCategory): Moodboard[] => 
  moodboards.filter(moodboard => moodboard.aesthetic === category);

export const getRandomMoodboard = (): Moodboard => 
  moodboards[Math.floor(Math.random() * moodboards.length)];

export const getMoodboardsByVibeScore = (minScore: number): Moodboard[] => 
  moodboards.filter(moodboard => moodboard.vibeScore >= minScore);

export const searchMoodboards = (query: string): Moodboard[] => 
  moodboards.filter(moodboard => 
    moodboard.title.toLowerCase().includes(query.toLowerCase()) ||
    moodboard.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

export const getCategoryStats = () => {
  const stats = {} as Record<AestheticCategory, { count: number; avgVibeScore: number }>;
  
  AESTHETIC_CATEGORIES.forEach(category => {
    const categoryMoodboards = getMoodboardsByCategory(category);
    stats[category] = {
      count: categoryMoodboards.length,
      avgVibeScore: categoryMoodboards.reduce((sum, m) => sum + m.vibeScore, 0) / categoryMoodboards.length
    };
  });
  
  return stats;
}; 