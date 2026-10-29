// 회사 정보 — 명함과 같은 값(docs/작업/20261029_명함_정보정리.md)
export const company = {
  name: '수민이앤씨',
  nameEn: 'SUMIN Engineering & Construction',
  ceo: '이수영',
  phone: '010-6342-9357',
  email: 'sylee070317@naver.com',
  address: '서울 중랑구 신내역로3길 40-36 신내데시앙플렉스 지식산업센터 SB408호',
  summary: '수민이앤씨 — 구조보강(철판, H형강, 탄소섬유)과 소구경파일(마이크로파일, 압입파일) 공사. 대표 보유 특허 3건.',
};

// 지도 바로가기(주소 검색)
const q = encodeURIComponent('서울 중랑구 신내역로3길 40-36');
export const mapLinks = {
  naver: `https://map.naver.com/p/search/${q}`,
  kakao: `https://map.kakao.com/?q=${q}`,
};

export const nav = [
  { key: 'about', label: '회사 소개', href: '/about/' },
  { key: 'reinforce', label: '구조보강', href: '/method/reinforce/' },
  { key: 'pile', label: '소구경파일', href: '/method/pile/' },
  { key: 'patent', label: '보유 특허', href: '/patent/' },
  { key: 'contact', label: '문의', href: '/contact/' },
];
