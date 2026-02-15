// Inisialisasi Animasi AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav div');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-2xl', 'border-purple-500/20');
    } else {
        nav.classList.remove('shadow-2xl', 'border-purple-500/20');
    }
});

// Form Submission (Dummy)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pesan terkirim! Terima kasih telah menghubungi Haekal.');
});
