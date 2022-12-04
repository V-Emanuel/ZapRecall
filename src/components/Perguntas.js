import cards from "./Cards"
import Pergunta from "./Pergunta"

export default function Perguntas({cont, setCont}) {
    return (
        <>
            {cards.map((item) => <Pergunta cont={cont} setCont={setCont} word={item} />)}
        </>
    );
}
