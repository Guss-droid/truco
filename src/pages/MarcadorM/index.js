import React, { Fragment, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';
import '../Layouts/MarcadorM.css';

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

    const [message, setMessage] = useState()

    localStorage.removeItem("truco")
    localStorage.removeItem("seis")
    localStorage.removeItem("nove")
    localStorage.removeItem("doze")

    function onClick(e) {
        setMessage(
            e.target.value
        )
    }

    function onTruco() {
        localStorage.setItem("truco", truco)
        localStorage.removeItem("seis")
        localStorage.removeItem("nove")
        localStorage.removeItem("doze")
        alert('A partida esta valendo 4 tentos')
    }

    function onSeis() {
        localStorage.setItem("seis", seis)
        localStorage.removeItem("truco")
        localStorage.removeItem("nove")
        localStorage.removeItem("doze")
        alert('A partida esta valendo 6 tentos')
    }

    function onNove() {
        localStorage.setItem("nove", nove)
        localStorage.removeItem("truco")
        localStorage.removeItem("seis")
        localStorage.removeItem("doze")
        alert('A partida esta valendo 10 tentos')
    }

    function onDoze() {
        localStorage.setItem("doze", doze)
        localStorage.removeItem("truco")
        localStorage.removeItem("seis")
        localStorage.removeItem("nove")
        alert('A partida esta valendo 12 tentos')
    }

    function partidasGanhas() {
        if (partidas >= 2) {
            alert("Time 1 ganhou o jogo com")
            window.location.href = "Marcador-Mineiro"
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
        }
        if (partidasTime2 >= 2) {
            alert("Time 2 ganhou o jogo")
            window.location.href = "Marcador-Mineiro"
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
        }
    }

    function juntaTentos() {
        setContador(
            contador + 2
        )
        if (localStorage.getItem("truco")) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContador(
                contador + 4
            )
        }
        if (localStorage.getItem("seis")) {
            localStorage.removeItem("seis")
            localStorage.removeItem("truco")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContador(
                contador + 6
            )
        }
        if (localStorage.getItem("nove")) {
            localStorage.removeItem("nove")
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("doze")
            setContador(
                contador + 10
            )
        } if (localStorage.getItem("doze")) {
            localStorage.removeItem("doze")
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
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
            alert(`Time 1 ganhou uma partida com o placar de ${contador} a ${contadorTime2}`)
        }
    }

    function juntaTentosTime2() {
        setContadorTime2(
            contadorTime2 + 2
        )
        if (localStorage.getItem("truco")) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContadorTime2(
                contadorTime2 + 4
            )
        }
        if (localStorage.getItem("seis")) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContadorTime2(
                contadorTime2 + 6
            )
        }
        if (localStorage.getItem("nove")) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContadorTime2(
                contadorTime2 + 10
            )
        } if (localStorage.getItem("doze")) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
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
            alert(`Time 2 ganhou uma partida com o placar de ${contadorTime2} a ${contador}`)
        }
    }

    function incrementaPontos() {
        partidasGanhas()
        juntaTentos()
    }

    function adicionaPontos() {
        juntaTentosTime2()
        partidasGanhas()
    }

    function toMain() {
        window.location.href = "/Historia"
        localStorage.removeItem("truco")
        localStorage.removeItem("seis")
        localStorage.removeItem("nove")
        localStorage.removeItem("doze")
    }

    function tMineiro() {
        window.location.href = "Mineiro"
        localStorage.removeItem("truco")
        localStorage.removeItem("seis")
        localStorage.removeItem("nove")
        localStorage.removeItem("doze")
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div className="App-Marcar">
                            <h2>
                                Time 1
                                </h2>
                            <hr />
                            <h1>
                                Nós: {contador}
                                <br />
                                Partidas ganhas: {partidas}
                            </h1>
                            <button className="btn-Add-Min" onClick={incrementaPontos}>Adicionar Pontos</button>
                            <hr />
                            <br />
                            <section>
                                <button className="btn-MarcadorM" onClick={onTruco}>Truco</button>
                                <button className="btn-MarcadorM" onClick={onSeis}>Seis</button>
                            </section>
                            <br />
                            <section>
                                <button className="btn-MarcadorM" onClick={onNove}>Dez</button>
                                <button className="btn-MarcadorM" onClick={onDoze}>Doze</button>
                            </section>
                            <br />
                            <hr />
                            <h2>
                                Time 2
                                </h2>
                            <hr />
                            <h1>
                                Eles: {contadorTime2}
                                <br />
                                Partidas ganhas: {partidasTime2}
                            </h1>
                            <button className="btn-Add-Min" onClick={adicionaPontos}>Adicionar pontos</button>
                            <hr />
                            <h2>Sinais</h2>
                            <select className="sel-box" onChange={onClick}>
                                <option id="0">Selecione um sinal</option>
                                <option id="1" value="">Zap //Pisque o olho</option>
                                <option id="2" value="">Copas //Levante a sobrancelha</option>
                                <option id="3" value="">Espada //Movimente a bochecha</option>
                                <option id="4" value="">Ouros //Mostre a lingua</option>
                                <option id="5" value="">Três //Movimente o ombro</option>
                                <option id="6" value="">Dois //Vire a cabeça</option>
                                <option id="7" value="">Áz //Levante o mindinho</option>
                                <option id="8" value="">Reis //Passe a mão no queixo</option>
                                <option id="9" value="">Valete //Um jota com a mão</option>
                                <option id="10" value="">Dama //Mão no peito</option>
                                <option id="11" value="">Do sete para baixo //Cara feia</option>
                            </select>
                            <div>
                                {message && (
                                    <div>
                                        <h3>{message}</h3>
                                    </div>
                                )}
                            </div>
                            <hr />
                            <br />
                            <section>
                                <button className="btn-ToMain2" onClick={toMain}>Voltar para a página de historia</button>
                            </section>
                            <br />
                            <section>
                                <button className="btn-ToMain2" onClick={tMineiro}>Voltar para a página de Truco Mineiro</button>
                            </section>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}