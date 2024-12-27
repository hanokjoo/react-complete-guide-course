import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    function clickHandler(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton
                    isSelected={selectedTopic === "components"}
                    onClick={() => clickHandler("components")}
                >
                    Component
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "jsx"}
                    onClick={() => clickHandler("jsx")}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "props"}
                    onClick={() => clickHandler("props")}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "state"}
                    onClick={() => clickHandler("state")}
                >
                    State
                </TabButton>
            </menu>
            {tabContent}
        </section>
    );
}
