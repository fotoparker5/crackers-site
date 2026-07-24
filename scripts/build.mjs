import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { episodes, site, weeklyIssues } from "../src/content.mjs";
import { renderEpisode, renderHome, renderSitemap } from "../src/render.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const checkOnly = process.argv.includes("--check");
const today = new Date().toISOString().slice(0, 10);

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const validate = () => {
  const episodeIds = new Set(episodes.map(({ id }) => id));
  assert(episodeIds.size === episodes.length, "에피소드 ID가 중복되었습니다.");
  assert(episodeIds.has(site.featuredEpisodeId), `커버 에피소드 ${site.featuredEpisodeId}를 찾을 수 없습니다.`);
  assert(weeklyIssues.length > 0, "전시줍줍 데이터가 없습니다.");

  for (const episode of episodes) {
    for (const key of ["id", "number", "artist", "title", "summary", "seoDescription"]) {
      assert(episode[key], `${episode.id}: ${key} 값이 없습니다.`);
    }
    assert(Array.isArray(episode.blocks) && episode.blocks.length > 0, `${episode.id}: 본문 블록이 없습니다.`);
  }

  for (const issue of weeklyIssues) {
    assert(issue.picks.length === 3, `전시줍줍 #${issue.number}: 추천 전시는 정확히 3개여야 합니다.`);
    for (const pick of issue.picks) {
      assert(pick.endDate && pick.url, `전시줍줍 #${issue.number}: 종료일 또는 링크가 없습니다.`);
    }
  }
};

validate();

const orderedEpisodes = [...episodes].sort((a, b) => a.number.localeCompare(b.number));
const outputs = new Map();
outputs.set("index.html", renderHome({ site, episodes: orderedEpisodes, weeklyIssues, today }));

orderedEpisodes.forEach((episode, index) => {
  outputs.set(`${episode.id}.html`, renderEpisode({
    site,
    episode,
    previous: orderedEpisodes[index - 1],
    next: orderedEpisodes[index + 1]
  }));
});

outputs.set("sitemap.xml", renderSitemap({ site, episodes: orderedEpisodes }));
outputs.set("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);

let stale = false;
for (const [relativePath, content] of outputs) {
  const target = resolve(root, relativePath);

  if (checkOnly) {
    let current = "";
    try {
      current = await readFile(target, "utf8");
    } catch {
      stale = true;
      console.error(`누락: ${relativePath}`);
      continue;
    }
    if (current !== content) {
      stale = true;
      console.error(`갱신 필요: ${relativePath}`);
    }
    continue;
  }

  await writeFile(target, content, "utf8");
  console.log(`생성: ${relativePath}`);
}

if (checkOnly && stale) process.exitCode = 1;
if (checkOnly && !stale) console.log("생성 파일이 최신 상태입니다.");
