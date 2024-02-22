import React, { useState } from "react";
import JDV from "./componentes/JDV";
import Placar from "./componentes/Placar";
export default function App() {
  const [jogador, setJogador] = useState("Bola");
  const [WB, setWBol] = useState(0);
  const [WX, setWX] = useState(0);

  return (
    <>
      <div className="Container">
        <JDV
          jogador={jogador}
          setJogador={setJogador}
          WB={WB}
          setWBol={setWBol}
          WX={WX}
          setWX={setWX}
        />
      </div>
      <p>
        <Placar WB={WB} WX={WX} jogador={jogador} setJogador={setJogador} />
      </p>
    </>
  );
}
