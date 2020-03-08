let add = function(a, b, c){
    return a + b + c
}
let result = add(10, 1, 5)
console.log(result)

let getScoreText = function(name  = 'player', score = 0 ){
    return `Name: ${name} score: ${ score}`

}
let scoreText = getScoreText(undefined,500)
console.log(scoreText)


/******************************/

let getTip = function(total=100, tipPrecent=0.2){
    return `A ${tipPrecent*100}$ tip on $${total} would be $${total*tipPrecent}`
    
}

let tip = getTip(100,.9)
console.log(tip)
let name = "marwen"
let age = 25
console.log(`Hey my name is ${name} ! i am ${age} years old`)

