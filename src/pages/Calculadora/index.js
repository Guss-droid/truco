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


    const [a, setA] = useState()

    const [b, setB] = useState()

    const [c, setC] = useState()

    const [x, setX] = useState()

    const [delta, setDelta] = useState()

    const [message, setMessage] = useState()

    function onChange(e){
        setB({
            ...b,
            [e.target.id]: e.target.value
        })
    }

    function onChange1(e){
        setA({
            ...a,
            [e.target.id]: e.target.value
        })
    }

    function onChange2(e){
        setC({
            ...a,
            [e.target.id] : e.target.value
        })
    }

    function Calcular() {
        setDelta(
            (b * b) - 4 * a * c
        )
        if (delta < 0) {
            setMessage("Delta não possui resultado real")
        }
        if (delta === 0) {
            setMessage("Delta possui apenas um resultado ou 2 iguais")
        } if (delta > 0) {
            setX(
                -b + Math.sqrt(delta) / (2 * a)
            )
        }
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div>
                            <input type="text" onChange={onChange1} id="a" placeholder="coloque um valor..." value={a} />
                            <input type="text" onChange={onChange} id="b" placeholder="coloque um valor..." value={b} />
                            <input type="text" onChange={onChange2} id="c" placeholder="coloque um valor..." value={c} />
                            <button onClick={Calcular} >Calcular</button>
                            <div>
                                Delta :{delta}
                                <br />
                               Resultados {x}
                            </div>
                            <div>
                                {message && (
                                    <div>
                                        <h3>{message}</h3>
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