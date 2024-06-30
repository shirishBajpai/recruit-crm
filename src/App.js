import './App.css';
import Candidate from "../src/component/Candidate/Candidate";
import Navigation from './component/Navigation/Navigation';
import Features from './component/Features/Features';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Candidate />
      <Features />
    </div>
  );
}

export default App;
