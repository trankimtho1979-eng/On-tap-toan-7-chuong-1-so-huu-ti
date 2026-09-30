export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  lessonId: string;
  lessonTitle: string;
  question: string;
  mathFormula?: string;
  options: [string, string, string, string];
  correctIndex: number; // 0, 1, 2, 3
  explanation: string;
  stepByStep?: string[];
  formulaTip: string;
  trapNote?: string;
  difficulty: Difficulty;
  points: number;
}

export interface LevelIsland {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
  badge: string;
  requiredStars: number;
  questionCount: number;
}

export interface CharacterMascot {
  id: string;
  name: string;
  nickname: string;
  bio: string;
  themeColor: string;
  avatarBg: string;
  badge: string;
  quoteCorrect: string[];
  quoteWrong: string[];
  quoteCheer: string[];
}

export interface UserStats {
  name: string;
  characterId: string;
  totalScore: number;
  stars: number;
  coins: number;
  level: number;
  currentExp: number;
  maxExp: number;
  highestCombo: number;
  totalQuestionsAnswered: number;
  correctAnswersCount: number;
  levelStars: Record<string, number>; // levelId -> stars (1-3)
  unlockedCharacters: string[];
  badges: string[];
  lastPlayed?: string;
}

export interface FormulaItem {
  id: string;
  title: string;
  chapterLesson: string;
  formula: string;
  meaning: string;
  example: string;
  rhymeOrTip: string; // Mẹo thơ hoặc quy tắc nhớ nhanh
  category: 'khai_niem' | 'phep_tinh' | 'luy_thua' | 'dau_ngoac_chuyen_ve';
}

export interface LeaderboardUser {
  rank: number;
  id: string;
  name: string;
  characterId: string;
  score: number;
  stars: number;
  badge: string;
  title: string;
  isCurrentUser?: boolean;
}
