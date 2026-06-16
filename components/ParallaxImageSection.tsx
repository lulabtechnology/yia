"use client";

import { useEffect, useRef } from "react";

type ParallaxImageSectionProps = {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  image: string;
};

export function ParallaxImageSection({ eyebrow, title, text, cta, href, image }: ParallaxImageSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      if (!sectionRef.current || !imageRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = (viewport - rect.top) / (viewport + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const isSmall = window.innerWidth < 740;
      const power = isSmall ? 210 : 150;
      const imageOffset = (clamped - 0.5) * power;
      const glowOffset = (clamped - 0.5) * (power * -0.35);

      imageRef.current.style.transform = `translate3d(0, ${imageOffset}px, 0) scale(${isSmall ? 1.28 : 1.16})`;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(0, ${glowOffset}px, 0) rotate(${clamped * 18}deg)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="parallax-section" aria-label="Mensaje de claridad financiera">
      <img ref={imageRef} src={image} alt="Oficina moderna con dashboard financiero" className="parallax-image" />
      <div className="parallax-vignette" />
      <div ref={glowRef} className="parallax-gold-orb" />
      <div className="container parallax-content">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h2 className="reveal">{title}</h2>
        <p className="parallax-copy reveal">{text}</p>
        <a className="button button-gold reveal" href={href} target="_blank" rel="noreferrer">
          {cta}
        </a>
      </div>
    </section>
  );
}
