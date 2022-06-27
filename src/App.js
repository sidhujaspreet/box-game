import './App.css';
import Game from './game/game'

function App() {
  let variant = window.variant || 1;
  let showDesc = window.variant === 1
  return (
    <div className="App">
      <h2 className="box-heading">Box Game</h2>
      {showDesc && <h4 className="box-description">Click on the boxes below.</h4>}
      <Game />
    </div>
  );
}

export default App;
