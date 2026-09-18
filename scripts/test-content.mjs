import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { episodes, dailyEpisodes, weeklyIssues, site } from '../src/content.mjs';
import { renderHome, renderWeeklyArchive } from '../src/render.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
assert.equal(episodes.length, 12);
assert.equal(site.featuredEpisodeId, 'ep12');
assert.deepEqual(dailyEpisodes.map(e => e.number), ['01', '02']);
assert.equal(weeklyIssues.length, 11);
assert.equal(weeklyIssues.flatMap(i => i.picks).length, 33);
assert.equal(weeklyIssues[0].number, '011');
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
assert(renderWeeklyArchive({site, weeklyIssues, today:'2026-09-19'}).includes('11개 회차 · 33개 전시'));
const ep12 = episodes.find(e => e.id === 'ep12');
assert.deepEqual(ep12.blocks.filter(b => b.type === 'figure').map(b => b.maxWidth), [500,320,260]);
console.log(`PASS: ${paths.length} pages; local links/assets; JSON-LD; 12 episodes; 11 issues / 33 exhibitions; 2 independent daily stories; expiry labels; crop display limits.`);
