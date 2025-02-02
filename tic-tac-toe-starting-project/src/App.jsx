import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

let winner = null;

function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";

    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }

    return currentPlayer;
}

function App() {
    //const [activePlayer, setActivePlayer] = useState("X");
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = initialGameBoard;

    for (let turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    for (const combination of WINNING_COMBINATIONS) {
        //console.log(combination[0]);
        const firstSquareSymbol =
            gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol =
            gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol =
            gameBoard[combination[2].row][combination[2].column];
        if (
            firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = firstSquareSymbol;
        }
    }

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((curActivePlayer) =>
        //     curActivePlayer === "X" ? "O" : "X"
        // );
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);

            const updateTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];
            return updateTurns;
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="Player1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                    />
                    <Player
                        initialName="Player2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                    />
                </ol>
                {winner && <p>You Won, {winner}!</p>}
                <GameBoard
                    board={gameBoard}
                    onSelectSquare={handleSelectSquare}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
