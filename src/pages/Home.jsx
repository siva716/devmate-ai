import "./Home.css";
import CodePreview from "../components/CodePreview";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";  
import TechStack from "../components/TechStack";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <section>
        <div className="hero-text">
          <h1>
            Build Better.
            <br />
            Code Smarter.
          </h1>

          <p>
            Your intelligent coding companion
          </p>

          <button>
            Start Coding
          </button>
        </div>

        <CodePreview />

      </section>

      <Features />

 <HowItWorks />

  <TechStack />

  <CTA />

  <Footer />

    </>
  );
}

export default Home;