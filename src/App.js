import './App.css';
import { useEffect, useState } from 'react'

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function App() {

  const [board, setBoard] = useState((Array(9).fill(null)))
  const [playerX, setPlayerX] = useState(true)
  const [PlayerWin, setPlayerWin] = useState('')
  const [winner, setWinner] = useState(false)

  const handleClick = (i) => {
    let arr = board;
    if (playerX) {
      arr[i] = 'X'
      setBoard(arr)
      checkForWinner()
      setPlayerX(!playerX)
    } else {
      arr[i] = 'O'
      setBoard(arr)
      checkForWinner()

      setPlayerX(!playerX)
    }
  }

  const checkForWinner = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinner(true)
        setPlayerWin(board[a])
      }
    }
  }

  useEffect(() => {

    if (!playerX) {
      const indexes = Object.keys(board)
      const availableIndexesOnBoard = indexes.filter((index) => board[index] == null);
      const selectedIndex = availableIndexesOnBoard[Math.floor(Math.random() * availableIndexesOnBoard.length)];

      handleClick(selectedIndex)

      setPlayerX(!playerX)
    }
  }, [playerX])

  const resetBoard = () => {

    setBoard((Array(9).fill(null)))
    setPlayerWin('')
    setWinner(false)
    setPlayerX(true)

  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className={'game-board'} >
        <div className={'row'}>
          <button
            className={'square'}
            disabled={board[0] === 'X' || board[0] === 'Y' || winner ? true : false}
            style={{ cursor: board[0] === 'X' || board[0] === 'Y' || winner ? 'default' : 'pointer' }}
            onClick={() => handleClick('0')}>{board[0]}</button>
          <button
            className={'square'}
            disabled={board[1] === 'X' || board[1] === 'Y' || winner ? true : false}
            style={{ cursor: board[1] === 'X' || board[1] === 'Y' || winner ? 'default' : 'pointer' }}
            onClick={() => handleClick('1')}>{board[1]}</button>
          <button
            className={'square'}
            disabled={board[2] === 'X' || board[2] === 'Y' || winner ? true : false}
            style={{ cursor: board[2] === 'X' || board[2] === 'Y' || winner ? 'default' : 'pointer' }}
            onClick={() => handleClick('2')}>{board[2]}</button>
        </div>
        <div className={'row'}>
          <button
            className={'square'}
            disabled={board[3] === 'X' || board[3] === 'Y' || winner ? true : false}
            style={{ cursor: board[3] === 'X' || board[3] === 'Y' || winner ? 'default' : 'pointer' }}
            onClick={() => handleClick('3')}>{board[3]}</button>
          <button
            className={'square'}
            disabled={board[4] === 'X' || board[4] === 'Y' || winner ? true : false}
            style={{ cursor: board[4] === 'X' || board[4] === 'Y' || winner ? 'default' : 'pointer' }}
            onClick={() => handleClick('4')}>{board[4]}</button>
          <button
            className={'square'}
            disabled={board[5] === 'X' || board[5] === 'Y' || winner ? true : false}
            style={{ cursor: board[5] === 'X' || board[5] === 'Y' || winner ? 'default' : 'pointer' }}
            onClick={() => handleClick('5')}>{board[5]}</button>
        </div>
        <div className={'row'}>
          <button
            className={'square'}
            disabled={board[6] === 'X' || board[6] === 'Y' || winner ? true : false}
            style={{ cursor: board[6] === 'X' || board[6] === 'Y' || winner ? 'default' : 'pointer' }}
            onClick={() => handleClick('6')}>{board[6]}</button>
          <button
            className={'square'}
            disabled={board[7] === 'X' || board[7] === 'Y' || winner ? true : false}
            style={{ cursor: board[7] === 'X' || board[7] === 'Y' || winner ? 'default' : 'pointer' }}
            onClick={() => handleClick('7')}>{board[7]}</button>
          <button
            className={'square'}
            disabled={board[8] === 'X' || board[8] === 'Y' || winner ? true : false}
            style={{ cursor: board[8] === 'X' || board[8] === 'Y' || winner ? 'default' : 'pointer' }}
            onClick={() => handleClick('8')}>{board[8]}</button>
        </div>
        {
          winner &&
          <div>
            <h1>{'Player ' + PlayerWin + ' won the game'}</h1>
            <button className={'play-again'} onClick={() => resetBoard()}>Play Again!</button>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
