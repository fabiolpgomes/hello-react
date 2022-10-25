// Component with principal text
import "./HelloText.css";

function HelloText() {
  return (
    <div className="content-container">
      <h1 className="content-h1">Say hello to ReactJS</h1>
      <p className="content-p">
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </p>
    </div>
  );
}

export default HelloText;