const photo = (slug, file, alt, caption) => ({
  src: `/assets/deep-dives/${slug}/${file}.webp`,
  alt,
  caption,
});

const amado = (file, alt, work) => photo('amado', file, alt, `${work} · 사진 CJY ART STUDIO(조준용) / 아마도예술공간`);
const grappeImages = {
  "flower-rain": "https://cdn.imweb.me/upload/S20260107ddf34fecc2632/7549e9a33458c.png",
  "flower-swell": "https://cdn.imweb.me/upload/S20260107ddf34fecc2632/3163ed210ee32.png",
  "flower-wind": "https://cdn.imweb.me/upload/S20260107ddf34fecc2632/6d3d823f5fd6f.png",
  "promenade": "https://cdn.imweb.me/upload/S20260107ddf34fecc2632/aba1b7f80cc1a.jpg",
};
const joneImages = {
  "work-0": "https://cdn.imweb.me/thumbnail/20261112/c74282f5db938.jpg",
  "work-2": "https://cdn.imweb.me/thumbnail/20261116/9368c975b9f8a.jpg",
  "work-3": "https://cdn.imweb.me/thumbnail/20261116/7f01bef5ea281.jpg",
  "work-4": "https://cdn.imweb.me/thumbnail/20261116/a2c915ff69e2e.jpg",
  "work-5": "https://cdn.imweb.me/thumbnail/20261116/2769cf7d8fa1e.jpg"
};

const grappe = (file, work) => ({ url: grappeImages[file], caption: `${work} · 갤러리 그라프` });
const jone = (file, work) => ({ url: joneImages[file], caption: `${work} · 갤러리제이원 서울` });

export const deepDives = [
  {
    id: 'deep-dive-01',
    number: '01',
    issue: '020',
    pickTitle: '정정화 《유령이 삼켜버린 편지를 찾아서 Ⅱ》',
    exhibition: '정정화 개인전 《유령이 삼켜버린 편지를 찾아서 Ⅱ》',
    venue: '아마도예술공간',
    question: '편지는 어디로 사라졌을까?',
    summary: '벽을 두드리는 타자기에서 시작해, 방과 복도를 지나는 관을 따라가 봅니다.',
    cover: amado('press24', '어두운 벽의 금빛 창 안, 종이 관 아래 편지와 종이가 쌓여 있다.', '전시 전경'),
    scenes: [
      {
        heading: '이 타자기는 벽을 두드려요.',
        text: '나무 구조를 먼저 보고, 벽 가까이에서 움직이는 막대를 찾아보세요.',
        figures: [
          amado('press02', '여러 막대와 나무 기둥으로 이루어진 설치가 벽을 따라 놓여 있다.', '〈벽 치는 타자기계〉 전경'),
          amado('press04-crop', '벽 가까이 움직이는 나무 막대가 흐릿하게 보인다.', '〈벽 치는 타자기계〉 세부'),
        ],
      },
      {
        heading: '벽을 지나는 관을 따라가 봐요.',
        text: '밝은 복도에서 벽을 통과하는 관을 찾고, 어두운 방에서는 천장 가까이를 살펴보세요.',
        figures: [
          amado('press26', '밝은 복도의 흰 벽을 갈색 종이 관이 가로지른다.', '전시 전경 · 복도'),
          amado('press22', '어두운 방에서 종이 관이 천장 가까이를 지나간다.', '전시 전경 · 방'),
        ],
      },
      {
        heading: '영화 속 카프카는 사라진 편지를 찾아 나서요.',
        figures: [amado('press11', '어두운 방에 투사된 흑백 영상 속 인물들이 편지를 들고 있다.', '〈글로 쓴 키스는 목적지에 닿지 못한다〉 상영 전경')],
      },
      {
        heading: '발에 적힌 검은 철자',
        text: '검은 벽 앞에 놓인 두 조각에서, 흰 발가락과 발등에 남은 글자를 찾아보세요.',
        figures: [
          amado('press20', '검은 방 바닥에 뼈대처럼 보이는 조각 두 점이 놓여 있다.', '전시 전경'),
          amado('press15-crop', '흰 발가락과 발등에 검은 글자가 적혀 있다.', '〈다음 존재〉 세부'),
        ],
      },
    ],
  },
  {
    id: 'deep-dive-02',
    number: '02',
    issue: '020',
    pickTitle: '이진희·무아리·풀림 《잠시, 다른 것이 되는》',
    exhibition: '《잠시, 다른 것이 되는》',
    venue: '갤러리 그라프',
    question: '가만히 있는데 왜 움직여 보일까?',
    summary: '겹쳐지는 색, 도자 새의 그림자, 휘는 줄기에서 서로 다른 움직임을 찾아봅니다.',
    cover: grappe('flower-swell', '풀림 〈꽃너울 III〉'),
    scenes: [
      {
        heading: '초록 사이로 분홍이 번져요.',
        text: '이진희의 〈산책〉 전체를 보고, 초록 사이에 분홍이 스며든 부분을 찾아보세요.',
        figures: [
          grappe('promenade', '이진희 〈산책〉 전체'),
        ],
      },
      {
        heading: '새 날개 아래, 그림자를 봐요.',
        text: '푸른 바탕에서 솟은 흰 도자 새 아래로 실제 그림자가 드리워집니다.',
        figures: [grappe('flower-rain', '무아리 〈꽃비,별비7〉')],
      },
      {
        heading: '휘는 줄기를 따라가 봐요.',
        text: '점점이 흩어진 꽃 사이로 밝은 선이 어느 쪽으로 휘는지 눈으로 따라가 보세요.',
        figures: [grappe('flower-wind', '풀림 〈꽃 바람 I〉')],
      },
    ],
  },
  {
    id: 'deep-dive-03',
    number: '03',
    issue: '020',
    pickTitle: '권순창 《/noclip》',
    exhibition: '권순창 개인전 《/noclip》',
    venue: '갤러리제이원 서울',
    question: '두 손은 어디로 이어질까요?',
    summary: '흰 두 손에서 시작해, 날개와 창대 사이로 이어지는 몸짓을 봅니다.',
    cover: jone('work-0', '권순창 〈dream of her〉'),
    scenes: [
      {
        heading: '두 손 위에 커다란 날개가 있어요.',
        text: '표지에서 본 두 손을 그림 전체에서 다시 찾고, 시선을 위로 옮겨보세요.',
        figures: [jone('work-0', '권순창 〈dream of her〉 전체')],
      },
      {
        heading: '날개만으로도 몸을 떠올리나요?',
        text: '작게 모여 있는 날개와 길게 펼쳐진 날개를 나란히 봅니다.',
        figures: [
          jone('work-3', '권순창 〈Cherubim〉'),
          jone('work-4', '권순창 〈Seraphim〉'),
        ],
      },
      {
        heading: '말 위 인물의 손에서 창대를 따라가 봐요.',
        figures: [jone('work-5', '권순창 〈Our plundered planet〉')],
      },
      {
        heading: '이야기는 흐려져도 몸짓은 남죠.',
        text: '게임에서 /noclip으로 보이는 벽을 지나가듯, 그림 속 두 손짓도 원래 이야기 밖으로 나온 것처럼 보입니다.',
        figures: [jone('work-2', '권순창 〈언니동생하는 사이〉')],
      },
    ],
  },
];
