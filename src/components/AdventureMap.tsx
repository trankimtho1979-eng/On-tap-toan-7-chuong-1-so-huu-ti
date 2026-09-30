import React from 'react';
import { LEVEL_ISLANDS } from '../data/chapter1Questions';
import { LevelIsland, UserStats } from '../types/mathGame';
import { MascotAvatar } from './MascotAvatar';
import { soundEffects } from '../utils/audio';
import { Star, Play, Sparkles, BookOpen, Trophy, Flame } from 'lucide-react';

interface AdventureMapProps {
  stats: UserStats;
  onSelectLevel: (level: LevelIsland) => void;
  onOpenCheatsheet: () => void;
  onOpenLeaderboard: () => void;
  onStartTimeAttack: () => void;
  onOpenCharacterSelect: () => void;
}

export const AdventureMap: React.FC<AdventureMapProps> = ({
  stats,
  onSelectLevel,
  onOpenCheatsheet,
  onOpenLeaderboard,
  onStartTimeAttack,
  onOpenCharacterSelect,
}) => {
  return (
    <div className="max-w-5xl mx-auto py-5 px-3 sm:px-6 space-y-6">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-3xl p-5 sm:p-7 text-white shadow-xl border-4 border-amber-300">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold uppercase tracking-wider text-amber-100">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>Toán 7 • Kết Nối Tri Thức Với Cuộc Sống</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black font-heading tracking-wide drop-shadow-sm">
              Vương Quốc Số Hữu Tỉ
            </h1>
            <p className="text-amber-50 text-xs sm:text-sm font-medium leading-relaxed">
              Chào mừng bạn đến với chuyến phiêu lưu toán học! Vượt qua các vùng đất thử thách, mở khóa bí kíp công thức và leo lên đỉnh Bảng Xếp Hạng cùng các bạn nhỏ dễ thương!
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onOpenCheatsheet();
                }}
                className="px-4 py-2 bg-white text-orange-600 hover:bg-amber-50 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-orange-500" />
                <span>Mở Bí Kíp Kiến Thức</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  onStartTimeAttack();
                }}
                className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-1.5 border border-rose-400"
              >
                <Flame className="w-4 h-4" />
                <span>Thử Thách Sinh Tồn 90s</span>
              </button>
            </div>
          </div>

          {/* Cheerful Mascot with Click to Change */}
          <div
            onClick={onOpenCharacterSelect}
            className="flex flex-col items-center bg-white/15 backdrop-blur-xs p-4 rounded-3xl border-2 border-white/30 cursor-pointer hover:bg-white/25 transition-all group shrink-0"
            title="Bấm để đổi bạn đồng hành"
          >
            <MascotAvatar characterId={stats.characterId} size="lg" mood="happy" />
            <span className="text-xs font-bold mt-2 text-white group-hover:scale-105 transition-transform flex items-center gap-1">
              <span>Đổi bạn đồng hành</span>
              <span className="text-xs">🐾</span>
            </span>
          </div>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <div className="absolute left-1/3 -top-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-lg pointer-events-none" />
      </div>

      {/* Main Levels Roadmap */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-heading font-black text-xl sm:text-2xl text-slate-800">
              Bản Đồ 5 Vùng Đất Thử Thách
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Bạn có thể tự do chọn bất kỳ ải nào bên dưới để ôn tập ngay lập tức!
            </p>
          </div>

          <div className="flex items-center gap-1 bg-amber-100/70 border border-amber-300 text-amber-800 px-3 py-1.5 rounded-full text-xs font-bold">
            <span>Tổng sao:</span>
            <span className="text-amber-500 text-sm">⭐</span>
            <span className="text-sm font-black">{stats.stars}</span>
          </div>
        </div>

        {/* Island Cards - All Unlocked */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LEVEL_ISLANDS.map((island, index) => {
            const starsEarned = stats.levelStars[island.id] || 0;

            return (
              <div
                key={island.id}
                className="relative rounded-3xl border-3 transition-all p-5 flex flex-col justify-between overflow-hidden bg-white border-amber-200 hover:border-amber-400 hover:shadow-xl shadow-md group cursor-pointer"
                onClick={() => {
                  soundEffects.playClick();
                  onSelectLevel(island);
                }}
              >
                {/* Island Header */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-3xl shadow-xs group-hover:scale-110 transition-transform">
                        {island.icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md">
                          Ải {index + 1} • Tự do chọn
                        </span>
                        <h3 className="font-heading font-bold text-slate-800 text-base sm:text-lg leading-tight mt-0.5">
                          {island.title}
                        </h3>
                      </div>
                    </div>

                    {/* Stars achieved */}
                    <div className="flex items-center gap-0.5 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      {[1, 2, 3].map((s) => (
                        <Star
                          key={s}
                          className={`w-4 h-4 ${
                            s <= starsEarned
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-slate-200 text-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs font-bold text-slate-600 mb-1">
                    {island.subTitle}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4">
                    {island.description}
                  </p>
                </div>

                {/* Island Footer & Start Button */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-semibold">
                    {island.questionCount} câu hỏi trắc nghiệm
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      soundEffects.playClick();
                      onSelectLevel(island);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{starsEarned > 0 ? 'Chơi Lại' : 'Bắt Đầu'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
