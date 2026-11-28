import { renderDeepDiveSection } from "./render-deep-dives.mjs";

const esc = (v = '') => String(v).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const external = 'target="_blank" rel="noopener"';
const image = (src, alt, cls = '', lazy = true) => `<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'}>`;

export const issueHeader = (site, wordmark, archive = false) => `<a class="skip-link" href="#content">본문으로 바로가기</a>
<header class="issue-masthead shell">
  <div class="utility"><span>${esc(site.eyebrow)}</span><span>${esc(site.homeIssue.edition)}</span></div>
  <a class="masthead-logo" href="index.html" aria-label="CRACKERS 홈">${wordmark(site)}</a>
  <div class="navigation"><span class="tagline">전시가 쉬워지는 작은 발견</span><nav aria-label="주요 메뉴">
  <a href="${archive ? 'index.html' : ''}#weekly">이번 주</a><a href="${archive ? 'index.html' : ''}#deep-dive">전시딥다이브</a><a href="${archive ? 'index.html' : ''}#archive">연재 아카이브</a><a href="${esc(site.newsletterUrl)}" ${external}>뉴스레터</a>
  </nav></div>
</header>`;

export const issueFooter = (site, wordmark) => `<footer class="issue-footer" id="about"><div class="shell footer-inner"><a class="footer-logo" href="index.html" aria-label="CRACKERS 홈">${wordmark(site, { dark: true })}</a><p>전시부터 그림 속 작은 발견까지.<br>몰라도 괜찮아요. 함께 들여다봅니다.</p><div class="footer-links"><a href="${site.instagramUrl}" ${external}>Instagram</a><a href="${site.threadsUrl}" ${external}>Threads</a><a href="mailto:${site.email}">${site.email}</a></div><small>© 2026 CRACKERS</small></div></footer>`;

export function renderIssueHome({ site, episodes, weeklyIssues, dailyEpisodes, deepDives, pageHead, wordmark }) {
  const featured = episodes.find(e => e.id === site.featuredEpisodeId);
  const latestEpisode = [...episodes].sort((a,b) => b.number.localeCompare(a.number))[0];
  const daily = [...dailyEpisodes].sort((a,b) => b.number.localeCompare(a.number))[0];
  const issue = weeklyIssues[0];
  const episodeDetail = latestEpisode.blocks.find(block => block.type === 'figure') ?? latestEpisode.image;
  const archive = [
    { title: '전시줍줍', count: `${weeklyIssues.length}개 호`, summary: '전시 세 곳과 눈여겨볼 장면을 모읍니다.', href: 'exhibitions.html' },
    { title: '명화 에피소드', count: `${episodes.length}편`, summary: '익숙한 작품에서 놓쳤던 이야기를 찾습니다.', href: 'episodes.html' },
    { title: '그림 속 일상', count: `${dailyEpisodes.length}편`, summary: '음식, 방, 옷, 물건부터 그림을 들여다봅니다.', href: 'daily.html' },
  ];
  return `${pageHead({site, title:site.title, description:site.description, ogDescription:site.ogDescription, stylesheet:'/assets/home-issue.css', stylesheetVersion:site.homeAssetVersion})}
<body>${issueHeader(site, wordmark)}
<main id="content" class="shell">
  <section class="cover" aria-labelledby="featured-title">
    <figure class="cover-art"><a href="${featured.id}.html" aria-label="커버스토리 읽기">${image(featured.image.src, featured.image.alt, '', false)}</a><figcaption>${esc(site.homeIssue.coverCredit)}</figcaption></figure>
    <div class="cover-copy"><p class="eyebrow">이번 주 커버스토리 <span>명화 에피소드 · EP.${featured.number}</span></p>
      <h1 id="featured-title">${featured.titleHtml}</h1><p class="cover-deck">${esc(site.homeIssue.coverDeck)}</p>
      <div class="cover-bottom"><p class="story-meta">${esc(featured.artist)}<br>${esc(site.homeIssue.coverWork)} · ${featured.minutes}분 읽기</p><a class="text-link" href="${featured.id}.html">커버스토리 읽기</a></div>
    </div>
  </section>

  <section class="weekly-section" id="weekly" aria-labelledby="weekly-title">
    <div class="section-heading"><h2 id="weekly-title">이번 주</h2><p>전시 한 걸음, 그림 한 장. 이번 호의 세 가지 이야기.</p></div>
    <div class="weekly-grid">
      <article class="weekly-story"><a class="story-link" href="exhibitions.html#issue-${issue.number}"><div class="story-image poster-triptych">${issue.picks.map(p => image(p.image.src, p.image.alt)).join('')}</div><p class="eyebrow">전시줍줍 <span>${issue.number}</span></p><h3>${esc(issue.headline)}</h3><p class="story-summary">${esc(issue.refreshLabel)}</p><p class="story-meta">${esc(issue.picks.map(pick => pick.venue.split(' · ')[0]).join(' · '))}</p></a><p class="image-credit">${esc(issue.picks.map(pick => pick.image.caption.replace(/^공식 포스터 · /, '')).join(' / '))}</p>${issue.note ? `<p class="visit-note">${esc(issue.note)}</p>` : ''}</article>
      <article class="weekly-story"><a class="story-link" href="${latestEpisode.id}.html"><div class="story-image art-detail">${image(episodeDetail.src, episodeDetail.alt)}</div><p class="eyebrow">명화 에피소드 <span>EP.${latestEpisode.number}</span></p><h3>${esc(latestEpisode.title)}</h3><p class="story-summary">${esc(latestEpisode.summary)}</p><p class="story-meta">${esc(latestEpisode.artist)} · ${latestEpisode.minutes}분 읽기</p></a><p class="image-credit">${esc(episodeDetail.caption)}</p></article>
      <article class="weekly-story" id="daily"><a class="story-link" href="${daily.id}.html"><div class="story-image">${image(daily.image.src, daily.image.alt)}</div><p class="eyebrow">그림 속 일상 <span>${daily.number}</span></p><h3>${esc(daily.title)}</h3><p class="story-summary">${esc(daily.summary)}</p><p class="story-meta">${esc(daily.artist)} · ${esc(daily.work)}</p></a><p class="image-credit">${esc(daily.credit)}</p></article>
    </div>
  </section>

  ${deepDives.length ? renderDeepDiveSection(deepDives, weeklyIssues) : ""}

  <section class="archive-section" id="archive" aria-labelledby="archive-title"><div class="section-heading"><h2 id="archive-title">지난 크래커스</h2><p>마음에 드는 연재부터 이어 읽어보세요.</p></div><div class="archive-grid">${archive.map(a => `<a class="archive-link" href="${a.href}"><p class="archive-count">${a.count}</p><h3>${a.title}</h3><p>${a.summary}</p><span class="text-link">아카이브 보기</span></a>`).join('')}</div></section>
</main>

<section class="news"><div class="shell newsletter-inner"><div><p class="eyebrow">CRACKERS LETTER <span>${esc(site.newsletterIntro.schedule)}</span></p><h2>이번 주 크래커스를<br>메일로 받아보세요.</h2><p>전시를 고르는 기준과 그림을 보는 작은 발견.<br>이번 호의 이야기를 한 통에 담아 전해드립니다.</p></div><div class="newsletter-action">${wordmark(site, {dark:true})}<a class="subscribe" href="${site.newsletterUrl}" ${external}>크래커스 레터 구독하기</a></div></div></section>
${issueFooter(site, wordmark)}</body></html>`;
}

export function renderMasterpieceArchive({ site, episodes, pageHead, wordmark }) {
  return `${pageHead({site, title:'명화 에피소드 | CRACKERS', description:'익숙한 명화에서 놓쳤던 이야기와 시각적 단서를 찾아보세요.', path:'/episodes', stylesheet:'/assets/home-issue.css', stylesheetVersion:site.homeAssetVersion})}<body>${issueHeader(site, wordmark, true)}<main class="shell episode-archive" id="content"><p class="eyebrow">CRACKERS ARCHIVE</p><h1>명화 에피소드</h1><p class="archive-intro">익숙한 작품에서 놓쳤던 이야기.<br>이미지를 다시 보는 질문을 ${episodes.length}편 모았습니다.</p><div class="weekly-grid">${[...episodes].reverse().map(e => `<article class="weekly-story"><a class="story-link" href="${e.id}.html"><div class="story-image archive-art">${image(e.image.cardSrc || e.image.src, e.image.alt)}</div><p class="eyebrow">EP.${e.number}<span>${esc(e.artist)}</span></p><h2>${esc(e.title)}</h2><p class="story-summary">${esc(e.summary)}</p><p class="story-meta">${e.minutes}분 읽기 · ${esc(e.movement)}</p></a></article>`).join('')}</div></main>${issueFooter(site, wordmark)}</body></html>`;
}
