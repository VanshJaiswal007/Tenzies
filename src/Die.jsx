import React from "react";
import "./Dice.css"
export default function Die(props){
    return(
        <div className="dice-container" style={{
            backgroundColor:props.isheld?"#59E391":"white"
        }} onClick={() => props.onClick(props.id)}>
            {props.value}
        </div>
    )
}