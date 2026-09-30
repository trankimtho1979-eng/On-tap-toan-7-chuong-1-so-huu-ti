import { Question, LevelIsland } from '../types/mathGame';

export const LEVEL_ISLANDS: LevelIsland[] = [
  {
    id: 'dao-so-huu-ti',
    title: 'Đảo Số Hữu Tỉ',
    subTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    description: 'Khái niệm phân số, biểu diễn trên trục số, tìm số đối và so sánh hai số hữu tỉ.',
    icon: '🏝️',
    color: 'from-amber-400 to-orange-500',
    borderColor: 'border-amber-400',
    badge: 'Huy hiệu Khám Phá',
    requiredStars: 0,
    questionCount: 8,
  },
  {
    id: 'thung-lung-phep-tinh',
    title: 'Thung Lũng Phép Tính',
    subTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    description: 'Thực hiện 4 phép tính cơ bản, tìm số nghịch đảo và áp dụng tính chất phân phối.',
    icon: '⚡',
    color: 'from-emerald-400 to-teal-500',
    borderColor: 'border-emerald-400',
    badge: 'Huy hiệu Tinh Thông',
    requiredStars: 0,
    questionCount: 8,
  },
  {
    id: 'dinh-nui-luy-thua',
    title: 'Đỉnh Núi Luỹ Thừa',
    subTitle: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    description: 'Nhân chia cùng cơ số, luỹ thừa của luỹ thừa, luỹ thừa của phân số và quy ước mũ 0.',
    icon: '🏔️',
    color: 'from-blue-400 to-indigo-500',
    borderColor: 'border-blue-400',
    badge: 'Huy hiệu Sấm Sét',
    requiredStars: 0,
    questionCount: 8,
  },
  {
    id: 'lau-dai-dau-ngoac',
    title: 'Lâu Đài Dấu Ngoặc & Chuyển Vế',
    subTitle: 'Bài 4: Quy tắc dấu ngoặc & chuyển vế',
    description: 'Bỏ ngoặc đổi dấu chuẩn xác, chuyển vế đổi dấu tìm x dễ dàng và thứ tự thực hiện phép tính.',
    icon: '🏰',
    color: 'from-purple-400 to-fuchsia-500',
    borderColor: 'border-purple-400',
    badge: 'Huy hiệu Dũng Sĩ',
    requiredStars: 0,
    questionCount: 8,
  },
  {
    id: 'dai-dau-truong-tong-on',
    title: 'Đại Đấu Trường Tổng Ôn',
    subTitle: 'Ôn tập trọng tâm Chương 1',
    description: 'Tổng hợp kiến thức trọng tâm cơ bản toàn bộ Chương 1 Toán 7.',
    icon: '👑',
    color: 'from-rose-500 to-pink-600',
    borderColor: 'border-rose-400',
    badge: 'Huy hiệu Quán Quân',
    requiredStars: 0,
    questionCount: 8,
  }
];

export const ALL_QUESTIONS: Question[] = [
  // ==========================================
  // LEVEL 1: BÀI 1 - TẬP HỢP CÁC SỐ HỮU TỈ
  // ==========================================
  {
    id: 'q1_1',
    lessonId: 'dao-so-huu-ti',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    question: 'Số hữu tỉ là số có thể viết được dưới dạng phân số nào sau đây?',
    options: [
      '\\frac{a}{b} với a, b ∈ ℤ và b ≠ 0',
      '\\frac{a}{b} với a, b ∈ ℕ và b > 0',
      '\\frac{a}{b} với a ∈ ℤ và b = 0',
      '\\frac{a}{b} với a, b là số bất kì'
    ],
    correctIndex: 0,
    explanation: 'Theo định nghĩa SGK Toán 7 Kết nối tri thức: Số hữu tỉ là số viết được dưới dạng phân số \\frac{a}{b} với a, b ∈ ℤ và mẫu số b ≠ 0.',
    formulaTip: 'Định nghĩa: ℚ = { \\frac{a}{b} | a, b ∈ ℤ, b ≠ 0 }',
    trapNote: 'Mẫu số b bắt buộc phải khác 0!',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q1_2',
    lessonId: 'dao-so-huu-ti',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    question: 'Số đối của số hữu tỉ -\\frac{3}{5} là số nào?',
    options: ['\\frac{3}{5}', '-\\frac{5}{3}', '\\frac{5}{3}', '-\\frac{3}{-5}'],
    correctIndex: 0,
    explanation: 'Hai số đối nhau có tổng bằng 0. Số đối của số -\\frac{a}{b} là \\frac{a}{b}. Vì vậy, số đối của -\\frac{3}{5} là \\frac{3}{5}.',
    formulaTip: 'Số đối của x là -x, và -(-\\frac{a}{b}) = \\frac{a}{b}',
    trapNote: 'Tránh nhầm với số nghịch đảo -\\frac{5}{3}!',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q1_3',
    lessonId: 'dao-so-huu-ti',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    question: 'Số 0 có phải là số hữu tỉ không?',
    options: [
      'Số 0 là số hữu tỉ (0 = \\frac{0}{1})',
      'Số 0 không phải là số hữu tỉ',
      'Số 0 là số vô tỉ',
      'Số 0 là số hữu tỉ dương'
    ],
    correctIndex: 0,
    explanation: 'Số 0 viết được dưới dạng phân số \\frac{0}{1} với 0, 1 ∈ ℤ và 1 ≠ 0, nên 0 là số hữu tỉ. Số 0 không là số hữu tỉ âm, cũng không là số hữu tỉ dương.',
    formulaTip: '0 ∈ ℚ (vì 0 = \\frac{0}{1})',
    trapNote: 'Số 0 vẫn thuộc tập ℚ nhưng không âm và không dương.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q1_4',
    lessonId: 'dao-so-huu-ti',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    question: 'Trên trục số nằm ngang, điểm biểu diễn số -\\frac{1}{2} nằm ở đâu so với điểm 0?',
    options: [
      'Nằm ở bên trái điểm 0',
      'Nằm ở bên phải điểm 0',
      'Trùng với điểm 0',
      'Không xác định được'
    ],
    correctIndex: 0,
    explanation: 'Vì -\\frac{1}{2} < 0 (là số hữu tỉ âm), nên trên trục số có chiều từ trái sang phải, điểm -\\frac{1}{2} luôn nằm bên trái điểm gốc 0.',
    formulaTip: 'Số âm < 0 (bên trái gốc 0), Số dương > 0 (bên phải gốc 0)',
    trapNote: 'Trục số chuẩn có chiều dương hướng từ trái qua phải.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q1_5',
    lessonId: 'dao-so-huu-ti',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    question: 'So sánh hai số hữu tỉ: x = -\\frac{1}{3} và y = -\\frac{2}{3}',
    options: [
      'x > y',
      'x < y',
      'x = y',
      'Không so sánh được'
    ],
    correctIndex: 0,
    explanation: 'Hai phân số đã cùng mẫu dương là 3. So sánh tử số: vì -1 > -2 nên -\\frac{1}{3} > -\\frac{2}{3}. Do đó x > y.',
    formulaTip: 'So sánh số âm: Số nào có giá trị tuyệt đối nhỏ hơn thì lớn hơn',
    trapNote: 'Chú ý: -1 lớn hơn -2!',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q1_6',
    lessonId: 'dao-so-huu-ti',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    question: 'Số thập phân -0,5 được viết dưới dạng phân số tối giản là:',
    options: [
      '-\\frac{1}{2}',
      '-\\frac{5}{10}',
      '\\frac{1}{2}',
      '-\\frac{1}{5}'
    ],
    correctIndex: 0,
    explanation: '-0,5 = -\\frac{5}{10}. Rút gọn cả tử và mẫu cho 5 ta được phân số tối giản là -\\frac{1}{2}.',
    formulaTip: 'Rút gọn: chia cả tử và mẫu cho ƯCLN = 5',
    trapNote: '-\\frac{5}{10} chưa phải là phân số tối giản!',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q1_7',
    lessonId: 'dao-so-huu-ti',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    question: 'Tập hợp các số hữu tỉ được kí hiệu bằng chữ cái nào?',
    options: ['ℚ', 'ℤ', 'ℕ', 'ℝ'],
    correctIndex: 0,
    explanation: 'Tập hợp các số hữu tỉ được kí hiệu là ℚ (bắt nguồn từ từ Quotient - thương số). ℕ là tập số tự nhiên, ℤ là tập số nguyên.',
    formulaTip: 'ℕ ⊂ ℤ ⊂ ℚ',
    trapNote: 'Kí hiệu ℤ là số nguyên, ℚ mới là số hữu tỉ.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q1_8',
    lessonId: 'dao-so-huu-ti',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    question: 'Số đối của số hữu tỉ \\frac{4}{7} là:',
    options: ['-\\frac{4}{7}', '\\frac{7}{4}', '-\\frac{7}{4}', '\\frac{-4}{-7}'],
    correctIndex: 0,
    explanation: 'Số đối của số dương \\frac{4}{7} là số âm -\\frac{4}{7}.',
    formulaTip: 'Số đối của a là -a',
    trapNote: 'Đổi dấu của phân số, không đảo ngược tử và mẫu.',
    difficulty: 'easy',
    points: 10
  },

  // ==========================================
  // LEVEL 2: BÀI 2 - CỘNG, TRỪ, NHÂN, CHIA SỐ HỮU TỈ
  // ==========================================
  {
    id: 'q2_1',
    lessonId: 'thung-lung-phep-tinh',
    lessonTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    question: 'Kết quả của phép cộng: -\\frac{2}{5} + \\frac{3}{5} là:',
    options: ['\\frac{1}{5}', '-\\frac{1}{5}', '\\frac{5}{5} = 1', '-\\frac{5}{5} = -1'],
    correctIndex: 0,
    explanation: 'Hai phân số cùng mẫu số 5: ( -2 + 3 ) / 5 = \\frac{1}{5}.',
    formulaTip: '\\frac{a}{m} + \\frac{b}{m} = \\frac{a + b}{m}',
    trapNote: 'Chú ý dấu của tử số: -2 + 3 = +1.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q2_2',
    lessonId: 'thung-lung-phep-tinh',
    lessonTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    question: 'Tính giá trị của: \\frac{1}{2} - \\frac{1}{3}',
    options: ['\\frac{1}{6}', '-\\frac{1}{6}', '\\frac{0}{1} = 0', '\\frac{1}{5}'],
    correctIndex: 0,
    explanation: 'Quy đồng mẫu chung là 6:\n\\frac{1}{2} = \\frac{3}{6}\n\\frac{1}{3} = \\frac{2}{6}\nTa có: \\frac{3}{6} - \\frac{2}{6} = \\frac{1}{6}.',
    formulaTip: 'Quy đồng mẫu: Mẫu chung của 2 và 3 là 6',
    trapNote: 'Không được lấy tử trừ tử, mẫu trừ mẫu!',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q2_3',
    lessonId: 'thung-lung-phep-tinh',
    lessonTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    question: 'Kết quả của phép nhân: (-\\frac{3}{4}) · \\frac{2}{3} là:',
    options: ['-\\frac{1}{2}', '\\frac{1}{2}', '-\\frac{6}{12}', '-\\frac{1}{4}'],
    correctIndex: 0,
    explanation: 'Rút gọn chéo 3 với 3 và 2 với 4:\n(-\\frac{3}{4}) · \\frac{2}{3} = \\frac{-3 · 2}{4 · 3} = \\frac{-6}{12} = -\\frac{1}{2}.',
    formulaTip: '\\frac{a}{b} · \\frac{c}{d} = \\frac{a · c}{b · d}',
    trapNote: 'Rút gọn phân số về dạng tối giản: -\\frac{1}{2}.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q2_4',
    lessonId: 'thung-lung-phep-tinh',
    lessonTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    question: 'Số nghịch đảo của số hữu tỉ -\\frac{3}{7} là:',
    options: ['-\\frac{7}{3}', '\\frac{3}{7}', '\\frac{7}{3}', '-\\frac{3}{-7}'],
    correctIndex: 0,
    explanation: 'Số nghịch đảo của phân số \\frac{a}{b} (a, b ≠ 0) là \\frac{b}{a}. Vì vậy số nghịch đảo của -\\frac{3}{7} là -\\frac{7}{3}.',
    formulaTip: 'Số nghịch đảo của x là \\frac{1}{x} (tích của chúng bằng 1)',
    trapNote: 'Số nghịch đảo giữ nguyên dấu, chỉ đảo ngược vị trí tử và mẫu.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q2_5',
    lessonId: 'thung-lung-phep-tinh',
    lessonTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    question: 'Kết quả của phép chia: \\frac{2}{3} : \\frac{4}{9} là:',
    options: ['\\frac{3}{2}', '\\frac{2}{3}', '\\frac{8}{27}', '-\\frac{3}{2}'],
    correctIndex: 0,
    explanation: 'Muốn chia cho một phân số, ta nhân với phân số nghịch đảo:\n\\frac{2}{3} : \\frac{4}{9} = \\frac{2}{3} · \\frac{9}{4} = \\frac{2 · 9}{3 · 4} = \\frac{18}{12} = \\frac{3}{2}.',
    formulaTip: '\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} · \\frac{d}{c}',
    trapNote: 'Nhớ đổi dấu chia thành nhân và đảo ngược phân số thứ hai.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q2_6',
    lessonId: 'thung-lung-phep-tinh',
    lessonTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    question: 'Tính nhanh giá trị: \\frac{3}{7} · \\frac{5}{11} + \\frac{3}{7} · \\frac{6}{11}',
    options: ['\\frac{3}{7}', '1', '\\frac{11}{7}', '\\frac{6}{7}'],
    correctIndex: 0,
    explanation: 'Áp dụng tính chất phân phối đặt thừa số chung \\frac{3}{7} ra ngoài:\n\\frac{3}{7} · ( \\frac{5}{11} + \\frac{6}{11} ) = \\frac{3}{7} · \\frac{11}{11} = \\frac{3}{7} · 1 = \\frac{3}{7}.',
    formulaTip: 'a · b + a · c = a · (b + c)',
    trapNote: 'Tính nhẩm bằng cách nhóm thừa số chung nhanh hơn quy đồng rất nhiều!',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q2_7',
    lessonId: 'thung-lung-phep-tinh',
    lessonTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    question: 'Tính: 1,2 + (-3,5)',
    options: ['-2,3', '2,3', '-4,7', '4,7'],
    correctIndex: 0,
    explanation: 'Cộng hai số khác dấu: lấy số có phần số lớn hơn trừ số có phần số nhỏ hơn rồi đặt dấu của số lớn hơn: -(3,5 - 1,2) = -2,3.',
    formulaTip: 'Cộng hai số khác dấu: mang dấu của số có giá trị tuyệt đối lớn hơn',
    trapNote: 'Kết quả mang dấu âm: -2,3.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q2_8',
    lessonId: 'thung-lung-phep-tinh',
    lessonTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    question: 'Bạn Lan có 60 000 đồng. Lan dùng \\frac{2}{3} số tiền đó để mua sách. Hỏi Lan đã dùng bao nhiêu tiền mua sách?',
    options: ['40 000 đồng', '20 000 đồng', '30 000 đồng', '50 000 đồng'],
    correctIndex: 0,
    explanation: 'Số tiền Lan dùng mua sách là: 60 000 · \\frac{2}{3} = \\frac{60 000 · 2}{3} = 40 000 (đồng).',
    formulaTip: 'Tìm phân số \\frac{m}{n} của số a: tính a · \\frac{m}{n}',
    trapNote: 'Đề bài hỏi số tiền mua sách (40 000 đ), không hỏi số tiền còn lại (20 000 đ).',
    difficulty: 'easy',
    points: 10
  },

  // ==========================================
  // LEVEL 3: BÀI 3 - LUỸ THỪA VỚI SỐ MŨ TỰ NHIÊN
  // ==========================================
  {
    id: 'q3_1',
    lessonId: 'dinh-nui-luy-thua',
    lessonTitle: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    question: 'Công thức nhân hai luỹ thừa cùng cơ số là:',
    options: [
      'x^m · x^n = x^(m + n)',
      'x^m · x^n = x^(m · n)',
      'x^m · x^n = (2x)^(m + n)',
      'x^m · x^n = x^(m - n)'
    ],
    correctIndex: 0,
    explanation: 'Khi nhân hai luỹ thừa cùng cơ số, ta giữ nguyên cơ số và CỘNG các số mũ: x^m · x^n = x^(m + n).',
    formulaTip: 'Nhân cùng cơ số: Giữ nguyên cơ số, CỘNG số mũ',
    trapNote: 'Không nhân hai số mũ với nhau!',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q3_2',
    lessonId: 'dinh-nui-luy-thua',
    lessonTitle: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    question: 'Giá trị của (- \\frac{1}{2})^3 là:',
    options: ['-\\frac{1}{8}', '\\frac{1}{8}', '-\\frac{1}{6}', '-\\frac{3}{2}'],
    correctIndex: 0,
    explanation: '(- \\frac{1}{2})^3 = (- \\frac{1}{2}) · (- \\frac{1}{2}) · (- \\frac{1}{2}) = \\frac{(-1)^3}{2^3} = -\\frac{1}{8}.',
    formulaTip: '(\\frac{a}{b})^n = \\frac{a^n}{b^n}; Số âm mũ lẻ ra số âm',
    trapNote: '2^3 = 2 · 2 · 2 = 8, không phải 2 · 3 = 6!',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q3_3',
    lessonId: 'dinh-nui-luy-thua',
    lessonTitle: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    question: 'Với x ≠ 0, theo quy ước giá trị của x^0 bằng bao nhiêu?',
    options: ['1', '0', 'x', '-1'],
    correctIndex: 0,
    explanation: 'Theo quy ước trong SGK Toán 7: Mọi số hữu tỉ x khác 0 có số mũ bằng 0 đều có giá trị bằng 1: x^0 = 1 (với x ≠ 0).',
    formulaTip: 'Quy ước: x^0 = 1 (với mọi x ≠ 0)',
    trapNote: 'Bất kì số nào khác 0 mũ 0 đều bằng 1, không phải 0!',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q3_4',
    lessonId: 'dinh-nui-luy-thua',
    lessonTitle: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    question: 'Công thức luỹ thừa của một luỹ thừa (mũ tầng) là:',
    options: [
      '(x^m)^n = x^(m · n)',
      '(x^m)^n = x^(m + n)',
      '(x^m)^n = x^(m - n)',
      '(x^m)^n = (x · m)^n'
    ],
    correctIndex: 0,
    explanation: 'Khi tính luỹ thừa của một luỹ thừa, ta giữ nguyên cơ số và NHÂN hai số mũ với nhau: (x^m)^n = x^(m · n).',
    formulaTip: 'Luỹ thừa của luỹ thừa: (x^m)^n = x^(m · n)',
    trapNote: 'Phân biệt: x^m · x^n thì cộng mũ, còn (x^m)^n thì nhân mũ.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q3_5',
    lessonId: 'dinh-nui-luy-thua',
    lessonTitle: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    question: 'Tính giá trị thương: (\\frac{3}{5})^4 : (\\frac{3}{5})^2',
    options: ['\\frac{9}{25}', '\\frac{6}{10}', '\\frac{3}{5}', '1'],
    correctIndex: 0,
    explanation: 'Chia hai luỹ thừa cùng cơ số: (\\frac{3}{5})^4 : (\\frac{3}{5})^2 = (\\frac{3}{5})^(4 - 2) = (\\frac{3}{5})^2 = \\frac{3^2}{5^2} = \\frac{9}{25}.',
    formulaTip: 'x^m : x^n = x^(m - n) (với x ≠ 0, m ≥ n)',
    trapNote: 'Giữ nguyên cơ số, lấy số mũ 4 trừ 2 được số mũ 2.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q3_6',
    lessonId: 'dinh-nui-luy-thua',
    lessonTitle: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    question: 'Giá trị của (- \\frac{1}{2})^2 là:',
    options: ['\\frac{1}{4}', '-\\frac{1}{4}', '\\frac{1}{2}', '-\\frac{1}{2}'],
    correctIndex: 0,
    explanation: '(- \\frac{1}{2})^2 = (- \\frac{1}{2}) · (- \\frac{1}{2}) = +\\frac{1}{4}. Số âm nâng lên luỹ thừa bậc chẵn luôn cho kết quả dương.',
    formulaTip: 'Số âm mũ chẵn LUÔN DƯƠNG: (-a)^(2k) > 0',
    trapNote: 'Mũ chẵn làm dấu âm biến thành dấu dương: +\\frac{1}{4}.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q3_7',
    lessonId: 'dinh-nui-luy-thua',
    lessonTitle: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    question: 'Khẳng định nào sau đây là ĐÚNG?',
    options: [
      '(x · y)^n = x^n · y^n',
      '(x · y)^n = x · y^n',
      '(x · y)^n = x^n + y^n',
      '(x + y)^n = x^n + y^n'
    ],
    correctIndex: 0,
    explanation: 'Luỹ thừa của một tích bằng tích các luỹ thừa: (x · y)^n = x^n · y^n.',
    formulaTip: '(x · y)^n = x^n · y^n',
    trapNote: '(x + y)^n KHÔNG bằng x^n + y^n!',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q3_8',
    lessonId: 'dinh-nui-luy-thua',
    lessonTitle: 'Bài 3: Luỹ thừa với số mũ tự nhiên',
    question: 'Tính giá trị của: (\\frac{2}{3})^2',
    options: ['\\frac{4}{9}', '\\frac{4}{6}', '\\frac{2}{9}', '\\frac{4}{3}'],
    correctIndex: 0,
    explanation: '(\\frac{2}{3})^2 = \\frac{2^2}{3^2} = \\frac{4}{9}.',
    formulaTip: '(\\frac{a}{b})^n = \\frac{a^n}{b^n}',
    trapNote: 'Bình phương cả tử số (2^2 = 4) và mẫu số (3^2 = 9).',
    difficulty: 'easy',
    points: 10
  },

  // ==========================================
  // LEVEL 4: BÀI 4 - QUY TẮC DẤU NGOẶC VÀ CHUYỂN VẾ
  // ==========================================
  {
    id: 'q4_1',
    lessonId: 'lau-dai-dau-ngoac',
    lessonTitle: 'Bài 4: Quy tắc dấu ngoặc và chuyển vế',
    question: 'Khi bỏ dấu ngoặc có dấu TRỪ (-) đằng trước, ta phải:',
    options: [
      'Đổi dấu tất cả các số hạng trong ngoặc (+ thành - và - thành +)',
      'Giữ nguyên dấu tất cả các số hạng trong ngoặc',
      'Chỉ đổi dấu số hạng đầu tiên',
      'Đổi dấu ngoặc thành dấu cộng'
    ],
    correctIndex: 0,
    explanation: 'Quy tắc dấu ngoặc: Khi bỏ dấu ngoặc có dấu trừ (-) đằng trước, ta phải đổi dấu tất cả các số hạng trong dấu ngoặc: dấu "+" đổi thành dấu "-", dấu "-" đổi thành dấu "+".',
    formulaTip: 'Trước ngoặc có dấu "-" ➜ ĐỔI DẤU TẤT CẢ các số hạng bên trong',
    trapNote: 'Phải đổi dấu tất cả các số hạng trong ngoặc, không được bỏ sót!',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q4_2',
    lessonId: 'lau-dai-dau-ngoac',
    lessonTitle: 'Bài 4: Quy tắc dấu ngoặc và chuyển vế',
    question: 'Bỏ dấu ngoặc của biểu thức: -(a - b + c) ta được:',
    options: [
      '-a + b - c',
      '-a - b + c',
      '-a - b - c',
      'a + b - c'
    ],
    correctIndex: 0,
    explanation: 'Trước ngoặc có dấu trừ: a đổi thành -a; -b đổi thành +b; +c đổi thành -c. Kết quả: -a + b - c.',
    formulaTip: '-(a - b + c) = -a + b - c',
    trapNote: 'Dấu trừ gặp -b sẽ đổi thành +b.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q4_3',
    lessonId: 'lau-dai-dau-ngoac',
    lessonTitle: 'Bài 4: Quy tắc dấu ngoặc và chuyển vế',
    question: 'Quy tắc chuyển vế nói rằng: Khi chuyển một số hạng từ vế này sang vế kia của đẳng thức, ta phải:',
    options: [
      'Đổi dấu số hạng đó',
      'Giữ nguyên dấu số hạng đó',
      'Nghịch đảo số hạng đó',
      'Nhân số hạng đó với 2'
    ],
    correctIndex: 0,
    explanation: 'Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó: dấu "+" đổi thành dấu "-" và dấu "-" đổi thành dấu "+".',
    formulaTip: 'Chuyển vế thì PHẢI ĐỔI DẤU',
    trapNote: 'Chuyển vế là đổi dấu cộng/trừ, không phải phép nghịch đảo.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q4_4',
    lessonId: 'lau-dai-dau-ngoac',
    lessonTitle: 'Bài 4: Quy tắc dấu ngoặc và chuyển vế',
    question: 'Tìm x biết: x + \\frac{1}{4} = \\frac{3}{4}',
    options: ['\\frac{1}{2}', '1', '\\frac{4}{4}', '-\\frac{1}{2}'],
    correctIndex: 0,
    explanation: 'Chuyển \\frac{1}{4} sang vế phải đổi dấu thành -\\frac{1}{4}:\nx = \\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}.',
    formulaTip: 'x + a = b ⇒ x = b - a',
    trapNote: 'Nhớ đổi dấu: chuyển +\\frac{1}{4} thành -\\frac{1}{4}.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q4_5',
    lessonId: 'lau-dai-dau-ngoac',
    lessonTitle: 'Bài 4: Quy tắc dấu ngoặc và chuyển vế',
    question: 'Tìm x biết: x - \\frac{1}{3} = \\frac{2}{3}',
    options: ['1', '\\frac{1}{3}', '-\\frac{1}{3}', '0'],
    correctIndex: 0,
    explanation: 'Chuyển -\\frac{1}{3} sang vế phải đổi dấu thành +\\frac{1}{3}:\nx = \\frac{2}{3} + \\frac{1}{3} = \\frac{3}{3} = 1.',
    formulaTip: 'x - a = b ⇒ x = b + a',
    trapNote: '-\\frac{1}{3} chuyển vế thành +\\frac{1}{3}.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q4_6',
    lessonId: 'lau-dai-dau-ngoac',
    lessonTitle: 'Bài 4: Quy tắc dấu ngoặc và chuyển vế',
    question: 'Khi tính biểu thức có các loại ngoặc, thứ tự thực hiện đúng là:',
    options: [
      'Ngoặc tròn ( ) ➜ ngoặc vuông [ ] ➜ ngoặc nhọn { }',
      'Ngoặc nhọn { } ➜ ngoặc vuông [ ] ➜ ngoặc tròn ( )',
      'Ngoặc vuông [ ] ➜ ngoặc tròn ( ) ➜ ngoặc nhọn { }',
      'Thực hiện ngoặc nào trước cũng được'
    ],
    correctIndex: 0,
    explanation: 'Thứ tự thực hiện phép tính đối với biểu thức có dấu ngoặc: thực hiện trong ngoặc tròn ( ) trước, rồi đến ngoặc vuông [ ], cuối cùng là ngoặc nhọn { }.',
    formulaTip: 'Thứ tự từ trong ra ngoài: ( ) ➜ [ ] ➜ { }',
    trapNote: 'Luôn làm ngoặc tròn trong cùng trước.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q4_7',
    lessonId: 'lau-dai-dau-ngoac',
    lessonTitle: 'Bài 4: Quy tắc dấu ngoặc và chuyển vế',
    question: 'Bỏ dấu ngoặc của biểu thức: + (a - b + c) ta được:',
    options: [
      'a - b + c',
      '-a + b - c',
      'a + b + c',
      '-a - b - c'
    ],
    correctIndex: 0,
    explanation: 'Khi bỏ dấu ngoặc có dấu cộng (+) đằng trước, ta giữ nguyên dấu của tất cả các số hạng trong ngoặc: + (a - b + c) = a - b + c.',
    formulaTip: 'Trước ngoặc có dấu "+" ➜ GIỮ NGUYÊN DẤU',
    trapNote: 'Dấu cộng đằng trước ngoặc thì giữ nguyên toàn bộ dấu bên trong.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q4_8',
    lessonId: 'lau-dai-dau-ngoac',
    lessonTitle: 'Bài 4: Quy tắc dấu ngoặc và chuyển vế',
    question: 'Tính nhanh: ( \\frac{3}{5} + \\frac{1}{4} ) - \\frac{1}{4}',
    options: ['\\frac{3}{5}', '\\frac{1}{4}', '0', '1'],
    correctIndex: 0,
    explanation: 'Bỏ dấu ngoặc: \\frac{3}{5} + \\frac{1}{4} - \\frac{1}{4} = \\frac{3}{5} + 0 = \\frac{3}{5}.',
    formulaTip: 'Bỏ ngoặc để triệt tiêu các số đối nhau: +\\frac{1}{4} - \\frac{1}{4} = 0',
    trapNote: 'Không cần quy đồng, nhóm \\frac{1}{4} - \\frac{1}{4} = 0 sẽ tính ngay được kết quả!',
    difficulty: 'easy',
    points: 10
  },

  // ==========================================
  // LEVEL 5: ĐẠI ĐẤU TRƯỜNG TỔNG ÔN CHƯƠNG 1
  // ==========================================
  {
    id: 'q5_1',
    lessonId: 'dai-dau-truong-tong-on',
    lessonTitle: 'Tổng ôn Chương 1: Số hữu tỉ',
    question: 'Số nào sau đây là số hữu tỉ?',
    options: [
      '-2,5',
      'Số Pi (π)',
      'Số thập phân vô hạn không tuần hoàn',
      'Phân số có mẫu bằng 0'
    ],
    correctIndex: 0,
    explanation: '-2,5 viết được dưới dạng phân số -\\frac{25}{10} = -\\frac{5}{2} nên là số hữu tỉ. Số Pi (π) và số thập phân vô hạn không tuần hoàn là số vô tỉ.',
    formulaTip: 'Mọi số thập phân hữu hạn đều là số hữu tỉ',
    trapNote: '-2,5 = -\\frac{5}{2} ∈ ℚ.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q5_2',
    lessonId: 'dai-dau-truong-tong-on',
    lessonTitle: 'Tổng ôn Chương 1: Số hữu tỉ',
    question: 'Tìm x biết: x^2 = \\frac{9}{16}',
    options: [
      'x = \\frac{3}{4} hoặc x = -\\frac{3}{4}',
      'Chỉ x = \\frac{3}{4}',
      'Chỉ x = -\\frac{3}{4}',
      'x = \\frac{9}{8}'
    ],
    correctIndex: 0,
    explanation: 'Vì (\\frac{3}{4})^2 = \\frac{9}{16} và (-\\frac{3}{4})^2 = \\frac{9}{16} nên x có hai giá trị là \\frac{3}{4} hoặc -\\frac{3}{4}.',
    formulaTip: 'x^2 = a (a > 0) luôn có 2 nghiệm đối nhau: x = ±√a',
    trapNote: 'Đừng quên nghiệm âm -\\frac{3}{4} nhé!',
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'q5_3',
    lessonId: 'dai-dau-truong-tong-on',
    lessonTitle: 'Tổng ôn Chương 1: Số hữu tỉ',
    question: 'Tìm x biết: x + \\frac{1}{2} = \\frac{5}{2}',
    options: ['2', '3', '1', '\\frac{3}{2}'],
    correctIndex: 0,
    explanation: 'Chuyển vế: x = \\frac{5}{2} - \\frac{1}{2} = \\frac{4}{2} = 2.',
    formulaTip: 'Quy tắc chuyển vế: x = \\frac{5}{2} - \\frac{1}{2}',
    trapNote: '\\frac{4}{2} rút gọn bằng 2.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q5_4',
    lessonId: 'dai-dau-truong-tong-on',
    lessonTitle: 'Tổng ôn Chương 1: Số hữu tỉ',
    question: 'Nhiệt độ buổi sáng là -2°C, đến trưa tăng 5°C. Nhiệt độ buổi trưa là:',
    options: ['3°C', '-7°C', '7°C', '-3°C'],
    correctIndex: 0,
    explanation: 'Nhiệt độ buổi trưa là: -2 + 5 = 3°C.',
    formulaTip: 'Tăng lên là phép cộng (+)',
    trapNote: '-2 + 5 = +3°C.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q5_5',
    lessonId: 'dai-dau-truong-tong-on',
    lessonTitle: 'Tổng ôn Chương 1: Số hữu tỉ',
    question: 'Giá trị của biểu thức: (-\\frac{2}{3})^0 + (\\frac{1}{2})^2 là:',
    options: ['\\frac{5}{4}', '\\frac{1}{4}', '1', '0'],
    correctIndex: 0,
    explanation: '(- \\frac{2}{3})^0 = 1\n(\\frac{1}{2})^2 = \\frac{1}{4}\nTổng = 1 + \\frac{1}{4} = \\frac{4}{4} + \\frac{1}{4} = \\frac{5}{4}.',
    formulaTip: 'x^0 = 1 và (\\frac{1}{2})^2 = \\frac{1}{4}',
    trapNote: 'Bất kì số nào khác 0 mũ 0 đều bằng 1.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q5_6',
    lessonId: 'dai-dau-truong-tong-on',
    lessonTitle: 'Tổng ôn Chương 1: Số hữu tỉ',
    question: 'Tính: \\frac{5}{9} · \\frac{7}{13} + \\frac{5}{9} · \\frac{6}{13}',
    options: ['\\frac{5}{9}', '1', '\\frac{13}{9}', '\\frac{35}{117}'],
    correctIndex: 0,
    explanation: 'Đặt thừa số chung \\frac{5}{9}:\n\\frac{5}{9} · ( \\frac{7}{13} + \\frac{6}{13} ) = \\frac{5}{9} · \\frac{13}{13} = \\frac{5}{9} · 1 = \\frac{5}{9}.',
    formulaTip: 'Áp dụng tính chất phân phối: a · (b + c)',
    trapNote: '\\frac{7}{13} + \\frac{6}{13} = \\frac{13}{13} = 1.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q5_7',
    lessonId: 'dai-dau-truong-tong-on',
    lessonTitle: 'Tổng ôn Chương 1: Số hữu tỉ',
    question: 'Tìm x biết: x · \\frac{1}{2} = -\\frac{1}{4}',
    options: ['-\\frac{1}{2}', '\\frac{1}{2}', '-\\frac{1}{8}', '-\\frac{1}{6}'],
    correctIndex: 0,
    explanation: 'x = (-\\frac{1}{4}) : \\frac{1}{2} = (-\\frac{1}{4}) · \\frac{2}{1} = -\\frac{2}{4} = -\\frac{1}{2}.',
    formulaTip: 'Muốn tìm thừa số chưa biết, lấy tích chia cho thừa số đã biết',
    trapNote: 'Chia cho \\frac{1}{2} là nhân với 2.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'q5_8',
    lessonId: 'dai-dau-truong-tong-on',
    lessonTitle: 'Tổng ôn Chương 1: Số hữu tỉ',
    question: 'So sánh hai phân số: -\\frac{2}{5} và -\\frac{3}{5}',
    options: [
      '-\\frac{2}{5} > -\\frac{3}{5}',
      '-\\frac{2}{5} < -\\frac{3}{5}',
      '-\\frac{2}{5} = -\\frac{3}{5}',
      'Không so sánh được'
    ],
    correctIndex: 0,
    explanation: 'Vì cùng mẫu số dương là 5, ta so sánh tử: vì -2 > -3 nên -\\frac{2}{5} > -\\frac{3}{5}.',
    formulaTip: 'So sánh hai phân số cùng mẫu dương: tử lớn hơn thì phân số lớn hơn',
    trapNote: '-2 lớn hơn -3, vì vậy -\\frac{2}{5} lớn hơn -\\frac{3}{5}.',
    difficulty: 'easy',
    points: 10
  }
];

export const getQuestionsByLevel = (levelId: string): Question[] => {
  return ALL_QUESTIONS.filter((q) => q.lessonId === levelId);
};
