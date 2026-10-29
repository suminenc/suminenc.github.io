// 공법 소개 자료 — 한길특수건설 홈페이지(hangil-site/src/pages/method) 글·그림을 발췌해 다듬음(2026-10-29).
// 홈페이지 공법 페이지와 나중에 카탈로그가 같은 자료를 쓴다.
// 그림은 public/img/method/ (tools/web-images/compress_method_images.py로 줄인 사본)

export type Step = { img: string; cap: string };
export type Block =
  | { type: 'text'; title: string; paras: string[] }
  | { type: 'list'; title: string; items: string[] }
  | { type: 'steps'; title: string; items: Step[]; cols?: 3 | 4; contain?: boolean }
  | { type: 'figures'; title: string; items: Step[]; cols?: number }
  | { type: 'dl'; title: string; items: { dt: string; dd?: string[] }[] }
  | { type: 'video'; title: string; youtubeId: string };

export type Method = {
  group: 'reinforce' | 'pile';
  slug: string;
  title: string;
  short: string;
  patent?: { no: string; name: string; registered: string; cert: string };
  thumb: string;
  blocks: Block[];
};

export const groups = {
  reinforce: {
    title: '구조보강',
    lead: '철근이 모자라거나 하중이 늘어난 건물의 보·기둥·슬래브를 철판, 형강, 탄소섬유로 보강합니다.',
  },
  pile: {
    title: '소구경파일',
    lead: '큰 장비가 들어가지 못하는 좁은 곳에서 작은 천공기로 기존 건물의 기초를 보강합니다.',
  },
} as const;

const im = (name: string) => `/img/method/${name}.webp`;
const steps = (names: string[], caps: string[]): Step[] => names.map((n, i) => ({ img: im(n), cap: caps[i] }));
const seq = (prefix: string, from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => `${prefix}${String(from + i).padStart(2, '0')}`);

export const methods: Method[] = [
  // ───── 구조보강 ─────
  {
    group: 'reinforce',
    slug: 'smart-frp',
    title: 'SMART섬유보강공법',
    short: 'FRP 스파이크 앵커로 보강섬유 끝이 떨어지지 않게 잡아 주는 특허 공법',
    patent: { no: '제10-1789032호', name: 'FRP 스파이크 앵커용 접착제 조성물 및 이를 이용한 콘크리트 구조물의 보강 공법', registered: '2017-10-17', cert: '/img/patent/10-1789032.webp' },
    thumb: im('construct_1_img04'),
    blocks: [
      {
        type: 'text',
        title: '개요',
        paras: [
          'FRP 스파이크 앵커를 함께 시공해 탄소섬유 보강재의 끝부분이 떨어지는 것을 최대한 막고, 갑자기 부서지는 취성파괴를 서서히 버티는 연성파괴로 바꾸도록 개발·보완한 공법입니다.',
          '탄소섬유시트, 탄소판, 탄소판+탄소섬유시트 세 가지 방식으로 시공합니다.',
        ],
      },
      {
        type: 'steps',
        title: '탄소섬유시트',
        contain: true,
        items: steps(seq('construct_1_img', 1, 4), ['섬유시트 시공', '천공 후 케미컬앵커 주입', '상도레진 도포 및 FRP 스파이크 앵커 부착', '작업 완료']),
      },
      {
        type: 'steps',
        title: '탄소판',
        contain: true,
        items: steps(seq('construct_1_img', 5, 8), ['보강판넬 부착', '천공 후 케미컬앵커 주입', 'FRP 스파이크 앵커 부착', '작업 완료']),
      },
      {
        type: 'text',
        title: '탄소판 + 탄소섬유시트',
        paras: ['보 하부에는 SMART 보강판넬(휨 보강), 보 측면에는 SMART 보강섬유(전단 보강)를 시공해 휨과 전단을 함께 보강합니다.'],
      },
      {
        type: 'steps',
        title: '탄소판 + 탄소섬유시트 시공 순서',
        contain: true,
        items: steps(seq('construct_1_img', 9, 16), [
          '보강판넬 부착', '천공 후 케미컬앵커 주입', 'FRP 스파이크 앵커 부착', '휨 보강 완료',
          '섬유시트 시공', '천공 후 케미컬앵커 주입', '상도레진 도포 및 FRP 스파이크 앵커 부착', '전단 보강 완료',
        ]),
      },
    ],
  },
  {
    group: 'reinforce',
    slug: 'steel-plate',
    title: '철판보강공법',
    short: '강판을 콘크리트에 붙이고 에폭시를 주입해 보·슬래브의 내력을 높이는 공법',
    thumb: im('construct_3_img06'),
    blocks: [
      {
        type: 'text',
        title: '공법 특징',
        paras: [
          '콘크리트 속 철근이 모자라거나 설계하중이 부족할 때 인장·전단을 보강해 구조물의 내하력을 높이는 공법입니다.',
          '보수 자재는 콘크리트와 잘 붙는 것을 먼저 고르고, 그 밖의 자재는 특성을 충분히 살펴 알맞게 고릅니다.',
        ],
      },
      {
        type: 'steps',
        title: '시공 사진',
        cols: 3,
        items: steps(seq('construct_3_img', 1, 6), ['착공 전', '현장 가공', '강판 압착', '강판 용접', '에폭시 주입 완료', '보강 완료']),
      },
      {
        type: 'dl',
        title: '시공 순서',
        items: [
          { dt: '1. 철판 가공 및 표면 처리', dd: ['철판 가공: 강판 표면을 샌드블라스터 등으로 깨끗이 처리합니다.', '표면 처리: 콘크리트 표면을 디스크 샌더 등으로 연마하고, 울퉁불퉁한 곳은 에폭시 실링제로 평평하게 메웁니다.'] },
          { dt: '2. 강판 부착', dd: ['보강 강판에 스페이서(Spacer)를 설치해 콘크리트에 붙입니다.'] },
          { dt: '3. 앵커볼트 설치', dd: ['앵커볼트를 콘크리트에 설치합니다. 이때 철근·전선 파이프 등에 주의하며 천공합니다.'] },
          { dt: '4. 실링 작업', dd: ['에폭시 실링제로 강판 둘레를 실링하고 주입구와 공기 배출 파이프를 붙입니다. 실링 후 24시간 이상 굳힌 뒤 주입합니다.'] },
          { dt: '5. 주입', dd: ['에폭시 주입제를 주입용 자동 펌프로 한 방향에서 천천히 가압하며 주입합니다. 공기 배출 파이프에서 수지가 나오고 공기 거품이 없어지면 마개를 닫아 나갑니다.'] },
        ],
      },
    ],
  },
  {
    group: 'reinforce',
    slug: 'steel-section',
    title: '형강보강공법',
    short: 'ㄷ형강·H형강을 제작·설치해 기둥·보·슬래브를 보강하는 공법',
    thumb: im('construct_4_img06'),
    blocks: [
      {
        type: 'steps',
        title: 'ㄷ형강 보강 시공 사진',
        cols: 3,
        items: steps(seq('construct_4_img', 1, 6), ['강재 제작', '강재 설치', 'H형강 베이스판 고정', '에폭시퍼티 실링', '방청 작업', '보강 완료 후 전경']),
      },
      {
        type: 'dl',
        title: 'ㄷ형강 및 H형강 시공 순서',
        items: [
          { dt: '1. 가공 및 제작' },
          { dt: '2. 공작(일반 공작)', dd: ['자재 절단면은 중심축과 수직이 되게 하고 매끈하게 마무리합니다.'] },
          { dt: '3. 용접', dd: ['용접 부위 치수는 용접 수축·변형과 마무리 여유를 고려해 정하고, 용접봉과 재료는 건조한 상태로 보관합니다.'] },
          { dt: '4. 가공된 강재 설치', dd: ['기둥·보·슬래브의 먹매김 위치에 가부착한 뒤 수직·수평을 정확히 맞추고, 앵커 위치에 규정대로 천공해 조입니다.'] },
          { dt: '5. 천공 및 앵커 시공', dd: ['케미컬앵커 구멍은 핸드 드릴로 볼트보다 약 2mm 크게 뚫습니다.'] },
          { dt: '6. 고정 볼트 체결', dd: ['고력볼트로 부재끼리 밀착시키고 볼트마다 고른 장력으로 조입니다.'] },
          { dt: '7. 칠(방청)', dd: ['녹·슬래그 등 이물질을 청소하고 모든 면에 녹막이 칠을 합니다.'] },
        ],
      },
    ],
  },
  {
    group: 'reinforce',
    slug: 'carbon-sheet',
    title: '탄소섬유시트 보강공법',
    short: '일방향 탄소섬유시트를 콘크리트 표면에 붙여 보강하는 공법',
    thumb: im('construct_5_img04'),
    blocks: [
      {
        type: 'text',
        title: '공법 개요',
        paras: ['일방향 탄소섬유시트(Carbon Fiber Sheet)를 콘크리트 표면에 접착해 보의 내력을 높이고 초과 응력에 저항하게 하는 공법입니다. 시공성이 뛰어나고, 탄소섬유의 높은 성능 덕분에 여러 형태의 콘크리트 구조물을 효과적으로 보강할 수 있습니다.'],
      },
      {
        type: 'steps',
        title: '시공 순서',
        cols: 3,
        items: steps(seq('construct_5_img', 1, 6), ['표면 처리', '프라이머 도포 및 불량면 수정', '하도레진 도포', '탄소섬유시트 부착 및 함침', '상도레진 도포', '작업 완료']),
      },
      {
        type: 'list',
        title: '적용 부위 및 효과',
        items: [
          '콘크리트 균열(Crack) 억제',
          '압축·인장 강도가 높아져 내구력 증가',
          '사일로(Silo) 등 원통 구조물의 측면 압축강도 증가',
          '지진에 대비한 기둥 보강으로 비틀림·좌굴 저항 증가',
        ],
      },
    ],
  },
  {
    group: 'reinforce',
    slug: 'carbon-plate',
    title: '탄소섬유판 보강공법',
    short: '미리 굳힌 탄소판을 붙여 빠르고 고른 품질로 보강하는 공법',
    thumb: im('construct_6_img04'),
    blocks: [
      {
        type: 'text',
        title: '공법 개요',
        paras: ['일방향 탄소판(Carbon Fiber Plate)을 콘크리트 표면에 접착해 보의 내력을 높이고 초과 응력에 저항하게 하는 공법입니다. 시공성이 뛰어나고 여러 형태의 콘크리트 구조물에 적용할 수 있습니다.'],
      },
      {
        type: 'steps',
        title: '시공 순서',
        cols: 3,
        items: steps(seq('construct_6_img', 1, 5), ['표면 처리', '프라이머 도포 및 불량면 수정', '탄소섬유판 부착', '탄소섬유판 가압', '작업 완료']),
      },
      {
        type: 'list',
        title: '탄소판의 특성',
        items: [
          '고강도·고탄성 탄소섬유(무게 80%)를 에폭시 수지에 함침해 굳힌 제품입니다. 현장 함침 공정이 없어 시공이 빠르고, 함침 불량·미경화 같은 시공 불량을 미리 막으며 품질이 고릅니다.',
          '인장 성능이 뛰어나 굽힘 하중에 의한 변형과 응력 증가를 잘 억제합니다. 여러 겹 반복 시공할 필요가 없고 시공 면적이 작아, 슬래브·보 같은 평평한 구조물 보강에 특히 좋습니다.',
          '콘크리트 면 전체를 덮지 않아도 되므로 시공 뒤에도 균열 진행이나 누수를 눈으로 쉽게 확인하고 대처할 수 있습니다.',
          '이미 굳힌 제품이라 보관이 쉽고 변형이 없습니다.',
        ],
      },
      {
        type: 'dl',
        title: '적용 부위 및 효과',
        items: [
          { dt: '하중이 늘어난 구조물', dd: ['활하중 증가 · 교통량 증가 · 건물 안 무거운 기계 설치'] },
          { dt: '구조물 손상 부위', dd: ['건물 노후 · 철판보강 부식 부위 · 지진 등으로 손상된 부위 · 화재로 내력이 떨어진 부위'] },
          { dt: '내력 증가', dd: ['철근 응력 감소 · 균열 진행 방지와 균열 폭 억제 · 구조물 변형 감소'] },
          { dt: '설계기준 변경', dd: ['내진설계 충족 · 설계 변경에 따른 요구 충족'] },
          { dt: '설계·시공 결함 부위', dd: ['철근량이 모자란 구조물 · 두께가 모자란 구조물'] },
        ],
      },
    ],
  },

  // ───── 소구경파일 ─────
  {
    group: 'pile',
    slug: 'hnc',
    title: '마이크로파일 상부정착공법(HNC)',
    short: '기초 콘크리트를 철거하지 않고 마이크로파일과 일체화하는 특허 공법',
    patent: { no: '제10-0982951호', name: '기시공된 기초 콘크리트체의 보강방법', registered: '2010-09-13', cert: '/img/patent/10-0982951.webp' },
    thumb: im('civilEngineering_1_img16'),
    blocks: [
      { type: 'video', title: '공법 영상', youtubeId: '2PX2wEMOWxA' },
      {
        type: 'text',
        title: '기술 분야',
        paras: ['지반 위에 타설된 기초 콘크리트를 철거하지 않고 HNC 공법으로 마이크로파일과 기초 콘크리트를 일체화합니다. 철거 장비 비용을 줄이고 전체 공사 기간을 단축하는 경제적인 공법입니다.'],
      },
      {
        type: 'steps',
        title: '공사 진행 도면',
        cols: 3,
        contain: true,
        items: steps(seq('civil_1_img', 1, 6), ['코어 천공', '케이싱 근입 및 천공', '마이크로파일 삽입', '1차 그라우팅', '정착부재 설치', '2차 그라우팅']),
      },
      {
        type: 'figures',
        title: '시공 모식도',
        cols: 1,
        items: [{ img: im('civil_1_big'), cap: 'HNC 공법 시공 모식도' }],
      },
      {
        type: 'figures',
        title: '기존 공법과의 비교',
        items: [
          { img: im('civil_li2_img01'), cap: 'HNC 공법' },
          { img: im('civil_li2_img04'), cap: '기존 공법' },
          { img: im('civil_li2_img02'), cap: 'HNC 공법' },
          { img: im('civil_li2_img05'), cap: '기존 공법' },
          { img: im('civil_li2_img03'), cap: 'HNC 공법' },
          { img: im('civil_li2_img06'), cap: '기존 공법' },
        ],
      },
      {
        type: 'dl',
        title: '시공 순서',
        items: [
          { dt: '1. 기초 콘크리트 코어링', dd: ['위에서 기초 콘크리트와 연약지반을 관통하는 코어를 뚫습니다.'] },
          { dt: '2. 지반 천공 및 케이싱 삽입', dd: ['연약지반 구간에서 주변 지반이 무너지는 것을 막습니다.'] },
          { dt: '3. 강봉(트레드바) 조립 및 설치', dd: ['케이싱 안쪽으로 트레드바를 조립해 설치합니다.'] },
          { dt: '4. 그라우팅', dd: ['케이싱과 정착장 둘레에 그라우트를 주입합니다.'] },
          { dt: '5. 정착부재(HNC) 설치', dd: ['마이크로파일의 주면 마찰력과 부착력을 높이기 위해 코어 구멍 안쪽에 여러 장의 플레이트와 간격 유지용 커플러·록너트를 조여 설치합니다.'] },
          { dt: '6. 무수축 몰탈 타설', dd: ['코어 구멍 안쪽의 이물질을 없애고 마이크로파일과 정착부재 사이에 무수축(폴리머·에폭시) 몰탈을 타설합니다.'] },
        ],
      },
      {
        type: 'steps',
        title: '시공 사진',
        items: steps(seq('civilEngineering_1_img', 9, 20), [
          '파일 위치 확인', '코어 천공', '케이싱 타격 근입', '정착장 천공', '강봉 조립 및 설치', '1차 그라우팅 믹싱(시멘트)',
          '상부정착 모형', '상부정착 설치', '2차 그라우팅(무수축몰탈)', '시공 완료', '시공 완료 전경', '정재하시험',
        ]),
      },
      {
        type: 'figures',
        title: '성능 실험',
        items: [
          { img: im('civil_1_plus01'), cap: '무보강 실험 사진' },
          { img: im('civil_1_plus02'), cap: 'HNC 공법 실험 사진' },
          { img: im('graph1'), cap: '무보강' },
          { img: im('graph3'), cap: 'HNC 공법' },
          { img: im('graph2'), cap: '무보강 실험 분석 그래프' },
          { img: im('graph4'), cap: 'HNC 공법 실험 분석 그래프' },
        ],
      },
      {
        type: 'figures',
        title: '무보강 대비 인장력 증가',
        cols: 1,
        items: [{ img: im('tbl_img'), cap: '무보강 대비 인장력 증가' }],
      },
    ],
  },
  {
    group: 'pile',
    slug: 'fip',
    title: '마이크로파일 마찰저항증대공법(FIP)',
    short: '응력구속구로 그라우트와의 부착력과 마찰저항을 높이는 특허 공법',
    patent: { no: '제10-2054157호', name: '응력 구속구가 구비된 마이크로 파일과 마찰 저항이 향상된 마이크로 파일 기초 및 그 시공방법', registered: '2019-12-04', cert: '/img/patent/10-2054157.webp' },
    thumb: im('civil_2_04'),
    blocks: [
      { type: 'video', title: '공법 영상', youtubeId: 'ZpyIObkMhVk' },
      {
        type: 'list',
        title: '공법 특징',
        items: ['간단한 조립으로 마찰저항 향상', '시멘트 그라우트와의 부착력 증대', '마찰저항이 커져 경제적'],
      },
      {
        type: 'steps',
        title: '공사 진행 도면',
        contain: true,
        items: steps(seq('civil_2_img', 1, 5), ['작업 전', '케이싱 근입', '정착장 천공', '마이크로파일(FIP 적용) 삽입', '그라우팅 주입']),
      },
      {
        type: 'figures',
        title: '시공 모식도',
        cols: 1,
        items: [{ img: im('civil_2_big'), cap: 'FIP 공법 시공 모식도' }],
      },
      {
        type: 'figures',
        title: '기존 공법과의 비교',
        cols: 3,
        items: [
          { img: im('civil_li2_img07'), cap: '구성' },
          { img: im('civil_li2_img08'), cap: 'FIP 공법' },
          { img: im('civil_li2_img10'), cap: '기존 공법' },
          { img: im('civil_li2_img09'), cap: 'FIP 공법' },
          { img: im('civil_li2_img11'), cap: '기존 공법' },
        ],
      },
      {
        type: 'steps',
        title: '시공 사진',
        cols: 3,
        items: steps(['civil_2_01', 'civil_2_02', 'civil_2_03', 'civil_2_04', 'civil_2_05', 'civil_2_06'], ['작업 전', '케이싱 근입', '정착장 천공', '마이크로파일(FIP 적용) 삽입', '그라우팅 주입', '재하판 설치']),
      },
    ],
  },
  {
    group: 'pile',
    slug: 'micropile',
    title: '마이크로파일공법',
    short: '좁은 곳에서도 소구경 천공기로 시공하는 압축·인장 겸용 파일',
    thumb: im('civilEngineering_2_img05'),
    blocks: [
      {
        type: 'list',
        title: '주요 사용 목적',
        items: [
          '언더피닝(Under Pinning) 공법 시공',
          '기존 건물(구조물)의 기초 보강',
          '대형 기초 굴착 장비가 들어갈 수 없는 좁은 곳',
          '타워·굴뚝·송전탑의 기초파일(압축·인장 동시)',
          '연약지반(압축·인장 동시)과 사면 보강',
          '소음 규제 지역의 무소음·무진동 기초파일',
        ],
      },
      {
        type: 'list',
        title: '특징',
        items: [
          '필요한 길이만큼 잘라 커플러로 이어 쓰므로 좁은 공간에서도 시공할 수 있습니다.',
          '타워·굴뚝·송전탑·교량 기초 등 토목·건축 기초파일로 압축력과 인장력을 함께 만족하며, 케이블 앵커 같은 인장 파일로도 쓸 수 있습니다.',
          '대형 장비가 들어가지 못하는 곳에서도 소구경 천공기로 콘크리트·암반을 뚫어 시공하고, 마찰력으로 지지하중을 확보합니다.',
          '어떤 각도로도 시공할 수 있어 수평하중도 확보합니다.',
          '강봉 둘레를 그라우팅해 지지력을 높이고 부식을 막습니다.',
          '한 개(Single) 또는 여러 개 묶음(Group)으로 씁니다.',
        ],
      },
      {
        type: 'steps',
        title: '시공 순서',
        items: steps(seq('civilEngineering_2_img', 1, 12), [
          '착수 전 전경', '장비 반입', '케이싱 설치', '용접 이음', '수직도 확인', '천공',
          '파일 조립(간격재)', '파일 설치', '그라우트 배합', '그라우트 주입', '공사 완료 후 전경', '인장 시험',
        ]),
      },
      {
        type: 'dl',
        title: '시공 기준',
        items: [
          {
            dt: '01. 천공(Drilling)',
            dd: [
              '천공 직경은 설계서·도면에 적힌 치수 이상으로 합니다.',
              '천공마다 천공 보고서를 써서 설계 때 적용한 지질 조건과 비교하고 정착부의 신뢰도를 확인합니다.',
              '파일 삽입과 그라우팅을 마칠 때까지 천공 벽면이 흐트러지지 않게 조치합니다.',
              '필요한 깊이보다 약 0.5m 더 깊게 뚫어, 벽면에서 떨어진 이물질이 쌓여도 깊이가 모자라지 않게 합니다.',
              '천공 축의 허용 오차는 ±2.5° 이내를 원칙으로 합니다.',
              '천공 때 벤토나이트 현탁액은 쓰지 않습니다.',
            ],
          },
          {
            dt: '02. 마이크로파일 조립 및 설치',
            dd: [
              '조립·설치 방법은 길이와 현장 여건을 고려해 정합니다.',
              '천공을 마치면 바로 설치(삽입)합니다.',
              '설치는 인력이나 크레인 등 장비로 합니다.',
              '트레드바는 커플러로 잇고, 전체 길이에 일정한 간격으로 센트럴라이저를 달아 구멍 한가운데에 오게 합니다.',
            ],
          },
          {
            dt: '03. 그라우팅',
            dd: [
              '천공 구멍 바닥부터 그라우팅합니다.',
              '빈틈없이 고르게 채워지도록 끊지 않고 이어서 작업하며, 구멍 위로 넘칠 때까지 합니다.',
              '책임기술자는 그라우트 배합과 수량을 기록해 보존합니다.',
            ],
          },
          {
            dt: '04. 스틸 플레이트 설치(두부 마감)',
            dd: [
              '기초 콘크리트 타설 전에 도면대로 스틸 플레이트를 설치합니다.',
              '스틸 플레이트와 록너트는 도면에 표시된 치수의 것을 씁니다.',
              '설치를 마치면 파일에 충격이나 손상을 줄 요인이 없도록 철저히 관리합니다.',
            ],
          },
        ],
      },
    ],
  },
  {
    group: 'pile',
    slug: 'press-in',
    title: '압입파일공법',
    short: '무소음·무진동으로 강관을 눌러 넣으며 지지력을 바로 확인하는 공법',
    thumb: im('civilEngineering_4_img05'),
    blocks: [
      {
        type: 'list',
        title: '개요 (Pre Penetrating Pile)',
        items: [
          '장비를 사람 손으로 조립·해체·운반할 수 있어 좁은 공간에서도 진입·시공이 가능합니다.',
          '시공 중에 지지력을 확인할 수 있습니다.',
          '무소음·무진동 공법이라 공사 중 민원을 막습니다.',
          '작업 환경을 깨끗하게 유지합니다.',
        ],
      },
      {
        type: 'figures',
        title: '공법 구성',
        items: [
          { img: im('civilEngineering_4_img01_png'), cap: '압입파일 개요' },
          { img: im('civilEngineering_4_img02_png'), cap: '압입파일 개요' },
        ],
      },
      {
        type: 'steps',
        title: '시공 순서',
        items: steps(seq('civilEngineering_4_img', 1, 8), ['작업 전', '코어 천공', '코어 천공 완료', '앵커볼트 설치', '강관 압입', '강관 압입 완료', '무수축 타설', '공사 완료']),
      },
    ],
  },
];

export const byGroup = (g: Method['group']) => methods.filter((m) => m.group === g);
export const patents = methods.filter((m) => m.patent);
