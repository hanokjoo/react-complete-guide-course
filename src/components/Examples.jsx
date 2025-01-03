import { useState } from "react";
import Section from "./Section";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
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
        <Section title="Examples" id="examples">
            <Tabs
                ButtonsContainer="menu"
                buttons={
                    <>
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
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}
