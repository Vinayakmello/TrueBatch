/*
 * TrueBatch page kit behaviour: header split, FAQ accordion, scroll reveal, setup form (prototype).
 * No dependencies. Safe to include on every page with `defer`.
 */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header: one joined pill at the top of the page, split to the edges once you scroll (after Tinker)
  const nav = document.querySelector('.nav');
  const navLogo = nav && nav.querySelector('.nav-logo');
  const navCta = nav && nav.querySelector('.nav-cta');
  if (nav && navLogo && navCta) {
    let geo = null, split = null;
    const layout = () => {
      navLogo.style.width = 'auto';
      // edge gap matches --gutter: clamp(1rem, 4vw, 5rem); 12px on phones
      geo = { wl: navLogo.offsetWidth, wc: navCta.offsetWidth, g: innerWidth > 700 ? Math.max(16, Math.min(80, innerWidth * 0.04)) : 12 };
      split = null; render();
    };
    const render = () => {
      if (!geo) return;
      const s = scrollY > 40;
      if (s === split) return;
      split = s;
      const { wl, wc, g } = geo, W = innerWidth;
      nav.classList.toggle('is-joined', !s);
      if (s) {
        navLogo.style.width = `${wl}px`;
        navLogo.style.transform = `translateX(${g}px)`;
        navCta.style.transform = `translateX(${W - g - wc}px)`;
      } else {
        const x0 = (W - wl - wc) / 2;
        navLogo.style.width = `${wl + wc}px`;
        navLogo.style.transform = `translateX(${x0}px)`;
        navCta.style.transform = `translateX(${x0 + wl}px)`;
      }
    };
    addEventListener('scroll', render, { passive: true });
    addEventListener('resize', layout);
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(layout);
    layout();
  }

  // FAQ accordion: <button class="qa-q" aria-expanded aria-controls> inside .qa
  document.querySelectorAll('.qa-q').forEach(b => b.addEventListener('click', () => {
    const open = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', String(open));
    b.closest('.qa').classList.toggle('is-open', open);
  }));

  // Reveal: add class="reveal" (optionally style="--i:2" for stagger)
  const reveals = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) reveals.forEach(el => el.classList.add('is-in'));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: 0.2 });
    reveals.forEach(el => io.observe(el));
  }

  // Setup form (prototype only: nothing is sent anywhere). <form data-tb-form> with a sibling [data-tb-done]
  document.querySelectorAll('form[data-tb-form]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const email = f.querySelector('input[type=email]');
    if (email && !email.checkValidity()) { email.reportValidity(); return; }
    f.hidden = true;
    const done = f.parentElement.querySelector('[data-tb-done]');
    if (done) done.hidden = false;
  }));
})();
