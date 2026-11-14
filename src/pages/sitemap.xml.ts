// 검색 등록용 사이트맵 — 주소 목록은 src/lib/sitemapPaths.ts
// 2026-11-14 구글 서치콘솔이 「가져올 수 없음」이라 쪽마다 lastmod(빌드한 날)를 넣고 sitemap.txt도 같이 둠
import type { APIRoute } from 'astro';
import { sitemapPaths } from '../lib/sitemapPaths';

export const GET: APIRoute = ({ site }) => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = sitemapPaths
    .map((p) => `  <url>\n    <loc>${new URL(p, site)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
