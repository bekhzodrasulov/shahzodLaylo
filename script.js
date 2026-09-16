// === Smooth Scroll for anchor links ===
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

// === Animate on scroll ===
const elements = document.querySelectorAll(".animate");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 50); // delay between elements
            }
        });
    },
    { threshold: 0.1 }
);
elements.forEach(el => observer.observe(el));


// === Countdown timer ===
function updateCountdown() {
    const weddingDate = new Date("2026-10-01T17:00:00");
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
        document.getElementById("days").textContent = 0;
        document.getElementById("hours").textContent = 0;
        document.getElementById("minutes").textContent = 0;
        document.getElementById("seconds").textContent = 0;
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// === Mobile device check ===
/* if (!/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
  document.body.innerHTML = `
    <div style="text-align:center; padding:50px; font-family:sans-serif;">
      <h2>Только с мобильных устройств 📱</h2>
      <p>Пожалуйста, откройте сайт на телефоне.</p>
      <a href="https://t.me/inviteuio">inviteu.io</a>
    </div>
  `;
} */