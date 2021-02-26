import React, { Fragment, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/global';
import '../layouts/Paulista.css';

export default function Tab_Truco() {

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

    function marcadorPts() {
        window.location.href = "/Marcador-Paulista"
    }

    function toMain() {
        window.location.href = "/"
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div>
                            <ButtonChange className="btn-mudou" onClick={trocaTema}>Mudar tema </ButtonChange>
                            <h2>Regras do Truco Paulista</h2>
                            <hr />
                            <p>
                                Cada jogador recebe três cartas que são de um subconjunto do baralho constituído pelos números 1 a 7, a dama,
                                o valete, e o reis.
            <br />
                                <br />
            A forma mais comum do jogo é a versão com quatro jogadores,
             em que há duas equipes de dois jogadores, que se sentam em frente um ao outro.
             Para seis jogadores, há duas equipes de três jogadores.
            <br />
                                <br />
            O jogo é jogado até que uma equipe termine o jogo com 2 jogos de 12 pontos.
            São 24 pontos dividido em duas metades, caso houver um empate
            o jogo ira para uma terceira partida
            <br />
                                <br />
                                <hr />
                                <h3>Manilhas</h3>
                As manilhas nãs são fixas sempre irá depender do vira
                <br /> Ex: se o vira for o 4 a manilha é o 5 e assim por diante
                <hr />
                                <h3>Pontos</h3>
                                <hr />
                O jogo é disputado em mãos. Cada mão vale inicialmente 1 ponto, e ganha o jogo quem fizer 12 pontos primeiro.
                A mão é dividida em três rodadas . Em cada rodada cada jogador coloca uma de suas cartas na mesa,
                e o jogador com a carta mais forte vence a rodada. Quem ganhar duas dessas rodadas ganha a mão e marca 1 ponto,
                e uma nova mão se inicia. Em caso de empate na primeira rodada, o vencedor da segunda é o vencedor, se empatar
                na segunda o vencedor da terceira é o vencedor . Em caso de empate na segunda ou terceira rodada,
                o vencedor da primeira é o vencedor. A qualquer hora o jogador pode pedir Truco. É o grande momento do jogo.
                O Truco é pedido para elevar a aposta a três tentos .
                <br />
                                <h4>Ao ser trucada, a dupla adversária tem direito a três ações: </h4>
                                <hr />
                Mandar cair: a mão passa a valer três tentos.
                <br />
                Pedir 6: a mão passa a valer seis tentos.
                <br />
                Fugir: a dupla que trucou leva um tento.
                <br />
                                <hr />
                                <h4 > Caso a dupla 'B' pedir 6 a dupla 'A' pode: </h4>
                                <hr />
                Mandar cair: a mão passa a valer seis tentos.
                <br />
                Pedir 9: a mão passa a valer nove tentos.
                <br />
                Fugir: a dupla que chamou 6 leva três tentos.
                <hr />
                                <h4>Caso a dupla 'A' peça nove : </h4>
                                <hr />
                Mandar cair: a mão passa a valer nove tentos.
                <br />
                Pedir 12: a mão passa a valer o jogo quem ganhar ganha tudo.
                <br />
                Fugir: a dupla que chamou nove leva seis tentos.
                <br />
                                <hr />
                                <h4>Se a dupla 'B' chamar 12 a dupla 'A' pode: </h4>
                                <hr />
                Manda cair: a mão passa a valer o jogo quem ganhar ganha tudo
                <br />
                Fugir: a dupla que chamou 12 leva nove tentos
                </p>
                            <hr />
                            <section className="Add-body">
                                <button className="btn-Marcador" onClick={marcadorPts}>Marcador</button>
                            </section>
                            <section className="Add-body">
                                <button className="btn-ToMain" onClick={toMain}>Voltar para a pagina principal</button>
                            </section>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}