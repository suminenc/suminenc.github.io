// 카탈로그(A4 세로 20쪽) 구성 — 공법 글·그림은 methods.ts를 그대로 쓰고, 여기서는 쪽마다 무엇을 넣을지만 정한다.
// block: methods.ts 의 blocks 순서(0부터), cols: 한 줄 칸 수, take: 그 안에서 고를 항목 번호(0부터), ratio: 사진 칸 비율(기본 3 / 2)

export type CatBlock = { block: number; cols?: number; take?: number[]; title?: string; ratio?: string };
export type CatPage = { slug: string; part?: string; blocks: CatBlock[] };

export const catalogPages: CatPage[] = [
  {
    slug: 'smart-frp', part: '1/2',
    blocks: [{ block: 0 }, { block: 1, cols: 2 }],
  },
  {
    slug: 'smart-frp', part: '2/2',
    blocks: [{ block: 2, cols: 4 }, { block: 3 }, { block: 4, cols: 4 }],
  },
  {
    slug: 'steel-plate',
    blocks: [{ block: 0 }, { block: 1, cols: 3 }, { block: 2 }],
  },
  {
    slug: 'steel-section',
    blocks: [{ block: 0, cols: 3 }, { block: 1 }],
  },
  {
    slug: 'carbon-sheet',
    blocks: [{ block: 0 }, { block: 1, cols: 3 }, { block: 2 }],
  },
  {
    slug: 'carbon-plate',
    blocks: [{ block: 0 }, { block: 1, cols: 5 }, { block: 2 }, { block: 3 }],
  },
  {
    slug: 'hnc', part: '1/3',
    blocks: [{ block: 1 }, { block: 2, cols: 3, ratio: '16 / 9' }, { block: 5 }],
  },
  {
    slug: 'hnc', part: '2/3',
    blocks: [{ block: 4, cols: 3 }, { block: 7, cols: 3, ratio: '16 / 10' }],
  },
  {
    slug: 'hnc', part: '3/3',
    blocks: [{ block: 6, cols: 3 }],
  },
  {
    slug: 'fip', part: '1/2',
    blocks: [{ block: 1 }, { block: 2, cols: 5 }, { block: 4, cols: 3 }],
  },
  {
    slug: 'fip', part: '2/2',
    blocks: [{ block: 5, cols: 2 }],
  },
  {
    slug: 'micropile', part: '1/2',
    blocks: [{ block: 0 }, { block: 1 }, { block: 3 }],
  },
  {
    slug: 'micropile', part: '2/2',
    blocks: [{ block: 2, cols: 3 }],
  },
  {
    slug: 'press-in',
    blocks: [{ block: 0 }, { block: 1, cols: 2 }, { block: 2, cols: 4 }],
  },
];

// 「공법 한눈에 보기」 쪽 — 각 공법 페이지에 이미 있는 내용에서 뽑아 줄였다
export const overview: Record<string, { fit: string; point: string }> = {
  'smart-frp': { fit: '보·슬래브의 휨·전단 보강', point: 'FRP 스파이크 앵커로 보강재 끝 탈락을 막음' },
  'steel-plate': { fit: '철근·설계하중이 모자란 보·슬래브', point: '강판을 붙이고 에폭시를 주입' },
  'steel-section': { fit: '기둥·보·슬래브 보강', point: 'ㄷ형강·H형강을 제작해 설치' },
  'carbon-sheet': { fit: '균열 억제, 기둥 내진 보강, 원통 구조물', point: '얇은 시트를 붙여 시공이 쉬움' },
  'carbon-plate': { fit: '하중이 늘어난 슬래브·보', point: '미리 굳힌 판이라 빠르고 품질이 고름' },
  hnc: { fit: '기존 기초 콘크리트 위 파일 보강', point: '기초를 철거하지 않아 비용·기간 절감' },
  fip: { fit: '지지력을 더 높여야 하는 마이크로파일', point: '응력구속구로 마찰저항·부착력 증대' },
  micropile: { fit: '좁은 곳, 기존 건물 기초 보강', point: '소구경 천공기, 압축·인장 겸용' },
  'press-in': { fit: '소음·진동을 피해야 하는 현장', point: '무소음·무진동, 시공 중 지지력 확인' },
};
