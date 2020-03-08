let convertFahrenheirToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32) * (5/9)
    if (celsius <= 0){ 
        let isFreezing = true
    }
    return celsius
}
let fahOne = convertFahrenheirToCelsius(32)
let fahTwo = convertFahrenheirToCelsius(68)
console.log('fahOne : ', fahOne ,  "fahTwo : ", fahTwo)