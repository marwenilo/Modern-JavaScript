let temp = 50 

if (temp >=60 && temp<=90){
console.log('it is pretty outside')
}else if (temp<=0 || temp>=120){
    console.log('do not go outside please keep your ass save')
} else{
    console.log("Eh, do what you want")
}
 /**************** */
 let isGuestOneVegan= false
 let isGuestTwoVegan = false

 if (isGuestOneVegan && isGuestTwoVegan){
     console.log("here is a vegan menu")

 } else if (isGuestOneVegan || isGuestTwoVegan){
     console.log('here is a vegan menu and other not vegan menu')

 } else {
     console.log('here is a not vegan menu')
 }