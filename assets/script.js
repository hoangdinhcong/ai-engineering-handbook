// Shared scripts for AI Engineering docs
document.addEventListener('DOMContentLoaded', () => {
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
