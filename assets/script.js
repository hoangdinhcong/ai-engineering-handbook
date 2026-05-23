// Shared scripts for AI Engineering docs
const REPO_URL = 'https://github.com/hoangdinhcong/ai-engineering-handbook';

// Giscus (GitHub Discussions-backed comments) — chỉ render trên trang /sections/*.
// Setup:
//   1. Enable Discussions trên repo (Settings → General → Features → Discussions)
//   2. Install giscus app: https://github.com/apps/giscus → chọn repo này
//   3. Vào https://giscus.app, nhập repo "hoangdinhcong/ai-engineering-handbook",
//      pick category (vd "Comments" hoặc "Announcements"), copy repoId + categoryId
//   4. Thay 2 giá trị REPLACE_ME bên dưới — comments sẽ tự render mỗi bài
const GISCUS = {
  repo: 'hoangdinhcong/ai-engineering-handbook',
  repoId: 'REPLACE_ME',
  category: 'Comments',
  categoryId: 'REPLACE_ME',
  theme: 'dark_dimmed',
  lang: 'vi',
};

function makeEl(tag, props = {}, children = []) {
  const el = document.createElement(tag);
  Object.assign(el, props);
  for (const child of children) {
    if (child == null) continue;
    el.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  }
  return el;
}

function makeGithubIcon() {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '16');
  svg.setAttribute('height', '16');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', 'M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.5 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z');
  svg.appendChild(path);
  return svg;
}

function makeExternalLink(href, className, children) {
  const a = makeEl('a', { href, className, target: '_blank', rel: 'noopener' }, children);
  return a;
}

function makeFacebookIcon() {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '18');
  svg.setAttribute('height', '18');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', 'M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z');
  svg.appendChild(path);
  return svg;
}

function makeLinkedinIcon() {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '18');
  svg.setAttribute('height', '18');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z');
  svg.appendChild(path);
  return svg;
}

function injectHeaderGithub() {
  const brand = document.querySelector('.top-nav .brand');
  if (!brand || brand.querySelector('.brand-gh')) return;
  const link = makeExternalLink(REPO_URL, 'brand-gh', [makeGithubIcon()]);
  link.setAttribute('aria-label', 'GitHub repository');
  link.title = 'GitHub repository';
  brand.appendChild(link);
}

function injectSiteFooter() {
  const main = document.querySelector('main');
  if (!main) return;
  main.querySelectorAll('.index-footer, .site-credit').forEach(el => el.remove());

  const iconsRow = makeEl('div', { className: 'credit-icons' }, [
    (() => {
      const a = makeExternalLink(REPO_URL, 'credit-icon', [makeGithubIcon()]);
      a.setAttribute('aria-label', 'GitHub');
      a.title = 'GitHub';
      return a;
    })(),
    (() => {
      const a = makeExternalLink('https://www.facebook.com/conghd2709/', 'credit-icon', [makeFacebookIcon()]);
      a.setAttribute('aria-label', 'Facebook');
      a.title = 'Facebook';
      return a;
    })(),
    (() => {
      const a = makeExternalLink('https://www.linkedin.com/in/hoang-dinh-cong/', 'credit-icon', [makeLinkedinIcon()]);
      a.setAttribute('aria-label', 'LinkedIn');
      a.title = 'LinkedIn';
      return a;
    })(),
  ]);

  const contribLine = makeExternalLink(`${REPO_URL}/issues`, 'credit-line', ['Đóng góp qua Issues hoặc PR']);

  main.appendChild(makeEl('footer', { className: 'site-credit' }, [iconsRow, contribLine]));
}

function injectGiscus() {
  // Only on lesson pages, and only if config has been filled in
  if (!location.pathname.includes('/sections/')) return;
  if (GISCUS.repoId === 'REPLACE_ME' || GISCUS.categoryId === 'REPLACE_ME') return;

  const main = document.querySelector('main');
  if (!main) return;
  const nav = main.querySelector('.section-footer');

  const heading = makeEl('h2', { id: 'comments', className: 'giscus-heading', textContent: 'Bình luận' });
  const container = makeEl('div', { className: 'giscus-container' });

  const s = document.createElement('script');
  s.src = 'https://giscus.app/client.js';
  Object.entries({
    'data-repo': GISCUS.repo,
    'data-repo-id': GISCUS.repoId,
    'data-category': GISCUS.category,
    'data-category-id': GISCUS.categoryId,
    'data-mapping': 'pathname',
    'data-strict': '0',
    'data-reactions-enabled': '1',
    'data-emit-metadata': '0',
    'data-input-position': 'bottom',
    'data-theme': GISCUS.theme,
    'data-lang': GISCUS.lang,
    crossorigin: 'anonymous',
  }).forEach(([k, v]) => s.setAttribute(k, v));
  s.async = true;
  container.appendChild(s);

  if (nav) {
    main.insertBefore(heading, nav);
    main.insertBefore(container, nav);
  } else {
    main.appendChild(heading);
    main.appendChild(container);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  injectHeaderGithub();
  injectSiteFooter();
  injectGiscus();

  // Tabs
  document.querySelectorAll('.tabs').forEach(tabs => {
    const buttons = tabs.querySelectorAll('.tab-buttons button');
    const panels = tabs.querySelectorAll('.tab-panel');
    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        panels[i].classList.add('active');
      });
    });
  });

  // ===== TOC: scroll-spy + smooth-scroll + tap-to-expand =====
  const toc = document.querySelector('.toc');
  const tocLinks = document.querySelectorAll('.toc a[href^="#"]');
  const tocSections = [...tocLinks].map(a => {
    const id = a.getAttribute('href').slice(1);
    return { link: a, el: document.getElementById(id) };
  }).filter(x => x.el);

  // Scroll-spy: highlight section currently in view
  function updateActiveToc() {
    const scrollPos = window.scrollY + 120;
    let activeIdx = -1;
    tocSections.forEach((s, i) => {
      if (s.el.offsetTop <= scrollPos) activeIdx = i;
    });
    tocSections.forEach((s, i) => {
      s.link.classList.toggle('active', i === activeIdx);
    });
  }
  if (tocSections.length) {
    updateActiveToc();
    window.addEventListener('scroll', updateActiveToc, { passive: true });
    window.addEventListener('resize', updateActiveToc);
  }

  // Backdrop for centered popup (created lazily)
  let backdrop = null;
  function getBackdrop() {
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'toc-backdrop';
      document.body.appendChild(backdrop);
      backdrop.addEventListener('click', closeToc);
    }
    return backdrop;
  }
  function openToc() {
    if (!toc) return;
    toc.classList.add('expanded');
    getBackdrop().classList.add('active');
  }
  function closeToc() {
    if (!toc) return;
    toc.classList.remove('expanded');
    if (backdrop) backdrop.classList.remove('active');
  }

  // Click anywhere on the collapsed rail (dash or empty space) → open popup
  if (toc) {
    toc.addEventListener('click', e => {
      if (toc.classList.contains('expanded')) return; // already open → let link clicks through
      e.preventDefault();
      e.stopPropagation();
      openToc();
    });
  }

  // Smooth-scroll on link click + auto-collapse after navigating
  tocLinks.forEach(link => {
    link.addEventListener('click', e => {
      // If rail still collapsed, parent handler will open it — let that handle
      if (toc && !toc.classList.contains('expanded')) return;

      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#' + id);
        closeToc();
      }
    });
  });

  // Esc key closes
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeToc();
  });

  // Copy button on <pre> blocks
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.textContent = 'copy';
    Object.assign(btn.style, {
      position: 'absolute', top: '8px', right: '8px',
      background: 'rgba(255,255,255,0.04)', color: 'var(--text-mute)',
      border: '1px solid var(--line-soft)', borderRadius: '4px',
      padding: '2px 8px', fontSize: '11px', fontFamily: 'var(--font-mono)',
      cursor: 'pointer', opacity: '0', transition: 'opacity 0.2s'
    });
    pre.style.position = 'relative';
    pre.appendChild(btn);
    pre.addEventListener('mouseenter', () => btn.style.opacity = '1');
    pre.addEventListener('mouseleave', () => btn.style.opacity = '0');
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code')?.innerText ?? pre.innerText;
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = 'copied';
        setTimeout(() => btn.textContent = 'copy', 1200);
      });
    });
  });
});
