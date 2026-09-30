import React, { useState, useEffect } from 'react';
import { UserStats, LevelIsland } from './types/mathGame';
import { loadUserStats, saveUserStats } from './utils/storage';
import { Header } from './components/Header';
import { AdventureMap } from './components/AdventureMap';
import { QuizGame } from './components/QuizGame';
import { TimeAttackGame } from './components/TimeAttackGame';
import { FormulaCheatsheetModal } from './components/FormulaCheatsheetModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { CharacterSelectModal } from './components/CharacterSelectModal';
import { getQuestionsByLevel } from './data/chapter1Questions';
import { soundEffects } from './utils/audio';

export default function App() {
  const [stats, setStats] = useState<UserStats>(() => loadUserStats());
  const [currentView, setCurrentView] = useState<'map' | 'quiz' | 'time-attack'>('map');
  const [selectedLevel, setSelectedLevel] = useState<LevelIsland | null>(null);

  // Modals state
  const [isCheatsheetOpen, setIsCheatsheetOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isCharacterSelectOpen, setIsCharacterSelectOpen] = useState(false);

  // Synchronize stats to localStorage
  const handleUpdateStats = (newStats: UserStats) => {
    setStats(newStats);
    saveUserStats(newStats);
  };

  const handleSelectLevel = (level: LevelIsland) => {
    setSelectedLevel(level);
    setCurrentView('quiz');
  };

  const handleBackToMap = () => {
    setCurrentView('map');
    setSelectedLevel(null);
  };

  const handleStartTimeAttack = () => {
    setCurrentView('time-attack');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/60 via-slate-50 to-orange-50/40 text-slate-800 flex flex-col justify-between selection:bg-amber-200 selection:text-amber-900">
      {/* Top Persistent Header */}
      <Header
        stats={stats}
        onOpenCheatsheet={() => setIsCheatsheetOpen(true)}
        onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
        onOpenCharacterSelect={() => setIsCharacterSelectOpen(true)}
        onGoHome={handleBackToMap}
        onStartTimeAttack={handleStartTimeAttack}
        currentMode={currentView}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full pb-8">
        {currentView === 'map' && (
          <AdventureMap
            stats={stats}
            onSelectLevel={handleSelectLevel}
            onOpenCheatsheet={() => setIsCheatsheetOpen(true)}
            onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
            onStartTimeAttack={handleStartTimeAttack}
            onOpenCharacterSelect={() => setIsCharacterSelectOpen(true)}
          />
        )}

        {currentView === 'quiz' && selectedLevel && (
          <QuizGame
            level={selectedLevel}
            questions={getQuestionsByLevel(selectedLevel.id)}
            stats={stats}
            onUpdateStats={handleUpdateStats}
            onFinishLevel={handleBackToMap}
            onOpenCheatsheet={() => setIsCheatsheetOpen(true)}
          />
        )}

        {currentView === 'time-attack' && (
          <TimeAttackGame
            stats={stats}
            onUpdateStats={handleUpdateStats}
            onBackToMap={handleBackToMap}
            onOpenCheatsheet={() => setIsCheatsheetOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 border-t border-amber-200/60 py-4 px-4 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-amber-700">Toán 7 - Kết Nối Tri Thức</span>
            <span>•</span>
            <span>Chương 1: Số Hữu Tỉ</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundEffects.playClick();
                setIsCheatsheetOpen(true);
              }}
              className="hover:text-amber-600 font-semibold underline underline-offset-2"
            >
              📖 Xem bí kíp công thức
            </button>
            <span>•</span>
            <button
              onClick={() => {
                soundEffects.playClick();
                setIsLeaderboardOpen(true);
              }}
              className="hover:text-amber-600 font-semibold underline underline-offset-2"
            >
              🏆 Bảng vinh danh
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <FormulaCheatsheetModal
        isOpen={isCheatsheetOpen}
        onClose={() => setIsCheatsheetOpen(false)}
        characterId={stats.characterId}
      />

      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        stats={stats}
        onUpdateStats={handleUpdateStats}
      />

      <CharacterSelectModal
        isOpen={isCharacterSelectOpen}
        onClose={() => setIsCharacterSelectOpen(false)}
        stats={stats}
        onUpdateStats={handleUpdateStats}
      />
    </div>
  );
}
