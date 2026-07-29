import "./CodePreview.css";

function CodePreview() {
  return (
    <div className="code-card">

      <div className="terminal-header">
        <span></span>
        <span></span>
        <span></span>
        <p>DevMate AI</p>
      </div>

      <div className="code-box">
        <p>
          <span>function</span> hello() {"{"}
        </p>

        <p>
          &nbsp;&nbsp;console.log("Learn Coding");
        </p>

        <p>
          {"}"}
        </p>
      </div>

      <div className="ai-response">
        ✅ AI Explanation:
        <br />
        This function prints a learning message.
      </div>

    </div>
  );
}

export default CodePreview;