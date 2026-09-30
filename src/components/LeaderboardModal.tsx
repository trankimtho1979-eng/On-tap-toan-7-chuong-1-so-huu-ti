import React, { useState } from 'react';
import { UserStats, LeaderboardUser } from '../types/mathGame';
import { getLeaderboard, saveUserStats } from '../utils/storage';
import { MascotAvatar } from './MascotAvatar';
import { soundEffects } from '../utils/audio';
import { X, Trophy, Award, Edit2, Check, Star } from 'lucide-react';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  stats,
  onUpdateStats,
}) => {
  const [activeTab, setActiveTab] = useState<'ranking' | 'badges'>('ranking');
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(stats.name);

  if (!isOpen) return null;

  const leaderboard: LeaderboardUser[] = getLeaderboard(stats);

  const handleSaveName = () => {
    if (newName.trim()) {
      soundEffects.playClick();
      const updated = { ...stats, name: newName.trim() };
      saveUserStats(updated);
      onUpdateStats(updated);
      setIsEditingName(false);
    }
  };

  const ALL_BADGES = [
    { title: 'Người Mới Nhập Môn', icon: '🌱', desc: 'Bắt đầu chuyến hành trình chinh phục Toán 7' },
    { title: 'Chiến Binh 100 Điểm', icon: '🏆', desc: 'Đạt mốc 100 điểm toán học' },
    { title: 'Chuỗi Combo x5', icon: '🔥', desc: 'Trả lời đúng liên tiếp 5 câu hỏi' },
    { title: 'Học Giả Cấp 3', icon: '🎖️', desc: 'Tích lũy kinh nghiệm lên Cấp độ 3' },
    { title: 'Ngân Hà 10 Sao', icon: '🌟', desc: 'Thu thập từ 10 ngôi sao trở lên qua các ải' },
    { title: 'Bậc Thầy Luỹ Thừa', icon: '⚡', desc: 'Hoàn thành Đỉnh Núi Luỹ Thừa với 3 sao' },
    { title: 'Dũng Sĩ Chuyển Vế', icon: '⚔️', desc: 'Hoàn thành xuất sắc Lâu Đài Dấu Ngoặc' },
    { title: 'Quán Quân Toàn Năng', icon: '👑', desc: 'Chinh phục Đại Đấu Trường Tổng Ôn Chương 1' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border-4 border-amber-300 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 p-4 sm:p-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl shadow-inner">
              🏆
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading drop-shadow-xs">
                Bảng Vinh Danh Học Sinh Xuất Sắc
              </h2>
              <p className="text-amber-100 text-xs sm:text-sm font-medium">
                Cạnh tranh top 1 vương quốc Toán 7 Kết nối tri thức!
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Card Bar */}
        <div className="bg-amber-50 border-b border-amber-200 p-3 sm:px-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <MascotAvatar characterId={stats.characterId} size="sm" mood="happy" />
            <div>
              {isEditingName ? (
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    maxLength={20}
                    className="px-2 py-0.5 text-xs font-bold border border-amber-400 rounded-md bg-white focus:outline-none"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="p-1 bg-amber-500 text-white rounded hover:bg-amber-600"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-bold text-slate-800 text-sm sm:text-base">
                    {stats.name}
                  </span>
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      setIsEditingName(true);
                    }}
                    className="text-slate-400 hover:text-amber-600 transition-colors"
                    title="Đổi tên của bạn"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <span>Cấp độ {stats.level}</span>
                <span>•</span>
                <span>Chuỗi kỉ lục: {stats.highestCombo} câu</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-right">
            <div className="bg-white border border-amber-200 px-3 py-1 rounded-xl shadow-xs">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Tổng Điểm</div>
              <div className="text-amber-600 font-bold font-heading text-sm sm:text-base">
                {stats.totalScore} đ
              </div>
            </div>
            <div className="bg-white border border-amber-200 px-3 py-1 rounded-xl shadow-xs">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Sao</div>
              <div className="text-amber-500 font-bold font-heading text-sm sm:text-base flex items-center gap-0.5 justify-end">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{stats.stars}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-200 bg-slate-100/60 px-4 pt-2 gap-2">
          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('ranking');
            }}
            className={`flex items-center gap-1.5 px-4 py-2 font-bold text-xs sm:text-sm rounded-t-xl transition-all ${
              activeTab === 'ranking'
                ? 'bg-white text-amber-600 border-t-2 border-x-2 border-amber-300 shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Xếp Hạng Tuần</span>
          </button>
          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('badges');
            }}
            className={`flex items-center gap-1.5 px-4 py-2 font-bold text-xs sm:text-sm rounded-t-xl transition-all ${
              activeTab === 'badges'
                ? 'bg-white text-amber-600 border-t-2 border-x-2 border-amber-300 shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Award className="w-4 h-4 text-orange-500" />
            <span>Bộ Sưu Tập Huy Hiệu ({stats.badges.length}/{ALL_BADGES.length})</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 bg-slate-50/50">
          {activeTab === 'ranking' ? (
            <div className="space-y-2">
              {leaderboard.map((user) => {
                const isTop1 = user.rank === 1;
                const isTop2 = user.rank === 2;
                const isTop3 = user.rank === 3;

                return (
                  <div
                    key={user.id}
                    className={`flex items-center justify-between p-3 rounded-2xl border-2 transition-all ${
                      user.isCurrentUser
                        ? 'bg-amber-100/80 border-amber-400 shadow-md ring-2 ring-amber-300/60'
                        : isTop1
                        ? 'bg-yellow-50/90 border-yellow-300 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Rank Number & Mascot */}
                    <div className="flex items-center gap-3">
                      <div className="w-7 text-center font-heading font-black text-sm sm:text-base">
                        {isTop1 ? (
                          <span className="text-xl">🥇</span>
                        ) : isTop2 ? (
                          <span className="text-xl">🥈</span>
                        ) : isTop3 ? (
                          <span className="text-xl">🥉</span>
                        ) : (
                          <span className="text-slate-400">#{user.rank}</span>
                        )}
                      </div>

                      <MascotAvatar characterId={user.characterId} size="sm" />

                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-heading font-bold text-slate-800 text-sm">
                            {user.name}
                          </span>
                          {user.isCurrentUser && (
                            <span className="px-1.5 py-0.2 bg-amber-500 text-white rounded text-[10px] font-bold">
                              Bạn
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          {user.badge} • <span className="text-amber-700 font-semibold">{user.title}</span>
                        </div>
                      </div>
                    </div>

                    {/* Score & Stars */}
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-heading font-bold text-amber-600 text-sm sm:text-base">
                          {user.score} đ
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-0.5 justify-end font-semibold">
                          <span>{user.stars}</span>
                          <span className="text-amber-400">⭐</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Badges Collection
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ALL_BADGES.map((b) => {
                const isUnlocked = stats.badges.some((ub) => ub.includes(b.title));

                return (
                  <div
                    key={b.title}
                    className={`p-3.5 rounded-2xl border-2 flex items-start gap-3 transition-all ${
                      isUnlocked
                        ? 'bg-white border-amber-300 shadow-sm'
                        : 'bg-slate-100/70 border-slate-200 opacity-60'
                    }`}
                  >
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-100 to-orange-100 border border-amber-200 flex items-center justify-center text-2xl shrink-0 shadow-xs">
                      {b.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-heading font-bold text-slate-800 text-sm">
                          {b.title}
                        </h4>
                        {isUnlocked ? (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-700">
                            Đã đạt
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-200 text-slate-500">
                            Khóa
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-1 leading-snug font-medium">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
