// 카탈로그(A4 세로 20쪽) 구성 — 공법 글·그림은 methods.ts를 그대로 쓰고, 여기서는 쪽마다 무엇을 넣을지만 정한다.
// 2쪽짜리 공법은 짝수 쪽에서 시작해 펼침면 한 장에 보이게 한다(print.astro가 검사).
// block: methods.ts 의 blocks 순서(0부터), cols: 한 줄 칸 수, take: 그 안에서 고를 항목 번호(0부터), ratio: 사진 칸 비율(기본 3 / 2), split: 순서 목록을 두 단(true) 또는 세 단(3)으로, keepNo: take로 고른 사진도 원래 번호 유지

export type CatBlock = { block: number; cols?: number; take?: number[]; keepNo?: boolean; title?: string; ratio?: string; split?: boolean | 3; fixed?: boolean; beside?: boolean; tall?: boolean; w?: string };
export type CatPage = { slug: string; part?: string; blocks: CatBlock[] };

export const catalogPages: CatPage[] = [
  {
    slug: 'smart-frp', part: '1/2',
    blocks: [{ block: 0 }, { block: 1, cols: 2 }],
  },
  {
    slug: 'smart-frp', part: '2/2',
    blocks: [{ block: 2, cols: 2, ratio: '1.75 / 1' }, { block: 4, cols: 4, ratio: '1.9 / 1', title: '탄소판 + 탄소섬유시트 시공 순서 (휨·전단 동시 보강)' }],
  },
  {
    slug: 'steel-plate',
    blocks: [{ block: 0 }, { block: 1 }, { block: 2, split: 3 }],
  },
  {
    slug: 'steel-section',
    blocks: [{ block: 0 }, { block: 1 }],
  },
  {
    slug: 'carbon-sheet',
    blocks: [{ block: 0 }, { block: 1 }, { block: 2 }],
  },
  {
    slug: 'carbon-plate',
    blocks: [{ block: 0 }, { block: 1 }, { block: 2, split: true }, { block: 3, split: true }],
  },
  {
    slug: 'hnc', part: '1/2',
    blocks: [{ block: 1 }, { block: 4, ratio: '2.4 / 1', take: [0, 2, 4, 1, 3, 5] }, { block: 2, ratio: '1.55 / 1', w: '2.6fr 1fr' }, { block: 3, beside: true, tall: true }],
  },
  {
    slug: 'hnc', part: '2/2',
    blocks: [{ block: 6 }],
  },
  {
    slug: 'fip', part: '1/2',
    blocks: [{ block: 1 }, { block: 2, cols: 2, ratio: '1.08 / 1', w: '1.6fr 1fr' }, { block: 3, beside: true, tall: true }],
  },
  {
    slug: 'fip', part: '2/2',
    blocks: [{ block: 4, cols: 3 }, { block: 5 }],
  },
  {
    slug: 'micropile', part: '1/2',
    blocks: [{ block: 0 }, { block: 1 }, { block: 2, take: [0, 1, 2, 3, 4, 5], keepNo: true }],
  },
  {
    slug: 'micropile', part: '2/2',
    blocks: [{ block: 3, split: true }, { block: 4 }, { block: 2, take: [6, 7, 8, 9, 10, 11], keepNo: true, title: '시공 순서 (계속)' }],
  },
  {
    slug: 'press-in', part: '1/2',
    blocks: [{ block: 0 }, { block: 2 }],
  },
  {
    slug: 'press-in', part: '2/2',
    blocks: [{ block: 4 }, { block: 1, cols: 2, ratio: '1.15 / 1' }, { block: 3 }],
  },
];

// 「공법 한눈에 보기」 쪽 — 각 공법 설명(methods.ts)의 적용 대상과 핵심 기술을 줄인 것(2026-10-31 전문 용어로 다시 씀)
export const overview: Record<string, { fit: string; point: string }> = {
  'smart-frp': { fit: '보·슬래브 휨·전단 보강, FRP 보강재의 단부 박리가 우려되는 부재', point: 'FRP 스파이크 앵커로 단부 박리 억제, 연성 거동 유도' },
  'steel-plate': { fit: '철근량 부족·사용하중 증가로 휨·전단 내력이 부족한 보·슬래브', point: '앵커 고정 + 에폭시 주입 접착, 휨·전단 내력과 강성 증진' },
  'steel-section': { fit: '내력이 크게 부족한 보·기둥, 보조 지지점이 필요한 부재', point: 'H형강 제작·케미컬앵커 고정, 고력볼트·용접 접합' },
  'carbon-sheet': { fit: '보 전단 보강, 기둥 내진(횡구속) 보강, 곡면·복잡 형상 부재', point: '현장 함침 외부부착, 경량·무부식, 단면 증가 없음' },
  'carbon-plate': { fit: '사용하중이 증가한 슬래브·보의 휨 보강', point: '공장 인발성형판으로 품질 균일, 함침 공정 없어 공기 단축' },
  hnc: { fit: '기존 기초 위 마이크로파일 보강, 수직 증축·리모델링', point: '기초 철거 없이, 층고 변화 없이 정착부재로 파일·기초 일체화' },
  fip: { fit: '지지력 증대가 필요한 마이크로파일 기초', point: '응력 구속구로 주면마찰·부착 저항 증대' },
  micropile: { fit: '협소·저층고 현장의 기초 보강, 언더피닝', point: '소구경 천공, 압축·인장 겸용, 경사 시공 가능' },
  'press-in': { fit: '거주·운영 중 건물, 소음·진동 규제 현장의 기초 보강', point: '건물 자중 반력 압입, 말뚝별 압입력 기록, 소형 장비조차 진입할 수 없는 곳도 인력 시공 가능' },
};
