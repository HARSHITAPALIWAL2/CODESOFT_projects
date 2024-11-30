// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
    // Animate Hero Section
    gsap.from(".hero h1", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
      ease: "power4.out"
    });
  
    gsap.from(".hero p", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 1,
      ease: "power4.out"
    });
  
    gsap.from(".hero .cta", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 1.5,
      ease: "power4.out"
    });
  
    // Animate Features Section
    gsap.from(".feature", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
      }
    });
  
    // Animate About Section
    gsap.from(".about img", {
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
      }
    });
  
    gsap.from(".about div", {
      opacity: 0,
      x: 100,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
      }
    });
  
    // Animate Contact Section
    gsap.from(".contact h2", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
      ease: "power4.out"
    });
  
    gsap.from(".contact p", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 1,
      ease: "power4.out"
    });
  
    gsap.from(".contact .cta", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 1.5,
      ease: "power4.out"
    });
  });
  