// src/data/movies.js
// Public Domain Movies from Internet Archive
// All movies are legally free to stream

export const movies = [
  // === NOLLYWOOD / AFRICAN CINEMA (Classic/Documentary) ===
  {
    id: 1,
    title: "The Original Soul Train Express",
    year: 1925,
    genre: ["Documentary", "Music"],
    category: "African Cinema",
    rating: 8.5,
    duration: "15 min",
    description: "A celebration of Black American female artists featuring singer Ethel Waters and film director Eloyce Gist. A musical journey through early 20th century Black culture.",
    poster: "https://archive.org/services/get-item-image.php?identifier=the-original-soul-train-express&mediatype=movies",
    videoUrl: "https://archive.org/download/the-original-soul-train-express/format=h.264",
    director: "Eloyce Gist",
    cast: ["Ethel Waters"],
    isPublicDomain: true
  },
  {
    id: 2,
    title: "Echoes of Time",
    year: 2026,
    genre: ["Documentary", "History"],
    category: "Documentary",
    rating: 8.2,
    duration: "12 min",
    description: "A reminder that even during times of adversity, we can look back and remember similar events that have brought us to where we are today. People shape the world with their ideas.",
    poster: "https://archive.org/services/get-item-image.php?identifier=echoes-of-time-khong-l&mediatype=movies",
    videoUrl: "https://archive.org/download/echoes-of-time-khong-l/format=MPEG4",
    director: "Khong L",
    cast: [],
    isPublicDomain: true
  },

  // === CLASSIC HORROR ===
  {
    id: 3,
    title: "Night of the Living Dead",
    year: 1968,
    genre: ["Horror", "Thriller"],
    category: "Horror",
    rating: 9.0,
    duration: "1h 36m",
    description: "A group of people hide from bloodthirsty zombies in a farmhouse. George A. Romero's groundbreaking horror classic that defined the zombie genre.",
    poster: "https://archive.org/services/get-item-image.php?identifier=night_of_the_living_dead&mediatype=movies",
    videoUrl: "https://archive.org/download/night_of_the_living_dead/night_of_the_living_dead.mp4",
    director: "George A. Romero",
    cast: ["Duane Jones", "Judith O'Dea"],
    isPublicDomain: true
  },
  {
    id: 4,
    title: "White Zombie",
    year: 1932,
    genre: ["Horror", "Classic"],
    category: "Horror",
    rating: 7.8,
    duration: "1h 7m",
    description: "A young man turns to a witch doctor to lure the woman he loves away from her fiancé, but instead turns her into a zombie slave. Bela Lugosi stars.",
    poster: "https://archive.org/services/get-item-image.php?identifier=WhiteZombie&mediatype=movies",
    videoUrl: "https://archive.org/download/WhiteZombie/WhiteZombie.mp4",
    director: "Victor Halperin",
    cast: ["Bela Lugosi", "Madge Bellamy"],
    isPublicDomain: true
  },
  {
    id: 5,
    title: "Häxan: Witchcraft Through the Ages",
    year: 1922,
    genre: ["Horror", "Documentary"],
    category: "Horror",
    rating: 8.4,
    duration: "1h 45m",
    description: "A historical horror film about witchcraft, demonology, and superstition in the Middle Ages. A silent film masterpiece with stunning visual effects.",
    poster: "https://archive.org/services/get-item-image.php?identifier=haxan-1922_202312&mediatype=movies",
    videoUrl: "https://archive.org/download/haxan-1922_202312/haxan-1922_202312.mp4",
    director: "Benjamin Christensen",
    cast: ["Benjamin Christensen"],
    isPublicDomain: true
  },

  // === CLASSIC FILM NOIR / THRILLER ===
  {
    id: 6,
    title: "D.O.A.",
    year: 1949,
    genre: ["Film Noir", "Thriller"],
    category: "Thriller",
    rating: 8.1,
    duration: "1h 23m",
    description: "A man who has been poisoned and has only days to live tries to find out who poisoned him and why. One of the greatest film noir classics.",
    poster: "https://archive.org/services/get-item-image.php?identifier=doa_1949&mediatype=movies",
    videoUrl: "https://archive.org/download/doa_1949/doa_1949.mp4",
    director: "Rudolph Maté",
    cast: ["Edmond O'Brien", "Pamela Britton"],
    isPublicDomain: true
  },
  {
    id: 7,
    title: "The Last Man on Earth",
    year: 1964,
    genre: ["Sci-Fi", "Horror"],
    category: "Sci-Fi",
    rating: 8.0,
    duration: "1h 26m",
    description: "When a disease turns all of humanity into the living dead, the last man on earth becomes a vampire hunter. Vincent Price stars in this apocalyptic classic.",
    poster: "https://archive.org/services/get-item-image.php?identifier=LastManOnEarth&mediatype=movies",
    videoUrl: "https://archive.org/download/LastManOnEarth/LastManOnEarth.mp4",
    director: "Ubaldo Ragona",
    cast: ["Vincent Price", "Franca Bettoia"],
    isPublicDomain: true
  },
  {
    id: 8,
    title: "The Cabinet of Dr. Caligari",
    year: 1920,
    genre: ["Horror", "Silent"],
    category: "Classic",
    rating: 9.2,
    duration: "1h 17m",
    description: "A hypnotist uses a somnambulist to commit murders. The quintessential German Expressionist film with iconic twisted set designs.",
    poster: "https://archive.org/services/get-item-image.php?identifier=TheCabinetOfDr.Caligari1919&mediatype=movies",
    videoUrl: "https://archive.org/download/TheCabinetOfDr.Caligari1919/TheCabinetOfDr.Caligari1919.mp4",
    director: "Robert Wiene",
    cast: ["Werner Krauss", "Conrad Veidt"],
    isPublicDomain: true
  },

  // === ANIMATION ===
  {
    id: 9,
    title: "Jack and the Beanstalk",
    year: 1933,
    genre: ["Animation", "Fantasy"],
    category: "Animation",
    rating: 7.5,
    duration: "8 min",
    description: "Ub Iwerks' classic ComiColor cartoon retelling of the fairy tale with stunning early animation techniques and vibrant colors.",
    poster: "https://archive.org/services/get-item-image.php?identifier=pdcartooncollection&mediatype=movies",
    videoUrl: "https://archive.org/download/pdcartooncollection/UB%20Iwerks%20Jack%20and%20the%20Beanstalk%201933.mp4",
    director: "Ub Iwerks",
    cast: [],
    isPublicDomain: true
  },
  {
    id: 10,
    title: "The Headless Horseman",
    year: 1934,
    genre: ["Animation", "Horror"],
    category: "Animation",
    rating: 7.3,
    duration: "10 min",
    description: "A ComiColor cartoon adaptation of Washington Irving's Legend of Sleepy Hollow with Ichabod Crane and the terrifying Headless Horseman.",
    poster: "https://archive.org/services/get-item-image.php?identifier=pdcartooncollection&mediatype=movies",
    videoUrl: "https://archive.org/download/pdcartooncollection/The%20Headless%20Horseman%20%281934%29.mp4",
    director: "Ub Iwerks",
    cast: [],
    isPublicDomain: true
  },
  {
    id: 11,
    title: "Balloon Land",
    year: 1935,
    genre: ["Animation", "Fantasy"],
    category: "Animation",
    rating: 7.6,
    duration: "8 min",
    description: "In a world made entirely of balloons, the inhabitants must defend themselves from the evil Pincushion Man. A whimsical Ub Iwerks classic.",
    poster: "https://archive.org/services/get-item-image.php?identifier=pdcartooncollection&mediatype=movies",
    videoUrl: "https://archive.org/download/pdcartooncollection/Ub%20Iwerks%20cartoon%20Comicolor%20Balloon%20Land%201935%20old%20free%20cartoons%20public%20domain.mp4",
    director: "Ub Iwerks",
    cast: [],
    isPublicDomain: true
  },
  {
    id: 12,
    title: "Somewhere in Dreamland",
    year: 1936,
    genre: ["Animation", "Musical"],
    category: "Animation",
    rating: 8.0,
    duration: "9 min",
    description: "Two poor children dream of a magical land filled with food and toys. A beautifully animated and heartwarming Fleischer Studios color classic.",
    poster: "https://archive.org/services/get-item-image.php?identifier=pdcartooncollection&mediatype=movies",
    videoUrl: "https://archive.org/download/pdcartooncollection/Fleischer%20Color%20Classic%20Somewhere%20in%20Dreamland%201936%29%20%28old%20cartoon%20vintage%20public%20domain%29.mp4",
    director: "Dave Fleischer",
    cast: [],
    isPublicDomain: true
  },

  // === DOCUMENTARIES ===
  {
    id: 13,
    title: "The Triumph of the Human Spirit",
    year: 2026,
    genre: ["Documentary", "History"],
    category: "Documentary",
    rating: 8.3,
    duration: "10 min",
    description: "A remix of public domain footage exploring human ingenuity and perseverance through history, featuring early animation and industrial footage.",
    poster: "https://archive.org/services/get-item-image.php?identifier=the-triumph-of-the-human-spirit_202601&mediatype=movies",
    videoUrl: "https://archive.org/download/the-triumph-of-the-human-spirit_202601/the-triumph-of-the-human-spirit_202601.mp4",
    director: "Unknown",
    cast: [],
    isPublicDomain: true
  },
  {
    id: 14,
    title: "Dancing In Nature Wondering In Space",
    year: 2026,
    genre: ["Documentary", "Animation"],
    category: "Documentary",
    rating: 7.9,
    duration: "8 min",
    description: "From cartoon, documentary, and cinematic footage from the early 1930s, this film transports audiences through scenes of nature on planet Earth and beyond.",
    poster: "https://archive.org/services/get-item-image.php?identifier=dancing-in-nature-wondering-in-space-2026&mediatype=movies",
    videoUrl: "https://archive.org/download/dancing-in-nature-wondering-in-space-2026/dancing-in-nature-wondering-in-space-2026.mp4",
    director: "Unknown",
    cast: [],
    isPublicDomain: true
  },
  {
    id: 15,
    title: "JGutierrez Montage Cine 56",
    year: 2026,
    genre: ["Documentary", "History"],
    category: "Documentary",
    rating: 7.7,
    duration: "6 min",
    description: "A powerful montage of American Indian footage of colonization and the modern concept of the Apache helicopter - the modern war machine of colonization.",
    poster: "https://archive.org/services/get-item-image.php?identifier=jgutierrez-montage-cine-56&mediatype=movies",
    videoUrl: "https://archive.org/download/jgutierrez-montage-cine-56/jgutierrez-montage-cine-56.mp4",
    director: "JGutierrez",
    cast: [],
    isPublicDomain: true
  },

  // === CLASSIC SILENT FILMS ===
  {
    id: 16,
    title: "Nosferatu",
    year: 1922,
    genre: ["Horror", "Silent"],
    category: "Classic",
    rating: 9.3,
    duration: "1h 34m",
    description: "The original vampire film. Count Orlok's haunting silhouette and Max Schreck's terrifying performance make this the greatest horror film of the silent era.",
    poster: "https://archive.org/services/get-item-image.php?identifier=nosferatu1922&mediatype=movies",
    videoUrl: "https://archive.org/download/nosferatu1922/nosferatu1922.mp4",
    director: "F.W. Murnau",
    cast: ["Max Schreck", "Greta Schröder"],
    isPublicDomain: true
  },
  {
    id: 17,
    title: "The Phantom of the Opera",
    year: 1925,
    genre: ["Horror", "Drama"],
    category: "Classic",
    rating: 8.7,
    duration: "1h 47m",
    description: "A disfigured musical genius haunts the Paris Opera House and falls in love with a beautiful soprano. Lon Chaney's iconic unmasking scene remains legendary.",
    poster: "https://archive.org/services/get-item-image.php?identifier=phantom_of_the_opera&mediatype=movies",
    videoUrl: "https://archive.org/download/phantom_of_the_opera/phantom_of_the_opera.mp4",
    director: "Rupert Julian",
    cast: ["Lon Chaney", "Mary Philbin"],
    isPublicDomain: true
  },

  // === MORE ANIMATION ===
  {
    id: 18,
    title: "The Little Red Hen",
    year: 1934,
    genre: ["Animation", "Comedy"],
    category: "Animation",
    rating: 7.4,
    duration: "8 min",
    description: "The classic fairy tale about a hen who finds a grain of wheat and asks her farmyard friends to help plant it. A colorful ComiColor cartoon.",
    poster: "https://archive.org/services/get-item-image.php?identifier=pdcartooncollection&mediatype=movies",
    videoUrl: "https://archive.org/download/pdcartooncollection/Ub%20Iwerks%20The%20Little%20Red%20Hen%201934.mp4",
    director: "Ub Iwerks",
    cast: [],
    isPublicDomain: true
  },
  {
    id: 19,
    title: "Ali Baba",
    year: 1936,
    genre: ["Animation", "Adventure"],
    category: "Animation",
    rating: 7.5,
    duration: "9 min",
    description: "The classic Arabian Nights tale of Ali Baba and the Forty Thieves, brought to life with beautiful early color animation by Ub Iwerks.",
    poster: "https://archive.org/services/get-item-image.php?identifier=pdcartooncollection&mediatype=movies",
    videoUrl: "https://archive.org/download/pdcartooncollection/Ub%20Iwerks%20cartoon%20Comicolor%20Ali%20Baba%201936%29%20%28old%20free%20cartoons%20public%20domain%29.mp4",
    director: "Ub Iwerks",
    cast: [],
    isPublicDomain: true
  },

  // === BONUS: CLASSIC COMEDY ===
  {
    id: 20,
    title: "The General",
    year: 1926,
    genre: ["Comedy", "Action"],
    category: "Classic",
    rating: 9.1,
    duration: "1h 19m",
    description: "Buster Keaton's masterpiece about a Confederate train engineer who pursues Union spies who stole his locomotive. Considered one of the greatest films ever made.",
    poster: "https://archive.org/services/get-item-image.php?identifier=the-general-1926&mediatype=movies",
    videoUrl: "https://archive.org/download/the-general-1926/the-general-1926.mp4",
    director: "Buster Keaton",
    cast: ["Buster Keaton", "Marion Mack"],
    isPublicDomain: true
  }
];

// Categories for filtering
export const categories = [
  "All",
  "African Cinema",
  "Animation",
  "Classic",
  "Documentary",
  "Horror",
  "Sci-Fi",
  "Thriller"
];

// Get featured movies (top rated)
export const getFeaturedMovies = () => {
  return movies
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
};

// Get movies by category
export const getMoviesByCategory = (category) => {
  if (category === "All") return movies;
  return movies.filter(movie => movie.category === category);
};

// Get movie by ID
export const getMovieById = (id) => {
  return movies.find(movie => movie.id === id);
};

// Get trending movies (random selection for demo)
export const getTrendingMovies = () => {
  return [...movies]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);
};

// Get top 10
export const getTop10 = () => {
  return movies
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);
};

export default movies;
