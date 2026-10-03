"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState } from "react";
import { SculptureFallback } from "./sculpture-fallback";
import { useMotionPreference } from "./motion-provider";
import "./sculpture-controls.css";

export type SculptureMode = "chrome" | "blueprint";

const SculptureScene = dynamic(() => import("./sculpture-scene"), {
  ssr: false,
  loading: () => <SculptureFallback />,
});

class SceneBoundary extends Component<
  { children: React.ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <SculptureFallback /> : this.props.children;
  }
}

export function Sculpture() {
  const { paused } = useMotionPreference();
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [mode, setMode] = useState<SculptureMode>("chrome");

  useEffect(() => {
    let intersecting = true;
    const update = () => setVisible(intersecting && !document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => {
        intersecting = entry.isIntersecting;
        update();
      },
      { rootMargin: "80px" },
    );
    if (root.current) observer.observe(root.current);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <div className="sculpture" ref={root} data-mode={mode}>
      <div className="sculpture-decoration" aria-hidden="true">
        <SceneBoundary>
          <SculptureScene paused={paused || !visible} mode={mode} />
        </SceneBoundary>
      </div>
      <div
        className="sculpture-controls"
        role="group"
        aria-label="Sculpture appearance"
      >
        <button
          type="button"
          aria-pressed={mode === "chrome"}
          onClick={() => setMode("chrome")}
        >
          <span className="sculpture-chrome-mark" aria-hidden="true" />
          Chrome
        </button>
        <button
          type="button"
          aria-pressed={mode === "blueprint"}
          onClick={() => setMode("blueprint")}
        >
          <span className="sculpture-blueprint-mark" aria-hidden="true" />
          Blueprint
        </button>
      </div>
    </div>
  );
}
