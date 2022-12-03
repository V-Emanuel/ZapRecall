import React from "react"
import { useState } from "react"
import styled from "styled-components"
import seta_p from "../assets/img/seta_play.png"
import seta_v from "../assets/img/seta_virar.png"
import cards from "./Cards"

export default function Perguntas() {
    const [showCard, setShowCard] = useState(true);
    const [showQ, setShowQ] = useState(false);
    const [showB, setShowB] = useState(false);
    const [final, setFinal] = useState(false);
    const [setaVirar, setSetaVirar] = useState(true);
    function ShowQuestion(){
        setShowCard(false);
        setShowQ(true);
    }
    function ShowButtons(){
        setShowB(true);
        setSetaVirar(false);
    }
    function Word(props) {
        let i = cards.indexOf(props.word);
        return (
            <>
                <PerguntaFechada>
                    <p>Pergunta {i + 1}</p>
                    <img onClick={ShowQuestion} src={seta_p}></img>
                </PerguntaFechada>
                <PerguntaAberta>
                    <p>{props.word.question}</p>
                    <SetaVirar onClick={ShowButtons} src={seta_v}></SetaVirar>
                    <ContainerBotoes>
                        <NaoLembrei><p>Não Lembrei</p></NaoLembrei>
                        <QuaseLembrei><p>Quase não lembrei</p></QuaseLembrei>
                        <Zap><p>Zap!</p></Zap>
                    </ContainerBotoes>
                </PerguntaAberta>
            </>
        );
    }
    return (
        <>
            {cards.map((item) => <Word word={item} />)}
        </>
    );
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const PerguntaAberta = styled.div`
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
const SetaVirar = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
const ContainerBotoes = styled.div`
width: 270px;
display: flex;
align-items: center;
justify-content: space-between;
text-align: center;
color: #FFFFFF;
border-radius: 5px;
padding:5px;
`

const NaoLembrei = styled.div`
width: 85px;
height: 37px;
background-color: #ff3030;
border-radius: 5px;
p{
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-align: center;
}
display: flex;
justify-content: center;
`;
const QuaseLembrei = styled.div`
width: 85px;
height: 37px;
background-color: #ff922e;
border-radius: 5px;
display: flex;
align-items: center;
text-align: center;
p{
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    display: flex;
    align-items: center;
    text-align: center;
}
`;
const Zap = styled.div`
width: 85px;
height: 37px;
background-color: #2fbe34;
border-radius: 5px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
p{
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    display: flex;
    align-items: center;
    text-align: center;
}
`;