import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

//const INITIAL_INVESTMENTS = [0, 0, 0, 0];
/*
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
*/

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            };
        });
    }
    /*
    const [initialInvestment, setInitialInvestment] = useState(0);
    const [annualInvestment, setAnnualInvestment] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);
    const [investmentResults, setInvestmentResults] = useState([]);

    console.log(
        "values:",
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    );

    function handleChangeInitialInvestment(event) {
        setInitialInvestment(event.target.value);

        const result = calculateInvestmentResults({
            initialInvestment,
            annualInvestment,
            expectedReturn,
            duration,
        });
        setInvestmentResults(result);
        console.log("[results]initial:", result);
        // initialInvestment = results[0];
        // annualInvestment = results[1];
        // expectedReturn = results[2];
        // duration = results[3];
    }

    function handleChangeAnnualInvestment(event) {
        setAnnualInvestment(event.target.value);

        setInvestmentResults(
            calculateInvestmentResults({
                initialInvestment,
                annualInvestment,
                expectedReturn,
                duration,
            })
        );
    }
    function handleChangeExpectedReturn(event) {
        setExpectedReturn(event.target.value);

        setInvestmentResults(
            calculateInvestmentResults({
                initialInvestment,
                annualInvestment,
                expectedReturn,
                duration,
            })
        );
    }
    function handleChangeDuration(event) {
        setDuration(event.target.value);

        setInvestmentResults(
            calculateInvestmentResults({
                initialInvestment,
                annualInvestment,
                expectedReturn,
                duration,
            })
        );
    }
*/
    return (
        <>
            <Header />
            <UserInput userInput={userInput} onChange={handleChange} />
            <Results input={userInput} />
        </>
        /*
        <div id="header">
            <img src="investment-calculator-logo.png" />
            <h1>React Investment Calculator</h1>

            <div id="user-input">
                <p className="input-group">
                    <span>
                        <label className="input-group">
                            INITIAL INVESTMENT
                        </label>
                        <input
                            className="input-group"
                            type="number"
                            value={initialInvestment}
                            onChange={handleChangeInitialInvestment}
                        ></input>
                    </span>
                    <span>
                        <label className="input-group">ANNUAL INVESTMENT</label>
                        <input
                            className="input-group"
                            type="number"
                            value={annualInvestment}
                            onChange={handleChangeAnnualInvestment}
                        ></input>
                    </span>
                </p>
                <p className="input-group">
                    <span>
                        <label className="input-group">EXPECTED RETURN</label>
                        <input
                            className="input-group"
                            type="number"
                            value={expectedReturn}
                            onChange={handleChangeExpectedReturn}
                        ></input>
                    </span>
                    <span>
                        <label className="input-group">DURATION</label>
                        <input
                            className="input-group"
                            type="number"
                            value={duration}
                            onChange={handleChangeDuration}
                        ></input>
                    </span>
                </p>
            </div>

            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {investmentResults.map((result) => (
                        <tr>
                            <td>{formatter.format(result.year)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.annualInvestment)}</td>
                            <td>0</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        */
    );
}

export default App;
