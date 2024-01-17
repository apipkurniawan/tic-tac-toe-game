import Player from './components/player';

function App() {
  return (
    <>
      <header>
        <img src='./public/game-logo.png' />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id='game-container'>
          <ol id='players'>
            <Player initialName='Player 1' symbol='X' />
            <Player initialName='Player 2' symbol='O' />
          </ol>
          GAME BOARD
        </div>
      </main>
    </>
  );
}

export default App;
