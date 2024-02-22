import React, { useState } from "react";

export default function JDV(props)
{
    function getDivs(){
        return document.querySelectorAll('div.JDV')
    }

    const Click=(e)=>{
        if(e.classList.contains("activeBola") || e.classList.contains("activeX"))
        {
            return;
        }
        if(props.jogador == "Bola")
        {
         e.classList.toggle('activeBola');
         props.setJogador('X');
        }
        else if(props.jogador == "X")
        {
            e.classList.toggle('activeX');
            props.setJogador('Bola');
        }
        
        if(vef()==0)
        {
            window.alert('Bola ganhou')
           props.setWBol(props.WB+1);
        }
        else if(vef()==1)
        {
            window.alert('X ganhou')
            props.setWX(props.WX+1);
        }
    }

    const vef= ()=>{ 
    let divs = getDivs();
    
    for (let i = 0; i < divs.length; i+=3) 
    {
        if(divs[i].classList.contains('activeBola') && divs[i+1].classList.contains('activeBola') && divs[i+2].classList.contains('activeBola'))
            return 0;   
        else if(divs[i].classList.contains('activeX') && divs[i+1].classList.contains('activeX') && divs[i+2].classList.contains('activeX'))
            return 1;
    }
    //VERIFICAÇÃO DE LINHAS
    for (let i = 0; i < 2; i++) 
    {
        if(divs[i].classList.contains('activeBola') && divs[i+3].classList.contains('activeBola') && divs[i+6].classList.contains('activeBola'))
            return 0;
        else if(divs[i].classList.contains('activeX') && divs[i+3].classList.contains('activeX') && divs[i+6].classList.contains('activeX'))
            return 1;
    }
    //VERIFICAÇÃO DE COLUNAS
    if(divs[0].classList.contains('activeBola') && divs[4].classList.contains('activeBola') && divs[8].classList.contains('activeBola'))
        return 0;  

    if(divs[2].classList.contains('activeBola') && divs[4].classList.contains('activeBola') && divs[6].classList.contains('activeBola'))
        return 0;

    //VERIFICAÇÃO DE DIAGONAIS
     if(divs[0].classList.contains('activeX') && divs[4].classList.contains('activeX') && divs[8].classList.contains('activeX'))
        return 1;  

    if(divs[2].classList.contains('activeX') && divs[4].classList.contains('activeX') && divs[6].classList.contains('activeX'))
        return 1;
    //VERIFICAÇÃO DE DIAGONAIS
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