# CRACKERS website

CRACKERS의 정적 홈페이지입니다. 기존의 시각 디자인은 유지하면서 콘텐츠와 페이지 생성을 분리해 관리합니다.

## 콘텐츠 수정

홈, 명화 에피소드, 전시줍줍의 내용은 모두 `src/content.mjs`에서 관리합니다.

- `site`: 사이트 이름, 소개, 외부 링크
- `episodes`: 명화 에피소드
- `weeklyIssues`: 전시줍줍

새 콘텐츠를 추가하거나 기존 내용을 고친 뒤 아래 명령으로 페이지를 생성합니다.

```bash
npm run build
```

생성 결과를 검사하려면:

```bash
npm run check
```

## 파일 구조

```text
src/content.mjs     콘텐츠 원본
src/render.mjs      공통 페이지 템플릿
scripts/build.mjs   정적 페이지 생성과 검증
assets/home.css     홈페이지 스타일
assets/article.css  상세 글 스타일
index.html          자동 생성된 홈페이지
ep*.html            자동 생성된 명화 에피소드
sitemap.xml         자동 생성된 사이트맵
robots.txt          검색 엔진 설정
```

`index.html`, `ep*.html`, `sitemap.xml`은 자동 생성 파일입니다. 직접 수정하지 않고 원본 콘텐츠나 템플릿을 수정한 뒤 다시 빌드합니다.

## 배포

현재처럼 생성된 파일과 원본 파일을 함께 GitHub에 반영하면 Cloudflare가 저장소 루트를 배포합니다. 외부 패키지 의존성이 없어서 기존 정적 배포 방식은 그대로 유지됩니다.

## 권장 작업 순서

1. `src/content.mjs`에 콘텐츠 추가 또는 수정
2. `npm run build`
3. 브라우저에서 데스크톱·모바일 확인
4. `npm run check`
5. 변경사항 검토 후 커밋·푸시
