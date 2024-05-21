import { useState } from "react";
import Numbers from "./Numbers";

const Roulette = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [result, setResult] = useState();
    const [count, setCount] = useState(0);

    const checkResult = (random1, random2, random3) => {
        if (random1 === random2 && random2 === random3) {
            setTimeout(() => {
                setResult('win');
            }, 500);
        } else {
            setTimeout(() => {
                setResult('lose');
            }, 500);
        };
    }

    const setNewNumbers = (ran1, ran2, ran3) => {
        setNum1(ran1);
        setNum2(ran2);
        setNum3(ran3);
    }

    const generateNumber = () => {
        setResult('');
        setCount(count + 1);

        const randomNumber1 = Math.floor(Math.random() * 10);
        const randomNumber2 = Math.floor(Math.random() * 10);
        const randomNumber3 = Math.floor(Math.random() * 10);

        setNewNumbers(randomNumber1, randomNumber2, randomNumber3);
        setResult(checkResult(randomNumber1, randomNumber2, randomNumber3));
    };

    return (
        <>
            <Numbers num1={num1} num2={num2} num3={num3} />
            <div className="buttonGenerate">
                <button onClick={generateNumber}>Try!</button>
            </div>            
            <div className="attemptCount">Attempt: {count}</div>
            {result === 'win' && <div className="winResult">You win!</div>}
            {result === 'lose' && <div className="loseResult">You lose! Retry...</div>}
        </>
    );
}

export default Roulette;