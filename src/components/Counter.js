import { useState, useEffect } from 'react';

export const Counter = () => {
    const [input1, setInput1] = useState(null);
    const [input2, setInput2] = useState(null);
    const [operator, setOperator] = useState(null);
    const [solution, setSolution] = useState(null);

    const calculateRandom = (e) => {
        e.preventDefault();
        console.log(e);
        const operators = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
        }
        let array = []
        for (let key in operators) {
            array.push(key);
        }
        console.log(array);
        console.log(`This is the array ${array}`);

        const operatorList = Object.keys(operators); // ["+", "-", "*"]
    
        const index = Math.floor(Math.random() * operatorList.length);
        console.log(`This is the index ${index}`)
        const currentOperator = operatorList[index]; // "add" 
        console.log(`This is the currentOperator ${currentOperator}`)
        const mathFunction = operators[currentOperator]; // (a, b) => a + b
        console.log(`This is the mathFunction ${mathFunction}`)

        const solution = mathFunction(input1, input2); // mathFunction(3,4) => 7
        console.log(`This is the solution ${solution}`)
        setSolution(solution);
        setOperator(currentOperator);

    }


    return (
        <form onSubmit={calculateRandom}>
            <label>
            Number1
            <input type="text" value={input1} onChange={(e) => setInput1(parseInt(e.target.value))} />
            </label>
            <label>
            Number2
            <input type="text" value={input2} onChange={(e) => setInput2(parseInt(e.target.value))} />
            </label>


            <button>Calculate</button>
            {solution && <h1>The solution of {`${input1} ${operator} ${input2} = ${solution}`}</h1>}
        </form>
    );
}