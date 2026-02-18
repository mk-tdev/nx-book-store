export type CategoryTheme =
  | "purple"
  | "pink"
  | "orange"
  | "blue"
  | "green"
  | "neutral";

export type PreviewItem = {
  id: string;
  title: string;
  author?: string;
  coverUrl?: string;
  price?: string | number;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  theme: CategoryTheme;
  bookCount: number;
  topBooks?: PreviewItem[];
};

type RankedBook = PreviewItem & {
  bestsellerScore: number;
};

function selectTopBestsellers(
  books: RankedBook[],
  topN: number,
): PreviewItem[] {
  return [...books]
    .sort((a, b) => {
      if (b.bestsellerScore !== a.bestsellerScore) {
        return b.bestsellerScore - a.bestsellerScore;
      }
      return a.id.localeCompare(b.id);
    })
    .slice(0, topN)
    .map(({ id, title, author, coverUrl, price }) => ({
      id,
      title,
      author,
      coverUrl,
      price,
    }));
}

export function getMockCategories(): Category[] {
  const categories: Array<
    Omit<Category, "topBooks"> & {
      books: RankedBook[];
    }
  > = [
    {
      id: "fiction",
      name: "Fiction",
      icon: "📖",
      theme: "purple",
      bookCount: 12,
      books: [
        { id: "fic-001", title: "The Silent Library", bestsellerScore: 98 },
        { id: "fic-002", title: "Midnight Letters", bestsellerScore: 93 },
        { id: "fic-003", title: "Glass Cities", bestsellerScore: 90 },
        { id: "fic-004", title: "The Last Chapter", bestsellerScore: 75 },
      ],
    },
    {
      id: "non-fiction",
      name: "Non‑Fiction",
      icon: "🧠",
      theme: "blue",
      bookCount: 8,
      books: [
        { id: "nf-001", title: "Thinking Clearly", bestsellerScore: 96 },
        { id: "nf-002", title: "Habits That Stick", bestsellerScore: 91 },
        {
          id: "nf-003",
          title: "A Brief Guide to Everything",
          bestsellerScore: 82,
        },
      ],
    },
    {
      id: "fantasy",
      name: "Fantasy",
      icon: "🧙",
      theme: "pink",
      bookCount: 5,
      books: [
        { id: "fan-001", title: "Dragons of Dawn", bestsellerScore: 94 },
        { id: "fan-002", title: "The Mooncaster", bestsellerScore: 88 },
      ],
    },
    {
      id: "romance",
      name: "Romance",
      icon: "💘",
      theme: "orange",
      bookCount: 3,
      books: [
        { id: "rom-001", title: "Summer in Paris", bestsellerScore: 92 },
        { id: "rom-002", title: "The Paper Heart", bestsellerScore: 85 },
        { id: "rom-003", title: "A Gentle Promise", bestsellerScore: 80 },
      ],
    },
    {
      id: "science",
      name: "Science",
      icon: "🔬",
      theme: "green",
      bookCount: 0,
      books: [],
    },
    {
      id: "kids",
      name: "Kids",
      icon: "🧸",
      theme: "neutral",
      bookCount: 7,
      books: [
        { id: "kid-001", title: "The Tiny Astronaut", bestsellerScore: 87 },
        { id: "kid-002", title: "A Cat Named Rocket", bestsellerScore: 86 },
        { id: "kid-003", title: "Bedtime Adventures", bestsellerScore: 84 },
        { id: "kid-004", title: "The Pocket Zoo", bestsellerScore: 76 },
      ],
    },
  ];

  return categories.map(({ books, ...category }) => ({
    ...category,
    topBooks: selectTopBestsellers(books, 3),
  }));
}
