"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useRef } from "react";
import type { Project } from "@/lib/content";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");
  function open() {
    previousOverflow.current = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  }
  function close() {
    dialog.current?.close();
  }

  return (
    <article className={`project project-${project.id}`} data-reveal>
      <button
        className="project-open"
        onClick={open}
        aria-label={`Explore ${project.name}`}
      >
        <div className="project-art">
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
          <a
            className="button button-orange"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkLabel}
            <ArrowUpRight size={18} />
          </a>
          <p className="visual-note mono">
            ORIGINAL CONCEPTUAL VISUAL · TEAM CONTRIBUTION
          </p>
        </div>
      </dialog>
    </article>
  );
}
