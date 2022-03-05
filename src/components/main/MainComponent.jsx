import React, {useState, useEffect} from 'react'
import InputNumeroComponent from '../inputnumero/InputNumeroComponent';
import ResultadoComponent from '../resultado/ResultadoComponent';
import './mainComponent.css';

import {convertDecimalToNBase, convertNBaseToDecimal, checkNumberBase} from '../auxiliarFunctions';

const MainComponent = () => {

    const [firstNumber, setFirstNumber] = useState({value: 0, base: 10, isValid: true});
    const [secondNumber, setSecondNumber] = useState({value: 0, base: 10, isValid:true});
    
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState({value: 0, base: 10});


    useEffect(() => {
      const valid = checkNumberBase(firstNumber.value, firstNumber.base);
      setFirstNumber({...firstNumber, isValid: valid})
    }, [firstNumber.value, firstNumber.base])

    useEffect(() => {
      const valid = checkNumberBase(secondNumber.value, secondNumber.base);
      setSecondNumber({...secondNumber, isValid: valid})
    }, [secondNumber.value, secondNumber.base])
    

    const calculateResult = () => {
        let num1 = firstNumber.value;
        let num2 = secondNumber.value;
        let operationResult = 0;

        if(firstNumber.base <= 10){
            setFirstNumber({...firstNumber, value: +firstNumber.value})
            num1 = +firstNumber.value
        }
        if(firstNumber.base !== 10){
            num1 = convertNBaseToDecimal(firstNumber.value, firstNumber.base);
        }
        
        if(secondNumber.base <= 10){
            setSecondNumber({...secondNumber, value: +secondNumber.value})
            num2 = +secondNumber.value
        }
        if(secondNumber.base !== 10){
            num2 = convertNBaseToDecimal(secondNumber.value, secondNumber.base);
        }

        switch (operation) {
            case 'add':
                operationResult = num1 + num2;
                break;
            case 'subs':
                operationResult = num1 - num2;                
                break;
            case 'mult':
                operationResult = num1 * num2;
                break;
            case 'div':
                operationResult = num1 / num2;
                break;
        
            default:
                break;
        }

        setResult({value: operationResult, base: 10});
    }

  return (
      <div className="main">

        <h3>Conversor y calculadora de sistemas numéricos de diferentes bases</h3>
        <h3>Autor: @anfelipe0407 (github)</h3>

        <InputNumeroComponent numberIsValid={firstNumber.isValid} updateNumber={(value) => setFirstNumber({...firstNumber, value})} updateBase={(base) => setFirstNumber({...firstNumber, base})} />

        <select className="operation" id="operation" onChange={event => setOperation(event.target.value)}>
            <option value="add" selected>+ Suma</option>
            <option value="subs">- Resta</option>
            <option value="mult">X Multiplicación</option>
            <option value="div">/ División</option>
        </select>

        <InputNumeroComponent numberIsValid={secondNumber.isValid} updateNumber={(value) => setSecondNumber({...secondNumber, value})} updateBase={(base) => setSecondNumber({...secondNumber, base})} />

        <button disabled={!firstNumber.isValid || !secondNumber.isValid} className="calcularBtn" onClick={calculateResult}>CALCULAR</button>

        <ResultadoComponent value={result.value} base={result.base} />
      </div>
  )
}

export default MainComponent