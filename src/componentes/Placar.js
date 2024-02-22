import React from "react";

export default function Placar(props){
    function getDivs(){
        return document.querySelectorAll('div.JDV');
    }

    const divs = getDivs();
    const Limpar= ()=>{
        divs.forEach(div=>{
            div.classList.remove('activeBola');
            div.classList.remove('activeX');
        })
        
        let divres = document.querySelector("div.vencedor");
        if(divres)
          divres.remove();
        props.setJogador('Bola');

        props.setAcabou(false);
    } 

    return (
      <>
        Jogando agora: {props.jogador}
        <br/>
        Vitórias X: {props.WX}
        <br />
        Vitórias O: {props.WB}
        <br />
        <button onClick={() => Limpar()}>Limpar</button>
      </>
    );
}