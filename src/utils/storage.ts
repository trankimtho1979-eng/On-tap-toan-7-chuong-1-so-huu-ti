import { UserStats, LeaderboardUser } from '../types/mathGame';

const USER_STATS_KEY = 'toan7_user_stats_v1';
const LEADERBOARD_KEY = 'toan7_leaderboard_v1';

const DEFAULT_USER: UserStats = {
  name: 'Học Sinh Chăm Chỉ',
  characterId: 'mimi',
  totalScore: 0,
  stars: 0,
  coins: 50,
  level: 1,
  currentExp: 0,
  maxExp: 100,
  highestCombo: 0,
  totalQuestionsAnswered: 0,
  correctAnswersCount: 0,
  levelStars: {},
  unlockedCharacters: ['mimi', 'puki'],
  badges: ['Người Mới Nhập Môn'],
  lastPlayed: new Date().toISOString()
};

const DEFAULT_MOCK_LEADERBOARD: Omit<LeaderboardUser, 'rank'>[] = [
  { id: 'bot-1', name: 'Bảo Anh (Trạng Nguyên)', characterId: 'puki', score: 320, stars: 15, badge: '🌟 Quán Quân', title: 'Thần đồng Toán 7' },
  { id: 'bot-2', name: 'Tuệ Mẫn (Siêu Nhẩm)', characterId: 'mimi', score: 280, stars: 13, badge: '⚡ Tia Chớp', title: 'Bậc Thầy Tính Nhanh' },
  { id: 'bot-3', name: 'Minh Khang (Phá Ngoặc)', characterId: 'dino', score: 245, stars: 12, badge: '⚔️ Dũng Sĩ', title: 'Vua Chuyển Vế' },
  { id: 'bot-4', name: 'Hải Đăng (Luỹ Thừa)', characterId: 'kuma', score: 210, stars: 10, badge: '🎓 Bác Học', title: 'Thợ Săn Số Mũ' },
  { id: 'bot-5', name: 'Thảo My (Chăm Chỉ)', characterId: 'mimi', score: 175, stars: 8, badge: '🌱 Mầm Non', title: 'Ngôi Sao Tri Thức' },
  { id: 'bot-6', name: 'Nhật Nam (Khám Phá)', characterId: 'puki', score: 140, stars: 6, badge: '🧭 Nhà Thám Hiểm', title: 'Hiệp Sĩ Phân Số' },
];

export const loadUserStats = (): UserStats => {
  try {
    const raw = localStorage.getItem(USER_STATS_KEY);
    if (!raw) return DEFAULT_USER;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_USER, ...parsed };
  } catch {
    return DEFAULT_USER;
  }
};

export const saveUserStats = (stats: UserStats): void => {
  try {
    localStorage.setItem(USER_STATS_KEY, JSON.stringify(stats));
  } catch {
    // ignore
  }
};

export const addExpAndScore = (
  earnedScore: number,
  earnedStars: number,
  isCorrect: boolean,
  combo: number,
  levelId?: string
): { updatedStats: UserStats; leveledUp: boolean; newBadges: string[] } => {
  const current = loadUserStats();
  let leveledUp = false;
  const newBadges: string[] = [];

  const newScore = current.totalScore + earnedScore;
  const newStars = current.stars + earnedStars;
  const newCoins = current.coins + Math.floor(earnedScore / 2);
  const newTotalQ = current.totalQuestionsAnswered + 1;
  const newCorrectQ = current.correctAnswersCount + (isCorrect ? 1 : 0);
  const newCombo = Math.max(current.highestCombo, combo);

  // Exp calculation
  let newExp = current.currentExp + earnedScore;
  let newLevel = current.level;
  let newMaxExp = current.maxExp;

  while (newExp >= newMaxExp) {
    newExp -= newMaxExp;
    newLevel += 1;
    newMaxExp = Math.floor(newMaxExp * 1.35);
    leveledUp = true;
  }

  // Update level stars if levelId is given
  const levelStars = { ...current.levelStars };
  if (levelId && earnedStars > 0) {
    const existing = levelStars[levelId] || 0;
    if (earnedStars > existing) {
      levelStars[levelId] = earnedStars;
    }
  }

  // Check achievements & badges
  const currentBadges = new Set(current.badges);
  if (newCombo >= 5 && !currentBadges.has('Chuỗi Combo x5')) {
    currentBadges.add('Chuỗi Combo x5');
    newBadges.push('Chuỗi Combo x5 🔥');
  }
  if (newScore >= 100 && !currentBadges.has('Chiến Binh 100 Điểm')) {
    currentBadges.add('Chiến Binh 100 Điểm');
    newBadges.push('Chiến Binh 100 Điểm 🏆');
  }
  if (newLevel >= 3 && !currentBadges.has('Học Giả Cấp 3')) {
    currentBadges.add('Học Giả Cấp 3');
    newBadges.push('Học Giả Cấp 3 🎖️');
  }
  if (newStars >= 10 && !currentBadges.has('Ngân Hà 10 Sao')) {
    currentBadges.add('Ngân Hà 10 Sao');
    newBadges.push('Ngân Hà 10 Sao 🌟');
  }

  const updated: UserStats = {
    ...current,
    totalScore: newScore,
    stars: newStars,
    coins: newCoins,
    level: newLevel,
    currentExp: newExp,
    maxExp: newMaxExp,
    highestCombo: newCombo,
    totalQuestionsAnswered: newTotalQ,
    correctAnswersCount: newCorrectQ,
    levelStars,
    badges: Array.from(currentBadges),
    lastPlayed: new Date().toISOString()
  };

  saveUserStats(updated);
  return { updatedStats: updated, leveledUp, newBadges };
};

export const getLeaderboard = (currentUser: UserStats): LeaderboardUser[] => {
  let list: Omit<LeaderboardUser, 'rank'>[] = [...DEFAULT_MOCK_LEADERBOARD];

  // Try to load any previously stored leaderboard entries
  try {
    const raw = localStorage.getItem(LEADERBOARD_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        list = parsed;
      }
    }
  } catch {
    // fallback
  }

  // Insert or update current user
  const userEntry: Omit<LeaderboardUser, 'rank'> & { isCurrentUser: boolean } = {
    id: 'current-user',
    name: currentUser.name || 'Bạn',
    characterId: currentUser.characterId,
    score: currentUser.totalScore,
    stars: currentUser.stars,
    badge: currentUser.badges[currentUser.badges.length - 1] || 'Học Viên',
    title: `Cấp ${currentUser.level} • ${currentUser.highestCombo} Combo`,
    isCurrentUser: true,
  };

  const filtered = list.filter((item) => item.id !== 'current-user');
  filtered.push(userEntry);

  // Sort by score descending, then by stars
  filtered.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.stars - a.stars;
  });

  return filtered.map((entry, index) => ({
    ...entry,
    rank: index + 1,
  }));
};
