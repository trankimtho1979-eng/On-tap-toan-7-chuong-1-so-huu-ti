import React from 'react';
import { UserStats } from '../types/mathGame';
import { MascotAvatar } from './MascotAvatar';
import { soundEffects } from '../utils/audio';
import { BookOpen, Trophy, Sparkles, Volume2, VolumeX, Flame } from 'lucide-react';

interface HeaderProps {
  stats: UserStats;
  onOpenCheatsheet: () => void;
  onOpenLeaderboard: () => void;
  onOpenCharacterSelect: () => void;
  onGoHome: () => void;
  onStartTimeAttack: () => void;
  currentMode: string;
}

export const Header: React.FC<HeaderProps> = ({
  stats,
  onOpenCheatsheet,
  onOpenLeaderboard,
  onOpenCharacterSelect,
  onGoHome,
  onStartTimeAttack,
  currentMode,
}) => {
  const [muted, setMuted] = React.useState(soundEffects.getMuted());

  const toggleSound = () => {
    const isMuted = soundEffects.toggleMute();
    setMuted(isMuted);
    if (!isMuted) {
      soundEffects.playClick();
    }
  };

  const expPercentage = Math.min(100, Math.round((stats.currentExp / stats.maxExp) * 100));

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-amber-100 shadow-sm px-3 sm:px-6 py-2.5">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo and Home Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onGoHome();
          }}
          className="flex items-center gap-2.5 text-left group transition-transform active:scale-95"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-400 to-amber-300 p-0.5 shadow-md shadow-amber-200 group-hover:rotate-6 transition-transform">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-heading font-black text-amber-500 text-xl">
              ℚ
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-slate-800 text-base sm:text-lg leading-tight group-hover:text-amber-600 transition-colors">
                Toán 7 Kết Nối
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-amber-100 text-amber-700">
                Chương 1
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden xs:block">
              Vương Quốc Số Hữu Tỉ
            </p>
          </div>
        </button>

        {/* Center: Exp & Level Info */}
        <div className="hidden md:flex items-center gap-3 bg-amber-50/70 border border-amber-200/80 rounded-full px-4 py-1.5">
          <button
            onClick={onOpenCharacterSelect}
            className="flex items-center gap-2 hover:opacity-85 transition-opacity"
            title="Đổi nhân vật đồng hành"
          >
            <MascotAvatar characterId={stats.characterId} size="sm" mood="happy" />
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-800 font-heading">
                  Cấp {stats.level}
                </span>
                <span className="text-[10px] px-1.5 py-0.2 bg-orange-100 text-orange-700 rounded font-bold">
                  {stats.name}
                </span>
              </div>
              <div className="w-24 h-1.5 bg-amber-200/70 rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                  style={{ width: `${expPercentage}%` }}
                />
              </div>
            </div>
          </button>
        </div>

        {/* Stats Badges: Stars & Points */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Stars */}
          <div className="flex items-center gap-1 bg-amber-100/80 border border-amber-300/80 px-2.5 py-1 rounded-full text-xs font-bold text-amber-800 shadow-xs">
            <span className="text-sm">⭐</span>
            <span>{stats.stars}</span>
          </div>

          {/* Points */}
          <div className="flex items-center gap-1 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full text-xs font-bold text-indigo-700 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>{stats.totalScore} đ</span>
          </div>

          {/* Quick Action Navigation */}
          <div className="flex items-center gap-1 sm:gap-1.5 ml-1 border-l border-slate-200 pl-2">
            {/* Speed Challenge Button */}
            <button
              onClick={() => {
                soundEffects.playClick();
                onStartTimeAttack();
              }}
              title="Đấu trường tốc độ"
              className={`p-2 rounded-xl transition-all ${
                currentMode === 'time-attack'
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-200 ring-2 ring-rose-300'
                  : 'bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200'
              }`}
            >
              <Flame className="w-4 h-4 animate-pulse" />
            </button>

            {/* Cheatsheet Button */}
            <button
              onClick={() => {
                soundEffects.playClick();
                onOpenCheatsheet();
              }}
              title="Bí kíp kiến thức & công thức"
              className="flex items-center gap-1 px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">Bí kíp</span>
            </button>

            {/* Leaderboard Button */}
            <button
              onClick={() => {
                soundEffects.playClick();
                onOpenLeaderboard();
              }}
              title="Bảng xếp hạng vinh danh"
              className="p-2 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 rounded-xl transition-all shadow-xs"
            >
              <Trophy className="w-4 h-4 text-amber-600" />
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              title={muted ? 'Bật âm thanh' : 'Tắt âm thanh'}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
            >
              {muted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
