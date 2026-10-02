"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import type { Project } from "@/lib/content";
import { useMotionPreference } from "./motion-provider";
import { ProjectVisual } from "./project-visual";
import "./project-interaction.css";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { paused } = useMotionPreference();
  const card = useRef<HTMLElement>(null);
  const art = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");
  const resetTilt = useCallback(() => {
    const element = card.current;
    if (!element) return;
    element.dataset.pointerActive = "false";
    for (const property of [
      "--project-tilt-x",
      "--project-tilt-y",
      "--project-pointer-x",
      "--project-pointer-y",
      "--project-parallax-x",
      "--project-parallax-y",
    ]) {
      element.style.removeProperty(property);
    }
  }, []);

  useEffect(() => {
    if (paused) resetTilt();
  }, [paused, resetTilt]);

  function tilt(event: PointerEvent<HTMLButtonElement>) {
    if (
      paused ||
      event.pointerType === "touch" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      resetTilt();
      return;
    }
    const element = card.current;
    if (!element) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const height = art.current?.offsetHeight ?? bounds.height;
    if (!bounds.width || !height) return;
    const x = Math.max(
      -1,
      Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1),
    );
    const y = Math.max(
      -1,
      Math.min(1, ((event.clientY - bounds.top) / height) * 2 - 1),
    );
    element.dataset.pointerActive = "true";
    element.style.setProperty("--project-tilt-x", `${(-y * 5).toFixed(2)}deg`);
    element.style.setProperty("--project-tilt-y", `${(x * 5).toFixed(2)}deg`);
    element.style.setProperty("--project-pointer-x", `${(x + 1) * 50}%`);
    element.style.setProperty("--project-pointer-y", `${(y + 1) * 50}%`);
    element.style.setProperty(
      "--project-parallax-x",
      `${(x * 8).toFixed(2)}px`,
    );
    element.style.setProperty(
      "--project-parallax-y",
      `${(y * 8).toFixed(2)}px`,
    );
  }

  function open() {
    resetTilt();
    previousOverflow.current = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  }
  function close() {
    dialog.current?.close();
  }

  return (
    <article
      className={`project project-${project.id}`}
      ref={card}
      data-reveal
      data-motion={paused ? "paused" : "active"}
    >
      <button
        className="project-open"
        onClick={open}
        onPointerEnter={tilt}
        onPointerMove={tilt}
        onPointerLeave={resetTilt}
        onPointerCancel={resetTilt}
        aria-label={`Explore ${project.name}`}
      >
        <div className="project-art" ref={art}>
          <ProjectVisual kind={project.id} />
          <span className="project-index mono">0{index + 1}</span>
          <span className="project-art-arrow">
            <ArrowUpRight size={24} />
          </span>
        </div>
        <div className="project-info">
          <div className="project-meta mono">
            <span>{project.category}</span>
            <span>{project.period}</span>
          </div>
          <div className="project-title">
            <h3>{project.name}</h3>
            <ArrowUpRight size={28} strokeWidth={1.5} />
          </div>
          <p>{project.description}</p>
          <span className="project-cta mono">
            EXPLORE PROJECT <span>↗</span>
          </span>
        </div>
      </button>
      <dialog
        className="project-dialog"
        ref={dialog}
        aria-labelledby={`${project.id}-title`}
        onClose={() => {
          document.body.style.overflow = previousOverflow.current;
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <button
          className="dialog-close"
          onClick={close}
          aria-label={`Close ${project.name}`}
          autoFocus
        >
          <X size={21} />
        </button>
        <div className="dialog-art">
          <ProjectVisual kind={project.id} />
        </div>
        <div className="dialog-copy">
          <span className="eyebrow">{project.category}</span>
          <h2 id={`${project.id}-title`}>{project.name}</h2>
          <p className="dialog-headline">{project.headline}</p>
          <div className="dialog-role mono">{project.role}</div>
          <p>{project.context}</p>
          <h3>My contribution</h3>
          <ul>
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="stack-tags">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="project-links">
            <a
              className="button button-orange"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkLabel}
              <ArrowUpRight size={18} />
            </a>
            {project.caseStudyUrl && (
              <a
                className="project-case-study mono"
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the case study <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </dialog>
    </article>
  );
}
