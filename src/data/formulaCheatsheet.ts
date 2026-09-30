import { FormulaItem } from '../types/mathGame';

export const FORMULA_CHEATSHEET: FormulaItem[] = [
  {
    id: 'f1',
    title: 'Định nghĩa Số Hữu Tỉ',
    chapterLesson: 'Bài 1: Tập hợp các số hữu tỉ',
    formula: 'ℚ = { \\frac{a}{b} | a, b ∈ ℤ, b ≠ 0 }',
    meaning: 'Số hữu tỉ là số có thể viết dưới dạng phân số \\frac{a}{b}, trong đó tử số a và mẫu số b là các số nguyên, mẫu số b khác 0.',
    example: '-3 = \\frac{-3}{1};  0,5 = \\frac{1}{2};  -0,25 = -\\frac{1}{4};  0 = \\frac{0}{1}',
    rhymeOrTip: '💡 Khẩu quyết: "Tử là số nguyên, mẫu là số nguyên (mẫu khác 0) là số hữu tỉ!"',
    category: 'khai_niem'
  },
  {
    id: 'f2',
    title: 'Số Đối của Số Hữu Tỉ',
    chapterLesson: 'Bài 1: Tập hợp các số hữu tỉ',
    formula: 'Số đối của x là -x\nx + (-x) = 0   và   -(-\\frac{a}{b}) = \\frac{a}{b}',
    meaning: 'Hai số đối nhau có tổng bằng 0 và đối xứng nhau qua điểm gốc 0 trên trục số.',
    example: 'Số đối của \\frac{3}{5} là -\\frac{3}{5};  Số đối của -\\frac{2}{7} là \\frac{2}{7};  Số đối của 0 là 0.',
    rhymeOrTip: '💡 Khẩu quyết: "Số đối chỉ việc đổi dấu: Dương thành âm, âm thành dương!"',
    category: 'khai_niem'
  },
  {
    id: 'f3',
    title: 'Cộng & Trừ Hai Số Hữu Tỉ',
    chapterLesson: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    formula: '\\frac{a}{m} + \\frac{b}{m} = \\frac{a + b}{m}   và   \\frac{a}{m} - \\frac{b}{m} = \\frac{a - b}{m}  (m > 0)',
    meaning: 'Muốn cộng hoặc trừ hai số hữu tỉ, ta viết chúng dưới dạng phân số có cùng một mẫu dương, rồi cộng hoặc trừ các tử số và giữ nguyên mẫu số.',
    example: '-\\frac{2}{7} + \\frac{5}{7} = \\frac{-2 + 5}{7} = \\frac{3}{7};   \\frac{1}{2} - \\frac{1}{3} = \\frac{3}{6} - \\frac{2}{6} = \\frac{1}{6}',
    rhymeOrTip: '💡 Khẩu quyết: "Cùng mẫu: Giữ nguyên mẫu số, cộng trừ tử số!"',
    category: 'phep_tinh'
  },
  {
    id: 'f4',
    title: 'Nhân & Chia Số Hữu Tỉ',
    chapterLesson: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    formula: '\\frac{a}{b} · \\frac{c}{d} = \\frac{a · c}{b · d}   và   \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} · \\frac{d}{c}  (b, c, d ≠ 0)',
    meaning: 'Phép nhân: Lấy tử nhân tử, mẫu nhân mẫu.\nPhép chia: Nhân phân số thứ nhất với phân số nghịch đảo của phân số thứ hai.',
    example: '\\frac{-3}{4} · \\frac{2}{5} = \\frac{-6}{20} = -\\frac{3}{10};   \\frac{2}{3} : \\frac{4}{9} = \\frac{2}{3} · \\frac{9}{4} = \\frac{3}{2}',
    rhymeOrTip: '💡 Khẩu quyết: "Nhân: tử nhân tử, mẫu nhân mẫu. Chia: giữ nguyên đầu, nhân đảo ngược đuôi!"',
    category: 'phep_tinh'
  },
  {
    id: 'f5',
    title: 'Số Nghịch Đảo',
    chapterLesson: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    formula: 'Số nghịch đảo của \\frac{a}{b} là \\frac{b}{a}  (a, b ≠ 0)\n\\frac{a}{b} · \\frac{b}{a} = 1',
    meaning: 'Hai số có tích bằng 1 được gọi là hai số nghịch đảo của nhau. Số 0 không có số nghịch đảo.',
    example: 'Nghịch đảo của -\\frac{3}{5} là -\\frac{5}{3};  Nghịch đảo của 4 là \\frac{1}{4}.',
    rhymeOrTip: '💡 Khẩu quyết: "Nghịch đảo: Đảo ngược tử và mẫu, giữ nguyên dấu!"',
    category: 'phep_tinh'
  },
  {
    id: 'f6',
    title: 'Tính Chất Phân Phối',
    chapterLesson: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    formula: 'a · b + a · c = a · (b + c)',
    meaning: 'Đặt thừa số chung a ra ngoài dấu ngoặc để tính nhẩm hợp lý và nhanh chóng.',
    example: '\\frac{3}{7} · \\frac{5}{11} + \\frac{3}{7} · \\frac{6}{11} = \\frac{3}{7} · (\\frac{5}{11} + \\frac{6}{11}) = \\frac{3}{7} · 1 = \\frac{3}{7}',
    rhymeOrTip: '💡 Mẹo tính nhanh: "Thấy chung thừa số đặt ra, gom trong ngoặc lại hóa ra số tròn!"',
    category: 'phep_tinh'
  },
  {
    id: 'f7',
    title: 'Nhân & Chia Hai Luỹ Thừa Cùng Cơ Số',
    chapterLesson: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    formula: 'x^m · x^n = x^(m + n)\nx^m : x^n = x^(m - n)  (x ≠ 0, m ≥ n)',
    meaning: 'Khi nhân cùng cơ số: Giữ nguyên cơ số, CỘNG số mũ.\nKhi chia cùng cơ số: Giữ nguyên cơ số, TRỪ số mũ.',
    example: '2^3 · 2^4 = 2^(3 + 4) = 2^7;   (\\frac{1}{2})^5 : (\\frac{1}{2})^2 = (\\frac{1}{2})^3 = \\frac{1}{8}',
    rhymeOrTip: '💡 Khẩu quyết: "Nhân cùng cơ số thì CỘNG mũ, Chia cùng cơ số thì TRỪ mũ!"',
    category: 'luy_thua'
  },
  {
    id: 'f8',
    title: 'Luỹ Thừa của Luỹ Thừa (Mũ Tầng)',
    chapterLesson: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    formula: '(x^m)^n = x^(m · n)',
    meaning: 'Khi tính luỹ thừa của một luỹ thừa, giữ nguyên cơ số và NHÂN hai số mũ với nhau.',
    example: '(2^3)^2 = 2^(3 · 2) = 2^6 = 64;   [(\\frac{2}{3})^2]^3 = (\\frac{2}{3})^6',
    rhymeOrTip: '💡 Khẩu quyết: "Mũ tầng tầng lớp kề nhau: Giữ nguyên cơ số, NHÂN mau số tầng!"',
    category: 'luy_thua'
  },
  {
    id: 'f9',
    title: 'Luỹ Thừa của một Tích & một Thương',
    chapterLesson: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    formula: '(x · y)^n = x^n · y^n\n(\\frac{x}{y})^n = \\frac{x^n}{y^n}  (y ≠ 0)',
    meaning: 'Luỹ thừa của một tích bằng tích các luỹ thừa. Luỹ thừa của một thương bằng thương các luỹ thừa.',
    example: '(2 · 5)^3 = 2^3 · 5^3 = 8 · 125 = 1000;   (\\frac{2}{3})^3 = \\frac{2^3}{3^3} = \\frac{8}{27}',
    rhymeOrTip: '💡 Khẩu quyết: "Mũ chung ngoài ngoặc, chia đều cho cả tử và mẫu!"',
    category: 'luy_thua'
  },
  {
    id: 'f10',
    title: 'Quy Ước Mũ 0 và Dấu Luỹ Thừa',
    chapterLesson: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    formula: 'x^0 = 1  (với x ≠ 0)\n(-a)^(chẵn) > 0   và   (-a)^(lẻ) < 0',
    meaning: 'Mọi số hữu tỉ khác 0 mũ 0 đều bằng 1.\nSố âm mũ chẵn luôn ra số DƯƠNG. Số âm mũ lẻ luôn ra số ÂM.',
    example: '(-2026)^0 = 1;   (-\\frac{1}{2})^2 = +\\frac{1}{4};   (-\\frac{1}{2})^3 = -\\frac{1}{8}',
    rhymeOrTip: '💡 Khẩu quyết: "Mũ 0 bằng 1. Âm mũ chẵn hóa DƯƠNG, âm mũ lẻ vẫn ÂM!"',
    category: 'luy_thua'
  },
  {
    id: 'f11',
    title: 'Quy Tắc Dấu Ngoặc',
    chapterLesson: 'Bài 4: Quy tắc dấu ngoặc và chuyển vế',
    formula: '+(a - b + c) = a - b + c\n-(a - b + c) = -a + b - c',
    meaning: 'Khi bỏ ngoặc có dấu "+" đằng trước: GIỮ NGUYÊN dấu các số hạng.\nKhi bỏ ngoặc có dấu "-" đằng trước: ĐỔI DẤU tất cả các số hạng trong ngoặc (+ thành -, - thành +).',
    example: '-( \\frac{3}{5} - \\frac{1}{2} + 1 ) = -\\frac{3}{5} + \\frac{1}{2} - 1',
    rhymeOrTip: '💡 Khẩu quyết: "Trước ngoặc dấu TRỪ: Phá ngoặc một cái, đổi chiều dấu ngay!"',
    category: 'dau_ngoac_chuyen_ve'
  },
  {
    id: 'f12',
    title: 'Quy Tắc Chuyển Vế',
    chapterLesson: 'Bài 4: Quy tắc dấu ngoặc và chuyển vế',
    formula: 'x + a = b  ⇒  x = b - a\nx - a = b  ⇒  x = b + a',
    meaning: 'Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta PHẢI ĐỔI DẤU số hạng đó: dấu "+" đổi thành dấu "-", dấu "-" đổi thành dấu "+".',
    example: 'x - \\frac{1}{4} = \\frac{3}{4}  ⇒  x = \\frac{3}{4} + \\frac{1}{4} = \\frac{4}{4} = 1',
    rhymeOrTip: '💡 Khẩu quyết: "Qua cầu chuyển vế sang sông, nhớ ngay ĐỔI DẤU mới không sai lầm!"',
    category: 'dau_ngoac_chuyen_ve'
  }
];
