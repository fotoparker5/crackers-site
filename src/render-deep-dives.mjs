const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const photograph = (image, eager = false) => `<figure class="dive-photo">
  <img src="${image.src}" alt="${esc(image.alt)}" loading="${eager ? 'eager' : 'lazy'}">
  <figcaption>${esc(image.caption)}</figcaption>
</figure>`;

const pressPhotoLinks = (images) => `<div class="dive-image-links">${images.map(image =>
  `<a href="${esc(image.url)}" target="_blank" rel="noopener">${esc(image.caption)} →</a>`).join('')}</div>`;

const sourcePick = (weeklyIssues, dive) => weeklyIssues
  .find(issue => issue.number === dive.issue)?.picks.find(pick => pick.title === dive.pickTitle);

export function renderDeepDiveSection(deepDives, weeklyIssues) {
  return `<section class="dive-section" id="deep-dive" aria-labelledby="deep-dive-title">
    <div class="section-heading">
      <h2 id="deep-dive-title">전시딥다이브</h2>
      <p>전시장에 가면 어디부터 볼까요?</p>
    </div>
    <div class="dive-grid">
      ${deepDives.map(dive => {
        const image = dive.cover.src ? dive.cover : sourcePick(weeklyIssues, dive).image;
        return `<article class="dive-card">
        ${dive.cover.src ? photograph(image) : `<div class="dive-poster">${photograph(image)}</div>`}
        <p class="eyebrow"><span>${esc(dive.venue)}</span></p>
        <h3><a href="${dive.id}.html">${esc(dive.question)}</a></h3>
        <p class="dive-exhibition">${esc(dive.exhibition)}</p>
        <p class="story-summary">${esc(dive.summary)}</p>
        <span class="text-link" aria-hidden="true">전시딥다이브 읽기</span>
      </article>`;
      }).join('\n')}
    </div>
  </section>`;
}

const shortDate = (isoDate) => isoDate.slice(5).split('-').map(Number).join('.');

export function renderDeepDivePage({ site, dive, weeklyIssues, today, pageHead, header, footer }) {
  const issue = weeklyIssues.find(issue => issue.number === dive.issue);
  const pick = sourcePick(weeklyIssues, dive);
  const ended = pick.endDate < today;
  const period = `${pick.startDate.slice(0,4)}.${shortDate(pick.startDate)}–${shortDate(pick.endDate)}`;

  return `${pageHead({
    site,
    title: `${dive.question} | CRACKERS 전시딥다이브`,
    description: dive.summary,
    path: `/${dive.id}`,
    type: 'article',
    stylesheet: '/assets/home-issue.css',
    stylesheetVersion: site.homeAssetVersion,
  })}
<body>
${header}
<main class="shell dive-page" id="content">
  <p class="dive-return"><a class="text-link" href="index.html#deep-dive">전시딥다이브 모아보기</a></p>
  <article>
    <header class="dive-page-header">
      <p class="eyebrow">전시딥다이브 ${dive.number} <span>${esc(dive.venue)}</span></p>
      <h1>${esc(dive.question)}</h1>
      <p class="dive-exhibition">${esc(dive.exhibition)}</p>
      <p>${esc(dive.summary)}</p>
    </header>
    <div class="dive-lead">${dive.cover.src ? photograph(dive.cover, true) : pressPhotoLinks([dive.cover])}</div>
    ${dive.scenes.map(scene => `<section class="dive-scene">
      <div class="dive-scene-copy">
        <h2>${esc(scene.heading)}</h2>${scene.text ? `\n        <p>${esc(scene.text)}</p>` : ''}
      </div>
      ${dive.cover.src ? `<div class="dive-figures${scene.figures.length === 2 ? ' paired' : ''}">
        ${scene.figures.map(figure => photograph(figure)).join('\n')}
      </div>` : pressPhotoLinks(scene.figures)}
    </section>`).join('\n')}
    <aside class="dive-visit" aria-labelledby="dive-visit-title">
      <h2 id="dive-visit-title">전시 정보</h2>
      <p>${esc(pick.venue)}</p>
      <p>${ended ? '전시 종료 · ' : ''}${period}</p>
      <div><a class="text-link" href="${esc(pick.url)}" target="_blank" rel="noopener">공식 전시 안내</a>
      <a class="text-link" href="exhibitions.html#issue-${issue.number}">전시줍줍 #${issue.number}</a></div>
    </aside>
  </article>
</main>
${footer}
</body></html>`;
}
