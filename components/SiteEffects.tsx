"use client";

import { useEffect } from "react";

export function SiteEffects() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const onScroll = () => {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 22);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index * 45, 360)}ms`);
      observer.observe(item);
    });

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
