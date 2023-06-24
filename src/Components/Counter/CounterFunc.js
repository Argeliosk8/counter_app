/*
import { useState, useEffect } from 'react';

function CounterFunc(){
  const [firstDigit, setFirstDigit] = useState(0)
  const [secondDigit, setSecondDigit] = useState(0)
  const [thirdDigit, setThirdDigit] = useState(0)
  const [fourthDigit, setFourthDigit] = useState(0)
  const [fifthDigit, setFifthDigit] = useState(0)
  const [sixthDigit, setSixthDigit] = useState(0)

  useEffect(()=>{      
    const interval = setInterval(()=>setFirstDigit((prev)=>prev + 1), 1000)
    if(firstDigit === 10){
        setFirstDigit(0)
        setSecondDigit((prev)=>prev + 1)
    }
    if(secondDigit === 10){
      setSecondDigit(0)
      setThirdDigit((prev)=>prev + 1)
    }
    if(thirdDigit === 10){
      setThirdDigit(0)
      setFourthDigit((prev)=>prev + 1)
    }
    if (fourthDigit === 10){
      setFourthDigit(0)
      setFifthDigit((prev)=>prev + 1)
    }
    if (fifthDigit === 10){
      setFifthDigit(0)
      setSixthDigit((prev)=>prev + 1)
    } if(sixthDigit === 10){
      setFirstDigit(0)
      setSecondDigit(0)
      setThirdDigit(0)
      setFourthDigit(0)
      setFifthDigit(0)
      setSixthDigit(0)
    }
    return ()=>clearInterval(interval)
}, [firstDigit])

const digits = {    
  sixthDigit: sixthDigit,
  fifthDigit: fifthDigit,
  fourthDigit: fourthDigit,
  thirdDigit: thirdDigit,
  secondDigit: secondDigit,
  firstDigit: firstDigit
}

  return digits
}

export default CounterFunc;

*/