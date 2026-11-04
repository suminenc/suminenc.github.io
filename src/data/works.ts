// 시공 경력 목록 — tools/works/export_works.py 가 대표님 검토가 끝난 해(reviewed.json)로 만든다(손으로 고치지 말 것).
// 블로그 글을 쓰면 해당 줄의 blog 에 주소만 넣는다(다시 만들어도 이어받음).
export type Work = { ym: string; title: string; owner?: string; builder?: string; method: 'reinforce' | 'pile'; pub?: boolean; blog?: string };

export const works: Work[] = [
  { ym: "2026.09", title: "인천 가좌수소충전소 증설 중 마이크로파일공사", builder: "다원종합건설", method: 'pile' },
  { ym: "2026.07", title: "동명빌딩 구조보강공사", owner: "동명여고", method: 'reinforce', pub: true },
  { ym: "2026.07", title: "안성 도드람 리모델링공사 및 증축공사 중 압입파일공사", builder: "성주건설", method: 'pile' },
  { ym: "2026.05", title: "용인 죽전 극동스타클래스 3차타운하우스 지하 외벽 구조보강공사", owner: "극동스타클래스 3차타운하우스", method: 'reinforce' },
  { ym: "2026.04", title: "경기도 용인시 기흥구 상하동 마이크로파일공사", builder: "수목건설", method: 'pile' },
  { ym: "2026.02", title: "신림동 구조보강공사", owner: "픽티티(picktiti)", builder: "스페이스매터", method: 'reinforce' },
];
