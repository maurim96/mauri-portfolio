import "./project-visual.css";

type ProjectKind = "bask" | "breeze" | "pilou";

function BaskVisual() {
  return (
    <div className="pv-root pv-bask" aria-hidden="true">
      <div className="pv-bask-grid" />
      <div className="pv-bask-orbit" />
      <div className="pv-bask-monogram">b</div>
      <div className="pv-bask-heading">
        <span className="pv-bask-brand">bask</span>
        <span className="pv-eyebrow">The connected care platform</span>
      </div>
      <div className="pv-bask-connector pv-bask-connector-one" />
      <div className="pv-bask-connector pv-bask-connector-two" />
      <div className="pv-flow-card pv-intake-card">
        <div className="pv-flow-card-top">
          <span className="pv-flow-symbol pv-intake-symbol">
            <i />
            <i />
            <i />
          </span>
          <span className="pv-flow-index">01</span>
        </div>
        <span className="pv-flow-title">Intake</span>
        <span className="pv-flow-detail">A better beginning.</span>
        <span className="pv-flow-line">
          <i />
        </span>
      </div>
      <div className="pv-flow-card pv-care-card">
        <div className="pv-flow-card-top">
          <span className="pv-flow-symbol pv-care-symbol" />
          <span className="pv-flow-index">02</span>
        </div>
        <span className="pv-flow-title">Care</span>
        <span className="pv-flow-detail">People at the center.</span>
        <span className="pv-care-dots">
          <i />
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="pv-flow-card pv-rx-card">
        <div className="pv-flow-card-top">
          <span className="pv-flow-symbol pv-rx-symbol">Rx</span>
          <span className="pv-flow-index">03</span>
        </div>
        <span className="pv-flow-title">Connected.</span>
        <span className="pv-flow-detail">From first step to follow-up.</span>
      </div>
      <span className="pv-bask-footer">Care without the friction.</span>
    </div>
  );
}

function BreezeVisual() {
  return (
    <div className="pv-root pv-breeze" aria-hidden="true">
      <div className="pv-breeze-halo" />
      <div className="pv-breeze-arches">
        <i />
        <i />
        <i />
        <i />
      </div>
      <span className="pv-breeze-note">A reason to smile.</span>
      <div className="pv-breeze-back-card" />
      <div className="pv-breeze-appointment">
        <div className="pv-breeze-card-top">
          <span className="pv-eyebrow">A little care goes a long way</span>
          <span className="pv-breeze-spark">✳</span>
        </div>
        <div className="pv-breeze-tooth">
          <i />
          <i />
        </div>
        <span className="pv-breeze-card-title">
          A brighter
          <br />
          kind of care.
        </span>
        <div className="pv-breeze-card-rule" />
        <div className="pv-breeze-card-bottom">
          <span>
            Your next visit,
            <br />
            <strong>made simple.</strong>
          </span>
          <span className="pv-breeze-arrow">↗</span>
        </div>
      </div>
      <span className="pv-breeze-brand">breeze</span>
      <span className="pv-breeze-caption">Dental care. Reimagined.</span>
    </div>
  );
}

function PilouVisual() {
  return (
    <div className="pv-root pv-pilou" aria-hidden="true">
      <div className="pv-pilou-halo" />
      <span className="pv-eyebrow pv-pilou-eyebrow">
        Small steps. Bigger possibilities.
      </span>
      <div className="pv-pilou-sun" />
      <div className="pv-pilou-step pv-pilou-step-one" />
      <div className="pv-pilou-step pv-pilou-step-two" />
      <div className="pv-pilou-step pv-pilou-step-three" />
      <div className="pv-pilou-step pv-pilou-step-four" />
      <div className="pv-pilou-step pv-pilou-step-five" />
      <svg className="pv-pilou-path" viewBox="0 0 500 300" fill="none">
        <path
          className="pv-pilou-path-shadow"
          d="M30 258H112V216H204V170H296V124H388V78H465"
        />
        <path d="M30 252H112V210H204V164H296V118H388V72H465" />
        <circle cx="465" cy="72" r="7" />
      </svg>
      <div className="pv-pilou-label">
        <span className="pv-pilou-label-dot" />
        Long-term thinking.
      </div>
      <span className="pv-pilou-brand">pilou</span>
      <span className="pv-pilou-caption">A future of your own.</span>
    </div>
  );
}

export function ProjectVisual({ kind }: { kind: ProjectKind }) {
  if (kind === "bask") return <BaskVisual />;
  if (kind === "breeze") return <BreezeVisual />;
  return <PilouVisual />;
}
