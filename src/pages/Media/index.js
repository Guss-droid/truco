import React, { Fragment, useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';
import '../Layouts/Media.css'

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

    function ToCalc() {
        setResultado(
            (parseFloat(prova1) + parseFloat(prova2) +
                parseFloat(prova3) + parseFloat(prova4) +
                parseFloat(prova5)) / (5)
        )
    }

    // Media Final  //


    const [bimestre, setBimestre] = useState();

    const [bimestre2, setBimestre2] = useState();

    const [bimestre3, setBimestre3] = useState();

    const [bimestre4, setBimestre4] = useState();

    const [media, setMedia] = useState();

    const [message, setMessage] = useState();

    function onGo(e) {
        setBimestre(
            e.target.value
        )
    }

    function onGo2(e) {
        setBimestre2(
            e.target.value
        )
    }

    function onGo3(e) {
        setBimestre3(
            e.target.value
        )
    }

    function onGo4(e) {
        setBimestre4(
            e.target.value
        )
    }

    function ToMedia() {
        setMedia(
            (parseFloat(bimestre) + parseFloat(bimestre2) +
                parseFloat(bimestre3) + parseFloat(bimestre4)) / (4)
        )
        if (media > 5) {
            setMessage("Você passou com a media :")
        }if(media < 5) {
            setMessage("Você não passou e sua media foi :")
        }if(media === 5){
            setMessage("Vai ficar de recuperação sua media :")
        }
    }

    function ToVolt() {
        window.location.href = "/"
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
                                <br />
                                <button className="btn-ToCalc" onClick={ToCalc}>Calcular</button>
                                <br />
                                {resultado && (
                                    <div>
                                        <h3>
                                            Sua media do Bimestre é: {resultado}
                                        </h3>
                                    </div>
                                )}
                            </section>
                            <hr />
                            <section>
                                <h2>Media final</h2>
                                <label>Nota :</label>
                                <input type="number" id="prova1" onChange={onGo} value={bimestre} min="0" max="10"
                                    placeholder="Nota..." />
                                <br />
                                <label>Nota :</label>
                                <input type="number" id="prova2" onChange={onGo2} value={bimestre2} min="0" max="10"
                                    placeholder="Nota..." />
                                <br />
                                <label>Nota :</label>
                                <input type="number" id="prova3" onChange={onGo3} value={bimestre3} min="0" max="10"
                                    placeholder="Nota..." />
                                <br />
                                <label>Nota :</label>
                                <input type="number" id="prova4" onChange={onGo4} value={bimestre4} min="0" max="10"
                                    placeholder="Nota..." />
                                <br />
                                <br />
                                <button className="btn-ToMedia" onClick={ToMedia}>Calcular</button>
                                {message && (
                                    <div>
                                        <h3>
                                            {message} {media}
                                        </h3>
                                    </div>
                                )}
                            </section>
                            <hr />
                            <button className="btn-ToVolt" onClick={ToVolt}>Voltar</button>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}