import React, { Fragment, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';

export default function MarcadorP() {

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

  const [contador, setContador] = useState(0)

  function incrementaPontos(){
      setContador(
          contador + 1
      )
  }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div>
                            <h2>Seus pontos: {contador}</h2>
                            <button onClick={incrementaPontos}>Adicionar Pontos</button>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )

}