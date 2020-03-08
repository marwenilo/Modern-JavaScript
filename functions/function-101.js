let greetUser = function () {
    console.log('welcome user!!')
} 

greetUser()
greetUser()
greetUser()



let square = function (num) {
   let result = num * num
   return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)





/****************/
let convertFahrenheirToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32) * (5/9)
    return celsius
}
let fahOne = convertFahrenheirToCelsius(32)
let fahTwo = convertFahrenheirToCelsius(68)
console.log('fahOne : ', fahOne ,  "fahTwo : ", fahTwo)