import { useState, useRef } from "react";

export default function Player() {
    const [enteredPlayerName, setEnteredPlayerName] = useState(null);
    const playerName = useRef();

    function handleClick() {
        console.log(playerName.current.value);
        setEnteredPlayerName(playerName.current.value);
        setSubmitted(true);
    }

    return (
        <section id="player">
            <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
            <p>
                <input ref={playerName} type="text" />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
