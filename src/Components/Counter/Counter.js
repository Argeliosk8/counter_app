import React from "react";
import CounterFunc from "./CounterFunc";
import Digit from "../Digit/Digit";
import styles from "./counter.module.css"

function Counter(){
    const digits = CounterFunc()
    
    function renderDigits(){         
        return Object.values(digits).map((digit)=>{
            return (<Digit digit={digit}/>)
        })
    }
    
    return (
        <div className={styles.counterdiv}>
            <Digit digit={<span class="material-symbols-outlined">timer</span>}/>
            {renderDigits()}
        </div>
    )
}

export default Counter;