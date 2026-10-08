/* ==============================================
   BIRTHDAY WEBSITE — script.js
   Priya (Potti) | Premium Experience
   Edit birthdayConfig to personalise.
============================================== */

/* ── CONFIG ─────────────────────────────────── */
const cfg = {
  name:     'Priya',
  nickname: 'Potti',
  letter: {
    greeting: '💌 Happy Birthday, My Best Friend ❤️',
    body:
`Happy Birthday to the most precious person in my life.

Honestly, no amount of words can explain how much you mean to me. You are not just my best friend — you are my comfort place, my safe person, and one of the biggest reasons behind my smiles.

Life became brighter and more meaningful after you came into it. Through every laugh, silly fight, late-night conversation, tears, and unforgettable memory, you have always stayed beside me.

Thank you for understanding the version of me that no one else does and for never letting go of my hand.

We may not talk every day, and distance may sometimes separate our paths, but you will always have a special place in my heart.

If I had to choose my best friend again, I would still choose you, every single time. 🫶🏻

Some bonds aren't made by blood; they're made by love, trust, memories, and endless care. And ours is something I will always treasure.

Forever isn't a promise for us — it's a feeling. ❤️

No matter where life takes us, you'll always be one of the most beautiful chapters of my life.

Happiest Birthday, Priya (Potti). ❤️`,
    sign: 'Forever yours ❤️'
  },
  timeline: [
    {
      ch: 'Timeline 1',
      tag: 'October 2023',
      icon: '📸',
      heading: 'The Day I Met You for the First Time',
      paragraphs: [
        `I still remember the first time I met you in <strong>October 2023</strong>. At that moment, I didn't know how important you would become in my life. But slowly, as I got to know you, I realized that you were not just another person I met in college — you were someone truly special.`,
        `Somewhere along the way, you became my <strong>one and only best friend</strong>, the person with whom I could share my happiness, my problems, my random thoughts, and all the little things that mattered to me.`,
        `Looking back now, I feel that meeting you was one of the most beautiful things that happened to me.`
      ]
    },
    {
      ch: 'Timeline 2',
      tag: 'Endless Talks',
      icon: '😄',
      heading: 'Crazy Conversations',
      paragraphs: [
        `From serious talks to completely meaningless conversations that somehow lasted for hours… every conversation with you became a memory. 😄`,
        `We could start talking about one thing and somehow end up discussing something completely random.`,
        `Those silly conversations, jokes, teasing, and endless talks are some of the moments I will always remember.`
      ]
    },
    {
      ch: 'Timeline 3',
      tag: 'College Days',
      icon: '🎓',
      heading: 'College Chaos & Unforgettable Moments',
      paragraphs: [
        `College gave us more than just classes and assignments — it gave me a friend like you.`,
        `From sitting together, laughing during random moments, helping each other with work, sharing looks when something funny happened in class, to creating our own little jokes that nobody else understood…`,
        `Somehow even the most ordinary college days became special because you were there. These are the moments that made college life much more memorable for me.`
      ]
    },
    {
      ch: 'Timeline 4',
      tag: 'Through Everything',
      icon: '🤝',
      heading: 'We Got Through It Together',
      paragraphs: [
        `I know our friendship wasn't always perfect. There were moments when misunderstandings happened, difficult situations came between us, and sometimes things weren't as easy as we wanted them to be.`,
        `But what makes our friendship special is that we didn't let those moments end it. We understood each other, overcame those difficult times, and somehow came out stronger.`,
        `Those moments taught me that a true friendship isn't about never having problems — it's about choosing to stay, understand, forgive, and move forward together. Thank you for being there through both the good times and the hard ones.`
      ]
    },
    {
      ch: 'Timeline 5',
      tag: 'Always & Forever',
      icon: '✨',
      heading: 'Every Moment With You',
      paragraphs: [
        `Honestly, <strong>every moment I spend with you becomes a memory worth keeping</strong>. It doesn't have to be a special occasion or a big adventure.`,
        `Even the simplest conversations, random laughs, silly moments, and ordinary days feel special when I'm with you.`,
        `Maybe that's what makes our friendship so beautiful — it's not just the big moments, but all the little moments in between that I will always remember.`
      ]
    },
    {
      ch: 'Timeline 6',
      tag: 'Right Now & Beyond',
      icon: '❤️',
      heading: 'Still Being Written...',
      paragraphs: [
        `We've already created so many memories together, but our story isn't finished yet.`,
        `There are still so many conversations to have, places to go, laughs to share, and memories waiting to be made.`,
        `<strong>And honestly, I can't wait to see what comes next.</strong> ✨`
      ]
    }
  ],
  gallery: [
    { src:'assets/images/photo1.jpg', cap:'The day I met you for the first time — October 2023' },
    { src:'assets/images/photo2.jpg', cap:'Crazy conversations that never ended' },
    { src:'assets/images/photo3.jpg', cap:'College chaos & unforgettable moments' },
    { src:'assets/images/photo4.jpg', cap:'We got through it together' },
    { src:'assets/images/photo5.jpg', cap:'Every moment with you is worth keeping' },
    { src:'assets/images/photo6.jpg', cap:'Still being written... ✨' }
  ],
  reasons: [
    { ico:'fa-face-smile',   title:'Your Smile',      msg:'It lights up every room, every moment, every single time.' },
    { ico:'fa-heart',        title:'Your Kindness',   msg:'The way you care for others is one of the most beautiful things about you.' },
    { ico:'fa-sun',          title:'Your Energy',     msg:'You bring warmth and life wherever you go.' },
    { ico:'fa-shield-halved',title:'Your Strength',   msg:'You\'ve faced hard days with grace. That\'s rare and remarkable.' },
    { ico:'fa-star',         title:'Your Heart',      msg:'So full, so genuine, so incredibly rare.' },
    { ico:'fa-fingerprint',  title:'Your Uniqueness', msg:'There is truly no one else quite like you in this world.' }
  ],
  surprise:
`Congratulations! You just unlocked a little reminder:

You deserve happiness.
You deserve beautiful moments.
You deserve everything good coming your way.

No matter how many birthdays come and go, remember this:

You are loved. You are appreciated.
You are important.

And you make the world a little brighter simply by being you. ❤️`
};

/* ── UTILS ─────────────────────────────────── */
const $ = id => document.getElementById(id);
const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
if (isTouch) document.body.classList.add('is-touch');

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined')
  gsap.registerPlugin(ScrollTrigger);


/* ── VIDEO BACKGROUND ────────────────────────── */
function initVideoBg() {
  const vid = document.getElementById('videoBg');
  if (!vid) return;
  // Try to play (may be blocked until user interaction)
  vid.muted = true;
  vid.play().catch(() => {
    // Will auto-retry on user interaction
    document.addEventListener('click', () => vid.play().catch(()=>{}), { once: true });
    document.addEventListener('touchstart', () => vid.play().catch(()=>{}), { once: true });
  });
  // Pause video when page not visible (save resources)
  document.addEventListener('visibilitychange', () => {
    document.hidden ? vid.pause() : vid.play().catch(()=>{});
  });
}

/* ── LOADING SCREEN ─────────────────────────── */
initVideoBg();

(function loading() {
  const bar = $('loadingBar'), screen = $('loadingScreen');
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random() * 14 + 3;
    if (p >= 100) { p = 100; clearInterval(iv); setTimeout(startIntro, 280); }
    if (bar) bar.style.width = p + '%';
  }, 70);
})();

/* ── STARS ──────────────────────────────────── */
function drawStars(id) {
  const c = $(id); if (!c) return () => {};
  const ctx = c.getContext('2d');
  let W, H, stars = [], raf;
  function resize() {
    W = c.width = window.innerWidth;
    H = c.height = window.innerHeight;
    const n = isTouch ? 75 : 155;
    stars = Array.from({length:n}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*1.4+.25, a: Math.random(),
      sp: Math.random()*.007+.002, d: Math.random()>.5?1:-1
    }));
  }
  function loop() {
    ctx.clearRect(0,0,W,H);
    stars.forEach(s => {
      s.a += s.sp * s.d;
      if (s.a >= 1 || s.a <= 0) s.d *= -1;
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(245,240,232,${s.a})`; ctx.fill();
    });
    raf = requestAnimationFrame(loop);
  }
  window.addEventListener('resize', resize);
  resize(); loop();
  return () => { cancelAnimationFrame(raf); window.removeEventListener('resize',resize); };
}

/* ── PARTICLE SYSTEM ────────────────────────── */
function particles(id, opts) {
  const o = {n: isTouch?22:48, float:true, maxR:2.4, g:0, cols:['rgba(201,168,76,','rgba(232,201,109,','rgba(255,220,100,'], ...opts};
  const c = $(id); if (!c) return {stop:()=>{},burst:()=>{}};
  const ctx = c.getContext('2d');
  let pts = [], W, H, raf;
  function resize() {
    W = c.width  = c.offsetWidth  || window.innerWidth;
    H = c.height = c.offsetHeight || window.innerHeight;
  }
  function mk(x,y,vx,vy,life) {
    const col = o.cols[0|Math.random()*o.cols.length];
    return {
      x: x??Math.random()*W, y: y??Math.random()*H,
      vx: vx??((Math.random()-.5)*.55),
      vy: vy??(o.float ? (Math.random()-.72)*.5 : -Math.random()*2.5-1),
      r: Math.random()*o.maxR+.4, a: Math.random()*.5+.25,
      life: life??Infinity, age:0, col
    };
  }
  function frame() {
    ctx.clearRect(0,0,W,H);
    for (let i = pts.length-1; i >= 0; i--) {
      const p = pts[i];
      p.x += p.vx; p.y += p.vy; p.vy += o.g; p.age++;
      if (o.float) {
        p.a = .28+Math.sin(p.age*.025)*.22;
        if (p.y < -12) { p.y = H+12; p.x = Math.random()*W; }
      } else {
        const lf = p.life === Infinity ? 1 : 1 - p.age/p.life;
        p.a = lf * .85;
        if (p.age >= p.life || p.a <= 0) { pts.splice(i,1); continue; }
      }
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = p.col+p.a+')'; ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  }
  function burst(cx,cy,count) {
    count = count||80;
    for (let i=0;i<count;i++) {
      const a = Math.random()*Math.PI*2, sp = Math.random()*6+1.5;
      pts.push(mk(cx,cy,Math.cos(a)*sp,Math.sin(a)*sp, 55+Math.random()*45));
    }
  }
  window.addEventListener('resize', resize);
  resize();
  pts = Array.from({length:o.n}, () => mk());
  frame();
  return { stop:()=>cancelAnimationFrame(raf), burst };
}

/* ── CONFETTI ───────────────────────────────── */
function confetti(id, dur) {
  dur = dur||3000;
  const c = $(id); if (!c) return;
  const ctx = c.getContext('2d');
  const W = c.width  = c.offsetParent?.offsetWidth  || window.innerWidth;
  const H = c.height = c.offsetParent?.offsetHeight || window.innerHeight;
  const cols = ['#c9a84c','#e8c96d','#fff7e6','#e8a0b4','#ffffff','#ffd700','#ff69b4'];
  const n = isTouch ? 80 : 160;
  const bits = Array.from({length:n}, () => ({
    x: Math.random()*W, y: -10-Math.random()*180,
    w: Math.random()*10+4, h: Math.random()*6+3,
    vx: (Math.random()-.5)*3, vy: Math.random()*3+1.5,
    rot: Math.random()*360, rv: (Math.random()-.5)*6,
    col: cols[0|Math.random()*cols.length], a: 1
  }));
  let t0 = null;
  (function draw(ts) {
    if (!t0) t0 = ts;
    const el = ts - t0;
    ctx.clearRect(0,0,W,H);
    bits.forEach(b => {
      b.x+=b.vx; b.y+=b.vy; b.vy+=.065; b.rot+=b.rv;
      if (el > dur-600) b.a = Math.max(0,b.a-.01);
      ctx.save(); ctx.globalAlpha=b.a;
      ctx.translate(b.x+b.w/2,b.y+b.h/2);
      ctx.rotate(b.rot*Math.PI/180);
      ctx.fillStyle=b.col; ctx.fillRect(-b.w/2,-b.h/2,b.w,b.h);
      ctx.restore();
    });
    if (el < dur+800) requestAnimationFrame(draw);
    else ctx.clearRect(0,0,W,H);
  })(0);
}

/* ── INTRO ──────────────────────────────────── */
let introPS;
function startIntro() {
  const screen = $('loadingScreen');
  if (screen) screen.classList.add('out');

  drawStars('starsCanvas');
  introPS = particles('ptclCanvas', {n: isTouch?18:42});

  ['il1','il2','il3','openBtn'].forEach((id,i) => {
    const el = $(id); if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
      el.style.transform = 'translateY(0)';
      el.style.opacity = '1';
    }, 350 + i*1050);
  });

  const btn = $('openBtn');
  btn?.addEventListener('mousedown', e => {
    const r = $('rippleEl'); if (!r) return;
    const rect = btn.getBoundingClientRect();
    r.style.left = (e.clientX - rect.left) + 'px';
    r.style.top  = (e.clientY - rect.top)  + 'px';
    r.classList.remove('go'); void r.offsetWidth; r.classList.add('go');
  });
  btn?.addEventListener('click', openSite);
}

/* ── OPEN SITE ──────────────────────────────── */
function openSite() {
  if (introPS) for (let i=0;i<6;i++) setTimeout(()=>introPS.burst(window.innerWidth/2,window.innerHeight/2,28),i*90);
  setTimeout(() => {
    const intro = $('introScreen'), site = $('site');
    intro.style.transition = 'opacity 1s ease';
    intro.style.opacity = '0';
    setTimeout(() => {
      intro.classList.add('gone');
      site.removeAttribute('aria-hidden');
      site.style.opacity = '0';
      site.style.transition = 'opacity 1s ease';
      requestAnimationFrame(() => { site.style.opacity = '1'; });
      initSite();
      tryMusic();
      initVideoBg();
    }, 1000);
  }, 350);
}

/* ── INIT SITE ──────────────────────────────── */
function initSite() {
  fillContent();
  initCursor();
  initNav();
  initScrollReveal();
  particles('heroCanvas', {n: isTouch?18:38, float:true, maxR:2});
  initCake();
  buildGallery();
  initLightbox();
  buildTimeline();
  initTimeline();
  initLetter();
  buildReasons();
  initGift();
  initFinal();
  initSmoothScroll();
  initMusic();
  initGSAP();
}

/* ── FILL CONTENT ───────────────────────────── */
function fillContent() {
  const q = id => $(id);
  if(q('heroName'))      q('heroName').textContent    = cfg.name;
  if(q('finalName'))     q('finalName').textContent   = cfg.nickname + ' ❤️';
  if(q('letterGreeting'))q('letterGreeting').textContent = cfg.letter.greeting;
  if(q('letterSign'))    q('letterSign').textContent  = cfg.letter.sign;
  if(q('secretText'))    q('secretText').textContent  = cfg.surprise;
}

/* ── CURSOR ─────────────────────────────────── */
function initCursor() {
  if (isTouch) return;
  const dot = $('cursorDot'), ring = $('cursorRing');
  let mx=0,my=0,ox=0,oy=0;
  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    dot.style.left=mx+'px'; dot.style.top=my+'px';
  });
  (function smooth(){
    ox+=(mx-ox)*.12; oy+=(my-oy)*.12;
    ring.style.left=ox+'px'; ring.style.top=oy+'px';
    requestAnimationFrame(smooth);
  })();
  const hv = 'a,button,.gal-item,.flip-card,.tl-card,.gift-box,.big-cake,.relight-btn';
  document.querySelectorAll(hv).forEach(el => {
    el.addEventListener('mouseenter', ()=>ring.classList.add('big'));
    el.addEventListener('mouseleave', ()=>ring.classList.remove('big'));
  });
}

/* ── NAVBAR ─────────────────────────────────── */
function initNav() {
  const nav = $('navbar'), ham = $('hamburger'), menu = $('navMenu');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 50);
    activeLink();
  }, {passive:true});
  ham?.addEventListener('click', () => {
    const op = menu?.classList.toggle('open');
    ham.classList.toggle('open', op);
    ham.setAttribute('aria-expanded', op ? 'true' : 'false');
  });
  menu?.querySelectorAll('.nav-link').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    ham?.classList.remove('open');
    ham?.setAttribute('aria-expanded','false');
  }));
}
function activeLink() {
  const secs = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.nav-link');
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 110) cur = '#' + s.id; });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === cur));
}

/* ── SCROLL REVEAL ──────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.anim,.tl-item');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e,i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('show'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, {threshold: 0.14});
  els.forEach(el => obs.observe(el));
}

/* ── CAKE ───────────────────────────────────── */
function initCake() {
  const cake = $('bigCake');
  const candles = cake?.querySelectorAll('.big-candle');
  const reveal = $('wishReveal');
  const relight = $('relightBtn');
  let blown = false;

  function blow() {
    if (blown) return; blown = true;
    candles?.forEach((c,i) => setTimeout(() => c.classList.add('out'), i*110));
    setTimeout(() => {
      document.body.style.transition = 'filter .5s';
      document.body.style.filter = 'brightness(.65)';
      setTimeout(() => {
        document.body.style.filter = '';
        if (reveal) {
          reveal.classList.add('visible');
          requestAnimationFrame(() => { reveal.style.transition='opacity .8s'; reveal.style.opacity='1'; });
        }
        confetti('cakeCanvas', 3500);
        const rect = cake?.getBoundingClientRect();
        if (rect) {
          const ps = particles('cakeCanvas',{n:0,float:false});
          ps.burst(rect.left+rect.width/2, rect.top+rect.height/2, 70);
        }
      }, 550);
    }, (candles?.length||5)*110 + 150);
  }

  cake?.addEventListener('click', blow);
  cake?.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){e.preventDefault();blow();} });
  relight?.addEventListener('click', () => {
    blown = false;
    candles?.forEach(c => c.classList.remove('out'));
    if (reveal) { reveal.style.opacity='0'; setTimeout(()=>reveal.classList.remove('visible'),400); }
  });
}

/* ── GALLERY ────────────────────────────────── */
const GRADS = [
  'linear-gradient(135deg,#2d1b2e,#4a2550)',
  'linear-gradient(135deg,#1a1408,#3d2d0a)',
  'linear-gradient(135deg,#0d1a2e,#1a3050)',
  'linear-gradient(135deg,#1a0d1a,#3d1532)',
  'linear-gradient(135deg,#0a1a0a,#1a3a1a)',
  'linear-gradient(135deg,#2e1a0a,#503020)'
];

function buildGallery() {
  const grid = $('galleryGrid');
  if (!grid || grid.children.length) return;
  cfg.gallery.forEach((item,i) => {
    const div = document.createElement('div');
    div.className = 'gal-item anim';
    div.setAttribute('tabindex','0');
    div.setAttribute('aria-label','Memory: '+item.cap);
    div.dataset.idx = i;

    if (item.type === 'video') {
      // ── VIDEO THUMBNAIL ──────────────────────
      const vid = document.createElement('video');
      vid.src = item.src;
      vid.muted = true; vid.loop = true; vid.playsInline = true;
      vid.preload = 'metadata';
      vid.style.cssText = 'width:100%;height:100%;min-height:220px;object-fit:cover;display:block;';
      // Play on hover
      div.addEventListener('mouseenter', () => vid.play().catch(()=>{}));
      div.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime=0; });
      // Play badge
      const badge = document.createElement('div');
      badge.className = 'vid-play-badge';
      badge.innerHTML = '▶';
      div.appendChild(vid);
      div.appendChild(badge);
      vid.onerror = () => {
        vid.style.display='none';
        badge.style.display='none';
        div.style.background = GRADS[i % GRADS.length];
        const ph = document.createElement('div');
        ph.className = 'gal-placeholder';
        ph.innerHTML = `<i class="fa-solid fa-video"></i><span>${item.cap}</span>`;
        div.insertBefore(ph, div.querySelector('.gal-overlay'));
      };
    } else {
      // ── IMAGE ────────────────────────────────
      const img = document.createElement('img');
      img.loading='lazy'; img.alt=item.cap;
      img.onerror = () => {
        img.style.display='none';
        div.style.background = GRADS[i % GRADS.length];
        const ph = document.createElement('div');
        ph.className = 'gal-placeholder';
        ph.innerHTML = `<i class="fa-solid fa-image"></i><span>${item.cap}</span>`;
        div.insertBefore(ph, div.querySelector('.gal-overlay'));
      };
      img.src = item.src;
      div.appendChild(img);
    }

    const ov = document.createElement('div'); ov.className='gal-overlay';
    const cap = document.createElement('p'); cap.className='gal-caption'; cap.textContent=item.cap;
    ov.appendChild(cap);
    div.appendChild(ov);

    div.addEventListener('click', ()=>openLB(i));
    div.addEventListener('keydown', e=>{ if(e.key==='Enter') openLB(i); });
    grid.appendChild(div);
  });
  observeAnims(grid);
}

/* ── LIGHTBOX ───────────────────────────────── */
let lbI = 0;
function initLightbox() {
  $('lbClose')?.addEventListener('click', closeLB);
  $('lbPrev')?.addEventListener('click', ()=>navLB(-1));
  $('lbNext')?.addEventListener('click', ()=>navLB(1));
  $('lightbox')?.addEventListener('click', e=>{ if(e.target===$('lightbox')) closeLB(); });
  document.addEventListener('keydown', e=>{
    if (!$('lightbox')?.classList.contains('open')) return;
    if(e.key==='Escape') closeLB();
    if(e.key==='ArrowLeft') navLB(-1);
    if(e.key==='ArrowRight') navLB(1);
  });
}
function openLB(i) {
  lbI = i; const item = cfg.gallery[i]; if(!item) return;
  const img = $('lbImg'), cap = $('lbCaption'), lb = $('lightbox');

  // Remove any existing lightbox video
  const existVid = lb?.querySelector('.lb-video');
  if(existVid) existVid.remove();

  if(item.type === 'video') {
    // Show video in lightbox, hide img
    if(img) img.style.display='none';
    const lbVid = document.createElement('video');
    lbVid.className = 'lb-video';
    lbVid.src = item.src;
    lbVid.controls = true;
    lbVid.autoplay = true;
    lbVid.playsInline = true;
    lbVid.muted = false;
    lbVid.style.cssText = 'max-width:92vw;max-height:80vh;border-radius:12px;display:block;margin:0 auto;';
    const lbContent = lb?.querySelector('.lb-content') || lb?.querySelector('figure') || img?.parentElement;
    if(lbContent) lbContent.insertBefore(lbVid, img);
    else if(img) img.insertAdjacentElement('afterend', lbVid);
  } else {
    if(img){ img.style.display=''; img.src=item.src; img.alt=item.cap; }
  }
  if(cap) cap.textContent=item.cap;
  lb?.classList.add('open');
  lb?.removeAttribute('aria-hidden');
  document.body.style.overflow='hidden';
}
function closeLB() {
  const lb = $('lightbox');
  lb?.classList.remove('open');
  lb?.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  // Stop and remove any video in lightbox
  const lbVid = lb?.querySelector('.lb-video');
  if(lbVid){ lbVid.pause(); lbVid.remove(); }
  const img = $('lbImg');
  if(img) img.style.display='';
}
function navLB(d) { lbI=(lbI+d+cfg.gallery.length)%cfg.gallery.length; openLB(lbI); }

/* ── TIMELINE ───────────────────────────────── */
function buildTimeline() {
  const wrap = $('timelineWrap');
  if (!wrap || wrap.children.length) return;
  cfg.timeline.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'tl-item';
    
    const paragraphsHtml = item.paragraphs.map(p => `<p class="tl-paragraph">${p}</p>`).join('');

    div.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-card" tabindex="0" role="article" aria-label="${item.ch}: ${item.heading}">
        <div class="tl-header">
          <span class="tl-icon">${item.icon}</span>
          <div class="tl-meta">
            <span class="tl-ch-badge">${item.ch}</span>
            <span class="tl-tag">${item.tag}</span>
          </div>
        </div>
        <h3 class="tl-h">${item.heading}</h3>
        <div class="tl-content">
          ${paragraphsHtml}
        </div>
        <div class="tl-glow-line"></div>
      </div>`;
    wrap.appendChild(div);
  });
  observeAnims(wrap, '.tl-item');
}
function initTimeline() {
  // Card interactive accessibility
  document.querySelectorAll('.tl-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('active-state');
      }
    });
  });
}

/* ── LETTER ─────────────────────────────────── */
function initLetter() {
  const body = $('letterBody'), greet = $('letterGreeting'), sign = $('letterSign');
  if(greet) greet.textContent = cfg.letter.greeting;
  if(sign)  sign.textContent  = cfg.letter.sign;
  if(!body) return;
  let started = false;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      started = true; obs.disconnect(); typeText(body, cfg.letter.body);
    }
  }, {threshold:.3});
  const sec = $('letter');
  if(sec) obs.observe(sec);
}
function typeText(el, text) {
  el.textContent = '';
  if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) { el.textContent=text; return; }
  const cur = document.createElement('span');
  cur.className='typing-cursor'; cur.setAttribute('aria-hidden','true');
  el.appendChild(cur);
  let i = 0;
  (function type(){
    if(i < text.length){
      const ch = text[i++];
      el.insertBefore(document.createTextNode(ch), cur);
      setTimeout(type, ch==='\n' ? 150 : 26);
    } else cur.remove();
  })();
}

/* ── REASONS ────────────────────────────────── */
function buildReasons() {
  const grid = $('reasonsGrid');
  if (!grid || grid.children.length) return;
  cfg.reasons.forEach(r => {
    const card = document.createElement('div');
    card.className = 'flip-card anim';
    card.setAttribute('tabindex','0');
    card.setAttribute('aria-label', r.title + ': click to reveal');
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-front">
          <div class="flip-ico"><i class="fa-solid ${r.ico}"></i></div>
          <p class="flip-title">${r.title}</p>
        </div>
        <div class="flip-back">
          <p class="flip-msg">${r.msg}</p>
        </div>
      </div>`;
    card.addEventListener('click', ()=>card.classList.toggle('flipped'));
    card.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();card.classList.toggle('flipped');} });
    grid.appendChild(card);
  });
  observeAnims(grid);
}

/* ── GIFT BOX ───────────────────────────────── */
function initGift() {
  const box = $('giftBox'), tap = $('giftTap'), msg = $('secretMsg');
  let opened = false;
  function open() {
    if (opened) return; opened = true;
    box?.classList.add('opened');
    box?.setAttribute('aria-expanded','true');
    if(tap) tap.style.opacity='0';
    setTimeout(() => {
      confetti('giftCanvas', 4500);
      const rect = box?.getBoundingClientRect();
      if (rect) {
        const ps = particles('giftCanvas',{n:0,float:false});
        for(let i=0;i<5;i++) setTimeout(()=>ps.burst(rect.left+rect.width/2,rect.top,50),i*130);
      }
      if (msg) {
        msg.setAttribute('aria-hidden','false');
        msg.classList.add('visible');
        requestAnimationFrame(()=>{ msg.style.transition='opacity .8s'; msg.style.opacity='1'; });
      }
    }, 650);
  }
  box?.addEventListener('click', open);
  box?.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();open();} });
}

/* ── FINAL ──────────────────────────────────── */
function initFinal() {
  particles('finalCanvas', {n: isTouch?18:42, float:true, maxR:2.4});
  const sec = $('final'), replay = $('replayBtn');
  let done = false;
  const obs = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting && !done){ done=true; setTimeout(()=>confetti('finalCanvas',5500),700); }
  },{threshold:.35});
  if(sec) obs.observe(sec);
  replay?.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
}

/* ── SMOOTH SCROLL ──────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });
}

/* ── MUSIC (YouTube IFrame API) ─────────────── */
function initMusic() {
  var btn = document.getElementById('musicBtn');
  var ico = document.getElementById('musicIcon');
  var eq  = document.getElementById('eqBars');
  var vol = document.getElementById('volSlider');
  if (!btn) return;

  var YT_ID    = 'muYF-4wGOoI';
  var player   = null;
  var playing  = false;
  var created  = false;

  /* Update button UI */
  function setUI(isPlaying) {
    playing = isPlaying;
    if (isPlaying) {
      if (ico) { ico.classList.remove('fa-music'); ico.classList.add('fa-pause'); }
      if (eq)  eq.classList.add('playing');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      if (ico) { ico.classList.remove('fa-pause'); ico.classList.add('fa-music'); }
      if (eq)  eq.classList.remove('playing');
      btn.setAttribute('aria-pressed', 'false');
    }
  }

  /* Build the YouTube player */
  function buildPlayer() {
    if (created) return;
    created = true;
    player = new YT.Player('ytPlayer', {
      videoId: YT_ID,
      width: '1',
      height: '1',
      playerVars: {
        autoplay:        1,
        controls:        0,
        loop:            1,
        playlist:        YT_ID,
        playsinline:     1,
        mute:            0,
        rel:             0,
        fs:              0,
        modestbranding:  1,
        iv_load_policy:  3
      },
      events: {
        onReady: function(e) {
          var v = vol ? Math.round(parseFloat(vol.value) * 100) : 40;
          e.target.setVolume(v);
          e.target.playVideo();
        },
        onStateChange: function(e) {
          if (e.data === 1)      setUI(true);   // PLAYING
          else if (e.data === 2) setUI(false);  // PAUSED
          else if (e.data === 0) {              // ENDED — restart (loop fallback)
            e.target.playVideo();
          }
        },
        onError: function(e) {
          console.warn('YT player error:', e.data);
          setUI(false);
        }
      }
    });
  }

  /* Global callback — called by YouTube when API script loads */
  window.onYouTubeIframeAPIReady = function() {
    // Player is built on demand (first click), not here
  };

  /* Button click handler */
  btn.addEventListener('click', function() {
    if (!player) {
      /* First click: build player (triggers onReady -> play) */
      if (typeof YT !== 'undefined' && YT.Player) {
        buildPlayer();
        setUI(true); // optimistic UI update
      } else {
        /* API not loaded yet — show spinner, wait */
        btn.disabled = true;
        var wait = setInterval(function() {
          if (typeof YT !== 'undefined' && YT.Player) {
            clearInterval(wait);
            btn.disabled = false;
            buildPlayer();
            setUI(true);
          }
        }, 150);
      }
    } else {
      /* Toggle play/pause */
      var state = player.getPlayerState();
      if (state === 1) {
        player.pauseVideo();
        setUI(false);
      } else {
        player.playVideo();
        setUI(true);
      }
    }
    sessionStorage.setItem('bdMusicOn', playing ? '1' : '0');
  });

  /* Volume slider */
  if (vol) {
    vol.addEventListener('input', function() {
      if (player) player.setVolume(Math.round(parseFloat(vol.value) * 100));
    });
  }

  /* tryMusic: gentle attempt after user interaction elsewhere */
  window.__tryMusic = function() {
    if (sessionStorage.getItem('bdMusicOn') === '0') return;
    /* Don't auto-start — let user click the music button */
  };
}
function tryMusic() { if (window.__tryMusic) window.__tryMusic(); }

/* ── GSAP ENHANCEMENTS ──────────────────────── */
function initGSAP() {
  if(typeof gsap==='undefined'||typeof ScrollTrigger==='undefined') return;
  gsap.from('.hero-main',{opacity:0,y:40,duration:1.2,ease:'power3.out',delay:.2});
  gsap.from('.hero-name',{opacity:0,y:20,scale:.93,duration:1.4,ease:'power3.out',delay:.65});
  gsap.to('.hero-content',{
    scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:true},
    y:90,ease:'none'
  });
  gsap.from('.final-big',{scrollTrigger:{trigger:'#final',start:'top 72%'},opacity:0,scale:.84,duration:1.2,ease:'back.out(1.3)'});
  gsap.from('.final-name',{scrollTrigger:{trigger:'#final',start:'top 62%'},opacity:0,y:22,duration:1,delay:.35,ease:'power3.out'});
}

/* ── HELPER: observe .anim inside container ─── */
function observeAnims(container, selector) {
  selector = selector || '.anim';
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target);} });
  },{threshold:.1});
  container.querySelectorAll(selector).forEach(el=>obs.observe(el));
}
