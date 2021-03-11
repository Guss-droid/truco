import React, { Fragment, useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';
import '../Layouts/Calc.css'

export default function Calculadora() {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        localTheme && setTheme(localTheme)
    }, [])

    const Container = styled.div`
    align-items: center;
  `;

    const Title = styled.p`
    font-size: 14px;
  `;

    const [message, setMessage] = useState()

    const [message1, setMessage1] = useState()

    const [valorA, setVariaveis] = useState(0)

    const [valorB, setVariavelB] = useState(0)

    const [valorC, setVariavelC] = useState(0)

    function onChange(e) {
        setVariaveis(
            e.target.value
        )
    }

    function onChange1(e) {
        setVariavelB(
            e.target.value
        )
    }

    function onChange2(e) {
        setVariavelC(
            e.target.value
        )
    }

    function irInicio() {
        window.location.href = "/"
    }

    function Calcular() {
        setVariaveis(
            valorA,
            valorB,
            valorC
        )
        var coeficiente1;
        var coeficiente2;

        var delta = (valorB * valorB) - 4 * valorA * valorC;

        if (delta <= 0) {
            setMessage("Para Delta negativo, não existem raízes reais.");
        } else {

            setMessage("Para Delta positivo, raízes diferentes: ");

            coeficiente1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
            coeficiente2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);

            setMessage1("x¹ = " + coeficiente1);
            setMessage("x² = " + coeficiente2);
        }
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div className="App-form">
                            <h2>Fórmula de Bhaskara</h2>
                            <hr />
                            <br />
                            <label>Valor de A:</label>
                            <input type="number" onChange={(e) => onChange(e)} value={valorA} placeholder="Coloque um valor..." />
                            <br />
                            <label>Valor de B:</label>
                            <input type="number" onChange={onChange1} value={valorB} placeholder="Coloque um valor..." />
                            <br />
                            <label>Valor de C:</label>
                            <input type="number" onChange={onChange2} value={valorC} placeholder="Coloque um valor..." />
                            <br />
                            <br />
                            <button className="btn-Calcular" onClick={Calcular} >Calcular</button>
                            <div>
                                {message && (
                                    <div>
                                        <h4>{message1}
                                            <br />
                                            {message}</h4>
                                    </div>
                                )}
                            </div>
                            <br />
                            <hr />
                            <button className="btn-ToInicio" onClick={irInicio}>Ir para a pagina inicial</button>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}