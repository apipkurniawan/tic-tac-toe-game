import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/player';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
  }

  return (
    <>
      <header>
        <img src='./public/game-logo.png' />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id='game-container'>
          <ol id='players' className='highlight-player'>
            <Player
              initialName='Player 1'
              symbol='X'
              isActive={activePlayer === 'X'}
            />
            <Player
              initialName='Player 2'
              symbol='O'
              isActive={activePlayer === 'O'}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
      </main>
    </>
  );
}

export default App;
