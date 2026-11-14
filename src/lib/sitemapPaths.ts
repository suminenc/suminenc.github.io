// 검색 등록용 주소 목록 — sitemap.xml 과 sitemap.txt 가 같이 쓴다.
// 페이지를 새로 만들면 여기에 넣는다(404·카탈로그 인쇄용은 뺀다).
import { groups, methods } from '../data/methods';

export const sitemapPaths = [
  '/',
  '/about/',
  ...Object.keys(groups).map((g) => `/method/${g}/`),
  ...methods.map((m) => `/method/${m.group}/${m.slug}/`),
  '/works/',
  '/patent/',
  '/contact/',
];
