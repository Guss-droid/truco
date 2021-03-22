import React, { Fragment, useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import '../Layouts/inicial.css'
library.add(fas)

const Container = styled.div`
align-items: center;
`;

const Title = styled.p`
font-size: 14px;
`;

const ButtonChange = styled.button`
width: 100px;
height: 40px;
margin-right: 20px;
border-radius: 10px;
`;

export default function Initial() {

    const [theme, setTheme] = useState('light')

    const trocaTema = () => {
        if (theme === 'light') {
            localStorage.setItem("theme", "dark")
            setTheme("dark")
        } else {
            localStorage.setItem("theme", "light")
            setTheme("light")
        }
    }

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        localTheme && setTheme(localTheme)
    }, [])


    function toContas() {
        window.location.href = "/Calculo"
    }

    function toTruco() {
        window.location.href = "/Historia"
    }

    function toMedia() {
        window.location.href = "/Media"
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div className="App">
                            <ButtonChange className="btn-mudou" onClick={trocaTema}>Mudar tema</ButtonChange>
                            <br />
                            <hr />
                            <section >
                                <h2>Truco</h2>
                                <hr />
                                <br />
                                <button className="btn-IrTruco" onClick={toTruco}>
                                    <FontAwesomeIcon icon="heart" />
                                </button>
                            </section>
                            <br />
                            <hr />
                            <section>
                                <h2>Cálculos</h2>
                                <hr />
                                <button className="btn-IrCalculos" onClick={toContas}>
                                    <FontAwesomeIcon icon="square-root-alt" />
                                </button>
                            </section>
                            <br />
                            <hr />
                            <section>
                                <h2>Calcular a média</h2>
                                <hr />
                                <button className="btn-IrMedia" onClick={toMedia}>
                                <FontAwesomeIcon icon="calculator" />
                                </button>
                            </section>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}