import React from "react";
import styles from "./digit.module.css"

function Digit({digit}){
    return (<div className={styles.digitdiv}><p>{digit}</p></div>)
}

export default Digit;