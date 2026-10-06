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

  if (!document.querySelector('footer')) {
    const footer = document.createElement('footer');
    footer.innerHTML = '<div><a class="brand" href="../"><strong>PSI</strong><span>Partnership for Scientific Inquiry</span></a><p>Questions? <a href="mailto:psiprogram@ohsu.edu">psiprogram@ohsu.edu</a></p></div><div class="footer-links"><a href="../about/">About</a><a href="../awards/">Awards</a><a href="../contact/">Contact</a><a href="../donate/">Donate</a></div>';
    document.body.append(footer);
  }
})();
