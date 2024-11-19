export default function TabButton(props) {
    function clickHandler() {
        console.log("Hello, world!");
    }

    return (
        <li>
            <button onClick={clickHandler}>{props.children}</button>
        </li>
    );
}
