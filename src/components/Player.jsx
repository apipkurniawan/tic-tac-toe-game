import { useState } from 'react';

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let player = <span className='player-name'>{playerName}</span>;

  if (isEditing) {
    player = (
      <input type='text' value={playerName} onChange={handleChange} required />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {player}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;
