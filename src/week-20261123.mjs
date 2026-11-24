const skaterSource = 'https://www.nga.gov/artworks/39729-skater-portrait-william-grant';
const railwaySource = 'https://www.nga.gov/artworks/43624-railway';
const skater = '/assets/artworks/stuart-skater-whole.jpg';
const railway = '/assets/daily/11-whole.jpg';
const skaterAlt = '검은 옷을 입은 남자가 팔짱을 낀 채 얼음 위에서 스케이트를 탄다. 왼쪽 멀리에 작은 스케이터들이 보인다.';
const railwayAlt = '검은 철제 난간 앞에 여성이 앉아 정면을 보고, 소녀는 등을 보이며 선로 쪽의 흰 증기를 바라본다.';

export const episode = {
  id: 'ep21',
  number: '21',
  artistKey: 'STUART',
  artist: '길버트 스튜어트',
  movement: '18세기 초상화',
  published: '2026.11',
  publishedDate: '2026-11-24',
  minutes: 3,
  title: '팔짱을 낀 이 사람은 어디로 가고 있을까요?',
  titleHtml: '팔짱을 낀 이 사람은<br>어디로 가고 있을까요?',
  summary: '길버트 스튜어트의 첫 전신 초상. 팔짱에서 스케이트 날과 얼음 위 곡선으로 눈을 옮겨봅니다.',
  lede: '팔짱을 낀 자세부터 보면 가만히 서 있는 사람 같습니다. 구두 아래의 날을 확인하면 초상화의 장면이 달라집니다. 윌리엄 그랜트는 얼음 위에서 스케이트를 타고 있습니다.',
  seoDescription: '길버트 스튜어트의 1782년 〈스케이트 타는 사람(윌리엄 그랜트의 초상)〉. 스케이트 날과 얼음 자국, 멀리 있는 스케이터를 봅니다. NGA 1950.18.1.',
  ogDescription: '팔짱과 스케이트 날이 한 화면에 있습니다. 길버트 스튜어트의 첫 전신 초상을 다시 봅니다.',
  newsletterConversion: true,
  instagramPublished: false,
  instagramUrl: 'https://instagram.com/crackers.kr',
  image: {
    src: skater, cardSrc: skater, fit: 'contain', alt: skaterAlt,
    caption: 'Gilbert Stuart, The Skater (Portrait of William Grant), 1782. National Gallery of Art, Andrew W. Mellon Collection, 1950.18.1. Public Domain.'
  },
  blocks: [
    { type: 'heading', text: '구두 아래에서 스케이트 날을 찾아보세요' },
    { type: 'figure', src: '/assets/artworks/stuart-skater-blades.jpg', alt: '은색 버클이 있는 구두 아래 스케이트 날과 얼음 가까이에 놓인 두 발.', caption: '작품 일부 · 구두와 스케이트 날 · NGA 1950.18.1', maxWidth: 530 },
    { type: 'paragraph', html: '상체의 팔짱을 본 뒤 발끝을 보세요. 한쪽 발에서 다른 발로 시선을 옮기면, 정지해 보였던 자세에서 얼음 위의 움직임이 느껴집니다.' },
    { type: 'heading', text: '발끝에서 얼음 위 곡선으로' },
    { type: 'figure', src: '/assets/artworks/stuart-skater-ice.jpg', alt: '스케이트 날 아래 연한 얼음 위에 휘어진 자국이 여러 개 보인다.', caption: '작품 일부 · 얼음 위의 곡선 · NGA 1950.18.1', maxWidth: 630 },
    { type: 'paragraph', html: '날 아래의 얼음에는 가느다란 곡선이 남아 있습니다. 어느 방향으로 눈을 따라가게 되는지 곡선 하나를 골라보세요.' },
    { type: 'heading', text: '멀리에도 스케이트 타는 사람이 있습니다' },
    { type: 'figure', src: '/assets/artworks/stuart-skater-distance.jpg', alt: '큰 인물의 왼쪽 멀리 얼음 위에서 스케이트를 타는 작은 인물 무리가 보인다.', caption: '작품 일부 · 왼쪽 먼 스케이터들 · NGA 1950.18.1', maxWidth: 590 },
    { type: 'paragraph', html: '미국 내셔널갤러리에 따르면 이 그림은 스튜어트의 첫 전신 초상입니다. 1782년 런던 왕립아카데미에 출품됐습니다. 전체 화면으로 돌아가 앞사람과 먼 스케이터들의 자세를 비교해보세요.' },
  ],
  usebox: '팔짱에서 구두 밑 <b>스케이트 날</b>로, 날에서 얼음 위의 곡선으로 눈을 옮겨보세요.',
  sources: [skaterSource]
};

export const daily = {
  id: 'daily11',
  number: '11',
  title: '아이는 난간 너머로 무엇을 보고 있을까요?',
  titleHtml: '아이는 난간 너머로<br>무엇을 보고 있을까요?',
  artist: '에두아르 마네',
  work: '〈철도〉, 1873',
  publishedDate: '2026-11-24',
  newsletterConversion: true,
  summary: '검은 난간과 흰 증기 사이에서 서로 다른 방향을 보는 두 사람을 살펴봅니다.',
  image: { src: '/assets/daily/11-girl.jpg', alt: '푸른 리본을 허리에 묶은 소녀가 철제 난간 앞에서 등을 보인다.' },
  credit: 'Édouard Manet, The Railway, 1873. National Gallery of Art, 1956.10.1. Gift of Horace Havemeyer in memory of his mother, Louisine W. Havemeyer. Public Domain.',
  sourceNote: '난간 아래의 선로와 화면 오른쪽의 퐁 드 뢰로프는 미국 내셔널갤러리 해설을 따랐습니다. 부분 이미지는 NGA 소장 1956.10.1에서 잘라냈습니다.',
  blocks: [
    { type: 'heading', text: '검은 난간 사이의 흰 증기' },
    { type: 'figure', src: '/assets/daily/11-steam.jpg', alt: '검은 세로 난간 너머로 흰 증기가 차오르고 오른쪽에 다리 일부가 보인다.', caption: '작품 일부 · 난간 너머 흰 증기 · NGA 1956.10.1', maxWidth: 600 },
    { type: 'paragraph', html: '소녀의 시선을 따라 검은 난간 사이를 보세요. 미국 내셔널갤러리는 난간 아래 선로에서 피어오른 흰 증기로 설명합니다.' },
    { type: 'heading', text: '두 사람은 다른 곳을 봅니다' },
    { type: 'figure', src: '/assets/daily/11-two-gazes.jpg', alt: '앉은 여성은 그림 바깥을 보고, 옆의 소녀는 창살 너머를 바라본다.', caption: '작품 일부 · 두 방향의 시선 · NGA 1956.10.1', maxWidth: 650 },
    { type: 'paragraph', html: '소녀는 난간 너머를, 앉은 여성은 우리 쪽을 봅니다. 한 사람의 시선씩 따라가면 같은 장면에서 눈에 들어오는 곳이 달라집니다.' },
    { type: 'heading', text: '오른쪽에서 파리의 다리를 찾아보세요' },
    { type: 'figure', src: '/assets/daily/11-bridge.jpg', alt: '화면 오른쪽 위, 소녀 옆 난간 너머로 다리 일부가 보인다.', caption: '작품 일부 · 오른쪽에 보이는 다리 · NGA 1956.10.1', maxWidth: 560 },
    { type: 'paragraph', html: '소장처는 오른쪽에 보이는 다리를 파리의 퐁 드 뢰로프로 확인합니다. 두 인물이 어떤 관계인지는 알려져 있지 않습니다.' },
    { type: 'heading', text: '다시 그림 전체에서 두 시선을 보기' },
    { type: 'figure', src: railway, alt: railwayAlt, caption: '원작 전체 · Édouard Manet, The Railway, 1873 · NGA 1956.10.1', maxWidth: 665 },
    { type: 'paragraph', html: '가운데 난간을 기준으로 이쪽의 두 사람과 저쪽의 증기를 함께 보세요. 처음보다 오래 눈이 머무는 곳은 어디인가요?' }
  ],
  sources: [{ label: '미국 내셔널갤러리 · 작품 해설과 공개 영역 원본', url: railwaySource }]
};

export const weekly = {
  number: '020',
  label: '2026 · 11월 24일',
  published: '2026-11-24',
  headline: '작은 전시 공간 세 곳에서 찾은 장면',
  refreshLabel: '희미하게 남은 인물의 자세, 흙과 붓질이 만든 움직임, 방마다 이어지는 편지를 봅니다.',
  note: '11월 23–29일 평일과 주말 관람을 함께 살폈습니다. 그라프는 28일 토요일, 아마도는 29일 일요일에 종료합니다. 제이원 서울은 일요일 휴관입니다. 운영 정보는 11월 23일 확인했습니다.',
  picks: [
    {
      tag: '희미한 몸의 자세 찾기',
      venue: '갤러리제이원 서울 · 종로구 팔판길 13',
      title: '권순창 《/noclip》',
      description: '권순창은 고전 회화에서 가져온 자세와 구도를 거듭 그립니다. 형태가 희미해진 그림에서 팔이나 다리 하나를 먼저 찾고, 그 선이 다른 몸의 어디로 이어지는지 살펴보세요.',
      startDate: '2026-11-16', endDate: '2026-12-02',
      hours: '월–금 12:00–19:00 · 토 11:00–17:00 · 일요일 휴관 · 12/2(수) 종료',
      price: '무료 · 방문 문의 02-733-0101',
      url: 'https://www.galleryjone.com/211',
      image: { src: '/assets/exhibitions/weekly-020/jone.jpg', alt: '권순창 개인전 /noclip의 제목과 개최 일정이 적힌 세로 포스터.', caption: '공식 포스터 · 갤러리제이원 서울' },
    },
    {
      tag: '흙으로 빚은 몸, 붓으로 그린 바람',
      venue: '갤러리 그라프 · 강남구 삼성로149길 10, 1층',
      title: '이진희·무아리·풀림 《잠시, 다른 것이 되는》',
      description: '무아리의 도자에서 몸의 윤곽을, 풀림의 그림에서 바람을 그린 붓질을 찾아보세요. 이진희의 화면에서는 자연에서 가져온 색과 선이 어떻게 겹치는지도 볼 수 있습니다.',
      startDate: '2026-10-13', endDate: '2026-11-28',
      hours: '화–토 11:00–19:00 · 11/28(토) 종료',
      price: '무료 · 방문 문의 02-566-0308',
      url: 'https://ggrappe.com/exhibitions/?bmode=view&idx=174912615',
      image: { src: '/assets/exhibitions/weekly-020/grappe.jpg', alt: '이진희·무아리·풀림의 이름과 전시 제목, 11월 28일 종료일을 담은 세로 포스터.', caption: '공식 포스터 · 갤러리 그라프' },
    },
    {
      tag: '다음 방에서 편지의 흔적 찾기',
      venue: '아마도예술공간 · 용산구 이태원로54길 8',
      title: '정정화 《유령이 삼켜버린 편지를 찾아서 Ⅱ》',
      description: '카프카의 편지에서 출발한 이야기가 한남동의 옛 주택 안에서 이어집니다. 방과 복도를 오가며 타자기, 관, 영상에 등장하는 편지의 단서를 찾아보세요.',
      startDate: '2026-10-30', endDate: '2026-11-29',
      hours: '화–일 11:00–18:00 · 월요일 휴관 · 11/29(일) 종료',
      price: '무료 · 방문 문의 02-790-1178',
      url: 'https://amadoart.org/exhibition/%EC%A0%95%EC%A0%95%ED%99%94-%EA%B0%9C%EC%9D%B8%EC%A0%84-%E3%80%8A%EC%9C%A0%EB%A0%B9%EC%9D%B4-%EC%82%BC%EC%BC%9C%EB%B2%84%EB%A6%B0-%ED%8E%B8%EC%A7%80%EB%A5%BC-%EC%B0%BE%EC%95%84%EC%84%9C-%E2%85%B1/',
      image: { src: '/assets/exhibitions/weekly-020/amado.jpg', alt: '정정화 개인전 유령이 삼켜버린 편지를 찾아서 Ⅱ의 흑백 세로 포스터.', caption: '공식 포스터 · 디자인 마카다미아 오 / 아마도예술공간' },
    }
  ]
};

export const exhibitionNotice = {
  id: 'kim-eunju',
  artist: '김은주',
  title: '정오의 빛과 그림자',
  endDate: '2026-11-29',
  period: '2026.11.5–11.29(일)',
  venue: '금호미술관 3층 · 종로구 삼청로 18',
  hours: '기본 10:00–18:00 · 17:30 입장 마감 · 월요일 휴관 · 무료',
  contact: '수요일 저녁 관람은 금호미술관 확인 · 02-720-5114',
  description: [
    '부산에서 30년 넘게 연필로 작업해 온 김은주는 사람의 몸에서 파도와 잎으로 소재를 넓혀왔습니다. 이 전시의 2026년작에서는 다시 몸을 그렸습니다.',
    '종이 일곱 장을 이은 〈무제〉의 폭은 9.8m입니다. 멀리서 관람객 쪽으로 휘어진 화면을 보고, 가까이서 검은 면을 채운 연필 선을 찾아보세요. 1995년 벽지 드로잉과 1999년 원형 드로잉도 함께 전시됩니다.',
  ],
  image: {
    src: '/assets/exhibitions/kim-eunju-kumho-2026.jpg',
    alt: '검은 연필로 그린 인체가 관람객 쪽으로 휘어진 긴 종이 화면을 채운다. 금호미술관 전시 전경.',
    caption: '〈무제〉(2026) 설치 전경 · 사진 제공 서울아트나우',
  },
  url: 'https://www.arko.or.kr/artcenter/board/view/507?bid=266&cid=718022',
  artistUrl: 'https://www.seoulartnow.com/artist/eunju-kim',
};
