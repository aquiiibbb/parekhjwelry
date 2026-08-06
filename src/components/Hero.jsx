import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Jewelry care,
          <br />
          engineered with <span className="accent">precision.</span>
        </h1>

        <p className="hero-subtitle">
          White-glove mail-in jewelry repair, restoration, custom creation,
          sourcing, and manufacturing for individuals and businesses with
          exceptional standards.
        </p>

        <div className="hero-cta">
          <button
            className="cw-btn-start"
            onClick={() => navigate("/start")}
          >
            Start my Service
          </button>

          <button className="btn btn-secondary" onClick={() => navigate("/process")}  >
            See the Process
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;