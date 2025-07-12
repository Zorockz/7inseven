export interface Moodboard {
  id: number;
  image: string;
  title: string;
  aesthetic: string;
  tags: string[];
  vibeScore: number; // 1-5, how intense the aesthetic is
}

export const moodboards: Moodboard[] = [
  // Dreamy Soft Aesthetic
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
    title: "Cotton Candy Skies",
    aesthetic: "dreamy",
    tags: ["soft", "dreamy", "clouds", "pastel"],
    vibeScore: 4
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop",
    title: "Ethereal Forest Light",
    aesthetic: "dreamy",
    tags: ["ethereal", "nature", "light", "mystical"],
    vibeScore: 5
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop",
    title: "Soft Sunset Vibes",
    aesthetic: "dreamy",
    tags: ["sunset", "soft", "warm", "dreamy"],
    vibeScore: 3
  },

  // Dark Academia
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    title: "Gothic Library Aesthetic",
    aesthetic: "dark-academia",
    tags: ["gothic", "books", "academia", "dark"],
    vibeScore: 5
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    title: "Vintage Study Corner",
    aesthetic: "dark-academia",
    tags: ["vintage", "study", "academia", "wood"],
    vibeScore: 4
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c962?w=400&h=600&fit=crop",
    title: "Classical Architecture",
    aesthetic: "dark-academia",
    tags: ["architecture", "classical", "stone", "elegant"],
    vibeScore: 3
  },

  // Cyber/Tech Aesthetic
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    title: "Neon City Nights",
    aesthetic: "cyber",
    tags: ["neon", "city", "cyberpunk", "futuristic"],
    vibeScore: 5
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1616161560417-66d4db5892ec?w=400&h=600&fit=crop",
    title: "Holographic Textures",
    aesthetic: "cyber",
    tags: ["holographic", "futuristic", "tech", "digital"],
    vibeScore: 4
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=600&fit=crop",
    title: "Digital Matrix",
    aesthetic: "cyber",
    tags: ["digital", "matrix", "code", "tech"],
    vibeScore: 5
  },

  // Y2K Nostalgia
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=600&fit=crop",
    title: "Retro Computer Setup",
    aesthetic: "y2k",
    tags: ["retro", "computer", "nostalgia", "2000s"],
    vibeScore: 4
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=600&fit=crop",
    title: "Chunky Tech Aesthetic",
    aesthetic: "y2k",
    tags: ["chunky", "tech", "2000s", "nostalgic"],
    vibeScore: 3
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=600&fit=crop",
    title: "Metallic Futurism",
    aesthetic: "y2k",
    tags: ["metallic", "futurism", "chrome", "shiny"],
    vibeScore: 5
  },

  // Cottagecore
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop",
    title: "Rustic Kitchen Magic",
    aesthetic: "cottagecore",
    tags: ["rustic", "kitchen", "homely", "cozy"],
    vibeScore: 5
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=600&fit=crop",
    title: "Wildflower Meadow",
    aesthetic: "cottagecore",
    tags: ["wildflowers", "meadow", "pastoral", "nature"],
    vibeScore: 3
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=400&h=600&fit=crop",
    title: "Cozy Cabin Life",
    aesthetic: "cottagecore",
    tags: ["cozy", "cabin", "nature", "wood"],
    vibeScore: 4
  },

  // Grunge/Alt
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    title: "Urban Decay Vibes",
    aesthetic: "grunge",
    tags: ["urban", "decay", "edgy", "raw"],
    vibeScore: 5
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=400&h=600&fit=crop",
    title: "Distressed Textures",
    aesthetic: "grunge",
    tags: ["distressed", "texture", "worn", "vintage"],
    vibeScore: 3
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
    title: "Vintage Band Tees",
    aesthetic: "grunge",
    tags: ["vintage", "band", "alternative", "music"],
    vibeScore: 4
  },

  // Clean Minimal
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop",
    title: "Pure White Spaces",
    aesthetic: "minimal",
    tags: ["clean", "white", "space", "simple"],
    vibeScore: 4
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=600&fit=crop",
    title: "Geometric Simplicity",
    aesthetic: "minimal",
    tags: ["geometric", "simple", "lines", "clean"],
    vibeScore: 3
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop",
    title: "Scandinavian Design",
    aesthetic: "minimal",
    tags: ["scandinavian", "design", "hygge", "minimal"],
    vibeScore: 5
  },

  // Vaporwave
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=600&fit=crop",
    title: "Synthwave Sunset",
    aesthetic: "vaporwave",
    tags: ["synthwave", "sunset", "retro", "neon"],
    vibeScore: 5
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=600&fit=crop",
    title: "Neon Grid Dreams",
    aesthetic: "vaporwave",
    tags: ["neon", "grid", "aesthetic", "retro"],
    vibeScore: 4
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=400&h=600&fit=crop",
    title: "Palm Trees & VHS",
    aesthetic: "vaporwave",
    tags: ["palm", "vhs", "retro", "80s"],
    vibeScore: 3
  },

  // Coquette/Soft Girl
  {
    id: 25,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=600&fit=crop",
    title: "Strawberry Picnic Dreams",
    aesthetic: "coquette",
    tags: ["strawberry", "picnic", "soft", "romantic"],
    vibeScore: 4
  },
  {
    id: 26,
    image: "https://images.unsplash.com/photo-1594736797933-d0d8023ca667?w=400&h=600&fit=crop",
    title: "Ballet Core Elegance",
    aesthetic: "coquette",
    tags: ["ballet", "elegant", "feminine", "graceful"],
    vibeScore: 5
  },
  {
    id: 27,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop",
    title: "Vintage Romance",
    aesthetic: "coquette",
    tags: ["vintage", "romance", "delicate", "soft"],
    vibeScore: 3
  },

  // Street/Urban
  {
    id: 28,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop",
    title: "Streetwear Culture",
    aesthetic: "streetwear",
    tags: ["street", "urban", "culture", "fashion"],
    vibeScore: 4
  },
  {
    id: 29,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop",
    title: "Neon Sneaker Collection",
    aesthetic: "streetwear",
    tags: ["sneakers", "neon", "collection", "urban"],
    vibeScore: 3
  },
  {
    id: 30,
    image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=600&fit=crop",
    title: "Graffiti Art Walls",
    aesthetic: "streetwear",
    tags: ["graffiti", "art", "walls", "urban"],
    vibeScore: 5
  },

  // Gothic/Dark
  {
    id: 31,
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c962?w=400&h=600&fit=crop",
    title: "Gothic Cathedral Vibes",
    aesthetic: "gothic",
    tags: ["gothic", "cathedral", "dark", "mysterious"],
    vibeScore: 5
  },
  {
    id: 32,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    title: "Victorian Elegance",
    aesthetic: "gothic",
    tags: ["victorian", "elegant", "ornate", "dark"],
    vibeScore: 4
  },
  {
    id: 33,
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=600&fit=crop",
    title: "Dark Romance Flowers",
    aesthetic: "gothic",
    tags: ["dark", "romance", "flowers", "mysterious"],
    vibeScore: 3
  },

  // Indie Sleaze Revival
  {
    id: 34,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=600&fit=crop",
    title: "Film Camera Nostalgia",
    aesthetic: "indie-sleaze",
    tags: ["film", "camera", "nostalgia", "indie"],
    vibeScore: 4
  },
  {
    id: 35,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=600&fit=crop",
    title: "Underground Club Scene",
    aesthetic: "indie-sleaze",
    tags: ["underground", "club", "scene", "alternative"],
    vibeScore: 5
  },
  {
    id: 36,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
    title: "Vintage Flash Photography",
    aesthetic: "indie-sleaze",
    tags: ["vintage", "flash", "photography", "indie"],
    vibeScore: 3
  }
];

export const aestheticProfiles = {
  dreamy: {
    names: ["Cloud Walker", "Soft Mystic", "Ethereal Soul", "Dream Weaver", "Pastel Princess", "Sky Dancer"],
    descriptions: [
      "soft cloud aesthetics, dreamy pastels, floating vibes",
      "ethereal light, sunset dreams, cotton candy skies",
      "gentle colors, peaceful moments, serene beauty",
      "pastel paradise, soft textures, heavenly vibes",
      "dreamy landscapes, soft focus life, cloud nine",
      "whisper soft aesthetics, gentle soul, sky gazing"
    ],
    emojis: ["☁️", "🌸", "✨", "🦋", "💭", "🌅"]
  },
  "dark-academia": {
    names: ["Scholar Mystic", "Gothic Intellectual", "Library Dweller", "Vintage Academic", "Book Collector", "Classical Soul"],
    descriptions: [
      "gothic libraries, vintage books, scholarly vibes",
      "dark wood aesthetics, classical architecture, academia",
      "old manuscripts, candlelit studies, intellectual darkness",
      "vintage university vibes, scholarly pursuits, old souls",
      "gothic romance, academic mysteries, timeless wisdom",
      "classical education, dark aesthetics, scholarly passion"
    ],
    emojis: ["📚", "🕯️", "🦉", "⚰️", "🖤", "🏛️"]
  },
  cyber: {
    names: ["Neon Phantom", "Cyber Punk", "Digital Ghost", "Matrix Walker", "Tech Mystic", "Hologram Soul"],
    descriptions: [
      "neon city nights, cyberpunk vibes, digital dreams",
      "holographic textures, futuristic aesthetics, tech noir",
      "digital matrix life, cyber reality, neon glow",
      "futuristic punk, tech rebellion, digital underground",
      "cyber aesthetics, neon addiction, digital soul",
      "matrix vibes, holographic dreams, cyber reality"
    ],
    emojis: ["🤖", "💾", "⚡", "🌌", "💿", "🔮"]
  },
  y2k: {
    names: ["Y2K Princess", "Millennium Bug", "Retro Futurist", "Tech Nostalgic", "2000s Kid", "Digital Native"],
    descriptions: [
      "chunky tech vibes, early 2000s nostalgia, retro future",
      "metallic textures, Y2K aesthetics, millennium dreams",
      "retro computer vibes, 2000s tech, nostalgic future",
      "early internet culture, Y2K fashion, digital nostalgia",
      "millennium aesthetics, retro tech, 2000s dreams",
      "cyber Y2K vibes, metallic future, nostalgic tech"
    ],
    emojis: ["💿", "📱", "✨", "🌈", "💎", "🕹️"]
  },
  cottagecore: {
    names: ["Cottage Witch", "Garden Fairy", "Rustic Soul", "Country Mystic", "Wildflower Child", "Pastoral Dreamer"],
    descriptions: [
      "rustic kitchen magic, homemade bread, cottage vibes",
      "wildflower meadows, pastoral dreams, countryside",
      "cozy cabin life, nature therapy, rural aesthetics",
      "cottage garden vibes, rustic charm, simple living",
      "country lifestyle, handmade crafts, pastoral beauty",
      "rural romance, cottage dreams, simple pleasures"
    ],
    emojis: ["🌻", "🍄", "🏡", "🌾", "🧺", "🐝"]
  },
  grunge: {
    names: ["Grunge Goddess", "Alternative Soul", "Urban Rebel", "Distressed Heart", "90s Kid", "Anti-Aesthetic"],
    descriptions: [
      "urban decay vibes, distressed textures, raw aesthetics",
      "alternative culture, grunge music, rebellious spirit",
      "worn textures, vintage band tees, anti-establishment",
      "90s grunge revival, alternative fashion, rebel soul",
      "distressed aesthetics, urban exploration, raw beauty",
      "grunge lifestyle, alternative vibes, rebellious heart"
    ],
    emojis: ["🎸", "⛓️", "💀", "🖤", "📻", "🏙️"]
  },
  minimal: {
    names: ["Pure Minimalist", "Clean Aesthetic", "Simple Soul", "White Space Lover", "Zen Master", "Clarity Seeker"],
    descriptions: [
      "clean lines, minimal decor, simple beauty",
      "white spaces, pure aesthetics, organized living",
      "minimalist design, clutter-free zones, zen spaces",
      "simple pleasures, clean aesthetics, peaceful vibes",
      "neutral tones, minimal lifestyle, clarity focus",
      "serene spaces, minimal art, peaceful simplicity"
    ],
    emojis: ["⚪", "✨", "🤍", "🕊️", "💫", "☁️"]
  },
  vaporwave: {
    names: ["Vaporwave Prince", "Synthwave Soul", "Retro Aesthetic", "Neon Dreamer", "80s Mystic", "Palm Tree Punk"],
    descriptions: [
      "synthwave sunsets, retro vibes, neon aesthetics",
      "vaporwave dreams, 80s nostalgia, palm tree vibes",
      "neon grid patterns, retro futurism, aesthetic waves",
      "80s revival, synthwave music, retro dreaming",
      "vaporwave culture, aesthetic vibes, retro paradise",
      "synthwave nights, neon dreams, 80s forever"
    ],
    emojis: ["🌴", "🌅", "💜", "📼", "🌊", "🎵"]
  },
  coquette: {
    names: ["Coquette Princess", "Soft Girl", "Ballet Dancer", "Romantic Soul", "Feminine Mystic", "Delicate Heart"],
    descriptions: [
      "soft girl aesthetics, coquette vibes, feminine energy",
      "ballet core elegance, delicate beauty, romantic soul",
      "strawberry dreams, picnic vibes, soft romance",
      "vintage femininity, delicate aesthetics, romantic heart",
      "soft coquette vibes, feminine mystique, gentle soul",
      "romantic aesthetics, delicate dreams, feminine power"
    ],
    emojis: ["🎀", "🌸", "💕", "🍓", "🩰", "💐"]
  },
  streetwear: {
    names: ["Street King", "Urban Explorer", "Sneaker Head", "Culture Curator", "City Wanderer", "Street Artist"],
    descriptions: [
      "streetwear culture, urban exploration, city vibes",
      "sneaker collections, street fashion, urban art",
      "graffiti appreciation, street photography, city life",
      "urban culture, street style, metropolitan vibes",
      "city exploration, street art, urban adventures",
      "street fashion, urban lifestyle, city soul"
    ],
    emojis: ["👟", "🏙️", "🎨", "🛹", "🎧", "📸"]
  },
  gothic: {
    names: ["Gothic Prince", "Dark Romantic", "Victorian Soul", "Shadow Walker", "Dark Mystic", "Gothic Rose"],
    descriptions: [
      "gothic architecture, dark romance, Victorian vibes",
      "cathedral aesthetics, gothic beauty, dark elegance",
      "Victorian gothic, ornate details, dark romance",
      "gothic lifestyle, dark aesthetics, romantic darkness",
      "cathedral dreams, gothic art, dark beauty",
      "gothic romance, Victorian elegance, shadow dancing"
    ],
    emojis: ["🖤", "🌹", "⚰️", "🦇", "🕯️", "🏰"]
  },
  "indie-sleaze": {
    names: ["Indie Sleaze Icon", "Film Camera Kid", "Underground Scene", "Flash Photo Lover", "Indie Rebel", "Scene Veteran"],
    descriptions: [
      "indie sleaze revival, film camera nostalgia, underground",
      "flash photography, indie music, alternative scene",
      "underground clubs, indie culture, rebellious aesthetics",
      "film grain vibes, indie sleaze, alternative lifestyle",
      "underground music, indie fashion, scene culture",
      "indie rebellion, alternative aesthetics, underground vibes"
    ],
    emojis: ["📷", "🎭", "💫", "🎪", "📻", "🌙"]
  }
}; 