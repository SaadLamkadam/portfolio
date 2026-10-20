"use client";

import { useEffect } from "react";

// Page-wide behaviours with no markup of their own:
// speedline parallax, pointer-tracked sheen on [data-sheen], and the brass shutter on nav jumps.
export function InteractionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => root.style.setProperty("--scroll-y", String(window.scrollY)));
    };

    const onPointer = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-sheen]");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target || !target.classList.contains("shutter")) return;
      target.classList.remove("shutter-run");
      void target.offsetWidth; // restart the animation
      target.classList.add("shutter-run");
    };

    if (!reduce) window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointermove", onPointer);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
