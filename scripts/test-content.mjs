import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { episodes, dailyEpisodes, weeklyIssues, site } from '../src/content.mjs';
import { renderHome, renderWeeklyArchive } from '../src/render.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const newsletterHome = renderHome({ site, episodes, dailyEpisodes, weeklyIssues, today: '2026-10-05' });
const newsletterSection = newsletterHome.match(/<section class="news">([\s\S]*?)<\/section>/)[1];
assert(newsletterSection.includes('월 4회, 월요일에 보내드립니다.'));
assert(newsletterSection.includes('CRACKERS LETTER 구독하기 →'));
assert(!newsletterSection.includes('매주 금요일'));
assert(!newsletterSection.includes('매주 월요일'));
assert.equal((newsletterSection.match(/<a /g) || []).length, 1);
assert.equal(episodes.length, 14);
assert.equal(site.featuredEpisodeId, 'ep14');
assert.deepEqual(dailyEpisodes.map(e => e.number), ['01', '02', '03', '04']);
assert.equal(weeklyIssues.length, 13);
assert.equal(weeklyIssues.flatMap(i => i.picks).length, 39);
assert.equal(weeklyIssues[0].number, '013');
assert(weeklyIssues[0].picks.every(p=>p.endDate>='2026-10-10'));
assert(weeklyIssues[0].picks[1].hours.includes('일·월 휴관'));
assert(episodes.find(e=>e.id==='ep14').image.fit==='contain');
assert(episodes.find(e=>e.id==='ep14').blocks.some(b=>b.caption?.includes('수정 전 이미지가 아닙니다')));
const paths = ['index.html', 'exhibitions.html', 'daily.html', ...episodes.map(e => `${e.id}.html`), ...dailyEpisodes.map(e => `${e.id}.html`)];
for (const path of paths) {
  const html = await readFile(resolve(root, path), 'utf8');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: one h1`);
  assert(!html.includes('undefined'), `${path}: missing data`);
  for (const [, value] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|#)/.test(value)) continue;
    const local = value.split(/[?#]/)[0].replace(/^\//, '');
    if (local) await access(resolve(root, local));
  }
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(json);
}
for (const entry of dailyEpisodes) {
  assert.equal(entry.blocks.filter(b => b.type === 'figure').length, 4);
  assert(entry.blocks.find(b => b.type === 'figure' && b.caption.startsWith('원작 전체')));
  const html = await readFile(resolve(root, `${entry.id}.html`), 'utf8');
  assert(html.includes('https://maily.so/crackers'));
  assert(!html.includes('EP.'));
}
const future = renderHome({site, episodes, dailyEpisodes, weeklyIssues, today:'2026-09-28'});
assert(!future.includes('LAST CHANCE · 9월 19일 19시까지'));
assert(renderWeeklyArchive({site, weeklyIssues, today:'2026-10-02'}).includes('13개 회차 · 39개 전시'));
const current = renderHome({site, episodes, dailyEpisodes, weeklyIssues:weeklyIssues.slice(1), today:'2026-09-25'});
assert(current.includes('9.22–2027.3.7'));
assert(current.includes('9월 25일 추석 당일 휴관'));
assert(!future.includes('LAST CHANCE · 9월 27일까지'));
assert(current.includes('9/26–27 10:00–21:00 · 추석 연휴 특별 운영'));
assert(episodes.find(e=>e.id==='ep13').blocks.some(b=>b.src==='/assets/artworks/night-watch-copy.jpg'));
const ep12 = episodes.find(e => e.id === 'ep12');
assert.deepEqual(ep12.blocks.filter(b => b.type === 'figure').map(b => b.maxWidth), [500,320,260]);
console.log(`PASS: ${paths.length} pages; local links/assets; JSON-LD; 14 episodes; 13 issues / 39 exhibitions; 4 independent daily stories; holiday and year-crossing dates; expiry labels; crop display limits; weekly013 operating notices.`);
