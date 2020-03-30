const todos = [{
   todo:"Sleep",
   completed:true
                   },{
   todo:"Eat",
   completed:false
                   },{
   todo:"Repeat",
   completed:true
                   },{
   todo:"And sometime you need to play ",
   completed:false
                   }]

let count = 0
const isComplete = todos.filter(el=> !el.completed)
const summary = document.createElement('h2')

summary.textContent=`You have ${isComplete.length} todos left`
document.querySelector('body').appendChild(summary)
                   


// const p = document.querySelectorAll('p')

// p.forEach(el=>{
//    let parg = el.textContent.includes('Sleep')
//    parg? el.remove():el
// })
todos.map(el=> 
   // el.completed? 
   (
  test = document.createElement('p'),
  test.textContent = el.todo,
   document.querySelector('body').appendChild(test)
)
// :(
// null
// )
)