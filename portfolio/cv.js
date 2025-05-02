// ==============================
// ANIMASI REVEAL SAAT SCROLL
// ==============================

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
  
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;
  
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);
  document.addEventListener("DOMContentLoaded", () => {
    revealOnScroll();
    animateProgressBars();
    typeEffect();
  });
  
  
  // ==============================
  // ANIMASI PROGRESS BAR
  // ==============================
  
  function animateProgressBars() {
    const bars = document.querySelectorAll(".fill");
  
    bars.forEach((bar, index) => {
      const value = bar.getAttribute("data-value");
      setTimeout(() => {
        bar.style.width = value + '%';
        bar.innerHTML = value + '%';
      }, 300 + index * 250); // Animasi satu per satu
    });
  }
  
  
  // ==============================
  // TYPING EFFECT DENGAN GAYA
  // ==============================
  
  const typingElement = document.getElementById("typing-text");
  const words = [
    "Frontend Developer",
    "UI/UX Designer",
    "Creative Technologist",
    "Problem Solver",
    "Digital Artist"
  ];
  
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  
  function typeEffect() {
    const current = words[wordIndex];
    const visibleText = current.substring(0, letterIndex);
    typingElement.innerHTML = `${visibleText}<span class="cursor">|</span>`;
  
    if (!isDeleting && letterIndex < current.length) {
      letterIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && letterIndex > 0) {
      letterIndex--;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 1000);
    }
  }
  