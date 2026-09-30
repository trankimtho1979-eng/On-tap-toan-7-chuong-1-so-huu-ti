import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ALL_QUESTIONS } from '../data/chapter1Questions';
import { Question, UserStats } from '../types/mathGame';
import { MascotDialogue } from './MascotDialogue';
import { MathText } from './MathText';
import { soundEffects } from '../utils/audio';
import { addExpAndScore } from '../utils/storage';
import {
  Timer,
  Heart,
  Flame,
  RotateCcw,
  MapPin,
  CheckCircle2,
  XCircle,
  Lightbulb,
} from 'lucide-react';

interface TimeAttackGameProps {
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onBackToMap: () => void;
  onOpenCheatsheet: () => void;
}

export const TimeAttackGame: React.FC<TimeAttackGameProps> = ({
  stats,
  onUpdateStats,
  onBackToMap,
  onOpenCheatsheet,
}) => {
  const [timeLeft, setTimeLeft] = useState(90);
  const [lives, setLives] = useState(3);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [combo, setCombo] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [lastAnsweredQ, setLastAnsweredQ] = useState<Question | null>(null);

  // Initialize questions
  useEffect(() => {
    const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  // Timer countdown
  useEffect(() => {
    if (isGameOver) return;
    if (timeLeft <= 0) {
      endGame();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isGameOver]);

  const endGame = () => {
    setIsGameOver(true);
    soundEffects.playFanfare();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const currentQ = shuffledQuestions[currentIndex] || ALL_QUESTIONS[0];
  const optionLetters = ['A', 'B', 'C', 'D'];

  const handleSelectOption = (idx: number) => {
    if (isGameOver || feedback !== 'idle') return;

    const isAnsCorrect = idx === currentQ.correctIndex;
    setLastAnsweredQ(currentQ);

    if (isAnsCorrect) {
      soundEffects.playClick();
      const newCombo = combo + 1;
      setCombo(newCombo);
      setCorrectCount((prev) => prev + 1);

      const multiplier = newCombo >= 3 ? 2 : 1.2;
      const earned = Math.round(currentQ.points * multiplier);
      setScore((prev) => prev + earned);

      if (newCombo >= 3) {
        soundEffects.playStreak();
      } else {
        soundEffects.playCorrect();
      }

      setFeedback('correct');

      const result = addExpAndScore(earned, 0, true, newCombo);
      onUpdateStats(result.updatedStats);
    } else {
      soundEffects.playWrong();
      setCombo(0);
      setLives((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          setTimeout(() => endGame(), 300);
        }
        return next;
      });
      setFeedback('wrong');
    }

    // Advance quickly to next question
    setTimeout(() => {
      setFeedback('idle');
      if (currentIndex + 1 < shuffledQuestions.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // reshuffle if all questions answered
        const reshuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);
        setShuffledQuestions(reshuffled);
        setCurrentIndex(0);
      }
    }, 900);
  };

  const handleRestart = () => {
    soundEffects.playClick();
    setTimeLeft(90);
    setLives(3);
    setCombo(0);
    setScore(0);
    setCorrectCount(0);
    setCurrentIndex(0);
    setIsGameOver(false);
    setFeedback('idle');
    setLastAnsweredQ(null);
    setShuffledQuestions([...ALL_QUESTIONS].sort(() => Math.random() - 0.5));
  };

  if (isGameOver) {
    return (
      <div className="max-w-xl mx-auto py-6 px-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-white rounded-3xl border-4 border-rose-300 shadow-2xl p-6 sm:p-8 text-center">
          <div className="text-5xl sm:text-6xl mb-3 animate-bounce">⚡</div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-800 mb-1">
            Hết Giờ Thách Đấu!
          </h2>
          <p className="text-slate-500 text-sm font-medium mb-5">
            Thành tích thần tốc trong Đấu trường Sinh tồn 90s!
          </p>

          <div className="grid grid-cols-3 gap-3 bg-rose-50 border border-rose-200 rounded-2xl p-4 mb-6">
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase">Điểm đạt</div>
              <div className="font-heading font-bold text-rose-600 text-xl sm:text-2xl">
                {score} đ
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase">Số câu đúng</div>
              <div className="font-heading font-bold text-emerald-600 text-xl sm:text-2xl">
                {correctCount}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase">Kỷ lục Combo</div>
              <div className="font-heading font-bold text-amber-600 text-xl sm:text-2xl">
                x{stats.highestCombo}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border-2 border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-800 font-bold text-sm transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Thử lại lần nữa</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                onBackToMap();
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <MapPin className="w-4 h-4" />
              <span>Về Bản Đồ Ải</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-3 sm:py-5 px-3 sm:px-4">
      {/* Time & Lives Bar */}
      <div className="bg-white rounded-2xl border-2 border-rose-200 p-3 sm:p-4 mb-4 shadow-sm flex items-center justify-between gap-3">
        {/* Lives */}
        <div className="flex items-center gap-1.5">
          {[1, 2, 3].map((heartIndex) => (
            <Heart
              key={heartIndex}
              className={`w-6 h-6 transition-all ${
                heartIndex <= lives
                  ? 'fill-rose-500 text-rose-500 scale-105'
                  : 'fill-slate-200 text-slate-300'
              }`}
            />
          ))}
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2 bg-rose-50 border border-rose-200 px-4 py-1.5 rounded-full">
          <Timer className="w-4 h-4 text-rose-500 animate-spin" />
          <span className="font-heading font-black text-rose-600 text-lg">
            {timeLeft}s
          </span>
        </div>

        {/* Score & Combo */}
        <div className="flex items-center gap-3">
          {combo >= 2 && (
            <div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full text-xs font-black animate-pulse">
              <Flame className="w-3.5 h-3.5 fill-amber-500" />
              <span>x{combo}</span>
            </div>
          )}
          <div className="font-heading font-black text-slate-800 text-base sm:text-lg">
            {score} đ
          </div>
        </div>
      </div>

      {/* Mascot bubble */}
      <div className="mb-4">
        <MascotDialogue
          characterId={stats.characterId}
          state={feedback === 'correct' ? 'correct' : feedback === 'wrong' ? 'wrong' : 'idle'}
          combo={combo}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl border-3 border-rose-200 shadow-md p-5 sm:p-7 mb-4 relative overflow-hidden">
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
          {currentQ.lessonTitle}
        </div>

        <h3 className="font-heading font-bold text-slate-800 text-lg sm:text-xl leading-relaxed mb-5">
          <MathText text={currentQ.question} />
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currentQ.options.map((opt, idx) => {
            const isCorrectAnswer = idx === currentQ.correctIndex;
            let btnClass = 'bg-white border-2 border-slate-200 hover:border-rose-400 text-slate-800';

            if (feedback === 'correct' && isCorrectAnswer) {
              btnClass = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-900 ring-2 ring-emerald-300';
            } else if (feedback === 'wrong') {
              if (isCorrectAnswer) {
                btnClass = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-900';
              } else {
                btnClass = 'bg-rose-50 border-2 border-rose-300 text-rose-800';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={feedback !== 'idle'}
                className={`p-3.5 sm:p-4 rounded-2xl text-left font-bold text-sm sm:text-base flex items-start gap-3 transition-all cursor-pointer ${btnClass}`}
              >
                <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-heading font-black shrink-0">
                  {optionLetters[idx]}
                </div>
                <span className="leading-snug pt-0.5">
                  <MathText text={opt} />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick feedback banner if wrong */}
      {feedback === 'wrong' && lastAnsweredQ && (
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-start gap-3 animate-in fade-in">
          <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <div className="text-xs text-rose-900 font-medium">
            <span className="font-bold block">Gợi ý nhanh:</span>
            <MathText text={lastAnsweredQ.formulaTip} />
          </div>
        </div>
      )}
    </div>
  );
};
