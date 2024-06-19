import React from "react";
import "./Container.css"
import Die from "./Die";
import {nanoid} from "nanoid"
export default function Container(){

    function allNewDice(){
        const arr=[]
        for(let i=0;i<10;i++){
            const random=Math.ceil(Math.random()*(6))
            arr.push({value:random,isheld:false,id:nanoid()})
        }
        return arr
    }
    
    const[state,setstate]=React.useState(allNewDice())

    function rollDice() {
        if(!tenzies){
                    setstate(oldDice => oldDice.map(die => {
            return (die.isheld? die: {...die,value: Math.ceil(Math.random() * 6)}) }))
        }
        else{
            settenzies(false)
            setstate(allNewDice())
        }
    }

    function hold(id){
        setstate(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isheld: !die.isheld} :
                die
        }))
   }

   const [tenzies,settenzies]=React.useState(false)

   React.useEffect(() => {
       let flag=true; 
       for(let i=0;i<10;i++){
           if(state[i].isheld===false || state[0].value!=state[i].value){
               flag=false
           } 
       }
       if(flag){
           settenzies(true)
          console.log("You Won")
       }   
    }
    ,
   [state])

    return(
        <div className="outer-container">
            {/* {tenzies && <Fireworks/>} */}
            <div className="inner-container">
                 <h1 className="game-head">Tenzies</h1>
                 <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                 <div className="column-container">
                    <div className="row-container">
                        <Die id={state[0].id} value={state[0].value} isheld={state[0].isheld} onClick={hold}/>
                        <Die id={state[1].id} value={state[1].value} isheld={state[1].isheld} onClick={hold}/>
                        <Die id={state[2].id} value={state[2].value} isheld={state[2].isheld} onClick={hold}/>
                        <Die id={state[3].id} value={state[3].value} isheld={state[3].isheld} onClick={hold}/>
                        <Die id={state[4].id} value={state[4].value} isheld={state[4].isheld} onClick={hold}/>
                    </div>
                    <div className="row-container">
                        <Die id={state[5].id} value={state[5].value} isheld={state[5].isheld} onClick={hold}/>
                        <Die id={state[6].id} value={state[6].value} isheld={state[6].isheld} onClick={hold}/>
                        <Die id={state[7].id} value={state[7].value} isheld={state[7].isheld} onClick={hold}/>
                        <Die id={state[8].id} value={state[8].value} isheld={state[8].isheld} onClick={hold}/>
                        <Die id={state[9].id} value={state[9].value} isheld={state[9].isheld} onClick={hold}/>
                    </div>
                 </div>
                 <button className="roll" onClick={rollDice}>{tenzies?"New Game":"ROLL"}</button>
            </div>
        </div>
    )
}