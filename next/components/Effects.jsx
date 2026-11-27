"use client";
import { useEffect } from "react";

// Efeitos puramente visuais: brilho do hero, spotlight dos tiles e contadores.
export default function Effects() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const off = [];
    const on = (el, ev, fn) => {
      el.addEventListener(ev, fn);
      off.push(() => el.removeEventListener(ev, fn));
    };

    const hero = document.querySelector(".hero");
    if (hero)
      on(hero, "pointermove", (e) => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty("--gx", ((e.clientX - r.left) / r.width) * 100 + "%");
        hero.style.setProperty("--gy", ((e.clientY - r.top) / r.height) * 100 + "%");
      });

    document.querySelectorAll(".tile").forEach((t) =>
      on(t, "pointermove", (e) => {
        const r = t.getBoundingClientRect();
        t.style.setProperty("--mx", e.clientX - r.left + "px");
        t.style.setProperty("--my", e.clientY - r.top + "px");
      })
    );

    let raf = 0;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          if (reduce) return;
          const el = e.target, to = +el.dataset.count, t0 = performance.now(), d = 1400;
          const tick = (t) => {
            const k = Math.min(1, (t - t0) / d);
            el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))).toLocaleString("pt-BR");
            if (k < 1) raf = requestAnimationFrame(tick);
          };
          tick(t0);
        }),
      { threshold: 0.6 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => io.observe(el));

    return () => {
      off.forEach((f) => f());
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
