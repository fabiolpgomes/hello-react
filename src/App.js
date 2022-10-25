import "./App.css";
import Header from "./components/Header";
import HelloText from "./components/HelloText";
import Button from "./components/Button";
import Feature from "./components/Feature";

function App() {
  return (
    <div>
      <div className="bg-top">
        <Header />
        <HelloText />
        <Button />
      </div>
      <div className="bg-bottom">
        <Feature />
      </div>
    </div>
  );
}

export default App;