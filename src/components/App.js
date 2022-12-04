import React, { useState } from "react";
import Footer from "./Footer";
import Logo from "./Logo"
import Perguntas from "./Perguntas";
import Pergunta from "./Pergunta";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle"



export default function App() {
  const [cont, setCont] = useState(0);
  return (
    <ScreenContainer>
      <Logo
      />
      <Perguntas 
      cont={cont}
      setCont={setCont}
      />
      <Footer 
      cont={cont}
      />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
