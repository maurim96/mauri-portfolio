"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState } from "react";
import { SculptureFallback } from "./sculpture-fallback";
import { useMotionPreference } from "./motion-provider";

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
    <div className="sculpture" ref={root} aria-hidden="true">
      <SceneBoundary>
        <SculptureScene paused={paused || !visible} />
      </SceneBoundary>
    </div>
  );
}
