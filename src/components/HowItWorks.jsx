import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <h2>How It Works?</h2>

      <div className="steps">

        <div className="step-card">
          <h3>1️⃣ Paste Your Code</h3>
          <p>
            Upload or paste your code into DevMate AI.
          </p>
        </div>

        <div className="step-card">
          <h3>2️⃣ AI Analyzes Code</h3>
          <p>
            AI understands your code logic and finds issues.
          </p>
        </div>

        <div className="step-card">
          <h3>3️⃣ Get Explanation</h3>
          <p>
            Receive solutions and clear explanations.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;