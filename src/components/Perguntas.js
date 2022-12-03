
import { useState } from "react"
import styled from "styled-components"
import seta_p from "../assets/img/seta_play.png"
import seta_v from "../assets/img/seta_virar.png"
import cards from "./Cards"

export default function Perguntas() {


    function Word(props) {
        const [showCard, setShowCard] = useState(true);
        const [showButtons, setShowButtons] = useState(false);
        const [setaVirar, setSetaVirar] = useState(true);
        const [certo, setCerto] = useState(false);
        const [quase, setQuase] = useState(false);
        const [errado, setErrado] = useState(false);

        function ShowQuestion() {
            setShowCard(false);
        }
        function ShowButtons() {
            setShowButtons(true);
            setSetaVirar(false);
        }
        let i = cards.indexOf(props.word);
        return (
            <>
                <PerguntaFechada show={showCard}>
                    <p>Pergunta {i + 1}</p>
                    <img onClick={ShowQuestion} src={seta_p}></img>
                </PerguntaFechada>
                <PerguntaAberta show={!showCard} seta = {setaVirar}>
                    <p>{setaVirar ? props.word.question : props.word.answer}</p>
                    <SetaVirar showSeta={setaVirar} onClick={ShowButtons} src={seta_v}></SetaVirar>
                    <ContainerBotoes showB={showButtons}>
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
    display: ${props => props.show ? "flex" : "none"};
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
  display: ${props => props.show ? "flex" : "none"};
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
  display: ${props => props.showSeta ? "flex" : "none"};
`;
const ContainerBotoes = styled.div`
width: 290px;
display: ${props => props.showB ? "flex" : "none"};
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