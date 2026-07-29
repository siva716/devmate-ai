import "./Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Why DevMate AI?</h2>

      <div className="feature-container">

        <div className="feature-card">
          <h3>🤖 AI Code Explanation</h3>
          <p>
            Understand complex code with AI powered explanations.
          </p>
        </div>


        <div className="feature-card">
          <h3>🐞 Bug Detection</h3>
          <p>
            Find errors and get smart solutions.
          </p>
        </div>


        <div className="feature-card">
          <h3>⌨️ Practice Mode</h3>
          <p>
            Improve coding skills with AI guidance.
          </p>
        </div>


        <div className="feature-card">
          <h3>🚀 Learning Roadmap</h3>
          <p>
            Follow a structured path to become a developer.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;