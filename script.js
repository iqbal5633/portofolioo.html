// Smooth animation on scroll (simple fade in)
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial state
document.querySelectorAll(".card").forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  card.style.transition = "0.6s ease";
});
