document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("header", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
    },
  });

  const heroTimeline = gsap.timeline({
    delay: 0.5,
  });

  heroTimeline
    .from(
      ".hero-content h1 .line",
      {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".hero-cta",
      {
        opacity: 1,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      },
    )
    ;

  const fadeInElements = [
    ".section-intro .small-title",
    ".section-intro .main-heading",
    ".section-intro .description",
    ".section-intro .cta-box",
    ".ingredients-title",
    ".ingredient-item",
    ".collection-main-title",
    ".product-card",
    ".timeline-main-title",
    ".timeline-entry",
  ];

  fadeInElements.forEach((selector) => {
    gsap.from(selector, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      stagger:
        selector === ".ingredient-item" || selector === ".product-card"
          ? 0.2
          : 0.1,
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        end: "bottom top",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  });

  document.querySelectorAll(".timeline-entry").forEach((entry, i) => {
    const img = entry.querySelector(".timeline-img");
    const date = entry.querySelector(".timeline-date");
    const title = entry.querySelector(".timeline-title");
    const description = entry.querySelector(".timeline-description");

    const entryTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: entry,
        start: "top 75%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    entryTimeline
      .from(img, {
        opacity: 0,
        x: i % 2 === 0 ? -100 : 100,
        rotation: i % 2 === 0 ? -10 : 10,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        date,
        {
          opacity: 0,
          y: -20,
          scale: 0.8,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      )
      .from(
        [title, description],
        {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.5"
      );
  });

  ScrollTrigger.refresh();
});
