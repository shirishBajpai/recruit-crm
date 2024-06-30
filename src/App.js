import './App.css';
import Candidate from "../src/component/Candidate/Candidate";
import Navigation from './component/Navigation/Navigation';
import Features from './component/Features/Features';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className='dashboard'>
        <Candidate />
        <Features />
      </div>   
    </div>
  );
}

export default App;
