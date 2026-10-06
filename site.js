(() => {
  const header = document.querySelector('.header');
  if (!header) return;
  const toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation menu');
  toggle.textContent = 'Menu';
  header.prepend(toggle);
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('is-menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    toggle.textContent = open ? 'Close' : 'Menu';
  });

  const photoStyle = document.createElement('style');
  photoStyle.textContent = '.photo-placeholder.has-photo{padding:0!important}.photo-placeholder.has-photo:after{display:none!important}.photo-placeholder.has-photo img{display:block;width:100%;height:100%;object-fit:cover}.more-menu>ul{position:absolute;z-index:100;right:0;top:36px;width:220px;max-height:min(70vh,460px);overflow:auto;margin:0;padding:9px;list-style:none;background:#fff;border:1px solid var(--line);border-radius:12px;box-shadow:0 16px 38px rgba(5,44,91,.18)}.more-menu>ul li{margin:0;padding:0}@media(max-width:900px){.header.is-menu-open .more-menu>ul{position:static;width:auto;margin:5px 0 2px;box-shadow:none}}';
  document.head.append(photoStyle);
  document.querySelectorAll('.photo-placeholder[data-image-src],.photo-placeholder[data-figma-image],.photo-placeholder[data-photo-src]').forEach((frame) => {
    const source = frame.dataset.imageSrc || frame.dataset.figmaImage || frame.dataset.photoSrc;
    if (!source) return;
    const image = document.createElement('img');
    image.src = source;
    image.alt = frame.dataset.imageName || frame.getAttribute('aria-label') || '';
    frame.replaceChildren(image);
    frame.classList.add('has-photo');
  });

  header.querySelectorAll('nav details').forEach((menu) => {
    if (!menu.classList.contains('more-menu') && !menu.classList.contains('more-nav')) menu.classList.add('more-menu');
  });
  document.querySelectorAll('nav a[href*="visitor-analytics"],nav a[href*="alumni-achievements"]').forEach((link) => link.remove());
  document.querySelectorAll('.cards article:nth-child(3) a[href="previous-lectures/"]').forEach((link) => {
    link.href = 'awards/';
  });
  document.querySelectorAll('.dates-intro-copy h1').forEach((heading) => {
    const replacement = document.createElement('h2');
    replacement.innerHTML = heading.innerHTML;
    heading.replaceWith(replacement);
  });

  if (!document.querySelector('footer')) {
    const footer = document.createElement('footer');
    footer.innerHTML = '<div><a class="brand" href="../"><strong>PSI</strong><span>Partnership for Scientific Inquiry</span></a><p>Questions? <a href="mailto:psiprogram@ohsu.edu">psiprogram@ohsu.edu</a></p></div><div class="footer-links"><a href="../about/">About</a><a href="../awards/">Awards</a><a href="../contact/">Contact</a><a href="../donate/">Donate</a></div>';
    document.body.append(footer);
  }
})();
