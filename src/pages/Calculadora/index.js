import React, { Fragment, useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';
import '../Layouts/Calculadora.css';

const Container = styled.div`
align-items: center;
`;

const Title = styled.p`
font-size: 14px;
`;

export default function CalcCalcula() {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        localTheme && setTheme(localTheme)
    }, [])

    const [valorDigitado, setValorDigitado] = useState('');

    const [valorDisplay, setValorDisplay] = useState('')

    const [calcular, setCalcular] = useState('');

    const [operador, setOperador] = useState('')

    const [resultado, setResultado] = useState('0')

    // const [, setIgual] = useState(false);

    const [calcAcu, setCalcAcu] = useState('');

    function onChange(e) {
        let array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        let opera = '';
        if (array.indexOf(e.target.id) === -1) {
            if (e.target.id === "=") {
               
                if (valorDigitado !== "") {
                    setCalcular(valorDigitado);
                } else {
                    setOperador('');
                    setValorDisplay(resultado)
                }

            } else {
                if (e.target.id === "ma") {
                    opera = "+";
                }
                if (e.target.id === "v") {
                    opera = '*';
                }
                if (e.target.id === "d") {
                    opera = '/';
                }
                if (e.target.id === "me") {
                    opera = '-';
                }
                setOperador(opera);
     
                if (valorDigitado !== "") {
                    setCalcular(valorDigitado);
                    setValorDisplay(`${valorDigitado}${opera}`);
                    setValorDigitado('')
                } else {
                    setValorDisplay(`${resultado}${opera}`);
                    setValorDigitado(valorDigitado)
                }
            }

        } else {
            setValorDigitado(`${valorDigitado}${e.target.id}`)
            setValorDisplay(`${valorDigitado}${e.target.id}`)
        }
    }
    useEffect(() => {
        console.log(`Disparou Calc:${calcular}`);
        console.log(`Resultado acumulado:${resultado}`);
        ExecutaCalc();

    }, [calcular])

    useEffect(() => {

            setValorDisplay(`${resultado} ${operador}`);
     
    }, [resultado])


    function Clear() {
        setValorDisplay('');
        setValorDigitado('');
        setOperador('')
        setResultado('0');
        setCalcAcu('')
    }

    function LimpaParcial() {
        setValorDigitado('');
    }

    function ExecutaCalc() {
        let valorAcumulado = parseFloat(resultado);
        let valor = calcular;
        console.log(`Calculando vlr Acumulado:${valorAcumulado} ${operador} ${valor}`);
        setCalcAcu(`${calcAcu}${valor} ${operador} `)
        if (operador === "+") {
            valorAcumulado = valorAcumulado + parseFloat(valor);
        } else
            if (operador === "*") {
                valorAcumulado = valorAcumulado * parseFloat(valor);
            } else
                if (operador === "/") {
                    valorAcumulado = valorAcumulado / parseFloat(valor);
                }
        if (operador === "-") {
            valorAcumulado = valorAcumulado - parseFloat(valor);
        }
        LimpaParcial();
        setResultado(valorAcumulado);

    }


    function ToBack() {
        window.location.href = "/"
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div>
                            <h2>Calculadora</h2>
                        </div>
                        <hr />
                        <br />
                        <div>
                            <div className="box">
                                <input type="text" readOnly value={calcAcu}></input>
                                <br />
                                <input type="text" readOnly value={valorDisplay}></input>
                                <br />
                                <br />
                                <button className="btn-DaCalc" id="1" onClick={onChange}>1</button>
                                <button className="btn-DaCalc" id="2" onClick={onChange}>2</button>
                                <button className="btn-DaCalc" id="3" onClick={onChange}>3</button>
                                <button className="btn-DaCalc" id="ma" onClick={onChange}>+</button>
                                <br />
                                <button className="btn-DaCalc" id="4" onClick={onChange}>4</button>
                                <button className="btn-DaCalc" id="5" onClick={onChange}>5</button>
                                <button className="btn-DaCalc" id="6" onClick={onChange}>6</button>
                                <button className="btn-DaCalc" id="me" onClick={onChange}>-</button>
                                <br />
                                <button className="btn-DaCalc" id="7" onClick={onChange}>7</button>
                                <button className="btn-DaCalc" id="8" onClick={onChange}>8</button>
                                <button className="btn-DaCalc" id="9" onClick={onChange}>9</button>
                                <button className="btn-DaCalc" id="v" onClick={onChange}>*</button>
                                <br />
                                <button className="btn-DaCalc" id="c" onClick={Clear}>C</button>
                                <button className="btn-DaCalc" id="0" onClick={onChange}>0</button>
                                <button className="btn-DaCalc" id="=" onClick={onChange}>=</button>
                                <button className="btn-DaCalc" id="d" onClick={onChange}>/</button>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <button className="btn-ToBack" onClick={ToBack}>Voltar</button>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}