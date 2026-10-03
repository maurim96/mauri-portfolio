"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MotionContext = createContext({ paused: true, toggle: () => {} });
let sessionPreference: string | null = null;

function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-motion", callback);
  return () => {
    media.removeEventListener("change", callback);
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio-motion", callback);
  };
}

function getPaused() {
  let preference = sessionPreference;
  try {
    preference = window.localStorage.getItem("portfolio-motion") ?? preference;
  } catch {}
  return preference
    ? preference === "paused"
    : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const paused = useSyncExternalStore(subscribe, getPaused, () => true);
  const scope = useRef<HTMLDivElement>(null);

  function toggle() {
    sessionPreference = paused ? "active" : "paused";
    try {
      window.localStorage.setItem("portfolio-motion", sessionPreference);
    } catch {}
    window.dispatchEvent(new Event("portfolio-motion"));
  }

  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "active";
    if (paused) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 60,
        opacity: 0,
        duration: 1.15,
        stagger: 0.13,
        ease: "power3.out",
      });
      gsap.from(".hero-intro, .hero-actions", {
        y: 20,
        opacity: 0,
        duration: 0.9,
        delay: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 35,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 94%", once: true },
        });
      });
      gsap.to(".reading-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, scope);
    return () => context.revert();
  }, [paused]);

  return (
    <MotionContext.Provider value={{ paused, toggle }}>
      <div ref={scope}>{children}</div>
    </MotionContext.Provider>
  );
}

export function useMotionPreference() {
  return useContext(MotionContext);
}
