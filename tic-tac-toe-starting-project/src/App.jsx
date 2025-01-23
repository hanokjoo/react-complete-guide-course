import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
import { useState } from "react";

function App() {
    const [activePlayer, setActivePlayer] = useState("X");

    function handleSelectSquare() {
        setActivePlayer((curActivePlayer) =>
            curActivePlayer === "X" ? "O" : "X"
        );
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
                <GameBoard
                    activePlayerSymbol={activePlayer}
                    onSelectSquare={handleSelectSquare}
                />
            </div>
        </main>
    );
}

export default App;
