import React, { Fragment, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';
import '../Layouts/MarcadorP.css'

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
        alert('A partida esta valendo 3 tentos')
    }

    function onSeis() {
        localStorage.setItem("seis", seis)
        alert('A partida esta valendo 6 tentos')
    }

    function onNove() {
        localStorage.setItem("nove", nove)
        alert('A partida esta valendo 9 tentos')
    }

    function onDoze() {
        localStorage.setItem("doze", doze)
        alert('A partida esta valendo 12 tentos')
    }

    function partidasGanhas() {
        if (partidas >= 2) {
            alert("Time 1 ganhou o jogo")
            window.location.href = "Marcador-Paulista"
        }
        if (partidasTime2 >= 2) {
            alert("Time 2 ganhou o jogo")
            window.location.href = "Marcador-Paulista"
        }
    }

    function partidasVitoriosas() {
        if (partidasTime2 >= 2) {
            alert("Time 2 ganhou o jogo")
            window.location.href = "Marcador-Paulista"
        }
        if (partidas >= 2) {
            alert("Time 1 ganhou o jogo")
            window.location.href = "Marcador-Paulista"
        }
    }

    function juntaTentos() {
        setContador(
            contador + 1
        )
        if (localStorage.getItem("truco")) {
            localStorage.removeItem("truco")
            setContador(
                contador + 3
            )
        }
        if (localStorage.getItem("seis")) {
            localStorage.removeItem("seis")
            setContador(
                contador + 6
            )
        }
        if (localStorage.getItem("nove")) {
            localStorage.removeItem("nove")
            setContador(
                contador + 9
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
            contadorTime2 + 1
        )
        if (localStorage.getItem("truco")) {
            localStorage.removeItem("truco")
            setContadorTime2(
                contadorTime2 + 3
            )
        }
        if (localStorage.getItem("seis")) {
            localStorage.removeItem("seis")
            setContadorTime2(
                contadorTime2 + 6
            )
        }
        if (localStorage.getItem("nove")) {
            localStorage.removeItem("nove")
            setContadorTime2(
                contadorTime2 + 9
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

    function tPaulista() {
        window.location.href = "Paulista"
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div className="App">
                            <h2>
                                Time 1
                                <br />
                                Seus pontos: {contador}
                                <br />
                                Partidas ganhas: {partidas}
                            </h2>
                            <button className="btn-Add-Pts" onClick={incrementaPontos}>Adicionar Pontos</button>
                            <hr />
                            <br />
                            <section>
                                <button className="btn-MarcadorP" onClick={onTruco}>Truco</button>
                                <button className="btn-MarcadorP" onClick={onSeis}>Seis</button>
                            </section>
                            <br />
                            <section>
                                <button className="btn-MarcadorP" onClick={onNove}>Nove</button>
                                <button className="btn-MarcadorP" onClick={onDoze}>Doze</button>
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
                            <button className="btn-Add-Pts" onClick={adicionaPontos}>Adicionar pontos</button>
                            <hr />
                            <br />
                            <section>
                                <button className="btn-ToMain1" onClick={toMain}>Voltar para a página inicial</button>
                            </section>
                            <br />
                            <section>
                                <button className="btn-ToMain1" onClick={tPaulista}>Voltar para a página de Truco paulista</button>
                            </section>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}