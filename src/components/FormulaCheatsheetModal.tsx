import React, { useState } from 'react';
import { FORMULA_CHEATSHEET } from '../data/formulaCheatsheet';
import { FormulaItem } from '../types/mathGame';
import { MascotAvatar } from './MascotAvatar';
import { MathText, MathFraction } from './MathText';
import { soundEffects } from '../utils/audio';
import { X, Search, Sparkles, BookOpen, Layers, Lightbulb, RefreshCw, Calculator, Compass, BookmarkCheck, CheckCircle2 } from 'lucide-react';

interface FormulaCheatsheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  characterId: string;
}

export const FormulaCheatsheetModal: React.FC<FormulaCheatsheetModalProps> = ({
  isOpen,
  onClose,
  characterId,
}) => {
  const [activeTab, setActiveTab] = useState<'cards' | 'flashcards' | 'sandbox'>('cards');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Flashcard state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Number line sandbox
  const [numberLineVal, setNumberLineVal] = useState<number>(-1.5);

  if (!isOpen) return null;

  const filteredFormulas = FORMULA_CHEATSHEET.filter((item) => {
    const matchCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.rhymeOrTip.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const currentFlashcard: FormulaItem = FORMULA_CHEATSHEET[flashcardIndex] || FORMULA_CHEATSHEET[0];

  const handleNextFlashcard = () => {
    soundEffects.playClick();
    setIsFlipped(false);
    setFlashcardIndex((prev) => (prev + 1) % FORMULA_CHEATSHEET.length);
  };

  const handlePrevFlashcard = () => {
    soundEffects.playClick();
    setIsFlipped(false);
    setFlashcardIndex((prev) => (prev - 1 + FORMULA_CHEATSHEET.length) % FORMULA_CHEATSHEET.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border-4 border-amber-300 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header - Friendly & Neat */}
        <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 px-4 sm:px-6 py-4 flex items-center justify-between text-white relative shadow-sm">
          <div className="flex items-center gap-3">
            <MascotAvatar characterId={characterId} size="md" mood="happy" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">📘</span>
                <h2 className="text-lg sm:text-2xl font-black font-heading tracking-wide drop-shadow-xs">
                  Sổ Tay Bí Kíp Toán 7 — Chương 1
                </h2>
              </div>
              <p className="text-amber-100 text-xs sm:text-sm font-medium mt-0.5">
                Kiến thức trọng tâm • Công thức chuẩn định dạng phân số • Mẹo nhớ dễ hiểu
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

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-amber-50/40 px-3 sm:px-6 pt-2.5 gap-2 overflow-x-auto">
          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('cards');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-2xl font-bold text-xs sm:text-sm transition-all border-t-2 border-x-2 ${
              activeTab === 'cards'
                ? 'bg-white text-orange-600 border-amber-300 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 border-transparent hover:bg-amber-100/50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span>Sổ Tay Công Thức ({FORMULA_CHEATSHEET.length})</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('flashcards');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-2xl font-bold text-xs sm:text-sm transition-all border-t-2 border-x-2 ${
              activeTab === 'flashcards'
                ? 'bg-white text-orange-600 border-amber-300 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 border-transparent hover:bg-amber-100/50'
            }`}
          >
            <Layers className="w-4 h-4 text-blue-500" />
            <span>Thẻ Lật Nhớ Nhanh</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('sandbox');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-2xl font-bold text-xs sm:text-sm transition-all border-t-2 border-x-2 ${
              activeTab === 'sandbox'
                ? 'bg-white text-orange-600 border-amber-300 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 border-transparent hover:bg-amber-100/50'
            }`}
          >
            <Compass className="w-4 h-4 text-emerald-500" />
            <span>Trục Số Trực Quan</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-slate-50">
          
          {/* TAB 1: BEAUTIFULLY SPACED FORMULA CARDS */}
          {activeTab === 'cards' && (
            <div className="space-y-4">
              {/* Search & Topic Filters */}
              <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm công thức, số đối, số nghịch đảo, luỹ thừa..."
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
                  {[
                    { id: 'all', label: 'Tất cả' },
                    { id: 'khai_niem', label: 'Số hữu tỉ & Số đối' },
                    { id: 'phep_tinh', label: '4 Phép tính' },
                    { id: 'luy_thua', label: 'Luỹ thừa' },
                    { id: 'dau_ngoac_chuyen_ve', label: 'Ngoặc & Chuyển vế' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        soundEffects.playClick();
                        setCategoryFilter(cat.id);
                      }}
                      className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors ${
                        categoryFilter === cat.id
                          ? 'bg-amber-500 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Formula Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredFormulas.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border-2 border-amber-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Topic Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800">
                          {item.chapterLesson}
                        </span>
                        <BookmarkCheck className="w-4 h-4 text-amber-500" />
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-black text-slate-800 text-base sm:text-lg mb-2.5">
                        {item.title}
                      </h3>

                      {/* Formula Box - Highlighted with TRUE fraction format */}
                      <div className="bg-amber-50/80 border-2 border-amber-300 text-amber-950 font-bold px-4 py-3 rounded-2xl shadow-inner mb-3 text-base sm:text-lg leading-relaxed flex items-center justify-center text-center">
                        <MathText text={item.formula} />
                      </div>

                      {/* Meaning / Definition */}
                      <div className="text-xs sm:text-sm text-slate-700 mb-3 leading-relaxed font-medium">
                        <span className="font-bold text-slate-900 block mb-0.5 text-xs uppercase tracking-wider text-amber-800">
                          📖 Ý nghĩa quy tắc:
                        </span>
                        <MathText text={item.meaning} />
                      </div>

                      {/* Example with true fractions */}
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800 mb-3 font-medium">
                        <span className="font-bold text-emerald-700 block mb-0.5">
                          🎯 Ví dụ mẫu:
                        </span>
                        <MathText text={item.example} />
                      </div>
                    </div>

                    {/* Mnemonic Verse / Rhyme Tip */}
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/90 rounded-xl p-3 flex items-start gap-2.5 mt-1">
                      <Lightbulb className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <p className="text-xs font-bold text-orange-900 leading-snug">
                        {item.rhymeOrTip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {filteredFormulas.length === 0 && (
                <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-slate-300">
                  <p className="text-slate-500 font-medium text-sm">
                    Không tìm thấy công thức phù hợp với từ khóa "{searchQuery}".
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: FLASHCARD VIEW */}
          {activeTab === 'flashcards' && (
            <div className="max-w-lg mx-auto py-3 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-3 text-xs font-bold text-slate-500">
                <span>Thẻ {flashcardIndex + 1} / {FORMULA_CHEATSHEET.length}</span>
                <span className="text-amber-700 bg-amber-100 px-2 py-0.5 rounded">{currentFlashcard.chapterLesson}</span>
              </div>

              {/* Flashcard container */}
              <div
                onClick={() => {
                  soundEffects.playClick();
                  setIsFlipped(!isFlipped);
                }}
                className="w-full min-h-[300px] sm:min-h-[340px] bg-white rounded-3xl border-3 border-amber-300 shadow-xl cursor-pointer p-6 sm:p-8 flex flex-col justify-between relative transition-transform active:scale-98 select-none"
              >
                {!isFlipped ? (
                  // Front side (Question / Title / Prompt)
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl mb-3">❓</span>
                    <span className="text-xs uppercase font-bold text-amber-600 tracking-wider mb-2">
                      Mặt trước - Câu hỏi ghi nhớ
                    </span>
                    <h3 className="font-heading font-black text-slate-800 text-xl sm:text-2xl mb-4">
                      {currentFlashcard.title}
                    </h3>
                    <p className="text-slate-500 text-sm max-w-sm mb-6">
                      Bạn có nhớ công thức và quy tắc phát biểu của phần này không?
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-xs font-bold animate-pulse">
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Nhấp để lật xem công thức & ví dụ!</span>
                    </div>
                  </div>
                ) : (
                  // Back side (Formula with real fractions & Mnemonic)
                  <div className="flex-1 flex flex-col justify-between animate-in fade-in zoom-in-95 duration-150">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded">
                          Mặt sau - Công thức chính xác
                        </span>
                        <span className="text-xs text-slate-400">Nhấp để lật lại</span>
                      </div>

                      <div className="bg-amber-50 border-2 border-amber-300 text-amber-950 font-bold text-base sm:text-lg p-3.5 rounded-2xl mb-3 text-center shadow-inner">
                        <MathText text={currentFlashcard.formula} />
                      </div>

                      <div className="text-xs sm:text-sm text-slate-700 font-medium mb-3">
                        <MathText text={currentFlashcard.meaning} />
                      </div>

                      <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs sm:text-sm text-slate-800 mb-3 font-medium">
                        <strong className="text-emerald-700">Ví dụ: </strong>
                        <MathText text={currentFlashcard.example} />
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-orange-600 shrink-0" />
                      <span className="text-xs font-bold text-orange-900">
                        {currentFlashcard.rhymeOrTip}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-3 mt-5">
                <button
                  onClick={handlePrevFlashcard}
                  className="px-4 py-2 bg-white border-2 border-slate-200 hover:border-amber-400 text-slate-700 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs"
                >
                  ← Thẻ trước
                </button>
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setIsFlipped(!isFlipped);
                  }}
                  className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  Lật thẻ 🔄
                </button>
                <button
                  onClick={handleNextFlashcard}
                  className="px-4 py-2 bg-white border-2 border-slate-200 hover:border-amber-400 text-slate-700 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs"
                >
                  Thẻ tiếp →
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: NUMBER LINE VISUAL TOOL */}
          {activeTab === 'sandbox' && (
            <div className="max-w-2xl mx-auto py-2">
              <div className="bg-white border-2 border-indigo-200 rounded-3xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-5 h-5 text-indigo-500" />
                  <h3 className="font-heading font-black text-slate-800 text-lg">
                    Minh Họa Trục Số & Số Đối Nhau
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Kéo thanh trượt để quan sát vị trí của số hữu tỉ <span className="font-bold text-blue-600">x</span> và số đối <span className="font-bold text-rose-600">-x</span> đối xứng qua gốc 0.
                </p>

                <div className="mb-4 bg-indigo-50/60 p-3.5 rounded-2xl border border-indigo-100">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-700 mb-2">
                    <span className="text-blue-700">Số hữu tỉ x = {numberLineVal}</span>
                    <span className="text-rose-700">Số đối (-x) = {-numberLineVal}</span>
                  </div>
                  <input
                    type="range"
                    min="-4"
                    max="4"
                    step="0.5"
                    value={numberLineVal}
                    onChange={(e) => setNumberLineVal(parseFloat(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-bold">
                    <span>-4</span>
                    <span>-2</span>
                    <span>0 (Gốc)</span>
                    <span>+2</span>
                    <span>+4</span>
                  </div>
                </div>

                {/* SVG Visual Number Line */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 overflow-x-auto">
                  <svg viewBox="0 0 400 90" className="w-full h-auto min-w-[320px]">
                    <line x1="20" y1="45" x2="380" y2="45" stroke="#475569" strokeWidth="2.5" />
                    <polygon points="380,45 372,40 372,50" fill="#475569" />

                    {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((num) => {
                      const cx = 200 + num * 40;
                      return (
                        <g key={num}>
                          <line x1={cx} y1="40" x2={cx} y2="50" stroke={num === 0 ? '#0F172A' : '#94A3B8'} strokeWidth={num === 0 ? '3' : '1.5'} />
                          <text x={cx} y="66" textAnchor="middle" fontSize="11" fontWeight={num === 0 ? 'bold' : 'normal'} fill={num === 0 ? '#0F172A' : '#64748B'}>
                            {num === 0 ? '0 (Gốc)' : num}
                          </text>
                        </g>
                      );
                    })}

                    {/* Point x */}
                    {(() => {
                      const cx = 200 + numberLineVal * 40;
                      return (
                        <g>
                          <circle cx={cx} cy="45" r="6" fill="#2563EB" />
                          <text x={cx} y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563EB">
                            x ({numberLineVal})
                          </text>
                        </g>
                      );
                    })()}

                    {/* Point -x */}
                    {numberLineVal !== 0 && (() => {
                      const cxOpp = 200 + (-numberLineVal) * 40;
                      return (
                        <g>
                          <circle cx={cxOpp} cy="45" r="6" fill="#E11D48" />
                          <text x={cxOpp} y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E11D48">
                            -x ({-numberLineVal})
                          </text>
                        </g>
                      );
                    })()}
                  </svg>
                  <p className="text-xs text-center text-slate-600 mt-2 font-medium">
                    💡 Điểm <strong className="text-blue-600">x</strong> và điểm <strong className="text-rose-600">-x</strong> luôn nằm về hai phía đối xứng và cách đều gốc 0.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Toán 7 • Bộ sách Kết nối tri thức với cuộc sống
          </span>
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="w-full sm:w-auto ml-auto px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            Đã Hiểu, Quay Lại Chơi! 🚀
          </button>
        </div>
      </div>
    </div>
  );
};
