const metVillers = 'https://www.metmuseum.org/art/collection/search/437903';
const metLaundress = 'https://www.metmuseum.org/art/collection/search/436091';
const villersResearch = 'https://www.metmuseum.org/fr/perspectives/great-women-artists';
const portrait = '/assets/artworks/villers-du-val-whole.jpg';
const portraitAlt = '창 가까이 앉은 인물이 그림을 담는 판을 들고 정면을 본다. 깨진 창 너머에 작은 인물 둘이 보인다.';

export const episode = {
  id: 'ep20',
  number: '20',
  artistKey: 'VILLERS',
  artist: '마리 드니즈 빌레르',
  movement: '신고전주의',
  published: '2026.11',
  publishedDate: '2026-11-15',
  minutes: 3,
  title: '다비드의 작품으로 알려졌던 초상화',
  titleHtml: '다비드의 작품으로<br>알려졌던 초상화',
  summary: '메트에 들어올 때 다비드의 작품으로 알려졌던 초상화. 1801년 살롱을 그린 스케치에서 빌레르의 이름을 되찾은 단서를 봅니다.',
  lede: '1917년 이 초상화가 메트 소장품이 됐을 때는 다비드의 작품으로 알려져 있었습니다. 지금 메트에 적힌 화가는 마리 드니즈 빌레르입니다. 작가를 다시 밝히는 데 어떤 단서가 있었을까요?',
  seoDescription: '메트 소장 17.120.204, 마리 드니즈 빌레르의 1801년 〈뒤 발 도뉴의 초상〉. 다비드 귀속과 파리 살롱 스케치, 깨진 창 너머 인물 둘을 봅니다.',
  ogDescription: '다비드의 작품으로 알려졌던 초상화에 빌레르의 이름이 돌아오기까지. 명화 에피소드 EP20.',
  newsletterConversion: true,
  instagramPublished: false,
  instagramUrl: 'https://instagram.com/crackers.kr',
  image: {
    src: portrait, cardSrc: portrait, fit: 'contain', alt: portraitAlt,
    caption: 'Marie Denise Villers, Marie Joséphine Charlotte du Val d’Ognes (1786–1868), 1801. The Metropolitan Museum of Art, 17.120.204. Mr. and Mrs. Isaac D. Fletcher Collection, Bequest of Isaac D. Fletcher, 1917. Public Domain.'
  },
  blocks: [
    { type: 'heading', text: '살롱을 그린 스케치에서 단서를 찾았습니다' },
    { type: 'paragraph', html: '빌레르는 1801년 파리 살롱에 이 초상을 출품했습니다. 메트의 연구 해설에 따르면, 1996년 미술사 연구자 마거릿 A. 오펜하이머는 <strong>그해 살롱의 전시 모습을 그린 스케치</strong>에서 이 초상을 확인했습니다. 그림을 빌레르의 작품으로 다시 보는 데 쓰인 단서 중 하나였습니다.' },
    { type: 'heading', text: '깨진 창 너머에 두 사람이 있습니다' },
    { type: 'figure', src: '/assets/artworks/villers-du-val-window.jpg', alt: '파손된 유리의 비스듬한 윤곽 너머로 건물 앞 난간에 서 있는 두 인물이 보인다.', caption: '작품 일부 · 깨진 창과 난간에 선 두 사람 · The Met', maxWidth: 620 },
    { type: 'paragraph', html: '초상 속 인물 왼쪽의 창을 보세요. 깨진 유리의 가장자리 너머에 난간과 사람 둘이 보입니다. 이 부분을 발견한 뒤에는 인물이 앉은 실내와 창 밖의 거리가 눈에 들어옵니다.' },
    { type: 'heading', text: '손 아래에는 그림을 담는 판이 있습니다' },
    { type: 'figure', src: '/assets/artworks/villers-du-val-folio.jpg', alt: '인물이 드로잉 폴리오 위쪽을 한 손으로 잡고 있다. 어두운 판 위로 손가락 끝이 드러난다.', caption: '작품 일부 · 드로잉 폴리오와 인물의 손 · The Met', maxWidth: 640 },
    { type: 'paragraph', html: '인물 앞에 놓인 검은 판은 드로잉 폴리오입니다. 메트는 인물이 그림에 쓰는 크레용 홀더도 쥐고 있다고 설명합니다. 판 위의 손과 바깥을 바라보는 시선을 번갈아 따라가 보세요.' },
    { type: 'heading', text: '창과 손 사이로 시선을 옮겨보세요' },
    { type: 'figure', src: portrait, alt: portraitAlt, caption: '원작 전체 · The Met 17.120.204', maxWidth: 600 },
    { type: 'paragraph', html: '창과 손을 차례로 본 뒤 다시 전체 화면을 보세요. 큰 인물과 창 너머 작은 인물들은 화면 안에서 서로 얼마나 떨어져 있나요?' }
  ],
  usebox: '인물의 시선에서 <b>창 바깥 두 사람</b>으로, 다시 앞쪽 폴리오 위의 손으로 눈을 옮겨보세요.',
  sources: [metVillers, villersResearch]
};

export const daily = {
  id: 'daily10',
  number: '10',
  title: '빨래 보따리를 안은 사람은 왜 한 손을 낮췄을까요?',
  titleHtml: '빨래 보따리를 안은 사람은<br>왜 한 손을 낮췄을까요?',
  artist: '오노레 도미에',
  work: '〈빨래하는 여인〉, 1863년 추정',
  publishedDate: '2026-11-15',
  newsletterConversion: true,
  summary: '커다란 빨래 보따리에서 맞잡은 손으로, 다시 두 사람이 오르는 계단으로 시선을 내려봅니다.',
  image: { src: '/assets/daily/10-bundle.jpg', alt: '빨래 보따리를 옆구리에 안은 사람이 다른 손을 아래로 내민 모습.' },
  credit: 'Honoré Daumier, The Laundress, 1863년 추정. The Metropolitan Museum of Art, 47.122. Bequest of Lillie P. Bliss, 1931. Public Domain.',
  sourceNote: '메트는 화면에 적힌 제작연도의 마지막 숫자가 흐려진 점을 고려해 186[3?]로 표기합니다. 모든 부분 이미지는 메트 소장 47.122 원작에서 잘라냈습니다.',
  blocks: [
    { type: 'heading', text: '보따리 아래에 맞잡은 손이 보여요' },
    { type: 'figure', src: '/assets/daily/10-hands.jpg', alt: '난간 옆에 선 아이가 어른의 손을 잡고 고개를 아래로 향한 부분.', caption: '작품 일부 · 아이와 맞잡은 손 · The Met', maxWidth: 490 },
    { type: 'paragraph', html: '한 팔은 빨래 보따리를 감싸고 있습니다. 다른 팔을 따라 시선을 내려보면 아이와 맞잡은 손이 보여요. 어른은 아이가 계단을 오르도록 손을 내밀고 있습니다.' },
    { type: 'heading', text: '손에서 조금 더 아래로 내려가 보세요' },
    { type: 'figure', src: '/assets/daily/10-steps.jpg', alt: '두 사람의 아래쪽과 그림 하단의 어두운 계단, 난간 일부가 보인다.', caption: '작품 일부 · 그림 아래쪽의 계단 · The Met', maxWidth: 640 },
    { type: 'paragraph', html: '두 사람의 옷 아래로 시선을 옮기면 화면 하단에 어두운 계단이 있습니다. 맞잡은 손을 한 번 더 보고, 두 사람이 어디로 움직이고 있는지 살펴보세요.' },
    { type: 'heading', text: '도미에의 화실은 센강가에 있었어요' },
    { type: 'figure', src: '/assets/daily/10-riverside.jpg', alt: '밝게 빛나는 강가 건물 앞에서 사람이 빨랫감을 옆구리에 안고 있다.', caption: '작품 일부 · 빨래 보따리 뒤 밝은 강변 건물 · The Met', maxWidth: 620 },
    { type: 'paragraph', html: '메트에 따르면 도미에의 파리 화실 주변에서는 센강에 정박한 빨래 배에서 돌아오는 사람들을 볼 수 있었습니다. 도미에는 빨랫감을 들고 강가 계단을 오르는 모습을 그렸어요.' },
    { type: 'heading', text: '보따리부터 계단까지 한 화면에서 다시 보기' },
    { type: 'figure', src: '/assets/daily/10-whole.jpg', alt: '밝은 강가의 건물을 배경으로 빨랫감을 든 사람과 아이가 계단을 오르는 원작 전체.', caption: '원작 전체 · Honoré Daumier, The Laundress, 1863년 추정 · The Met', maxWidth: 550 },
    { type: 'paragraph', html: '처음에는 보따리가 눈에 띄었나요? 이제 보따리와 맞잡은 손을 함께 봅니다. 그림을 다시 봤을 때 눈이 조금 더 오래 머무는 곳은 어디인가요?' }
  ],
  sources: [{ label: 'The Met · 작품 정보, 해설과 Public Domain 원본', url: metLaundress }]
};

export const weekly = {
  number: '019',
  label: '2026 · 11월 15일',
  published: '2026-11-15',
  headline: '풍경을 다시 보는 서울 전시 3곳',
  refreshLabel: '산과 바다의 부조, 아파트 창의 격자, 스캔으로 기록한 땅의 표면을 봅니다.',
  note: '11월 21–22일 관람 기준. 페리지갤러리 《순수 조각》은 21일 토요일이 마지막입니다. 세 곳 모두 무료이며 개인 예약과 당일 운영 조건은 방문 전 각 공간의 공식 안내를 확인해 주세요. 운영 정보는 11월 15일 확인했습니다.',
  picks: [
    {
      tag: '산과 바다를 옆에서 보기',
      venue: '페리지갤러리 지하 1층 · 서초구 반포대로 18',
      title: '서해영 《순수 조각》',
      description: '서해영은 실제 산과 바다를 바라보며 흙으로 형태를 빚고, 이를 본떠 부조로 만들었습니다. 두 작품을 정면과 옆에서 번갈아 보세요. 보는 위치에 따라 두께와 윤곽이 달라 보입니다.',
      startDate: '2026-10-07', endDate: '2026-11-21',
      hours: '월–토 10:30–18:00 · 토 12:00–13:00 휴게 · 일·공휴일 휴관 · 11/21(토) 종료',
      price: '무료 · 개인 예약·접근 문의 070-4676-7091',
      url: 'https://www.perigee.co.kr/gallery/exhibitions/view/2026/374',
      image: { src: '/assets/exhibitions/weekly-019/pure-sculpture.jpg', alt: '긴 직사각형 조각들이 천장에서 바닥 쪽으로 내려오고 작은 작품들이 놓인 순수 조각 전시장.', caption: '전시 전경 · 아인아 아카이브 촬영 / 페리지갤러리 제공' }
    },
    {
      tag: '아파트 창과 테트리스의 격자',
      venue: '충북갤러리 인사아트센터 2층 · 종로구 인사동길 41-1',
      title: '오은주 《도시(圖示)하다 – 시선(視線)》',
      description: '오은주는 아파트 창의 반복과 테트리스 블록이 쌓이는 모습에서 닮은 점을 발견했습니다. 화면을 멀리서 한 번 보고, 가까이에서 어떤 색의 칸이 서로 맞물리는지 찾아보세요.',
      startDate: '2026-11-11', endDate: '2026-11-23',
      hours: '10:00–19:00 · 화요일 휴관 · 11/21·22 양일 운영',
      price: '무료 · 개인 예약·접근 문의 043-299-9389',
      url: 'https://www.mcst.go.kr/site/s_culture/culture/cultureView.jsp?pRo=472&pSeq=78185',
      image: { src: '/assets/exhibitions/weekly-019/oh-eunju.jpg', alt: '촘촘한 다색 격자가 곡선을 이루고 아래에 오은주와 전시 제목이 적힌 포스터.', caption: '공식 포스터 · 충북갤러리 제공' }
    },
    {
      tag: '가까이서는 점, 멀리서는 풍경',
      venue: '서울시립 사진미술관 1층 로비 · 도봉구 마들로13길 68',
      title: '김영경 《기계적 시선: 접촉하여 보기》',
      description: '김영경은 라이다로 표면의 정보를 기록해 이미지로 옮깁니다. 로비의 〈유령풍경〉을 먼저 멀리서 보고, 걸음을 옮겨 가까운 거리에서 점들이 만드는 표면을 살펴보세요.',
      startDate: '2026-10-28', endDate: '2026-12-20',
      hours: '화–금 10:00–20:00 · 11월 토·일 10:00–18:00(17:00 입장 마감) · 월요일 휴관',
      price: '무료 · 예약·현장 운영은 공식 안내 확인',
      url: 'https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1597041',
      image: { src: '/assets/exhibitions/weekly-019/machine-vision.jpg', alt: '점이 흩어진 검은 면과 물결 모양의 지형 이미지에 전시 제목과 기간을 배치한 포스터.', caption: '공식 포스터 · 서울시립 사진미술관 제공' }
    }
  ]
};
