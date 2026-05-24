/* ============================================================
   GREEN LIFE LANDSCAPING — Shared JS (nav, floating CTA, FAQ, animations)
   ============================================================ */

// Shared nav + floating CTA HTML
const NAV_HTML = `
<nav class="site-nav" id="site-nav">
  <div class="container">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <img src="__LOGO_PRIMARY__" alt="Green Life Landscaping Inc">
      </a>
      <div class="nav-links">
        <a href="index.html" class="nav-link" data-page="home">Home</a>
        <a href="about.html" class="nav-link" data-page="about">About</a>
        <div class="nav-dropdown">
          <a href="services.html" class="nav-link nav-link-with-caret" data-page="services">
            Services <i data-lucide="chevron-down" width="14" height="14"></i>
          </a>
          <div class="nav-dropdown-menu" role="menu">
            <a href="services/lawn-care.html" class="nav-dropdown-item">
              <span class="nav-dd-icon"><i data-lucide="scissors" width="16" height="16"></i></span>
              <span class="nav-dd-text"><span class="nav-dd-title">Lawn Care</span><span class="nav-dd-sub">Mowing, edging, fertilization &amp; weed control</span></span>
            </a>
            <a href="services/landscaping.html" class="nav-dropdown-item">
              <span class="nav-dd-icon"><i data-lucide="flower-2" width="16" height="16"></i></span>
              <span class="nav-dd-text"><span class="nav-dd-title">Landscaping</span><span class="nav-dd-sub">Design, installs, mulch &amp; bed care</span></span>
            </a>
            <a href="services/tree-services.html" class="nav-dropdown-item">
              <span class="nav-dd-icon"><i data-lucide="tree-pine" width="16" height="16"></i></span>
              <span class="nav-dd-text"><span class="nav-dd-title">Tree Services</span><span class="nav-dd-sub">Removal, trimming &amp; cleanup</span></span>
            </a>
            <a href="services/hardscaping.html" class="nav-dropdown-item">
              <span class="nav-dd-icon"><i data-lucide="layers" width="16" height="16"></i></span>
              <span class="nav-dd-text"><span class="nav-dd-title">Hardscaping</span><span class="nav-dd-sub">Patios, walls, walkways &amp; stonework</span></span>
            </a>
            <a href="services/snow-removal.html" class="nav-dropdown-item nav-dropdown-item-snow">
              <span class="nav-dd-icon"><i data-lucide="snowflake" width="16" height="16"></i></span>
              <span class="nav-dd-text"><span class="nav-dd-title">Snow Removal <span class="nav-dd-tag">Seasonal</span></span><span class="nav-dd-sub">Plowing, salting &amp; ice management</span></span>
            </a>
            <a href="services.html" class="nav-dropdown-all">View All Services <i data-lucide="arrow-right" width="13" height="13"></i></a>
          </div>
        </div>
        <a href="gallery.html" class="nav-link" data-page="gallery">Gallery</a>
        <a href="contact.html" class="nav-link" data-page="contact">Contact</a>
      </div>
      <a href="contact.html" class="nav-cta">
        <i data-lucide="calendar" width="14" height="14"></i> Get a Free Estimate
      </a>
      <button class="nav-mobile-toggle" id="mobile-toggle" aria-label="Toggle menu">
        <i data-lucide="menu" width="24" height="24"></i>
      </button>
    </div>
  </div>
  <div class="mobile-scrim" id="mobile-scrim"></div>
  <div class="mobile-menu" id="mobile-menu" role="dialog" aria-label="Site menu" aria-modal="true">
    <div class="mobile-menu-header">
      <span class="mobile-menu-header-label">Menu</span>
      <button class="mobile-menu-close" id="mobile-close" aria-label="Close menu">
        <i data-lucide="x" width="22" height="22"></i>
      </button>
    </div>
    <a href="index.html" class="nav-link" data-page="home">Home</a>
    <a href="about.html" class="nav-link" data-page="about">About</a>
    <a href="services.html" class="nav-link" data-page="services">Services</a>
    <div class="mobile-sub">
      <a href="services/lawn-care.html" class="mobile-sub-link">Lawn Care</a>
      <a href="services/landscaping.html" class="mobile-sub-link">Landscaping</a>
      <a href="services/tree-services.html" class="mobile-sub-link">Tree Services</a>
      <a href="services/hardscaping.html" class="mobile-sub-link">Hardscaping</a>
      <a href="services/snow-removal.html" class="mobile-sub-link mobile-sub-link-snow">Snow Removal <span class="nav-dd-tag">Seasonal</span></a>
    </div>
    <a href="gallery.html" class="nav-link" data-page="gallery">Gallery</a>
    <a href="contact.html" class="nav-link" data-page="contact">Contact</a>
    <a href="contact.html" class="nav-cta" style="margin-top:12px;">
      <i data-lucide="calendar" width="14" height="14"></i> Get a Free Estimate
    </a>
    <a href="tel:4109052697" class="mobile-menu-call">
      <i data-lucide="phone" width="14" height="14"></i> Call (410) 905-2697
    </a>
  </div>
</nav>`;

const FLOATING_CTA_HTML = `
<div class="floating-cta" id="floating-cta">
  <a href="tel:4109052697" class="fcta-call">
    <i data-lucide="phone" width="16" height="16"></i> Call Us
  </a>
  <a href="contact.html" class="fcta-estimate">
    <i data-lucide="calendar" width="16" height="16"></i> Free Estimate
  </a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo"><img src="__LOGO_PRIMARY__" alt="Green Life Landscaping"></div>
        <p class="footer-tagline">Maryland's trusted full-service landscaping company. Reliable, licensed, and built for the long haul since 2005.</p>
        <div style="margin-top:20px; display:flex; flex-direction:column; gap:8px;">
          <div class="footer-contact-line"><i data-lucide="phone" width="14" height="14"></i> (410) 905-2697</div>
          <div class="footer-contact-line"><i data-lucide="map-pin" width="14" height="14"></i> Burtonsville, MD — Serving Montgomery County &amp; Surrounding Areas</div>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Services</div>
        <div class="footer-links">
          <a href="services/lawn-care.html">Lawn Care</a>
          <a href="services/landscaping.html">Landscaping</a>
          <a href="services/tree-services.html">Tree Services</a>
          <a href="services/snow-removal.html">Snow Removal</a>
          <a href="services/hardscaping.html">Hardscaping</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="services.html">All Services</a>
          <a href="gallery.html">Gallery</a>
          <a href="contact.html">Contact</a>
          <a href="contact.html">Get an Estimate</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Service Area</div>
        <div style="font-size:13px; color:rgba(255,255,255,0.55); line-height:1.8;">
          Burtonsville, MD<br>
          Montgomery County<br>
          Howard County<br>
          Prince George's County<br>
          Silver Spring, MD<br>
          Germantown, MD<br>
          Rockville, MD
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Green Life Landscaping Services Inc. All rights reserved.</span>
      <span>Maryland Licensed &amp; Insured &nbsp;·&nbsp; Serving Since 2005</span>
    </div>
  </div>
</footer>`;

function initSite(activePage) {
  // Standalone build: swap logo placeholder for the inlined blob URL
  var __logoUrl = (window.__resources && window.__resources.logoPrimary) || 'assets/logo-primary.png';
  // Detect if we're in a subdirectory
  var inSubdir = window.location.pathname.includes('/services/');
  var base = inSubdir ? '../' : '';

  // Fix paths in templates
  function fixPaths(html) {
    if (!inSubdir) return html;
    return html
      .replace(/href="index\.html"/g, 'href="../index.html"')
      .replace(/href="about\.html"/g, 'href="../about.html"')
      .replace(/href="services\.html"/g, 'href="../services.html"')
      .replace(/href="contact\.html"/g, 'href="../contact.html"')

      .replace(/href="services\//g, 'href="../services/');
  }

  function inject(html) { return fixPaths(html).split('__LOGO_PRIMARY__').join(__logoUrl); }

  // Inject nav
  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = inject(NAV_HTML);

  // Inject floating CTA
  const ctaTarget = document.getElementById('floating-cta-placeholder');
  if (ctaTarget) ctaTarget.outerHTML = inject(FLOATING_CTA_HTML);

  // Inject footer
  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = inject(FOOTER_HTML);

  // Set active nav link
  document.querySelectorAll('.nav-link[data-page]').forEach(function(link) {
    if (link.dataset.page === activePage) link.classList.add('active');
  });

  // Mobile menu toggle (drawer + scrim + body lock)
  const toggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const scrim = document.getElementById('mobile-scrim');
  const closeBtn = document.getElementById('mobile-close');
  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    if (scrim) scrim.classList.add('open');
    document.body.classList.add('menu-open');
    toggle && toggle.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    if (scrim) scrim.classList.remove('open');
    document.body.classList.remove('menu-open');
    toggle && toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function() {
      mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    });
  }
  if (scrim) scrim.addEventListener('click', closeMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  // Close drawer on link tap
  document.querySelectorAll('#mobile-menu a').forEach(function(a) {
    a.addEventListener('click', closeMenu);
  });
  // Close on Escape
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeMenu(); });
  // Close if window resizes back to desktop
  window.addEventListener('resize', function() { if (window.innerWidth > 768) closeMenu(); });

  // Init Lucide icons
  if (window.lucide) lucide.createIcons();

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  // Scroll fade-in
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(function(el) { observer.observe(el); });

  // Contact form submit
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('.form-submit');
      btn.textContent = 'Request Sent! We\'ll be in touch soon.';
      btn.style.background = 'var(--green-600)';
      btn.disabled = true;
    });
  }
}
