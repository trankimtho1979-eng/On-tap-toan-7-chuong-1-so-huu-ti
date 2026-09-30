import { CharacterMascot } from '../types/mathGame';

export const MASCOTS: CharacterMascot[] = [
  {
    id: 'mimi',
    name: 'Mimi',
    nickname: 'Mèo Mimi Vui Vẻ',
    bio: 'Chú mèo cam nhanh nhẹn, thích tính nhẩm nhanh và luôn cổ vũ nhiệt tình!',
    themeColor: 'from-amber-400 to-orange-500',
    avatarBg: 'bg-amber-100 border-amber-300 text-amber-600',
    badge: '🐾 Thợ Săn Số Hữu Tỉ',
    quoteCorrect: [
      'Meow! Bạn đỉnh quá, đáp án chính xác 100%!',
      'Tuyệt vời! Não bạn nhảy số nhanh như mèo bắt chuột!',
      'Chuẩn không cần chỉnh! Tiến lên nào bạn ơi!',
      'Meow meow! Điểm số đang tăng vèo vèo rồi nè!'
    ],
    quoteWrong: [
      'Đừng buồn nhé! Mèo Mimi cùng bạn đọc kĩ lời giải bên dưới nha!',
      'Hơi tiếc một xíu, nhớ đọc kỹ quy tắc dấu nhé!',
      'Thất bại là mẹ thành công! Làm lại câu sau nào!',
      'Không sao cả, mèo Mimi tin bạn sẽ nhớ lâu hơn sau câu này!'
    ],
    quoteCheer: [
      'Cố lên nào bạn ơi! Vương quốc Toán 7 đang chờ bạn khám phá!',
      'Toán học là trò chơi của trí tuệ, cùng Mimi chinh phục nhé!'
    ]
  },
  {
    id: 'puki',
    name: 'Puki',
    nickname: 'Thỏ Puki Thông Thái',
    bio: 'Cô thỏ đeo kính cận thông thái, nắm giữ bản đồ kho báu số hữu tỉ và trục số.',
    themeColor: 'from-pink-400 to-rose-500',
    avatarBg: 'bg-pink-100 border-pink-300 text-pink-600',
    badge: '🥕 Thần Đồng Phân Số',
    quoteCorrect: [
      'Cực kỳ chính xác! Bạn nắm kiến thức siêu chắc đấy!',
      'Wow, Thỏ Puki khâm phục tư duy logic của bạn luôn!',
      'Thêm một ngôi sao sáng lấp lánh cho bạn!',
      'Thông minh lắm! Số hữu tỉ đã nằm gọn trong tay bạn!'
    ],
    quoteWrong: [
      'Ôi chao! Bạn xem lại phân số và dấu âm/dương nha!',
      'Kiểm tra lại chút xíu nè, xem bí kíp của Puki bên dưới nhé!',
      'Vấp ngã ở đâu đứng dậy ở đó! Đọc lời giải rồi làm tiếp nha!',
      'Puki ở đây hướng dẫn bạn, đừng lo lắng nhé!'
    ],
    quoteCheer: [
      'Chăm chỉ mỗi ngày, điểm 10 toán trong tầm tay!',
      'Số hữu tỉ viết được dưới dạng a/b (b khác 0) đó nha!'
    ]
  },
  {
    id: 'kuma',
    name: 'Kuma',
    nickname: 'Gấu Kuma Bác Học',
    bio: 'Bác gấu đội mũ cử nhân, chuyên gia các công thức luỹ thừa và số mũ tự nhiên.',
    themeColor: 'from-emerald-400 to-teal-600',
    avatarBg: 'bg-emerald-100 border-emerald-300 text-emerald-600',
    badge: '🎓 Bậc Thầy Luỹ Thừa',
    quoteCorrect: [
      'Bác Kuma khen bạn! Áp dụng công thức rất chuẩn xác!',
      'Xuất sắc! Luỹ thừa tầng tầng lớp lớp cũng không làm khó được bạn!',
      'Đẳng cấp học giả nhí! Tiếp tục phát huy nào!',
      'Chuẩn công thức rồi! Điểm 10 đang vẫy gọi bạn!'
    ],
    quoteWrong: [
      'Cẩn thận với số mũ âm hoặc quy ước x^0 = 1 nhé!',
      'Gấu Kuma nhắc bạn: Nhân cùng cơ số thì CỘNG số mũ nhé!',
      'Đọc kỹ lời giải bên dưới để nắm vững bản chất nha!',
      'Bình tĩnh thở sâu, gấu Kuma sẽ đồng hành cùng bạn!'
    ],
    quoteCheer: [
      'Học toán cần kiên nhẫn như gấu tìm mật ong vậy!',
      'Mỗi ngày nhớ một công thức, bạn sẽ trở thành siêu nhân toán học!'
    ]
  },
  {
    id: 'dino',
    name: 'Dino',
    nickname: 'Dino Chiến Binh',
    bio: 'Chú khủng long dũng cảm, chuyên phá giải các dấu ngoặc phức tạp và chuyển vế tìm x.',
    themeColor: 'from-violet-500 to-indigo-600',
    avatarBg: 'bg-violet-100 border-violet-300 text-violet-600',
    badge: '⚔️ Vua Phá Ngoặc & Chuyển Vế',
    quoteCorrect: [
      'Rầm rộ luôn! Phá tan mọi chướng ngại vật rồi!',
      'Quá uy lực! Chuyển vế đổi dấu cực kỳ chính xác!',
      'Chiến thắng vang dội! Combo đang rực lửa rồi kìa!',
      'Đỉnh nóc kịch trần! Bạn giải bài như một dũng sĩ thực thụ!'
    ],
    quoteWrong: [
      'Ối! Nhớ khẩu quyết của Dino: "Chuyển vế phải đổi dấu" nha!',
      'Trước ngoặc là dấu TRỪ thì bên trong phải ĐỔI DẤU tất cả nhé!',
      'Xem ngay bí kíp phòng ngự bên dưới để phục thù nào!',
      'Không sao hết dũng sĩ! Trận này thua ta thắng trận sau!'
    ],
    quoteCheer: [
      'Chiến binh không ngại bài toán khó!',
      'Dấu ngoặc ngoằn ngoèo đến mấy Dino và bạn cũng giải quyết được!'
    ]
  }
];

export const getMascotById = (id: string): CharacterMascot => {
  return MASCOTS.find((m) => m.id === id) || MASCOTS[0];
};
