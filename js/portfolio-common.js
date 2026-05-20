const LANG_STORAGE_KEY = 'portfolio-lang';

function loadSavedLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'en' || saved === 'ar') return saved;
  } catch (_) {}
  return 'ar';
}

let lang = loadSavedLang();

const galleryState = { images: [], index: 0, alt: '' };

function applyLang() {
  const html = document.documentElement;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  html.lang = lang === 'ar' ? 'ar' : 'en';
  document.body.style.fontFamily = lang === 'ar' ? "'Cairo',sans-serif" : "'Outfit',sans-serif";
  document.querySelectorAll('[data-en]').forEach((el) => {
    if (el.dataset[lang]) el.textContent = el.dataset[lang];
  });
  document.querySelectorAll('[data-placeholder-en]').forEach((el) => {
    el.placeholder =
      lang === 'ar'
        ? el.dataset.placeholderAr || el.dataset.placeholderEn
        : el.dataset.placeholderEn;
  });
  const lb = document.getElementById('langBtn');
  if (lb) lb.textContent = lang === 'en' ? 'العربية' : 'English';
}

function toggleLang() {
  lang = lang === 'en' ? 'ar' : 'en';
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (_) {}
  applyLang();
  if (typeof onLangChange === 'function') onLangChange();
}

function t(obj) {
  if (!obj) return '';
  return obj[lang] || obj.en || '';
}

function initNavScroll() {
  const navEl = document.getElementById('nav');
  const stb = document.getElementById('stb');
  if (!navEl) return;
  window.addEventListener('scroll', () => {
    navEl.classList.toggle('scrolled', window.scrollY > 40);
    if (stb) stb.classList.toggle('show', window.scrollY > 300);
  });
}

function initReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('on');
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.rv').forEach((el) => obs.observe(el));
}

function initMobileNav() {
  const mRight = document.getElementById('mobRight');
  function checkMob() {
    const isMob = window.innerWidth < 768;
    if (mRight) mRight.style.display = isMob ? 'flex' : 'none';
  }
  checkMob();
  window.addEventListener('resize', checkMob);
}

function openMob() {
  document.getElementById('mobMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMob() {
  document.getElementById('mobMenu').classList.remove('open');
  document.body.style.overflow = '';
}

function ensureLightbox() {
  let lb = document.getElementById('imgLightbox');
  if (lb) return lb;

  lb = document.createElement('div');
  lb.id = 'imgLightbox';
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button type="button" class="lightbox-close" aria-label="Close"><i class="fa fa-times"></i></button>
    <button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous"><i class="fa fa-chevron-left"></i></button>
    <button type="button" class="lightbox-nav lightbox-next" aria-label="Next"><i class="fa fa-chevron-right"></i></button>
    <span class="lightbox-counter"></span>
    <img alt="">
  `;
  document.body.appendChild(lb);

  lb.querySelector('.lightbox-close').onclick = () => closeLightbox();
  lb.querySelector('.lightbox-prev').onclick = (e) => {
    e.stopPropagation();
    stepGallery(-1);
  };
  lb.querySelector('.lightbox-next').onclick = (e) => {
    e.stopPropagation();
    stepGallery(1);
  };
  lb.onclick = (e) => {
    if (e.target === lb) closeLightbox();
  };
  lb.querySelector('img').onclick = (e) => e.stopPropagation();

  return lb;
}

function closeLightbox() {
  document.getElementById('imgLightbox')?.classList.remove('open');
}

function updateLightboxImage() {
  const lb = ensureLightbox();
  const img = lb.querySelector('img');
  const counter = lb.querySelector('.lightbox-counter');
  const prev = lb.querySelector('.lightbox-prev');
  const next = lb.querySelector('.lightbox-next');
  const { images, index, alt } = galleryState;
  const total = images.length;

  if (!total) return;

  img.src = encodeAssetPath(images[index]);
  img.alt = alt || '';
  counter.textContent =
    lang === 'ar' ? `${index + 1} / ${total}` : `${index + 1} / ${total}`;
  const single = total <= 1;
  prev.style.display = single ? 'none' : '';
  next.style.display = single ? 'none' : '';
  counter.style.display = single ? 'none' : '';
  prev.disabled = index <= 0;
  next.disabled = index >= total - 1;
  prev.style.opacity = index <= 0 ? '0.35' : '1';
  next.style.opacity = index >= total - 1 ? '0.35' : '1';
}

function stepGallery(delta) {
  const total = galleryState.images.length;
  if (!total) return;
  galleryState.index = Math.max(0, Math.min(total - 1, galleryState.index + delta));
  updateLightboxImage();
}

/** فتح معرض صور مع تنقل */
function openGallery(images, index, alt) {
  if (!images || !images.length) return;
  galleryState.images = images;
  galleryState.index = Math.max(0, Math.min(images.length - 1, index || 0));
  galleryState.alt = alt || '';
  ensureLightbox();
  updateLightboxImage();
  document.getElementById('imgLightbox').classList.add('open');
}

function openLightbox(src, alt) {
  openGallery([src], 0, alt);
}

document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('imgLightbox');
  if (!lb?.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') stepGallery(-1);
  if (e.key === 'ArrowRight') stepGallery(1);
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyLang);
} else {
  applyLang();
}
