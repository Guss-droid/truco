import React, { Fragment, useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';

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


    const [a, setA] = useState(0)

    const [b, setB] = useState(0)

    const [c, setC] = useState(0)

    const [message, setMessage] = useState()

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div>
                           <button >Calcular</button>
                           <div>
                                {message && (
                                    <div>
                                        <h2>{message}</h2>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}