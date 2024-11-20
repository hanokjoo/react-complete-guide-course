export default function TabButton({ children, onClick }) {
    console.log("TAP COMPONENT EXECUTING");

    return (
        <li>
            <button onClick={onClick}>{children}</button>
        </li>
    );
}
