  // ---------- Mobile nav toggle ----------
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // ---------- Dropdown (accessible) ----------
    const dd = document.getElementById('servicesDropdown');
    const ddBtn = document.getElementById('servicesBtn');
    const ddMenu = document.getElementById('servicesMenu');

    function openDD(){ dd.classList.add('open'); dd.setAttribute('aria-expanded','true'); }
    function closeDD(){ dd.classList.remove('open'); dd.setAttribute('aria-expanded','false'); }

    // Click to toggle (works on mobile + desktop)
    ddBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (dd.classList.contains('open')) closeDD(); else openDD();
    });

    // Keyboard support
    ddBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDD(); ddMenu.querySelector('a').focus(); }
      if (e.key === 'Escape') { closeDD(); ddBtn.focus(); }
    });

    // Close on outside click or Escape anywhere
    document.addEventListener('click', (e) => {
      if (!dd.contains(e.target)) closeDD();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDD();
    });

    // ---------- Carousel ----------
    let idx = 0;
    const slides = document.getElementById('slides');
    const total = slides.children.length;
    function show(i){ idx = (i + total) % total; slides.style.transform = `translateX(-${idx*100}%)`; }
    const next = () => show(idx+1);
    const prev = () => show(idx-1);

    document.getElementById('nextBtn').addEventListener('click', next);
    document.getElementById('prevBtn').addEventListener('click', prev);
    setInterval(next, 4000);