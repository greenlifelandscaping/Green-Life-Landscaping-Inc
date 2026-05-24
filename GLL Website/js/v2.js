/* ════════════════════════════════════════════════════════════
   GREEN LIFE LANDSCAPING — Shared chrome injection (v2)
   Renders header, footer, and sticky CTA on every page.
   Pass the page's slug (e.g. 'home', 'services', 'about') to
   highlight the active nav item.
   ════════════════════════════════════════════════════════════ */

(function () {
  // Path prefix lets sub-folder pages (services/*.html) find assets at ../
  const PREFIX = (window.__v2_prefix !== undefined) ? window.__v2_prefix : '';

  const SERVICES = [
    { slug: 'lawn-care',     title: 'Lawn Care',     sub: 'Mowing, edging, fertilization & weed control', icon: 'scissors',  seasonal: false },
    { slug: 'landscaping',   title: 'Landscaping',   sub: 'Design, installs, mulch & bed care',           icon: 'flower-2',  seasonal: false },
    { slug: 'tree-services', title: 'Tree Services', sub: 'Removal, trimming & cleanup',                  icon: 'tree-pine', seasonal: false },
    { slug: 'hardscaping',   title: 'Hardscaping',   sub: 'Patios, walls, walkways & stonework',          icon: 'layers',    seasonal: false },
    { slug: 'snow-removal',  title: 'Snow Removal',  sub: 'Plowing, salting & ice management',            icon: 'snowflake', seasonal: true  },
  ];

  // ── Header ───────────────────────────────────────────────
  function renderHeader(active) {
    const isActive = (slug) => slug === active ? ' active' : '';
    const drop = SERVICES.map(s => `
      <a href="${PREFIX}pages-v2/${s.slug}.html" class="nav-drop-item">
        <div class="ddi-icon"><i data-lucide="${s.icon}" width="18" height="18"></i></div>
        <div>
          <div class="ddi-t">${s.title}${s.seasonal ? ' <span class="ddi-tag">Seasonal</span>' : ''}</div>
          <div class="ddi-s">${s.sub}</div>
        </div>
      </a>`).join('') + `
      <a href="${PREFIX}pages-v2/services.html" class="nav-drop-footer">
        View All Services <i data-lucide="arrow-right" width="14" height="14"></i>
      </a>`;

    return `
<header class="site-header" data-screen-label="Header">
  <div class="wrap nav-inner">
    <a class="brand-link" href="${PREFIX}Homepage v2.html" aria-label="Green Life Landscaping Inc">
      <img class="brand-logo" src="${PREFIX}assets/logo-primary.png" alt="Green Life Landscaping Services Inc">
    </a>
    <nav class="nav-links" aria-label="Primary">
      <a href="${PREFIX}Homepage v2.html" class="nav-link${isActive('home')}">Home</a>
      <div class="nav-drop">
        <a href="${PREFIX}pages-v2/services.html" class="nav-link nav-drop-trigger${isActive('services')}">
          Services <i data-lucide="chevron-down" width="14" height="14"></i>
        </a>
        <div class="nav-drop-menu" role="menu">${drop}</div>
      </div>
      <a href="${PREFIX}pages-v2/about.html"   class="nav-link${isActive('about')}">About</a>
      <a href="${PREFIX}pages-v2/gallery.html" class="nav-link${isActive('gallery')}">Gallery</a>
      <a href="${PREFIX}pages-v2/contact.html" class="nav-link${isActive('contact')}">Contact</a>
    </nav>
    <div class="nav-cta">
      <a href="tel:4109052697" class="nav-phone">
        <i data-lucide="phone" width="16" height="16"></i> (410) 905-2697
      </a>
      <a href="${PREFIX}pages-v2/contact.html" class="btn btn-primary">
        <i data-lucide="calendar-check" width="16" height="16"></i> Free Estimate
      </a>
      <button class="menu-toggle" id="menuToggle" aria-label="Open menu">
        <i data-lucide="menu" width="22" height="22"></i>
      </button>
    </div>
  </div>
</header>

<aside class="mobile-drawer" id="mobileDrawer" aria-label="Mobile menu">
  <div class="mobile-drawer-head">
    <img src="${PREFIX}assets/logo-primary.png" alt="Green Life Landscaping">
    <button class="mobile-drawer-close" id="drawerClose" aria-label="Close menu">
      <i data-lucide="x" width="22" height="22"></i>
    </button>
  </div>
  <ul>
    <li><a href="${PREFIX}Homepage v2.html">Home <i data-lucide="arrow-right" width="16" height="16"></i></a></li>
    <li><a href="${PREFIX}pages-v2/services.html">Services <i data-lucide="arrow-right" width="16" height="16"></i></a></li>
    <li><a href="${PREFIX}pages-v2/about.html">About <i data-lucide="arrow-right" width="16" height="16"></i></a></li>
    <li><a href="${PREFIX}pages-v2/gallery.html">Gallery <i data-lucide="arrow-right" width="16" height="16"></i></a></li>
    <li><a href="${PREFIX}pages-v2/contact.html">Contact <i data-lucide="arrow-right" width="16" height="16"></i></a></li>
  </ul>
  <div class="mobile-drawer-foot">
    <a href="${PREFIX}pages-v2/contact.html" class="btn btn-primary">Free Estimate</a>
    <div class="phone-line">Or call (410) 905-2697</div>
  </div>
</aside>`;
  }

  // ── Footer ───────────────────────────────────────────────
  function renderFooter() {
    const svcLinks = SERVICES.map(s =>
      `<li><a href="${PREFIX}pages-v2/${s.slug}.html">${s.title}</a></li>`).join('');

    return `
<footer class="footer" data-screen-label="Footer">
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="brand-link" href="${PREFIX}Homepage v2.html" aria-label="Green Life Landscaping Inc">
          <img class="brand-logo" src="${PREFIX}assets/logo-primary.png" alt="Green Life Landscaping Services Inc">
        </a>
        <p>Beautiful, functional, and sustainable outdoor spaces for Maryland homeowners and businesses. Licensed &amp; insured since 2005.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook"><i data-lucide="facebook" width="18" height="18"></i></a>
          <a href="#" aria-label="Instagram"><i data-lucide="instagram" width="18" height="18"></i></a>
          <a href="#" aria-label="Google"><i data-lucide="globe" width="18" height="18"></i></a>
          <a href="#" aria-label="YouTube"><i data-lucide="youtube" width="18" height="18"></i></a>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="${PREFIX}Homepage v2.html">Home</a></li>
          <li><a href="${PREFIX}pages-v2/services.html">Services</a></li>
          <li><a href="${PREFIX}pages-v2/about.html">About Us</a></li>
          <li><a href="${PREFIX}pages-v2/gallery.html">Gallery</a></li>
          <li><a href="${PREFIX}pages-v2/contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Services</h4>
        <ul>${svcLinks}</ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><div class="footer-contact-row"><i data-lucide="phone"></i><span>(410) 905-2697</span></div></li>
          <li><div class="footer-contact-row"><i data-lucide="mail"></i><span>info@greenlifelandscapingmd.com</span></div></li>
          <li><div class="footer-contact-row"><i data-lucide="map-pin"></i><span>Burtonsville, MD<br>Serving Montgomery County</span></div></li>
          <li><div class="footer-contact-row"><i data-lucide="clock"></i><span>Mon–Sat · 7:00 AM – 6:00 PM</span></div></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© 2026 Green Life Landscaping Inc — Licensed &amp; Insured in Maryland</div>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </div>
</footer>`;
  }

  // ── Sticky CTA (bottom center) ───────────────────────────
  function renderStickyCTA() {
    return `
<div class="sticky-cta" role="complementary" aria-label="Quick contact">
  <div class="sticky-cta-text">
    <span class="pulse"></span>
    <span>
      Free Estimates Available
      <small>No obligation · 7-day turnaround</small>
    </span>
  </div>
  <a href="${PREFIX}pages-v2/contact.html" class="btn btn-primary">
    Get Estimate <i data-lucide="arrow-right" width="14" height="14"></i>
  </a>
  <a href="tel:4109052697" class="sticky-phone" aria-label="Call (410) 905-2697">
    <i data-lucide="phone" width="18" height="18"></i>
  </a>
</div>`;
  }

  // ── Boot ─────────────────────────────────────────────────
  window.initV2 = function (activeSlug) {
    document.body.insertAdjacentHTML('afterbegin', renderHeader(activeSlug || ''));
    document.body.insertAdjacentHTML('beforeend', renderFooter());
    document.body.insertAdjacentHTML('beforeend', renderStickyCTA());

    // Mobile drawer
    const toggle = document.getElementById('menuToggle');
    const drawer = document.getElementById('mobileDrawer');
    const close  = document.getElementById('drawerClose');
    if (toggle && drawer) {
      toggle.addEventListener('click', () => drawer.classList.add('open'));
      if (close) close.addEventListener('click', () => drawer.classList.remove('open'));
      drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));
    }

    // Render lucide icons in the freshly injected DOM
    if (window.lucide) lucide.createIcons();
  };
})();
