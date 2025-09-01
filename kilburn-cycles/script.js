const menuToggleButton = document.querySelector('.menu-toggle');
const siteNav = document.getElementById('primary-nav');

if (menuToggleButton && siteNav) {
  menuToggleButton.addEventListener('click', () => {
    const willOpen = !siteNav.classList.contains('open');
    siteNav.classList.toggle('open', willOpen);
    menuToggleButton.setAttribute('aria-expanded', String(willOpen));
  });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formStatus = contactForm.querySelector('.form-status');
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Demo-only handler: build a mailto link.
    const subject = encodeURIComponent('Website enquiry');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailtoHref = `mailto:hello@kilburncycles.example?subject=${subject}&body=${body}`;

    if (formStatus) {
      formStatus.textContent = 'Opening your email app…';
    }
    window.location.href = mailtoHref;
  });
}

