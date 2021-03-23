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

    const [valores, setValores] = useState();

    const [valores1, setValores1] = useState();

    const [resultado, setResultado] = useState();

    const [zero,] = useState(0);

    const [um,] = useState(1);

    const [dois,] = useState(2);

    const [tres,] = useState(3);

    const [quatro,] = useState(4);

    const [cinco,] = useState(5);

    const [seis,] = useState(6);

    const [sete,] = useState(7);

    const [oito,] = useState(8);

    const [nove,] = useState(9);

    //Sinais

    const [sinais, setSinais] = useState();

    const [mais,] = useState('+');

    const [menos,] = useState('-');

    const [multiplicar,] = useState('*');

    const [dividir,] = useState('/');

    function onSinais(e) {
        setSinais(
            e.target.value
        )
    }

    function onChange(e) {
        setValores(
            e.target.value
        )
    }

    function onChange2(e) {
        setValores1(
            e.target.value
        )
    }

    function Result() {
        if (sinais === mais) {
            setResultado(
                parseFloat(valores) + parseFloat(valores1)
            )
        } if (sinais === menos) {
            setResultado(
                parseFloat(valores) - parseFloat(valores1)
            )
        } if (sinais === multiplicar) {
            setResultado(
                ((valores) * (valores1))
            )
        } if (sinais === dividir) {
            setResultado(
                parseFloat(valores) / parseFloat(valores1)
            )
        }
    }

    function ToBack(){
        window.location.href ="/"
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div>
                            <h2>Calculadora</h2>
                            <hr />
                            <br />
                            <div className="alinhar">
                                <div className="show-Results">{valores} {sinais} {valores1} = {resultado}</div>
                            </div>
                            <button onClick={onChange} value={um}>1</button>
                            <button onClick={onChange2} value={dois}>2</button>
                            <button onClick={onChange} value={tres}>3</button>
                            <button onClick={onSinais} value={mais}>+</button>
                            <br />
                            <button onClick={onChange2} value={quatro}>4</button>
                            <button onClick={onChange} value={cinco}>5</button>
                            <button onClick={onChange2} value={seis}>6</button>
                            <button onClick={onSinais} value={menos}>-</button>
                            <br />
                            <button onClick={onChange} value={sete}>7</button>
                            <button onClick={onChange2} value={oito}>8</button>
                            <button onClick={onChange} value={nove}>9</button>
                            <button onClick={onSinais} value={multiplicar}>*</button>
                            <br />
                            <button>C</button>
                            <button onClick={onChange2} value={zero}>0</button>
                            <button onClick={Result}>=</button>
                            <button onClick={onSinais} value={dividir}>/</button>
                            <br />
                            <hr />
                            <button onClick={ToBack}>Voltar</button>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>

    )
}