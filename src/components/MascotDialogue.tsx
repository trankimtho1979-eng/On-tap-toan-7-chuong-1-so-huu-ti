import React from 'react';
import { getMascotById } from '../data/characters';
import { MascotAvatar } from './MascotAvatar';

interface MascotDialogueProps {
  characterId: string;
  state: 'idle' | 'correct' | 'wrong' | 'streak';
  customMessage?: string;
  combo?: number;
}

export const MascotDialogue: React.FC<MascotDialogueProps> = ({
  characterId,
  state,
  customMessage,
  combo = 0,
}) => {
  const mascot = getMascotById(characterId);

  const getMessage = () => {
    if (customMessage) return customMessage;
    if (state === 'correct') {
      if (combo >= 3) {
        return `🔥 Siêu đỉnh! Chuỗi ${combo} câu đúng liên tiếp! Bạn là thiên tài toán học!`;
      }
      return mascot.quoteCorrect[Math.floor(Math.random() * mascot.quoteCorrect.length)];
    }
    if (state === 'wrong') {
      return mascot.quoteWrong[Math.floor(Math.random() * mascot.quoteWrong.length)];
    }
    if (state === 'streak') {
      return `⚡ Chuỗi rực lửa x${combo}! Điểm số đang nhân đôi!`;
    }
    return mascot.quoteCheer[0];
  };

  const getMood = () => {
    if (state === 'correct') return 'happy';
    if (state === 'wrong') return 'encourage';
    if (state === 'streak') return 'happy';
    return 'idle';
  };

  const getBorderColor = () => {
    if (state === 'correct') return 'border-emerald-300 bg-emerald-50 text-emerald-900';
    if (state === 'wrong') return 'border-rose-300 bg-rose-50 text-rose-900';
    if (state === 'streak') return 'border-amber-400 bg-amber-50 text-amber-900';
    return 'border-amber-200 bg-white text-slate-800';
  };

  return (
    <div className="flex items-center gap-3 w-full">
      <div className="shrink-0">
        <MascotAvatar characterId={characterId} size="md" mood={getMood()} />
      </div>

      <div
        className={`relative flex-1 p-3 rounded-2xl border-2 shadow-xs text-xs sm:text-sm font-semibold transition-all ${getBorderColor()}`}
      >
        {/* Chat bubble tail */}
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-inherit border-b-8 border-b-transparent" />

        <div className="flex items-center justify-between gap-1 mb-0.5">
          <span className="font-heading font-bold text-xs text-amber-800 flex items-center gap-1">
            <span>{mascot.nickname}</span>
            {combo >= 2 && state !== 'wrong' && (
              <span className="px-1.5 py-0.2 bg-rose-500 text-white rounded-md text-[10px] font-black animate-pulse">
                x{combo} Combo
              </span>
            )}
          </span>
        </div>

        <p className="leading-snug">{getMessage()}</p>
      </div>
    </div>
  );
};
