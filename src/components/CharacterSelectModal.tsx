import React from 'react';
import { UserStats } from '../types/mathGame';
import { MASCOTS } from '../data/characters';
import { MascotAvatar } from './MascotAvatar';
import { soundEffects } from '../utils/audio';
import { saveUserStats } from '../utils/storage';
import { X, Check } from 'lucide-react';

interface CharacterSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
}

export const CharacterSelectModal: React.FC<CharacterSelectModalProps> = ({
  isOpen,
  onClose,
  stats,
  onUpdateStats,
}) => {
  if (!isOpen) return null;

  const handleSelectCharacter = (characterId: string) => {
    soundEffects.playClick();
    const updated: UserStats = {
      ...stats,
      characterId,
    };
    saveUserStats(updated);
    onUpdateStats(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border-4 border-amber-300 w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 p-4 sm:p-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🐾</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading drop-shadow-xs">
                Chọn Bạn Đồng Hành
              </h2>
              <p className="text-amber-100 text-xs sm:text-sm font-medium">
                Mỗi bạn nhỏ mang đến lời khích lệ và bí quyết toán học riêng!
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

        {/* Mascot List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 bg-slate-50">
          {MASCOTS.map((mascot) => {
            const isSelected = stats.characterId === mascot.id;

            return (
              <div
                key={mascot.id}
                onClick={() => handleSelectCharacter(mascot.id)}
                className={`p-4 rounded-2xl border-3 cursor-pointer transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-amber-50 border-amber-400 shadow-md ring-2 ring-amber-300'
                    : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-amber-50/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <MascotAvatar characterId={mascot.id} size="lg" mood={isSelected ? 'happy' : 'idle'} />
                    {isSelected && (
                      <span className="absolute -bottom-1 -right-1 bg-amber-500 text-white rounded-full p-1 shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-bold text-slate-800 text-base sm:text-lg">
                        {mascot.nickname}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800">
                        {mascot.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                      {mascot.bio}
                    </p>

                    <div className="mt-2 text-[11px] text-amber-700 italic bg-amber-100/60 px-2.5 py-1 rounded-lg">
                      "{mascot.quoteCorrect[0]}"
                    </div>
                  </div>
                </div>

                <button
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    isSelected
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-amber-100 hover:text-amber-800'
                  }`}
                >
                  {isSelected ? 'Đang chọn' : 'Đồng hành'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 text-right">
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl text-sm shadow-md transition-all active:scale-95"
          >
            Xong rồi! 🐾
          </button>
        </div>
      </div>
    </div>
  );
};
