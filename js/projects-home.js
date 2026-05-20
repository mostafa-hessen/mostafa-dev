function renderProjectCards() {
  const grid = document.getElementById('projects-grid');
  if (!grid || !window.PROJECTS) return;

  const sorted = [...window.PROJECTS].sort((a, b) => a.order - b.order);

  grid.innerHTML = sorted
    .map((p) => {
      const cover = p.cover ? encodeAssetPath(p.cover) : '';
      const imgCount = p.images ? p.images.length : 0;
      const featured = p.featured
        ? `<span class="pcard-badge" data-en="Featured" data-ar="مميز">Featured</span>`
        : '';
      const thumb = cover
        ? `<a href="project.html#${p.id}" class="pcard-thumb"><img src="${cover}" alt="${t(p.title)}" loading="lazy"></a>`
        : `<a href="project.html#${p.id}" class="pcard-thumb pcard-thumb--empty"><i class="fa fa-layer-group"></i></a>`;

      const extLink = p.link
        ? `<a href="${p.link}" target="_blank" rel="noopener" class="btn-o" style="padding:.55rem 1rem;font-size:.72rem" onclick="event.stopPropagation()"><i class="fa fa-external-link-alt"></i> <span data-en="Live" data-ar="مباشر">Live</span></a>`
        : '';

      const cardClass = p.featured ? 'pcard rv pcard--featured' : 'pcard rv';
      return `
      <article class="${cardClass}">
        ${thumb}
        <div class="pcard-body-wrap">
          <div style="display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;margin-bottom:.75rem">
            <span class="ptag">${t(p.tag)}</span>
            ${featured}
            ${imgCount ? `<span style="font-size:.7rem;color:var(--muted)"><i class="fa fa-images" style="color:var(--gold)"></i> ${imgCount}</span>` : ''}
          </div>
          <h3 style="font-size:1.15rem;font-weight:800;margin-bottom:.45rem">${t(p.title)}</h3>
          <p style="font-size:.82rem;color:var(--muted);line-height:1.7;margin-bottom:1rem">${t(p.summary)}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${(p.tech || []).slice(0, 5).map((tech) => `<span class="spill">${tech}</span>`).join('')}
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:.6rem">
            <a href="project.html#${p.id}" class="btn-g" style="padding:.6rem 1.2rem;font-size:.75rem">
              <i class="fa fa-arrow-right"></i> <span data-en="View Details" data-ar="التفاصيل">View Details</span>
            </a>
            ${extLink}
          </div>
        </div>
      </article>`;
    })
    .join('');

  document.querySelectorAll('#projects-grid [data-en]').forEach((el) => {
    if (el.dataset[lang]) el.textContent = el.dataset[lang];
  });
  document.querySelectorAll('#projects-grid .rv').forEach((el) => {
    if (window.projectsObs) window.projectsObs.observe(el);
    else el.classList.add('on');
  });
}

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid || !window.TESTIMONIALS) return;

  const sorted = [...window.TESTIMONIALS].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  grid.innerHTML = sorted
    .map((item) => {
      const name = escHtml(t(item.name));
      const role = escHtml(t(item.role));
      const text = escHtml(t(item.text));
      const avatar = item.photo
        ? `<img src="${encodeAssetPath(item.photo)}" alt="${name}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid var(--gold)">`
        : `<div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gold-l));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.85rem;color:var(--navy)">${item.initials ? escHtml(t(item.initials)) : name.charAt(0)}</div>`;

      const projectLink = item.projectId
        ? `<a href="project.html#${item.projectId}" style="font-size:.72rem;color:var(--gold);text-decoration:none;margin-top:.35rem;display:inline-flex;align-items:center;gap:.35rem"><i class="fa fa-folder-open"></i> <span data-en="Related project" data-ar="المشروع المرتبط">Related project</span></a>`
        : '';

      if (item.featured && item.photo) {
        return `
        <div class="tcard tcard--featured">
          <div class="tcard-q">"</div>
          <div class="tcard-inner">
            <img src="${encodeAssetPath(item.photo)}" alt="${name}" style="width:100px;height:100px;border-radius:14px;object-fit:cover;border:2px solid var(--gold);flex-shrink:0">
            <div style="flex:1;min-width:200px">
              <p style="font-size:1rem;color:#e8eef5;line-height:2;margin-bottom:1rem">${text}</p>
              <div style="font-weight:700;font-size:1rem;color:#fff">${name}</div>
              <div style="font-size:.8rem;color:var(--muted);margin-bottom:.25rem">${role}</div>
              ${projectLink}
            </div>
          </div>
        </div>`;
      }

      return `
      <div class="tcard${item.featured ? ' tcard--featured' : ''}">
        <div class="tcard-q">"</div>
        <p style="font-size:.9rem;color:#c8d4e0;line-height:1.9;margin-bottom:1.2rem;position:relative;z-index:1">${text}</p>
        <div style="display:flex;align-items:center;gap:.85rem">
          ${avatar}
          <div>
            <div style="font-weight:700;font-size:.9rem;color:#fff">${name}</div>
            <div style="font-size:.75rem;color:var(--muted)">${role}</div>
            ${projectLink}
          </div>
        </div>
      </div>`;
    })
    .join('');

  document.querySelectorAll('#testimonials-grid [data-en]').forEach((el) => {
    if (el.dataset[lang]) el.textContent = el.dataset[lang];
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjectCards();
  renderTestimonials();
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('on')),
    { threshold: 0.12 }
  );
  window.projectsObs = obs;
  document.querySelectorAll('#projects-grid .rv').forEach((el) => {
    obs.observe(el);
    if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('on');
  });
});

function onLangChange() {
  renderProjectCards();
  renderTestimonials();
}
