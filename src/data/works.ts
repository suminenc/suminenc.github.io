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
  { ym: "2025.12", title: "유한클로락스 향남공장 구조보강공사", owner: "유한클로락스", method: 'reinforce' },
  { ym: "2025.10", title: "보령 대천해수욕장 물놀이 감시탑(4망루) 마이크로파일공사", owner: "태광", method: 'pile' },
  { ym: "2025.03", title: "왕십리2동 구립노인복지시설 건립공사(건축, 기계) 중 헬리컬파일공사", builder: "신영토건", method: 'pile' },
  { ym: "2024.08", title: "서교초등학교 아스콘바닥 지방침하 보강 공사", owner: "서교초등학교", method: 'reinforce', pub: true },
  { ym: "2024.05", title: "청사 노후시설 개선(안전보강) 공사", owner: "민주평화통일자문회의사무처", method: 'reinforce', pub: true },
  { ym: "2024.05", title: "속초연수원(한국전력) 설악동 내진보강공사", owner: "한국전력", builder: "장원종합건설", method: 'reinforce', pub: true },
  { ym: "2024.03", title: "켄싱턴리조트 설악비치1 신축공사 중 부력앙카(소구경파일) 공사", builder: "이랜드건설", method: 'pile' },
];
