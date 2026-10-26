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
assert.equal(episodes.length, 17);
assert.equal(site.featuredEpisodeId, 'ep17');
assert.deepEqual(dailyEpisodes.map(e => e.number), ['01','02','03','04','05','06','07']);
assert.equal(weeklyIssues.length, 16);
assert.equal(weeklyIssues.flatMap(i => i.picks).length, 48);
assert.equal(weeklyIssues[0].number, '016');
assert(weeklyIssues[0].picks.every(p=>p.endDate>='2026-11-01'));
assert(weeklyIssues[0].picks[0].hours.includes('10/31(토)10:00–19:00/입장18시까지'));
assert(weeklyIssues[0].picks[0].hours.includes('11/1(일)10:00–18:00/입장17시까지'));
assert(weeklyIssues[0].picks[1].hours.includes('17:00마감'));
assert(weeklyIssues[0].picks[1].price.includes('15,000원'));
assert(weeklyIssues[0].picks[2].hours.includes('월·화휴관'));
assert(weeklyIssues[0].picks[2].price.includes('갤러리문의'));
assert(weeklyIssues[0].note.includes('10월 26일 월요일'));
const prior015=weeklyIssues.find(i=>i.number==='015'),prior014=weeklyIssues.find(i=>i.number==='014');
assert(prior015.picks[1].hours.includes('월요일 휴관'));
assert(prior015.picks[0].hours.includes('종료 1시간 전'));
assert(prior015.picks[2].hours.includes('10/25(일) 휴무'));
assert(prior015.picks[2].price.includes('갤러리 문의'));
assert(prior015.note.includes('19일 월요일'));
assert(prior014.picks[0].price.includes('예약 불필요'));
assert(prior014.note.includes('10월 13일'));
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
assert(renderWeeklyArchive({site, weeklyIssues, today:'2026-10-26'}).includes('16개 회차 · 48개 전시'));
const current = renderHome({site, episodes, dailyEpisodes, weeklyIssues:weeklyIssues.filter(i=>i.number<='012'), today:'2026-09-25'});
assert(current.includes('9.22–2027.3.7'));
assert(current.includes('9월 25일 추석 당일 휴관'));
assert(!future.includes('LAST CHANCE · 9월 27일까지'));
assert(current.includes('9/26–27 10:00–21:00 · 추석 연휴 특별 운영'));
assert(episodes.find(e=>e.id==='ep13').blocks.some(b=>b.src==='/assets/artworks/night-watch-copy.jpg'));
const ep12 = episodes.find(e => e.id === 'ep12');
assert.deepEqual(ep12.blocks.filter(b => b.type === 'figure').map(b => b.maxWidth), [500,320,260]);
for(const id of ['ep15','daily05','ep16','daily06','ep17','daily07']){const html=await readFile(resolve(root,id+'.html'),'utf8');assert.equal((html.match(/class="newsletter-conversion"/g)||[]).length,1);assert(html.includes('utm_content='+id+'_footer'));assert(!html.includes('<section class="cta">'));assert(!html.includes('매주 한 점씩'));}
for(const id of ['ep14','daily04']){const html=await readFile(resolve(root,id+'.html'),'utf8');assert(!html.includes('class="newsletter-conversion"'));}
assert(episodes.find(e=>e.id==='ep16').blocks.some(b=>b.html?.includes('1838년')));
assert(episodes.find(e=>e.id==='ep16').blocks.some(b=>b.caption?.includes('재현한 이미지가 아닙니다')));
assert(episodes.find(e=>e.id==='ep17').blocks.some(b=>b.html?.includes('약1885년부터')));
assert(episodes.find(e=>e.id==='ep17').blocks.some(b=>b.html?.includes('엑스레이 영상이나 가상의 초기 상태')));
assert(dailyEpisodes.find(e=>e.id==='daily07').credit.includes('1993.15.1'));
console.log(`PASS: ${paths.length} pages; local links/assets; JSON-LD; 17 episodes; 16 issues / 48 exhibitions; 7 independent daily stories; new operating cautions and article CTA.`);
