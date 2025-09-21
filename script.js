// Navbar toggle
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}

// Login button alert + background change
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn");
  loginBtn.addEventListener("click", () => {
    alert("Redirecting to Login Page...");
  });

  // Rotating background images
  const images = [
    "./assets/b1.jpg",
    "./assets/b2.jpg"
    
  ];
  let current = 0;
  const heroBg = document.querySelector(".hero-background");

  function changeBackground() {
    heroBg.style.backgroundImage = `url(${images[current]})`;
    current = (current + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 5000); // every 5 sec
});
// Navbar toggle
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}

