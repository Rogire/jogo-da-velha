import React from "react";

export default function JDV(props)
{
    const getDivs = ()=>{
        return document.querySelectorAll('div.JDV');
    }

    const Click=(e)=>
    {
        if(props.acabou || e.classList.contains("activeBola") || e.classList.contains("activeX"))
            return;

        let JDV = document.querySelector("#Container");
        let divres = document.createElement("div");
        divres.id = "divres";
        if(props.jogador === "Bola")
        {
            e.classList.toggle('activeBola');
            props.setJogador('X');
        }
        else if(props.jogador === "X")
        {
            e.classList.toggle('activeX');
            props.setJogador('Bola');
        }
        
        if(vef() === 0)
            winner(divres,"Bola ganhou",JDV,0);
        else if(vef() === 1)
            winner(divres, "X ganhou", JDV, 1);
        
        else if(vef() === -1)
        {
            divres.classList.add("empate");
            divres.textContent = "deu velha";
            JDV.appendChild(divres);
            props.setAcabou(true);
        }
    }

    const vef = ()=>{
        const divs = getDivs();

        const combVencedoras = [
          [0, 1, 2], // Linha 1
          [3, 4, 5], // Linha 2
          [6, 7, 8], // Linha 3
          [0, 3, 6], // Coluna 1
          [1, 4, 7], // Coluna 2
          [2, 5, 8], // Coluna 3
          [0, 4, 8], // Diagonal principal
          [2, 4, 6], // Diagonal secundária
        ];

        for(const [a,b,c] of combVencedoras)
        {
            if(check([divs[a],divs[b],divs[c]],"activeBola"))
                return 0;

            if (check([divs[a], divs[b], divs[c]], "activeX")) 
                return 1;
        }

        if(Array.from(divs).filter(div =>
            div.classList.contains('activeBola') || div.classList.contains('activeX')
        ).length === 9)
        {
            return -1; // velha
        }
    }
    const check = (item, val)=>{
        return item[0].classList.contains(val) && item[1].classList.contains(val) &&item[2].classList.contains(val);
    }
    const winner = (el,txt,JDV,BoX)=>{
        el.classList.add("vencedor");
        el.textContent = txt;

        JDV.appendChild(el);
        props.setAcabou(true);

        if(BoX === 0)
            props.setWBol(props.WB + 1);
        else
            props.setWX(props.WX + 1);
    }
    return (
      <>
        <div className="Linha">
          <div className="JDV" id="0" style={{ borderTop: "none",borderLeft:"none"}} onClick={(e)=>{Click(e.target)}}></div>
          <div className="JDV" id="1" style={{ borderTop: "none"}} onClick={(e)=>{Click(e.target)}}></div>
          <div className="JDV" id="2" style={{ borderTop: "none", borderRight:"none"}} onClick={(e)=>{Click(e.target)}}></div>
        </div>

        <div className="Linha">
          <div className="JDV" id="3" style={{borderLeft:"none"}} onClick={(e)=>{Click(e.target)}}></div>
          <div className="JDV" id="4" onClick={(e)=>{Click(e.target)}}></div>
          <div className="JDV" id="5" style={{borderRight:"none"}} onClick={(e)=>{Click(e.target)}}></div>
        </div>

        <div className="Linha">
          <div className="JDV" id="6" style={{ borderBottom: "none" , borderLeft:"none"}} onClick={(e)=>{Click(e.target)}}></div>
          <div className="JDV" id="7" style={{ borderBottom: "none" }} onClick={(e)=>{Click(e.target)}}></div>
          <div className="JDV" id="8" style={{ borderBottom: "none", borderRight:"none"}} onClick={(e)=>{Click(e.target)}}></div>
        </div>
      </>
    );
}