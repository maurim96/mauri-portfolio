import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  Braces,
  Compass,
  Layers,
  MoveUpRight,
} from "lucide-react";
import { MotionProvider } from "@/components/motion-provider";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { Sculpture } from "@/components/sculpture";
import { contact, experience, projects, toolkit } from "@/lib/content";

export default function Home() {
  return (
    <MotionProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" />
      <Navigation />
      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-main">
            <div className="hero-copy">
              <div className="hero-eyebrow mono">
                <span className="status-dot" /> LEAD SOFTWARE ENGINEER AT BASK
                HEALTH
              </div>
              <h1
                id="hero-title"
                aria-label="Serious engineering. A little obsession."
              >
                <span className="hero-line">Serious</span>
                <span className="hero-line">engineering.</span>
                <span className="hero-line hero-accent">A little</span>
                <span className="hero-line hero-accent">
                  obsession<span className="terminal-dot">.</span>
                </span>
              </h1>
              <p className="hero-intro">
                I’m Mauricio. I turn complex problems into
                <br className="desktop-break" /> products that feel surprisingly
                simple.
              </p>
              <div className="hero-actions">
                <a className="button button-orange" href="#work">
                  Explore my work <ArrowDownRight size={20} />
                </a>
                <a className="hero-secondary" href="#contact">
                  Let’s make something great <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
            <div className="hero-art">
              <div className="art-corner art-corner-tl" />
              <div className="art-corner art-corner-br" />
              <span className="art-label mono">
                <span>FIG. 01</span> COMPLEXITY, RECONSIDERED
              </span>
              <Sculpture />
              <div className="art-caption mono">
                <span className="small-cross">+</span> A LITTLE STRUCTURE. A LOT
                OF POSSIBILITY.
                <span className="art-interact">MOVE TO EXPLORE ↗</span>
              </div>
            </div>
          </div>
          <div className="hero-footer mono">
            <span>
              BASED IN ARGENTINA <span className="location-mark">↗</span> BUILT
              FOR EVERYWHERE
            </span>
            <a href="#work">
              SCROLL TO DISCOVER <ArrowDown size={14} />
            </a>
            <span className="hero-coordinate">34° 36′ S / 58° 23′ W</span>
          </div>
        </section>
        <div className="manifesto-band" aria-hidden="true">
          <div className="manifesto-track">
            {Array.from({ length: 4 }, (_, index) => (
              <span key={index}>
                THINK DEEPLY <Asterisk /> BUILD BOLDLY <Asterisk /> MAKE IT
                MATTER <Asterisk />
              </span>
            ))}
          </div>
        </div>
        <section
          className="work-section section-shell"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">
                <span className="section-number">01 /</span> SELECTED WORK
              </span>
              <h2 id="work-title">
                Ideas into <span className="muted-word">impact.</span>
              </h2>
            </div>
            <p>
              Real products. Real complexity.
              <br />A few things I’ve helped bring to life.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="more-work" data-reveal>
            <span className="mono">THERE’S ALWAYS SOMETHING IN THE WORKS.</span>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              Explore my GitHub <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-shell">
            <div className="about-grid">
              <div className="about-heading" data-reveal>
                <span className="eyebrow">
                  <span className="section-number">02 /</span> THE PERSON BEHIND
                  THE PIXELS
                </span>
                <h2 id="about-title">
                  Engineer by craft.
                  <br />
                  <span>Builder by nature.</span>
                </h2>
                <div className="about-signature">
                  <Asterisk size={58} strokeWidth={1.6} />
                  <span>
                    Curiosity is
                    <br />
                    the common thread.
                  </span>
                </div>
              </div>
              <div className="about-copy" data-reveal>
                <p className="about-lead">
                  I care about what we’re building.
                  <br />
                  And why it should exist.
                </p>
                <p>
                  I’m a software engineer and technical lead based in Argentina.
                  I work across the stack, with a particular love for thoughtful
                  interfaces and the architecture underneath them.
                </p>
                <p>
                  From early-stage ideas to platforms ready for their next
                  chapter, I like being close to the product: working with
                  founders, partnering with designers, and helping engineers do
                  their best work.
                </p>
                <p>
                  Currently, I’m leading at{" "}
                  <a
                    href="https://bask.health"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bask Health <ArrowUpRight size={16} />
                  </a>
                  , building software that helps bring healthcare businesses to
                  life.
                </p>
                <a
                  className="text-link"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A little more about me on LinkedIn <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
            <div className="approach-grid" data-reveal>
              <div className="approach">
                <Compass size={26} strokeWidth={1.3} />
                <span className="mono">01 / UNDERSTAND FIRST</span>
                <h3>Start with the why.</h3>
                <p>
                  Good software begins with the problem, the people, and the
                  decisions that matter.
                </p>
              </div>
              <div className="approach">
                <Layers size={26} strokeWidth={1.3} />
                <span className="mono">02 / BUILD WITH INTENT</span>
                <h3>Make complexity behave.</h3>
                <p>
                  Clear architecture. Thoughtful interfaces. Details that earn
                  their place.
                </p>
              </div>
              <div className="approach">
                <Braces size={26} strokeWidth={1.3} />
                <span className="mono">03 / OWN THE OUTCOME</span>
                <h3>Ship. Learn. Improve.</h3>
                <p>
                  Stay close to the product, support the team, and keep moving
                  it forward.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="experience-section section-shell"
          aria-labelledby="experience-title"
        >
          <div className="experience-layout">
            <div className="experience-intro" data-reveal>
              <span className="eyebrow">
                <span className="section-number">03 /</span> THE JOURNEY SO FAR
              </span>
              <h2 id="experience-title">
                Always building.
                <br />
                <span className="muted-word">Always learning.</span>
              </h2>
              <p>
                Different teams, different challenges.
                <br />
                The same drive to make things better.
              </p>
              <a
                className="text-link"
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View résumé <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article
                  className="experience-row"
                  key={item.company}
                  data-reveal
                >
                  <span
                    className={`timeline-dot ${item.current ? "current" : ""}`}
                  />
                  <div className="experience-meta mono">
                    <span>{item.period}</span>
                    {item.current && (
                      <span className="current-tag">CURRENT</span>
                    )}
                  </div>
                  <h3>{item.company}</h3>
                  <h4>{item.role}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="toolkit" data-reveal>
            <div className="toolkit-heading">
              <span className="eyebrow">TOOLS OF THE TRADE</span>
              <span className="mono muted-word">
                THE RIGHT TOOL FOR THE RIGHT PROBLEM.
              </span>
            </div>
            <div className="toolkit-list">
              {toolkit.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </section>
        <section
          className="contact-section section-shell"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-top">
            <span className="eyebrow">
              <span className="section-number">04 /</span> WHAT’S NEXT?
            </span>
            <span className="mono">GOOD THINGS START WITH A CONVERSATION.</span>
          </div>
          <div className="contact-main" data-reveal>
            <h2 id="contact-title">
              Got an idea?
              <br />
              <a href={`mailto:${contact.email}`} aria-label="Email Mauricio">
                Let’s make it real<span>.</span>
                <MoveUpRight strokeWidth={1.1} />
              </a>
            </h2>
          </div>
          <div className="contact-bottom">
            <a className="contact-email" href={`mailto:${contact.email}`}>
              {contact.email}
              <ArrowUpRight size={18} />
            </a>
            <div className="social-links">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowUpRight size={17} />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <a href="#top" className="footer-brand">
          <Asterisk size={21} /> MAURICIO MIÑO
        </a>
        <span className="mono">MADE WITH CARE. BUILT TO EXPLORE.</span>
        <a href="#top" className="back-top mono">
          BACK TO TOP <ArrowUpRight size={14} />
        </a>
      </footer>
    </MotionProvider>
  );
}
