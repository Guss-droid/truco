import React, { Fragment, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';
import '../Layouts/hist.css';

export default function Main() {
 
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

    function tPaulista() {
        window.location.href = "/Paulista"
    }

    function marcadorPts() {
        window.location.href = "/Marcador-Paulista"
    }

    function tMineiro() {
        window.location.href = "/Mineiro"
    }

    function marcadorMinPts() {
        window.location.href = "/Marcador-Mineiro"
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div className="App">
                            <ButtonChange className="btn-mudou" onClick={trocaTema}>Mudar tema </ButtonChange>
                            <h2>Historia do truco</h2>
                            <hr />
                            <p>A origem do truco é incerta, especula-se que tenha surgido dos mouros,
                            porém não há consenso a esse respeito. No Brasil foi popularizado por imigrantes italianos
                            , portugueses e espanhóis, a princípio nos estados de São Paulo e Minas Gerais
                            , posteriormente espalhando-se por todo o país e originando diversas variações.
            <hr />
                                <h3>Objetivos</h3>
                                <hr />
                O jogo tem quatro participantes, que
                formam duas duplas, devendo sentar em
                posições alternadas.
                São 4 jogadores
                Baralhos - um baralho, sendo que o curinga e as cartas 8, 9, e 10 não são utilizadas.
                Objetivo - fazer 12 pontos.
                <hr />
                                <h3>Mão e pé</h3>
                                <hr />
             No Truco, existem dois conceitos sobre o jogador que começa a rodada e quem é o último.
             O mão é quem começa a rodada, o pé é o utimo a jogar.  O mão é sempre o jogador à direita do pé.
             A troca para dar as cartas é então passada para a esquerda,
             de modo que a mão da primeiro turno é o pé do segundo e assim por diante.
             Se estiver jogando em equipes, parceiros sentam-se de frente um para o outro.
             <hr />
                                <h3>Embaralhamento</h3>
                                <hr />
                Um dos jogadores é escolhido para ser o primeiro a distribuir as cartas, três para cada jogador e uma vira.
                As cartas podem ser dadas picadas ou três a três com as três primeiras sendo do mão.
                Dá-se o monte para o adversário à esquerda cortar. Se o corte for seco ou não houver corte,
                o cortador poderá tirar cartas para o seu parceiro ou para si,
                respeitando-se as normas gerais explicadas adiante. O monte cortado volta então ao distribuidor.
                Mesmo que o cortador corte o maço a seco, bata o cotovelo ou embaralhe,
                o pé dará cartas por cima ou por baixo, a seu critério. Porém, após deslizar a primeira carta,
                não pode mais mudar de opinião,
                Também é permitido que ocorra a troca de cartas caso algum dos jogadores tenha recebido os 3 palhaços,
                Dá-se esse nome as 3 sucessivas cartas Q,J,K se o adversário não falar aonde pegar as 3 cartas,
                 as mesmas são pegas de cima do monte.
                 <hr />
                            </p>
                            <section className="Truco-body">
                                <button className="btn-TrucoP" onClick={tPaulista}>
                                    Truco <br />
                                   Paulista
                                  </button>
                                <button className="btn-TrucoP" onClick={marcadorPts}>
                                    Marcador
                                 <br />Paulista
                                </button>
                            </section>
                            <section className="Truco-body">
                                <button className="btn-TrucoM" onClick={tMineiro}>
                                    Truco <br />
                                    Mineiro
                                    </button>
                                <button className="btn-TrucoM" onClick={marcadorMinPts}>
                                    Marcador
                              <br /> Mineiro
                               </button>
                            </section>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}