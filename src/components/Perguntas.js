import cards from "./Cards";

export default function Perguntas(){
   
    function Word(props){
        return(
            <div className="pergunta-fechada">
                <p>{props.question}</p>
            </div>
        );
    }
    return (
        <>
            {cards.map((item) => <Word word={item} />)}
        </>
    );
}