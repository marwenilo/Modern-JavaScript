let num = 103.971
console.log(num.toFixed(1))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let min = 0
let max = 1
let numR = Math.floor(Math.random() * (max - min + 1) ) + min

console.log(numR)

//guessing game
//fct take in perso guess generate a random and see if the guess right

let makeGuess=(num)=>{
    let min = 0
    let max = 20
    let numR = Math.floor(Math.random() * (max - min + 1) ) + min
    return numR === num
    
}
console.log(makeGuess(10))



