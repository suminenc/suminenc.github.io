// 글자 사이트맵(한 줄에 주소 하나) — 구글·네이버 모두 받는다. 주소 목록은 src/lib/sitemapPaths.ts
import type { APIRoute } from 'astro';
import { sitemapPaths } from '../lib/sitemapPaths';

export const GET: APIRoute = ({ site }) =>
  new Response(sitemapPaths.map((p) => new URL(p, site).href).join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
