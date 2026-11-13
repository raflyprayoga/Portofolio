import AeroShards from "../AeroShards";

export default function HomeSection() {
  return (
    <section className="hero" id="home">
      <AeroShards
        className="hero-shards"
        placement="full"
        shardColor="#c8f169"
        accentColor="#f4f1ec"
        backgroundColor="transparent"
        count={650}
        shardSize={0.85}
        speed={0.65}
        glow={0.4}
        dpr={1.5}
        mouseInteraction
        mouseStrength={0.45}
        style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
      />
      <div className="hero-layout section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
          <h1>Halo, saya <span>Rafly.</span><br />Full Stack<br />Developer.</h1>
          <p className="hero-description">Saya seorang developer yang senang mengubah ide menjadi pengalaman digital yang sederhana, berguna, dan berkesan.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#project">Lihat project <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#about">Kenali saya <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core">R<span>.</span></div>
          <span className="art-tag tag-top">CREATIVE<br />DEVELOPER</span>
          <span className="art-tag tag-bottom">DESIGN × CODE</span>
          <span className="art-spark spark-one">✳</span>
          <span className="art-spark spark-two">✳</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
    </section>
  );
}
