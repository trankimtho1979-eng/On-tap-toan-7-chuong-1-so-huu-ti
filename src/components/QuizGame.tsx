import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Question, LevelIsland, UserStats } from '../types/mathGame';
import { MascotDialogue } from './MascotDialogue';
import { MathText } from './MathText';
import { soundEffects } from '../utils/audio';
import { addExpAndScore } from '../utils/storage';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Flame,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  MapPin,
  ChevronRight,
} from 'lucide-react';

interface QuizGameProps {
  level: LevelIsland;
  questions: Question[];
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onFinishLevel: () => void;
  onOpenCheatsheet: () => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({
  level,
  questions,
  stats,
  onUpdateStats,
  onFinishLevel,
  onOpenCheatsheet,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [combo, setCombo] = useState(0);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionCorrectCount, setSessionCorrectCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [leveledUpMessage, setLeveledUpMessage] = useState<string | null>(null);

  const currentQ = questions[currentIndex] || questions[0];
  const optionLetters = ['A', 'B', 'C', 'D'];

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F59E0B', '#10B981', '#EC4899', '#3B82F6'],
    });
  };

  const handleSelectOption = (idx: number) => {
    if (hasAnswered) return;

    soundEffects.playClick();
    setSelectedOption(idx);
    setHasAnswered(true);

    const correct = idx === currentQ.correctIndex;
    setIsCorrect(correct);

    if (correct) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      setSessionCorrectCount((prev) => prev + 1);

      // Multiplier based on combo
      const multiplier = newCombo >= 3 ? 1.5 : 1;
      const earned = Math.round(currentQ.points * multiplier);
      setSessionScore((prev) => prev + earned);

      if (newCombo >= 3) {
        soundEffects.playStreak();
      } else {
        soundEffects.playCorrect();
      }
      triggerConfetti();

      // Update user stats
      const result = addExpAndScore(earned, 0, true, newCombo);
      onUpdateStats(result.updatedStats);
      if (result.leveledUp) {
        setLeveledUpMessage(`Chúc mừng! Bạn đã thăng cấp lên Cấp ${result.updatedStats.level}! 🎉`);
      }
    } else {
      setCombo(0);
      soundEffects.playWrong();
      const result = addExpAndScore(0, 0, false, 0);
      onUpdateStats(result.updatedStats);
    }
  };

  const handleNextQuestion = () => {
    soundEffects.playClick();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
      setIsCorrect(false);
    } else {
      // Finished all questions in level
      handleFinishLevelSession();
    }
  };

  const handleFinishLevelSession = () => {
    setIsCompleted(true);
    soundEffects.playFanfare();

    // Calculate stars
    const accuracy = sessionCorrectCount / questions.length;
    let earnedStars = 1;
    if (accuracy >= 0.9) earnedStars = 3;
    else if (accuracy >= 0.6) earnedStars = 2;

    const result = addExpAndScore(20, earnedStars, true, combo, level.id);
    onUpdateStats(result.updatedStats);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  const handleRestart = () => {
    soundEffects.playClick();
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setIsCorrect(false);
    setCombo(0);
    setSessionScore(0);
    setSessionCorrectCount(0);
    setIsCompleted(false);
    setLeveledUpMessage(null);
  };

  // Completion View
  if (isCompleted) {
    const accuracy = Math.round((sessionCorrectCount / questions.length) * 100);
    let starsEarned = 1;
    if (accuracy >= 90) starsEarned = 3;
    else if (accuracy >= 60) starsEarned = 2;

    return (
      <div className="max-w-xl mx-auto py-6 px-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-white rounded-3xl border-4 border-amber-300 shadow-2xl p-6 sm:p-8 text-center relative overflow-hidden">
          <div className="text-5xl sm:text-6xl mb-3 animate-bounce">👑</div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-800 mb-1">
            Hoàn Thành {level.title}!
          </h2>
          <p className="text-slate-500 text-sm font-medium mb-5">
            Bạn đã xuất sắc vượt qua các thử thách Toán 7 Chương 1!
          </p>

          {/* Stars display */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {[1, 2, 3].map((starNum) => (
              <span
                key={starNum}
                className={`text-4xl sm:text-5xl transition-transform ${
                  starNum <= starsEarned ? 'scale-110 drop-shadow-md' : 'grayscale opacity-30'
                }`}
              >
                ⭐
              </span>
            ))}
          </div>

          {/* Stats Breakdown */}
          <div className="grid grid-cols-3 gap-3 bg-amber-50/70 border border-amber-200 rounded-2xl p-4 mb-6">
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase">Chính xác</div>
              <div className="font-heading font-bold text-emerald-600 text-lg sm:text-xl">
                {sessionCorrectCount}/{questions.length}
              </div>
              <div className="text-[11px] text-slate-500 font-semibold">{accuracy}%</div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase">Điểm thưởng</div>
              <div className="font-heading font-bold text-amber-600 text-lg sm:text-xl">
                +{sessionScore} đ
              </div>
              <div className="text-[11px] text-slate-500 font-semibold">Tích luỹ</div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase">Kinh nghiệm</div>
              <div className="font-heading font-bold text-indigo-600 text-lg sm:text-xl">
                +{sessionScore + 20} EXP
              </div>
              <div className="text-[11px] text-slate-500 font-semibold">Thăng cấp</div>
            </div>
          </div>

          {leveledUpMessage && (
            <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold p-3 rounded-xl mb-6 shadow-sm text-sm">
              {leveledUpMessage}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border-2 border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-sm transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Chơi lại ải này</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                onFinishLevel();
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm shadow-md shadow-orange-200 transition-all active:scale-95"
            >
              <MapPin className="w-4 h-4" />
              <span>Về Bản Đồ Ải</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz View
  return (
    <div className="max-w-3xl mx-auto py-3 sm:py-5 px-3 sm:px-4">
      {/* Top Level & Progress Bar */}
      <div className="bg-white rounded-2xl border-2 border-amber-200 p-3 sm:p-4 mb-4 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">{level.icon}</span>
            <div>
              <span className="font-heading font-bold text-slate-800 text-sm sm:text-base">
                {level.title}
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-slate-500 font-medium">
                • {currentQ.lessonTitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {combo >= 2 && (
              <div className="flex items-center gap-1 bg-rose-100 text-rose-700 px-2.5 py-0.5 rounded-full text-xs font-black animate-pulse">
                <Flame className="w-3.5 h-3.5 fill-rose-500" />
                <span>Combo x{combo}</span>
              </div>
            )}

            <div className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
              Câu {currentIndex + 1} / {questions.length}
            </div>
          </div>
        </div>

        {/* Progress bar line */}
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Mascot Companion reaction bubble */}
      <div className="mb-4">
        <MascotDialogue
          characterId={stats.characterId}
          state={!hasAnswered ? 'idle' : isCorrect ? 'correct' : 'wrong'}
          combo={combo}
        />
      </div>

      {/* Question Box */}
      <div className="bg-white rounded-3xl border-3 border-amber-300/80 shadow-md p-5 sm:p-7 mb-4 relative overflow-hidden">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
          <span className="uppercase tracking-wider">Câu hỏi trắc nghiệm</span>
          <span className="text-amber-600 font-semibold">+{currentQ.points} điểm</span>
        </div>

        <h3 className="font-heading font-bold text-slate-800 text-lg sm:text-xl leading-relaxed mb-4">
          <MathText text={currentQ.question} />
        </h3>

        {/* 4 Choices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isAnswerCorrect = idx === currentQ.correctIndex;

            let btnStyle = 'bg-white border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 text-slate-800';

            if (hasAnswered) {
              if (isAnswerCorrect) {
                btnStyle = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-900 ring-2 ring-emerald-200';
              } else if (isSelected && !isAnswerCorrect) {
                btnStyle = 'bg-rose-50 border-2 border-rose-500 text-rose-900 ring-2 ring-rose-200';
              } else {
                btnStyle = 'bg-slate-50 border-2 border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                disabled={hasAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left font-bold text-sm sm:text-base flex items-start gap-3 transition-all relative select-none ${btnStyle} ${
                  !hasAnswered ? 'active:scale-98 cursor-pointer' : ''
                }`}
              >
                {/* Option Letter Icon */}
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-heading font-black shrink-0 ${
                    hasAnswered && isAnswerCorrect
                      ? 'bg-emerald-500 text-white'
                      : hasAnswered && isSelected
                      ? 'bg-rose-500 text-white'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {hasAnswered && isAnswerCorrect ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : hasAnswered && isSelected ? (
                    <XCircle className="w-4 h-4" />
                  ) : (
                    optionLetters[idx]
                  )}
                </div>

                <span className="leading-snug pt-0.5">
                  <MathText text={option} />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* DETAILED EXPLANATION PANEL (Hiển thị ngay sau khi trả lời, đặc biệt khi sai) */}
      {hasAnswered && (
        <div className="bg-white rounded-3xl border-3 border-amber-300 shadow-lg p-5 sm:p-6 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <div className="flex items-center gap-1.5 text-emerald-600 font-heading font-bold text-base sm:text-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Chính xác tuyệt đối!</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-rose-600 font-heading font-bold text-base sm:text-lg">
                  <XCircle className="w-5 h-5 text-rose-500" />
                  <span>Chưa đúng rồi! Cùng xem lời giải chi tiết nhé:</span>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                soundEffects.playClick();
                onOpenCheatsheet();
              }}
              className="text-xs text-amber-700 hover:text-amber-900 font-bold flex items-center gap-1 underline underline-offset-2"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Mở Bí Kíp</span>
            </button>
          </div>

          {/* Explanation Text with true fractions */}
          <div className="text-slate-700 text-sm leading-relaxed mb-3 whitespace-pre-line font-medium bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <strong className="text-slate-900 block font-heading mb-1 text-xs uppercase tracking-wider text-amber-700">
              💡 Lời giải từng bước:
            </strong>
            <MathText text={currentQ.explanation} />
          </div>

          {/* Formula Tip & Trap Warning */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-amber-800 block">Bí kíp áp dụng:</span>
                <span className="text-xs text-amber-900 font-medium">
                  <MathText text={currentQ.formulaTip} />
                </span>
              </div>
            </div>

            {currentQ.trapNote && (
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-rose-800 block">Cảnh báo bẫy sai lầm:</span>
                  <span className="text-xs text-rose-900 font-medium">
                    <MathText text={currentQ.trapNote} />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Continue button */}
          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm shadow-md shadow-orange-200 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>{currentIndex + 1 < questions.length ? 'Câu Tiếp Theo' : 'Xem Kết Quả Màn Chơi'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
