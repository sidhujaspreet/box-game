import './App.css';
import Game from './game/game'

function App() {
  return (
    <div className="App">
      <h2 className="box-heading">Box Game</h2>
      <h4 className="box-description">Click on the boxes below.</h2>
      <Game />
    </div>
  );
}

export default App;
