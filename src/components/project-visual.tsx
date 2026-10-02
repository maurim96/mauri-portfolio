import Image from "next/image";
import baskHouse from "../../public/projects/bask-house.webp";
import breezeMobile from "../../public/projects/breeze-mobile.webp";
import pilouPlatform from "../../public/projects/pilou-platform.webp";
import pilouLogo from "../../public/projects/pilou-logo.png";
import "./project-visual.css";

type ProjectKind = "bask" | "breeze" | "pilou";

const artworkSizes =
  "(max-width: 640px) 150vw, (max-width: 1080px) 90vw, 850px";

function BaskVisual() {
  return (
    <div className="pv-root pv-bask" aria-hidden="true">
      <div className="pv-bask-grid" />
      <div className="pv-bask-glow" />
      <Image
        className="pv-brand pv-bask-brand"
        src="/projects/bask-logo.svg"
        width={64}
        height={32}
        alt=""
      />
      <span className="pv-bask-mantra">
        Launch.
        <br />
        Scale.
        <br />
        Grow.
      </span>
      <Image
        className="pv-bask-house pv-layer"
        src={baskHouse}
        sizes={artworkSizes}
        unoptimized
        alt=""
      />
      <div className="pv-brand-footer">
        <span>bask.health</span>
        <span className="pv-status">
          <i /> Connected care
        </span>
      </div>
    </div>
  );
}

function BreezeVisual() {
  return (
    <div className="pv-root pv-breeze" aria-hidden="true">
      <div className="pv-breeze-sun" />
      <Image
        className="pv-brand pv-breeze-brand"
        src="/projects/breeze-logo.svg"
        width={133}
        height={37}
        alt=""
      />
      <span className="pv-breeze-spark">✳</span>
      <Image
        className="pv-breeze-mobile pv-layer"
        src={breezeMobile}
        sizes={artworkSizes}
        alt=""
      />
      <div className="pv-brand-footer">
        <span className="pv-breeze-label">A fresh take on dental.</span>
        <span className="pv-breeze-chips">
          <i />
          <i />
          <i />
        </span>
      </div>
    </div>
  );
}

function PilouVisual() {
  return (
    <div className="pv-root pv-pilou" aria-hidden="true">
      <div className="pv-pilou-orbit" />
      <div className="pv-pilou-orb" />
      <Image
        className="pv-brand pv-pilou-brand"
        src={pilouLogo}
        sizes="150px"
        alt=""
      />
      <span className="pv-pilou-note">
        Tu futuro.
        <br />A tu manera.
      </span>
      <Image
        className="pv-pilou-platform pv-layer"
        src={pilouPlatform}
        sizes={artworkSizes}
        alt=""
      />
      <div className="pv-brand-footer">
        <span>pilou.io</span>
        <span className="pv-pilou-label">Empieza contigo ↗</span>
      </div>
    </div>
  );
}

export function ProjectVisual({ kind }: { kind: ProjectKind }) {
  if (kind === "bask") return <BaskVisual />;
  if (kind === "breeze") return <BreezeVisual />;
  return <PilouVisual />;
}
