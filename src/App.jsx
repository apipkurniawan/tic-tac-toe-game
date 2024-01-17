import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/player';
import Log from './components/Log';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurn, setgameTurn] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    setgameTurn((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
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
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurn} />
        </div>
        <Log />
      </main>
    </>
  );
}

export default App;
