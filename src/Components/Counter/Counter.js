import React from "react";
//import CounterFunc from "./CounterFunc";
import Digit from "../Digit/Digit";
import styles from "./counter.module.css"
import CounterFunct from "./CounterFunct";

function Counter(){
    let digits = CounterFunct()
    
    function renderDigits(){         
        return Object.values(digits).map((digit, key)=>{
            return (<Digit key={key} digit={digit}/>)
        })
    }
    
    return (
        <div className={styles.counterdiv}>
            <Digit digit={<span className="material-symbols-outlined">timer</span>}/>
            {renderDigits()}
        </div>
    )
}

export default Counter;