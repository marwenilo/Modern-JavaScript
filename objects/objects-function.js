let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}
   let getSummary = function(book){

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} page long`
    }
   }
   let bookSummary = getSummary(myBook)
   let otherBookSummary = getSummary(otherBook)
   console.log(bookSummary.pageCountSummary)
   //or 
   console.log(getSummary(myBook).pageCountSummary)


   //challenge

   //create fct take fahrenheit in and return object with all three
   let fahrenheit = 50
// let celsius = (fahrenheit - 32) * (5/9)
// console.log("celsius", celsius)
// let kelvin = celsius + 273.15
// console.log("kelvin", kelvin)

let temConvert = (temper)=>{

    let celsius = (temper - 32) * (5/9)

    let kelvin = celsius + 273.15

return {
    fahrenheit: `${temper}`,
    celsuis: ` ${celsius}`,
 kelvin:   ` ${kelvin}`
}
}
let tempConv = temConvert(fahrenheit)
console.log(tempConv)

