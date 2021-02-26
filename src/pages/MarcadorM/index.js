import React, { Fragment, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';

export default function MarcadorP() {

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

    const [truco] = useState(0)

    const [seis] = useState(0)

    const [nove] = useState(0)

    const [doze] = useState(0)

    const [contador, setContador] = useState(0)

    const [contadorTime2, setContadorTime2] = useState(0)

    const [partidas, setPartidas] = useState(0)

    const [partidasTime2, setPartidasTime2] = useState(0)

    function onTruco() {
        localStorage.setItem("truco", truco)
        alert('A partida esta valendo 4 tentos')
    }

    function onSeis() {
        localStorage.setItem("seis", seis)
        alert('A partida esta valendo 8 tentos')
    }

    function onNove() {
        localStorage.setItem("nove", nove)
        alert('A partida esta valendo 10 tentos')
    }

    function onDoze() {
        localStorage.setItem("doze", doze)
        alert('A partida esta valendo 12 tentos')
    }

    function partidasGanhas() {
        if (partidas >= 2) {
            alert("Time 1 ganhou o jogo")
            window.location.href = "Marcador-Mineiro"
        }
        if (partidasTime2 >= 2) {
            alert("Time 2 ganhou o jogo")
            window.location.href = "Marcador-Mineiro"
        }
    }

    function partidasVitoriosas() {
        if (partidasTime2 >= 2) {
            alert("Time 2 ganhou o jogo")
            window.location.href = "Marcador-Mineiro"
        }
        if (partidas >= 2) {
            alert("Time 1 ganhou o jogo")
            window.location.href = "Marcador-Mineiro"
        }
    }

    function juntaTentos() {
        setContador(
            contador + 2
        )
        if (localStorage.getItem("truco")) {
            localStorage.removeItem("truco")
            setContador(
                contador + 4
            )
        }
        if (localStorage.getItem("seis")) {
            localStorage.removeItem("seis")
            setContador(
                contador + 8
            )
        }
        if (localStorage.getItem("nove")) {
            localStorage.removeItem("nove")
            setContador(
                contador + 10
            )
        } if (localStorage.getItem("doze")) {
            localStorage.removeItem("doze")
            setContador(
                contador + 12
            )
        }
        if (contador >= 12) {
            setPartidas(
                partidas + 1
            )
            setContador(
                contador - contador
            )
            setContadorTime2(
                contadorTime2 - contadorTime2
            )
            alert("Time 1 ganhou uma partida")
        }
    }

    function juntaTentosTime2() {
        setContadorTime2(
            contadorTime2 + 2
        )
        if (localStorage.getItem("truco")) {
            localStorage.removeItem("truco")
            setContadorTime2(
                contadorTime2 + 4
            )
        }
        if (localStorage.getItem("seis")) {
            localStorage.removeItem("seis")
            setContadorTime2(
                contadorTime2 + 8
            )
        }
        if (localStorage.getItem("nove")) {
            localStorage.removeItem("nove")
            setContadorTime2(
                contadorTime2 + 10
            )
        } if (localStorage.getItem("doze")) {
            localStorage.removeItem("doze")
            setContadorTime2(
                contadorTime2 + 12
            )
        }
        if (contadorTime2 >= 12) {
            setPartidasTime2(
                partidasTime2 + 1
            )
            setContador(
                contador - contador
            )
            setContadorTime2(
                contadorTime2 - contadorTime2
            )
            alert("Time 2 ganhou uma partida")
        }
    }

    function incrementaPontos() {
        partidasGanhas()
        juntaTentos()
    }

    function adicionaPontos() {
        juntaTentosTime2()
        partidasVitoriosas()
    }

    function toMain() {
        window.location.href = "/"
    }

    function tMineiro() {
        window.location.href = "Mineiro"
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div>
                            <h2>
                                Time 1
                                <br />
                                Seus pontos: {contador}
                                <br />
                                Partidas ganhas: {partidas}
                            </h2>
                            <button onClick={incrementaPontos}>Adicionar Pontos</button>
                            <hr />
                            <br />
                            <section>
                                <button onClick={onTruco}>Truco</button>
                                <button onClick={onSeis}>Seis</button>
                            </section>
                            <br />
                            <section>
                                <button onClick={onNove}>Nove</button>
                                <button onClick={onDoze}>Doze</button>
                            </section>
                            <br />
                            <hr />
                            <h2>
                                Time 2
                                <br />
                                Seus pontos: {contadorTime2}
                                <br />
                                Partidas ganhas: {partidasTime2}
                            </h2>
                            <button onClick={adicionaPontos}>Adiciona pontos</button>
                            <hr />
                            <br />
                            <section>
                                <button onClick={toMain}>Voltar para a pagina inicial</button>
                            </section>
                            <br />
                            <section>
                                <button onClick={tMineiro}>Voltar para a pagina de Truco Mineiro</button>
                            </section>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}