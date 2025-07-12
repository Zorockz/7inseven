// FakeFlex data - outrageous captions with single placeholder image
const flexImages = [
  "/flex-factory-assets/fake-flex-1.jpg", // Single placeholder image
];

export const flexCaptions = [
  "Just touched down in a time zone money can't reach ✈️💎",
  "My emotional support yacht pulled up late again 🛥️😤",
  "Sorry I can't relate, I pay my therapist in cryptocurrency 💰🧠",
  "Just bought the moon as a backup planet 🌙🚀",
  "My personal chef only cooks with ingredients from other dimensions 👨‍🍳✨",
  "Had to fire my money manager, he wasn't manifesting hard enough 💸🔮",
  "My diamond-encrusted pet rock just got accepted to Harvard 💎🪨",
  "Casually dropped $50k on a holographic sandwich, no big deal 🥪👻",
  "My walk-in closet has its own postal code and tax bracket 👗📮",
  "Just hired a team of unicorns to manage my crypto portfolio 🦄💻",
  "My tears are literally liquid gold, checked with a specialist 😭🏆",
  "Bought Twitter just to reply to my own tweets with more money 🐦💰",
  "My shadow costs more to maintain than most people's cars 👤🚗",
  "Just discovered my DNA is 30% designer labels 🧬👑",
  "Had to upgrade to first class on a private jet, coach was too mainstream ✈️👑",
  "My phone case is made from compressed dollar bills and dreams 📱💫",
  "Accidentally bought a small country while online shopping again 🌍🛒",
  "My morning coffee is brewed with water from melted polar ice caps ☕❄️",
  "Just hired Elon Musk as my Uber driver for Tuesday vibes 🚗🚀",
  "My accountant quit because my wealth broke his calculator 🧮💥",
  "My personal trainer is a retired Olympic gold medalist who only speaks in motivational quotes 🏅💪",
  "Just discovered my WiFi password is worth more than most people's life savings 📶💰",
  "My alarm clock is powered by the sound of money being printed ⏰💵",
  "Had to fire my gardener, he wasn't watering my money tree properly 🌳💸",
  "My selfie stick is made from solid gold and diamond-encrusted 💎📱",
  "Just bought a small island just to have a private beach for my private jet 🏝️✈️",
  "My phone's autocorrect only suggests luxury brand names 📱👜",
  "Had to upgrade my wallet because it couldn't handle the weight of my success 💼💪",
  "My morning routine includes bathing in liquid gold and drinking champagne from a diamond cup 🛁🥂",
  "Just hired a team of professional flexers to manage my social media presence 📱💎",
  "My gym membership costs more than most people's rent 💪🏠",
  "Accidentally bought a sports team while trying to order takeout 🏈🍕",
  "My personal stylist only dresses me in clothes that cost more than a car 👗🚗",
  "Just discovered my Spotify playlist is worth more than most people's retirement fund 🎵💰",
  "My meditation app only plays sounds of money being counted 🧘‍♀️💵",
  "Had to fire my life coach because he wasn't ambitious enough for my lifestyle 🎯💸"
];

export function getRandomFlex() {
  const randomImage = flexImages[Math.floor(Math.random() * flexImages.length)];
  const randomCaption = flexCaptions[Math.floor(Math.random() * flexCaptions.length)];
  
  return {
    image: randomImage,
    caption: randomCaption
  };
} 