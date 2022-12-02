import styled from "styled-components"
import seta from "../assets/img/seta_play.png"
import cards from "./Cards"

export default function Perguntas() {

    function Word(props) {
        let i = cards.indexOf(props.word);
        return (
            <PerguntaFechada>
                <p>Pergunta {i + 1}</p>
                <img src={seta}></img>
            </PerguntaFechada>
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