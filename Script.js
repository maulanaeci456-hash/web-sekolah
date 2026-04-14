const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section');

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navLinks.forEach((item) => item.classList.remove('active'));
        link.classList.add('active');
    });
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 120;
    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach((link) => {
                link.classList.toggle(link.getAttribute('href') === `#${id}`, true);
            });
        }
    });
});

console.log('Halaman berhasil dimuat.');
