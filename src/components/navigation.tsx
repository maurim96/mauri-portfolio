"use client";

import { ArrowUpRight, Asterisk, Menu, Pause, Play, X } from "lucide-react";
import { useRef } from "react";
import { useMotionPreference } from "./motion-provider";

export function Navigation() {
  const { paused, toggle } = useMotionPreference();
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
    <>
      <div className="reading-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mauricio Miño, home">
          <Asterisk className="brand-mark" size={30} strokeWidth={2.5} />
          <span>
            mauricio miño<span className="wordmark-dot">.</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">
            Work <span>01</span>
          </a>
          <a href="#about">
            About <span>02</span>
          </a>
          <a href="#contact" className="nav-contact">
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
        <div className="header-controls">
          <button
            className="motion-toggle"
            onClick={toggle}
            aria-label={paused ? "Resume animations" : "Pause animations"}
            title={paused ? "Resume animations" : "Pause animations"}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
            <span>Motion {paused ? "off" : "on"}</span>
          </button>
          <button
            className="menu-toggle"
            onClick={open}
            aria-label="Open navigation"
          >
            <Menu size={23} />
          </button>
        </div>
      </header>
      <dialog
        className="nav-dialog"
        ref={dialog}
        aria-label="Navigation"
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
          aria-label="Close navigation"
          autoFocus
        >
          <X />
        </button>
        <span className="eyebrow">TAKE A LOOK AROUND</span>
        <nav>
          <a href="#work" onClick={close}>
            Selected work <ArrowUpRight />
          </a>
          <a href="#about" onClick={close}>
            About me <ArrowUpRight />
          </a>
          <a href="#contact" onClick={close}>
            Let’s talk <ArrowUpRight />
          </a>
        </nav>
        <span className="mono nav-dialog-note">
          BUILT WITH INTENTION. AND A LITTLE OBSESSION.
        </span>
      </dialog>
    </>
  );
}
