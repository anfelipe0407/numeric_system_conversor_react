import React, {useState} from 'react';
import { BASES } from '../auxiliarConsts';
import './inputNumeroComponent.css';

const InputNumeroComponent = ({updateNumber, updateBase, numberIsValid}) => {
    
    const [numero, setNumero] = useState(0);
    const [base, setBase] = useState(10);

    return (
        <div className='container'>
            <div className="inputContainer">
                <input type="text" placeholder='0' className="numero" id="numero" onChange={event => updateNumber(event.target.value.toUpperCase())} autoComplete="off" />
                <select className='base' id="base" onChange={event => updateBase(BASES[event.target.value])}>
                    <option value="binario">2 (binario)</option>
                    <option value="ternario">3 (ternario)</option>
                    <option value="cuaternario">4 (cuaternario)</option>
                    <option value="quinario">5 (quinario)</option>
                    <option value="senario">6 (senario)</option>
                    <option value="septenario">7 (septenario)</option>
                    <option value="octal">8 (octal)</option>
                    <option value="nonario">9 (nonario)</option>
                    <option selected value="decimal">10 (decimal)</option>
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

            <div className='errorMessageContainer'>
                {!numberIsValid &&
                    <small className="errorMessage">El número es inválido</small>
                }
            </div>
        </div>
    )
}

export default InputNumeroComponent