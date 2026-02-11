// Smooth scroll untuk anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Progress bar animation saat muncul
const skills = document.querySelectorAll('.progress div');
window.addEventListener('scroll', () => {
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if(skillTop < window.innerHeight - 50){
      skill.style.width = skill.getAttribute('data-width');
    }
  });
});

// Fade-in section
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < window.innerHeight - 50){
      section.classList.add('active');
    }
  });
});
