let name = '  Marwen   '
// length prop
console.log(name.length)

//convert in upper case

console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

//Includes method

let password = 'abc123password2165'
console.log(password.includes('password'))

//Trim method to remove a white space
console.log(name.trim())

//challange area
//isValidPassword !! length more then 8 and it's contain the word password
let isValidPassword = (str) => {
 return str.length>8 && !str.includes('password')
}
console.log(isValidPassword('asqs'))
console.log(isValidPassword('dsfggfhjgfdxdfddy5165165'))
console.log(isValidPassword('dsfggfhjgfdxdpassword65165'))