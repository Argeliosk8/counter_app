const digits = {    
    sixthDigit: 0,
    fifthDigit: 0,
    fourthDigit: 0,
    thirdDigit: 0,
    secondDigit: 0,
    firstDigit: -1
  }

function CounterFunct(){

if(digits.firstDigit >= -1){
    digits.firstDigit += 1
}

if(digits.firstDigit === 10){
    digits.firstDigit = 0
    digits.secondDigit += 1
}

if(digits.secondDigit === 10){
    digits.secondDigit = 0
    digits.thirdDigit += 1
}
if(digits.thirdDigit === 10){
    digits.thirdDigit = 0
    digits.fourthDigit += 1
}
if(digits.fourthDigit === 10){
    digits.fourthDigit = 0
    digits.fifthDigit += 1
}
if(digits.fifthDigit === 10){
    digits.fifthDigit = 0
    digits.sixthDigit += 1
}
if(digits.sixthDigit === 10){
    digits.firstDigit = 0
    digits.secondDigit = 0
    digits.thirdDigit = 0
    digits.fourthDigit = 0
    digits.fifthDigit = 0
    digits.sixthDigit = 0
}

  console.log(digits.firstDigit)
  return digits
}


export default CounterFunct;