import React from 'react';

interface FractionProps {
  numerator: React.ReactNode;
  denominator: React.ReactNode;
  sign?: string;
  className?: string;
}

export const MathFraction: React.FC<FractionProps> = ({
  numerator,
  denominator,
  sign,
  className = '',
}) => {
  return (
    <span className={`inline-flex items-center align-middle mx-1 font-semibold select-none ${className}`}>
      {sign && <span className="mr-0.5 text-slate-800">{sign}</span>}
      <span className="inline-flex flex-col items-center justify-center text-center leading-none">
        <span className="border-b-[1.8px] border-slate-700 dark:border-slate-300 px-1 pb-[2px] text-[0.9em]">
          {numerator}
        </span>
        <span className="pt-[2px] px-1 text-[0.9em]">
          {denominator}
        </span>
      </span>
    </span>
  );
};

interface ParenthesizedFractionPowerProps {
  numerator: React.ReactNode;
  denominator: React.ReactNode;
  sign?: string;
  exponent: React.ReactNode;
  bracketType?: 'round' | 'square';
}

export const ParenthesizedFractionPower: React.FC<ParenthesizedFractionPowerProps> = ({
  numerator,
  denominator,
  sign,
  exponent,
  bracketType = 'round',
}) => {
  const leftBracket = bracketType === 'square' ? '[' : '(';
  const rightBracket = bracketType === 'square' ? ']' : ')';

  return (
    <span className="inline-flex items-center align-middle mx-1 select-none">
      <span className="text-xl font-light text-slate-600 leading-none -mr-0.5">{leftBracket}</span>
      <MathFraction numerator={numerator} denominator={denominator} sign={sign} />
      <span className="text-xl font-light text-slate-600 leading-none -ml-0.5">{rightBracket}</span>
      <sup className="text-[0.8em] font-bold text-amber-800 -top-2.5 ml-0.5">{exponent}</sup>
    </span>
  );
};

export const MathText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  if (!text) return null;

  const lines = text.split('\n');

  return (
    <span className={`leading-relaxed ${className}`}>
      {lines.map((line, lineIdx) => (
        <React.Fragment key={lineIdx}>
          {lineIdx > 0 && <br />}
          {renderMathLine(line)}
        </React.Fragment>
      ))}
    </span>
  );
};

function renderMathLine(line: string): React.ReactNode[] {
  // Master Tokenizer Regex:
  // 1) Nested bracket fraction power: e.g. [(\frac{2}{3})^2]^3
  // 2) Parenthesized fraction power: e.g. (\frac{x}{y})^n, (-\frac{1}{2})^3
  // 3) Parenthesized expression with power: e.g. (x^m)^n, (x · y)^n, (2 · 5)^3, (0,5)^6, (-a)^(chẵn), (-a)^(lẻ)
  // 4) Base with power: e.g. x^(m + n), x^(m - n), x^(m · n), 2^(3 + 4), 2^(x + 1), x^m, 2^10, x^0
  // 5) Explicit LaTeX fraction: \frac{num}{den}
  // 6) Simple fractions: -3/5, 1/2, a/b, 16/25
  const tokenRegex = new RegExp(
    [
      // 1. Nested [ ( \frac{a}{b} )^p ]^q
      '(\\[\\s*\\(\\s*\\\\frac\\{([^{}]+)\\}\\{([^{}]+)\\}\\s*\\)\\^([a-zA-Z0-9,]+)\\s*\\]\\^([a-zA-Z0-9,]+))',
      // 2. Parenthesized fraction with power: ( -?\frac{a}{b} )^(exp) or ^exp
      '(\\(\\s*(-?)\\\\frac\\{([^{}]+)\\}\\{([^{}]+)\\}\\s*\\)\\^(\\([^)]+\\)|\\{[^{}]+\\}|[a-zA-Z0-9,]+))',
      // 3. Parenthesized expression with power: (base)^exp
      '(\\(([^()]+)\\)\\^(\\([^)]+\\)|\\{[^{}]+\\}|[a-zA-Z0-9,]+|[a-zA-Z0-9\\s·+-,àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+))',
      // 4. Base with power: base^(exp) or base^exp
      '(\\b[a-zA-Z0-9,]+)\\^(\\([^)]+\\)|\\{[^{}]+\\}|[a-zA-Z0-9,]+|[a-zA-Z0-9\\s·+-,]+)',
      // 5. Explicit fraction: \frac{num}{den}
      '(\\\\frac\\{([^{}]+)\\}\\{([^{}]+)\\})',
      // 6. Simple fraction: -a/b, 1/2, 16/25
      '((?:\\b|-)\\d+\\/\\d+\\b|(?:\\b|-)[a-zA-Z]\\/[a-zA-Z]\\b)',
    ].join('|'),
    'g'
  );

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(line.substring(lastIndex, match.index));
    }

    const fullMatch = match[0];

    // Case 1: Nested bracket fraction power [(\frac{a}{b})^p]^q
    if (match[1]) {
      const num = match[2];
      const den = match[3];
      const innerPower = match[4];
      const outerPower = match[5];
      parts.push(
        <span key={match.index} className="inline-flex items-center align-middle mx-1">
          <span className="text-2xl font-light text-slate-500 leading-none -mr-0.5">[</span>
          <ParenthesizedFractionPower
            numerator={renderSimpleMath(num)}
            denominator={renderSimpleMath(den)}
            exponent={innerPower}
          />
          <span className="text-2xl font-light text-slate-500 leading-none -ml-0.5">]</span>
          <sup className="text-[0.8em] font-bold text-amber-800 -top-3 ml-0.5">{outerPower}</sup>
        </span>
      );
    }
    // Case 2: Parenthesized fraction power ( \frac{a}{b} )^n
    else if (match[6]) {
      const sign = match[7];
      const num = match[8];
      const den = match[9];
      let exp = match[10];
      if (exp.startsWith('(') && exp.endsWith(')')) {
        exp = exp.slice(1, -1);
      }
      parts.push(
        <ParenthesizedFractionPower
          key={match.index}
          sign={sign}
          numerator={renderSimpleMath(num)}
          denominator={renderSimpleMath(den)}
          exponent={renderSimpleMath(exp)}
        />
      );
    }
    // Case 3: Parenthesized expression with power: (base)^exp
    else if (match[11]) {
      const innerBase = match[12];
      let exp = match[13];
      if (exp.startsWith('(') && exp.endsWith(')')) {
        exp = exp.slice(1, -1);
      } else if (exp.startsWith('{') && exp.endsWith('}')) {
        exp = exp.slice(1, -1);
      }
      parts.push(
        <span key={match.index} className="inline-flex items-baseline whitespace-nowrap">
          <span>({renderSimpleMath(innerBase)})</span>
          <sup className="text-[0.78em] font-bold text-amber-800 ml-0.5">{renderSimpleMath(exp)}</sup>
        </span>
      );
    }
    // Case 4: Base with power: base^exp
    else if (match[14]) {
      const base = match[14];
      let exp = match[15];
      if (exp.startsWith('(') && exp.endsWith(')')) {
        exp = exp.slice(1, -1);
      } else if (exp.startsWith('{') && exp.endsWith('}')) {
        exp = exp.slice(1, -1);
      }
      parts.push(
        <span key={match.index} className="inline-flex items-baseline whitespace-nowrap">
          <span>{base}</span>
          <sup className="text-[0.78em] font-bold text-amber-800 ml-0.5">{renderSimpleMath(exp)}</sup>
        </span>
      );
    }
    // Case 5: \frac{num}{den}
    else if (match[16]) {
      const num = match[17];
      const den = match[18];
      parts.push(
        <MathFraction
          key={match.index}
          numerator={renderSimpleMath(num)}
          denominator={renderSimpleMath(den)}
        />
      );
    }
    // Case 6: Simple fraction -a/b, 1/2
    else if (match[19]) {
      const token = match[19];
      let sign = '';
      let cleanToken = token;
      if (cleanToken.startsWith('-')) {
        sign = '-';
        cleanToken = cleanToken.slice(1);
      }
      const [num, den] = cleanToken.split('/');
      parts.push(
        <MathFraction
          key={match.index}
          sign={sign}
          numerator={num}
          denominator={den}
        />
      );
    } else {
      parts.push(fullMatch);
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < line.length) {
    parts.push(line.substring(lastIndex));
  }

  return parts;
}

/**
 * Renders small inline math expressions like x^2, x^n, 2^3, a · c inside numerators/denominators/exponents
 */
function renderSimpleMath(text: string): React.ReactNode {
  if (!text) return '';

  // Check if it has simple power like x^n, 2^3
  if (text.includes('^')) {
    const powerRegex = /([a-zA-Z0-9,]+)\^(\([^)]+\)|[a-zA-Z0-9,]+)/g;
    const parts: React.ReactNode[] = [];
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = powerRegex.exec(text)) !== null) {
      if (m.index > last) {
        parts.push(text.substring(last, m.index));
      }
      const b = m[1];
      let p = m[2];
      if (p.startsWith('(') && p.endsWith(')')) {
        p = p.slice(1, -1);
      }
      parts.push(
        <span key={m.index} className="inline-flex items-baseline">
          <span>{b}</span>
          <sup className="text-[0.75em] font-bold ml-0.5">{p}</sup>
        </span>
      );
      last = powerRegex.lastIndex;
    }
    if (last < text.length) {
      parts.push(text.substring(last));
    }
    return <>{parts}</>;
  }

  return text;
}
