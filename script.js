// MOBILE MENU TOGGLE
const tombolMenu = document.querySelector('.tombol-menu');
const navMenu = document.querySelector('.nav-menu');

tombolMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// SMOOTH SCROLL
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        if (navMenu.classList.contains('show')) navMenu.classList.remove('show');
    });
});