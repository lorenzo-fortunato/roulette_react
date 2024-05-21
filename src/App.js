import './App.css';
import Roulette from './components/Roulette';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='panel'>
          <h1>Play your game!</h1>
          <Roulette />  
        </div>        
      </header>
    </div>
  );
}

export default App;
