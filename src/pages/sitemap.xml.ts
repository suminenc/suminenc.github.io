// 검색 등록용 사이트맵 — 페이지를 새로 만들면 여기에도 넣는다(404·카탈로그 인쇄용은 뺀다)
import type { APIRoute } from 'astro';
import { groups, methods } from '../data/methods';

export const GET: APIRoute = ({ site }) => {
  const paths = [
    '/',
    '/about/',
    ...Object.keys(groups).map((g) => `/method/${g}/`),
    ...methods.map((m) => `/method/${m.group}/${m.slug}/`),
    '/patent/',
    '/contact/',
  ];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
