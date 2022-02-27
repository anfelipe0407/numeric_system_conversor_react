import React, { useEffect, useRef, useState } from 'react';
import {convertDecimalToNBase} from '../auxiliarFunctions';
import {BASES} from '../auxiliarConsts';
import './resultadoComponent.css';

const ResultadoComponent = ({value, base}) => {

    const [num, setNum] = useState(value);
    const [numInDecimal, setNumInDecimal] = useState(value);
    const [currentBase, setCurrentBase] = useState(base);
    const selectBaseInput = useRef(null);

    useEffect(() => {
      setNum(value);
      setNumInDecimal(value)
      setCurrentBase(10);
      selectBaseInput.current.value = 'decimal';
    }, [value]);

    const updateNumBase = (newBase) => {
      if(newBase === 10){
        setNum(numInDecimal);
        setCurrentBase(10);
      }else{
        const converted = convertDecimalToNBase(numInDecimal, newBase);
        setNum(converted);
      }
    }    

  return (
    <div className='resultcontainer'>
        <div className='resultadoText'>
          <p>RESULTADO: </p>
          <p>{num}</p>
        </div>
        {/* <p>Numero: {value} --- {num} --- currentBase: {currentBase} --- props.base: {base}</p> */}

        <small>Base: </small>
        <select className="base" id="base" ref={selectBaseInput} onChange={event => updateNumBase(BASES[event.target.value])}>
        <option value="binario">2 (binario)</option>
                <option value="ternario">3 (ternario)</option>
                <option value="cuaternario">4 (cuaternario)</option>
                <option value="quinario">5 (quinario)</option>
                <option value="senario">6 (senario)</option>
                <option value="septenario">7 (septenario)</option>
                <option value="octal">8 (octal)</option>
                <option value="nonario">9 (nonario)</option>
                <option value="decimal">10 (decimal)</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="hexadecimal">16 (hexadecimal)</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
    </div>
  )
}

export default ResultadoComponent