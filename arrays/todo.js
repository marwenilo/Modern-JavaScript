const todos = ["Sleep","Eat","Repeat","And sometime you need to play "]

todos.splice(2,1)
todos.push('the new last todo')
todos.shift( )

console.log(`you have ${todos.length} todos`)

// console.log(`todo : ${todos[0]} and you need after that to : ${todos[todos.length-2]}`)
// console.log(todos)


todos.forEach(function(item,index){
    console.log(`${index+1}. ${item}`)
 
})


for (let i = 0; i<todos.length; i++){
    console.log(`${i+1}. ${todos[i]}`)
}