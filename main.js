(() => {
  // Images carry the crop saved in the design: s = scale, x/y = offset in % of the frame.
  const PROJECTS = [
    { id: 'ment', title: 'MENT', tagline: 'Founding a longevity brand for women.', context: 'Founder · Longevity startup', label: 'Brand. Product. Launch.',
      caps: ['Brand', 'Product', 'UX/UI', 'Concept', 'Copy', 'Experience'],
      chain: ['Idea', 'Positioning', 'Brand', 'Product', 'UX/UI', 'Copy', 'Launch'],
      meta: [['Role', 'Founder. Built the company, brand and product from first idea to launch'], ['Disciplines', 'Brand · Product · UX/UI · Concept · Copy · Experience'], ['Context', 'My own longevity company for women'], ['Delivered', 'Positioning, identity, product concept, app UX/UI, launch communication']],
      cover: { src: 'assets/ment-cover-crop.webp', alt: 'MENT, brand hero', s: 1, x: 0, y: 14.796 }, aspect: '5/4',
      hero: { video: 'assets/ment-video.mp4' },
      chapters: [
        ['The idea', 'Longevity was being sold as biohacking for men. Women were an afterthought.', 'I started MENT with a question: what would a longevity brand look like if it were built around women’s bodies, lives and ambitions from day one? No product, no name, no visual language yet. Just a conviction that the category needed a different voice.'],
        ['My role', 'I founded it. Before there was a company, there was the idea.', 'As founder I set the vision and positioning, built the brand from name to visual identity, defined the product concept, designed the UX/UI and wrote the voice that ties it all together. Holding every thread myself meant the idea never got diluted between handoffs.'],
        ['The thinking', 'Science people trust. A tone they actually want to hear.', 'Health brands tend to pick a lane: clinical and cold, or soft and vague. I looked for the space between: evidence-led but warm, precise but never patronising. Every decision, from typography to onboarding copy, was tested against one question: does this make her feel informed, or managed?'],
        ['The creative direction', 'Quietly luxurious. Clinically clear.', 'An editorial identity with restrained colour, generous space and type that sits closer to a fashion house than a pharmacy. Biomarkers became a visual system of their own, data rendered with the care of a beautiful object.'],
        ['The experience', 'A product that turns markers into meaning.', 'The app translates complex health data into clear, personal guidance. I designed the journey from first test to ongoing insight, built the UI system and wrote the in-product language, so the product speaks with the same voice as the brand.',
          [{ alt: 'App screens, results & insights', aspect: '2576/1249', src: 'assets/ment-app-heart.png', s: 1.0814, x: 4.0847, y: 4.0706 }]],
        ['The outcome', 'A brand, a product and a story, built as one thing.', 'MENT went to market with a coherent identity, a designed product and the communication to launch it. The lesson I keep: when strategy, brand and product are shaped together, you never have to glue them back together later.']
      ] },
    { id: 'keyboardkit', title: 'KeyboardKit', tagline: 'Turning a developer product into a clearer, more premium digital experience.', context: 'Developer product · Freelance', label: 'Structure. Interface. Words.',
      caps: ['UX', 'UI', 'Information Architecture', 'Copy', 'Conversion', 'Product'],
      chain: ['Product', 'Structure', 'Interface', 'Copy', 'Conversion'],
      meta: [['Role', 'Freelance product & web designer'], ['Disciplines', 'UX · UI · Information Architecture · Copy · Conversion · Product'], ['Context', 'SDK for building custom iOS keyboards'], ['Delivered', 'Information architecture, website UI, product messaging, conversion flow']],
      cover: { src: 'assets/keyboardkit-cover-2.png', alt: 'KeyboardKit, website hero', s: 1.1052, x: 1.0314, y: 3.3833 }, aspect: '4/3',
      hero: { src: 'assets/keyboardkit-cover-2.png', alt: 'KeyboardKit, website hero, full bleed', s: 1, x: 0.4949, y: 0 },
      chapters: [
        ['The idea', 'A great product, hard to understand from the outside.', 'KeyboardKit helps developers build custom keyboards for iOS. The capability was there; the story wasn’t. Visitors had to work too hard to see what it did, what Pro unlocked and why it was worth paying for.'],
        ['My role', 'Structure, interface and words.', 'I reworked the information architecture, designed the site UI and rewrote the key messaging, treating clarity and conversion as the same problem.'],
        ['The thinking', 'Developers hate being sold to. So don’t sell. Show.', 'I organised the site around what developers come to do: evaluate, get started, upgrade. Fewer claims, more proof. Tiers and pricing explained in plain language.'],
        ['The creative direction', 'Premium, without the gloss.', 'A sharper, calmer visual system that makes an independent developer product feel as considered as the work it enables.'],
        ['The experience', 'A clearer path from curious to committed.', 'Restructured navigation, focused landing pages, a clearer feature comparison and copy that respects the reader’s time.',
          [{ alt: 'KeyboardKit, short film', aspect: '16/9', src: 'assets/keyboardkit-short-16x9.mp4' }]],
        ['The outcome', 'Design thinking and business thinking, in the same file.', 'The product now explains itself faster and makes its value easier to buy. A good reminder that UX and conversion are rarely at odds.']
      ] },
    { id: 'events', title: 'Events & Community', tagline: 'Creating experiences that bring people together.', context: 'Girls at Tech Nordics · Tech events', label: 'People. Rooms. Moments.',
      caps: ['Experience', 'Concept', 'Communication', 'Community', 'Event Design'],
      chain: ['Concept', 'Community', 'Communication', 'Experience'],
      meta: [['Role', 'Concept, coordination & communication'], ['Disciplines', 'Experience · Concept · Communication · Community · Event Design'], ['Context', 'Girls at Tech Nordics and technology events'], ['Delivered', 'Event concepts, programming, visual communication, on-site experience']],
      cover: { src: 'assets/events-cover-crop.webp', alt: 'Events, atmosphere / crowd' }, aspect: '5/4',
      hero: { src: 'assets/events-hero.webp', alt: 'Events, atmosphere / crowd, full bleed' },
      chapters: [
        ['The idea', 'A room full of people is the oldest interface there is.', 'Tech communities need places to meet, learn and feel they belong, especially for people who don’t always see themselves on stage. The question was how to design those moments as deliberately as a product.'],
        ['My role', 'From concept to the moment the doors open.', 'Through Girls at Tech Nordics and other technology events I’ve developed concepts, coordinated programmes and speakers, created the communication and shaped the experience on the day.'],
        ['The thinking', 'Design the feeling first, then the agenda.', 'Who walks in alone? What makes them stay? I worked backwards from how we wanted people to feel on the way out, then built the format, flow and touchpoints to get there.'],
        ['The creative direction', 'Confident, warm, unmistakably ours.', 'A visual and verbal tone that feels welcoming without being soft, and professional without being corporate.'],
        ['The experience', 'Evenings people talk about the next day.', 'Talks, panels and networking formats; invitations and social content; signage and the small details on site: all part of one experience.',
          [{ alt: 'Community, audience', aspect: '2304/1536', src: 'assets/events-cover.jpg' }]],
        ['The outcome', 'Community is a product too.', 'The events grew networks, gave new voices a stage and taught me that experience design doesn’t stop at the screen.']
      ] }
  ];
  const STEPS = ['Idea', 'Concept', 'Experience', 'Design', 'Communication', 'Launch'];
  const CAPS = [
    ['Product', 'work.', 'Digital products, UX/UI, user journeys, concepts and product thinking.'],
    ['Brand', 'look right.', 'Visual identity, art direction, visual systems, storytelling and positioning.'],
    ['Experience', 'feel real.', 'Events, communities, and journeys across digital and physical spaces.'],
    ['Communication', 'stick.', 'Copy, messaging, presentations, campaigns, storytelling and content.']
  ];
  const EXP = [
    ['Saab', 'UX Lead / UX Designer', 'Design leadership for internal products and stakeholder alignment'],
    ['Saab', 'IT Project Management', 'Leading IT initiatives from scope to delivery'],
    ['MENT', 'Founder', 'Longevity brand for women, from concept to launch'],
    ['Freelance', 'Designer, KeyboardKit', 'UX/UI, information architecture, copy and conversion'],
    ['Girls at Tech Nordics & tech events', 'Events & Community', 'Concepts, programming, communication and coordination']
  ];

  const motion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, root = document) => root.querySelector(sel);
  const pad = n => String(n).padStart(2, '0');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const total = pad(PROJECTS.length);

  const frame = (m, lazy = true) =>
    `<div class="frame" data-s="${m.s ?? 1}" data-x="${m.x ?? 0}" data-y="${m.y ?? 0}"><img src="${m.src}" alt="${esc(m.alt || '')}"${lazy ? ' loading="lazy"' : ''}></div>`;
  const video = (src, controls) =>
    `<video src="${src}" muted loop playsinline preload="metadata"${controls ? ' controls' : ''}></video>`;

  // Same geometry as the design's image slots: cover-fill the frame, scale by s,
  // centre at (50+x)% / (50+y)% of the frame, clamped so no edge shows.
  const layoutFrame = img => {
    const f = img.parentElement, iw = img.naturalWidth, ih = img.naturalHeight, fw = f.clientWidth, fh = f.clientHeight;
    if (!iw || !ih || !fw || !fh) return;
    const s = +f.dataset.s || 1;
    const k = Math.max(fw / iw, fh / ih) * s;
    const mx = Math.max(0, (iw * k / fw - 1) * 50), my = Math.max(0, (ih * k / fh - 1) * 50);
    const x = Math.max(-mx, Math.min(mx, +f.dataset.x || 0)), y = Math.max(-my, Math.min(my, +f.dataset.y || 0));
    Object.assign(img.style, { width: iw * k / fw * 100 + '%', height: ih * k / fh * 100 + '%', left: 50 + x + '%', top: 50 + y + '%' });
    img.classList.add('is-framed');
  };
  // Re-layout whenever a frame gets a size (also when a hidden view becomes visible).
  const frameObserver = new ResizeObserver(entries => entries.forEach(e => {
    const img = e.target.querySelector('img');
    if (img) layoutFrame(img);
  }));
  const initFrames = root => root.querySelectorAll('.frame > img').forEach(img => {
    img.addEventListener('load', () => layoutFrame(img));
    frameObserver.observe(img.parentElement);
    layoutFrame(img);
  });

  // Videos only play while on screen.
  const videoObserver = 'IntersectionObserver' in window && new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { const p = e.target.play(); if (p && p.catch) p.catch(() => {}); } else e.target.pause();
  }), { threshold: 0.4 });
  const initVideos = root => root.querySelectorAll('video').forEach(v => {
    v.muted = true;
    if (videoObserver) videoObserver.observe(v); else v.autoplay = true;
  });

  // ---------- Views (home / about) ----------
  let view = 'home';
  const setView = v => {
    view = v;
    document.querySelectorAll('[data-view]').forEach(el => { el.hidden = el.dataset.view !== v; });
    $('#nav-about').classList.toggle('is-active', v === 'about');
  };
  const scrollToId = id => {
    requestAnimationFrame(() => {
      const el = id && document.getElementById(id);
      window.scrollTo({ top: el ? el.getBoundingClientRect().top + window.scrollY - 70 : 0, behavior: el ? 'smooth' : 'auto' });
    });
  };
  document.querySelectorAll('[data-go]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const go = a.dataset.go;
    setView(go === 'stay' ? view : go);
    scrollToId(a.dataset.target || null);
    history.replaceState(null, '', go === 'about' ? '#about' : (a.dataset.target ? '#' + a.dataset.target : location.pathname));
  }));
  $('#to-top').addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // ---------- Nav: hide on scroll down, fill once scrolled ----------
  const nav = $('#nav');
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY, d = y - lastY;
    const atTop = y < 40;
    nav.classList.toggle('is-scrolled', !atTop);
    if (atTop) { nav.classList.remove('is-hidden'); lastY = y; return; }
    if (Math.abs(d) < 6) return;
    nav.classList.toggle('is-hidden', d > 0 && y > 120);
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- About: process steps ----------
  const steps = $('#steps');
  steps.innerHTML = STEPS.map((l, i) =>
    `<span class="step"><span class="step-pill">${l}</span>${i < STEPS.length - 1 ? '<span class="step-arrow" aria-hidden="true">→</span>' : ''}</span>`).join('');
  const pills = steps.querySelectorAll('.step-pill');
  let step = 0;
  const renderSteps = () => pills.forEach((p, i) => p.classList.toggle('is-on', !motion || i === step));
  renderSteps();
  if (motion) setInterval(() => { step = (step + 1) % STEPS.length; renderSteps(); }, 1400);

  // ---------- What I do ----------
  const track = $('#word-track'), tabs = $('#caps-tabs'), desc = $('#caps-desc');
  track.innerHTML = CAPS.map(c => `<span>${c[1]}</span>`).join('');
  tabs.innerHTML = CAPS.map((c, i) => `<button type="button" class="caps-tab" data-i="${i}">${c[0]}</button>`).join('');
  let cap = 0, paused = 0;
  const renderCap = () => {
    track.style.transform = `translateY(${-1.08 * cap}em)`;
    desc.textContent = CAPS[cap][2];
    tabs.querySelectorAll('.caps-tab').forEach((b, i) => {
      b.classList.toggle('is-on', i === cap);
      b.setAttribute('aria-pressed', i === cap);
    });
  };
  const pick = e => { paused = Date.now(); const i = +e.currentTarget.dataset.i; if (i !== cap) { cap = i; renderCap(); } };
  tabs.querySelectorAll('.caps-tab').forEach(b => { b.addEventListener('click', pick); b.addEventListener('mouseenter', pick); });
  renderCap();
  if (motion) setInterval(() => { if (Date.now() - paused > 6000) { cap = (cap + 1) % CAPS.length; renderCap(); } }, 2600);

  // ---------- Work ----------
  $('#work').innerHTML = PROJECTS.map((p, i) => `
    <article class="project" data-screen-label="${esc(p.title)}" style="background:${i % 2 === 0 ? 'var(--bg-2)' : 'var(--bg)'}">
      <div class="project-inner">
        <div class="meta-row"><span>Selected work ${pad(i + 1)}/${total}</span><span>${esc(p.context)}</span><span>${esc(p.caps.slice(0, 3).join(' · '))}</span></div>
        <div class="project-row${i % 2 ? ' reverse' : ''}">
          <div class="project-media">
            <div class="project-cover" data-open="${i}" style="aspect-ratio:${p.aspect}">${frame(p.cover)}</div>
          </div>
          <div class="project-text">
            <span class="project-label">${esc(p.label)}</span>
            <h3 class="project-title" data-open="${i}">${esc(p.title)}</h3>
            <p class="project-tagline">${esc(p.tagline)}</p>
            <div class="project-actions">
              <button type="button" class="btn-rose" data-open="${i}">Read the story</button>
              <span class="project-caps">${esc(p.caps.join(' · '))}</span>
            </div>
          </div>
        </div>
      </div>
    </article>`).join('');
  document.querySelectorAll('[data-open]').forEach(el => el.addEventListener('click', () => open(+el.dataset.open)));

  // ---------- Experience ----------
  $('#experience-list').innerHTML = EXP.map(([org, role, focus]) =>
    `<div class="exp-row"><span class="exp-org">${esc(org)}</span><span class="exp-role">${esc(role)}</span><span class="exp-focus">${esc(focus)}</span></div>`).join('');

  // ---------- Case study overlay ----------
  const overlay = $('#overlay');
  let openIdx = null, closeT;

  const renderCase = i => {
    const c = PROJECTS[i], n = PROJECTS[(i + 1) % PROJECTS.length];
    const hero = c.hero.video ? video(c.hero.video) : frame(c.hero, false);
    const chapters = c.chapters.map(([label, lead, body, imgs], j) => `
      <section class="cs-chapter">
        <div class="cs-chapter-row">
          <div class="cs-chapter-label"><span class="num">${pad(j + 1)}</span><span>${esc(label)}</span></div>
          <div class="cs-chapter-body">
            <p class="cs-lead">${esc(lead)}</p>
            <p class="cs-body">${esc(body)}</p>
          </div>
        </div>
        ${imgs ? `<div class="cs-imgs">${imgs.map(im =>
          `<div class="cs-img" style="aspect-ratio:${im.aspect}">${/\.mp4$/i.test(im.src) ? video(im.src, true) : frame(im)}</div>`).join('')}</div>` : ''}
      </section>`).join('');

    overlay.innerHTML = `
      <div class="ov-bar-wrap">
        <div class="ov-bar">
          <button type="button" class="ov-btn solid" data-act="close">← Close</button>
          <span>${pad(i + 1)}/${total} · ${esc(c.title)}</span>
          <button type="button" class="ov-btn outline" data-act="next">Next →</button>
        </div>
      </div>
      <article data-screen-label="Case study">
        <div class="cs-wrap">
          <div class="cs-head">
            <div class="meta-row"><span>Case study ${pad(i + 1)}</span><span>${esc(c.context)}</span></div>
            <h1 class="cs-title">${esc(c.title)}</h1>
            <p class="cs-tagline">${esc(c.tagline)}</p>
            <div class="cs-meta">${c.meta.map(([k, v]) =>
              `<div class="cs-meta-item"><div class="cs-meta-k">${esc(k)}</div><div class="cs-meta-v">${esc(v)}</div></div>`).join('')}</div>
          </div>
        </div>
        <div class="cs-media-wrap">
          <div class="cs-hero">${hero}</div>
          <div class="cs-chain-label">How the disciplines connect</div>
          <div class="cs-chain">${c.chain.map((l, j) =>
            `<span class="cs-chain-item"><span class="cs-chain-pill">${esc(l)}</span>${j < c.chain.length - 1 ? '<span style="color:var(--rose)" aria-hidden="true">→</span>' : ''}</span>`).join('')}</div>
        </div>
        <div class="cs-chapters">${chapters}</div>
        <div class="cs-next-wrap">
          <button type="button" class="next-card" data-act="next">
            <span class="eyebrow">Next ${pad(((i + 1) % PROJECTS.length) + 1)}</span>
            <div class="next-title">${esc(n.title)} →</div>
          </button>
        </div>
      </article>`;
    initFrames(overlay);
    initVideos(overlay);
  };

  overlay.addEventListener('click', e => {
    const act = e.target.closest('[data-act]');
    if (!act) return;
    if (act.dataset.act === 'close') close(); else next();
  });

  function open(i) {
    clearTimeout(closeT);
    openIdx = i;
    renderCase(i);
    overlay.classList.add('is-open');
    overlay.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    history.replaceState(null, '', '#case-' + PROJECTS[i].id);
    setTimeout(() => { const b = overlay.querySelector('[data-act="close"]'); if (b) b.focus({ preventScroll: true }); }, 50);
  }
  function close() {
    if (openIdx === null) return;
    const was = openIdx;
    openIdx = null;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    history.replaceState(null, '', '#work');
    closeT = setTimeout(() => { overlay.innerHTML = ''; }, 800);
    const btn = document.querySelectorAll('.btn-rose[data-open]')[was];
    if (btn) btn.focus({ preventScroll: true });
  }
  function next() {
    const n = ((openIdx ?? 0) + 1) % PROJECTS.length;
    openIdx = n;
    renderCase(n);
    overlay.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '#case-' + PROJECTS[n].id);
  }
  window.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  initFrames(document);

  // ---------- Deep links ----------
  const hash = location.hash.slice(1);
  if (hash === 'about') setView('about');
  else {
    setView('home');
    const ci = PROJECTS.findIndex(p => 'case-' + p.id === hash);
    if (ci >= 0) open(ci);
  }
})();
