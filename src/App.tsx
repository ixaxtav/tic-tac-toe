import { useState } from "react";

type BoardState = string[];

const winningCombinations: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Board = () => {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState("");

  const handleClick = (index: number) => {
    if (board[index] === "" && !winner) {
      const updatedBoard = [...board];
      updatedBoard[index] = currentPlayer;
      setBoard(updatedBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      checkWinner(updatedBoard);
    }
  };

  const checkWinner = (currentBoard: BoardState) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        setWinner(currentBoard[a]);
        return;
      }
    }
    if (currentBoard.every((cell) => cell !== "")) {
      setWinner("Draw");
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner("");
  };

  return (
    <div>
      <h1>Tic Tac Toe !</h1>
      {winner && (
        <div>
          {winner === "Draw" ? <h2>It's a draw!</h2> : <h2>{`Player ${winner} wins!`}</h2>}
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
      <div className="board">
        {board.map((value, index) => (
          <button className="square" key={index} value={value} onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Board;
