import React from 'react';

interface MascotAvatarProps {
  characterId: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  mood?: 'idle' | 'happy' | 'thinking' | 'encourage';
  className?: string;
}

export const MascotAvatar: React.FC<MascotAvatarProps> = ({
  characterId,
  size = 'md',
  mood = 'idle',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  const getMoodAnim = () => {
    switch (mood) {
      case 'happy':
        return 'animate-bounce';
      case 'thinking':
        return 'animate-pulse';
      case 'encourage':
        return 'animate-wiggle';
      default:
        return 'hover:scale-105 transition-transform duration-300';
    }
  };

  if (characterId === 'puki') {
    // Thỏ Puki Hồng đeo kính tròn thông thái
    return (
      <div className={`relative inline-flex items-center justify-center ${sizeMap[size]} ${getMoodAnim()} ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Bunny Ears */}
          <ellipse cx="38" cy="22" rx="9" ry="20" fill="#F472B6" />
          <ellipse cx="38" cy="22" rx="5" ry="14" fill="#FCE7F3" />
          <ellipse cx="62" cy="22" rx="9" ry="20" fill="#F472B6" />
          <ellipse cx="62" cy="22" rx="5" ry="14" fill="#FCE7F3" />
          {/* Face */}
          <circle cx="50" cy="58" r="32" fill="#FDF2F8" stroke="#F472B6" strokeWidth="2.5" />
          {/* Glasses */}
          <circle cx="40" cy="55" r="9" fill="none" stroke="#6366F1" strokeWidth="2.5" />
          <circle cx="60" cy="55" r="9" fill="none" stroke="#6366F1" strokeWidth="2.5" />
          <line x1="49" y1="55" x2="51" y2="55" stroke="#6366F1" strokeWidth="2.5" />
          {/* Eyes */}
          {mood === 'happy' ? (
            <>
              <path d="M 36 55 Q 40 50 44 55" fill="none" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 56 55 Q 60 50 64 55" fill="none" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="40" cy="55" r="3" fill="#1E1B4B" />
              <circle cx="60" cy="55" r="3" fill="#1E1B4B" />
              <circle cx="41.5" cy="53.5" r="1" fill="#FFFFFF" />
              <circle cx="61.5" cy="53.5" r="1" fill="#FFFFFF" />
            </>
          )}
          {/* Blushing cheeks */}
          <circle cx="28" cy="64" r="5" fill="#FDA4AF" opacity="0.6" />
          <circle cx="72" cy="64" r="5" fill="#FDA4AF" opacity="0.6" />
          {/* Nose & Mouth */}
          <polygon points="50,62 47,65 53,65" fill="#EC4899" />
          <path d="M 46 67 Q 50 71 54 67" fill="none" stroke="#BE185D" strokeWidth="2" strokeLinecap="round" />
          {/* Carrot hairpin */}
          <path d="M 22 36 L 30 32 L 26 42 Z" fill="#F97316" />
          <path d="M 22 34 L 18 31 M 23 35 L 20 37" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (characterId === 'kuma') {
    // Gấu Kuma Bác Học đội mũ cử nhân
    return (
      <div className={`relative inline-flex items-center justify-center ${sizeMap[size]} ${getMoodAnim()} ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Bear Ears */}
          <circle cx="28" cy="30" r="11" fill="#78350F" />
          <circle cx="28" cy="30" r="6" fill="#FDE68A" />
          <circle cx="72" cy="30" r="11" fill="#78350F" />
          <circle cx="72" cy="30" r="6" fill="#FDE68A" />
          {/* Bear Face */}
          <circle cx="50" cy="58" r="32" fill="#B45309" />
          <circle cx="50" cy="63" r="18" fill="#FEF3C7" />
          {/* Eyes */}
          {mood === 'happy' ? (
            <>
              <path d="M 36 53 Q 40 48 44 53" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 56 53 Q 60 48 64 53" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="40" cy="53" r="3.5" fill="#1F2937" />
              <circle cx="60" cy="53" r="3.5" fill="#1F2937" />
              <circle cx="41.5" cy="51.5" r="1.2" fill="#FFFFFF" />
              <circle cx="61.5" cy="51.5" r="1.2" fill="#FFFFFF" />
            </>
          )}
          {/* Cheeks */}
          <circle cx="30" cy="63" r="4.5" fill="#F87171" opacity="0.6" />
          <circle cx="70" cy="63" r="4.5" fill="#F87171" opacity="0.6" />
          {/* Nose & Mouth */}
          <ellipse cx="50" cy="62" rx="4.5" ry="3" fill="#451A03" />
          <path d="M 47 67 Q 50 71 53 67" fill="none" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
          {/* Graduation Cap */}
          <polygon points="50,14 74,24 50,34 26,24" fill="#047857" />
          <rect x="38" y="27" width="24" height="7" rx="2" fill="#065F46" />
          <circle cx="50" cy="24" r="2" fill="#FBBF24" />
          <line x1="50" y1="24" x2="68" y2="35" stroke="#FBBF24" strokeWidth="2" />
        </svg>
      </div>
    );
  }

  if (characterId === 'dino') {
    // Khủng Long Dino Chiến Binh Xanh ngọc
    return (
      <div className={`relative inline-flex items-center justify-center ${sizeMap[size]} ${getMoodAnim()} ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Dinosaur spikes */}
          <polygon points="34,22 40,12 46,24" fill="#F59E0B" />
          <polygon points="48,18 54,8 60,20" fill="#F59E0B" />
          <polygon points="62,22 68,14 74,26" fill="#F59E0B" />
          {/* Dino Face */}
          <circle cx="50" cy="56" r="32" fill="#10B981" />
          <circle cx="50" cy="64" r="20" fill="#A7F3D0" />
          {/* Red Hero Scarf */}
          <path d="M 30 76 Q 50 86 70 76 L 76 88 L 68 85 L 60 92 L 50 82 Z" fill="#EF4444" />
          {/* Eyes */}
          {mood === 'happy' ? (
            <>
              <path d="M 36 50 Q 40 44 44 50" fill="none" stroke="#064E3B" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 56 50 Q 60 44 64 50" fill="none" stroke="#064E3B" strokeWidth="2.5" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="40" cy="50" r="4" fill="#064E3B" />
              <circle cx="60" cy="50" r="4" fill="#064E3B" />
              <circle cx="41.5" cy="48" r="1.5" fill="#FFFFFF" />
              <circle cx="61.5" cy="48" r="1.5" fill="#FFFFFF" />
            </>
          )}
          {/* Cheeks */}
          <circle cx="28" cy="58" r="4.5" fill="#F87171" opacity="0.6" />
          <circle cx="72" cy="58" r="4.5" fill="#F87171" opacity="0.6" />
          {/* Cute tooth */}
          <polygon points="46,62 49,66 52,62" fill="#FFFFFF" />
          <path d="M 44 62 Q 50 67 56 62" fill="none" stroke="#064E3B" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  // Default: Mimi Mèo Cam (Siêu nhân Tính Nhẩm)
  return (
    <div className={`relative inline-flex items-center justify-center ${sizeMap[size]} ${getMoodAnim()} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        {/* Cat Ears */}
        <polygon points="24,42 20,18 42,32" fill="#F97316" />
        <polygon points="26,38 23,24 38,33" fill="#FED7AA" />
        <polygon points="76,42 80,18 58,32" fill="#F97316" />
        <polygon points="74,38 77,24 62,33" fill="#FED7AA" />
        {/* Cat Face */}
        <circle cx="50" cy="56" r="32" fill="#FDBA74" stroke="#EA580C" strokeWidth="2" />
        <ellipse cx="50" cy="65" rx="16" ry="12" fill="#FFF7ED" />
        {/* Whiskers */}
        <line x1="22" y1="58" x2="34" y2="60" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="66" x2="33" y2="65" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="78" y1="58" x2="66" y2="60" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="80" y1="66" x2="67" y2="65" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round" />
        {/* Eyes */}
        {mood === 'happy' ? (
          <>
            <path d="M 36 50 Q 40 44 44 50" fill="none" stroke="#431407" strokeWidth="3" strokeLinecap="round" />
            <path d="M 56 50 Q 60 44 64 50" fill="none" stroke="#431407" strokeWidth="3" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="40" cy="50" rx="4.5" ry="5.5" fill="#431407" />
            <ellipse cx="60" cy="50" rx="4.5" ry="5.5" fill="#431407" />
            <circle cx="41.5" cy="48" r="1.8" fill="#FFFFFF" />
            <circle cx="61.5" cy="48" r="1.8" fill="#FFFFFF" />
          </>
        )}
        {/* Blushing cheeks */}
        <circle cx="30" cy="60" r="5" fill="#FB7185" opacity="0.65" />
        <circle cx="70" cy="60" r="5" fill="#FB7185" opacity="0.65" />
        {/* Nose & Mouth */}
        <polygon points="50,58 47,62 53,62" fill="#E11D48" />
        <path d="M 45 64 Q 50 68 50 63 Q 50 68 55 64" fill="none" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" />
        {/* Star Badge on forehead */}
        <path d="M 50 34 L 52 39 L 57 39 L 53 42 L 55 47 L 50 44 L 45 47 L 47 42 L 43 39 L 48 39 Z" fill="#EAB308" />
      </svg>
    </div>
  );
};
