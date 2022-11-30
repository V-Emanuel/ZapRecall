import logo from "../assets/img/logo.png"
import Perguntas from "./Perguntas";

function App() {
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo} alt=""></img>
        <h1>ZapRecall</h1>
      </div>
      <Perguntas/>
      <div className="footer-concluidos">CONCLUÍDOS</div>
    </div>
  );
}

export default App;
