import './App.css';
import "./assets/styles/styles.css";
import Header from "./components/Header";



function App() {
  return (
    <div className="background">
      <Header />

      <div className='flex-container'>
      <HelloText />
      </div>
      
        <h1>Home Page </h1>
      
    </div>
  );
}

export default App;
