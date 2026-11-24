import React, { useState } from 'react';

export default function TicTacToeModal({ isOpen, onClose }) {
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winnerInfo, setWinnerInfo] = useState(null);

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    setBoard(Array(newSize * newSize).fill(null));
    setIsXNext(true);
    setWinnerInfo(null);
  };

  const resetGame = () => {
    setBoard(Array(size * size).fill(null));
    setIsXNext(true);
    setWinnerInfo(null);
  };

  const checkWinner = (currentBoard, currentSize) => {
    const n = currentSize;
    // Check rows
    for (let r = 0; r < n; r++) {
      const first = currentBoard[r * n];
      if (first) {
        let win = true;
        const line = [];
        for (let c = 0; c < n; c++) {
          line.push(r * n + c);
          if (currentBoard[r * n + c] !== first) {
            win = false;
            break;
          }
        }
        if (win) return { winner: first, line };
      }
    }

    // Check columns
    for (let c = 0; c < n; c++) {
      const first = currentBoard[c];
      if (first) {
        let win = true;
        const line = [];
        for (let r = 0; r < n; r++) {
          line.push(r * n + c);
          if (currentBoard[r * n + c] !== first) {
            win = false;
            break;
          }
        }
        if (win) return { winner: first, line };
      }
    }

    // Main diagonal
    const diag1 = currentBoard[0];
    if (diag1) {
      let win = true;
      const line = [];
      for (let i = 0; i < n; i++) {
        line.push(i * n + i);
        if (currentBoard[i * n + i] !== diag1) {
          win = false;
          break;
        }
      }
      if (win) return { winner: diag1, line };
    }

    // Anti-diagonal
    const diag2 = currentBoard[n - 1];
    if (diag2) {
      let win = true;
      const line = [];
      for (let i = 0; i < n; i++) {
        line.push(i * n + (n - 1 - i));
        if (currentBoard[i * n + (n - 1 - i)] !== diag2) {
          win = false;
          break;
        }
      }
      if (win) return { winner: diag2, line };
    }

    // Tie check
    if (currentBoard.every(cell => cell !== null)) {
      return { winner: 'Tie', line: [] };
    }

    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winnerInfo) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const win = checkWinner(newBoard, size);
    if (win) {
      setWinnerInfo(win);
    } else {
      setIsXNext(!isXNext);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1c30]/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md bg-white dark:bg-[#213145] border border-[#e2e8f0] dark:border-[#3a485c] rounded-2xl shadow-2xl p-6 flex flex-col gap-5 relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e2e8f0] dark:border-[#3a485c] pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#355f84] dark:text-[#a1cbf5] text-xl">
              grid_4x4
            </span>
            <div>
              <h3 className="font-display text-base font-bold text-[#0b1c30] dark:text-[#fdfcff]">
                Dynamic Tic-Tac-Toe
              </h3>
              <p className="font-mono text-[10px] text-[#64748b] dark:text-[#b1c9df]">
                Arbitrary N-Dimension Invariant Evaluation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eff4ff] dark:bg-[#0b1c30] text-[#334155] dark:text-[#eaf1ff] hover:text-[#0b1c30] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        {/* Size Selector */}
        <div className="flex items-center justify-between bg-[#eff4ff] dark:bg-[#0b1c30] p-2 rounded-xl border border-[#e2e8f0] dark:border-[#3a485c]">
          <span className="text-xs font-mono text-[#334155] dark:text-[#b1c9df] pl-2">
            Grid Size:
          </span>
          <div className="flex gap-1.5">
            {[3, 4, 5].map((s) => (
              <button
                key={s}
                onClick={() => handleSizeChange(s)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                  size === s
                    ? 'bg-[#355f84] text-white shadow-sm'
                    : 'bg-white dark:bg-[#213145] text-[#334155] dark:text-[#eaf1ff] hover:bg-[#dce9ff] dark:hover:bg-[#32495b]'
                }`}
              >
                {s}×{s}
              </button>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="text-center font-mono text-xs">
          {winnerInfo ? (
            winnerInfo.winner === 'Tie' ? (
              <span className="text-amber-600 dark:text-amber-400 font-semibold">Game ended in a Tie!</span>
            ) : (
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                🎉 Player {winnerInfo.winner} Won!
              </span>
            )
          ) : (
            <span className="text-[#334155] dark:text-[#b1c9df]">
              Next Turn: <strong className={isXNext ? 'text-[#355f84] dark:text-[#a1cbf5]' : 'text-rose-600 dark:text-rose-400'}>{isXNext ? 'X' : 'O'}</strong>
            </span>
          )}
        </div>

        {/* Grid Board */}
        <div 
          className="grid gap-2 mx-auto bg-[#eff4ff] dark:bg-[#0b1c30] p-3 rounded-xl border border-[#e2e8f0] dark:border-[#3a485c] max-w-[320px] w-full aspect-square"
          style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
        >
          {board.map((cell, idx) => {
            const isWinningCell = winnerInfo?.line?.includes(idx);
            return (
              <button
                key={idx}
                onClick={() => handleClick(idx)}
                disabled={Boolean(cell || winnerInfo)}
                className={`rounded-lg font-mono font-bold text-lg sm:text-xl flex items-center justify-center transition-all ${
                  cell === 'X' ? 'text-[#355f84] dark:text-[#a1cbf5]' : cell === 'O' ? 'text-rose-600 dark:text-rose-400' : ''
                } ${
                  isWinningCell 
                    ? 'bg-[#cee5ff] dark:bg-[#355f84] border-2 border-[#355f84] dark:border-[#a1cbf5] scale-95 shadow-md' 
                    : 'bg-white dark:bg-[#213145] border border-[#e2e8f0] dark:border-[#3a485c] hover:bg-[#f8f9ff] dark:hover:bg-[#32495b]'
                }`}
              >
                {cell}
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-[#e2e8f0] dark:border-[#3a485c]">
          <button
            onClick={resetGame}
            className="px-4 py-2 rounded-lg bg-[#eff4ff] dark:bg-[#0b1c30] hover:bg-[#dce9ff] dark:hover:bg-[#32495b] text-[#334155] dark:text-[#eaf1ff] text-xs font-mono transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[14px]">refresh</span>
            <span>Reset Board</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#355f84] hover:bg-[#4e759a] text-white text-xs font-mono transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
