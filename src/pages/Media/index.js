import React, { Fragment, useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';

const Container = styled.div`
align-items: center;
`;

const Title = styled.p`
font-size: 14px;
`;


export default function CalcMedia() {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        localTheme && setTheme(localTheme)
    }, [])

    const [prova1, setProva1] = useState();

    const [prova2, setProva2] = useState();

    const [prova3, setProva3] = useState();

    const [prova4, setProva4] = useState();

    const [prova5, setProva5] = useState();

    const [resultado, setResultado] = useState()

    function onChange(e) {
        setProva1(
            e.target.value
        )
    }

    function onChange1(e) {
        setProva2(
            e.target.value
        )
    }

    function onChange2(e) {
        setProva3(
            e.target.value
        )
    }

    function onChange3(e) {
        setProva4(
            e.target.value
        )
    }

    function onChange4(e) {
        setProva5(
            e.target.value
        )
    }

    function ToCalc(){
        setResultado(
           (parseFloat(prova1) + parseFloat(prova2) + 
           parseFloat(prova3) + parseFloat(prova4) +
            parseFloat(prova5)) / (5)
        )
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div>
                            <section>
                                <h2>Media bimestral</h2>
                                <label>Nota :</label>
                                <input type="number" id="prova1" onChange={onChange} value={prova1} min="0" max="10"
                                 placeholder="Nota..." />
                                <br />
                                <label>Nota :</label>
                                <input type="number" id="prova2" onChange={onChange1} value={prova2} min="0" max="10"
                                 placeholder="Nota..." />
                                <br />
                                <label>Nota :</label>
                                <input type="number" id="prova3" onChange={onChange2} value={prova3} min="0" max="10"
                                 placeholder="Nota..." />
                                <br />
                                <label>Nota :</label>
                                <input type="number" id="prova4" onChange={onChange3} value={prova4} min="0" max="10"
                                 placeholder="Nota..." />
                                <br />
                                <label>Nota :</label>
                                <input type="number" id="prova5" onChange={onChange4} value={prova5} min="0" max="10"
                                 placeholder="Nota..." />
                                 <br />
                                 <button onClick={ToCalc}>Calcular</button>
                                 <br />
                                 {resultado && (
                                     <div>
                                        Sua media do Bimestre é: {resultado}
                                     </div>
                                 )}
                            </section>
                            <hr />
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}