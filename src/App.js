import React from 'react';
import './index.css'
import {useState} from 'react';


function App()
{

        const [calc, setcalc] = useState("");  // Declared a new State variable and called calc

        const [result, setResult] = useState("");  // Declared a new State variable and called result

        const ops = ['+','/','*','-','.'];


        const updateCalc = value =>{

                if (ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1)))
                {
                        return;
                }

                setcalc(calc + value);

                if(!ops.includes(value)){
                        setResult(eval(calc + value).toString());
                }
        }


        const createDigits = () =>{

                const digits= [];

                for( let i=1;i<10;i++)
                {
                        digits.push(
                                <button onClick={() => updateCalc(i.toString())} key={i}>
                                {i}
                                </button>)
                }

                return digits;
        }

        const deletelast = () =>{

                if(calc == ' ')
                        return;
                
                let value= calc.slice(0,-1);

                setcalc(value);
        }

    return(

            <div className="App">
                    <div className="calculator">
                                <div className="display">
                                        {result ? <span> ({result}) </span> : ' '}
                                         {calc || "0"}
                                </div>
                                
                                <div className="operators">

                                        <button onClick={() => updateCalc('+')}>+</button>
                                        <button onClick={() => updateCalc('-')}>-</button>
                                        <button onClick={() => updateCalc('/')}>/</button>
                                        <button onClick={() => updateCalc('*')}>*</button>

                                        <button onClick={deletelast}>DEL</button>
                                </div>
                                
                                <div className="digits">
                                        {createDigits()}
                                        <button onClick={() => updateCalc('0')}>0</button>
                                        <button onClick={() => updateCalc('.')}>.</button>

                                        <button onClick={() => setcalc(eval(calc.toString()))}>=</button>

                                </div>
                        </div>

            </div>

    );
}

export default App;