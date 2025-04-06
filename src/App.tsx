import React, { useState } from "react";
import JDV from "./componentes/JDV";
import Placar from "./componentes/Placar";
import atras from "./componentes/imgs/atras.png"
export default function App()
{
  const [jogador, setJogador] = useState("Bola");
  const [WB, setWBol] = useState(0);
  const [WX, setWX] = useState(0);
  const [acabou, setAcabou]=useState(false)
  const [modo, setModo] = useState(0); //0 comum , 1 infinito

    const modoInfinito = ()=>{
      setModo(modo === 0 ? 1 : 0);
      document.querySelector("#Container")?.classList.toggle("Inf");
    }

  return (
    <>
      <a href="https://rogire.github.io/Repositorio/index.html">
        <img src={atras} alt="voltar" className="img" style={{ width: '50px' }}></img>
      </a>

      <div className="Container" id="Container">
        <div>
          <button type="button" title="Trocar modo" onClick={modoInfinito}>Trocar modo</button>
          <span>{modo === 0 ? "Comum" : "Sem velha"}</span>
        </div>

        <JDV
          jogador={jogador}
          setJogador={setJogador}
          WB={WB}
          setWBol={setWBol}
          WX={WX}
          setWX={setWX}
          acabou={acabou}
          setAcabou={setAcabou}
          modo={modo}
        />
      </div>
      <p>
        <Placar
          WB={WB}
          WX={WX}
          jogador={jogador}
          setJogador={setJogador}
          acabou={acabou}
          setAcabou={setAcabou}
          modo={modo} />
          
      </p>

    </>
  );
}